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
        });
      });
    } // トーク相手の名前を返却

  }, {
    key: "getFriendName",
    value: function getFriendName() {
      var db = firebase__WEBPACK_IMPORTED_MODULE_8___default.a.database();
      var ref = db.ref('user_info/' + this.state.friendId);
      var self = this;
      var res;
      ref.orderByKey().on('value', function (snapshot) {
        res = snapshot.val();
      });
      return res.user_name;
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
            lineNumber: 63,
            columnNumber: 21
          }
        }, __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63,
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
            lineNumber: 67,
            columnNumber: 17
          }
        }, __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 21
          }
        }, this.state.talkData[i].content), __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
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

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        header: "Talk Room.",
        title: this.getFriendName(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 13
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 17
        }
      }, this.state.lastId == -1 ? __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 21
        }
      }, "Please wait...") : __jsx("table", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 21
        }
      }, __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 25
        }
      }, this.createTalkData(), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 29
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
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
          lineNumber: 159,
          columnNumber: 37
        }
      })), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 21
        }
      }, __jsx("button", {
        onClick: this.doAction,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 25
        }
      }, "send"))))), __jsx("button", {
        onClick: this.go.bind(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhbGtSb29tLmpzIl0sIm5hbWVzIjpbIlRhbGtSb29tIiwicHJvcHMiLCJmb250U2l6ZSIsInBhZGRpbmciLCJzdGF0ZSIsImZyaWVuZElkIiwiUm91dGVyIiwicXVlcnkiLCJ1c2VyX2lkIiwiZnJpZW5kTmFtZSIsInRhbGtEYXRhIiwiY29udGVudCIsImxhc3RJZCIsImdldEZyaWVuZE5hbWUiLCJnZXRMYXN0SWQiLCJnZXRUYWxrRGF0YSIsImRvQWN0aW9uIiwiYmluZCIsIm9uQ2hhbmdlQ29udGVudCIsImRiIiwiZmlyZWJhc2UiLCJkYXRhYmFzZSIsInJlZiIsInNlbGYiLCJvcmRlckJ5S2V5Iiwib24iLCJzbmFwc2hvdCIsInJlcyIsInZhbCIsImxlbmd0aCIsInNldFN0YXRlIiwidXNlcl9uYW1lIiwicmVzdWx0IiwiaSIsInB1c2giLCJmcm9tX2ZsYWciLCJjcmVhdGVfZGF0ZSIsImxpbWl0VG9MYXN0IiwiZSIsInRhcmdldCIsInZhbHVlIiwia2V5Iiwibm93IiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwidXNlcklkIiwiZGF0YSIsInJlYWRfZmxhZyIsInVwZGF0ZV9kYXRlIiwic2V0IiwiY3JlYXRlVGFsa0RhdGEiLCJnbyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFE7Ozs7O0FBT0Ysb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxnTkFMWDtBQUNKQyxjQUFRLEVBQUUsTUFETjtBQUVKQyxhQUFPLEVBQUU7QUFGTCxLQUtXOztBQUVmLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxjQUFRLEVBQUVDLG1EQUFNLENBQUNDLEtBQVAsQ0FBYUMsT0FEZDtBQUVUQyxnQkFBVSxFQUFFLEVBRkg7QUFHVEMsY0FBUSxF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QTtBQUFBO0FBQUE7QUFBQSwwQkFGQyxHQUlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ssS0FBS3NDLGNBQUwsRUFETCxFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUk7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixZQUFJLEVBQUMsSUFBeEI7QUFBNkIsYUFBSyxFQUFFLEtBQUs5QyxLQUFMLENBQVdPLE9BQS9DO0FBQXdELGdCQUFRLEVBQUUsS0FBS08sZUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFKLENBREosRUFFUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUk7QUFBUSxlQUFPLEVBQUUsS0FBS0YsUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBSixDQUZRLENBRkosQ0FESixDQUxKLEVBZUk7QUFBUSxlQUFPLEVBQUUsS0FBS21DLEVBQUwsQ0FBUWxDLElBQVIsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmSixDQURKLENBREo7QUFxQkg7Ozs7RUFqS2tCbUMsK0M7O0FBbUtScEQsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHRhbGtfcm9vbS5qcy5jZWZjZGE4ZTc4YjU5ZjNhOTRhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcclxuaW1wb3J0IExpYiBmcm9tICcuLi9zdGF0aWMvY2hhdF9saWInO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5jbGFzcyBUYWxrUm9vbSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3R5bGUgPSB7XHJcbiAgICAgICAgZm9udFNpemU6ICcxMnB0JyxcclxuICAgICAgICBwYWRkaW5nOiAnNXB4IDEwcHgnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZnJpZW5kSWQ6IFJvdXRlci5xdWVyeS51c2VyX2lkLFxyXG4gICAgICAgICAgICBmcmllbmROYW1lOiAnJyxcclxuICAgICAgICAgICAgdGFsa0RhdGE6IFtdLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnJyxcclxuICAgICAgICAgICAgbGFzdElkOiAtMVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdldEZyaWVuZE5hbWUoKTtcclxuICAgICAgICB0aGlzLmdldExhc3RJZCgpO1xyXG4gICAgICAgIHRoaXMuZ2V0VGFsa0RhdGEoKTtcclxuICAgICAgICB0aGlzLmRvQWN0aW9uID0gdGhpcy5kb0FjdGlvbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VDb250ZW50ID0gdGhpcy5vbkNoYW5nZUNvbnRlbnQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDjg4jjg7zjgq/lhoXlrrnjgpLlj5blvpdcclxuICAgIGdldFRhbGtEYXRhKCkge1xyXG4gICAgICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbiAgICAgICAgbGV0IHJlZiA9IGRiLnJlZignbWVzc2FnZXMvMS8nICsgdGhpcy5zdGF0ZS5mcmllbmRJZCk7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHJlZi5vcmRlckJ5S2V5KCkub24oJ3ZhbHVlJywgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBzbmFwc2hvdC52YWwoKTtcclxuICAgICAgICAgICAgaWYgKHJlcyA9PSBudWxsIHx8IHJlcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdGFsa0RhdGE6IHNuYXBzaG90LnZhbCgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOODiOODvOOCr+ebuOaJi+OBruWQjeWJjeOCkui/lOWNtFxyXG4gICAgZ2V0RnJpZW5kTmFtZSgpIHtcclxuICAgICAgICBsZXQgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGxldCByZWYgPSBkYi5yZWYoJ3VzZXJfaW5mby8nICsgdGhpcy5zdGF0ZS5mcmllbmRJZCk7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCByZXM7XHJcbiAgICAgICAgcmVmLm9yZGVyQnlLZXkoKS5vbigndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgcmVzID0gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy51c2VyX25hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44OI44O844Kv5bGl5q2044KS5L2c5oiQXHJcbiAgICBjcmVhdGVUYWxrRGF0YSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudGFsa0RhdGEgPT0gbnVsbCB8fCB0aGlzLnN0YXRlLnRhbGtEYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbPHRyPjx0ZD5ObyBUYWxrIERhdGEuPC90ZD48L3RyPl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5zdGF0ZS50YWxrRGF0YSkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChcclxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz17dGhpcy5zdGF0ZS50YWxrRGF0YVtpXS5mcm9tX2ZsYWcgPT0gMSA/IFwiZnJvbV9zdHlsZVwiIDogXCJ0b19zdHlsZVwifT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRhbGtEYXRhW2ldLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRhbGtEYXRhW2ldLmNyZWF0ZV9kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOacgOW+jOOBrklE44KS5Y+W5b6XXHJcbiAgICBnZXRMYXN0SWQoKSB7XHJcbiAgICAgICAgbGV0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuICAgICAgICBsZXQgcmVmID0gZGIucmVmKCdtZXNzYWdlcy8xLycgKyB0aGlzLnN0YXRlLmZyaWVuZElkKTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcmVmLm9yZGVyQnlLZXkoKS5saW1pdFRvTGFzdCgxKS5vbigndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IHNuYXBzaG90LnZhbCgpO1xyXG4gICAgICAgICAgICBpZiAocmVzID09IG51bGwgfHwgcmVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0SWQ6IDFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSBpbiByZXMpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RJZDppXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOODoeODg+OCu+ODvOOCuOWGheWuuVxyXG4gICAgb25DaGFuZ2VDb250ZW50KGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY29udGVudDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOODoeODg+OCu+ODvOOCuOmAgeS/oVxyXG4gICAgZG9BY3Rpb24oZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxhc3RJZCA9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbnRlbnQgPT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQga2V5ID0gdGhpcy5zdGF0ZS5jb250ZW50O1xyXG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IHVzZXJJZCA9IHRoaXMuc3RhdGUubGFzdElkICogMSArIDE7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuc3RhdGUuY29udGVudCxcclxuICAgICAgICAgICAgZnJvbV9mbGFnOiAxLFxyXG4gICAgICAgICAgICByZWFkX2ZsYWc6IDAsXHJcbiAgICAgICAgICAgIGNyZWF0ZV9kYXRlOiBub3csXHJcbiAgICAgICAgICAgIHVwZGF0ZV9kYXRlOiBub3dcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuICAgICAgICBsZXQgcmVmID0gZGIucmVmKCdtZXNzYWdlcy8xLycgKyB0aGlzLnN0YXRlLmZyaWVuZElkICsgJy8nICsgdXNlcklkKTtcclxuICAgICAgICByZWYuc2V0KGRhdGEpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJyxcclxuICAgICAgICAgICAgbGFzdElkOiAtMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOaIu+OCi1xyXG4gICAgZ28oKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9ob21lJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRhbGtEYXRhID09IG51bGwgfHwgdGhpcy5zdGF0ZS50YWxrRGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldFRhbGtEYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxhc3RJZCA9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmdldExhc3RJZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0IGhlYWRlcj1cIlRhbGsgUm9vbS5cIiB0aXRsZT17dGhpcy5nZXRGcmllbmROYW1lKCl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sYXN0SWQgPT0gLTFcclxuICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+UGxlYXNlIHdhaXQuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY3JlYXRlVGFsa0RhdGEoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cIjMwXCIgdmFsdWU9e3RoaXMuc3RhdGUuY29udGVudH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VDb250ZW50fSAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxidXR0b24gb25DbGljaz17dGhpcy5kb0FjdGlvbn0+c2VuZDwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5nby5iaW5kKCl9PmhvbWU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRhbGtSb29tOyJdLCJzb3VyY2VSb290IjoiIn0=