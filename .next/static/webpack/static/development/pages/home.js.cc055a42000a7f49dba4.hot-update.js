webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./components/UserList.js":
/*!********************************!*\
  !*** ./components/UserList.js ***!
  \********************************/
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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "C:\\env\\react\\next_chat\\components\\UserList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var UserList = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(UserList, _Component);

  var _super = _createSuper(UserList);

  function UserList(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserList);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "style", {
      fontSize: '12pt',
      padding: '5px 10px'
    });

    _this.state = {
      data: [],
      activeUserData: []
    };

    _this.getUserList();

    console.log('徹');
    return _this;
  } // Firebaseからのデータ取得


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserList, [{
    key: "getUserList",
    value: function getUserList() {
      var _this2 = this;

      var db = firebase__WEBPACK_IMPORTED_MODULE_8___default.a.database();
      var ref = db.ref('friend_info/1');
      var self = this;
      ref.orderByKey().on('value', function (snapshot) {
        console.log('come on');
        self.setState({
          data: snapshot.val()
        });
        console.log('data:' + _this2.state.data);

        _this2.getActiveUserList();
      });
    } // アクティブユーザのみデータ取得

  }, {
    key: "getActiveUserList",
    value: function getActiveUserList() {
      console.log('cononononon' + this.state.data.length);
      var activeUserList = [];
      var db = firebase__WEBPACK_IMPORTED_MODULE_8___default.a.database();
      var ref;
      var self = this;

      for (var i in this.state.data) {
        if (this.state.data[i].active_flag == 0) {
          break;
        }

        ref = db.ref('user_info/' + i);
        ref.orderByKey().on('value', function (snapshot) {
          activeUserList.push(snapshot.val());
          self.setState({
            activeUserData: activeUserList
          });
        });
      }
    } // データ表示の生成

  }, {
    key: "createUserList",
    value: function createUserList() {
      var result = [];

      if (this.state.activeUserData == null || this.state.activeUserData.length == 0) {
        return [__jsx("tr", {
          key: "0",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 21
          }
        }, __jsx("th", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 33
          }
        }, "NO DATA."))];
      }

      for (var i in this.state.activeUserData) {
        result.push(__jsx("tr", {
          "data-tag": this.state.activeUserData[i].id,
          onClick: this.go.bind(null, this.state.activeUserData[i].id),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 17
          }
        }, __jsx("td", {
          "class": "user_image",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 21
          }
        }, "image"), __jsx("td", {
          "class": "user_name",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 21
          }
        }, this.state.activeUserData[i].user_name)));
      }

      return result;
    } // ページ移動設定

  }, {
    key: "go",
    value: function go(id) {
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/talk_room?id=' + id);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.data.length == 0) {
        this.getUserList();
      }

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }
      }, this.state.data.length == 0 ? __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }
      }, "Please wait...") : __jsx("table", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 17
        }
      }, __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }
      }, this.createUserList())));
    }
  }]);

  return UserList;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UserList);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXJMaXN0LmpzIl0sIm5hbWVzIjpbIlVzZXJMaXN0IiwicHJvcHMiLCJmb250U2l6ZSIsInBhZGRpbmciLCJzdGF0ZSIsImRhdGEiLCJhY3RpdmVVc2VyRGF0YSIsImdldFVzZXJMaXN0IiwiY29uc29sZSIsImxvZyIsImRiIiwiZmlyZWJhc2UiLCJkYXRhYmFzZSIsInJlZiIsInNlbGYiLCJvcmRlckJ5S2V5Iiwib24iLCJzbmFwc2hvdCIsInNldFN0YXRlIiwidmFsIiwiZ2V0QWN0aXZlVXNlckxpc3QiLCJsZW5ndGgiLCJhY3RpdmVVc2VyTGlzdCIsImkiLCJhY3RpdmVfZmxhZyIsInB1c2giLCJyZXN1bHQiLCJpZCIsImdvIiwiYmluZCIsInVzZXJfbmFtZSIsIlJvdXRlciIsImNyZWF0ZVVzZXJMaXN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsUTs7Ozs7QUFNRixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLGdOQUxYO0FBQ0pDLGNBQVEsRUFBRSxNQUROO0FBRUpDLGFBQU8sRUFBRTtBQUZMLEtBS1c7O0FBRWYsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFVBQUksRUFBRSxFQURHO0FBRVRDLG9CQUFjLEVBQUU7QUFGUCxLQUFiOztBQUlBLFVBQUtDLFdBQUw7O0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFQZTtBQVFsQixHLENBRUQ7Ozs7O2tDQUNjO0FBQUE7O0FBQ1YsVUFBSUMsRUFBRSxHQUFHQywrQ0FBUSxDQUFDQyxRQUFULEVBQVQ7QUFDQSxVQUFJQyxHQUFHLEdBQUdILEVBQUUsQ0FBQ0csR0FBSCxDQUFPLGVBQVAsQ0FBVjtBQUNBLFVBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0FELFNBQUcsQ0FBQ0UsVUFB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QUNELGFBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLLEtBQUtILEtBQUwsQ0FBV0MsSUFBWCxDQUFnQmdCLE1BQWhCLElBQTBCLENBQTFCLEdBRUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGQyxHQUlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ssS0FBS1csY0FBTCxFQURMLENBREosQ0FMSixDQURKO0FBY0g7Ozs7RUFoR2tCQywrQzs7QUFrR1JqQyx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaG9tZS5qcy5jYzA1NWE0MjAwMGE3ZjQ5ZGJhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jbGFzcyBVc2VyTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdHlsZSA9IHtcclxuICAgICAgICBmb250U2l6ZTogJzEycHQnLFxyXG4gICAgICAgIHBhZGRpbmc6ICc1cHggMTBweCdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgYWN0aXZlVXNlckRhdGE6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0VXNlckxpc3QoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygn5b65Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmlyZWJhc2XjgYvjgonjga7jg4fjg7zjgr/lj5blvpdcclxuICAgIGdldFVzZXJMaXN0KCkge1xyXG4gICAgICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbiAgICAgICAgbGV0IHJlZiA9IGRiLnJlZignZnJpZW5kX2luZm8vMScpO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICByZWYub3JkZXJCeUtleSgpLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29tZSBvbicpO1xyXG4gICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHNuYXBzaG90LnZhbCgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YTonICsgdGhpcy5zdGF0ZS5kYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRBY3RpdmVVc2VyTGlzdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOOCouOCr+ODhuOCo+ODluODpuODvOOCtuOBruOBv+ODh+ODvOOCv+WPluW+l1xyXG4gICAgZ2V0QWN0aXZlVXNlckxpc3QoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Nvbm9ub25vbm9uJyArIHRoaXMuc3RhdGUuZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIGxldCBhY3RpdmVVc2VyTGlzdCA9IFtdO1xyXG4gICAgICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbiAgICAgICAgbGV0IHJlZjtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5zdGF0ZS5kYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGFbaV0uYWN0aXZlX2ZsYWcgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVmID0gZGIucmVmKCd1c2VyX2luZm8vJyArIGkpO1xyXG4gICAgICAgICAgICByZWYub3JkZXJCeUtleSgpLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlVXNlckxpc3QucHVzaChzbmFwc2hvdC52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVVc2VyRGF0YTogYWN0aXZlVXNlckxpc3RcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44OH44O844K/6KGo56S644Gu55Sf5oiQXHJcbiAgICBjcmVhdGVVc2VyTGlzdCgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlVXNlckRhdGEgPT0gbnVsbCB8fCB0aGlzLnN0YXRlLmFjdGl2ZVVzZXJEYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbPHRyIGtleT1cIjBcIj48dGg+Tk8gREFUQS48L3RoPjwvdHI+XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnN0YXRlLmFjdGl2ZVVzZXJEYXRhKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPHRyIGRhdGEtdGFnPXt0aGlzLnN0YXRlLmFjdGl2ZVVzZXJEYXRhW2ldLmlkfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nby5iaW5kKG51bGwsIHRoaXMuc3RhdGUuYWN0aXZlVXNlckRhdGFbaV0uaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ1c2VyX2ltYWdlXCI+aW1hZ2U8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInVzZXJfbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYWN0aXZlVXNlckRhdGFbaV0udXNlcl9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOODmuODvOOCuOenu+WLleioreWumlxyXG4gICAgZ28oaWQpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL3RhbGtfcm9vbT9pZD0nICsgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlckxpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEubGVuZ3RoID09IDBcclxuICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgIDxwPlBsZWFzZSB3YWl0Li4uPC9wPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY3JlYXRlVXNlckxpc3QoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTGlzdDsiXSwic291cmNlUm9vdCI6IiJ9