webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_UserList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UserList */ "./components/UserList.js");
/* harmony import */ var _components_TalkList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TalkList */ "./components/TalkList.js");
/* harmony import */ var _static_UserListStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/UserListStyle */ "./static/UserListStyle.js");
var _this = undefined,
    _jsxFileName = "C:\\env\\react\\next_chat\\pages\\home.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    header: "{this.props.user_name}",
    title: "home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, _static_UserListStyle__WEBPACK_IMPORTED_MODULE_4__["default"], __jsx("div", {
    "class": "tabs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("input", {
    id: "home",
    type: "radio",
    name: "tab_item",
    checked: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("input", {
    id: "talk",
    type: "radio",
    name: "tab_item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx("div", {
    "class": "tab_content",
    id: "home_content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    "class": "tab_content_description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("p", {
    "class": "c-txtsp",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx(_components_UserList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  })))), __jsx("div", {
    "class": "tab_content",
    id: "talk_content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("div", {
    "class": "tab_content_description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx("p", {
    "class": "c-txtsp",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx(_components_TalkList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  })))), __jsx("label", {
    "class": "tab_item tab_home",
    "for": "home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Home"), __jsx("label", {
    "class": "tab_item tab_talk",
    "for": "talk",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "Talk")));
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lLmpzIl0sIm5hbWVzIjpbInVzZXJMaXN0U3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlO0FBQUEsU0FDWCxNQUFDLDBEQUFEO0FBQVEsVUFBTSxFQUFDLHdCQUFmO0FBQXdDLFNBQUssRUFBQyxNQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLDZEQURMLEVBRUk7QUFBSyxhQUFNLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sTUFBRSxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLE9BQXRCO0FBQThCLFFBQUksRUFBQyxVQUFuQztBQUE4QyxXQUFPLE1BQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQU8sTUFBRSxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLE9BQXRCO0FBQThCLFFBQUksRUFBQyxVQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFLLGFBQU0sYUFBWDtBQUF5QixNQUFFLEVBQUMsY0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBTSx5QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFNLFNBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosQ0FESixDQUhKLEVBVUk7QUFBSyxhQUFNLGFBQVg7QUFBeUIsTUFBRSxFQUFDLGNBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQU0seUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBTSxTQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBREosQ0FWSixFQWlCSTtBQUFPLGFBQU0sbUJBQWI7QUFBaUMsV0FBSSxNQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJKLEVBa0JJO0FBQU8sYUFBTSxtQkFBYjtBQUFpQyxXQUFJLE1BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkosQ0FGSixDQURXO0FBQUEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaG9tZS5qcy5jZTViMWVjNTJhZDRhMWQxMzExNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBVc2VyTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJMaXN0JztcclxuaW1wb3J0IFRhbGtMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvVGFsa0xpc3QnO1xyXG5pbXBvcnQgdXNlckxpc3RTdHlsZSBmcm9tICcuLi9zdGF0aWMvVXNlckxpc3RTdHlsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgICA8TGF5b3V0IGhlYWRlcj1cInt0aGlzLnByb3BzLnVzZXJfbmFtZX1cIiB0aXRsZT1cImhvbWVcIj5cclxuICAgICAgICB7dXNlckxpc3RTdHlsZX1cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFic1wiPlxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJob21lXCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cInRhYl9pdGVtXCIgY2hlY2tlZCAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0YWxrXCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cInRhYl9pdGVtXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYl9jb250ZW50XCIgaWQ9XCJob21lX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJfY29udGVudF9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYy10eHRzcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VXNlckxpc3QgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJfY29udGVudFwiIGlkPVwidGFsa19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiX2NvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImMtdHh0c3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhbGtMaXN0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0YWJfaXRlbSB0YWJfaG9tZVwiIGZvcj1cImhvbWVcIj5Ib21lPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGFiX2l0ZW0gdGFiX3RhbGtcIiBmb3I9XCJ0YWxrXCI+VGFsazwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuKSJdLCJzb3VyY2VSb290IjoiIn0=