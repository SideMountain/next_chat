webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_UserList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/UserList */ "./components/UserList.js");
/* harmony import */ var _components_TalkList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/TalkList */ "./components/TalkList.js");
/* harmony import */ var _static_UserListStyle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/UserListStyle */ "./static/UserListStyle.js");





var _jsxFileName = "C:\\env\\react\\next_chat\\components\\Home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var Home = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Home, _Component);

  var _super = _createSuper(Home);

  function Home(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    return _super.call(this, props); // console.log('usernamename:'+this.props.user_name);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        header: this.props.user_name,
        title: "home",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }
      }, _static_UserListStyle__WEBPACK_IMPORTED_MODULE_12__["default"], __jsx("div", {
        "class": "tabs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }
      }, __jsx("input", {
        id: "home",
        type: "radio",
        name: "tab_item",
        checked: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }
      }), __jsx("input", {
        id: "talk",
        type: "radio",
        name: "tab_item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }
      }), __jsx("div", {
        "class": "tab_content",
        id: "home_content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }
      }, __jsx("div", {
        "class": "tab_content_description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 25
        }
      }, __jsx("p", {
        "class": "c-txtsp",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 29
        }
      }, __jsx(_components_UserList__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 33
        }
      })))), __jsx("div", {
        "class": "tab_content",
        id: "talk_content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }
      }, __jsx("div", {
        "class": "tab_content_description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 25
        }
      }, __jsx("p", {
        "class": "c-txtsp",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 29
        }
      }, __jsx(_components_TalkList__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 33
        }
      })))), __jsx("label", {
        "class": "tab_item tab_home",
        "for": "home",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }
      }, "Home"), __jsx("label", {
        "class": "tab_item tab_talk",
        "for": "talk",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }
      }, "Talk")));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Home = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(function (state) {
  return state;
})(Home);
/* harmony default export */ __webpack_exports__["default"] = (Home);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwidXNlcl9uYW1lIiwidXNlckxpc3RTdHlsZSIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxJOzs7OztBQUNGLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1RBLEtBRFMsR0FFZjtBQUNIOzs7OzZCQUVRO0FBQ0wsYUFDSSxNQUFDLDBEQUFEO0FBQVEsY0FBTSxFQUFFLEtBQUtBLEtBQUwsQ0FBV0MsU0FBM0I7QUFBc0MsYUFBSyxFQUFDLE1BQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDS0MsOERBREwsRUFFSTtBQUFLLGlCQUFNLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8sVUFBRSxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDLE9BQXRCO0FBQThCLFlBQUksRUFBQyxVQUFuQztBQUE4QyxlQUFPLE1BQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixFQUVJO0FBQU8sVUFBRSxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDLE9BQXRCO0FBQThCLFlBQUksRUFBQyxVQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosRUFHSTtBQUFLLGlCQUFNLGFBQVg7QUFBeUIsVUFBRSxFQUFDLGNBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFNLHlCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFHLGlCQUFNLFNBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBREosQ0FESixDQUhKLEVBVUk7QUFBSyxpQkFBTSxhQUFYO0FBQXlCLFVBQUUsRUFBQyxjQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBTSx5QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBRyxpQkFBTSxTQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQURKLENBREosQ0FWSixFQWlCSTtBQUFPLGlCQUFNLG1CQUFiO0FBQWlDLGVBQUksTUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQkosRUFrQkk7QUFBTyxpQkFBTSxtQkFBYjtBQUFpQyxlQUFJLE1BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbEJKLENBRkosQ0FESjtBQXlCSDs7OztFQWhDY0MsK0M7O0FBa0NuQkosSUFBSSxHQUFHSywyREFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFYO0FBQUEsQ0FBRCxDQUFQLENBQTBCTixJQUExQixDQUFQO0FBQ2VBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxob21lLmpzLjg1M2JmYWYzMWRhYjJiZTEzNmJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL3N0b3JhZ2UnO1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBVc2VyTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJMaXN0JztcclxuaW1wb3J0IFRhbGtMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvVGFsa0xpc3QnO1xyXG5pbXBvcnQgdXNlckxpc3RTdHlsZSBmcm9tICcuLi9zdGF0aWMvVXNlckxpc3RTdHlsZSc7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd1c2VybmFtZW5hbWU6Jyt0aGlzLnByb3BzLnVzZXJfbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQgaGVhZGVyPXt0aGlzLnByb3BzLnVzZXJfbmFtZX0gdGl0bGU9XCJob21lXCI+XHJcbiAgICAgICAgICAgICAgICB7dXNlckxpc3RTdHlsZX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiaG9tZVwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0YWJfaXRlbVwiIGNoZWNrZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0YWxrXCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cInRhYl9pdGVtXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiX2NvbnRlbnRcIiBpZD1cImhvbWVfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiX2NvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYy10eHRzcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyTGlzdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiX2NvbnRlbnRcIiBpZD1cInRhbGtfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiX2NvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYy10eHRzcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWxrTGlzdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0YWJfaXRlbSB0YWJfaG9tZVwiIGZvcj1cImhvbWVcIj5Ib21lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0YWJfaXRlbSB0YWJfdGFsa1wiIGZvcj1cInRhbGtcIj5UYWxrPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbkhvbWUgPSBjb25uZWN0KChzdGF0ZSkgPT4gc3RhdGUpKEhvbWUpO1xyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=