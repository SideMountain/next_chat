webpackHotUpdate("static\\development\\pages\\talk_room.js",{

/***/ "./components/TalkRoom.js":
/*!********************************!*\
  !*** ./components/TalkRoom.js ***!
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
/* harmony import */ var _static_chat_lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/chat_lib */ "./static/chat_lib.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");







var _jsxFileName = "C:\\env\\react\\next_chat\\components\\TalkRoom.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var TalkRoom = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TalkRoom, _Component);

  var _super = _createSuper(TalkRoom);

  function TalkRoom(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TalkRoom);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "style", {
      fontSize: '12pt',
      padding: '5px 10px'
    });

    _this.state = {
      friendId: next_router__WEBPACK_IMPORTED_MODULE_11___default.a.query.user_id,
      friendName: '',
      talkData: [],
      content: '',
      lastId: -1
    };

    _this.getFriendName();

    _this.getLastId();

    _this.getTalkData();

    _this.doAction = _this.doAction.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.onChangeContent = _this.onChangeContent.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  } // トーク内容を取得


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TalkRoom, [{
    key: "getTalkData",
    value: function getTalkData() {
      var _this2 = this;

      var db = firebase__WEBPACK_IMPORTED_MODULE_8___default.a.database();
      var ref = db.ref('messages/1/' + this.state.friendId);
      var self = this;
      ref.orderByKey().on('value', function (snapshot) {
        var res = snapshot.val();

        if (res == null || res.length == 0) {
          return;
        }

        self.setState({
          talkData: snapshot.val()
        }, function () {
          return console.log('talkData:' + _this2.state.talkData);
        });
      });
    } // 友達名を取得

  }, {
    key: "getFriendName",
    value: function getFriendName() {
      var _this3 = this;

      var db = firebase__WEBPACK_IMPORTED_MODULE_8___default.a.database();
      var ref = db.ref('user_info/' + this.state.friendId);
      var self = this;
      ref.orderByKey().on('value', function (snapshot) {
        var res = snapshot.val();
        console.log('res:' + res.user_name);
        self.setState({
          friendName: res.user_name
        }, function () {
          return _this3.printName(res.user_name);
        });
        console.log('state1:' + _this3.state.friendName);
      });
    } // コンソール

  }, {
    key: "printName",
    value: function printName(val) {
      console.log('state2:' + this.state.friendName + '  val:' + val);
    } // トーク履歴を作成

  }, {
    key: "createTalkData",
    value: function createTalkData() {
      var result = [];

      if (this.state.talkData == null || this.state.talkData.length == 0) {
        return [__jsx("tr", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 21
          }
        }, __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }
        }, "No Talk Data."))];
      }

      for (var i in this.state.talkData) {
        result.push(__jsx("tr", {
          "class": this.state.talkData[i].from_flag == 1 ? "from_style" : "to_style",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 17
          }
        }, __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 21
          }
        }, this.state.talkData[i].content), __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 21
          }
        }, this.state.talkData[i].create_date)));
      }

      return result;
    } // 最後のIDを取得

  }, {
    key: "getLastId",
    value: function getLastId() {
      var db = firebase__WEBPACK_IMPORTED_MODULE_8___default.a.database();
      var ref = db.ref('messages/1/' + this.state.friendId);
      var self = this;
      ref.orderByKey().limitToLast(1).on('value', function (snapshot) {
        var res = snapshot.val();

        if (res == null || res.length == 0) {
          self.setState({
            lastId: 1
          });
          return;
        }

        for (var i in res) {
          self.setState({
            lastId: i
          });
          return;
        }
      });
    } // メッセージ内容

  }, {
    key: "onChangeContent",
    value: function onChangeContent(e) {
      this.setState({
        content: e.target.value
      });
    } // メッセージ送信

  }, {
    key: "doAction",
    value: function doAction(e) {
      if (this.state.lastId == -1) {
        return;
      }

      if (this.state.content == '') {
        return;
      }

      var key = this.state.content;
      var now = new Date().toLocaleString();
      var userId = this.state.lastId * 1 + 1;
      var data = {
        content: this.state.content,
        from_flag: 1,
        read_flag: 0,
        create_date: now,
        update_date: now
      };
      var db = firebase__WEBPACK_IMPORTED_MODULE_8___default.a.database();
      var ref = db.ref('messages/1/' + this.state.friendId + '/' + userId);
      ref.set(data);
      this.setState({
        content: '',
        lastId: -1
      });
    } // 戻る

  }, {
    key: "go",
    value: function go() {
      next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/home');
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.talkData == null || this.state.talkData.length == 0) {
        this.getTalkData();
      }

      if (this.state.lastId == -1) {
        this.getLastId();
      }

      if (this.state.friendName == '') {
        this.getFriendName();
      }

      var friendName = '';

      if (this.state.friendName != '') {
        friendName = this.state.friendName;
      }

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        header: "Talk Room.",
        titile: friendName,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 13
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 17
        }
      }, this.state.lastId == -1 ? __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 21
        }
      }, "Please wait...") : __jsx("table", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 21
        }
      }, __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 25
        }
      }, this.createTalkData(), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 29
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 33
        }
      }, __jsx("input", {
        type: "text",
        size: "30",
        value: this.state.content,
        onChange: this.onChangeContent,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 37
        }
      })), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 33
        }
      }, __jsx("button", {
        onClick: this.doAction,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 37
        }
      }, "send"))))), __jsx("button", {
        onClick: this.go.bind(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 21
        }
      }, "home")));
    }
  }]);

  return TalkRoom;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TalkRoom);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhbGtSb29tLmpzIl0sIm5hbWVzIjpbIlRhbGtSb29tIiwicHJvcHMiLCJmb250U2l6ZSIsInBhZGRpbmciLCJzdGF0ZSIsImZyaWVuZElkIiwiUm91dGVyIiwicXVlcnkiLCJ1c2VyX2lkIiwiZnJpZW5kTmFtZSIsInRhbGtEYXRhIiwiY29udGVudCIsImxhc3RJZCIsImdldEZyaWVuZE5hbWUiLCJnZXRMYXN0SWQiLCJnZXRUYWxrRGF0YSIsImRvQWN0aW9uIiwiYmluZCIsIm9uQ2hhbmdlQ29udGVudCIsImRiIiwiZmlyZWJhc2UiLCJkYXRhYmFzZSIsInJlZiIsInNlbGYiLCJvcmRlckJ5S2V5Iiwib24iLCJzbmFwc2hvdCIsInJlcyIsInZhbCIsImxlbmd0aCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInVzZXJfbmFtZSIsInByaW50TmFtZSIsInJlc3VsdCIsImkiLCJwdXNoIiwiZnJvbV9mbGFnIiwiY3JlYXRlX2RhdGUiLCJsaW1pdFRvTGFzdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImtleSIsIm5vdyIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInVzZXJJZCIsImRhdGEiLCJyZWFkX2ZsYWciLCJ1cGRhdGVfZGF0ZSIsInNldCIsImNyZWF0ZVRhbGtEYXRhIiwiZ28iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxROzs7OztBQU9GLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsZ05BTFg7QUFDSkMsY0FBUSxFQUFFLE1BRE47QUFFSkMsYUFBTyxFQUFFO0FBRkwsS0FLVzs7QUFFZixVQUFLQyxLQUFMLEdBQWE7QUFDVEMsY0FBUSxFQUFFQyxtREFBTSxDQUFDQyxLQUFQLENBQWFDLE9BRGQ7QUFFVEMs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QUssRUFBRSxLQUFLakQsS0FBTCxDQUFXTyxPQUEvQztBQUF3RCxnQkFBUSxFQUFFLEtBQUtPLGVBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBSixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJO0FBQVEsZUFBTyxFQUFFLEtBQUtGLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQUosQ0FGSixDQUZKLENBREosQ0FMSixFQWVJO0FBQVEsZUFBTyxFQUFFLEtBQUtzQyxFQUFMLENBQVFyQyxJQUFSLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkosQ0FESixDQURKO0FBcUJIOzs7O0VBaExrQnNDLCtDOztBQWtMUnZELHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx0YWxrX3Jvb20uanMuNjQ2MTY1NGM0N2E1N2E2NzdiMDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcbmltcG9ydCAnZmlyZWJhc2Uvc3RvcmFnZSc7XHJcbmltcG9ydCBMaWIgZnJvbSAnLi4vc3RhdGljL2NoYXRfbGliJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5cclxuY2xhc3MgVGFsa1Jvb20gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0eWxlID0ge1xyXG4gICAgICAgIGZvbnRTaXplOiAnMTJwdCcsXHJcbiAgICAgICAgcGFkZGluZzogJzVweCAxMHB4J1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGZyaWVuZElkOiBSb3V0ZXIucXVlcnkudXNlcl9pZCxcclxuICAgICAgICAgICAgZnJpZW5kTmFtZTogJycsXHJcbiAgICAgICAgICAgIHRhbGtEYXRhOiBbXSxcclxuICAgICAgICAgICAgY29udGVudDogJycsXHJcbiAgICAgICAgICAgIGxhc3RJZDogLTFcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXRGcmllbmROYW1lKCk7XHJcbiAgICAgICAgdGhpcy5nZXRMYXN0SWQoKTtcclxuICAgICAgICB0aGlzLmdldFRhbGtEYXRhKCk7XHJcbiAgICAgICAgdGhpcy5kb0FjdGlvbiA9IHRoaXMuZG9BY3Rpb24uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ29udGVudCA9IHRoaXMub25DaGFuZ2VDb250ZW50LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44OI44O844Kv5YaF5a6544KS5Y+W5b6XXHJcbiAgICBnZXRUYWxrRGF0YSgpIHtcclxuICAgICAgICBsZXQgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGxldCByZWYgPSBkYi5yZWYoJ21lc3NhZ2VzLzEvJyArIHRoaXMuc3RhdGUuZnJpZW5kSWQpO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICByZWYub3JkZXJCeUtleSgpLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMgPT0gbnVsbCB8fCByZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHRhbGtEYXRhOiBzbmFwc2hvdC52YWwoKVxyXG4gICAgICAgICAgICB9LCAoKSA9PiBjb25zb2xlLmxvZygndGFsa0RhdGE6JyArIHRoaXMuc3RhdGUudGFsa0RhdGEpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlj4vpgZTlkI3jgpLlj5blvpdcclxuICAgIGdldEZyaWVuZE5hbWUoKSB7XHJcbiAgICAgICAgbGV0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuICAgICAgICBsZXQgcmVmID0gZGIucmVmKCd1c2VyX2luZm8vJyArIHRoaXMuc3RhdGUuZnJpZW5kSWQpO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICByZWYub3JkZXJCeUtleSgpLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXM6JyArIHJlcy51c2VyX25hbWUpO1xyXG4gICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGZyaWVuZE5hbWU6IHJlcy51c2VyX25hbWVcclxuICAgICAgICAgICAgfSwgKCkgPT4gdGhpcy5wcmludE5hbWUocmVzLnVzZXJfbmFtZSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RhdGUxOicgKyB0aGlzLnN0YXRlLmZyaWVuZE5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOOCs+ODs+OCveODvOODq1xyXG4gICAgcHJpbnROYW1lKHZhbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGF0ZTI6JyArIHRoaXMuc3RhdGUuZnJpZW5kTmFtZSArICcgIHZhbDonICsgdmFsKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDjg4jjg7zjgq/lsaXmrbTjgpLkvZzmiJBcclxuICAgIGNyZWF0ZVRhbGtEYXRhKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50YWxrRGF0YSA9PSBudWxsIHx8IHRoaXMuc3RhdGUudGFsa0RhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFs8dHI+PHRkPk5vIFRhbGsgRGF0YS48L3RkPjwvdHI+XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnN0YXRlLnRhbGtEYXRhKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPXt0aGlzLnN0YXRlLnRhbGtEYXRhW2ldLmZyb21fZmxhZyA9PSAxID8gXCJmcm9tX3N0eWxlXCIgOiBcInRvX3N0eWxlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGFsa0RhdGFbaV0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGFsa0RhdGFbaV0uY3JlYXRlX2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pyA5b6M44GuSUTjgpLlj5blvpdcclxuICAgIGdldExhc3RJZCgpIHtcclxuICAgICAgICBsZXQgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGxldCByZWYgPSBkYi5yZWYoJ21lc3NhZ2VzLzEvJyArIHRoaXMuc3RhdGUuZnJpZW5kSWQpO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICByZWYub3JkZXJCeUtleSgpLmxpbWl0VG9MYXN0KDEpLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMgPT0gbnVsbCB8fCByZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RJZDogMVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yKGxldCBpIGluIHJlcykge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdElkOmlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44Oh44OD44K744O844K45YaF5a65XHJcbiAgICBvbkNoYW5nZUNvbnRlbnQoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjb250ZW50OiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8g44Oh44OD44K744O844K46YCB5L+hXHJcbiAgICBkb0FjdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubGFzdElkID09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29udGVudCA9PSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBrZXkgPSB0aGlzLnN0YXRlLmNvbnRlbnQ7XHJcbiAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgICAgICBsZXQgdXNlcklkID0gdGhpcy5zdGF0ZS5sYXN0SWQgKiAxICsgMTtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgY29udGVudDogdGhpcy5zdGF0ZS5jb250ZW50LFxyXG4gICAgICAgICAgICBmcm9tX2ZsYWc6IDEsXHJcbiAgICAgICAgICAgIHJlYWRfZmxhZzogMCxcclxuICAgICAgICAgICAgY3JlYXRlX2RhdGU6IG5vdyxcclxuICAgICAgICAgICAgdXBkYXRlX2RhdGU6IG5vd1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGxldCByZWYgPSBkYi5yZWYoJ21lc3NhZ2VzLzEvJyArIHRoaXMuc3RhdGUuZnJpZW5kSWQgKyAnLycgKyB1c2VySWQpO1xyXG4gICAgICAgIHJlZi5zZXQoZGF0YSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgICAgICAgICBsYXN0SWQ6IC0xXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5oi744KLXHJcbiAgICBnbygpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL2hvbWUnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudGFsa0RhdGEgPT0gbnVsbCB8fCB0aGlzLnN0YXRlLnRhbGtEYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VGFsa0RhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubGFzdElkID09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TGFzdElkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZyaWVuZE5hbWUgPT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRGcmllbmROYW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmcmllbmROYW1lID0gJyc7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZnJpZW5kTmFtZSAhPSAnJykge1xyXG4gICAgICAgICAgICBmcmllbmROYW1lID0gdGhpcy5zdGF0ZS5mcmllbmROYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0IGhlYWRlcj1cIlRhbGsgUm9vbS5cIiB0aXRpbGU9e2ZyaWVuZE5hbWV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sYXN0SWQgPT0gLTFcclxuICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+UGxlYXNlIHdhaXQuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY3JlYXRlVGFsa0RhdGEoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cIjMwXCIgdmFsdWU9e3RoaXMuc3RhdGUuY29udGVudH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VDb250ZW50fSAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxidXR0b24gb25DbGljaz17dGhpcy5kb0FjdGlvbn0+c2VuZDwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5nby5iaW5kKCl9PmhvbWU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRhbGtSb29tOyJdLCJzb3VyY2VSb290IjoiIn0=