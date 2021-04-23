webpackHotUpdate_N_E("pages/recipes",{

/***/ "./src/Containers/RecipeContainer.js":
/*!*******************************************!*\
  !*** ./src/Containers/RecipeContainer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_RecipeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/RecipeList */ \"./src/Components/RecipeList.js\");\n/* harmony import */ var _Components_RecipeFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/RecipeFilter */ \"./src/Components/RecipeFilter.js\");\n/* harmony import */ var _RecipeContext_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../RecipeContext/state */ \"./src/RecipeContext/state.js\");\n/* harmony import */ var _Components_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/SearchBar */ \"./src/Components/SearchBar.js\");\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Containers/RecipeContainer.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction RecipeContainer() {\n  _s();\n\n  const {\n    recipes,\n    favorites\n  } = Object(_RecipeContext_state__WEBPACK_IMPORTED_MODULE_4__[\"useRecipeContext\"])();\n  const {\n    0: recipeSelection,\n    1: setRecipeSelection\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('all');\n\n  const changeHandler = e => {\n    setRecipeSelection({\n      state: e.currentTarget.value\n    });\n    console.log(recipeSelection);\n  };\n\n  const {\n    0: searchValue,\n    1: setSearchValue\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n\n  const searchHandler = e => {\n    setSearchValue(e.target.value);\n  };\n\n  const searchRecipes = () => {\n    return recipes.filter(recipe => recipe.title.toLowerCase().includes(searchValue.toLowerCase()));\n  };\n\n  const searchFavorites = () => {\n    return favorites.filter(recipe => recipe.recipe_name.toLowerCase().includes(searchValue.toLowerCase()));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"rowC\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_SearchBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      searchHandler: searchHandler,\n      searchValue: searchValue\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_RecipeFilter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      changeHandler: changeHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_RecipeList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      searchRecipes: searchRecipes(),\n      searchFavorites: searchFavorites(),\n      currentSelection: recipeSelection,\n      favorites: favorites,\n      recipes: recipes\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, this);\n}\n\n_s(RecipeContainer, \"TIznmAFwB9C0WonMWJ0kacJwyEk=\", false, function () {\n  return [_RecipeContext_state__WEBPACK_IMPORTED_MODULE_4__[\"useRecipeContext\"]];\n});\n\n_c = RecipeContainer;\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecipeContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"RecipeContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbnRhaW5lcnMvUmVjaXBlQ29udGFpbmVyLmpzP2YwYWYiXSwibmFtZXMiOlsiUmVjaXBlQ29udGFpbmVyIiwicmVjaXBlcyIsImZhdm9yaXRlcyIsInVzZVJlY2lwZUNvbnRleHQiLCJyZWNpcGVTZWxlY3Rpb24iLCJzZXRSZWNpcGVTZWxlY3Rpb24iLCJ1c2VTdGF0ZSIsImNoYW5nZUhhbmRsZXIiLCJlIiwic3RhdGUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsInNlYXJjaEhhbmRsZXIiLCJ0YXJnZXQiLCJzZWFyY2hSZWNpcGVzIiwiZmlsdGVyIiwicmVjaXBlIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2VhcmNoRmF2b3JpdGVzIiwicmVjaXBlX25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxlQUFULEdBQTJCO0FBQUE7O0FBRXpCLFFBQU07QUFBQ0MsV0FBRDtBQUFVQztBQUFWLE1BQXVCQyw2RUFBZ0IsRUFBN0M7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsZUFBRDtBQUFBLE9BQWtCQztBQUFsQixNQUF3Q0Msc0RBQVEsQ0FBQyxLQUFELENBQXREOztBQUVBLFFBQU1DLGFBQWEsR0FBSUMsQ0FBRCxJQUFPO0FBQzNCSCxzQkFBa0IsQ0FBQztBQUNqQkksV0FBSyxFQUFFRCxDQUFDLENBQUNFLGFBQUYsQ0FBZ0JDO0FBRE4sS0FBRCxDQUFsQjtBQUdBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVQsZUFBWjtBQUNELEdBTEQ7O0FBT0EsUUFBTTtBQUFBLE9BQUNVLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDVCxzREFBUSxDQUFDLEVBQUQsQ0FBOUM7O0FBRUEsUUFBTVUsYUFBYSxHQUFJUixDQUFELElBQU87QUFDM0JPLGtCQUFjLENBQUNQLENBQUMsQ0FBQ1MsTUFBRixDQUFTTixLQUFWLENBQWQ7QUFDRCxHQUZEOztBQUlBLFFBQU1PLGFBQWEsR0FBRyxNQUFNO0FBQ3hCLFdBQU9qQixPQUFPLENBQUNrQixNQUFSLENBQWVDLE1BQU0sSUFBSUEsTUFBTSxDQUFDQyxLQUFQLENBQWFDLFdBQWIsR0FBMkJDLFFBQTNCLENBQW9DVCxXQUFXLENBQUNRLFdBQVosRUFBcEMsQ0FBekIsQ0FBUDtBQUNILEdBRkQ7O0FBSUEsUUFBTUUsZUFBZSxHQUFHLE1BQU07QUFDMUIsV0FBT3RCLFNBQVMsQ0FBQ2lCLE1BQVYsQ0FBaUJDLE1BQU0sSUFBSUEsTUFBTSxDQUFDSyxXQUFQLENBQW1CSCxXQUFuQixHQUFpQ0MsUUFBakMsQ0FBMENULFdBQVcsQ0FBQ1EsV0FBWixFQUExQyxDQUEzQixDQUFQO0FBQ0gsR0FGRDs7QUFLQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUEsNEJBQ0UscUVBQUMsNkRBQUQ7QUFDRSxtQkFBYSxFQUFFTixhQURqQjtBQUVFLGlCQUFXLEVBQUVGO0FBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0UscUVBQUMsZ0VBQUQ7QUFDRSxtQkFBYSxFQUFFUDtBQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFRRSxxRUFBQyw4REFBRDtBQUNFLG1CQUFhLEVBQUVXLGFBQWEsRUFEOUI7QUFFRSxxQkFBZSxFQUFFTSxlQUFlLEVBRmxDO0FBR0Usc0JBQWdCLEVBQUVwQixlQUhwQjtBQUlFLGVBQVMsRUFBRUYsU0FKYjtBQUtFLGFBQU8sRUFBRUQ7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQ7O0dBN0NRRCxlO1VBRXNCRyxxRTs7O0tBRnRCSCxlO0FBNkNSO0FBRWNBLDhFQUFmIiwiZmlsZSI6Ii4vc3JjL0NvbnRhaW5lcnMvUmVjaXBlQ29udGFpbmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWNpcGVMaXN0IGZyb20gJy4uL0NvbXBvbmVudHMvUmVjaXBlTGlzdCdcbmltcG9ydCBSZWNpcGVGaWx0ZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9SZWNpcGVGaWx0ZXInXG5pbXBvcnQgeyB1c2VSZWNpcGVDb250ZXh0IH0gZnJvbSAnLi4vUmVjaXBlQ29udGV4dC9zdGF0ZSdcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vQ29tcG9uZW50cy9TZWFyY2hCYXInXG5cbmZ1bmN0aW9uIFJlY2lwZUNvbnRhaW5lcigpIHtcblxuICBjb25zdCB7cmVjaXBlcywgZmF2b3JpdGVzfSA9IHVzZVJlY2lwZUNvbnRleHQoKTtcbiAgY29uc3QgW3JlY2lwZVNlbGVjdGlvbiwgc2V0UmVjaXBlU2VsZWN0aW9uXSA9IHVzZVN0YXRlKCdhbGwnKTtcblxuICBjb25zdCBjaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcbiAgICBzZXRSZWNpcGVTZWxlY3Rpb24oeyBcbiAgICAgIHN0YXRlOiBlLmN1cnJlbnRUYXJnZXQudmFsdWVcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHJlY2lwZVNlbGVjdGlvbilcbiAgfVxuXG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3Qgc2VhcmNoSGFuZGxlciA9IChlKSA9PiB7XG4gICAgc2V0U2VhcmNoVmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IHNlYXJjaFJlY2lwZXMgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gcmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpKVxuICB9XG5cbiAgY29uc3Qgc2VhcmNoRmF2b3JpdGVzID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIGZhdm9yaXRlcy5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS5yZWNpcGVfbmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpKVxuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdyb3dDJz5cbiAgICAgIDxTZWFyY2hCYXIgXG4gICAgICAgIHNlYXJjaEhhbmRsZXI9e3NlYXJjaEhhbmRsZXJ9IFxuICAgICAgICBzZWFyY2hWYWx1ZT17c2VhcmNoVmFsdWV9IFxuICAgICAgLz5cbiAgICAgIDxSZWNpcGVGaWx0ZXIgXG4gICAgICAgIGNoYW5nZUhhbmRsZXI9e2NoYW5nZUhhbmRsZXJ9IFxuICAgICAgLz4gICBcbiAgICAgIDxSZWNpcGVMaXN0IFxuICAgICAgICBzZWFyY2hSZWNpcGVzPXtzZWFyY2hSZWNpcGVzKCl9IFxuICAgICAgICBzZWFyY2hGYXZvcml0ZXM9e3NlYXJjaEZhdm9yaXRlcygpfSBcbiAgICAgICAgY3VycmVudFNlbGVjdGlvbj17cmVjaXBlU2VsZWN0aW9ufSBcbiAgICAgICAgZmF2b3JpdGVzPXtmYXZvcml0ZXN9IFxuICAgICAgICByZWNpcGVzPXtyZWNpcGVzfSBcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVDb250YWluZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Containers/RecipeContainer.js\n");

/***/ })

})