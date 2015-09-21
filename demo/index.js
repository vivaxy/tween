(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @since 2015-09-21 13:50
 * @author vivaxy
 */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _srcTweenJs = require('../src/tween.js');

var _srcTweenJs2 = _interopRequireDefault(_srcTweenJs);

var ele = document.querySelector('.test'),
    topFrom = 90,
    topTo = 0,
    leftFrom = 90,
    leftTo = 0,
    vertical = undefined,
    horizon = undefined;

var toggleTop = function toggleTop() {
    var temp = topTo;
    topTo = topFrom;
    topFrom = temp;
    vertical = new _srcTweenJs2['default'](ele).animate({
        style: 'top',
        from: topFrom,
        to: topTo,
        duration: 1000,
        getValue: function getValue(v) {
            return v + '%';
        }
    }).on('end', toggleTop).start();
};

var toggleLeft = function toggleLeft() {
    var temp = leftTo;
    leftTo = leftFrom;
    leftFrom = temp;
    horizon = new _srcTweenJs2['default'](ele).animate({
        style: 'left',
        from: leftFrom,
        to: leftTo,
        duration: 1357,
        getValue: function getValue(v) {
            return v + '%';
        }
    }).on('end', toggleLeft).start();
};

toggleTop();
toggleLeft();

},{"../src/tween.js":3}],2:[function(require,module,exports){
/**
 * @since 15-09-02 10:25
 * @author vivaxy
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EventEmitter = (function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.events = {};
    }

    /**
     *
     * @param event
     * @param callback
     * @returns {EventEmitter}
     */

    _createClass(EventEmitter, [{
        key: 'on',
        value: function on(event, callback) {
            if (!this.events[event]) {
                this.events[event] = [];
            }
            this.events[event].push(callback);
            return this;
        }

        /**
         *
         * @param event
         * @returns {EventEmitter}
         */
    }, {
        key: 'emit',
        value: function emit(event) {
            var callbacks = this.events[event],
                _this = this,
                _arguments = arguments;
            if (callbacks) {
                callbacks.forEach(function (callback) {
                    callback.apply(_this, Array.prototype.slice.call(_arguments, 1));
                });
            }
            return this;
        }

        /**
         *
         * @param event
         * @param callback
         * @returns {EventEmitter}
         */
    }, {
        key: 'off',
        value: function off(event, callback) {
            if (this.events[event] && callback) {
                this.events[event].splice(this.events[event].indexOf(callback), 1);
            } else {
                this.events[event] = [];
            }
            return this;
        }
    }]);

    return EventEmitter;
})();

exports['default'] = EventEmitter;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
/**
 * @since 15-09-02 16:25
 * @author vivaxy
 */
'use strict';

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
Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _eventEmitterSrcEventEmitterJs = require('../event-emitter/src/event-emitter.js');

var _eventEmitterSrcEventEmitterJs2 = _interopRequireDefault(_eventEmitterSrcEventEmitterJs);

/**
 * @param {Object} element - target element
 * @constructor
 */

var Tween = (function (_EventEmitter) {
    _inherits(Tween, _EventEmitter);

    function Tween(element) {
        _classCallCheck(this, Tween);

        _get(Object.getPrototypeOf(Tween.prototype), 'constructor', this).call(this, arguments);
        this.element = element;
        // this.style = undefined;
        // this.from = undefined;
        // this.to = undefined;
        // this.duration = undefined;
        // this.getValue = undefined;

        // this._beginTime = 0;
        this._events = {};
        this._animating = false;
    }

    /**
     *
     * @param options
     * @returns {Tween}
     */

    _createClass(Tween, [{
        key: 'animate',
        value: function animate(options) {
            this.style = options.style;
            this.from = options.from;
            this.to = options.to;
            this.duration = options.duration;
            this.getValue = options.getValue || function (v) {
                return v;
            };
            return this;
        }

        /**
         * play it
         * @returns {Tween}
         */
    }, {
        key: 'start',
        value: function start() {
            if (!this._animating) {
                this._animating = true;
                this._beginTime = new Date().getTime();
                this._loop();
            }
            return this;
        }

        /**
         *
         * @returns {Tween}
         * @private
         */
    }, {
        key: '_loop',
        value: function _loop() {
            var now = new Date().getTime();
            if (this._animating) {
                if (now < this._beginTime + this.duration) {
                    var value = this.from + (this.to - this.from) * (now - this._beginTime) / this.duration;
                    this.element.style[this.style] = this.getValue(value);
                    this.emit('frame', value);
                    window.requestAnimationFrame(this._loop.bind(this));
                } else {
                    // make sure final style
                    this.element.style[this.style] = this.getValue(this.to);
                    this.emit('end');
                }
            }
        }

        /**
         * pause
         */
    }, {
        key: 'pause',
        value: function pause() {
            this._animating = false;
            var elapsed = new Date().getTime() - this._beginTime;
            this.from = this.from + (this.to - this.from) * elapsed / this.duration;
            this.duration = this.duration - elapsed;
            return this;
        }
    }]);

    return Tween;
})(_eventEmitterSrcEventEmitterJs2['default']);

exports['default'] = Tween;
module.exports = exports['default'];

},{"../event-emitter/src/event-emitter.js":2}]},{},[1]);
