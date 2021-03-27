webpackHotUpdate_N_E("pages/saved_recipes",{

/***/ "./src/Containers/MySavedRecipes.js":
/*!******************************************!*\
  !*** ./src/Containers/MySavedRecipes.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MySavedRecipes; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\nfunction MySavedRecipes() {\n  _s();\n\n  const {\n    0: savedRecipes,\n    1: setSavedRecipes\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const recipeUrl = 'http://localhost:3000/favorite_recipes';\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const fetchSavedRecipes = async () => {\n      const response = await fetch(recipeUrl);\n      const json = await response.json;\n      setSavedRecipes(json);\n    };\n\n    fetchSavedRecipes();\n  }, []);\n\n  const savedRecipeCard = () => {};\n\n  return \"My saved recipes\";\n}\n\n_s(MySavedRecipes, \"AwNUftugxfkgGKU/dS0IWJWu9KQ=\");\n\n_c = MySavedRecipes;\n\nvar _c;\n\n$RefreshReg$(_c, \"MySavedRecipes\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbnRhaW5lcnMvTXlTYXZlZFJlY2lwZXMuanM/MjgxZCJdLCJuYW1lcyI6WyJNeVNhdmVkUmVjaXBlcyIsInNhdmVkUmVjaXBlcyIsInNldFNhdmVkUmVjaXBlcyIsInVzZVN0YXRlIiwicmVjaXBlVXJsIiwidXNlRWZmZWN0IiwiZmV0Y2hTYXZlZFJlY2lwZXMiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsInNhdmVkUmVjaXBlQ2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxjQUFULEdBQTJCO0FBQUE7O0FBQ3RDLFFBQU07QUFBQSxPQUFDQyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFtQ0Msc0RBQVEsQ0FBQyxFQUFELENBQWpEO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLHdDQUFsQjtBQUVBQyx5REFBUyxDQUFHLE1BQU07QUFDZCxVQUFNQyxpQkFBaUIsR0FBRyxZQUFZO0FBQ2xDLFlBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNKLFNBQUQsQ0FBNUI7QUFDQSxZQUFNSyxJQUFJLEdBQUcsTUFBTUYsUUFBUSxDQUFDRSxJQUE1QjtBQUNBUCxxQkFBZSxDQUFDTyxJQUFELENBQWY7QUFDSCxLQUpEOztBQUtBSCxxQkFBaUI7QUFDcEIsR0FQUSxFQU9OLEVBUE0sQ0FBVDs7QUFTQSxRQUFNSSxlQUFlLEdBQUcsTUFBTSxDQUU3QixDQUZEOztBQUlBLFNBQ0ksa0JBREo7QUFHSDs7R0FwQnVCVixjOztLQUFBQSxjIiwiZmlsZSI6Ii4vc3JjL0NvbnRhaW5lcnMvTXlTYXZlZFJlY2lwZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15U2F2ZWRSZWNpcGVzICgpIHtcbiAgICBjb25zdCBbc2F2ZWRSZWNpcGVzLCBzZXRTYXZlZFJlY2lwZXNdICA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCByZWNpcGVVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2Zhdm9yaXRlX3JlY2lwZXMnXG5cbiAgICB1c2VFZmZlY3QgKCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoU2F2ZWRSZWNpcGVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZWNpcGVVcmwpXG4gICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbiBcbiAgICAgICAgICAgIHNldFNhdmVkUmVjaXBlcyhqc29uKVxuICAgICAgICB9XG4gICAgICAgIGZldGNoU2F2ZWRSZWNpcGVzKCk7XG4gICAgfSwgW10pO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkUmVjaXBlQ2FyZCA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIFwiTXkgc2F2ZWQgcmVjaXBlc1wiXG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Containers/MySavedRecipes.js\n");

/***/ })

})