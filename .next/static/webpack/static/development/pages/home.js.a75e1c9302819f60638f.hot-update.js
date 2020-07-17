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

    return _this;
  } // 友人データ取得


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserList, [{
    key: "getUserList",
    value: function getUserList() {
      var _this2 = this;

      var db = firebase__WEBPACK_IMPORTED_MODULE_8___default.a.database();
      var ref = db.ref('friend_info/1');
      var self = this;
      ref.orderByKey().on('value', function (snapshot) {
        self.setState({
          data: snapshot.val()
        }, function () {
          _this2.getActiveUserList();
        });
      });
    } // アクティブユーザのみデータ取得

  }, {
    key: "getActiveUserList",
    value: function getActiveUserList() {
      var activeUserList = [];
      var db = firebase__WEBPACK_IMPORTED_MODULE_8___default.a.database();
      var ref;
      var self = this;

      for (var i in this.state.data) {
        if (this.state.data[i].active_flag == 0) {
          continue;
        }

        ref = db.ref('user_info/' + i);
        ref.orderByKey().on('value', function (snapshot) {
          activeUserList.push(snapshot.val());
          self.setState({
            activeUserData: activeUserList
          });
        });
      }
    } // 表示するユーザリストの生成

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
            lineNumber: 60,
            columnNumber: 21
          }
        }, __jsx("th", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 33
          }
        }, "NO DATA."))];
      }

      for (var i in this.state.activeUserData) {
        result.push(__jsx("tr", {
          "data-tag": this.state.activeUserData[i].user_id,
          onClick: this.go.bind(null, this.state.activeUserData[i].user_id),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 17
          }
        }, __jsx("td", {
          "class": "user_image",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 21
          }
        }, "image"), __jsx("td", {
          "class": "user_name",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 21
          }
        }, this.state.activeUserData[i].user_name)));
      }

      return result;
    } // ページ移動設定

  }, {
    key: "go",
    value: function go(userId) {
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/talk_room?user_id=' + userId);
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
          lineNumber: 86,
          columnNumber: 13
        }
      }, this.state.data.length == 0 ? __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 17
        }
      }, "Please wait...") : __jsx("table", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 17
        }
      }, __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXJMaXN0LmpzIl0sIm5hbWVzIjpbIlVzZXJMaXN0IiwicHJvcHMiLCJmb250U2l6ZSIsInBhZGRpbmciLCJzdGF0ZSIsImRhdGEiLCJhY3RpdmVVc2VyRGF0YSIsImdldFVzZXJMaXN0IiwiZGIiLCJmaXJlYmFzZSIsImRhdGFiYXNlIiwicmVmIiwic2VsZiIsIm9yZGVyQnlLZXkiLCJvbiIsInNuYXBzaG90Iiwic2V0U3RhdGUiLCJ2YWwiLCJnZXRBY3RpdmVVc2VyTGlzdCIsImFjdGl2ZVVzZXJMaXN0IiwiaSIsImFjdGl2ZV9mbGFnIiwicHVzaCIsInJlc3VsdCIsImxlbmd0aCIsInVzZXJfaWQiLCJnbyIsImJpbmQiLCJ1c2VyX25hbWUiLCJ1c2VySWQiLCJSb3V0ZXIiLCJjcmVhdGVVc2VyTGlzdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFE7Ozs7O0FBTUYsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxnTkFMWDtBQUNKQyxjQUFRLEVBQUUsTUFETjtBQUVKQyxhQUFPLEVBQUU7QUFGTCxLQUtXOztBQUVmLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxVQUFJLEVBQUUsRUFERztBQUVUQyxvQkFBYyxFQUFFO0FBRlAsS0FBYjs7QUFJQSxVQUFLQyxXQUFMOztBQU5lO0FBT2xCLEcsQ0FFRDs7Ozs7a0NBQ2M7QUFBQTs7QUFDVixVQUFJQyxFQUFFLEdBQUdDLCtDQUFRLENBQUNDLFFBQVQsRUFBVDtBQUNBLFVBQUlDLEdBQUcsR0FBR0gsRUFBRSxDQUFDRyxHQUFILENBQU8sZUFBUCxDQUFWO0FBQ0EsVUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQUQsU0FBRyxDQUFDRSxVQUFKLEdBQWlCQyxFQUFqQixDQUFvQixPQUFwQixFQUE2QixVQUFDQyxRQUFELEVBQWM7QUFDdkNILFlBQUksQ0FBQ0ksUUFBTCxDQUFjO0FBQ1ZYLGNBQUksRUFBRVUsUUFBUSxDQUFDRSxHQUFUO0FBREksU0FBZCxFQUVHLFlBQU07QUFBQyxnQkFBSSxDQUFDQyxpQkFBTDtBQUEwQixTQUZwQztBQUdILE9BSkQ7QUFLSCxLLENBRUQ7Ozs7d0NBQ29CO0FBQ2hCLFVBQUlDLGNBQWMsR0FBRyxFQUFyQjtBQUNBLFVBQUlYLEVBQUUsR0FBR0MsK0NBQVEsQ0FBQ0MsUUFBVCxFQUFUO0FBQ0EsVUFBSUMsR0FBSjtBQUNBLFVBQUlDLElBQUksR0FBRyxJQUFYOztBQUVBLFdBQUssSUFBSVEsQ0FBVCxJQUFjLEtBQUtoQixLQUFMLENBQVdDLElBQXpCLEVBQStCO0FBQzNCLFlBQUksS0FBS0QsS0FBTCxDQUFXQyxJQUFYLENBQWdCZSxDQUFoQixFQUFtQkMsV0FBbkIsSUFBa0MsQ0FBdEMsRUFBeUM7QUFDckM7QUFDSDs7QUFFRFYsV0FBRyxHQUFHSCxFQUFFLENBQUNHLEdBQUgsQ0FBTyxlQUFlUyxDQUF0QixDQUFOO0FBQ0FULFdBQUcsQ0FBQ0UsVUFBSixHQUFpQkMsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsVUFBQ0MsUUFBRCxFQUFjO0FBRXZDSSx3QkFBYyxDQUFDRyxJQUFmLENBQW9CUCxRQUFRLENBQUNFLEdBQVQsRUFBcEI7QUFDQUwsY0FBSSxDQUFDSSxRQUFMLENBQWM7QUFDVlYsMEJBQWMsRUFBRWE7QUFETixXQUFkO0FBR0gsU0FORDtBQU9IO0FBQ0osSyxDQUVEOzs7O3FDQUNpQjtBQUNiLFVBQUlJLE1BQU0sR0FBRyxFQUFiOztBQUNBLFVBQUksS0FBS25CLEtBQUwsQ0FBV0UsY0FBWCxJQUE2QixJQUE3QixJQUFxQyxLQUFLRixLQUFMLENBQVdFLGNBQVgsQ0FBMEJrQixNQUExQixJQUFvQyxDQUE3RSxFQUFnRjtBQUM1RSxlQUFPLENBQUM7QUFBSSxhQUFHLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBWixDQUFELENBQVA7QUFDSDs7QUFDRCxXQUFLLElBQUlKLENBQVQsSUFBYyxLQUFLaEIsS0FBTCxDQUFXRSxjQUF6QixFQUF5QztBQUNyQ2lCLGNBQU0sQ0FBQ0QsSUFBUCxDQUNJO0FBQUksc0JBQVUsS0FBS2xCLEtBQUwsQ0FBV0UsY0FBWCxDQUEwQmMsQ0FBMUIsRUFBNkJLLE9BQTNDO0FBQ0EsaUJBQU8sRUFBRSxLQUFLQyxFQUFMLENBQVFDLElBQVIsQ0FBYSxJQUFiLEVBQW1CLEtBQUt2QixLQUFMLENBQVdFLGNBQVgsQ0FBMEJjLENBQTFCLEVBQTZCSyxPQUFoRCxDQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FFSTtBQUFJLG1CQUFNLFlBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixFQUdJO0FBQUksbUJBQU0sV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ1MsS0FBS3JCLEtBQUwsQ0FBV0UsY0FBWCxDQUEwQmMsQ0FBMUIsRUFBNkJRLFNBRHRDLENBSEosQ0FESjtBQVNIOztBQUNELGFBQU9MLE1BQVA7QUFDSCxLLENBRUQ7Ozs7dUJBQ0dNLE0sRUFBUTtBQUNQQyx5REFBTSxDQUFDUixJQUFQLENBQVksd0JBQXdCTyxNQUFwQztBQUNIOzs7NkJBRVE7QUFDTCxVQUFJLEtBQUt6QixLQUFMLENBQVdDLElBQVgsQ0FBZ0JtQixNQUFoQixJQUEwQixDQUE5QixFQUFpQztBQUM3QixhQUFLakIsV0FBTDtBQUNIOztBQUNELGFBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLLEtBQUtILEtBQUwsQ0FBV0MsSUFBWCxDQUFnQm1CLE1BQWhCLElBQTBCLENBQTFCLEdBRUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGQyxHQUlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ssS0FBS08sY0FBTCxFQURMLENBREosQ0FMSixDQURKO0FBY0g7Ozs7RUE3RmtCQywrQzs7QUErRlJoQyx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaG9tZS5qcy5hNzVlMWM5MzAyODE5ZjYwNjM4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jbGFzcyBVc2VyTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdHlsZSA9IHtcclxuICAgICAgICBmb250U2l6ZTogJzEycHQnLFxyXG4gICAgICAgIHBhZGRpbmc6ICc1cHggMTBweCdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgYWN0aXZlVXNlckRhdGE6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0VXNlckxpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlj4vkurrjg4fjg7zjgr/lj5blvpdcclxuICAgIGdldFVzZXJMaXN0KCkge1xyXG4gICAgICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbiAgICAgICAgbGV0IHJlZiA9IGRiLnJlZignZnJpZW5kX2luZm8vMScpO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICByZWYub3JkZXJCeUtleSgpLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHNuYXBzaG90LnZhbCgpXHJcbiAgICAgICAgICAgIH0sICgpID0+IHt0aGlzLmdldEFjdGl2ZVVzZXJMaXN0KCk7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44Ki44Kv44OG44Kj44OW44Om44O844K244Gu44G/44OH44O844K/5Y+W5b6XXHJcbiAgICBnZXRBY3RpdmVVc2VyTGlzdCgpIHtcclxuICAgICAgICBsZXQgYWN0aXZlVXNlckxpc3QgPSBbXTtcclxuICAgICAgICBsZXQgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGxldCByZWY7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuc3RhdGUuZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhW2ldLmFjdGl2ZV9mbGFnID09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZWYgPSBkYi5yZWYoJ3VzZXJfaW5mby8nICsgaSk7XHJcbiAgICAgICAgICAgIHJlZi5vcmRlckJ5S2V5KCkub24oJ3ZhbHVlJywgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVVzZXJMaXN0LnB1c2goc25hcHNob3QudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVXNlckRhdGE6IGFjdGl2ZVVzZXJMaXN0XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOihqOekuuOBmeOCi+ODpuODvOOCtuODquOCueODiOOBrueUn+aIkFxyXG4gICAgY3JlYXRlVXNlckxpc3QoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVVzZXJEYXRhID09IG51bGwgfHwgdGhpcy5zdGF0ZS5hY3RpdmVVc2VyRGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gWzx0ciBrZXk9XCIwXCI+PHRoPk5PIERBVEEuPC90aD48L3RyPl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5zdGF0ZS5hY3RpdmVVc2VyRGF0YSkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChcclxuICAgICAgICAgICAgICAgIDx0ciBkYXRhLXRhZz17dGhpcy5zdGF0ZS5hY3RpdmVVc2VyRGF0YVtpXS51c2VyX2lkfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nby5iaW5kKG51bGwsIHRoaXMuc3RhdGUuYWN0aXZlVXNlckRhdGFbaV0udXNlcl9pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInVzZXJfaW1hZ2VcIj5pbWFnZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidXNlcl9uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hY3RpdmVVc2VyRGF0YVtpXS51c2VyX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44Oa44O844K456e75YuV6Kit5a6aXHJcbiAgICBnbyh1c2VySWQpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL3RhbGtfcm9vbT91c2VyX2lkPScgKyB1c2VySWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlckxpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEubGVuZ3RoID09IDBcclxuICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgIDxwPlBsZWFzZSB3YWl0Li4uPC9wPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY3JlYXRlVXNlckxpc3QoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTGlzdDsiXSwic291cmNlUm9vdCI6IiJ9