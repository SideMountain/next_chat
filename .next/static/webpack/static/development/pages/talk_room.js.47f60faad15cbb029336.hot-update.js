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
      var db = firebase__WEBPACK_IMPORTED_MODULE_8___default.a.database();
      var ref = db.ref('messages/1/' + this.state.friendId);
      var self = this;
      ref.orderByKey().limitToLast(1).on('value', function (snapshot) {
        var res = snapshot.val();

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

      var key = this.state.content;
      var now = new Date().toLocaleString();
      var userId = this.state.lastId * 1 + 1;
      console.log('aaaaa:' + id);
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

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 13
        }
      }, this.state.lastId == -1 ? __jsx("p", {
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
      }, this.createTalkData(), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 25
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
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
          lineNumber: 132,
          columnNumber: 33
        }
      })), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 29
        }
      }, __jsx("button", {
        onClick: this.doAction,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 33
        }
      }, "send"))))), __jsx("button", {
        onClick: this.go.bind(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhbGtSb29tLmpzIl0sIm5hbWVzIjpbIlRhbGtSb29tIiwicHJvcHMiLCJmb250U2l6ZSIsInBhZGRpbmciLCJzdGF0ZSIsImZyaWVuZElkIiwiUm91dGVyIiwicXVlcnkiLCJ1c2VyX2lkIiwidGFsa0RhdGEiLCJjb250ZW50IiwibGFzdElkIiwiZ2V0TGFzdElkIiwiZ2V0VGFsa0RhdGEiLCJkb0FjdGlvbiIsImJpbmQiLCJvbkNoYW5nZUNvbnRlbnQiLCJkYiIsImZpcmViYXNlIiwiZGF0YWJhc2UiLCJyZWYiLCJzZWxmIiwiZCIsIm9yZGVyQnlLZXkiLCJvbiIsInNuYXBzaG90Iiwic2V0U3RhdGUiLCJ2YWwiLCJyZXN1bHQiLCJsZW5ndGgiLCJpIiwicHVzaCIsImZyb21fZmxhZyIsImNyZWF0ZV9kYXRlIiwibGltaXRUb0xhc3QiLCJyZXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJrZXkiLCJub3ciLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ1c2VySWQiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJkYXRhIiwicmVhZF9mbGFnIiwidXBkYXRlX2RhdGUiLCJzZXQiLCJjcmVhdGVUYWxrRGF0YSIsImdvIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsUTs7Ozs7QUFPRixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLGdOQUxYO0FBQ0pDLGNBQVEsRUFBRSxNQUROO0FBRUpDLGFBQU8sRUFBRTtBQUZMLEtBS1c7O0FBRWYsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGNBQVEsRUFBRUMsbURBQU0sQ0FBQ0MsS0FBUCxDQUFhQyxPQURkO0FBRVRDLGNBQVEsRUFBRSxFQUZEO0FBR1RDLGFBQU8sRUFBRSxFQUhBO0FBSVRDLFlBQU0sRUFB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QixDQUFDLENBQTFCLEVBQTZCO0FBQ3pCLGFBQUtDLFNBQUw7QUFDSDs7QUFDRCxhQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSyxLQUFLUixLQUFMLENBQVdPLE1BQVgsSUFBcUIsQ0FBQyxDQUF0QixHQUVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkMsR0FJRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLLEtBQUt3QyxjQUFMLEVBREwsRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsWUFBSSxFQUFDLElBQXhCO0FBQTZCLGFBQUssRUFBRSxLQUFLL0MsS0FBTCxDQUFXTSxPQUEvQztBQUF3RCxnQkFBUSxFQUFFLEtBQUtNLGVBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBSixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJO0FBQVEsZUFBTyxFQUFFLEtBQUtGLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQUosQ0FGSixDQUZKLENBREosQ0FMSixFQWVJO0FBQVEsZUFBTyxFQUFFLEtBQUtzQyxFQUFMLENBQVFyQyxJQUFSLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkosQ0FESjtBQW1CSDs7OztFQXRJa0JzQywrQzs7QUF3SVJyRCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdGFsa19yb29tLmpzLjQ3ZjYwZmFhZDE1Y2JiMDI5MzM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL3N0b3JhZ2UnO1xyXG5pbXBvcnQgTGliIGZyb20gJy4uL3N0YXRpYy9jaGF0X2xpYic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY2xhc3MgVGFsa1Jvb20gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0eWxlID0ge1xyXG4gICAgICAgIGZvbnRTaXplOiAnMTJwdCcsXHJcbiAgICAgICAgcGFkZGluZzogJzVweCAxMHB4J1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGZyaWVuZElkOiBSb3V0ZXIucXVlcnkudXNlcl9pZCxcclxuICAgICAgICAgICAgdGFsa0RhdGE6IFtdLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnJyxcclxuICAgICAgICAgICAgbGFzdElkOiAtMVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdldExhc3RJZCgpO1xyXG4gICAgICAgIHRoaXMuZ2V0VGFsa0RhdGEoKTtcclxuICAgICAgICB0aGlzLmRvQWN0aW9uID0gdGhpcy5kb0FjdGlvbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VDb250ZW50ID0gdGhpcy5vbkNoYW5nZUNvbnRlbnQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDjg4jjg7zjgq/lhoXlrrnjgpLlj5blvpdcclxuICAgIGdldFRhbGtEYXRhKCkge1xyXG4gICAgICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbiAgICAgICAgbGV0IHJlZiA9IGRiLnJlZignbWVzc2FnZXMvMS8nICsgdGhpcy5zdGF0ZS5mcmllbmRJZCk7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBkID0gW107XHJcbiAgICAgICAgcmVmLm9yZGVyQnlLZXkoKS5vbigndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0YWxrRGF0YTogc25hcHNob3QudmFsKClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44OI44O844Kv5bGl5q2044KS5L2c5oiQXHJcbiAgICBjcmVhdGVUYWxrRGF0YSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudGFsa0RhdGEgPT0gbnVsbCB8fCB0aGlzLnN0YXRlLnRhbGtEYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbPHRyPjx0ZD5ObyBUYWxrIERhdGEuPC90ZD48L3RyPl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5zdGF0ZS50YWxrRGF0YSkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChcclxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz17dGhpcy5zdGF0ZS50YWxrRGF0YVtpXS5mcm9tX2ZsYWcgPT0gMSA/IFwiZnJvbV9zdHlsZVwiIDogXCJ0b19zdHlsZVwifT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRhbGtEYXRhW2ldLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRhbGtEYXRhW2ldLmNyZWF0ZV9kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOacgOW+jOOBrklE44KS5Y+W5b6XXHJcbiAgICBnZXRMYXN0SWQoKSB7XHJcbiAgICAgICAgbGV0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuICAgICAgICBsZXQgcmVmID0gZGIucmVmKCdtZXNzYWdlcy8xLycgKyB0aGlzLnN0YXRlLmZyaWVuZElkKTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcmVmLm9yZGVyQnlLZXkoKS5saW1pdFRvTGFzdCgxKS5vbigndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IHNuYXBzaG90LnZhbCgpO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgaW4gcmVzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0SWQ6aVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDjg6Hjg4Pjgrvjg7zjgrjlhoXlrrlcclxuICAgIG9uQ2hhbmdlQ29udGVudChlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyDjg6Hjg4Pjgrvjg7zjgrjpgIHkv6FcclxuICAgIGRvQWN0aW9uKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sYXN0SWQgPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQga2V5ID0gdGhpcy5zdGF0ZS5jb250ZW50O1xyXG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IHVzZXJJZCA9IHRoaXMuc3RhdGUubGFzdElkICogMSArIDE7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FhYWFhOicgKyBpZCk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuc3RhdGUuY29udGVudCxcclxuICAgICAgICAgICAgZnJvbV9mbGFnOiAxLFxyXG4gICAgICAgICAgICByZWFkX2ZsYWc6IDAsXHJcbiAgICAgICAgICAgIGNyZWF0ZV9kYXRlOiBub3csXHJcbiAgICAgICAgICAgIHVwZGF0ZV9kYXRlOiBub3dcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuICAgICAgICBsZXQgcmVmID0gZGIucmVmKCdtZXNzYWdlcy8xLycgKyB0aGlzLnN0YXRlLmZyaWVuZElkICsgJy8nICsgdXNlcklkKTtcclxuICAgICAgICByZWYuc2V0KGRhdGEpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJyxcclxuICAgICAgICAgICAgbGFzdElkOiAtMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOaIu+OCi1xyXG4gICAgZ28oKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9ob21lJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRhbGtEYXRhID09IG51bGwgfHwgdGhpcy5zdGF0ZS50YWxrRGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldFRhbGtEYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxhc3RJZCA9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmdldExhc3RJZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubGFzdElkID09IC0xXHJcbiAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICA8cD5QbGVhc2Ugd2FpdC4uLjwvcD5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNyZWF0ZVRhbGtEYXRhKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBzaXplPVwiMzBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50fSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZUNvbnRlbnR9IC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZG9BY3Rpb259PnNlbmQ8L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmdvLmJpbmQoKX0+YmFjazwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRhbGtSb29tOyJdLCJzb3VyY2VSb290IjoiIn0=