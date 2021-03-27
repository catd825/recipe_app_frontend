webpackHotUpdate_N_E("pages/my_recipes",{

/***/ "./src/Containers/MyRecipesContainer.js":
/*!**********************************************!*\
  !*** ./src/Containers/MyRecipesContainer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyRecipesContainer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction MyRecipesContainer() {\n  _s();\n\n  const {\n    0: myRecipes,\n    1: setMyRecipes\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const recipeUrl = 'http://localhost:3000/recipes';\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const fetchMyRecipes = async () => {\n      const response = await fetch(recipeUrl);\n      const json = response.json();\n      console.log(json); // setMyRecipes(json)\n    };\n\n    fetchMyRecipes();\n  }, []);\n\n  myRecipeCard = () => {\n    return myRecipes.map();\n  };\n\n  console.log(myRecipes);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [\"My Recipes\", myRecipes]\n  }, void 0, true);\n}\n\n_s(MyRecipesContainer, \"GKkQOzQ5GsVL4SfdkXtmoESvTwg=\");\n\n_c = MyRecipesContainer;\n\nvar _c;\n\n$RefreshReg$(_c, \"MyRecipesContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbnRhaW5lcnMvTXlSZWNpcGVzQ29udGFpbmVyLmpzPzM4N2YiXSwibmFtZXMiOlsiTXlSZWNpcGVzQ29udGFpbmVyIiwibXlSZWNpcGVzIiwic2V0TXlSZWNpcGVzIiwidXNlU3RhdGUiLCJyZWNpcGVVcmwiLCJ1c2VFZmZlY3QiLCJmZXRjaE15UmVjaXBlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm15UmVjaXBlQ2FyZCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLGtCQUFULEdBQStCO0FBQUE7O0FBRTFDLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLCtCQUFsQjtBQUVBQyx5REFBUyxDQUFFLE1BQU07QUFDYixVQUFNQyxjQUFjLEdBQUcsWUFBWTtBQUMvQixZQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDSixTQUFELENBQTVCO0FBQ0EsWUFBTUssSUFBSSxHQUFHRixRQUFRLENBQUNFLElBQVQsRUFBYjtBQUVBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixFQUorQixDQUsvQjtBQUNILEtBTkQ7O0FBT0FILGtCQUFjO0FBQ2pCLEdBVFEsRUFTTixFQVRNLENBQVQ7O0FBV0FNLGNBQVksR0FBRyxNQUFNO0FBQ2pCLFdBQU9YLFNBQVMsQ0FBQ1ksR0FBVixFQUFQO0FBQ0gsR0FGRDs7QUFHQUgsU0FBTyxDQUFDQyxHQUFSLENBQVlWLFNBQVo7QUFDQSxzQkFDSTtBQUFBLDZCQUVLQSxTQUZMO0FBQUEsa0JBREo7QUFNSDs7R0ExQnVCRCxrQjs7S0FBQUEsa0IiLCJmaWxlIjoiLi9zcmMvQ29udGFpbmVycy9NeVJlY2lwZXNDb250YWluZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15UmVjaXBlc0NvbnRhaW5lciAoKSB7XG4gICAgXG4gICAgY29uc3QgW215UmVjaXBlcywgc2V0TXlSZWNpcGVzXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IHJlY2lwZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVjaXBlcydcblxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaE15UmVjaXBlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVjaXBlVXJsKVxuICAgICAgICAgICAgY29uc3QganNvbiA9IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coanNvbilcbiAgICAgICAgICAgIC8vIHNldE15UmVjaXBlcyhqc29uKVxuICAgICAgICB9O1xuICAgICAgICBmZXRjaE15UmVjaXBlcygpO1xuICAgIH0sIFtdKTtcblxuICAgIG15UmVjaXBlQ2FyZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG15UmVjaXBlcy5tYXAoKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhteVJlY2lwZXMpXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAgTXkgUmVjaXBlc1xuICAgICAgICAgICAge215UmVjaXBlc31cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Containers/MyRecipesContainer.js\n");

/***/ })

})