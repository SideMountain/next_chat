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
          console.log('talk:' + JSON.stringify(snapshot.val()));
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
        console.log('秘密の:' + this.state.talkData[i]);
        result.push(__jsx("tr", {
          "data-tag": this.state.talkData[i],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 17
          }
        }, __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 21
          }
        }, "username"), __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91,
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
          lineNumber: 105,
          columnNumber: 13
        }
      }, __jsx("table", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 17
        }
      }, __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhbGtMaXN0LmpzIl0sIm5hbWVzIjpbIlRhbGtMaXN0IiwicHJvcHMiLCJmb250U2l6ZSIsInBhZGRpbmciLCJzdGF0ZSIsImRhdGEiLCJhY3RpdmVVc2VyRGF0YSIsInRhbGtEYXRhIiwiZ2V0VXNlckxpc3QiLCJjb25zb2xlIiwibG9nIiwiZGIiLCJmaXJlYmFzZSIsImRhdGFiYXNlIiwicmVmIiwic2VsZiIsIm9yZGVyQnlLZXkiLCJvbiIsInNuYXBzaG90IiwiSlNPTiIsInN0cmluZ2lmeSIsInZhbCIsInNldFN0YXRlIiwiZ2V0QWN0aXZlVXNlckxpc3QiLCJhY3RpdmVVc2VyTGlzdCIsImkiLCJhY3RpdmVfZmxhZyIsInB1c2giLCJnZXRUYWxrTGlzdCIsInRhbGtMaXN0IiwiaWQiLCJsaW1pdFRvTGFzdCIsInJlc3VsdCIsImxlbmd0aCIsImNvbnRlbnQiLCJjcmVhdGVUYWxrTGlzdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFE7Ozs7O0FBTUYsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxnTkFMWDtBQUNKQyxjQUFRLEVBQUUsTUFETjtBQUVKQyxhQUFPLEVBQUU7QUFGTCxLQUtXOztBQUVmLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxVQUFJLEVBQUUsRUFERztBQUVUQyxvQkFBYyxFQUFFLEVBRlA7QUFHVEMsY0FBUSxFQUFFO0FBSEQsS0FBYjs7QUFLQSxVQUFLQyxXQUFMOztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBUmU7QUFTbEIsRyxDQUVEOzs7OztrQ0FDYztBQUFBOztBQUNWLFVBQUlDLEVBQUUsR0FBR0MsK0NBQVEsQ0FBQ0MsUUFBVCxFQUFUO0FBQ0EsVUFBSUMsR0FBRyxHQUFHSCxFQUFFLENBQUNH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LENBTEosQ0FESjtBQWNIOzs7O0VBaEhrQkMsK0M7O0FBbUhScEMsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGhvbWUuanMuN2EzMjBiNWQ0NzgwMmQ5MzljYjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcbmltcG9ydCAnZmlyZWJhc2Uvc3RvcmFnZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY2xhc3MgVGFsa0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3R5bGUgPSB7XHJcbiAgICAgICAgZm9udFNpemU6ICcxMnB0JyxcclxuICAgICAgICBwYWRkaW5nOiAnNXB4IDEwcHgnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgICAgIGFjdGl2ZVVzZXJEYXRhOiBbXSxcclxuICAgICAgICAgICAgdGFsa0RhdGE6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0VXNlckxpc3QoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygn44Go44GKJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Y+L5Lq644OH44O844K/5Y+W5b6XXHJcbiAgICBnZXRVc2VyTGlzdCgpIHtcclxuICAgICAgICBsZXQgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGxldCByZWYgPSBkYi5yZWYoJ2ZyaWVuZF9pbmZvLzEnKTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcmVmLm9yZGVyQnlLZXkoKS5vbigndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoc25hcHNob3QudmFsKCkpKTtcclxuICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBzbmFwc2hvdC52YWwoKVxyXG4gICAgICAgICAgICB9LCAoKSA9PiB7dGhpcy5nZXRBY3RpdmVVc2VyTGlzdCgpO30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOOCouOCr+ODhuOCo+ODluODpuODvOOCtuOBruOBv+ODh+ODvOOCv+WPluW+l1xyXG4gICAgZ2V0QWN0aXZlVXNlckxpc3QoKSB7XHJcbiAgICAgICAgbGV0IGFjdGl2ZVVzZXJMaXN0ID0gW107XHJcbiAgICAgICAgbGV0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuICAgICAgICBsZXQgcmVmO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnN0YXRlLmRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YVtpXS5hY3RpdmVfZmxhZyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaTonICsgaSk7XHJcbiAgICAgICAgICAgIHJlZiA9IGRiLnJlZigndXNlcl9pbmZvLycgKyBpKTtcclxuICAgICAgICAgICAgcmVmLm9yZGVyQnlLZXkoKS5vbigndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsaXN0OicgKyBKU09OLnN0cmluZ2lmeShzbmFwc2hvdC52YWwoKSkpO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlVXNlckxpc3QucHVzaChzbmFwc2hvdC52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVVc2VyRGF0YTogYWN0aXZlVXNlckxpc3RcclxuICAgICAgICAgICAgICAgIH0sICgpID0+IHt0aGlzLmdldFRhbGtMaXN0KCl9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOODiOODvOOCr+ODquOCueODiOWPluW+l1xyXG4gICAgZ2V0VGFsa0xpc3QoKSB7XHJcbiAgICAgICAgbGV0IHRhbGtMaXN0ID0gW107XHJcbiAgICAgICAgbGV0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuICAgICAgICBsZXQgcmVmO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBjb25zb2xlLmxvZygn5b65Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FjdGl2ZXVzZXI6JyArIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuYWN0aXZlVXNlckRhdGEpKTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuc3RhdGUuYWN0aXZlVXNlckRhdGEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2lpaWk6JyArIHRoaXMuc3RhdGUuYWN0aXZlVXNlckRhdGFbaV0uaWQpO1xyXG4gICAgICAgICAgICByZWYgPSBkYi5yZWYoJ21lc3NhZ2VzLzEvJyArIHRoaXMuc3RhdGUuYWN0aXZlVXNlckRhdGFbaV0uaWQpO1xyXG4gICAgICAgICAgICByZWYub3JkZXJCeUtleSgpLmxpbWl0VG9MYXN0KDEpLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RhbGs6JyArIEpTT04uc3RyaW5naWZ5KHNuYXBzaG90LnZhbCgpKSk7XHJcbiAgICAgICAgICAgICAgICB0YWxrTGlzdC5wdXNoKHNuYXBzaG90LnZhbCgpKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbGtEYXRhOiB0YWxrTGlzdFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDooajnpLrjgZnjgovjg4jjg7zjgq/jg6rjgrnjg4jjga7nlJ/miJBcclxuICAgIGNyZWF0ZVRhbGtMaXN0KCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50YWxrRGF0YSA9PSBudWxsIHx8IHRoaXMuc3RhdGUudGFsa0RhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFs8dHIga2V5PVwiMFwiPjx0aD5OTyBEQVRBLjwvdGg+PC90cj5dO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuc3RhdGUudGFsa0RhdGEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+enmOWvhuOBrjonICsgdGhpcy5zdGF0ZS50YWxrRGF0YVtpXSk7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPHRyIGRhdGEtdGFnPXt0aGlzLnN0YXRlLnRhbGtEYXRhW2ldfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+dXNlcm5hbWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGFsa0RhdGFbaV0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuc3RhdGUuZGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmdldFVzZXJMaXN0KCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7Lyoge3RoaXMuc3RhdGUudGFsa0xpc3QubGVuZ3RoID09IDBcclxuICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgIDxwPlBsZWFzZSB3YWl0Li4uPC9wPlxyXG4gICAgICAgICAgICAgICAgOiAqL31cclxuICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNyZWF0ZVRhbGtMaXN0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICB7LyogfSAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFsa0xpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==