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
      friendId: next_router__WEBPACK_IMPORTED_MODULE_11___default.a.query.id,
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
      var d = [];
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
            lineNumber: 45,
            columnNumber: 21
          }
        }, __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
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
            lineNumber: 49,
            columnNumber: 17
          }
        }, __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 21
          }
        }, this.state.talkData[i].content), __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 21
          }
        }, this.state.talkData[i].create_date)));
      }

      return result;
    } // 最後のIDを取得

  }, {
    key: "getLastId",
    value: function getLastId() {
      var _this2 = this;

      console.log('lastId:' + this.state.lastId);
      var db = firebase__WEBPACK_IMPORTED_MODULE_8___default.a.database();
      var ref = db.ref('messages/1');
      var self = this;
      ref.orderByKey().limitToLast(1).on('value', function (snapshot) {
        var res = snapshot.val();

        for (var i in res) {
          self.setState({
            lastId: 5
          });
          console.log('after:' + _this2.state.lastId);
          console.log('i:' + i);
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
        this.getLastId();
      }

      var key = this.state.content;
      var now = new Date().toLocaleString();
      var id = this.state.lastId * 1 + 1;
      console.log('aaaaa:' + id);
      var data = {
        content: this.state.content,
        from_flag: 1,
        read_flag: 0,
        create_date: now,
        update_date: now
      };
      var db = firebase__WEBPACK_IMPORTED_MODULE_8___default.a.database();
      var ref = db.ref('messages/1/' + this.state.friendId + '/' + id);
      ref.set(data);
      this.setState({
        friendId: next_router__WEBPACK_IMPORTED_MODULE_11___default.a.query.id,
        talkData: [],
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

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 13
        }
      }, __jsx("table", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 17
        }
      }, __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 21
        }
      }, this.createTalkData(), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 25
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
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
          lineNumber: 130,
          columnNumber: 33
        }
      })), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 29
        }
      }, __jsx("button", {
        onClick: this.doAction,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 33
        }
      }, "send"))))), __jsx("button", {
        onClick: this.go.bind(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhbGtSb29tLmpzIl0sIm5hbWVzIjpbIlRhbGtSb29tIiwicHJvcHMiLCJmb250U2l6ZSIsInBhZGRpbmciLCJzdGF0ZSIsImZyaWVuZElkIiwiUm91dGVyIiwicXVlcnkiLCJpZCIsInRhbGtEYXRhIiwiY29udGVudCIsImxhc3RJZCIsImdldExhc3RJZCIsImdldFRhbGtEYXRhIiwiZG9BY3Rpb24iLCJiaW5kIiwib25DaGFuZ2VDb250ZW50IiwiZGIiLCJmaXJlYmFzZSIsImRhdGFiYXNlIiwicmVmIiwic2VsZiIsImQiLCJvcmRlckJ5S2V5Iiwib24iLCJzbmFwc2hvdCIsInNldFN0YXRlIiwidmFsIiwicmVzdWx0IiwibGVuZ3RoIiwiaSIsInB1c2giLCJmcm9tX2ZsYWciLCJjcmVhdGVfZGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJsaW1pdFRvTGFzdCIsInJlcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImtleSIsIm5vdyIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImRhdGEiLCJyZWFkX2ZsYWciLCJ1cGRhdGVfZGF0ZSIsInNldCIsImNyZWF0ZVRhbGtEYXRhIiwiZ28iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxROzs7OztBQU9GLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsZ05BTFg7QUFDSkMsY0FBUSxFQUFFLE1BRE47QUFFSkMsYUFBTyxFQUFFO0FBRkwsS0FLVzs7QUFFZixVQUFLQyxLQUFMLEdBQWE7QUFDVEMsY0FBUSxFQUFFQyxtREFBTSxDQUFDQyxLQUFQLENBQWFDLEVBRGQ7QUFFVEMsY0FBUSxFQUFFLEVBRkQ7QUFHVEMsYUFBTyxFQUFFLEVBSEE7QUFJVEMsWUFBTSxFQUFFLENBQUM7QUFKQSxLQUFiOztB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Q3lCLElBQVAsQ0FBWSxPQUFaO0FBQ0g7Ozs2QkFFUTtBQUNMLFVBQUksS0FBSzNCLEtBQUwsQ0FBV0ssUUFBWCxJQUF1QixJQUF2QixJQUErQixLQUFLTCxLQUFMLENBQVdLLFFBQVgsQ0FBb0JvQixNQUFwQixJQUE4QixDQUFqRSxFQUFvRTtBQUNoRSxhQUFLaEIsV0FBTDtBQUNIOztBQUNELGFBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ssS0FBS29DLGNBQUwsRUFETCxFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUk7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixZQUFJLEVBQUMsSUFBeEI7QUFBNkIsYUFBSyxFQUFFLEtBQUs3QyxLQUFMLENBQVdNLE9BQS9DO0FBQXdELGdCQUFRLEVBQUUsS0FBS00sZUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFKLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUk7QUFBUSxlQUFPLEVBQUUsS0FBS0YsUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBSixDQUZKLENBRkosQ0FESixDQURKLEVBVUk7QUFBUSxlQUFPLEVBQUUsS0FBS29DLEVBQUwsQ0FBUW5DLElBQVIsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWSixDQURKO0FBY0g7Ozs7RUFuSWtCb0MsK0M7O0FBcUlSbkQsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHRhbGtfcm9vbS5qcy5lNWJlNjVlMzE1MmYzOWU1NjhkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcclxuaW1wb3J0IExpYiBmcm9tICcuLi9zdGF0aWMvY2hhdF9saWInO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNsYXNzIFRhbGtSb29tIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdHlsZSA9IHtcclxuICAgICAgICBmb250U2l6ZTogJzEycHQnLFxyXG4gICAgICAgIHBhZGRpbmc6ICc1cHggMTBweCdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBmcmllbmRJZDogUm91dGVyLnF1ZXJ5LmlkLFxyXG4gICAgICAgICAgICB0YWxrRGF0YTogW10sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgICAgICAgICBsYXN0SWQ6IC0xXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0TGFzdElkKCk7XHJcbiAgICAgICAgdGhpcy5nZXRUYWxrRGF0YSgpO1xyXG4gICAgICAgIHRoaXMuZG9BY3Rpb24gPSB0aGlzLmRvQWN0aW9uLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNvbnRlbnQgPSB0aGlzLm9uQ2hhbmdlQ29udGVudC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOODiOODvOOCr+WGheWuueOCkuWPluW+l1xyXG4gICAgZ2V0VGFsa0RhdGEoKSB7XHJcbiAgICAgICAgbGV0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuICAgICAgICBsZXQgcmVmID0gZGIucmVmKCdtZXNzYWdlcy8xLycgKyB0aGlzLnN0YXRlLmZyaWVuZElkKTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGQgPSBbXTtcclxuICAgICAgICByZWYub3JkZXJCeUtleSgpLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHRhbGtEYXRhOiBzbmFwc2hvdC52YWwoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDjg4jjg7zjgq/lsaXmrbTjgpLkvZzmiJBcclxuICAgIGNyZWF0ZVRhbGtEYXRhKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50YWxrRGF0YSA9PSBudWxsIHx8IHRoaXMuc3RhdGUudGFsa0RhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFs8dHI+PHRkPk5vIFRhbGsgRGF0YS48L3RkPjwvdHI+XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnN0YXRlLnRhbGtEYXRhKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPXt0aGlzLnN0YXRlLnRhbGtEYXRhW2ldLmZyb21fZmxhZyA9PSAxID8gXCJmcm9tX3N0eWxlXCIgOiBcInRvX3N0eWxlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGFsa0RhdGFbaV0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGFsa0RhdGFbaV0uY3JlYXRlX2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pyA5b6M44GuSUTjgpLlj5blvpdcclxuICAgIGdldExhc3RJZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbGFzdElkOicgKyB0aGlzLnN0YXRlLmxhc3RJZCk7XHJcbiAgICAgICAgbGV0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuICAgICAgICBsZXQgcmVmID0gZGIucmVmKCdtZXNzYWdlcy8xJyk7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHJlZi5vcmRlckJ5S2V5KCkubGltaXRUb0xhc3QoMSkub24oJ3ZhbHVlJywgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBzbmFwc2hvdC52YWwoKTtcclxuICAgICAgICAgICAgZm9yKGxldCBpIGluIHJlcykge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdElkOjVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FmdGVyOicgKyB0aGlzLnN0YXRlLmxhc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaTonICsgaSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDjg6Hjg4Pjgrvjg7zjgrjlhoXlrrlcclxuICAgIG9uQ2hhbmdlQ29udGVudChlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyDjg6Hjg4Pjgrvjg7zjgrjpgIHkv6FcclxuICAgIGRvQWN0aW9uKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sYXN0SWQgPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRMYXN0SWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGtleSA9IHRoaXMuc3RhdGUuY29udGVudDtcclxuICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpO1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMuc3RhdGUubGFzdElkICogMSArIDE7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FhYWFhOicgKyBpZCk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuc3RhdGUuY29udGVudCxcclxuICAgICAgICAgICAgZnJvbV9mbGFnOiAxLFxyXG4gICAgICAgICAgICByZWFkX2ZsYWc6IDAsXHJcbiAgICAgICAgICAgIGNyZWF0ZV9kYXRlOiBub3csXHJcbiAgICAgICAgICAgIHVwZGF0ZV9kYXRlOiBub3dcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuICAgICAgICBsZXQgcmVmID0gZGIucmVmKCdtZXNzYWdlcy8xLycgKyB0aGlzLnN0YXRlLmZyaWVuZElkICsgJy8nICsgaWQpO1xyXG4gICAgICAgIHJlZi5zZXQoZGF0YSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGZyaWVuZElkOiBSb3V0ZXIucXVlcnkuaWQsXHJcbiAgICAgICAgICAgIHRhbGtEYXRhOiBbXSxcclxuICAgICAgICAgICAgY29udGVudDogJycsXHJcbiAgICAgICAgICAgIGxhc3RJZDogLTFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmiLvjgotcclxuICAgIGdvKCkge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvaG9tZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50YWxrRGF0YSA9PSBudWxsIHx8IHRoaXMuc3RhdGUudGFsa0RhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRUYWxrRGF0YSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY3JlYXRlVGFsa0RhdGEoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIHNpemU9XCIzMFwiIHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRlbnR9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlQ29udGVudH0gLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxidXR0b24gb25DbGljaz17dGhpcy5kb0FjdGlvbn0+c2VuZDwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZ28uYmluZCgpfT5iYWNrPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVGFsa1Jvb207Il0sInNvdXJjZVJvb3QiOiIifQ==