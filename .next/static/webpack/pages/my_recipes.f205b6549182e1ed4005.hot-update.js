webpackHotUpdate_N_E("pages/my_recipes",{

/***/ "./src/Containers/MyRecipesContainer.js":
/*!**********************************************!*\
  !*** ./src/Containers/MyRecipesContainer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyRecipesContainer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_MyRecipeItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/MyRecipeItem */ \"./src/Components/MyRecipeItem.js\");\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Containers/MyRecipesContainer.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction MyRecipesContainer() {\n  _s();\n\n  const {\n    0: myRecipes,\n    1: setMyRecipes\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const recipeUrl = 'http://localhost:3000/recipes';\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const fetchMyRecipes = async () => {\n      const response = await fetch(recipeUrl);\n      const json = response.json();\n      console.log(json); // setMyRecipes(json)\n    };\n\n    fetchMyRecipes();\n  }, []);\n\n  const myRecipeCard = () => {\n    return myRecipes.map(recipe => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_MyRecipeItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 40\n    }, this));\n  };\n\n  console.log(myRecipes);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [\"My Recipes\", myRecipes]\n  }, void 0, true);\n}\n\n_s(MyRecipesContainer, \"GKkQOzQ5GsVL4SfdkXtmoESvTwg=\");\n\n_c = MyRecipesContainer;\n\nvar _c;\n\n$RefreshReg$(_c, \"MyRecipesContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbnRhaW5lcnMvTXlSZWNpcGVzQ29udGFpbmVyLmpzPzM4N2YiXSwibmFtZXMiOlsiTXlSZWNpcGVzQ29udGFpbmVyIiwibXlSZWNpcGVzIiwic2V0TXlSZWNpcGVzIiwidXNlU3RhdGUiLCJyZWNpcGVVcmwiLCJ1c2VFZmZlY3QiLCJmZXRjaE15UmVjaXBlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm15UmVjaXBlQ2FyZCIsIm1hcCIsInJlY2lwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxrQkFBVCxHQUErQjtBQUFBOztBQUUxQyxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsRUFBRCxDQUExQztBQUNBLFFBQU1DLFNBQVMsR0FBRywrQkFBbEI7QUFFQUMseURBQVMsQ0FBRSxNQUFNO0FBQ2IsVUFBTUMsY0FBYyxHQUFHLFlBQVk7QUFDL0IsWUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0osU0FBRCxDQUE1QjtBQUNBLFlBQU1LLElBQUksR0FBR0YsUUFBUSxDQUFDRSxJQUFULEVBQWI7QUFFQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosRUFKK0IsQ0FLL0I7QUFDSCxLQU5EOztBQU9BSCxrQkFBYztBQUNqQixHQVRRLEVBU04sRUFUTSxDQUFUOztBQVdBLFFBQU1NLFlBQVksR0FBRyxNQUFNO0FBQ3ZCLFdBQU9YLFNBQVMsQ0FBQ1ksR0FBVixDQUFjQyxNQUFNLGlCQUFJLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBeEIsQ0FBUDtBQUNILEdBRkQ7O0FBR0FKLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVixTQUFaO0FBQ0Esc0JBQ0k7QUFBQSw2QkFFS0EsU0FGTDtBQUFBLGtCQURKO0FBTUg7O0dBMUJ1QkQsa0I7O0tBQUFBLGtCIiwiZmlsZSI6Ii4vc3JjL0NvbnRhaW5lcnMvTXlSZWNpcGVzQ29udGFpbmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE15UmVjaXBlSXRlbSBmcm9tICcuLi9Db21wb25lbnRzL015UmVjaXBlSXRlbSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlSZWNpcGVzQ29udGFpbmVyICgpIHtcbiAgICBcbiAgICBjb25zdCBbbXlSZWNpcGVzLCBzZXRNeVJlY2lwZXNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgcmVjaXBlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWNpcGVzJ1xuXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoTXlSZWNpcGVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZWNpcGVVcmwpXG4gICAgICAgICAgICBjb25zdCBqc29uID0gcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqc29uKVxuICAgICAgICAgICAgLy8gc2V0TXlSZWNpcGVzKGpzb24pXG4gICAgICAgIH07XG4gICAgICAgIGZldGNoTXlSZWNpcGVzKCk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgbXlSZWNpcGVDYXJkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbXlSZWNpcGVzLm1hcChyZWNpcGUgPT4gPE15UmVjaXBlSXRlbSAvPilcbiAgICB9XG4gICAgY29uc29sZS5sb2cobXlSZWNpcGVzKVxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIE15IFJlY2lwZXNcbiAgICAgICAgICAgIHtteVJlY2lwZXN9XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Containers/MyRecipesContainer.js\n");

/***/ })

})