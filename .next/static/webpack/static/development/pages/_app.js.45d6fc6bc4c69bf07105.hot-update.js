webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: default, initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);


 // Firebaseの初期化

var config = {
  apiKey: "dummy",
  authDomain: "dummy",
  databaseURL: "dummy",
  projectId: "dummy",
  storageBucket: "dummy",
  messagingSenderId: "dummy",
  appId: "dummy",
  measurementId: "dummy"
};
var fireapp;

try {
  firebase__WEBPACK_IMPORTED_MODULE_2___default.a.initializeApp(config);
} catch (error) {
  console.log(error.message);
}

/* harmony default export */ __webpack_exports__["default"] = (fireapp); // ステート初期値

var initial = {}; // レデューサー(ダミー)

function fireReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    // ダミー
    case 'UPDATE_USER':
      return action.value;
    // デフォルト

    default:
      return state;
  }
} // initStore関数


function initStore() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(fireReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]));
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlYXBwIiwiZmlyZWJhc2UiLCJpbml0aWFsaXplQXBwIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImluaXRpYWwiLCJmaXJlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInZhbHVlIiwiaW5pdFN0b3JlIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0NBR0E7O0FBQ0EsSUFBSUEsTUFBTSxHQUFHO0FBQ1RDLFFBQU0sRUFBRSxPQURDO0FBRVRDLFlBQVUsRUFBRSxPQUZIO0FBR1RDLGFBQVcsRUFBRSxPQUhKO0FBSVRDLFdBQVMsRUFBRSxPQUpGO0FBS1RDLGVBQWEsRUFBRSxPQUxOO0FBTVRDLG1CQUFpQixFQUFFLE9BTlY7QUFPVEMsT0FBSyxFQUFFLE9BUEU7QUFRVEMsZUFBYSxFQUFFO0FBUk4sQ0FBYjtBQVdBLElBQUlDLE9BQUo7O0FBQ0EsSUFBSTtBQUNBQyxpREFBUSxDQUFDQyxhQUFULENBQXVCWCxNQUF2QjtBQUNILENBRkQsQ0FFRSxPQUFPWSxLQUFQLEVBQWM7QUFDWkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csT0FBbEI7QUFDSDs7QUFDY04sc0VBQWYsRSxDQUVBOztBQUNBLElBQU1PLE9BQU8sR0FBRyxFQUFoQixDLENBR0E7O0FBQ0EsU0FBU0MsV0FBVCxHQUE4QztBQUFBLE1BQXpCQyxLQUF5Qix1RUFBakJGLE9BQWlCO0FBQUEsTUFBUkcsTUFBUTs7QUFDMUMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0k7QUFDQSxTQUFLLGFBQUw7QUFDSSxhQUFPRCxNQUFNLENBQUNFLEtBQWQ7QUFDSjs7QUFDQTtBQUNJLGFBQU9ILEtBQVA7QUFOUjtBQVFILEMsQ0FFRDs7O0FBQ08sU0FBU0ksU0FBVCxHQUFvQztBQUFBLE1BQWpCSixLQUFpQix1RUFBVEYsT0FBUztBQUN2QyxTQUFPTyx5REFBVyxDQUFDTixXQUFELEVBQWNDLEtBQWQsRUFBcUJNLDZEQUFlLENBQUNDLG1EQUFELENBQXBDLENBQWxCO0FBQ0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuNDVkNmZjNmJjNGM2OWJmMDcxMDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG5cclxuLy8gRmlyZWJhc2Xjga7liJ3mnJ/ljJZcclxudmFyIGNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJkdW1teVwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJkdW1teVwiLFxyXG4gICAgZGF0YWJhc2VVUkw6IFwiZHVtbXlcIixcclxuICAgIHByb2plY3RJZDogXCJkdW1teVwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJkdW1teVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiZHVtbXlcIixcclxuICAgIGFwcElkOiBcImR1bW15XCIsXHJcbiAgICBtZWFzdXJlbWVudElkOiBcImR1bW15XCJcclxufVxyXG5cclxudmFyIGZpcmVhcHA7XHJcbnRyeSB7XHJcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcbn0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmaXJlYXBwO1xyXG5cclxuLy8g44K544OG44O844OI5Yid5pyf5YCkXHJcbmNvbnN0IGluaXRpYWwgPSB7XHJcbn1cclxuXHJcbi8vIOODrOODh+ODpeODvOOCteODvCjjg4Djg5/jg7wpXHJcbmZ1bmN0aW9uIGZpcmVSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbCwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgLy8g44OA44Of44O8XHJcbiAgICAgICAgY2FzZSAnVVBEQVRFX1VTRVInOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnZhbHVlO1xyXG4gICAgICAgIC8vIOODh+ODleOCqeODq+ODiFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gaW5pdFN0b3Jl6Zai5pWwXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RvcmUoc3RhdGUgPSBpbml0aWFsKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoZmlyZVJlZHVjZXIsIHN0YXRlLCBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9