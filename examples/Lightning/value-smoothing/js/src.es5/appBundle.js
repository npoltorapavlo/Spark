"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.appBundle = factory();
})(void 0, function () {
  'use strict';

  var MyApp =
  /*#__PURE__*/
  function (_ux$App) {
    _inherits(MyApp, _ux$App);

    function MyApp() {
      _classCallCheck(this, MyApp);

      return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
    }

    _createClass(MyApp, [{
      key: "_init",
      value: function _init() {
        var myAnimation = this.tag('LilLightning').animation({
          duration: 2,
          repeat: -1,
          actions: [{
            p: 'y',
            v: {
              0: {
                v: -200,
                sm: 0.8,
                s: 0
              },
              0.1: {
                v: 0,
                sm: 0.1,
                s: 0
              },
              0.2: {
                v: -120,
                sm: 0.8,
                s: 0
              },
              0.3: {
                v: 0,
                sm: 0.1,
                s: 0
              },
              0.4: {
                v: -60,
                sm: 0.8,
                s: 0
              },
              0.5: {
                v: 0,
                sm: 0.1,
                s: 0
              },
              0.6: {
                v: -30,
                sm: 0.8,
                s: 0
              },
              0.7: {
                v: 0,
                sm: 0.1,
                s: 0
              },
              0.8: {
                v: -10,
                sm: 0.8,
                s: 0
              },
              0.9: {
                v: 0,
                sm: 0.1,
                s: 0
              },
              1: {
                v: 0,
                sm: 0.8
              }
            }
          }]
        });
        myAnimation.start();
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Wrapper: {
            x: 300,
            y: 300,
            LilLightning: {
              src: 'https://www.sparkui.org/examples/gallery/images/ball.png'
            }
          }
        };
      }
    }]);

    return MyApp;
  }(ux.App);

  MyApp.COLORS = {
    BACKGROUND: 0xff282e32
  };
  return MyApp;
});