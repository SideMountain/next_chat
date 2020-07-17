webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./components/TalkList.js":
/*!********************************!*\
  !*** ./components/TalkList.js ***!
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







var _jsxFileName = "C:\\env\\react\\next_chat\\components\\TalkList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var TalkList = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TalkList, _Component);

  var _super = _createSuper(TalkList);

  function TalkList(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TalkList);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "style", {
      fontSize: '12pt',
      padding: '5px 10px'
    });

    _this.state = {
      data: [],
      activeUserData: [],
      talkData: []
    };

    _this.getUserList();

    return _this;
  } // 友人データ取得


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TalkList, [{
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
      var _this3 = this;

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
          console.log('activeUserList:' + JSON.stringify(snapshot.val()));
          activeUserList.push(snapshot.val());
          self.setState({
            activeUserData: activeUserList
          }, function () {
            _this3.getTalkList();
          });
        });
      }
    } // トークリスト取得

  }, {
    key: "getTalkList",
    value: function getTalkList() {
      var _this4 = this;

      var talkList = [];
      var db = firebase__WEBPACK_IMPORTED_MODULE_8___default.a.database();
      var ref;
      var self = this;

      var _loop = function _loop(i) {
        ref = db.ref('messages/1/' + _this4.state.activeUserData[i].id);
        ref.orderByKey().limitToLast(1).on('value', function (snapshot) {
          var res = snapshot.val();

          for (var j in res) {
            talkList.push({
              user_id: _this4.state.activeUserData[i].id,
              user_name: _this4.state.activeUserData[i].user_name,
              content: res[j].content,
              from_flag: res[j].from_flag,
              read_flag: res[j].read_flag,
              create_date: res[j].create_date,
              update_date: res[j].update_date
            });
            self.setState({
              talkData: talkList
            });
          }
        });
      };

      for (var i in this.state.activeUserData) {
        _loop(i);
      }
    } // 表示するトークリストの生成

  }, {
    key: "createTalkList",
    value: function createTalkList() {
      var result = [];

      if (this.state.talkData == null || this.state.talkData.length == 0) {
        return [__jsx("tr", {
          key: "0",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 21
          }
        }, __jsx("th", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 33
          }
        }, "NO DATA."))];
      }

      for (var i in this.state.talkData) {
        if (this.state.talkData[i] == null || this.state.talkData[i].length == 0) {
          continue;
        }

        result.push(__jsx("tr", {
          "data-tag": this.state.talkData[i].user_id,
          onClick: this.go.bind(null, this.state.talkData[i].user_id),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 17
          }
        }, __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 21
          }
        }, this.state.talkData[i].user_name), __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 21
          }
        }, this.state.talkData[i].content)));
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
          lineNumber: 115,
          columnNumber: 13
        }
      }, this.state.talkData.length == 0 ? __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 17
        }
      }, "Please wait...") : __jsx("table", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 17
        }
      }, __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }
      }, this.createTalkList())));
    }
  }]);

  return TalkList;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TalkList);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhbGtMaXN0LmpzIl0sIm5hbWVzIjpbIlRhbGtMaXN0IiwicHJvcHMiLCJmb250U2l6ZSIsInBhZGRpbmciLCJzdGF0ZSIsImRhdGEiLCJhY3RpdmVVc2VyRGF0YSIsInRhbGtEYXRhIiwiZ2V0VXNlckxpc3QiLCJkYiIsImZpcmViYXNlIiwiZGF0YWJhc2UiLCJyZWYiLCJzZWxmIiwib3JkZXJCeUtleSIsIm9uIiwic25hcHNob3QiLCJzZXRTdGF0ZSIsInZhbCIsImdldEFjdGl2ZVVzZXJMaXN0IiwiYWN0aXZlVXNlckxpc3QiLCJpIiwiYWN0aXZlX2ZsYWciLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInB1c2giLCJnZXRUYWxrTGlzdCIsInRhbGtMaXN0IiwiaWQiLCJsaW1pdFRvTGFzdCIsInJlcyIsImoiLCJ1c2VyX2lkIiwidXNlcl9uYW1lIiwiY29udGVudCIsImZyb21fZmxhZyIsInJlYWRfZmxhZyIsImNyZWF0ZV9kYXRlIiwidXBkYXRlX2RhdGUiLCJyZXN1bHQiLCJsZW5ndGgiLCJnbyIsImJpbmQiLCJ1c2VySWQiLCJSb3V0ZXIiLCJjcmVhdGVUYWxrTGlzdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFE7Ozs7O0FBTUYsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxnTkFMWDtBQUNKQyxjQUFRLEVBQUUsTUFETjtBQUVKQyxhQUFPLEVBQUU7QUFGTCxLQUtXOztBQUVmLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxVQUFJLEVBQUUsRUFERztBQUVUQyxvQkFBYyxFQUFFLEVBRlA7QUFHVEMsY0FBUSxFQUFFO0FBSEQsS0FBYjs7QUFLQSxVQUFLQyxXQUFMOztBQVBlO0FBUWxCLEcsQ0FFRDs7Ozs7a0NBQ2M7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YjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLLEtBQUs5QixLQUFMLENBQVdHLFFBQVgsQ0FBb0JjLENBQXBCLEVBQXVCYyxTQUE1QixDQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLLEtBQUsvQixLQUFMLENBQVdHLFFBQVgsQ0FBb0JjLENBQXBCLEVBQXVCZSxPQUE1QixDQUhKLENBREo7QUFPSDs7QUFDRCxhQUFPSyxNQUFQO0FBQ0gsSyxDQUVEOzs7O3VCQUNHSSxNLEVBQVE7QUFDUEMseURBQU0sQ0FBQ25CLElBQVAsQ0FBWSx3QkFBd0JrQixNQUFwQztBQUNIOzs7NkJBRVE7QUFDTCxVQUFJLEtBQUt6QyxLQUFMLENBQVdDLElBQVgsQ0FBZ0JxQyxNQUFoQixJQUEwQixDQUE5QixFQUFpQztBQUM3QixhQUFLbEMsV0FBTDtBQUNIOztBQUNELGFBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLLEtBQUtKLEtBQUwsQ0FBV0csUUFBWCxDQUFvQm1DLE1BQXBCLElBQThCLENBQTlCLEdBRUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGQyxHQUlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ssS0FBS0ssY0FBTCxFQURMLENBREosQ0FMSixDQURKO0FBY0g7Ozs7RUExSGtCQywrQzs7QUE2SFJoRCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaG9tZS5qcy5mYTNjNGQ3N2E2OThjZGE1NzBmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jbGFzcyBUYWxrTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdHlsZSA9IHtcclxuICAgICAgICBmb250U2l6ZTogJzEycHQnLFxyXG4gICAgICAgIHBhZGRpbmc6ICc1cHggMTBweCdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgYWN0aXZlVXNlckRhdGE6IFtdLFxyXG4gICAgICAgICAgICB0YWxrRGF0YTogW11cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXRVc2VyTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWPi+S6uuODh+ODvOOCv+WPluW+l1xyXG4gICAgZ2V0VXNlckxpc3QoKSB7XHJcbiAgICAgICAgbGV0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuICAgICAgICBsZXQgcmVmID0gZGIucmVmKCdmcmllbmRfaW5mby8xJyk7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHJlZi5vcmRlckJ5S2V5KCkub24oJ3ZhbHVlJywgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YTogc25hcHNob3QudmFsKClcclxuICAgICAgICAgICAgfSwgKCkgPT4ge3RoaXMuZ2V0QWN0aXZlVXNlckxpc3QoKTt9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDjgqLjgq/jg4bjgqPjg5bjg6bjg7zjgrbjga7jgb/jg4fjg7zjgr/lj5blvpdcclxuICAgIGdldEFjdGl2ZVVzZXJMaXN0KCkge1xyXG4gICAgICAgIGxldCBhY3RpdmVVc2VyTGlzdCA9IFtdO1xyXG4gICAgICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbiAgICAgICAgbGV0IHJlZjtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5zdGF0ZS5kYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGFbaV0uYWN0aXZlX2ZsYWcgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVmID0gZGIucmVmKCd1c2VyX2luZm8vJyArIGkpO1xyXG4gICAgICAgICAgICByZWYub3JkZXJCeUtleSgpLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FjdGl2ZVVzZXJMaXN0OicgKyBKU09OLnN0cmluZ2lmeShzbmFwc2hvdC52YWwoKSkpO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlVXNlckxpc3QucHVzaChzbmFwc2hvdC52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVVc2VyRGF0YTogYWN0aXZlVXNlckxpc3RcclxuICAgICAgICAgICAgICAgIH0sICgpID0+IHt0aGlzLmdldFRhbGtMaXN0KCl9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOODiOODvOOCr+ODquOCueODiOWPluW+l1xyXG4gICAgZ2V0VGFsa0xpc3QoKSB7XHJcbiAgICAgICAgbGV0IHRhbGtMaXN0ID0gW107XHJcbiAgICAgICAgbGV0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuICAgICAgICBsZXQgcmVmO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuc3RhdGUuYWN0aXZlVXNlckRhdGEpIHtcclxuICAgICAgICAgICAgcmVmID0gZGIucmVmKCdtZXNzYWdlcy8xLycgKyB0aGlzLnN0YXRlLmFjdGl2ZVVzZXJEYXRhW2ldLmlkKTtcclxuICAgICAgICAgICAgcmVmLm9yZGVyQnlLZXkoKS5saW1pdFRvTGFzdCgxKS5vbigndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXMgPSBzbmFwc2hvdC52YWwoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogaW4gcmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFsa0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHRoaXMuc3RhdGUuYWN0aXZlVXNlckRhdGFbaV0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfbmFtZTogdGhpcy5zdGF0ZS5hY3RpdmVVc2VyRGF0YVtpXS51c2VyX25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHJlc1tqXS5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tX2ZsYWc6IHJlc1tqXS5mcm9tX2ZsYWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRfZmxhZzogcmVzW2pdLnJlYWRfZmxhZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlX2RhdGU6IHJlc1tqXS5jcmVhdGVfZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlX2RhdGU6IHJlc1tqXS51cGRhdGVfZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWxrRGF0YTogdGFsa0xpc3RcclxuICAgICAgICAgICAgICAgICAgICB9KTsgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDooajnpLrjgZnjgovjg4jjg7zjgq/jg6rjgrnjg4jjga7nlJ/miJBcclxuICAgIGNyZWF0ZVRhbGtMaXN0KCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50YWxrRGF0YSA9PSBudWxsIHx8IHRoaXMuc3RhdGUudGFsa0RhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFs8dHIga2V5PVwiMFwiPjx0aD5OTyBEQVRBLjwvdGg+PC90cj5dO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuc3RhdGUudGFsa0RhdGEpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudGFsa0RhdGFbaV0gPT0gbnVsbCB8fCB0aGlzLnN0YXRlLnRhbGtEYXRhW2ldLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQucHVzaChcclxuICAgICAgICAgICAgICAgIDx0ciBkYXRhLXRhZz17dGhpcy5zdGF0ZS50YWxrRGF0YVtpXS51c2VyX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ28uYmluZChudWxsLCB0aGlzLnN0YXRlLnRhbGtEYXRhW2ldLnVzZXJfaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUudGFsa0RhdGFbaV0udXNlcl9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLnRhbGtEYXRhW2ldLmNvbnRlbnR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44Oa44O844K456e75YuV6Kit5a6aXHJcbiAgICBnbyh1c2VySWQpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL3RhbGtfcm9vbT91c2VyX2lkPScgKyB1c2VySWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlckxpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRhbGtEYXRhLmxlbmd0aCA9PSAwXHJcbiAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICA8cD5QbGVhc2Ugd2FpdC4uLjwvcD5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNyZWF0ZVRhbGtMaXN0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhbGtMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=