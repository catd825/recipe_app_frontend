webpackHotUpdate_N_E("pages/recipes",{

/***/ "./src/Components/RecipeList.js":
/*!**************************************!*\
  !*** ./src/Components/RecipeList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RecipeList; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _RecipeItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecipeItem */ \"./src/Components/RecipeItem.js\");\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/RecipeList.js\";\n\n\nfunction RecipeList({\n  recipes,\n  favorites,\n  currentSelection\n}) {\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_2__[\"CURRENT_USER\"]; //filter out recipes the user has created\n\n  const myCreatedRecipes = () => {\n    return recipes.filter(recipe => recipe.recipe_creator_id === current_user);\n  }; //filter out recipes that i have liked\n\n\n  const myFavoriteRecipes = () => {\n    return favorites.filter(favorite => favorite.recipe_liker_id === current_user);\n  }; //map recipe_ids i have liked\n\n\n  const mapFavoriteRecipeIds = () => {\n    return myFavoriteRecipes().map(favorite => favorite.recipe_id);\n  };\n\n  const selection = currentSelection.state; //render conditions based on selection\n\n  const recipeCard = () => {\n    if (selection === 'created') {\n      return myCreatedRecipes().map(recipe => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RecipeItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        recipes: recipe\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, this));\n    } else if (selection === 'all' || selection === undefined) {\n      return recipes.map(recipe => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RecipeItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        recipes: recipe\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }, this));\n    } else if (selection === 'saved') {\n      return recipes.map(recipe => {\n        if (mapFavoriteRecipeIds().includes(recipe.id)) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RecipeItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            recipes: recipe\n          }, recipe.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 28\n          }, this);\n        } else {\n          return null;\n        }\n      });\n    }\n  }; // console.log(mapFavoriteRecipeIds())\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [\"Search Bar!\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"cards\",\n      children: recipeCard()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 9\n  }, this);\n}\n_c = RecipeList;\n\nvar _c;\n\n$RefreshReg$(_c, \"RecipeList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUmVjaXBlTGlzdC5qcz82M2Y5Il0sIm5hbWVzIjpbIlJlY2lwZUxpc3QiLCJyZWNpcGVzIiwiZmF2b3JpdGVzIiwiY3VycmVudFNlbGVjdGlvbiIsImN1cnJlbnRfdXNlciIsIkNVUlJFTlRfVVNFUiIsIm15Q3JlYXRlZFJlY2lwZXMiLCJmaWx0ZXIiLCJyZWNpcGUiLCJyZWNpcGVfY3JlYXRvcl9pZCIsIm15RmF2b3JpdGVSZWNpcGVzIiwiZmF2b3JpdGUiLCJyZWNpcGVfbGlrZXJfaWQiLCJtYXBGYXZvcml0ZVJlY2lwZUlkcyIsIm1hcCIsInJlY2lwZV9pZCIsInNlbGVjdGlvbiIsInN0YXRlIiwicmVjaXBlQ2FyZCIsImlkIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFVBQVQsQ0FBcUI7QUFBRUMsU0FBRjtBQUFXQyxXQUFYO0FBQXNCQztBQUF0QixDQUFyQixFQUErRDtBQUMxRSxRQUFNQyxZQUFZLEdBQUdDLDBEQUFyQixDQUQwRSxDQUcxRTs7QUFDQSxRQUFNQyxnQkFBZ0IsR0FBRyxNQUFNO0FBQzNCLFdBQU9MLE9BQU8sQ0FBQ00sTUFBUixDQUFlQyxNQUFNLElBQUlBLE1BQU0sQ0FBQ0MsaUJBQVAsS0FBNkJMLFlBQXRELENBQVA7QUFDSCxHQUZELENBSjBFLENBUTFFOzs7QUFDQSxRQUFNTSxpQkFBaUIsR0FBRyxNQUFNO0FBQzVCLFdBQU9SLFNBQVMsQ0FBQ0ssTUFBVixDQUFpQkksUUFBUSxJQUFJQSxRQUFRLENBQUNDLGVBQVQsS0FBNkJSLFlBQTFELENBQVA7QUFDSCxHQUZELENBVDBFLENBYTFFOzs7QUFDQSxRQUFNUyxvQkFBb0IsR0FBRyxNQUFNO0FBQy9CLFdBQU9ILGlCQUFpQixHQUFHSSxHQUFwQixDQUF3QkgsUUFBUSxJQUFJQSxRQUFRLENBQUNJLFNBQTdDLENBQVA7QUFDSCxHQUZEOztBQUlBLFFBQU1DLFNBQVMsR0FBR2IsZ0JBQWdCLENBQUNjLEtBQW5DLENBbEIwRSxDQW1CMUU7O0FBQ0EsUUFBTUMsVUFBVSxHQUFHLE1BQU07QUFDckIsUUFBR0YsU0FBUyxLQUFLLFNBQWpCLEVBQTRCO0FBQ3hCLGFBQU9WLGdCQUFnQixHQUFHUSxHQUFuQixDQUF1Qk4sTUFBTSxpQkFDaEMscUVBQUMsbURBQUQ7QUFBNEIsZUFBTyxFQUFFQTtBQUFyQyxTQUFpQkEsTUFBTSxDQUFDVyxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREcsQ0FBUDtBQUVILEtBSEQsTUFHTyxJQUFJSCxTQUFTLEtBQUssS0FBZCxJQUF1QkEsU0FBUyxLQUFLSSxTQUF6QyxFQUFvRDtBQUN2RCxhQUFPbkIsT0FBTyxDQUFDYSxHQUFSLENBQVlOLE1BQU0saUJBQ3JCLHFFQUFDLG1EQUFEO0FBQTRCLGVBQU8sRUFBRUE7QUFBckMsU0FBaUJBLE1BQU0sQ0FBQ1csRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURHLENBQVA7QUFFSCxLQUhNLE1BR0EsSUFBSUgsU0FBUyxLQUFLLE9BQWxCLEVBQTJCO0FBQzlCLGFBQU9mLE9BQU8sQ0FBQ2EsR0FBUixDQUFZTixNQUFNLElBQUk7QUFDekIsWUFBR0ssb0JBQW9CLEdBQUdRLFFBQXZCLENBQWdDYixNQUFNLENBQUNXLEVBQXZDLENBQUgsRUFBOEM7QUFDMUMsOEJBQU8scUVBQUMsbURBQUQ7QUFBNEIsbUJBQU8sRUFBRVg7QUFBckMsYUFBaUJBLE1BQU0sQ0FBQ1csRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBUDtBQUNILFNBRkQsTUFFTztBQUNILGlCQUFPLElBQVA7QUFDSDtBQUNKLE9BTk0sQ0FBUDtBQU9IO0FBQ0osR0FoQkQsQ0FwQjBFLENBcUMxRTs7O0FBRUEsc0JBQ0k7QUFBQSwyQ0FFQTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUEsZ0JBQ0tELFVBQVU7QUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFRSDtLQS9DdUJsQixVIiwiZmlsZSI6Ii4vc3JjL0NvbXBvbmVudHMvUmVjaXBlTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWNpcGVJdGVtIGZyb20gJy4vUmVjaXBlSXRlbSdcbmltcG9ydCB7IENVUlJFTlRfVVNFUiB9IGZyb20gJy4uL2N1cnJlbnRfdXNlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlTGlzdCAoeyByZWNpcGVzLCBmYXZvcml0ZXMsIGN1cnJlbnRTZWxlY3Rpb24gfSkge1xuICAgIGNvbnN0IGN1cnJlbnRfdXNlciA9IENVUlJFTlRfVVNFUlxuXG4gICAgLy9maWx0ZXIgb3V0IHJlY2lwZXMgdGhlIHVzZXIgaGFzIGNyZWF0ZWRcbiAgICBjb25zdCBteUNyZWF0ZWRSZWNpcGVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS5yZWNpcGVfY3JlYXRvcl9pZCA9PT0gY3VycmVudF91c2VyKVxuICAgIH1cblxuICAgIC8vZmlsdGVyIG91dCByZWNpcGVzIHRoYXQgaSBoYXZlIGxpa2VkXG4gICAgY29uc3QgbXlGYXZvcml0ZVJlY2lwZXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBmYXZvcml0ZXMuZmlsdGVyKGZhdm9yaXRlID0+IGZhdm9yaXRlLnJlY2lwZV9saWtlcl9pZCA9PT0gY3VycmVudF91c2VyKVxuICAgIH1cblxuICAgIC8vbWFwIHJlY2lwZV9pZHMgaSBoYXZlIGxpa2VkXG4gICAgY29uc3QgbWFwRmF2b3JpdGVSZWNpcGVJZHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBteUZhdm9yaXRlUmVjaXBlcygpLm1hcChmYXZvcml0ZSA9PiBmYXZvcml0ZS5yZWNpcGVfaWQpXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gY3VycmVudFNlbGVjdGlvbi5zdGF0ZVxuICAgIC8vcmVuZGVyIGNvbmRpdGlvbnMgYmFzZWQgb24gc2VsZWN0aW9uXG4gICAgY29uc3QgcmVjaXBlQ2FyZCA9ICgpID0+IHtcbiAgICAgICAgaWYoc2VsZWN0aW9uID09PSAnY3JlYXRlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBteUNyZWF0ZWRSZWNpcGVzKCkubWFwKHJlY2lwZSA9PiBcbiAgICAgICAgICAgICAgICA8UmVjaXBlSXRlbSBrZXk9e3JlY2lwZS5pZH0gcmVjaXBlcz17cmVjaXBlfSAvPilcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3Rpb24gPT09ICdhbGwnIHx8IHNlbGVjdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjaXBlcy5tYXAocmVjaXBlID0+IFxuICAgICAgICAgICAgICAgIDxSZWNpcGVJdGVtIGtleT17cmVjaXBlLmlkfSByZWNpcGVzPXtyZWNpcGV9IC8+KVxuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGlvbiA9PT0gJ3NhdmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlY2lwZXMubWFwKHJlY2lwZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYobWFwRmF2b3JpdGVSZWNpcGVJZHMoKS5pbmNsdWRlcyhyZWNpcGUuaWQpKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxSZWNpcGVJdGVtIGtleT17cmVjaXBlLmlkfSByZWNpcGVzPXtyZWNpcGV9IC8+XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKG1hcEZhdm9yaXRlUmVjaXBlSWRzKCkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICBTZWFyY2ggQmFyIVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzXCI+XG4gICAgICAgICAgICB7cmVjaXBlQ2FyZCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/RecipeList.js\n");

/***/ })

})