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
  apiKey: "AIzaSyB4lbe4IWpbyCKZJGPNOuW89pRPz8YnFiQ",
  authDomain: "yu-yama-chat.firebaseapp.com",
  databaseURL: "https://yu-yama-chat.firebaseio.com",
  projectId: "yu-yama-chat",
  storageBucket: "yu-yama-chat.appspot.com",
  messagingSenderId: "95381286371",
  appId: "1:95381286371:web:d65ec973ed17bb89ed84d6",
  measurementId: "G-5E9FPFWBE7"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlYXBwIiwiZmlyZWJhc2UiLCJpbml0aWFsaXplQXBwIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImluaXRpYWwiLCJmaXJlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInZhbHVlIiwiaW5pdFN0b3JlIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0NBR0E7O0FBQ0EsSUFBSUEsTUFBTSxHQUFHO0FBQ1RDLFFBQU0sRUFBRSx5Q0FEQztBQUVUQyxZQUFVLEVBQUUsOEJBRkg7QUFHVEMsYUFBVyxFQUFFLHFDQUhKO0FBSVRDLFdBQVMsRUFBRSxjQUpGO0FBS1RDLGVBQWEsRUFBRSwwQkFMTjtBQU1UQyxtQkFBaUIsRUFBRSxhQU5WO0FBT1RDLE9BQUssRUFBRSwwQ0FQRTtBQVFUQyxlQUFhLEVBQUU7QUFSTixDQUFiO0FBV0EsSUFBSUMsT0FBSjs7QUFDQSxJQUFJO0FBQ0FDLGlEQUFRLENBQUNDLGFBQVQsQ0FBdUJYLE1BQXZCO0FBQ0gsQ0FGRCxDQUVFLE9BQU9ZLEtBQVAsRUFBYztBQUNaQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxPQUFsQjtBQUNIOztBQUNjTixzRUFBZixFLENBRUE7O0FBQ0EsSUFBTU8sT0FBTyxHQUFHLEVBQWhCLEMsQ0FHQTs7QUFDQSxTQUFTQyxXQUFULEdBQThDO0FBQUEsTUFBekJDLEtBQXlCLHVFQUFqQkYsT0FBaUI7QUFBQSxNQUFSRyxNQUFROztBQUMxQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSTtBQUNBLFNBQUssYUFBTDtBQUNJLGFBQU9ELE1BQU0sQ0FBQ0UsS0FBZDtBQUNKOztBQUNBO0FBQ0ksYUFBT0gsS0FBUDtBQU5SO0FBUUgsQyxDQUVEOzs7QUFDTyxTQUFTSSxTQUFULEdBQW9DO0FBQUEsTUFBakJKLEtBQWlCLHVFQUFURixPQUFTO0FBQ3ZDLFNBQU9PLHlEQUFXLENBQUNOLFdBQUQsRUFBY0MsS0FBZCxFQUFxQk0sNkRBQWUsQ0FBQ0MsbURBQUQsQ0FBcEMsQ0FBbEI7QUFDSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy44MzE3ZTBhZWU1ZGM3YTAyYjRiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcblxyXG4vLyBGaXJlYmFzZeOBruWIneacn+WMllxyXG52YXIgY29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUI0bGJlNElXcGJ5Q0taSkdQTk91Vzg5cFJQejhZbkZpUVwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJ5dS15YW1hLWNoYXQuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL3l1LXlhbWEtY2hhdC5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcInl1LXlhbWEtY2hhdFwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJ5dS15YW1hLWNoYXQuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjk1MzgxMjg2MzcxXCIsXHJcbiAgICBhcHBJZDogXCIxOjk1MzgxMjg2MzcxOndlYjpkNjVlYzk3M2VkMTdiYjg5ZWQ4NGQ2XCIsXHJcbiAgICBtZWFzdXJlbWVudElkOiBcIkctNUU5RlBGV0JFN1wiXHJcbn1cclxuXHJcbnZhciBmaXJlYXBwO1xyXG50cnkge1xyXG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xyXG59IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZmlyZWFwcDtcclxuXHJcbi8vIOOCueODhuODvOODiOWIneacn+WApFxyXG5jb25zdCBpbml0aWFsID0ge1xyXG59XHJcblxyXG4vLyDjg6zjg4fjg6Xjg7zjgrXjg7wo44OA44Of44O8KVxyXG5mdW5jdGlvbiBmaXJlUmVkdWNlcihzdGF0ZSA9IGluaXRpYWwsIGFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIC8vIOODgOODn+ODvFxyXG4gICAgICAgIGNhc2UgJ1VQREFURV9VU0VSJzpcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi52YWx1ZTtcclxuICAgICAgICAvLyDjg4fjg5Xjgqnjg6vjg4hcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGluaXRTdG9yZemWouaVsFxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdFN0b3JlKHN0YXRlID0gaW5pdGlhbCkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKGZpcmVSZWR1Y2VyLCBzdGF0ZSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==