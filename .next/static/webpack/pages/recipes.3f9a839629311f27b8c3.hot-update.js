webpackHotUpdate_N_E("pages/recipes",{

/***/ "./src/Components/RecipeList.js":
/*!**************************************!*\
  !*** ./src/Components/RecipeList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RecipeList; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _RecipeItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecipeItem */ \"./src/Components/RecipeItem.js\");\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/RecipeList.js\";\n\n\nfunction RecipeList({\n  recipes,\n  favorites,\n  selection\n}) {\n  const saved_by = favorites.recipe_liker_id;\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_2__[\"CURRENT_USER\"];\n\n  const myCreatedRecipes = () => {\n    return recipes.filter(recipe => recipe.recipe_creator_id === current_user);\n  };\n\n  const myFavoriteRecipes = () => {\n    return favorites.filter(favorite => favorite.recipe_liker_id === current_user);\n  };\n\n  const mapFavoriteRecipeIds = () => {\n    return myFavoriteRecipes().map(favorite => favorite.recipe_id);\n  };\n\n  const recipeCard = () => {\n    if (selection.selection === 'created') {\n      return myCreatedRecipes().map(recipe => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RecipeItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        selection: selection,\n        favorites: myFavoriteRecipes(),\n        recipes: recipe\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, this));\n    } else if (selection.selection === 'all' || selection.selection === undefined) {\n      return recipes.map(recipe => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RecipeItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        selection: selection,\n        favorites: mapFavoriteRecipeIds(),\n        recipes: recipe\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, this));\n    } else if (selection.selection === 'saved') {\n      return recipes.map(recipe => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RecipeItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        selection: selection,\n        favorites: mapFavoriteRecipeIds(),\n        recipes: recipe\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, this)); //pick up here!\n      // <RecipeItem key={favorite.id} favorites={favorite} recipes={favorite} />)\n    }\n  }; // debugger\n\n\n  console.log(mapFavoriteRecipeIds());\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: recipeCard()\n  }, void 0, false);\n}\n/*\n//parse recipe cards\nconst recipeCard = () => {\n    // if (myRecipes === true) {\n    //     return myCreatedRecipes().map(recipe => \n    //         <RecipeItem key={recipe.id} favorites={favorites} recipes={recipe} />)\n    // } else if (myRecipes !== true) {\n        return recipes.map(recipe => \n            <RecipeItem key={recipe.id} favorites={favorites} recipes={recipe} />)\n    // }\n}\n*/\n\n_c = RecipeList;\n\nvar _c;\n\n$RefreshReg$(_c, \"RecipeList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUmVjaXBlTGlzdC5qcz82M2Y5Il0sIm5hbWVzIjpbIlJlY2lwZUxpc3QiLCJyZWNpcGVzIiwiZmF2b3JpdGVzIiwic2VsZWN0aW9uIiwic2F2ZWRfYnkiLCJyZWNpcGVfbGlrZXJfaWQiLCJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJteUNyZWF0ZWRSZWNpcGVzIiwiZmlsdGVyIiwicmVjaXBlIiwicmVjaXBlX2NyZWF0b3JfaWQiLCJteUZhdm9yaXRlUmVjaXBlcyIsImZhdm9yaXRlIiwibWFwRmF2b3JpdGVSZWNpcGVJZHMiLCJtYXAiLCJyZWNpcGVfaWQiLCJyZWNpcGVDYXJkIiwiaWQiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsVUFBVCxDQUFxQjtBQUFFQyxTQUFGO0FBQVdDLFdBQVg7QUFBc0JDO0FBQXRCLENBQXJCLEVBQXdEO0FBQ25FLFFBQU1DLFFBQVEsR0FBR0YsU0FBUyxDQUFDRyxlQUEzQjtBQUNBLFFBQU1DLFlBQVksR0FBR0MsMERBQXJCOztBQUVBLFFBQU1DLGdCQUFnQixHQUFHLE1BQU07QUFDM0IsV0FBT1AsT0FBTyxDQUFDUSxNQUFSLENBQWVDLE1BQU0sSUFBSUEsTUFBTSxDQUFDQyxpQkFBUCxLQUE2QkwsWUFBdEQsQ0FBUDtBQUNILEdBRkQ7O0FBSUEsUUFBTU0saUJBQWlCLEdBQUcsTUFBTTtBQUM1QixXQUFPVixTQUFTLENBQUNPLE1BQVYsQ0FBaUJJLFFBQVEsSUFBSUEsUUFBUSxDQUFDUixlQUFULEtBQTZCQyxZQUExRCxDQUFQO0FBQ0gsR0FGRDs7QUFJQSxRQUFNUSxvQkFBb0IsR0FBRyxNQUFNO0FBQy9CLFdBQU9GLGlCQUFpQixHQUFHRyxHQUFwQixDQUF3QkYsUUFBUSxJQUFJQSxRQUFRLENBQUNHLFNBQTdDLENBQVA7QUFDSCxHQUZEOztBQUlBLFFBQU1DLFVBQVUsR0FBRyxNQUFNO0FBQ3JCLFFBQUdkLFNBQVMsQ0FBQ0EsU0FBVixLQUF3QixTQUEzQixFQUFzQztBQUNsQyxhQUFPSyxnQkFBZ0IsR0FBR08sR0FBbkIsQ0FBdUJMLE1BQU0saUJBQ2hDLHFFQUFDLG1EQUFEO0FBQVksaUJBQVMsRUFBRVAsU0FBdkI7QUFBa0QsaUJBQVMsRUFBRVMsaUJBQWlCLEVBQTlFO0FBQWtGLGVBQU8sRUFBRUY7QUFBM0YsU0FBdUNBLE1BQU0sQ0FBQ1EsRUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURHLENBQVA7QUFFSCxLQUhELE1BR08sSUFBSWYsU0FBUyxDQUFDQSxTQUFWLEtBQXdCLEtBQXhCLElBQWlDQSxTQUFTLENBQUNBLFNBQVYsS0FBd0JnQixTQUE3RCxFQUF3RTtBQUMzRSxhQUFPbEIsT0FBTyxDQUFDYyxHQUFSLENBQVlMLE1BQU0saUJBQ3JCLHFFQUFDLG1EQUFEO0FBQVksaUJBQVMsRUFBRVAsU0FBdkI7QUFBa0QsaUJBQVMsRUFBRVcsb0JBQW9CLEVBQWpGO0FBQXFGLGVBQU8sRUFBRUo7QUFBOUYsU0FBdUNBLE1BQU0sQ0FBQ1EsRUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURHLENBQVA7QUFFSCxLQUhNLE1BR0EsSUFBSWYsU0FBUyxDQUFDQSxTQUFWLEtBQXdCLE9BQTVCLEVBQXFDO0FBQ3hDLGFBQU9GLE9BQU8sQ0FBQ2MsR0FBUixDQUFZTCxNQUFNLGlCQUNyQixxRUFBQyxtREFBRDtBQUFZLGlCQUFTLEVBQUVQLFNBQXZCO0FBQWtELGlCQUFTLEVBQUVXLG9CQUFvQixFQUFqRjtBQUFxRixlQUFPLEVBQUVKO0FBQTlGLFNBQXVDQSxNQUFNLENBQUNRLEVBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERyxDQUFQLENBRHdDLENBR3BDO0FBQ0E7QUFDUDtBQUNKLEdBYkQsQ0FoQm1FLENBK0JuRTs7O0FBQ0FFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxvQkFBb0IsRUFBaEM7QUFFQSxzQkFDSTtBQUFBLGNBQ0tHLFVBQVU7QUFEZixtQkFESjtBQUtIO0FBRUc7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQXBEd0JqQixVIiwiZmlsZSI6Ii4vc3JjL0NvbXBvbmVudHMvUmVjaXBlTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWNpcGVJdGVtIGZyb20gJy4vUmVjaXBlSXRlbSdcbmltcG9ydCB7IENVUlJFTlRfVVNFUiB9IGZyb20gJy4uL2N1cnJlbnRfdXNlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlTGlzdCAoeyByZWNpcGVzLCBmYXZvcml0ZXMsIHNlbGVjdGlvbiB9KSB7XG4gICAgY29uc3Qgc2F2ZWRfYnkgPSBmYXZvcml0ZXMucmVjaXBlX2xpa2VyX2lkXG4gICAgY29uc3QgY3VycmVudF91c2VyID0gQ1VSUkVOVF9VU0VSXG5cbiAgICBjb25zdCBteUNyZWF0ZWRSZWNpcGVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS5yZWNpcGVfY3JlYXRvcl9pZCA9PT0gY3VycmVudF91c2VyKVxuICAgIH1cblxuICAgIGNvbnN0IG15RmF2b3JpdGVSZWNpcGVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZmF2b3JpdGVzLmZpbHRlcihmYXZvcml0ZSA9PiBmYXZvcml0ZS5yZWNpcGVfbGlrZXJfaWQgPT09IGN1cnJlbnRfdXNlcilcbiAgICB9XG5cbiAgICBjb25zdCBtYXBGYXZvcml0ZVJlY2lwZUlkcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG15RmF2b3JpdGVSZWNpcGVzKCkubWFwKGZhdm9yaXRlID0+IGZhdm9yaXRlLnJlY2lwZV9pZClcbiAgICB9XG5cbiAgICBjb25zdCByZWNpcGVDYXJkID0gKCkgPT4ge1xuICAgICAgICBpZihzZWxlY3Rpb24uc2VsZWN0aW9uID09PSAnY3JlYXRlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBteUNyZWF0ZWRSZWNpcGVzKCkubWFwKHJlY2lwZSA9PiBcbiAgICAgICAgICAgICAgICA8UmVjaXBlSXRlbSBzZWxlY3Rpb249e3NlbGVjdGlvbn0ga2V5PXtyZWNpcGUuaWR9IGZhdm9yaXRlcz17bXlGYXZvcml0ZVJlY2lwZXMoKX0gcmVjaXBlcz17cmVjaXBlfSAvPilcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3Rpb24uc2VsZWN0aW9uID09PSAnYWxsJyB8fCBzZWxlY3Rpb24uc2VsZWN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZWNpcGVzLm1hcChyZWNpcGUgPT4gXG4gICAgICAgICAgICAgICAgPFJlY2lwZUl0ZW0gc2VsZWN0aW9uPXtzZWxlY3Rpb259IGtleT17cmVjaXBlLmlkfSBmYXZvcml0ZXM9e21hcEZhdm9yaXRlUmVjaXBlSWRzKCl9IHJlY2lwZXM9e3JlY2lwZX0gLz4pXG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uLnNlbGVjdGlvbiA9PT0gJ3NhdmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlY2lwZXMubWFwKHJlY2lwZSA9PlxuICAgICAgICAgICAgICAgIDxSZWNpcGVJdGVtIHNlbGVjdGlvbj17c2VsZWN0aW9ufSBrZXk9e3JlY2lwZS5pZH0gZmF2b3JpdGVzPXttYXBGYXZvcml0ZVJlY2lwZUlkcygpfSByZWNpcGVzPXtyZWNpcGV9Lz4pIFxuICAgICAgICAgICAgICAgIC8vcGljayB1cCBoZXJlIVxuICAgICAgICAgICAgICAgIC8vIDxSZWNpcGVJdGVtIGtleT17ZmF2b3JpdGUuaWR9IGZhdm9yaXRlcz17ZmF2b3JpdGV9IHJlY2lwZXM9e2Zhdm9yaXRlfSAvPilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRlYnVnZ2VyXG4gICAgY29uc29sZS5sb2cobWFwRmF2b3JpdGVSZWNpcGVJZHMoKSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7cmVjaXBlQ2FyZCgpfVxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbiAgICAvKlxuICAgIC8vcGFyc2UgcmVjaXBlIGNhcmRzXG4gICAgY29uc3QgcmVjaXBlQ2FyZCA9ICgpID0+IHtcbiAgICAgICAgLy8gaWYgKG15UmVjaXBlcyA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyAgICAgcmV0dXJuIG15Q3JlYXRlZFJlY2lwZXMoKS5tYXAocmVjaXBlID0+IFxuICAgICAgICAvLyAgICAgICAgIDxSZWNpcGVJdGVtIGtleT17cmVjaXBlLmlkfSBmYXZvcml0ZXM9e2Zhdm9yaXRlc30gcmVjaXBlcz17cmVjaXBlfSAvPilcbiAgICAgICAgLy8gfSBlbHNlIGlmIChteVJlY2lwZXMgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiByZWNpcGVzLm1hcChyZWNpcGUgPT4gXG4gICAgICAgICAgICAgICAgPFJlY2lwZUl0ZW0ga2V5PXtyZWNpcGUuaWR9IGZhdm9yaXRlcz17ZmF2b3JpdGVzfSByZWNpcGVzPXtyZWNpcGV9IC8+KVxuICAgICAgICAvLyB9XG4gICAgfVxuICAgICovICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/RecipeList.js\n");

/***/ })

})