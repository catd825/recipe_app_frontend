webpackHotUpdate_N_E("pages/saved_recipes",{

/***/ "./src/Components/SavedRecipeCard.js":
/*!*******************************************!*\
  !*** ./src/Components/SavedRecipeCard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SavedRecipeCard; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction SavedRecipeCard({\n  data\n}) {\n  console.log(data.recipe_liker_id);\n  const saved_by = data.recipe_liker_id;\n  const current_user = 13;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: saved_by === current_user ? 'return' // <div> \n    //     <img src={props.data.img_url} style={{height:'250px'}} alt='' />\n    //     <p>{props.data.title}</p>\n    // </div> \n    : null\n  }, void 0, false);\n}\n_c = SavedRecipeCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"SavedRecipeCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvU2F2ZWRSZWNpcGVDYXJkLmpzPzhhYWEiXSwibmFtZXMiOlsiU2F2ZWRSZWNpcGVDYXJkIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZWNpcGVfbGlrZXJfaWQiLCJzYXZlZF9ieSIsImN1cnJlbnRfdXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWUsU0FBU0EsZUFBVCxDQUEwQjtBQUFDQztBQUFELENBQTFCLEVBQWtDO0FBQzdDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUFDRyxlQUFqQjtBQUNBLFFBQU1DLFFBQVEsR0FBR0osSUFBSSxDQUFDRyxlQUF0QjtBQUNBLFFBQU1FLFlBQVksR0FBRyxFQUFyQjtBQUNBLHNCQUNJO0FBQUEsY0FDQ0QsUUFBUSxLQUFLQyxZQUFiLEdBQ0QsUUFEQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBTEMsTUFNQztBQVBGLG1CQURKO0FBV0g7S0FmdUJOLGUiLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9TYXZlZFJlY2lwZUNhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTYXZlZFJlY2lwZUNhcmQgKHtkYXRhfSkge1xuICAgIGNvbnNvbGUubG9nKGRhdGEucmVjaXBlX2xpa2VyX2lkKVxuICAgIGNvbnN0IHNhdmVkX2J5ID0gZGF0YS5yZWNpcGVfbGlrZXJfaWRcbiAgICBjb25zdCBjdXJyZW50X3VzZXIgPSAxM1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIHtzYXZlZF9ieSA9PT0gY3VycmVudF91c2VyID8gXG4gICAgICAgICdyZXR1cm4nXG4gICAgICAgIC8vIDxkaXY+IFxuICAgICAgICAvLyAgICAgPGltZyBzcmM9e3Byb3BzLmRhdGEuaW1nX3VybH0gc3R5bGU9e3toZWlnaHQ6JzI1MHB4J319IGFsdD0nJyAvPlxuICAgICAgICAvLyAgICAgPHA+e3Byb3BzLmRhdGEudGl0bGV9PC9wPlxuICAgICAgICAvLyA8L2Rpdj4gXG4gICAgICAgIDogbnVsbH1cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/SavedRecipeCard.js\n");

/***/ })

})