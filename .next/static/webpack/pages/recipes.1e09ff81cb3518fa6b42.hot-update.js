webpackHotUpdate_N_E("pages/recipes",{

/***/ "./src/Containers/RecipeContainer.js":
/*!*******************************************!*\
  !*** ./src/Containers/RecipeContainer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_RecipeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/RecipeList */ \"./src/Components/RecipeList.js\");\n/* harmony import */ var _Components_RecipeFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/RecipeFilter */ \"./src/Components/RecipeFilter.js\");\n/* harmony import */ var _RecipeContext_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../RecipeContext/state */ \"./src/RecipeContext/state.js\");\n/* harmony import */ var _Components_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/SearchBar */ \"./src/Components/SearchBar.js\");\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Containers/RecipeContainer.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction RecipeContainer() {\n  _s();\n\n  const {\n    recipes,\n    favorites\n  } = Object(_RecipeContext_state__WEBPACK_IMPORTED_MODULE_4__[\"useRecipeContext\"])();\n  const {\n    0: recipeSelection,\n    1: setRecipeSelection\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('all');\n\n  const changeHandler = e => {\n    setRecipeSelection({\n      state: e.currentTarget.value\n    });\n    console.log(recipeSelection);\n  };\n\n  const {\n    0: searchValue,\n    1: setSearchValue\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n\n  const searchHandler = e => {\n    setSearchValue(e.target.value);\n  };\n\n  const searchRecipes = () => {\n    return recipes.filter(recipe => recipe.title.toLowerCase().includes(searchValue.toLowerCase()));\n  };\n\n  const searchFavorites = () => {\n    return favorites.filter(recipe => recipe.recipe_name.toLowerCase().includes(searchValue.toLowerCase()));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_SearchBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      searchHandler: searchHandler,\n      searchValue: searchValue\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_RecipeFilter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      changeHandler: changeHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_RecipeList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      searchRecipes: searchRecipes(),\n      searchFavorites: searchFavorites(),\n      currentSelection: recipeSelection,\n      favorites: favorites,\n      recipes: recipes\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(RecipeContainer, \"TIznmAFwB9C0WonMWJ0kacJwyEk=\", false, function () {\n  return [_RecipeContext_state__WEBPACK_IMPORTED_MODULE_4__[\"useRecipeContext\"]];\n});\n\n_c = RecipeContainer;\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecipeContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"RecipeContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbnRhaW5lcnMvUmVjaXBlQ29udGFpbmVyLmpzP2YwYWYiXSwibmFtZXMiOlsiUmVjaXBlQ29udGFpbmVyIiwicmVjaXBlcyIsImZhdm9yaXRlcyIsInVzZVJlY2lwZUNvbnRleHQiLCJyZWNpcGVTZWxlY3Rpb24iLCJzZXRSZWNpcGVTZWxlY3Rpb24iLCJ1c2VTdGF0ZSIsImNoYW5nZUhhbmRsZXIiLCJlIiwic3RhdGUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsInNlYXJjaEhhbmRsZXIiLCJ0YXJnZXQiLCJzZWFyY2hSZWNpcGVzIiwiZmlsdGVyIiwicmVjaXBlIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2VhcmNoRmF2b3JpdGVzIiwicmVjaXBlX25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsZUFBVCxHQUEyQjtBQUFBOztBQUV6QixRQUFNO0FBQUNDLFdBQUQ7QUFBVUM7QUFBVixNQUF1QkMsNkVBQWdCLEVBQTdDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0NDLHNEQUFRLENBQUMsS0FBRCxDQUF0RDs7QUFFQSxRQUFNQyxhQUFhLEdBQUlDLENBQUQsSUFBTztBQUMzQkgsc0JBQWtCLENBQUM7QUFDakJJLFdBQUssRUFBRUQsQ0FBQyxDQUFDRSxhQUFGLENBQWdCQztBQUROLEtBQUQsQ0FBbEI7QUFHQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlULGVBQVo7QUFDRCxHQUxEOztBQU9BLFFBQU07QUFBQSxPQUFDVSxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ1Qsc0RBQVEsQ0FBQyxFQUFELENBQTlDOztBQUVBLFFBQU1VLGFBQWEsR0FBSVIsQ0FBRCxJQUFPO0FBQzNCTyxrQkFBYyxDQUFDUCxDQUFDLENBQUNTLE1BQUYsQ0FBU04sS0FBVixDQUFkO0FBQ0QsR0FGRDs7QUFJQSxRQUFNTyxhQUFhLEdBQUcsTUFBTTtBQUN4QixXQUFPakIsT0FBTyxDQUFDa0IsTUFBUixDQUFlQyxNQUFNLElBQUlBLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhQyxXQUFiLEdBQTJCQyxRQUEzQixDQUFvQ1QsV0FBVyxDQUFDUSxXQUFaLEVBQXBDLENBQXpCLENBQVA7QUFDSCxHQUZEOztBQUlBLFFBQU1FLGVBQWUsR0FBRyxNQUFNO0FBQzFCLFdBQU90QixTQUFTLENBQUNpQixNQUFWLENBQWlCQyxNQUFNLElBQUlBLE1BQU0sQ0FBQ0ssV0FBUCxDQUFtQkgsV0FBbkIsR0FBaUNDLFFBQWpDLENBQTBDVCxXQUFXLENBQUNRLFdBQVosRUFBMUMsQ0FBM0IsQ0FBUDtBQUNILEdBRkQ7O0FBS0Esc0JBQ0U7QUFBQSw0QkFFUSxxRUFBQyw2REFBRDtBQUNFLG1CQUFhLEVBQUVOLGFBRGpCO0FBRUUsaUJBQVcsRUFBRUY7QUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRlIsZUFPTSxxRUFBQyxnRUFBRDtBQUNFLG1CQUFhLEVBQUVQO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQTixlQVNFLHFFQUFDLDhEQUFEO0FBQ0UsbUJBQWEsRUFBRVcsYUFBYSxFQUQ5QjtBQUVFLHFCQUFlLEVBQUVNLGVBQWUsRUFGbEM7QUFHRSxzQkFBZ0IsRUFBRXBCLGVBSHBCO0FBSUUsZUFBUyxFQUFFRixTQUpiO0FBS0UsYUFBTyxFQUFFRDtBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBLGtCQURGO0FBa0JEOztHQTdDUUQsZTtVQUVzQkcscUU7OztLQUZ0QkgsZTtBQTZDUjtBQUVjQSw4RUFBZiIsImZpbGUiOiIuL3NyYy9Db250YWluZXJzL1JlY2lwZUNvbnRhaW5lci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVjaXBlTGlzdCBmcm9tICcuLi9Db21wb25lbnRzL1JlY2lwZUxpc3QnXG5pbXBvcnQgUmVjaXBlRmlsdGVyIGZyb20gJy4uL0NvbXBvbmVudHMvUmVjaXBlRmlsdGVyJ1xuaW1wb3J0IHsgdXNlUmVjaXBlQ29udGV4dCB9IGZyb20gJy4uL1JlY2lwZUNvbnRleHQvc3RhdGUnXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL0NvbXBvbmVudHMvU2VhcmNoQmFyJ1xuXG5mdW5jdGlvbiBSZWNpcGVDb250YWluZXIoKSB7XG5cbiAgY29uc3Qge3JlY2lwZXMsIGZhdm9yaXRlc30gPSB1c2VSZWNpcGVDb250ZXh0KCk7XG4gIGNvbnN0IFtyZWNpcGVTZWxlY3Rpb24sIHNldFJlY2lwZVNlbGVjdGlvbl0gPSB1c2VTdGF0ZSgnYWxsJyk7XG5cbiAgY29uc3QgY2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XG4gICAgc2V0UmVjaXBlU2VsZWN0aW9uKHsgXG4gICAgICBzdGF0ZTogZS5jdXJyZW50VGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhyZWNpcGVTZWxlY3Rpb24pXG4gIH1cblxuICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IHNlYXJjaEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIHNldFNlYXJjaFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBzZWFyY2hSZWNpcGVzID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIHJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiByZWNpcGUudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKSlcbiAgfVxuXG4gIGNvbnN0IHNlYXJjaEZhdm9yaXRlcyA9ICgpID0+IHtcbiAgICAgIHJldHVybiBmYXZvcml0ZXMuZmlsdGVyKHJlY2lwZSA9PiByZWNpcGUucmVjaXBlX25hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKSlcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuXG4gICAgICAgICAgICA8U2VhcmNoQmFyIFxuICAgICAgICAgICAgICBzZWFyY2hIYW5kbGVyPXtzZWFyY2hIYW5kbGVyfSBcbiAgICAgICAgICAgICAgc2VhcmNoVmFsdWU9e3NlYXJjaFZhbHVlfSAvPlxuXG5cbiAgICAgICAgICA8UmVjaXBlRmlsdGVyIFxuICAgICAgICAgICAgY2hhbmdlSGFuZGxlcj17Y2hhbmdlSGFuZGxlcn0gLz4gICBcbiAgICAgIDxSZWNpcGVMaXN0IFxuICAgICAgICBzZWFyY2hSZWNpcGVzPXtzZWFyY2hSZWNpcGVzKCl9IFxuICAgICAgICBzZWFyY2hGYXZvcml0ZXM9e3NlYXJjaEZhdm9yaXRlcygpfSBcbiAgICAgICAgY3VycmVudFNlbGVjdGlvbj17cmVjaXBlU2VsZWN0aW9ufSBcbiAgICAgICAgZmF2b3JpdGVzPXtmYXZvcml0ZXN9IFxuICAgICAgICByZWNpcGVzPXtyZWNpcGVzfSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlQ29udGFpbmVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Containers/RecipeContainer.js\n");

/***/ })

})