webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./components/UserList.js":
/*!********************************!*\
  !*** ./components/UserList.js ***!
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







var _jsxFileName = "C:\\env\\react\\next_chat\\components\\UserList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var UserList = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(UserList, _Component);

  var _super = _createSuper(UserList);

  function UserList(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserList);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "style", {
      fontSize: '12pt',
      padding: '5px 10px'
    });

    _this.state = {
      data: [],
      activeUserData: []
    };

    _this.getUserList();

    return _this;
  } // Firebaseからのデータ取得


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserList, [{
    key: "getUserList",
    value: function getUserList() {
      var _this2 = this;

      var db = firebase__WEBPACK_IMPORTED_MODULE_8___default.a.database();
      var ref = db.ref('friend_info/1');
      var self = this;
      ref.orderByKey().on('value', function (snapshot) {
        self.setState({
          data: snapshot.val()
        });

        _this2.getActiveUserList();
      });
    } // アクティブユーザのみデータ取得

  }, {
    key: "getActiveUserList",
    value: function getActiveUserList() {
      var activeUserList = [];
      var db = firebase__WEBPACK_IMPORTED_MODULE_8___default.a.database();
      var ref;
      var self = this;

      for (var i in this.state.data) {
        if (this.state.data[i].active_flag == 0) {
          break;
        }

        ref = db.ref('user_info/' + i);
        ref.orderByKey().on('value', function (snapshot) {
          activeUserList.push(snapshot.val());
          self.setState({
            activeUserData: activeUserList
          });
        });
      }
    } // データ表示の生成

  }, {
    key: "createUserList",
    value: function createUserList() {
      var result = [];

      if (this.state.activeUserData == null || this.state.activeUserData.length == 0) {
        return [__jsx("tr", {
          key: "0",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 21
          }
        }, __jsx("th", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 33
          }
        }, "NO DATA."))];
      }

      for (var i in this.state.activeUserData) {
        result.push(__jsx("tr", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 17
          }
        }, __jsx("td", {
          "class": "user_image",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 21
          }
        }, "image"), __jsx("td", {
          "class": "user_name",
          "data-tag": this.state.activeUserData[i].id,
          onClick: this.go.bind(null, this.state.activeUserData[i].id),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 21
          }
        }, this.state.activeUserData[i].user_name)));
      }

      return result;
    } // ページ移動設定

  }, {
    key: "go",
    value: function go(id) {
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/talk_room?id=' + id);
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
          lineNumber: 85,
          columnNumber: 13
        }
      }, this.state.data.length == 0 ? __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 17
        }
      }, "Please wait...") : __jsx("table", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 17
        }
      }, __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }
      }, this.createUserList())));
    }
  }]);

  return UserList;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UserList);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXJMaXN0LmpzIl0sIm5hbWVzIjpbIlVzZXJMaXN0IiwicHJvcHMiLCJmb250U2l6ZSIsInBhZGRpbmciLCJzdGF0ZSIsImRhdGEiLCJhY3RpdmVVc2VyRGF0YSIsImdldFVzZXJMaXN0IiwiZGIiLCJmaXJlYmFzZSIsImRhdGFiYXNlIiwicmVmIiwic2VsZiIsIm9yZGVyQnlLZXkiLCJvbiIsInNuYXBzaG90Iiwic2V0U3RhdGUiLCJ2YWwiLCJnZXRBY3RpdmVVc2VyTGlzdCIsImFjdGl2ZVVzZXJMaXN0IiwiaSIsImFjdGl2ZV9mbGFnIiwicHVzaCIsInJlc3VsdCIsImxlbmd0aCIsImlkIiwiZ28iLCJiaW5kIiwidXNlcl9uYW1lIiwiUm91dGVyIiwiY3JlYXRlVXNlckxpc3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxROzs7OztBQU1GLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsZ05BTFg7QUFDSkMsY0FBUSxFQUFFLE1BRE47QUFFSkMsYUFBTyxFQUFFO0FBRkwsS0FLVzs7QUFFZixVQUFLQyxLQUFMLEdBQWE7QUFDVEMsVUFBSSxFQUFFLEVBREc7QUFFVEMsb0JBQWMsRUFBRTtBQUZQLEtBQWI7O0FBSUEsVUFBS0MsV0FBTDs7QUFOZTtBQU9sQixHLENBRUQ7Ozs7O2tDQUNjO0FBQUE7O0FBQ1YsVUFBSUMsRUFBRSxHQUFHQywrQ0FBUSxDQUFDQyxRQUFULEVBQVQ7QUFDQSxVQUFJQyxHQUFHLEdBQUdILEVBQUUsQ0FBQ0csR0FBSCxDQUFPLGVBQVAsQ0FBVjtBQUNBLFVBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0FELFNBQUcsQ0FBQ0UsVUFBSixHQUFpQkMsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsVUFBQ0MsUUFBRCxFQUFj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O0FBQUE7QUFBQSxTQUNLLEtBQUtNLGNBQUwsRUFETCxDQURKLENBTEosQ0FESjtBQWNIOzs7O0VBNUZrQkMsK0M7O0FBOEZSL0IsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGhvbWUuanMuMDZmOGYxMjhlNTc4OGFkM2ViNDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcbmltcG9ydCAnZmlyZWJhc2Uvc3RvcmFnZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY2xhc3MgVXNlckxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3R5bGUgPSB7XHJcbiAgICAgICAgZm9udFNpemU6ICcxMnB0JyxcclxuICAgICAgICBwYWRkaW5nOiAnNXB4IDEwcHgnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgICAgIGFjdGl2ZVVzZXJEYXRhOiBbXVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdldFVzZXJMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmlyZWJhc2XjgYvjgonjga7jg4fjg7zjgr/lj5blvpdcclxuICAgIGdldFVzZXJMaXN0KCkge1xyXG4gICAgICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbiAgICAgICAgbGV0IHJlZiA9IGRiLnJlZignZnJpZW5kX2luZm8vMScpO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICByZWYub3JkZXJCeUtleSgpLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHNuYXBzaG90LnZhbCgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmdldEFjdGl2ZVVzZXJMaXN0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44Ki44Kv44OG44Kj44OW44Om44O844K244Gu44G/44OH44O844K/5Y+W5b6XXHJcbiAgICBnZXRBY3RpdmVVc2VyTGlzdCgpIHtcclxuICAgICAgICBsZXQgYWN0aXZlVXNlckxpc3QgPSBbXTtcclxuICAgICAgICBsZXQgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGxldCByZWY7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuc3RhdGUuZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhW2ldLmFjdGl2ZV9mbGFnID09IDApIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlZiA9IGRiLnJlZigndXNlcl9pbmZvLycgKyBpKTtcclxuICAgICAgICAgICAgcmVmLm9yZGVyQnlLZXkoKS5vbigndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVVzZXJMaXN0LnB1c2goc25hcHNob3QudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVXNlckRhdGE6IGFjdGl2ZVVzZXJMaXN0XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOODh+ODvOOCv+ihqOekuuOBrueUn+aIkFxyXG4gICAgY3JlYXRlVXNlckxpc3QoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVVzZXJEYXRhID09IG51bGwgfHwgdGhpcy5zdGF0ZS5hY3RpdmVVc2VyRGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gWzx0ciBrZXk9XCIwXCI+PHRoPk5PIERBVEEuPC90aD48L3RyPl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5zdGF0ZS5hY3RpdmVVc2VyRGF0YSkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChcclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ1c2VyX2ltYWdlXCI+aW1hZ2U8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInVzZXJfbmFtZVwiIGRhdGEtdGFnPXt0aGlzLnN0YXRlLmFjdGl2ZVVzZXJEYXRhW2ldLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdvLmJpbmQobnVsbCwgdGhpcy5zdGF0ZS5hY3RpdmVVc2VyRGF0YVtpXS5pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYWN0aXZlVXNlckRhdGFbaV0udXNlcl9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOODmuODvOOCuOenu+WLleioreWumlxyXG4gICAgZ28oaWQpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL3RhbGtfcm9vbT9pZD0nICsgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlckxpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEubGVuZ3RoID09IDBcclxuICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgIDxwPlBsZWFzZSB3YWl0Li4uPC9wPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY3JlYXRlVXNlckxpc3QoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTGlzdDsiXSwic291cmNlUm9vdCI6IiJ9