webpackHotUpdate_N_E("pages/saved_recipes",{

/***/ "./src/Containers/MySavedRecipes.js":
/*!******************************************!*\
  !*** ./src/Containers/MySavedRecipes.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MySavedRecipes; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_SavedRecipeCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/SavedRecipeCard */ \"./src/Components/SavedRecipeCard.js\");\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Containers/MySavedRecipes.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction MySavedRecipes() {\n  _s();\n\n  const {\n    0: savedRecipes,\n    1: setSavedRecipes\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const recipeUrl = 'http://localhost:3000/favorite_recipes';\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const fetchSavedRecipes = async () => {\n      const response = await fetch(recipeUrl);\n      const json = await response.json;\n      setSavedRecipes(json);\n    };\n\n    fetchSavedRecipes();\n  }, []);\n\n  const savedRecipeCard = () => {\n    return savedRecipes.map(recipes => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_SavedRecipeCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      data: recipes\n    }, recipes.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 45\n    }, this));\n  };\n\n  console;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false);\n}\n\n_s(MySavedRecipes, \"AwNUftugxfkgGKU/dS0IWJWu9KQ=\");\n\n_c = MySavedRecipes;\n\nvar _c;\n\n$RefreshReg$(_c, \"MySavedRecipes\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbnRhaW5lcnMvTXlTYXZlZFJlY2lwZXMuanM/MjgxZCJdLCJuYW1lcyI6WyJNeVNhdmVkUmVjaXBlcyIsInNhdmVkUmVjaXBlcyIsInNldFNhdmVkUmVjaXBlcyIsInVzZVN0YXRlIiwicmVjaXBlVXJsIiwidXNlRWZmZWN0IiwiZmV0Y2hTYXZlZFJlY2lwZXMiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsInNhdmVkUmVjaXBlQ2FyZCIsIm1hcCIsInJlY2lwZXMiLCJpZCIsImNvbnNvbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsY0FBVCxHQUEyQjtBQUFBOztBQUN0QyxRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBbUNDLHNEQUFRLENBQUMsRUFBRCxDQUFqRDtBQUNBLFFBQU1DLFNBQVMsR0FBRyx3Q0FBbEI7QUFFQUMseURBQVMsQ0FBRyxNQUFNO0FBQ2QsVUFBTUMsaUJBQWlCLEdBQUcsWUFBWTtBQUNsQyxZQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDSixTQUFELENBQTVCO0FBQ0EsWUFBTUssSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0UsSUFBNUI7QUFDQVAscUJBQWUsQ0FBQ08sSUFBRCxDQUFmO0FBQ0gsS0FKRDs7QUFLQUgscUJBQWlCO0FBQ3BCLEdBUFEsRUFPTixFQVBNLENBQVQ7O0FBU0EsUUFBTUksZUFBZSxHQUFHLE1BQU07QUFDMUIsV0FBT1QsWUFBWSxDQUFDVSxHQUFiLENBQWtCQyxPQUFPLGlCQUFJLHFFQUFDLG1FQUFEO0FBQWtDLFVBQUksRUFBRUE7QUFBeEMsT0FBc0JBLE9BQU8sQ0FBQ0MsRUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUE3QixDQUFQO0FBQ0gsR0FGRDs7QUFJQUMsU0FBTztBQUNQLHNCQUNJLHVKQURKO0FBS0g7O0dBdkJ1QmQsYzs7S0FBQUEsYyIsImZpbGUiOiIuL3NyYy9Db250YWluZXJzL015U2F2ZWRSZWNpcGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNhdmVkUmVjaXBlQ2FyZCBmcm9tICcuLi9Db21wb25lbnRzL1NhdmVkUmVjaXBlQ2FyZCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlTYXZlZFJlY2lwZXMgKCkge1xuICAgIGNvbnN0IFtzYXZlZFJlY2lwZXMsIHNldFNhdmVkUmVjaXBlc10gID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IHJlY2lwZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZmF2b3JpdGVfcmVjaXBlcydcblxuICAgIHVzZUVmZmVjdCAoICgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hTYXZlZFJlY2lwZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlY2lwZVVybClcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uIFxuICAgICAgICAgICAgc2V0U2F2ZWRSZWNpcGVzKGpzb24pXG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hTYXZlZFJlY2lwZXMoKTtcbiAgICB9LCBbXSk7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRSZWNpcGVDYXJkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2F2ZWRSZWNpcGVzLm1hcCgocmVjaXBlcyA9PiA8U2F2ZWRSZWNpcGVDYXJkIGtleT17cmVjaXBlcy5pZH0gZGF0YT17cmVjaXBlc30gLz4pKVxuICAgIH1cbiAgICBcbiAgICBjb25zb2xlXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKiB7c2F2ZWRSZWNpcGVDYXJkKCl9ICovfVxuICAgICAgICA8Lz5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Containers/MySavedRecipes.js\n");

/***/ })

})