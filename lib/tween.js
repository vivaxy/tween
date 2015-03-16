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
 *         value: function (v) {
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
 *     .start();
 */
(function (global) {
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
        // this.value = undefined;

        // this._beginTime = 0;
        this._events = {};
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
        this.value = options.value || function (v) {
            return v;
        };
        return this;
    };

    /**
     * play it
     * @returns {Tween}
     */
    p.start = function () {
        this._beginTime = new Date().getTime();
        this._loop();
        return this;
    };

    /**
     *
     * @param event
     * @param [data]
     * @private
     */
    p._fire = function (event, data) {
        var callbacks = this._events[event];
        if (callbacks) {
            callbacks.forEach(function (callback) {
                callback(data);
            });
        }
    };

    /**
     *
     * @returns {Tween}
     * @private
     */
    p._loop = function () {
        var now = new Date().getTime();
        if (now < this._beginTime + this.duration) {
            var v = this.from + (this.to - this.from) / this.duration * (now - this._beginTime);
            this.element.style[this.style] = this.value(v);
            this._fire('frame', v);
            global.requestAnimationFrame(this._loop.bind(this));
        } else {
            // make sure final style
            this.element.style[this.style] = this.value(this.to);
            this._fire('end');
        }
    };

    global.Tween = global.Tween || Tween;

    //if (typeof exports === 'object') {
    //    module.exports = Tween;
    //}

})(window);