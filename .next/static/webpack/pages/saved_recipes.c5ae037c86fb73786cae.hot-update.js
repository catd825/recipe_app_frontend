webpackHotUpdate_N_E("pages/saved_recipes",{

/***/ "./src/Containers/MySavedRecipes.js":
/*!******************************************!*\
  !*** ./src/Containers/MySavedRecipes.js ***!
  \******************************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MySavedRecipes; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components_SavedRecipeCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/SavedRecipeCard */ \"./src/Components/SavedRecipeCard.js\");\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Containers/MySavedRecipes.js\";\n// import { useState, useEffect } from 'react'\n\nconst getStaticProps = async () => {\n  const res = await fetch('http://localhost:3000/favorite_recipes');\n  const data = await res.json();\n  return {\n    props: {\n      recipes: data\n    }\n  };\n};\nfunction MySavedRecipes() {\n  /*\n  const [savedRecipes, setSavedRecipes]  = useState([]);\n  const savedRecipeUrl = 'http://localhost:3000/favorite_recipes'\n   useEffect ( () => {\n      const fetchSavedRecipes = async () => {\n          const response = await fetch(savedRecipeUrl)\n          const json = await response.json()\n          setSavedRecipes(json)\n      }\n      fetchSavedRecipes();\n  }, []);\n   */\n  const savedRecipeCard = () => {\n    return savedRecipes.map(recipes => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_SavedRecipeCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      data: recipes\n    }, recipes.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 45\n    }, this));\n  }; // console.log(savedRecipes)\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: savedRecipeCard()\n  }, void 0, false);\n}\n_c = MySavedRecipes;\n\nvar _c;\n\n$RefreshReg$(_c, \"MySavedRecipes\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbnRhaW5lcnMvTXlTYXZlZFJlY2lwZXMuanM/MjgxZCJdLCJuYW1lcyI6WyJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwcm9wcyIsInJlY2lwZXMiLCJNeVNhdmVkUmVjaXBlcyIsInNhdmVkUmVjaXBlQ2FyZCIsInNhdmVkUmVjaXBlcyIsIm1hcCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUEsY0FBYyxHQUFHLFlBQVk7QUFDdEMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyx3Q0FBRCxDQUF2QjtBQUNBLFFBQU1DLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUosRUFBbkI7QUFFQSxTQUFPO0FBQ0hDLFNBQUssRUFBRTtBQUFFQyxhQUFPLEVBQUVIO0FBQVg7QUFESixHQUFQO0FBR0gsQ0FQTTtBQVNRLFNBQVNJLGNBQVQsR0FBMkI7QUFFdEM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUksUUFBTUMsZUFBZSxHQUFHLE1BQU07QUFDMUIsV0FBT0MsWUFBWSxDQUFDQyxHQUFiLENBQWtCSixPQUFPLGlCQUFJLHFFQUFDLG1FQUFEO0FBQWtDLFVBQUksRUFBRUE7QUFBeEMsT0FBc0JBLE9BQU8sQ0FBQ0ssRUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUE3QixDQUFQO0FBQ0gsR0FGRCxDQWpCc0MsQ0FxQnRDOzs7QUFDQSxzQkFDSTtBQUFBLGNBQ0tILGVBQWU7QUFEcEIsbUJBREo7QUFLSDtLQTNCdUJELGMiLCJmaWxlIjoiLi9zcmMvQ29udGFpbmVycy9NeVNhdmVkUmVjaXBlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTYXZlZFJlY2lwZUNhcmQgZnJvbSAnLi4vQ29tcG9uZW50cy9TYXZlZFJlY2lwZUNhcmQnXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2Zhdm9yaXRlX3JlY2lwZXMnKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7IHJlY2lwZXM6IGRhdGEgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlTYXZlZFJlY2lwZXMgKCkge1xuXG4gICAgLypcbiAgICBjb25zdCBbc2F2ZWRSZWNpcGVzLCBzZXRTYXZlZFJlY2lwZXNdICA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBzYXZlZFJlY2lwZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZmF2b3JpdGVfcmVjaXBlcydcblxuICAgIHVzZUVmZmVjdCAoICgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hTYXZlZFJlY2lwZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHNhdmVkUmVjaXBlVXJsKVxuICAgICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgc2V0U2F2ZWRSZWNpcGVzKGpzb24pXG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hTYXZlZFJlY2lwZXMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICAqL1xuICAgIFxuICAgIGNvbnN0IHNhdmVkUmVjaXBlQ2FyZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNhdmVkUmVjaXBlcy5tYXAoKHJlY2lwZXMgPT4gPFNhdmVkUmVjaXBlQ2FyZCBrZXk9e3JlY2lwZXMuaWR9IGRhdGE9e3JlY2lwZXN9IC8+KSlcbiAgICB9XG4gICAgXG4gICAgLy8gY29uc29sZS5sb2coc2F2ZWRSZWNpcGVzKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7c2F2ZWRSZWNpcGVDYXJkKCl9XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Containers/MySavedRecipes.js\n");

/***/ })

})