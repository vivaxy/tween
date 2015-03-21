/**
 * @since 150315 11:11
 * @author vivaxy
 */

/**
 * usage:
 *
 * new Tween(element)
 *     .animate({
 *         style: 'top',
 *         from: 0,
 *         to: 200,
 *         getValue: function (v) {
 *             return v + 'px';
 *         },
 *         duration: 1000
 *     })
 *     .on('end', function () {
 *         console.log('end');
 *     })
 *     .on('frame', function (v) {
 *         console.log('top: ' + v + 'px;');
 *     })
 *     .start()
 *     .pause();
 */

/**
 * @param {Object} element - target element
 * @constructor
 */
var Tween = function (element) {

    this.element = element;
    // this.style = undefined;
    // this.from = undefined;
    // this.to = undefined;
    // this.duration = undefined;
    // this.getValue = undefined;

    // this._beginTime = 0;
    this._events = {};
    this._animating = false;
}, p = Tween.prototype;

/**
 *
 * @param event
 * @param callback
 * @returns {Tween}
 */
p.on = function (event, callback) {
    if (!this._events[event]) {
        this._events[event] = [];
    }
    this._events[event].push(callback);
    return this;
};

/**
 *
 * @param options
 * @returns {Tween}
 */
p.animate = function (options) {
    this.style = options.style;
    this.from = options.from;
    this.to = options.to;
    this.duration = options.duration;
    this.getValue = options.getValue || function (v) {
        return v;
    };
    return this;
};

/**
 * play it
 * @returns {Tween}
 */
p.start = function () {
    if (!this._animating) {
        this._animating = true;
        this._beginTime = new Date().getTime();
        this._loop();
    }
    return this;
};

/**
 *
 * @param event
 * @param [data]
 * @returns {Tween}
 * @private
 */
p._fire = function (event, data) {
    var callbacks = this._events[event];
    if (callbacks) {
        callbacks.forEach(function (callback) {
            callback(data);
        });
    }
    return this;
};

/**
 *
 * @returns {Tween}
 * @private
 */
p._loop = function () {
    var now = new Date().getTime();
    if (this._animating) {
        if (now < this._beginTime + this.duration) {
            var value = this.from + (this.to - this.from) * (now - this._beginTime) / this.duration;
            this.element.style[this.style] = this.getValue(value);
            this._fire('frame', value);
            window.requestAnimationFrame(this._loop.bind(this));
        } else {
            // make sure final style
            this.element.style[this.style] = this.getValue(this.to);
            this._fire('end');
        }
    }
};

/**
 * pause
 */
p.pause = function () {
    this._animating = false;
    var elapsed = new Date().getTime() - this._beginTime;
    this.from = this.from + (this.to - this.from) * elapsed / this.duration;
    this.duration = this.duration - elapsed;
    return this;
};
