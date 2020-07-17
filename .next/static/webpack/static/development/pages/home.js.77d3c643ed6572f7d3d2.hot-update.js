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
      var talkList = [];
      var db = firebase__WEBPACK_IMPORTED_MODULE_8___default.a.database();
      var ref;
      var self = this;
      console.log('徹');
      console.log('activeuser:' + JSON.stringify(this.state.activeUserData));

      for (var i in this.state.activeUserData) {
        console.log('iiii:' + this.state.activeUserData[i].id);
        ref = db.ref('messages/1/' + this.state.activeUserData[i].id);
        ref.orderByKey().limitToLast(1).on('value', function (snapshot) {
          console.log('talk:' + JSON.stringify(snapshot.val()[0]));
          talkList.push(snapshot.val());
          self.setState({
            talkData: talkList
          });
        });
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
            lineNumber: 84,
            columnNumber: 21
          }
        }, __jsx("th", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 33
          }
        }, "NO DATA."))];
      }

      for (var i in this.state.talkData) {
        console.log('秘密の:' + JSON.stringify(this.state.talkData[i]));

        if (this.state.talkData[i] == null || this.state.talkData[i].length == 0) {
          continue;
        }

        for (var j in this.state.talkData[i]) {
          result.push(__jsx("tr", {
            "data-tag": this.state.talkData[j],
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 21
            }
          }, __jsx("td", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 25
            }
          }, "username"), __jsx("td", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 25
            }
          }, this.state.talkData[j].content)));
        }
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
          lineNumber: 110,
          columnNumber: 13
        }
      }, __jsx("table", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 17
        }
      }, __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhbGtMaXN0LmpzIl0sIm5hbWVzIjpbIlRhbGtMaXN0IiwicHJvcHMiLCJmb250U2l6ZSIsInBhZGRpbmciLCJzdGF0ZSIsImRhdGEiLCJhY3RpdmVVc2VyRGF0YSIsInRhbGtEYXRhIiwiZ2V0VXNlckxpc3QiLCJjb25zb2xlIiwibG9nIiwiZGIiLCJmaXJlYmFzZSIsImRhdGFiYXNlIiwicmVmIiwic2VsZiIsIm9yZGVyQnlLZXkiLCJvbiIsInNuYXBzaG90IiwiSlNPTiIsInN0cmluZ2lmeSIsInZhbCIsInNldFN0YXRlIiwiZ2V0QWN0aXZlVXNlckxpc3QiLCJhY3RpdmVVc2VyTGlzdCIsImkiLCJhY3RpdmVfZmxhZyIsInB1c2giLCJnZXRUYWxrTGlzdCIsInRhbGtMaXN0IiwiaWQiLCJsaW1pdFRvTGFzdCIsInJlc3VsdCIsImxlbmd0aCIsImoiLCJjb250ZW50IiwiY3JlYXRlVGFsa0xpc3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxROzs7OztBQU1GLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsZ05BTFg7QUFDSkMsY0FBUSxFQUFFLE1BRE47QUFFSkMsYUFBTyxFQUFFO0FBRkwsS0FLVzs7QUFFZixVQUFLQyxLQUFMLEdBQWE7QUFDVEMsVUFBSSxFQUFFLEVBREc7QUFFVEMsb0JBQWMsRUFBRSxFQUZQO0FBR1RDLGNBQVEsRUFBRTtBQUhELEtBQWI7O0FBS0EsVUFBS0MsV0FBTDs7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWjtBQVJlO0FBU2xCLEcsQ0FFRDs7Ozs7a0NBQ2M7QUFBQTs7QUFDVixVQUFJQyxFQUFFLEdBQUdDLCtDQUFRLENBQUNDLFFBQVQsRUFBVDtBQUNBLFVBQUlDLEdBQUcsR0FBR0gsRUFBRSxD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QUNLLEtBQUs5QixLQUFMLENBQVdHLFFBQVgsQ0FBb0IyQixDQUFwQixFQUF1QkMsT0FENUIsQ0FGSixDQURKO0FBUUg7QUFDSjs7QUFDRCxhQUFPSCxNQUFQO0FBQ0g7Ozs2QkFFUTtBQUNMO0FBQ0E7QUFDQTtBQUNBLGFBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ssS0FBS0ksY0FBTCxFQURMLENBREosQ0FMSixDQURKO0FBY0g7Ozs7RUFySGtCQywrQzs7QUF3SFJyQyx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaG9tZS5qcy43N2QzYzY0M2VkNjU3MmY3ZDNkMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jbGFzcyBUYWxrTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdHlsZSA9IHtcclxuICAgICAgICBmb250U2l6ZTogJzEycHQnLFxyXG4gICAgICAgIHBhZGRpbmc6ICc1cHggMTBweCdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgYWN0aXZlVXNlckRhdGE6IFtdLFxyXG4gICAgICAgICAgICB0YWxrRGF0YTogW11cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXRVc2VyTGlzdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfjgajjgYonKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlj4vkurrjg4fjg7zjgr/lj5blvpdcclxuICAgIGdldFVzZXJMaXN0KCkge1xyXG4gICAgICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbiAgICAgICAgbGV0IHJlZiA9IGRiLnJlZignZnJpZW5kX2luZm8vMScpO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICByZWYub3JkZXJCeUtleSgpLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShzbmFwc2hvdC52YWwoKSkpO1xyXG4gICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHNuYXBzaG90LnZhbCgpXHJcbiAgICAgICAgICAgIH0sICgpID0+IHt0aGlzLmdldEFjdGl2ZVVzZXJMaXN0KCk7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44Ki44Kv44OG44Kj44OW44Om44O844K244Gu44G/44OH44O844K/5Y+W5b6XXHJcbiAgICBnZXRBY3RpdmVVc2VyTGlzdCgpIHtcclxuICAgICAgICBsZXQgYWN0aXZlVXNlckxpc3QgPSBbXTtcclxuICAgICAgICBsZXQgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGxldCByZWY7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuc3RhdGUuZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhW2ldLmFjdGl2ZV9mbGFnID09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpOicgKyBpKTtcclxuICAgICAgICAgICAgcmVmID0gZGIucmVmKCd1c2VyX2luZm8vJyArIGkpO1xyXG4gICAgICAgICAgICByZWYub3JkZXJCeUtleSgpLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xpc3Q6JyArIEpTT04uc3RyaW5naWZ5KHNuYXBzaG90LnZhbCgpKSk7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVVc2VyTGlzdC5wdXNoKHNuYXBzaG90LnZhbCgpKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVVzZXJEYXRhOiBhY3RpdmVVc2VyTGlzdFxyXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge3RoaXMuZ2V0VGFsa0xpc3QoKX0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44OI44O844Kv44Oq44K544OI5Y+W5b6XXHJcbiAgICBnZXRUYWxrTGlzdCgpIHtcclxuICAgICAgICBsZXQgdGFsa0xpc3QgPSBbXTtcclxuICAgICAgICBsZXQgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGxldCByZWY7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCflvrknKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWN0aXZldXNlcjonICsgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5hY3RpdmVVc2VyRGF0YSkpO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5zdGF0ZS5hY3RpdmVVc2VyRGF0YSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaWlpaTonICsgdGhpcy5zdGF0ZS5hY3RpdmVVc2VyRGF0YVtpXS5pZCk7XHJcbiAgICAgICAgICAgIHJlZiA9IGRiLnJlZignbWVzc2FnZXMvMS8nICsgdGhpcy5zdGF0ZS5hY3RpdmVVc2VyRGF0YVtpXS5pZCk7XHJcbiAgICAgICAgICAgIHJlZi5vcmRlckJ5S2V5KCkubGltaXRUb0xhc3QoMSkub24oJ3ZhbHVlJywgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGFsazonICsgSlNPTi5zdHJpbmdpZnkoc25hcHNob3QudmFsKClbMF0pKTtcclxuICAgICAgICAgICAgICAgIHRhbGtMaXN0LnB1c2goc25hcHNob3QudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFsa0RhdGE6IHRhbGtMaXN0XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOihqOekuuOBmeOCi+ODiOODvOOCr+ODquOCueODiOOBrueUn+aIkFxyXG4gICAgY3JlYXRlVGFsa0xpc3QoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRhbGtEYXRhID09IG51bGwgfHwgdGhpcy5zdGF0ZS50YWxrRGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gWzx0ciBrZXk9XCIwXCI+PHRoPk5PIERBVEEuPC90aD48L3RyPl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5zdGF0ZS50YWxrRGF0YSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn56eY5a+G44GuOicgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLnRhbGtEYXRhW2ldKSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRhbGtEYXRhW2ldID09IG51bGwgfHwgdGhpcy5zdGF0ZS50YWxrRGF0YVtpXS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaiBpbiB0aGlzLnN0YXRlLnRhbGtEYXRhW2ldKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChcclxuICAgICAgICAgICAgICAgICAgICA8dHIgZGF0YS10YWc9e3RoaXMuc3RhdGUudGFsa0RhdGFbal19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+dXNlcm5hbWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50YWxrRGF0YVtqXS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnN0YXRlLmRhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5nZXRVc2VyTGlzdCgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIHt0aGlzLnN0YXRlLnRhbGtMaXN0Lmxlbmd0aCA9PSAwXHJcbiAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICA8cD5QbGVhc2Ugd2FpdC4uLjwvcD5cclxuICAgICAgICAgICAgICAgIDogKi99XHJcbiAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jcmVhdGVUYWxrTGlzdCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgey8qIH0gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhbGtMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=