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

        console.log('now login');
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
    } // レンダリング

  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        id: "login",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }
      }, __jsx("span", {
        onClick: this.login,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }
      }, "LOGIN"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwicHJvcHMiLCJsb2dpbiIsImJpbmQiLCJwcm92aWRlciIsImZpcmViYXNlIiwiYXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNlbGYiLCJzaWduSW5XaXRoUG9wdXAiLCJ0aGVuIiwicmVzdWx0IiwiZGlzcGF0Y2giLCJ0eXBlIiwidmFsdWUiLCJ1c2VyX25hbWUiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJhZGRyZXNzIiwiZW1haWwiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNpZ25PdXQiLCJvbkxvZ291dGVkIiwiQ29tcG9uZW50IiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsSzs7Ozs7QUFFRixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLE1BQUtBLEtBQUwsQ0FBV0MsSUFBWCx5R0FBYjtBQUZlO0FBR2xCLEcsQ0FFRDs7Ozs7NEJBQ1E7QUFBQTs7QUFDSixVQUFJQyxRQUFRLEdBQUcsSUFBSUMsK0NBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxrQkFBbEIsRUFBZjtBQUNBLFVBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0FILHFEQUFRLENBQUNDLElBQVQsR0FBZ0JHLGVBQWhCLENBQWdDTCxRQUFoQyxFQUEwQ00sSUFBMUMsQ0FBK0MsVUFBQ0MsTUFBRCxFQUFZO0FBQ3ZELGNBQUksQ0FBQ1YsS0FBTCxDQUFXVyxRQUFYLENBQW9CO0FBQ2hCQyxjQUFJLEVBQUUsYUFEVTtBQUVoQkMsZUFBSyxFQUFFO0FBQ0haLGlCQUFLLEVBQUUsSUFESjtBQUVIYSxxQkFBUyxFQUFFSixNQUFNLENBQUNLLElBQVAsQ0FBWUMsV0FGcEI7QUFHSEMsbUJBQU8sRUFBRVAsTUFBTSxDQUFDSyxJQUFQLENBQVlHLEtBSGxCO0FBSUhDLGdCQUFJLEVBQUUsTUFBSSxDQUFDbkIsS0FBTCxDQUFXbUI7QUFKZDtBQUZTLFNBQXBCOztBQVNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0gsT0FYRDtBQVlILEssQ0FFRDs7Ozs2QkFDUztBQUNMRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0FqQixxREFBUSxDQUFDQyxJQUFULEdBQWdCaUIsT0FBaEI7QUFDQSxXQUFLdEIsS0FBTCxDQUFXVyxRQUFYLENBQW9CO0FBQ2hCQyxZQUFJLEVBQUUsYUFEVTtBQUVoQkMsYUFBSyxFQUFFO0FBQ0haLGVBQUssRUFBRSxLQURKO0FBRUhhLG1CQUFTLEVBQUUsZUFGUjtBQUdIRyxpQkFBTyxFQUFFLEVBSE47QUFJSEUsY0FBSSxFQUFFO0FBSkg7QUFGUyxPQUFwQjtBQVNBLFdBQUtuQixLQUFMLENBQVd1QixVQUFYO0FBQ0gsSyxDQUVEOzs7OzZCQUNTO0FBQ0wsYUFDSTtBQUFLLFVBQUUsRUFBQyxPQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFNLGVBQU8sRUFBRSxLQUFLdEIsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixDQURKO0FBT0g7Ozs7RUFsRGV1QiwrQzs7QUFvRHBCekIsS0FBSyxHQUFHMEIsMkRBQU8sQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBWDtBQUFBLENBQUQsQ0FBUCxDQUEwQjNCLEtBQTFCLENBQVI7QUFDZUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxvZ2luLmpzLjQ0MzIzZTg3NzllZDcwMmFjOTU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL3N0b3JhZ2UnO1xyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmxvZ2luID0gdGhpcy5sb2dpbi5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOODreOCsOOCpOODs+WHpueQhlxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgICAgbGV0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoUG9wdXAocHJvdmlkZXIpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdVUERBVEVfVVNFUicsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2luOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfbmFtZTogcmVzdWx0LnVzZXIuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogcmVzdWx0LnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5wcm9wcy5kYXRhXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm93IGxvZ2luJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44Ot44Kw44Ki44Km44OI5Yem55CGXHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ291dCcpO1xyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdVUERBVEVfVVNFUicsXHJcbiAgICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICBsb2dpbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB1c2VyX25hbWU6ICcoY2xpY2sgaGVyZSEpJyxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6ICcnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucHJvcHMub25Mb2dvdXRlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOODrOODs+ODgOODquODs+OCsFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5sb2dpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgTE9HSU5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5Mb2dpbiA9IGNvbm5lY3QoKHN0YXRlKSA9PiBzdGF0ZSkoTG9naW4pO1xyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwic291cmNlUm9vdCI6IiJ9