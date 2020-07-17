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
      talkData: [],
      content: '',
      lastId: -1
    };

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
        self.setState({
          talkData: snapshot.val()
        });
      });
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
            lineNumber: 44,
            columnNumber: 21
          }
        }, __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
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
            lineNumber: 48,
            columnNumber: 17
          }
        }, __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 21
          }
        }, this.state.talkData[i].content), __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
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

        for (var i in res) {
          console.log('最後のID:' + JSON.stringify(res[i]));
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

      var key = this.state.content;
      var now = new Date().toLocaleString();
      var userId = this.state.lastId * 1 + 1;
      console.log('aaaaa:' + userId);
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
        // this.getTalkData();
        console.log('nullなのでもっかいやります');
      }

      if (this.state.lastId == -1) {
        this.getLastId();
      }

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }
      }, this.state.lastId == -1 ? __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 17
        }
      }, "Please wait...") : __jsx("table", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 17
        }
      }, __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }
      }, this.createTalkData(), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 25
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 29
        }
      }, __jsx("input", {
        type: "text",
        size: "30",
        value: this.state.content,
        onChange: this.onChangeContent,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 33
        }
      })), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 29
        }
      }, __jsx("button", {
        onClick: this.doAction,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 33
        }
      }, "send"))))), __jsx("button", {
        onClick: this.go.bind(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 17
        }
      }, "back"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhbGtSb29tLmpzIl0sIm5hbWVzIjpbIlRhbGtSb29tIiwicHJvcHMiLCJmb250U2l6ZSIsInBhZGRpbmciLCJzdGF0ZSIsImZyaWVuZElkIiwiUm91dGVyIiwicXVlcnkiLCJ1c2VyX2lkIiwidGFsa0RhdGEiLCJjb250ZW50IiwibGFzdElkIiwiZ2V0TGFzdElkIiwiZ2V0VGFsa0RhdGEiLCJkb0FjdGlvbiIsImJpbmQiLCJvbkNoYW5nZUNvbnRlbnQiLCJkYiIsImZpcmViYXNlIiwiZGF0YWJhc2UiLCJyZWYiLCJzZWxmIiwib3JkZXJCeUtleSIsIm9uIiwic25hcHNob3QiLCJzZXRTdGF0ZSIsInZhbCIsInJlc3VsdCIsImxlbmd0aCIsImkiLCJwdXNoIiwiZnJvbV9mbGFnIiwiY3JlYXRlX2RhdGUiLCJsaW1pdFRvTGFzdCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsInRhcmdldCIsInZhbHVlIiwia2V5Iiwibm93IiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwidXNlcklkIiwiZGF0YSIsInJlYWRfZmxhZyIsInVwZGF0ZV9kYXRlIiwic2V0IiwiY3JlYXRlVGFsa0RhdGEiLCJnbyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFE7Ozs7O0FBT0Ysb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxnTkFMWDtBQUNKQyxjQUFRLEVBQUUsTUFETjtBQUVKQyxhQUFPLEVBQUU7QUFGTCxLQUtXOztBQUVmLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxjQUFRLEVBQUVDLG1EQUFNLENBQUNDLEtBQVAsQ0FBYUMsT0FEZDtBQUVUQyxjQUFRLEVBQUUsRUFGRDtBQUdUQyxhQUFPLEVBQUUsRUFIQTtBQUlU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dGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHRhbGtfcm9vbS5qcy44OGVkYWE1NzY5NDA4NDJlYjQwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcclxuaW1wb3J0IExpYiBmcm9tICcuLi9zdGF0aWMvY2hhdF9saWInO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNsYXNzIFRhbGtSb29tIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdHlsZSA9IHtcclxuICAgICAgICBmb250U2l6ZTogJzEycHQnLFxyXG4gICAgICAgIHBhZGRpbmc6ICc1cHggMTBweCdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBmcmllbmRJZDogUm91dGVyLnF1ZXJ5LnVzZXJfaWQsXHJcbiAgICAgICAgICAgIHRhbGtEYXRhOiBbXSxcclxuICAgICAgICAgICAgY29udGVudDogJycsXHJcbiAgICAgICAgICAgIGxhc3RJZDogLTFcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXRMYXN0SWQoKTtcclxuICAgICAgICB0aGlzLmdldFRhbGtEYXRhKCk7XHJcbiAgICAgICAgdGhpcy5kb0FjdGlvbiA9IHRoaXMuZG9BY3Rpb24uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ29udGVudCA9IHRoaXMub25DaGFuZ2VDb250ZW50LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44OI44O844Kv5YaF5a6544KS5Y+W5b6XXHJcbiAgICBnZXRUYWxrRGF0YSgpIHtcclxuICAgICAgICBsZXQgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGxldCByZWYgPSBkYi5yZWYoJ21lc3NhZ2VzLzEvJyArIHRoaXMuc3RhdGUuZnJpZW5kSWQpO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICByZWYub3JkZXJCeUtleSgpLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHRhbGtEYXRhOiBzbmFwc2hvdC52YWwoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDjg4jjg7zjgq/lsaXmrbTjgpLkvZzmiJBcclxuICAgIGNyZWF0ZVRhbGtEYXRhKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50YWxrRGF0YSA9PSBudWxsIHx8IHRoaXMuc3RhdGUudGFsa0RhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFs8dHI+PHRkPk5vIFRhbGsgRGF0YS48L3RkPjwvdHI+XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnN0YXRlLnRhbGtEYXRhKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPXt0aGlzLnN0YXRlLnRhbGtEYXRhW2ldLmZyb21fZmxhZyA9PSAxID8gXCJmcm9tX3N0eWxlXCIgOiBcInRvX3N0eWxlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGFsa0RhdGFbaV0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGFsa0RhdGFbaV0uY3JlYXRlX2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pyA5b6M44GuSUTjgpLlj5blvpdcclxuICAgIGdldExhc3RJZCgpIHtcclxuICAgICAgICBsZXQgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGxldCByZWYgPSBkYi5yZWYoJ21lc3NhZ2VzLzEvJyArIHRoaXMuc3RhdGUuZnJpZW5kSWQpO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICByZWYub3JkZXJCeUtleSgpLmxpbWl0VG9MYXN0KDEpLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSBpbiByZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmnIDlvozjga5JRDonICsgSlNPTi5zdHJpbmdpZnkocmVzW2ldKSk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0SWQ6aVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDjg6Hjg4Pjgrvjg7zjgrjlhoXlrrlcclxuICAgIG9uQ2hhbmdlQ29udGVudChlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyDjg6Hjg4Pjgrvjg7zjgrjpgIHkv6FcclxuICAgIGRvQWN0aW9uKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sYXN0SWQgPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQga2V5ID0gdGhpcy5zdGF0ZS5jb250ZW50O1xyXG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IHVzZXJJZCA9IHRoaXMuc3RhdGUubGFzdElkICogMSArIDE7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FhYWFhOicgKyB1c2VySWQpO1xyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLnN0YXRlLmNvbnRlbnQsXHJcbiAgICAgICAgICAgIGZyb21fZmxhZzogMSxcclxuICAgICAgICAgICAgcmVhZF9mbGFnOiAwLFxyXG4gICAgICAgICAgICBjcmVhdGVfZGF0ZTogbm93LFxyXG4gICAgICAgICAgICB1cGRhdGVfZGF0ZTogbm93XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbiAgICAgICAgbGV0IHJlZiA9IGRiLnJlZignbWVzc2FnZXMvMS8nICsgdGhpcy5zdGF0ZS5mcmllbmRJZCArICcvJyArIHVzZXJJZCk7XHJcbiAgICAgICAgcmVmLnNldChkYXRhKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY29udGVudDogJycsXHJcbiAgICAgICAgICAgIGxhc3RJZDogLTFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmiLvjgotcclxuICAgIGdvKCkge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvaG9tZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50YWxrRGF0YSA9PSBudWxsIHx8IHRoaXMuc3RhdGUudGFsa0RhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5nZXRUYWxrRGF0YSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbnVsbOOBquOBruOBp+OCguOBo+OBi+OBhOOChOOCiuOBvuOBmScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxhc3RJZCA9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmdldExhc3RJZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubGFzdElkID09IC0xXHJcbiAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICA8cD5QbGVhc2Ugd2FpdC4uLjwvcD5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNyZWF0ZVRhbGtEYXRhKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBzaXplPVwiMzBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50fSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZUNvbnRlbnR9IC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZG9BY3Rpb259PnNlbmQ8L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmdvLmJpbmQoKX0+YmFjazwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRhbGtSb29tOyJdLCJzb3VyY2VSb290IjoiIn0=