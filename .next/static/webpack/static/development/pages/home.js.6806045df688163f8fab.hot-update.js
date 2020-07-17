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

    console.log('とお');
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
        console.log(JSON.stringify(snapshot.val()));
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

        console.log('i:' + i);
        ref = db.ref('user_info/' + i);
        ref.orderByKey().on('value', function (snapshot) {
          console.log('list:' + JSON.stringify(snapshot.val()));
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
      console.log('徹');
      console.log('activeuser:' + JSON.stringify(this.state.activeUserData));

      var _loop = function _loop(i) {
        console.log('iiii:' + _this4.state.activeUserData[i].id);
        ref = db.ref('messages/1/' + _this4.state.activeUserData[i].id);
        ref.orderByKey().limitToLast(1).on('value', function (snapshot) {
          var res = snapshot.val();

          for (var j in res) {
            console.log('talk:' + JSON.stringify(snapshot.val()[j]) + 'iiiiiiiiiiiiiiii:' + j + 'usernamee:' + _this4.state.activeUserData[i].user_name);
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
            lineNumber: 95,
            columnNumber: 21
          }
        }, __jsx("th", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 33
          }
        }, "NO DATA."))];
      }

      for (var i in this.state.talkData) {
        console.log('秘密の:' + JSON.stringify(this.state.talkData[i]));

        if (this.state.talkData[i] == null || this.state.talkData[i].length == 0) {
          continue;
        }

        result.push(__jsx("tr", {
          "data-tag": this.state.talkData[i].user_id,
          onClick: this.go.bind(null, this.state.talkData[i].user_id),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 17
          }
        }, __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 21
          }
        }, this.state.talkData[i].user_name), __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106,
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
          lineNumber: 123,
          columnNumber: 13
        }
      }, this.state.talkList.length == 0 ? __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 17
        }
      }, "Please wait...") : __jsx("table", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 17
        }
      }, __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhbGtMaXN0LmpzIl0sIm5hbWVzIjpbIlRhbGtMaXN0IiwicHJvcHMiLCJmb250U2l6ZSIsInBhZGRpbmciLCJzdGF0ZSIsImRhdGEiLCJhY3RpdmVVc2VyRGF0YSIsInRhbGtEYXRhIiwiZ2V0VXNlckxpc3QiLCJjb25zb2xlIiwibG9nIiwiZGIiLCJmaXJlYmFzZSIsImRhdGFiYXNlIiwicmVmIiwic2VsZiIsIm9yZGVyQnlLZXkiLCJvbiIsInNuYXBzaG90IiwiSlNPTiIsInN0cmluZ2lmeSIsInZhbCIsInNldFN0YXRlIiwiZ2V0QWN0aXZlVXNlckxpc3QiLCJhY3RpdmVVc2VyTGlzdCIsImkiLCJhY3RpdmVfZmxhZyIsInB1c2giLCJnZXRUYWxrTGlzdCIsInRhbGtMaXN0IiwiaWQiLCJsaW1pdFRvTGFzdCIsInJlcyIsImoiLCJ1c2VyX25hbWUiLCJ1c2VyX2lkIiwiY29udGVudCIsImZyb21fZmxhZyIsInJlYWRfZmxhZyIsImNyZWF0ZV9kYXRlIiwidXBkYXRlX2RhdGUiLCJyZXN1bHQiLCJsZW5ndGgiLCJnbyIsImJpbmQiLCJ1c2VySWQiLCJSb3V0ZXIiLCJjcmVhdGVUYWxrTGlzdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFE7Ozs7O0FBTUYsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxnTkFMWDtBQUNKQyxjQUFRLEVBQUUsTUFETjtBQUVKQyxhQUFPLEVBQUU7QUFGTCxLQUtXOztBQUVmLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxVQUFJLEVBQUUsRUFERztBQUVUQyxvQkFBYyxFQUFFLEVBRlA7QUFHVEMsY0FBUSxFQUFFO0FBSEQsS0FBYjs7QUFLQSxVQUFLQyxXQUFMOztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxJ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QU9IOztBQUNELGFBQU9LLE1BQVA7QUFDSCxLLENBRUQ7Ozs7dUJBQ0dJLE0sRUFBUTtBQUNQQyx5REFBTSxDQUFDbkIsSUFBUCxDQUFZLHdCQUF3QmtCLE1BQXBDO0FBQ0g7Ozs2QkFFUTtBQUNMLFVBQUksS0FBS3pDLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQnFDLE1BQWhCLElBQTBCLENBQTlCLEVBQWlDO0FBQzdCLGFBQUtsQyxXQUFMO0FBQ0g7O0FBQ0QsYUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ssS0FBS0osS0FBTCxDQUFXeUIsUUFBWCxDQUFvQmEsTUFBcEIsSUFBOEIsQ0FBOUIsR0FFRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZDLEdBSUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSyxLQUFLSyxjQUFMLEVBREwsQ0FESixDQUxKLENBREo7QUFjSDs7OztFQWxJa0JDLCtDOztBQXFJUmhELHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxob21lLmpzLjY4MDYwNDVkZjY4ODE2M2Y4ZmFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL3N0b3JhZ2UnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNsYXNzIFRhbGtMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0eWxlID0ge1xyXG4gICAgICAgIGZvbnRTaXplOiAnMTJwdCcsXHJcbiAgICAgICAgcGFkZGluZzogJzVweCAxMHB4J1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICBhY3RpdmVVc2VyRGF0YTogW10sXHJcbiAgICAgICAgICAgIHRhbGtEYXRhOiBbXVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdldFVzZXJMaXN0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+OBqOOBiicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWPi+S6uuODh+ODvOOCv+WPluW+l1xyXG4gICAgZ2V0VXNlckxpc3QoKSB7XHJcbiAgICAgICAgbGV0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuICAgICAgICBsZXQgcmVmID0gZGIucmVmKCdmcmllbmRfaW5mby8xJyk7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHJlZi5vcmRlckJ5S2V5KCkub24oJ3ZhbHVlJywgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHNuYXBzaG90LnZhbCgpKSk7XHJcbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YTogc25hcHNob3QudmFsKClcclxuICAgICAgICAgICAgfSwgKCkgPT4ge3RoaXMuZ2V0QWN0aXZlVXNlckxpc3QoKTt9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDjgqLjgq/jg4bjgqPjg5bjg6bjg7zjgrbjga7jgb/jg4fjg7zjgr/lj5blvpdcclxuICAgIGdldEFjdGl2ZVVzZXJMaXN0KCkge1xyXG4gICAgICAgIGxldCBhY3RpdmVVc2VyTGlzdCA9IFtdO1xyXG4gICAgICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbiAgICAgICAgbGV0IHJlZjtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5zdGF0ZS5kYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGFbaV0uYWN0aXZlX2ZsYWcgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2k6JyArIGkpO1xyXG4gICAgICAgICAgICByZWYgPSBkYi5yZWYoJ3VzZXJfaW5mby8nICsgaSk7XHJcbiAgICAgICAgICAgIHJlZi5vcmRlckJ5S2V5KCkub24oJ3ZhbHVlJywgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbGlzdDonICsgSlNPTi5zdHJpbmdpZnkoc25hcHNob3QudmFsKCkpKTtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVVzZXJMaXN0LnB1c2goc25hcHNob3QudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVXNlckRhdGE6IGFjdGl2ZVVzZXJMaXN0XHJcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7dGhpcy5nZXRUYWxrTGlzdCgpfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDjg4jjg7zjgq/jg6rjgrnjg4jlj5blvpdcclxuICAgIGdldFRhbGtMaXN0KCkge1xyXG4gICAgICAgIGxldCB0YWxrTGlzdCA9IFtdO1xyXG4gICAgICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbiAgICAgICAgbGV0IHJlZjtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+W+uScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhY3RpdmV1c2VyOicgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmFjdGl2ZVVzZXJEYXRhKSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnN0YXRlLmFjdGl2ZVVzZXJEYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpaWlpOicgKyB0aGlzLnN0YXRlLmFjdGl2ZVVzZXJEYXRhW2ldLmlkKTtcclxuICAgICAgICAgICAgcmVmID0gZGIucmVmKCdtZXNzYWdlcy8xLycgKyB0aGlzLnN0YXRlLmFjdGl2ZVVzZXJEYXRhW2ldLmlkKTtcclxuICAgICAgICAgICAgcmVmLm9yZGVyQnlLZXkoKS5saW1pdFRvTGFzdCgxKS5vbigndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXMgPSBzbmFwc2hvdC52YWwoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogaW4gcmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RhbGs6JyArIEpTT04uc3RyaW5naWZ5KHNuYXBzaG90LnZhbCgpW2pdKSArICdpaWlpaWlpaWlpaWlpaWlpOicgKyBqICsgJ3VzZXJuYW1lZTonICsgdGhpcy5zdGF0ZS5hY3RpdmVVc2VyRGF0YVtpXS51c2VyX25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbGtMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB0aGlzLnN0YXRlLmFjdGl2ZVVzZXJEYXRhW2ldLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX25hbWU6IHRoaXMuc3RhdGUuYWN0aXZlVXNlckRhdGFbaV0udXNlcl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiByZXNbal0uY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbV9mbGFnOiByZXNbal0uZnJvbV9mbGFnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkX2ZsYWc6IHJlc1tqXS5yZWFkX2ZsYWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZV9kYXRlOiByZXNbal0uY3JlYXRlX2RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZV9kYXRlOiByZXNbal0udXBkYXRlX2RhdGVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFsa0RhdGE6IHRhbGtMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7ICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6KGo56S644GZ44KL44OI44O844Kv44Oq44K544OI44Gu55Sf5oiQXHJcbiAgICBjcmVhdGVUYWxrTGlzdCgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudGFsa0RhdGEgPT0gbnVsbCB8fCB0aGlzLnN0YXRlLnRhbGtEYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbPHRyIGtleT1cIjBcIj48dGg+Tk8gREFUQS48L3RoPjwvdHI+XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnN0YXRlLnRhbGtEYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnp5jlr4bjga46JyArIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUudGFsa0RhdGFbaV0pKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudGFsa0RhdGFbaV0gPT0gbnVsbCB8fCB0aGlzLnN0YXRlLnRhbGtEYXRhW2ldLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQucHVzaChcclxuICAgICAgICAgICAgICAgIDx0ciBkYXRhLXRhZz17dGhpcy5zdGF0ZS50YWxrRGF0YVtpXS51c2VyX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ28uYmluZChudWxsLCB0aGlzLnN0YXRlLnRhbGtEYXRhW2ldLnVzZXJfaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUudGFsa0RhdGFbaV0udXNlcl9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLnRhbGtEYXRhW2ldLmNvbnRlbnR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44Oa44O844K456e75YuV6Kit5a6aXHJcbiAgICBnbyh1c2VySWQpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL3RhbGtfcm9vbT91c2VyX2lkPScgKyB1c2VySWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlckxpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRhbGtMaXN0Lmxlbmd0aCA9PSAwXHJcbiAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICA8cD5QbGVhc2Ugd2FpdC4uLjwvcD5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNyZWF0ZVRhbGtMaXN0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhbGtMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=