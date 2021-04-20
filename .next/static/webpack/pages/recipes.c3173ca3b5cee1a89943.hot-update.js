webpackHotUpdate_N_E("pages/recipes",{

/***/ "./src/Components/RecipeList.js":
/*!**************************************!*\
  !*** ./src/Components/RecipeList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RecipeList; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _RecipeItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecipeItem */ \"./src/Components/RecipeItem.js\");\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar */ \"./src/Components/SearchBar.js\");\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/RecipeList.js\";\n\n\n\n\nfunction RecipeList({\n  recipes,\n  favorites,\n  currentSelection\n}) {\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_3__[\"CURRENT_USER\"]; //filter out recipes the user has created\n\n  const myCreatedRecipes = () => {\n    return recipes.filter(recipe => recipe.recipe_creator_id === current_user);\n  }; //filter out recipes that i have liked\n\n\n  const myFavoriteRecipes = () => {\n    return favorites.filter(favorite => favorite.recipe_liker_id === current_user);\n  }; //map recipe_ids i have liked\n\n\n  const mapFavoriteRecipeIds = () => {\n    return myFavoriteRecipes().map(favorite => favorite.recipe_id);\n  };\n\n  const selection = currentSelection.state; //render conditions based on selection\n\n  const recipeCard = () => {\n    if (selection === 'created') {\n      return myCreatedRecipes().map(recipe => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RecipeItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        recipes: recipe\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, this));\n    } else if (selection === 'all' || selection === undefined) {\n      return recipes.map(recipe => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RecipeItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        recipes: recipe\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, this));\n    } else if (selection === 'saved') {\n      return recipes.map(recipe => {\n        if (mapFavoriteRecipeIds().includes(recipe.id)) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RecipeItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            recipes: recipe\n          }, recipe.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 28\n          }, this);\n        } else {\n          return null;\n        }\n      });\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      textAlign: 'center'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SearchBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      searchHandler: searchHandler,\n      searchValue: searchValue\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"cards\",\n      children: recipeCard()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 9\n  }, this);\n}\n_c = RecipeList;\n\nvar _c;\n\n$RefreshReg$(_c, \"RecipeList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUmVjaXBlTGlzdC5qcz82M2Y5Il0sIm5hbWVzIjpbIlJlY2lwZUxpc3QiLCJyZWNpcGVzIiwiZmF2b3JpdGVzIiwiY3VycmVudFNlbGVjdGlvbiIsImN1cnJlbnRfdXNlciIsIkNVUlJFTlRfVVNFUiIsIm15Q3JlYXRlZFJlY2lwZXMiLCJmaWx0ZXIiLCJyZWNpcGUiLCJyZWNpcGVfY3JlYXRvcl9pZCIsIm15RmF2b3JpdGVSZWNpcGVzIiwiZmF2b3JpdGUiLCJyZWNpcGVfbGlrZXJfaWQiLCJtYXBGYXZvcml0ZVJlY2lwZUlkcyIsIm1hcCIsInJlY2lwZV9pZCIsInNlbGVjdGlvbiIsInN0YXRlIiwicmVjaXBlQ2FyZCIsImlkIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJ0ZXh0QWxpZ24iLCJzZWFyY2hIYW5kbGVyIiwic2VhcmNoVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULENBQXFCO0FBQUVDLFNBQUY7QUFBV0MsV0FBWDtBQUFzQkM7QUFBdEIsQ0FBckIsRUFBK0Q7QUFDMUUsUUFBTUMsWUFBWSxHQUFHQywwREFBckIsQ0FEMEUsQ0FHMUU7O0FBQ0EsUUFBTUMsZ0JBQWdCLEdBQUcsTUFBTTtBQUMzQixXQUFPTCxPQUFPLENBQUNNLE1BQVIsQ0FBZUMsTUFBTSxJQUFJQSxNQUFNLENBQUNDLGlCQUFQLEtBQTZCTCxZQUF0RCxDQUFQO0FBQ0gsR0FGRCxDQUowRSxDQVExRTs7O0FBQ0EsUUFBTU0saUJBQWlCLEdBQUcsTUFBTTtBQUM1QixXQUFPUixTQUFTLENBQUNLLE1BQVYsQ0FBaUJJLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxlQUFULEtBQTZCUixZQUExRCxDQUFQO0FBQ0gsR0FGRCxDQVQwRSxDQWExRTs7O0FBQ0EsUUFBTVMsb0JBQW9CLEdBQUcsTUFBTTtBQUMvQixXQUFPSCxpQkFBaUIsR0FBR0ksR0FBcEIsQ0FBd0JILFFBQVEsSUFBSUEsUUFBUSxDQUFDSSxTQUE3QyxDQUFQO0FBQ0gsR0FGRDs7QUFJQSxRQUFNQyxTQUFTLEdBQUdiLGdCQUFnQixDQUFDYyxLQUFuQyxDQWxCMEUsQ0FtQjFFOztBQUNBLFFBQU1DLFVBQVUsR0FBRyxNQUFNO0FBQ3JCLFFBQUdGLFNBQVMsS0FBSyxTQUFqQixFQUE0QjtBQUN4QixhQUFPVixnQkFBZ0IsR0FBR1EsR0FBbkIsQ0FBdUJOLE1BQU0saUJBQ2hDLHFFQUFDLG1EQUFEO0FBQTRCLGVBQU8sRUFBRUE7QUFBckMsU0FBaUJBLE1BQU0sQ0FBQ1csRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURHLENBQVA7QUFFSCxLQUhELE1BR08sSUFBSUgsU0FBUyxLQUFLLEtBQWQsSUFBdUJBLFNBQVMsS0FBS0ksU0FBekMsRUFBb0Q7QUFDdkQsYUFBT25CLE9BQU8sQ0FBQ2EsR0FBUixDQUFZTixNQUFNLGlCQUNyQixxRUFBQyxtREFBRDtBQUE0QixlQUFPLEVBQUVBO0FBQXJDLFNBQWlCQSxNQUFNLENBQUNXLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERyxDQUFQO0FBRUgsS0FITSxNQUdBLElBQUlILFNBQVMsS0FBSyxPQUFsQixFQUEyQjtBQUM5QixhQUFPZixPQUFPLENBQUNhLEdBQVIsQ0FBWU4sTUFBTSxJQUFJO0FBQ3pCLFlBQUdLLG9CQUFvQixHQUFHUSxRQUF2QixDQUFnQ2IsTUFBTSxDQUFDVyxFQUF2QyxDQUFILEVBQThDO0FBQzFDLDhCQUFPLHFFQUFDLG1EQUFEO0FBQTRCLG1CQUFPLEVBQUVYO0FBQXJDLGFBQWlCQSxNQUFNLENBQUNXLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFDSCxTQUZELE1BRU87QUFDSCxpQkFBTyxJQUFQO0FBQ0g7QUFDSixPQU5NLENBQVA7QUFPSDtBQUNKLEdBaEJEOztBQW9CQSxzQkFDSTtBQUFLLFNBQUssRUFBRTtBQUFDRyxlQUFTLEVBQUU7QUFBWixLQUFaO0FBQUEsNEJBQ0kscUVBQUMsa0RBQUQ7QUFBVyxtQkFBYSxFQUFFQyxhQUExQjtBQUF5QyxpQkFBVyxFQUFFQztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUEsZ0JBQ0tOLFVBQVU7QUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFRSDtLQWhEdUJsQixVIiwiZmlsZSI6Ii4vc3JjL0NvbXBvbmVudHMvUmVjaXBlTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWNpcGVJdGVtIGZyb20gJy4vUmVjaXBlSXRlbSdcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9TZWFyY2hCYXInXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVIgfSBmcm9tICcuLi9jdXJyZW50X3VzZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNpcGVMaXN0ICh7IHJlY2lwZXMsIGZhdm9yaXRlcywgY3VycmVudFNlbGVjdGlvbiB9KSB7XG4gICAgY29uc3QgY3VycmVudF91c2VyID0gQ1VSUkVOVF9VU0VSXG5cbiAgICAvL2ZpbHRlciBvdXQgcmVjaXBlcyB0aGUgdXNlciBoYXMgY3JlYXRlZFxuICAgIGNvbnN0IG15Q3JlYXRlZFJlY2lwZXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiByZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4gcmVjaXBlLnJlY2lwZV9jcmVhdG9yX2lkID09PSBjdXJyZW50X3VzZXIpXG4gICAgfVxuXG4gICAgLy9maWx0ZXIgb3V0IHJlY2lwZXMgdGhhdCBpIGhhdmUgbGlrZWRcbiAgICBjb25zdCBteUZhdm9yaXRlUmVjaXBlcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZhdm9yaXRlcy5maWx0ZXIoZmF2b3JpdGUgPT4gZmF2b3JpdGUucmVjaXBlX2xpa2VyX2lkID09PSBjdXJyZW50X3VzZXIpXG4gICAgfVxuXG4gICAgLy9tYXAgcmVjaXBlX2lkcyBpIGhhdmUgbGlrZWRcbiAgICBjb25zdCBtYXBGYXZvcml0ZVJlY2lwZUlkcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG15RmF2b3JpdGVSZWNpcGVzKCkubWFwKGZhdm9yaXRlID0+IGZhdm9yaXRlLnJlY2lwZV9pZClcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3Rpb24gPSBjdXJyZW50U2VsZWN0aW9uLnN0YXRlXG4gICAgLy9yZW5kZXIgY29uZGl0aW9ucyBiYXNlZCBvbiBzZWxlY3Rpb25cbiAgICBjb25zdCByZWNpcGVDYXJkID0gKCkgPT4ge1xuICAgICAgICBpZihzZWxlY3Rpb24gPT09ICdjcmVhdGVkJykge1xuICAgICAgICAgICAgcmV0dXJuIG15Q3JlYXRlZFJlY2lwZXMoKS5tYXAocmVjaXBlID0+IFxuICAgICAgICAgICAgICAgIDxSZWNpcGVJdGVtIGtleT17cmVjaXBlLmlkfSByZWNpcGVzPXtyZWNpcGV9IC8+KVxuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGlvbiA9PT0gJ2FsbCcgfHwgc2VsZWN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZWNpcGVzLm1hcChyZWNpcGUgPT4gXG4gICAgICAgICAgICAgICAgPFJlY2lwZUl0ZW0ga2V5PXtyZWNpcGUuaWR9IHJlY2lwZXM9e3JlY2lwZX0gLz4pXG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uID09PSAnc2F2ZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjaXBlcy5tYXAocmVjaXBlID0+IHtcbiAgICAgICAgICAgICAgICBpZihtYXBGYXZvcml0ZVJlY2lwZUlkcygpLmluY2x1ZGVzKHJlY2lwZS5pZCkpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJlY2lwZUl0ZW0ga2V5PXtyZWNpcGUuaWR9IHJlY2lwZXM9e3JlY2lwZX0gLz5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+XG4gICAgICAgICAgICA8U2VhcmNoQmFyIHNlYXJjaEhhbmRsZXI9e3NlYXJjaEhhbmRsZXJ9IHNlYXJjaFZhbHVlPXtzZWFyY2hWYWx1ZX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNcIj5cbiAgICAgICAgICAgICAgICB7cmVjaXBlQ2FyZCgpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/RecipeList.js\n");

/***/ })

})