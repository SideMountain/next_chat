webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./components/Login.js":
/*!*****************************!*\
  !*** ./components/Login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "C:\\env\\react\\next_chat\\components\\Login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Login = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Login, _Component);

  var _super = _createSuper(Login);

  function Login(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Login);

    _this = _super.call(this, props);
    _this.login = _this.login.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  } // ログイン処理


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Login, [{
    key: "login",
    value: function login() {
      var _this2 = this;

      var provider = new firebase__WEBPACK_IMPORTED_MODULE_8___default.a.auth.GoogleAuthProvider();
      var self = this;
      firebase__WEBPACK_IMPORTED_MODULE_8___default.a.auth().signInWithPopup(provider).then(function (result) {
        _this2.props.dispatch({
          type: 'UPDATE_USER',
          value: {
            login: true,
            user_name: result.user.displayName,
            address: result.user.email,
            data: _this2.props.data
          }
        });
      }, function () {
        _this2.go();
      });
    } // ログアウト処理

  }, {
    key: "logout",
    value: function logout() {
      console.log('logout');
      firebase__WEBPACK_IMPORTED_MODULE_8___default.a.auth().signOut();
      this.props.dispatch({
        type: 'UPDATE_USER',
        value: {
          login: false,
          user_name: '(click here!)',
          address: '',
          data: []
        }
      });
      this.props.onLogouted();
    }
  }, {
    key: "go",
    value: function go() {
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/home');
    } // レンダリング

  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        id: "login",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }
      }, __jsx("span", {
        onClick: this.login,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      }, "LOGIN"), this.props.user_name != null ? __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 49
        }
      }, this.props.user_name) : __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 81
        }
      }, "not login"));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Login = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function (state) {
  return state;
})(Login);
/* harmony default export */ __webpack_exports__["default"] = (Login);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwicHJvcHMiLCJsb2dpbiIsImJpbmQiLCJwcm92aWRlciIsImZpcmViYXNlIiwiYXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNlbGYiLCJzaWduSW5XaXRoUG9wdXAiLCJ0aGVuIiwicmVzdWx0IiwiZGlzcGF0Y2giLCJ0eXBlIiwidmFsdWUiLCJ1c2VyX25hbWUiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJhZGRyZXNzIiwiZW1haWwiLCJkYXRhIiwiZ28iLCJjb25zb2xlIiwibG9nIiwic2lnbk91dCIsIm9uTG9nb3V0ZWQiLCJSb3V0ZXIiLCJwdXNoIiwiQ29tcG9uZW50IiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0lBRU1BLEs7Ozs7O0FBRUYsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYSxNQUFLQSxLQUFMLENBQVdDLElBQVgseUdBQWI7QUFGZTtBQUdsQixHLENBRUQ7Ozs7OzRCQUNRO0FBQUE7O0FBQ0osVUFBSUMsUUFBUSxHQUFHLElBQUlDLCtDQUFRLENBQUNDLElBQVQsQ0FBY0Msa0JBQWxCLEVBQWY7QUFDQSxVQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBSCxxREFBUSxDQUFDQyxJQUFULEdBQWdCRyxlQUFoQixDQUFnQ0wsUUFBaEMsRUFBMENNLElBQTFDLENBQStDLFVBQUNDLE1BQUQsRUFBWTtBQUN2RCxjQUFJLENBQUNWLEtBQUwsQ0FBV1csUUFBWCxDQUFvQjtBQUNoQkMsY0FBSSxFQUFFLGFBRFU7QUFFaEJDLGVBQUssRUFBRTtBQUNIWixpQkFBSyxFQUFFLElBREo7QUFFSGEscUJBQVMsRUFBRUosTUFBTSxDQUFDSyxJQUFQLENBQVlDLFdBRnBCO0FBR0hDLG1CQUFPLEVBQUVQLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZRyxLQUhsQjtBQUlIQyxnQkFBSSxFQUFFLE1BQUksQ0FBQ25CLEtBQUwsQ0FBV21CO0FBSmQ7QUFGUyxTQUFwQjtBQVNILE9BVkQsRUFVRyxZQUFNO0FBQUMsY0FBSSxDQUFDQyxFQUFMO0FBQVcsT0FWckI7QUFXSCxLLENBRUQ7Ozs7NkJBQ1M7QUFDTEMsYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBbEIscURBQVEsQ0FBQ0MsSUFBVCxHQUFnQmtCLE9BQWhCO0FBQ0EsV0FBS3ZCLEtBQUwsQ0FBV1csUUFBWCxDQUFvQjtBQUNoQkMsWUFBSSxFQUFFLGFBRFU7QUFFaEJDLGFBQUssRUFBRTtBQUNIWixlQUFLLEVBQUUsS0FESjtBQUVIYSxtQkFBUyxFQUFFLGVBRlI7QUFHSEcsaUJBQU8sRUFBRSxFQUhOO0FBSUhFLGNBQUksRUFBRTtBQUpIO0FBRlMsT0FBcEI7QUFTQSxXQUFLbkIsS0FBTCxDQUFXd0IsVUFBWDtBQUNIOzs7eUJBRUk7QUFDREMseURBQU0sQ0FBQ0MsSUFBUCxDQUFZLE9BQVo7QUFDSCxLLENBRUQ7Ozs7NkJBQ1M7QUFDTCxhQUNJO0FBQUssVUFBRSxFQUFDLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU0sZUFBTyxFQUFFLEtBQUt6QixLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBSUssS0FBS0QsS0FBTCxDQUFXYyxTQUFYLElBQXdCLElBQXhCLEdBQStCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSSxLQUFLZCxLQUFMLENBQVdjLFNBQWYsQ0FBL0IsR0FBK0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKcEUsQ0FESjtBQVFIOzs7O0VBdERlYSwrQzs7QUF3RHBCNUIsS0FBSyxHQUFHNkIsMkRBQU8sQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBWDtBQUFBLENBQUQsQ0FBUCxDQUEwQjlCLEtBQTFCLENBQVI7QUFDZUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxvZ2luLmpzLmNmNGIxMDdiZjk2M2M3NjZjYzQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL3N0b3JhZ2UnO1xyXG5cclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMubG9naW4gPSB0aGlzLmxvZ2luLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44Ot44Kw44Kk44Oz5Yem55CGXHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgICBsZXQgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1VQREFURV9VU0VSJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9naW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9uYW1lOiByZXN1bHQudXNlci5kaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiByZXN1bHQudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnByb3BzLmRhdGFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgKCkgPT4ge3RoaXMuZ28oKTt9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDjg63jgrDjgqLjgqbjg4jlh6bnkIZcclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9nb3V0Jyk7XHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKTtcclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1VQREFURV9VU0VSJyxcclxuICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICAgIGxvZ2luOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVzZXJfbmFtZTogJyhjbGljayBoZXJlISknLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczogJycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkxvZ291dGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ28oKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9ob21lJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44Os44Oz44OA44Oq44Oz44KwXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImxvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLmxvZ2lufT5cclxuICAgICAgICAgICAgICAgICAgICBMT0dJTlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMudXNlcl9uYW1lICE9IG51bGwgPyA8cD57dGhpcy5wcm9wcy51c2VyX25hbWV9PC9wPiA6IDxwPm5vdCBsb2dpbjwvcD59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuTG9naW4gPSBjb25uZWN0KChzdGF0ZSkgPT4gc3RhdGUpKExvZ2luKTtcclxuZXhwb3J0IGRlZmF1bHQgTG9naW47Il0sInNvdXJjZVJvb3QiOiIifQ==