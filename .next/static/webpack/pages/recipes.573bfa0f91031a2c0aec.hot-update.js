webpackHotUpdate_N_E("pages/recipes",{

/***/ "./src/Components/RecipeList.js":
/*!**************************************!*\
  !*** ./src/Components/RecipeList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RecipeList; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _RecipeItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecipeItem */ \"./src/Components/RecipeItem.js\");\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/RecipeList.js\";\n\n\nfunction RecipeList({\n  recipes,\n  favorites,\n  selection\n}) {\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_2__[\"CURRENT_USER\"]; // const filterMyRecipes = () => {\n  //     return recipes.filter(recipe => recipe.recipe_creator_id === current_user)\n  // }\n\n  /*\n  //parse recipe cards\n  const recipeCard = () => {\n      // if (myRecipes === true) {\n      //     return filterMyRecipes().map(recipe => \n      //         <RecipeItem key={recipe.id} favorites={favorites} recipes={recipe} />)\n      // } else if (myRecipes !== true) {\n          return recipes.map(recipe => \n              <RecipeItem key={recipe.id} favorites={favorites} recipes={recipe} />)\n      // }\n  }\n  */\n\n  const recipeCard = () => {\n    if (selection === 'created') {\n      return filterMyRecipes().map(recipe => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RecipeItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        favorites: favorites,\n        recipes: recipe\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, this));\n    } else {\n      'return all';\n    }\n  };\n\n  console.log(selection === \"created\");\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: recipeCard()\n  }, void 0, false);\n}\n_c = RecipeList;\n\nvar _c;\n\n$RefreshReg$(_c, \"RecipeList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUmVjaXBlTGlzdC5qcz82M2Y5Il0sIm5hbWVzIjpbIlJlY2lwZUxpc3QiLCJyZWNpcGVzIiwiZmF2b3JpdGVzIiwic2VsZWN0aW9uIiwiY3VycmVudF91c2VyIiwiQ1VSUkVOVF9VU0VSIiwicmVjaXBlQ2FyZCIsImZpbHRlck15UmVjaXBlcyIsIm1hcCIsInJlY2lwZSIsImlkIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFVBQVQsQ0FBcUI7QUFBRUMsU0FBRjtBQUFXQyxXQUFYO0FBQXNCQztBQUF0QixDQUFyQixFQUF3RDtBQUNuRSxRQUFNQyxZQUFZLEdBQUdDLDBEQUFyQixDQURtRSxDQUduRTtBQUNBO0FBQ0E7O0FBQ0E7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVJLFFBQU1DLFVBQVUsR0FBRyxNQUFNO0FBQ3JCLFFBQUdILFNBQVMsS0FBSyxTQUFqQixFQUE0QjtBQUN4QixhQUFPSSxlQUFlLEdBQUdDLEdBQWxCLENBQXNCQyxNQUFNLGlCQUMvQixxRUFBQyxtREFBRDtBQUE0QixpQkFBUyxFQUFFUCxTQUF2QztBQUFrRCxlQUFPLEVBQUVPO0FBQTNELFNBQWlCQSxNQUFNLENBQUNDLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERyxDQUFQO0FBRUgsS0FIRCxNQUdPO0FBQ0g7QUFDSDtBQUNKLEdBUEQ7O0FBU0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVCxTQUFTLEtBQUssU0FBMUI7QUFFQSxzQkFDSTtBQUFBLGNBQ0tHLFVBQVU7QUFEZixtQkFESjtBQVFIO0tBdEN1Qk4sVSIsImZpbGUiOiIuL3NyYy9Db21wb25lbnRzL1JlY2lwZUxpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVjaXBlSXRlbSBmcm9tICcuL1JlY2lwZUl0ZW0nXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVIgfSBmcm9tICcuLi9jdXJyZW50X3VzZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2lwZUxpc3QgKHsgcmVjaXBlcywgZmF2b3JpdGVzLCBzZWxlY3Rpb24gfSkge1xuICAgIGNvbnN0IGN1cnJlbnRfdXNlciA9IENVUlJFTlRfVVNFUlxuXG4gICAgLy8gY29uc3QgZmlsdGVyTXlSZWNpcGVzID0gKCkgPT4ge1xuICAgIC8vICAgICByZXR1cm4gcmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS5yZWNpcGVfY3JlYXRvcl9pZCA9PT0gY3VycmVudF91c2VyKVxuICAgIC8vIH1cbiAgICAvKlxuICAgIC8vcGFyc2UgcmVjaXBlIGNhcmRzXG4gICAgY29uc3QgcmVjaXBlQ2FyZCA9ICgpID0+IHtcbiAgICAgICAgLy8gaWYgKG15UmVjaXBlcyA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyAgICAgcmV0dXJuIGZpbHRlck15UmVjaXBlcygpLm1hcChyZWNpcGUgPT4gXG4gICAgICAgIC8vICAgICAgICAgPFJlY2lwZUl0ZW0ga2V5PXtyZWNpcGUuaWR9IGZhdm9yaXRlcz17ZmF2b3JpdGVzfSByZWNpcGVzPXtyZWNpcGV9IC8+KVxuICAgICAgICAvLyB9IGVsc2UgaWYgKG15UmVjaXBlcyAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlY2lwZXMubWFwKHJlY2lwZSA9PiBcbiAgICAgICAgICAgICAgICA8UmVjaXBlSXRlbSBrZXk9e3JlY2lwZS5pZH0gZmF2b3JpdGVzPXtmYXZvcml0ZXN9IHJlY2lwZXM9e3JlY2lwZX0gLz4pXG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgKi8gIFxuXG4gICAgY29uc3QgcmVjaXBlQ2FyZCA9ICgpID0+IHtcbiAgICAgICAgaWYoc2VsZWN0aW9uID09PSAnY3JlYXRlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJNeVJlY2lwZXMoKS5tYXAocmVjaXBlID0+IFxuICAgICAgICAgICAgICAgIDxSZWNpcGVJdGVtIGtleT17cmVjaXBlLmlkfSBmYXZvcml0ZXM9e2Zhdm9yaXRlc30gcmVjaXBlcz17cmVjaXBlfSAvPilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICdyZXR1cm4gYWxsJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coc2VsZWN0aW9uID09PSBcImNyZWF0ZWRcIilcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7cmVjaXBlQ2FyZCgpfVxuICAgICAgICA8Lz5cbiAgICAgICAgXG4gICAgKVxuXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/RecipeList.js\n");

/***/ })

})