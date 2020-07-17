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
            lineNumber: 87,
            columnNumber: 21
          }
        }, __jsx("th", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
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
            lineNumber: 94,
            columnNumber: 17
          }
        }, __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 21
          }
        }, this.state.talkData[i].user_name), __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
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
          lineNumber: 114,
          columnNumber: 13
        }
      }, this.state.talkData.length == 0 ? __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 17
        }
      }, "Please wait...") : __jsx("table", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 17
        }
      }, __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhbGtMaXN0LmpzIl0sIm5hbWVzIjpbIlRhbGtMaXN0IiwicHJvcHMiLCJmb250U2l6ZSIsInBhZGRpbmciLCJzdGF0ZSIsImRhdGEiLCJhY3RpdmVVc2VyRGF0YSIsInRhbGtEYXRhIiwiZ2V0VXNlckxpc3QiLCJkYiIsImZpcmViYXNlIiwiZGF0YWJhc2UiLCJyZWYiLCJzZWxmIiwib3JkZXJCeUtleSIsIm9uIiwic25hcHNob3QiLCJzZXRTdGF0ZSIsInZhbCIsImdldEFjdGl2ZVVzZXJMaXN0IiwiYWN0aXZlVXNlckxpc3QiLCJpIiwiYWN0aXZlX2ZsYWciLCJwdXNoIiwiZ2V0VGFsa0xpc3QiLCJ0YWxrTGlzdCIsImlkIiwibGltaXRUb0xhc3QiLCJyZXMiLCJqIiwidXNlcl9pZCIsInVzZXJfbmFtZSIsImNvbnRlbnQiLCJmcm9tX2ZsYWciLCJyZWFkX2ZsYWciLCJjcmVhdGVfZGF0ZSIsInVwZGF0ZV9kYXRlIiwicmVzdWx0IiwibGVuZ3RoIiwiZ28iLCJiaW5kIiwidXNlcklkIiwiUm91dGVyIiwiY3JlYXRlVGFsa0xpc3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxROzs7OztBQU1GLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsZ05BTFg7QUFDSkMsY0FBUSxFQUFFLE1BRE47QUFFSkMsYUFBTyxFQUFFO0FBRkwsS0FLVzs7QUFFZixVQUFLQyxLQUFMLEdBQWE7QUFDVEMsVUFBSSxFQUFFLEVBREc7QUFFVEMsb0JBQWMsRUFBRSxFQUZQO0FBR1RDLGNBQVEsRUFBRTtBQUhELEtBQWI7O0FBS0EsVUFBS0MsV0FBTDs7QUFQZTtBQVFsQixHLENBRUQ7Ozs7O2tDQUNjO0FBQUE7O0FBQ1YsVUFBSUMsRUFBRSxHQUFHQywrQ0FBUSxD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U0FBNUIsQ0FGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSyxLQUFLM0IsS0FBTCxDQUFXRyxRQUFYLENBQW9CYyxDQUFwQixFQUF1QlcsT0FBNUIsQ0FISixDQURKO0FBT0g7O0FBQ0QsYUFBT0ssTUFBUDtBQUNILEssQ0FFRDs7Ozt1QkFDR0ksTSxFQUFRO0FBQ1BDLHlEQUFNLENBQUNuQixJQUFQLENBQVksd0JBQXdCa0IsTUFBcEM7QUFDSDs7OzZCQUVRO0FBQ0wsVUFBSSxLQUFLckMsS0FBTCxDQUFXQyxJQUFYLENBQWdCaUMsTUFBaEIsSUFBMEIsQ0FBOUIsRUFBaUM7QUFDN0IsYUFBSzlCLFdBQUw7QUFDSDs7QUFDRCxhQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSyxLQUFLSixLQUFMLENBQVdHLFFBQVgsQ0FBb0IrQixNQUFwQixJQUE4QixDQUE5QixHQUVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkMsR0FJRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLLEtBQUtLLGNBQUwsRUFETCxDQURKLENBTEosQ0FESjtBQWNIOzs7O0VBekhrQkMsK0M7O0FBNEhSNUMsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGhvbWUuanMuN2JmNzJhMzNjODA3ZGU0N2MwYTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcbmltcG9ydCAnZmlyZWJhc2Uvc3RvcmFnZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY2xhc3MgVGFsa0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3R5bGUgPSB7XHJcbiAgICAgICAgZm9udFNpemU6ICcxMnB0JyxcclxuICAgICAgICBwYWRkaW5nOiAnNXB4IDEwcHgnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgICAgIGFjdGl2ZVVzZXJEYXRhOiBbXSxcclxuICAgICAgICAgICAgdGFsa0RhdGE6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0VXNlckxpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlj4vkurrjg4fjg7zjgr/lj5blvpdcclxuICAgIGdldFVzZXJMaXN0KCkge1xyXG4gICAgICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbiAgICAgICAgbGV0IHJlZiA9IGRiLnJlZignZnJpZW5kX2luZm8vMScpO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICByZWYub3JkZXJCeUtleSgpLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHNuYXBzaG90LnZhbCgpXHJcbiAgICAgICAgICAgIH0sICgpID0+IHt0aGlzLmdldEFjdGl2ZVVzZXJMaXN0KCk7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44Ki44Kv44OG44Kj44OW44Om44O844K244Gu44G/44OH44O844K/5Y+W5b6XXHJcbiAgICBnZXRBY3RpdmVVc2VyTGlzdCgpIHtcclxuICAgICAgICBsZXQgYWN0aXZlVXNlckxpc3QgPSBbXTtcclxuICAgICAgICBsZXQgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGxldCByZWY7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuc3RhdGUuZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhW2ldLmFjdGl2ZV9mbGFnID09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlZiA9IGRiLnJlZigndXNlcl9pbmZvLycgKyBpKTtcclxuICAgICAgICAgICAgcmVmLm9yZGVyQnlLZXkoKS5vbigndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVVzZXJMaXN0LnB1c2goc25hcHNob3QudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVXNlckRhdGE6IGFjdGl2ZVVzZXJMaXN0XHJcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7dGhpcy5nZXRUYWxrTGlzdCgpfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDjg4jjg7zjgq/jg6rjgrnjg4jlj5blvpdcclxuICAgIGdldFRhbGtMaXN0KCkge1xyXG4gICAgICAgIGxldCB0YWxrTGlzdCA9IFtdO1xyXG4gICAgICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbiAgICAgICAgbGV0IHJlZjtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnN0YXRlLmFjdGl2ZVVzZXJEYXRhKSB7XHJcbiAgICAgICAgICAgIHJlZiA9IGRiLnJlZignbWVzc2FnZXMvMS8nICsgdGhpcy5zdGF0ZS5hY3RpdmVVc2VyRGF0YVtpXS5pZCk7XHJcbiAgICAgICAgICAgIHJlZi5vcmRlckJ5S2V5KCkubGltaXRUb0xhc3QoMSkub24oJ3ZhbHVlJywgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqIGluIHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbGtMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB0aGlzLnN0YXRlLmFjdGl2ZVVzZXJEYXRhW2ldLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX25hbWU6IHRoaXMuc3RhdGUuYWN0aXZlVXNlckRhdGFbaV0udXNlcl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiByZXNbal0uY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbV9mbGFnOiByZXNbal0uZnJvbV9mbGFnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkX2ZsYWc6IHJlc1tqXS5yZWFkX2ZsYWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZV9kYXRlOiByZXNbal0uY3JlYXRlX2RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZV9kYXRlOiByZXNbal0udXBkYXRlX2RhdGVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFsa0RhdGE6IHRhbGtMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7ICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6KGo56S644GZ44KL44OI44O844Kv44Oq44K544OI44Gu55Sf5oiQXHJcbiAgICBjcmVhdGVUYWxrTGlzdCgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudGFsa0RhdGEgPT0gbnVsbCB8fCB0aGlzLnN0YXRlLnRhbGtEYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbPHRyIGtleT1cIjBcIj48dGg+Tk8gREFUQS48L3RoPjwvdHI+XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnN0YXRlLnRhbGtEYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRhbGtEYXRhW2ldID09IG51bGwgfHwgdGhpcy5zdGF0ZS50YWxrRGF0YVtpXS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goXHJcbiAgICAgICAgICAgICAgICA8dHIgZGF0YS10YWc9e3RoaXMuc3RhdGUudGFsa0RhdGFbaV0udXNlcl9pZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdvLmJpbmQobnVsbCwgdGhpcy5zdGF0ZS50YWxrRGF0YVtpXS51c2VyX2lkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLnRhbGtEYXRhW2ldLnVzZXJfbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS50YWxrRGF0YVtpXS5jb250ZW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOODmuODvOOCuOenu+WLleioreWumlxyXG4gICAgZ28odXNlcklkKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy90YWxrX3Jvb20/dXNlcl9pZD0nICsgdXNlcklkKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldFVzZXJMaXN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50YWxrRGF0YS5sZW5ndGggPT0gMFxyXG4gICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgPHA+UGxlYXNlIHdhaXQuLi48L3A+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jcmVhdGVUYWxrTGlzdCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWxrTGlzdDsiXSwic291cmNlUm9vdCI6IiJ9