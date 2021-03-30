webpackHotUpdate_N_E("pages/recipes",{

/***/ "./src/Components/RecipeList.js":
/*!**************************************!*\
  !*** ./src/Components/RecipeList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RecipeList; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _RecipeItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecipeItem */ \"./src/Components/RecipeItem.js\");\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/RecipeList.js\";\n\n\nfunction RecipeList({\n  recipes,\n  favorites,\n  selection\n}) {\n  const saved_by = favorites.recipe_liker_id;\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_2__[\"CURRENT_USER\"];\n\n  const myCreatedRecipes = () => {\n    return recipes.filter(recipe => recipe.recipe_creator_id === current_user);\n  };\n\n  const myFavoriteRecipes = () => {\n    return favorites.filter(favorite => favorite.recipe_liker_id === current_user);\n  };\n\n  const mapFavoriteRecipeIds = () => {\n    return myFavoriteRecipes().map(favorite => favorite.recipe_id);\n  };\n\n  const recipeCard = () => {\n    if (selection.selection === 'created') {\n      return myCreatedRecipes().map(recipe => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RecipeItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        selection: selection,\n        favorites: mapFavoriteRecipeIds(),\n        recipes: recipe\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, this));\n    } else if (selection.selection === 'all' || selection.selection === undefined) {\n      return recipes.map(recipe => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RecipeItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        selection: selection,\n        favorites: mapFavoriteRecipeIds(),\n        recipes: recipe\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, this));\n    } else if (selection.selection === 'saved') {\n      return recipes.map(recipe => {\n        if (mapFavoriteRecipeIds().includes(recipe.id)) {\n          return;\n        }\n      }); // <RecipeItem selection={selection} key={recipe.id} favorites={mapFavoriteRecipeIds()} recipes={recipe}/>) \n    }\n  }; // debugger\n  // console.log(mapFavoriteRecipeIds())\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: recipeCard()\n  }, void 0, false);\n}\n/*\n//parse recipe cards\nconst recipeCard = () => {\n    // if (myRecipes === true) {\n    //     return myCreatedRecipes().map(recipe => \n    //         <RecipeItem key={recipe.id} favorites={favorites} recipes={recipe} />)\n    // } else if (myRecipes !== true) {\n        return recipes.map(recipe => \n            <RecipeItem key={recipe.id} favorites={favorites} recipes={recipe} />)\n    // }\n}\n*/\n\n_c = RecipeList;\n\nvar _c;\n\n$RefreshReg$(_c, \"RecipeList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUmVjaXBlTGlzdC5qcz82M2Y5Il0sIm5hbWVzIjpbIlJlY2lwZUxpc3QiLCJyZWNpcGVzIiwiZmF2b3JpdGVzIiwic2VsZWN0aW9uIiwic2F2ZWRfYnkiLCJyZWNpcGVfbGlrZXJfaWQiLCJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJteUNyZWF0ZWRSZWNpcGVzIiwiZmlsdGVyIiwicmVjaXBlIiwicmVjaXBlX2NyZWF0b3JfaWQiLCJteUZhdm9yaXRlUmVjaXBlcyIsImZhdm9yaXRlIiwibWFwRmF2b3JpdGVSZWNpcGVJZHMiLCJtYXAiLCJyZWNpcGVfaWQiLCJyZWNpcGVDYXJkIiwiaWQiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFVBQVQsQ0FBcUI7QUFBRUMsU0FBRjtBQUFXQyxXQUFYO0FBQXNCQztBQUF0QixDQUFyQixFQUF3RDtBQUNuRSxRQUFNQyxRQUFRLEdBQUdGLFNBQVMsQ0FBQ0csZUFBM0I7QUFDQSxRQUFNQyxZQUFZLEdBQUdDLDBEQUFyQjs7QUFFQSxRQUFNQyxnQkFBZ0IsR0FBRyxNQUFNO0FBQzNCLFdBQU9QLE9BQU8sQ0FBQ1EsTUFBUixDQUFlQyxNQUFNLElBQUlBLE1BQU0sQ0FBQ0MsaUJBQVAsS0FBNkJMLFlBQXRELENBQVA7QUFDSCxHQUZEOztBQUlBLFFBQU1NLGlCQUFpQixHQUFHLE1BQU07QUFDNUIsV0FBT1YsU0FBUyxDQUFDTyxNQUFWLENBQWlCSSxRQUFRLElBQUlBLFFBQVEsQ0FBQ1IsZUFBVCxLQUE2QkMsWUFBMUQsQ0FBUDtBQUNILEdBRkQ7O0FBSUEsUUFBTVEsb0JBQW9CLEdBQUcsTUFBTTtBQUMvQixXQUFPRixpQkFBaUIsR0FBR0csR0FBcEIsQ0FBd0JGLFFBQVEsSUFBSUEsUUFBUSxDQUFDRyxTQUE3QyxDQUFQO0FBQ0gsR0FGRDs7QUFJQSxRQUFNQyxVQUFVLEdBQUcsTUFBTTtBQUNyQixRQUFHZCxTQUFTLENBQUNBLFNBQVYsS0FBd0IsU0FBM0IsRUFBc0M7QUFDbEMsYUFBT0ssZ0JBQWdCLEdBQUdPLEdBQW5CLENBQXVCTCxNQUFNLGlCQUNoQyxxRUFBQyxtREFBRDtBQUFZLGlCQUFTLEVBQUVQLFNBQXZCO0FBQWtELGlCQUFTLEVBQUVXLG9CQUFvQixFQUFqRjtBQUFxRixlQUFPLEVBQUVKO0FBQTlGLFNBQXVDQSxNQUFNLENBQUNRLEVBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERyxDQUFQO0FBRUgsS0FIRCxNQUdPLElBQUlmLFNBQVMsQ0FBQ0EsU0FBVixLQUF3QixLQUF4QixJQUFpQ0EsU0FBUyxDQUFDQSxTQUFWLEtBQXdCZ0IsU0FBN0QsRUFBd0U7QUFDM0UsYUFBT2xCLE9BQU8sQ0FBQ2MsR0FBUixDQUFZTCxNQUFNLGlCQUNyQixxRUFBQyxtREFBRDtBQUFZLGlCQUFTLEVBQUVQLFNBQXZCO0FBQWtELGlCQUFTLEVBQUVXLG9CQUFvQixFQUFqRjtBQUFxRixlQUFPLEVBQUVKO0FBQTlGLFNBQXVDQSxNQUFNLENBQUNRLEVBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERyxDQUFQO0FBRUgsS0FITSxNQUdBLElBQUlmLFNBQVMsQ0FBQ0EsU0FBVixLQUF3QixPQUE1QixFQUFxQztBQUN4QyxhQUFPRixPQUFPLENBQUNjLEdBQVIsQ0FBWUwsTUFBTSxJQUFJO0FBQ3pCLFlBQUdJLG9CQUFvQixHQUFHTSxRQUF2QixDQUFnQ1YsTUFBTSxDQUFDUSxFQUF2QyxDQUFILEVBQThDO0FBQzFDO0FBQ0g7QUFDSixPQUpNLENBQVAsQ0FEd0MsQ0FNcEM7QUFDUDtBQUNKLEdBZkQsQ0FoQm1FLENBaUNuRTtBQUNBOzs7QUFFQSxzQkFDSTtBQUFBLGNBQ0tELFVBQVU7QUFEZixtQkFESjtBQUtIO0FBRUc7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQXREd0JqQixVIiwiZmlsZSI6Ii4vc3JjL0NvbXBvbmVudHMvUmVjaXBlTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWNpcGVJdGVtIGZyb20gJy4vUmVjaXBlSXRlbSdcbmltcG9ydCB7IENVUlJFTlRfVVNFUiB9IGZyb20gJy4uL2N1cnJlbnRfdXNlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlTGlzdCAoeyByZWNpcGVzLCBmYXZvcml0ZXMsIHNlbGVjdGlvbiB9KSB7XG4gICAgY29uc3Qgc2F2ZWRfYnkgPSBmYXZvcml0ZXMucmVjaXBlX2xpa2VyX2lkXG4gICAgY29uc3QgY3VycmVudF91c2VyID0gQ1VSUkVOVF9VU0VSXG5cbiAgICBjb25zdCBteUNyZWF0ZWRSZWNpcGVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS5yZWNpcGVfY3JlYXRvcl9pZCA9PT0gY3VycmVudF91c2VyKVxuICAgIH1cblxuICAgIGNvbnN0IG15RmF2b3JpdGVSZWNpcGVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZmF2b3JpdGVzLmZpbHRlcihmYXZvcml0ZSA9PiBmYXZvcml0ZS5yZWNpcGVfbGlrZXJfaWQgPT09IGN1cnJlbnRfdXNlcilcbiAgICB9XG5cbiAgICBjb25zdCBtYXBGYXZvcml0ZVJlY2lwZUlkcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG15RmF2b3JpdGVSZWNpcGVzKCkubWFwKGZhdm9yaXRlID0+IGZhdm9yaXRlLnJlY2lwZV9pZClcbiAgICB9XG5cbiAgICBjb25zdCByZWNpcGVDYXJkID0gKCkgPT4ge1xuICAgICAgICBpZihzZWxlY3Rpb24uc2VsZWN0aW9uID09PSAnY3JlYXRlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBteUNyZWF0ZWRSZWNpcGVzKCkubWFwKHJlY2lwZSA9PiBcbiAgICAgICAgICAgICAgICA8UmVjaXBlSXRlbSBzZWxlY3Rpb249e3NlbGVjdGlvbn0ga2V5PXtyZWNpcGUuaWR9IGZhdm9yaXRlcz17bWFwRmF2b3JpdGVSZWNpcGVJZHMoKX0gcmVjaXBlcz17cmVjaXBlfSAvPilcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3Rpb24uc2VsZWN0aW9uID09PSAnYWxsJyB8fCBzZWxlY3Rpb24uc2VsZWN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZWNpcGVzLm1hcChyZWNpcGUgPT4gXG4gICAgICAgICAgICAgICAgPFJlY2lwZUl0ZW0gc2VsZWN0aW9uPXtzZWxlY3Rpb259IGtleT17cmVjaXBlLmlkfSBmYXZvcml0ZXM9e21hcEZhdm9yaXRlUmVjaXBlSWRzKCl9IHJlY2lwZXM9e3JlY2lwZX0gLz4pXG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uLnNlbGVjdGlvbiA9PT0gJ3NhdmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlY2lwZXMubWFwKHJlY2lwZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYobWFwRmF2b3JpdGVSZWNpcGVJZHMoKS5pbmNsdWRlcyhyZWNpcGUuaWQpKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gPFJlY2lwZUl0ZW0gc2VsZWN0aW9uPXtzZWxlY3Rpb259IGtleT17cmVjaXBlLmlkfSBmYXZvcml0ZXM9e21hcEZhdm9yaXRlUmVjaXBlSWRzKCl9IHJlY2lwZXM9e3JlY2lwZX0vPikgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkZWJ1Z2dlclxuICAgIC8vIGNvbnNvbGUubG9nKG1hcEZhdm9yaXRlUmVjaXBlSWRzKCkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge3JlY2lwZUNhcmQoKX1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG4gICAgLypcbiAgICAvL3BhcnNlIHJlY2lwZSBjYXJkc1xuICAgIGNvbnN0IHJlY2lwZUNhcmQgPSAoKSA9PiB7XG4gICAgICAgIC8vIGlmIChteVJlY2lwZXMgPT09IHRydWUpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiBteUNyZWF0ZWRSZWNpcGVzKCkubWFwKHJlY2lwZSA9PiBcbiAgICAgICAgLy8gICAgICAgICA8UmVjaXBlSXRlbSBrZXk9e3JlY2lwZS5pZH0gZmF2b3JpdGVzPXtmYXZvcml0ZXN9IHJlY2lwZXM9e3JlY2lwZX0gLz4pXG4gICAgICAgIC8vIH0gZWxzZSBpZiAobXlSZWNpcGVzICE9PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjaXBlcy5tYXAocmVjaXBlID0+IFxuICAgICAgICAgICAgICAgIDxSZWNpcGVJdGVtIGtleT17cmVjaXBlLmlkfSBmYXZvcml0ZXM9e2Zhdm9yaXRlc30gcmVjaXBlcz17cmVjaXBlfSAvPilcbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICAqLyAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/RecipeList.js\n");

/***/ })

})