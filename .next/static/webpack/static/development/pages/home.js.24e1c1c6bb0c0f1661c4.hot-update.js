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
            lineNumber: 94,
            columnNumber: 21
          }
        }, __jsx("th", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
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
          "data-tag": this.state.talkData[i],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 17
          }
        }, __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 21
          }
        }, this.state.talkData[i].user_name), __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 21
          }
        }, this.state.talkData[i].content)));
      }

      return result;
    }
  }, {
    key: "render",
    value: function render() {
      // if (this.state.data.length == 0) {
      //     this.getUserList();
      // }
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 13
        }
      }, __jsx("table", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 17
        }
      }, __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhbGtMaXN0LmpzIl0sIm5hbWVzIjpbIlRhbGtMaXN0IiwicHJvcHMiLCJmb250U2l6ZSIsInBhZGRpbmciLCJzdGF0ZSIsImRhdGEiLCJhY3RpdmVVc2VyRGF0YSIsInRhbGtEYXRhIiwiZ2V0VXNlckxpc3QiLCJjb25zb2xlIiwibG9nIiwiZGIiLCJmaXJlYmFzZSIsImRhdGFiYXNlIiwicmVmIiwic2VsZiIsIm9yZGVyQnlLZXkiLCJvbiIsInNuYXBzaG90IiwiSlNPTiIsInN0cmluZ2lmeSIsInZhbCIsInNldFN0YXRlIiwiZ2V0QWN0aXZlVXNlckxpc3QiLCJhY3RpdmVVc2VyTGlzdCIsImkiLCJhY3RpdmVfZmxhZyIsInB1c2giLCJnZXRUYWxrTGlzdCIsInRhbGtMaXN0IiwiaWQiLCJsaW1pdFRvTGFzdCIsInJlcyIsImoiLCJ1c2VyX25hbWUiLCJjb250ZW50IiwiZnJvbV9mbGFnIiwicmVhZF9mbGFnIiwiY3JlYXRlX2RhdGUiLCJ1cGRhdGVfZGF0ZSIsInJlc3VsdCIsImxlbmd0aCIsImNyZWF0ZVRhbGtMaXN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsUTs7Ozs7QUFNRixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLGdOQUxYO0FBQ0pDLGNBQVEsRUFBRSxNQUROO0FBRUpDLGFBQU8sRUFBRTtBQUZMLEtBS1c7O0FBRWYsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFVBQUksRUFBRSxFQURHO0FBRVRDLG9CQUFjLEVBQUUsRUFGUDtBQUdUQyxjQUFRLEVBQUU7QUFIRCxLQUFiOztBQUtBLFVBQUtDLFdBQUw7O0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFSZTtBQVNsQixHLENBRUQ7Ozs7O2tDQUNjO0FBQUE7O0FB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QUE4SFIzQyx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaG9tZS5qcy4yNGUxYzFjNmJiMGMwZjE2NjFjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jbGFzcyBUYWxrTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdHlsZSA9IHtcclxuICAgICAgICBmb250U2l6ZTogJzEycHQnLFxyXG4gICAgICAgIHBhZGRpbmc6ICc1cHggMTBweCdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgYWN0aXZlVXNlckRhdGE6IFtdLFxyXG4gICAgICAgICAgICB0YWxrRGF0YTogW11cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXRVc2VyTGlzdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfjgajjgYonKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlj4vkurrjg4fjg7zjgr/lj5blvpdcclxuICAgIGdldFVzZXJMaXN0KCkge1xyXG4gICAgICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbiAgICAgICAgbGV0IHJlZiA9IGRiLnJlZignZnJpZW5kX2luZm8vMScpO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICByZWYub3JkZXJCeUtleSgpLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShzbmFwc2hvdC52YWwoKSkpO1xyXG4gICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHNuYXBzaG90LnZhbCgpXHJcbiAgICAgICAgICAgIH0sICgpID0+IHt0aGlzLmdldEFjdGl2ZVVzZXJMaXN0KCk7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44Ki44Kv44OG44Kj44OW44Om44O844K244Gu44G/44OH44O844K/5Y+W5b6XXHJcbiAgICBnZXRBY3RpdmVVc2VyTGlzdCgpIHtcclxuICAgICAgICBsZXQgYWN0aXZlVXNlckxpc3QgPSBbXTtcclxuICAgICAgICBsZXQgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGxldCByZWY7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuc3RhdGUuZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhW2ldLmFjdGl2ZV9mbGFnID09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpOicgKyBpKTtcclxuICAgICAgICAgICAgcmVmID0gZGIucmVmKCd1c2VyX2luZm8vJyArIGkpO1xyXG4gICAgICAgICAgICByZWYub3JkZXJCeUtleSgpLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xpc3Q6JyArIEpTT04uc3RyaW5naWZ5KHNuYXBzaG90LnZhbCgpKSk7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVVc2VyTGlzdC5wdXNoKHNuYXBzaG90LnZhbCgpKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVVzZXJEYXRhOiBhY3RpdmVVc2VyTGlzdFxyXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge3RoaXMuZ2V0VGFsa0xpc3QoKX0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44OI44O844Kv44Oq44K544OI5Y+W5b6XXHJcbiAgICBnZXRUYWxrTGlzdCgpIHtcclxuICAgICAgICBsZXQgdGFsa0xpc3QgPSBbXTtcclxuICAgICAgICBsZXQgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGxldCByZWY7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCflvrknKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWN0aXZldXNlcjonICsgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5hY3RpdmVVc2VyRGF0YSkpO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5zdGF0ZS5hY3RpdmVVc2VyRGF0YSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaWlpaTonICsgdGhpcy5zdGF0ZS5hY3RpdmVVc2VyRGF0YVtpXS5pZCk7XHJcbiAgICAgICAgICAgIHJlZiA9IGRiLnJlZignbWVzc2FnZXMvMS8nICsgdGhpcy5zdGF0ZS5hY3RpdmVVc2VyRGF0YVtpXS5pZCk7XHJcbiAgICAgICAgICAgIHJlZi5vcmRlckJ5S2V5KCkubGltaXRUb0xhc3QoMSkub24oJ3ZhbHVlJywgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqIGluIHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0YWxrOicgKyBKU09OLnN0cmluZ2lmeShzbmFwc2hvdC52YWwoKVtqXSkgKyAnaWlpaWlpaWlpaWlpaWlpaTonICsgaiArICd1c2VybmFtZWU6JyArIHRoaXMuc3RhdGUuYWN0aXZlVXNlckRhdGFbaV0udXNlcl9uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0YWxrTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9uYW1lOiB0aGlzLnN0YXRlLmFjdGl2ZVVzZXJEYXRhW2ldLnVzZXJfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogcmVzW2pdLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21fZmxhZzogcmVzW2pdLmZyb21fZmxhZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZF9mbGFnOiByZXNbal0ucmVhZF9mbGFnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVfZGF0ZTogcmVzW2pdLmNyZWF0ZV9kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVfZGF0ZTogcmVzW2pdLnVwZGF0ZV9kYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhbGtEYXRhOiB0YWxrTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIH0pOyAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOihqOekuuOBmeOCi+ODiOODvOOCr+ODquOCueODiOOBrueUn+aIkFxyXG4gICAgY3JlYXRlVGFsa0xpc3QoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRhbGtEYXRhID09IG51bGwgfHwgdGhpcy5zdGF0ZS50YWxrRGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gWzx0ciBrZXk9XCIwXCI+PHRoPk5PIERBVEEuPC90aD48L3RyPl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5zdGF0ZS50YWxrRGF0YSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn56eY5a+G44GuOicgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLnRhbGtEYXRhW2ldKSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRhbGtEYXRhW2ldID09IG51bGwgfHwgdGhpcy5zdGF0ZS50YWxrRGF0YVtpXS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goXHJcbiAgICAgICAgICAgICAgICA8dHIgZGF0YS10YWc9e3RoaXMuc3RhdGUudGFsa0RhdGFbaV19PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS50YWxrRGF0YVtpXS51c2VyX25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUudGFsa0RhdGFbaV0uY29udGVudH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuc3RhdGUuZGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmdldFVzZXJMaXN0KCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7Lyoge3RoaXMuc3RhdGUudGFsa0xpc3QubGVuZ3RoID09IDBcclxuICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgIDxwPlBsZWFzZSB3YWl0Li4uPC9wPlxyXG4gICAgICAgICAgICAgICAgOiAqL31cclxuICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNyZWF0ZVRhbGtMaXN0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICB7LyogfSAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFsa0xpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==