webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/Components/AddToFavorites.js":
/*!******************************************!*\
  !*** ./src/Components/AddToFavorites.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n/* harmony import */ var _RecipeContext_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../RecipeContext/state */ \"./src/RecipeContext/state.js\");\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/AddToFavorites.js\";\n\n\nconst current_user = _current_user__WEBPACK_IMPORTED_MODULE_1__[\"CURRENT_USER\"];\n\nconst AddToFavorites = ({\n  recipe\n}) => {\n  const addFavorite = async () => {\n    console.log(\"add favorite!\");\n    const favObj = {\n      recipe_id: recipe.id,\n      recipe_img: recipe.img_url,\n      favorited: true,\n      recipe_liker_id: current_user,\n      recipe_name: recipe.title\n    };\n    const configObj = {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      },\n      body: JSON.stringify(favObj)\n    };\n    const res = await fetch('http://localhost:3000/favorite_recipes', configObj);\n    const data = await res.json();\n    const updatedFavorites = favorites.filter(favorite => favorite.id !== data.id);\n    setFavorites(updatedFavorites);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    onClick: addFavorite,\n    children: \"Add To Favorites\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, undefined);\n};\n\n_c = AddToFavorites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddToFavorites);\n\nvar _c;\n\n$RefreshReg$(_c, \"AddToFavorites\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvQWRkVG9GYXZvcml0ZXMuanM/OWNmZiJdLCJuYW1lcyI6WyJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJBZGRUb0Zhdm9yaXRlcyIsInJlY2lwZSIsImFkZEZhdm9yaXRlIiwiY29uc29sZSIsImxvZyIsImZhdk9iaiIsInJlY2lwZV9pZCIsImlkIiwicmVjaXBlX2ltZyIsImltZ191cmwiLCJmYXZvcml0ZWQiLCJyZWNpcGVfbGlrZXJfaWQiLCJyZWNpcGVfbmFtZSIsInRpdGxlIiwiY29uZmlnT2JqIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInVwZGF0ZWRGYXZvcml0ZXMiLCJmYXZvcml0ZXMiLCJmaWx0ZXIiLCJmYXZvcml0ZSIsInNldEZhdm9yaXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxZQUFZLEdBQUdDLDBEQUFyQjs7QUFHQSxNQUFNQyxjQUFjLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBYztBQUVqQyxRQUFNQyxXQUFXLEdBQUcsWUFBWTtBQUM1QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBLFVBQU1DLE1BQU0sR0FBRztBQUNYQyxlQUFTLEVBQUVMLE1BQU0sQ0FBQ00sRUFEUDtBQUVYQyxnQkFBVSxFQUFFUCxNQUFNLENBQUNRLE9BRlI7QUFHWEMsZUFBUyxFQUFFLElBSEE7QUFJWEMscUJBQWUsRUFBRWIsWUFKTjtBQUtYYyxpQkFBVyxFQUFFWCxNQUFNLENBQUNZO0FBTFQsS0FBZjtBQVFBLFVBQU1DLFNBQVMsR0FBRztBQUNkQyxZQUFNLEVBQUUsTUFETTtBQUVkQyxhQUFPLEVBQUU7QUFDTCx3QkFBZ0Isa0JBRFg7QUFFTCxrQkFBVTtBQUZMLE9BRks7QUFNZEMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsTUFBZjtBQU5RLEtBQWxCO0FBU0EsVUFBTWUsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyx3Q0FBRCxFQUEyQ1AsU0FBM0MsQ0FBdkI7QUFDQSxVQUFNUSxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFKLEVBQW5CO0FBQ0EsVUFBTUMsZ0JBQWdCLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsUUFBUSxJQUFJQSxRQUFRLENBQUNwQixFQUFULEtBQWdCZSxJQUFJLENBQUNmLEVBQWxELENBQXpCO0FBQ0FxQixnQkFBWSxDQUFDSixnQkFBRCxDQUFaO0FBRUgsR0F4QkQ7O0FBMEJBLHNCQUNJO0FBQVEsV0FBTyxFQUFFdEIsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUdILENBL0JEOztLQUFNRixjO0FBZ0NTQSw2RUFBZiIsImZpbGUiOiIuL3NyYy9Db21wb25lbnRzL0FkZFRvRmF2b3JpdGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1VSUkVOVF9VU0VSIH0gZnJvbSAnLi4vY3VycmVudF91c2VyJ1xuaW1wb3J0IHsgdXNlUmVjaXBlQ29udGV4dCB9IGZyb20gJy4uL1JlY2lwZUNvbnRleHQvc3RhdGUnXG5cbmNvbnN0IGN1cnJlbnRfdXNlciA9IENVUlJFTlRfVVNFUlxuXG5cbmNvbnN0IEFkZFRvRmF2b3JpdGVzID0gKHtyZWNpcGV9KSA9PiB7XG5cbiAgICBjb25zdCBhZGRGYXZvcml0ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhZGQgZmF2b3JpdGUhXCIpXG4gICAgICAgIGNvbnN0IGZhdk9iaiA9IHtcbiAgICAgICAgICAgIHJlY2lwZV9pZDogcmVjaXBlLmlkLFxuICAgICAgICAgICAgcmVjaXBlX2ltZzogcmVjaXBlLmltZ191cmwsXG4gICAgICAgICAgICBmYXZvcml0ZWQ6IHRydWUsXG4gICAgICAgICAgICByZWNpcGVfbGlrZXJfaWQ6IGN1cnJlbnRfdXNlcixcbiAgICAgICAgICAgIHJlY2lwZV9uYW1lOiByZWNpcGUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbmZpZ09iaiA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmYXZPYmopXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZmF2b3JpdGVfcmVjaXBlcycsIGNvbmZpZ09iailcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRGYXZvcml0ZXMgPSBmYXZvcml0ZXMuZmlsdGVyKGZhdm9yaXRlID0+IGZhdm9yaXRlLmlkICE9PSBkYXRhLmlkKVxuICAgICAgICBzZXRGYXZvcml0ZXModXBkYXRlZEZhdm9yaXRlcylcblxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRGYXZvcml0ZX0+QWRkIFRvIEZhdm9yaXRlczwvYnV0dG9uPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IEFkZFRvRmF2b3JpdGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/AddToFavorites.js\n");

/***/ })

})