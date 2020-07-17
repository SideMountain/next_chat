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
        console.log('res:' + res.user_name); // self.setState({
        //     friendName: res.user_name
        // }, () => this.printName(res.user_name));

        console.log('state1:' + _this3.state.friendName);
      });
      return 'test';
    }
  }, {
    key: "getName",
    value: function getName() {
      console.log('test222');
      return 'test';
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
            lineNumber: 77,
            columnNumber: 21
          }
        }, __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
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
            lineNumber: 81,
            columnNumber: 17
          }
        }, __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 21
          }
        }, this.state.talkData[i].content), __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85,
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

      var aa = 'testaaa';
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        header: "Talk Room.",
        title: this.getFriendName(),
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
          columnNumber: 21
        }
      }, __jsx("button", {
        onClick: this.doAction,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 25
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhbGtSb29tLmpzIl0sIm5hbWVzIjpbIlRhbGtSb29tIiwicHJvcHMiLCJmb250U2l6ZSIsInBhZGRpbmciLCJzdGF0ZSIsImZyaWVuZElkIiwiUm91dGVyIiwicXVlcnkiLCJ1c2VyX2lkIiwiZnJpZW5kTmFtZSIsInRhbGtEYXRhIiwiY29udGVudCIsImxhc3RJZCIsImdldEZyaWVuZE5hbWUiLCJnZXRMYXN0SWQiLCJnZXRUYWxrRGF0YSIsImRvQWN0aW9uIiwiYmluZCIsIm9uQ2hhbmdlQ29udGVudCIsImRiIiwiZmlyZWJhc2UiLCJkYXRhYmFzZSIsInJlZiIsInNlbGYiLCJvcmRlckJ5S2V5Iiwib24iLCJzbmFwc2hvdCIsInJlcyIsInZhbCIsImxlbmd0aCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInVzZXJfbmFtZSIsInJlc3VsdCIsImkiLCJwdXNoIiwiZnJvbV9mbGFnIiwiY3JlYXRlX2RhdGUiLCJsaW1pdFRvTGFzdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImtleSIsIm5vdyIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInVzZXJJZCIsImRhdGEiLCJyZWFkX2ZsYWciLCJ1cGRhdGVfZGF0ZSIsInNldCIsImFhIiwiY3JlYXRlVGFsa0RhdGEiLCJnbyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFE7Ozs7O0FBT0Ysb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxnTkFMWDtBQUNKQyxjQUFRLEVBQUUsTUFETjtBQUVKQyxhQUFPLEVBQUU7QUFGTCxLQUtXOztBQUVmLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxjQUFRLEVBQUVDLG1EQUFNLENBQUNDLEtBQVAsQ0FBYUMsT0FEZDtBQUVUQyxnQkFBVSxF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QUFBLGdCQUFKLENBRlEsQ0FGSixDQURKLENBTEosRUFlSTtBQUFRLGVBQU8sRUFBRSxLQUFLc0MsRUFBTCxDQUFRckMsSUFBUixFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZKLENBREosQ0FESjtBQXFCSDs7OztFQWhMa0JzQywrQzs7QUFrTFJ2RCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdGFsa19yb29tLmpzLjlkMzEzMDUxODAxMmEyY2E5OGZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL3N0b3JhZ2UnO1xyXG5pbXBvcnQgTGliIGZyb20gJy4uL3N0YXRpYy9jaGF0X2xpYic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcbmNsYXNzIFRhbGtSb29tIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdHlsZSA9IHtcclxuICAgICAgICBmb250U2l6ZTogJzEycHQnLFxyXG4gICAgICAgIHBhZGRpbmc6ICc1cHggMTBweCdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBmcmllbmRJZDogUm91dGVyLnF1ZXJ5LnVzZXJfaWQsXHJcbiAgICAgICAgICAgIGZyaWVuZE5hbWU6ICcnLFxyXG4gICAgICAgICAgICB0YWxrRGF0YTogW10sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgICAgICAgICBsYXN0SWQ6IC0xXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0RnJpZW5kTmFtZSgpO1xyXG4gICAgICAgIHRoaXMuZ2V0TGFzdElkKCk7XHJcbiAgICAgICAgdGhpcy5nZXRUYWxrRGF0YSgpO1xyXG4gICAgICAgIHRoaXMuZG9BY3Rpb24gPSB0aGlzLmRvQWN0aW9uLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNvbnRlbnQgPSB0aGlzLm9uQ2hhbmdlQ29udGVudC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOODiOODvOOCr+WGheWuueOCkuWPluW+l1xyXG4gICAgZ2V0VGFsa0RhdGEoKSB7XHJcbiAgICAgICAgbGV0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuICAgICAgICBsZXQgcmVmID0gZGIucmVmKCdtZXNzYWdlcy8xLycgKyB0aGlzLnN0YXRlLmZyaWVuZElkKTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcmVmLm9yZGVyQnlLZXkoKS5vbigndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IHNuYXBzaG90LnZhbCgpO1xyXG4gICAgICAgICAgICBpZiAocmVzID09IG51bGwgfHwgcmVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0YWxrRGF0YTogc25hcHNob3QudmFsKClcclxuICAgICAgICAgICAgfSwgKCkgPT4gY29uc29sZS5sb2coJ3RhbGtEYXRhOicgKyB0aGlzLnN0YXRlLnRhbGtEYXRhKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Y+L6YGU5ZCN44KS5Y+W5b6XXHJcbiAgICBnZXRGcmllbmROYW1lKCkge1xyXG4gICAgICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbiAgICAgICAgbGV0IHJlZiA9IGRiLnJlZigndXNlcl9pbmZvLycgKyB0aGlzLnN0YXRlLmZyaWVuZElkKTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcmVmLm9yZGVyQnlLZXkoKS5vbigndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IHNuYXBzaG90LnZhbCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzOicgKyByZXMudXNlcl9uYW1lKTtcclxuICAgICAgICAgICAgLy8gc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC8vICAgICBmcmllbmROYW1lOiByZXMudXNlcl9uYW1lXHJcbiAgICAgICAgICAgIC8vIH0sICgpID0+IHRoaXMucHJpbnROYW1lKHJlcy51c2VyX25hbWUpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YXRlMTonICsgdGhpcy5zdGF0ZS5mcmllbmROYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gJ3Rlc3QnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5hbWUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QyMjInKTtcclxuICAgICAgICByZXR1cm4gJ3Rlc3QnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOOCs+ODs+OCveODvOODq1xyXG4gICAgcHJpbnROYW1lKHZhbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGF0ZTI6JyArIHRoaXMuc3RhdGUuZnJpZW5kTmFtZSArICcgIHZhbDonICsgdmFsKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDjg4jjg7zjgq/lsaXmrbTjgpLkvZzmiJBcclxuICAgIGNyZWF0ZVRhbGtEYXRhKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50YWxrRGF0YSA9PSBudWxsIHx8IHRoaXMuc3RhdGUudGFsa0RhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFs8dHI+PHRkPk5vIFRhbGsgRGF0YS48L3RkPjwvdHI+XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnN0YXRlLnRhbGtEYXRhKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPXt0aGlzLnN0YXRlLnRhbGtEYXRhW2ldLmZyb21fZmxhZyA9PSAxID8gXCJmcm9tX3N0eWxlXCIgOiBcInRvX3N0eWxlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGFsa0RhdGFbaV0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGFsa0RhdGFbaV0uY3JlYXRlX2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pyA5b6M44GuSUTjgpLlj5blvpdcclxuICAgIGdldExhc3RJZCgpIHtcclxuICAgICAgICBsZXQgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGxldCByZWYgPSBkYi5yZWYoJ21lc3NhZ2VzLzEvJyArIHRoaXMuc3RhdGUuZnJpZW5kSWQpO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICByZWYub3JkZXJCeUtleSgpLmxpbWl0VG9MYXN0KDEpLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMgPT0gbnVsbCB8fCByZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RJZDogMVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yKGxldCBpIGluIHJlcykge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdElkOmlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44Oh44OD44K744O844K45YaF5a65XHJcbiAgICBvbkNoYW5nZUNvbnRlbnQoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjb250ZW50OiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8g44Oh44OD44K744O844K46YCB5L+hXHJcbiAgICBkb0FjdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubGFzdElkID09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29udGVudCA9PSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBrZXkgPSB0aGlzLnN0YXRlLmNvbnRlbnQ7XHJcbiAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgICAgICBsZXQgdXNlcklkID0gdGhpcy5zdGF0ZS5sYXN0SWQgKiAxICsgMTtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgY29udGVudDogdGhpcy5zdGF0ZS5jb250ZW50LFxyXG4gICAgICAgICAgICBmcm9tX2ZsYWc6IDEsXHJcbiAgICAgICAgICAgIHJlYWRfZmxhZzogMCxcclxuICAgICAgICAgICAgY3JlYXRlX2RhdGU6IG5vdyxcclxuICAgICAgICAgICAgdXBkYXRlX2RhdGU6IG5vd1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGxldCByZWYgPSBkYi5yZWYoJ21lc3NhZ2VzLzEvJyArIHRoaXMuc3RhdGUuZnJpZW5kSWQgKyAnLycgKyB1c2VySWQpO1xyXG4gICAgICAgIHJlZi5zZXQoZGF0YSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgICAgICAgICBsYXN0SWQ6IC0xXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5oi744KLXHJcbiAgICBnbygpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL2hvbWUnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudGFsa0RhdGEgPT0gbnVsbCB8fCB0aGlzLnN0YXRlLnRhbGtEYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VGFsa0RhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubGFzdElkID09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TGFzdElkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhYSA9ICd0ZXN0YWFhJztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0IGhlYWRlcj1cIlRhbGsgUm9vbS5cIiB0aXRsZT17dGhpcy5nZXRGcmllbmROYW1lKCl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sYXN0SWQgPT0gLTFcclxuICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+UGxlYXNlIHdhaXQuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY3JlYXRlVGFsa0RhdGEoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cIjMwXCIgdmFsdWU9e3RoaXMuc3RhdGUuY29udGVudH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VDb250ZW50fSAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxidXR0b24gb25DbGljaz17dGhpcy5kb0FjdGlvbn0+c2VuZDwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5nby5iaW5kKCl9PmhvbWU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRhbGtSb29tOyJdLCJzb3VyY2VSb290IjoiIn0=