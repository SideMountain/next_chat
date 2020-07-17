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
          lineNumber: 56,
          columnNumber: 13
        }
      }, __jsx("span", {
        onClick: this.login,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }
      }, "LOGIN"), this.props.user_name != null ? __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 49
        }
      }, this.props.user_name) : __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwicHJvcHMiLCJsb2dpbiIsImJpbmQiLCJwcm92aWRlciIsImZpcmViYXNlIiwiYXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNlbGYiLCJzaWduSW5XaXRoUG9wdXAiLCJ0aGVuIiwicmVzdWx0IiwiZGlzcGF0Y2giLCJ0eXBlIiwidmFsdWUiLCJ1c2VyX25hbWUiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJhZGRyZXNzIiwiZW1haWwiLCJkYXRhIiwiZ28iLCJjb25zb2xlIiwibG9nIiwic2lnbk91dCIsIm9uTG9nb3V0ZWQiLCJSb3V0ZXIiLCJwdXNoIiwiQ29tcG9uZW50IiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0lBRU1BLEs7Ozs7O0FBRUYsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYSxNQUFLQSxLQUFMLENBQVdDLElBQVgseUdBQWI7QUFGZTtBQUdsQixHLENBRUQ7Ozs7OzRCQUNRO0FBQUE7O0FBQ0osVUFBSUMsUUFBUSxHQUFHLElBQUlDLCtDQUFRLENBQUNDLElBQVQsQ0FBY0Msa0JBQWxCLEVBQWY7QUFDQSxVQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBSCxxREFBUSxDQUFDQyxJQUFULEdBQWdCRyxlQUFoQixDQUFnQ0wsUUFBaEMsRUFBMENNLElBQTFDLENBQStDLFVBQUNDLE1BQUQsRUFBWTtBQUN2RCxjQUFJLENBQUNWLEtBQUwsQ0FBV1csUUFBWCxDQUFvQjtBQUNoQkMsY0FBSSxFQUFFLGFBRFU7QUFFaEJDLGVBQUssRUFBRTtBQUNIWixpQkFBSyxFQUFFLElBREo7QUFFSGEscUJBQVMsRUFBRUosTUFBTSxDQUFDSyxJQUFQLENBQVlDLFdBRnBCO0FBR0hDLG1CQUFPLEVBQUVQLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZRyxLQUhsQjtBQUlIQyxnQkFBSSxFQUFFLE1BQUksQ0FBQ25CLEtBQUwsQ0FBV21CO0FBSmQ7QUFGUyxTQUFwQjs7QUFTQSxjQUFJLENBQUNDLEVBQUw7QUFDSCxPQVhEO0FBWUgsSyxDQUVEOzs7OzZCQUNTO0FBQ0xDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQWxCLHFEQUFRLENBQUNDLElBQVQsR0FBZ0JrQixPQUFoQjtBQUNBLFdBQUt2QixLQUFMLENBQVdXLFFBQVgsQ0FBb0I7QUFDaEJDLFlBQUksRUFBRSxhQURVO0FBRWhCQyxhQUFLLEVBQUU7QUFDSFosZUFBSyxFQUFFLEtBREo7QUFFSGEsbUJBQVMsRUFBRSxlQUZSO0FBR0hHLGlCQUFPLEVBQUUsRUFITjtBQUlIRSxjQUFJLEVBQUU7QUFKSDtBQUZTLE9BQXBCO0FBU0EsV0FBS25CLEtBQUwsQ0FBV3dCLFVBQVg7QUFDSDs7O3lCQUVJO0FBQ0RDLHlEQUFNLENBQUNDLElBQVAsQ0FBWSxPQUFaO0FBQ0gsSyxDQUVEOzs7OzZCQUNTO0FBQ0wsYUFDSTtBQUFLLFVBQUUsRUFBQyxPQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFNLGVBQU8sRUFBRSxLQUFLekIsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUlLLEtBQUtELEtBQUwsQ0FBV2MsU0FBWCxJQUF3QixJQUF4QixHQUErQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUksS0FBS2QsS0FBTCxDQUFXYyxTQUFmLENBQS9CLEdBQStEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSnBFLENBREo7QUFRSDs7OztFQXZEZWEsK0M7O0FBeURwQjVCLEtBQUssR0FBRzZCLDJEQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQVg7QUFBQSxDQUFELENBQVAsQ0FBMEI5QixLQUExQixDQUFSO0FBQ2VBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxsb2dpbi5qcy5mOTkxYTQ3ZWE3NDIzN2I5OTJlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcclxuXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmxvZ2luID0gdGhpcy5sb2dpbi5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOODreOCsOOCpOODs+WHpueQhlxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgICAgbGV0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoUG9wdXAocHJvdmlkZXIpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdVUERBVEVfVVNFUicsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2luOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfbmFtZTogcmVzdWx0LnVzZXIuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogcmVzdWx0LnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5wcm9wcy5kYXRhXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmdvKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44Ot44Kw44Ki44Km44OI5Yem55CGXHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ291dCcpO1xyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdVUERBVEVfVVNFUicsXHJcbiAgICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICBsb2dpbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB1c2VyX25hbWU6ICcoY2xpY2sgaGVyZSEpJyxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6ICcnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucHJvcHMub25Mb2dvdXRlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvKCkge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvaG9tZScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOODrOODs+ODgOODquODs+OCsFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5sb2dpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgTE9HSU5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnVzZXJfbmFtZSAhPSBudWxsID8gPHA+e3RoaXMucHJvcHMudXNlcl9uYW1lfTwvcD4gOiA8cD5ub3QgbG9naW48L3A+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbkxvZ2luID0gY29ubmVjdCgoc3RhdGUpID0+IHN0YXRlKShMb2dpbik7XHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJzb3VyY2VSb290IjoiIn0=