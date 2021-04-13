webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/Components/AddToFavorites.js":
/*!******************************************!*\
  !*** ./src/Components/AddToFavorites.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/AddToFavorites.js\";\n\nconst current_user = _current_user__WEBPACK_IMPORTED_MODULE_1__[\"CURRENT_USER\"];\n\nconst AddToFavorites = ({\n  recipe\n}) => {\n  const addFavorite = async () => {\n    console.log(\"add favorite!\");\n    const favObj = {\n      recipe_id: recipe.id,\n      recipe_img: recipe.img_url,\n      favorited: true,\n      recipe_liker_id: current_user,\n      recipe_name: recipe.title\n    };\n    const configObj = {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      },\n      body: JSON.stringify(favObj)\n    };\n    const res = await fetch('http://localhost:3000/favorite_recipes');\n    const data = await res.json();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    onClick: addFavorite,\n    children: \"Add To Favorites\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 9\n  }, undefined);\n};\n\n_c = AddToFavorites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddToFavorites);\n\nvar _c;\n\n$RefreshReg$(_c, \"AddToFavorites\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvQWRkVG9GYXZvcml0ZXMuanM/OWNmZiJdLCJuYW1lcyI6WyJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJBZGRUb0Zhdm9yaXRlcyIsInJlY2lwZSIsImFkZEZhdm9yaXRlIiwiY29uc29sZSIsImxvZyIsImZhdk9iaiIsInJlY2lwZV9pZCIsImlkIiwicmVjaXBlX2ltZyIsImltZ191cmwiLCJmYXZvcml0ZWQiLCJyZWNpcGVfbGlrZXJfaWQiLCJyZWNpcGVfbmFtZSIsInRpdGxlIiwiY29uZmlnT2JqIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQSxNQUFNQSxZQUFZLEdBQUdDLDBEQUFyQjs7QUFHQSxNQUFNQyxjQUFjLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBYztBQUVqQyxRQUFNQyxXQUFXLEdBQUcsWUFBWTtBQUM1QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBLFVBQU1DLE1BQU0sR0FBRztBQUNYQyxlQUFTLEVBQUVMLE1BQU0sQ0FBQ00sRUFEUDtBQUVYQyxnQkFBVSxFQUFFUCxNQUFNLENBQUNRLE9BRlI7QUFHWEMsZUFBUyxFQUFFLElBSEE7QUFJWEMscUJBQWUsRUFBRWIsWUFKTjtBQUtYYyxpQkFBVyxFQUFFWCxNQUFNLENBQUNZO0FBTFQsS0FBZjtBQVNBLFVBQU1DLFNBQVMsR0FBRztBQUNkQyxZQUFNLEVBQUUsTUFETTtBQUVkQyxhQUFPLEVBQUU7QUFDTCx3QkFBZ0Isa0JBRFg7QUFFTCxrQkFBVTtBQUZMLE9BRks7QUFNZEMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsTUFBZjtBQU5RLEtBQWxCO0FBUUEsVUFBTWUsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyx3Q0FBRCxDQUF2QjtBQUNBLFVBQU1DLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUosRUFBbkI7QUFFSCxHQXRCRDs7QUF3QkEsc0JBQ0k7QUFBUSxXQUFPLEVBQUVyQixXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBR0gsQ0E3QkQ7O0tBQU1GLGM7QUE4QlNBLDZFQUFmIiwiZmlsZSI6Ii4vc3JjL0NvbXBvbmVudHMvQWRkVG9GYXZvcml0ZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDVVJSRU5UX1VTRVIgfSBmcm9tICcuLi9jdXJyZW50X3VzZXInXG5jb25zdCBjdXJyZW50X3VzZXIgPSBDVVJSRU5UX1VTRVJcblxuXG5jb25zdCBBZGRUb0Zhdm9yaXRlcyA9ICh7cmVjaXBlfSkgPT4ge1xuXG4gICAgY29uc3QgYWRkRmF2b3JpdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkIGZhdm9yaXRlIVwiKVxuICAgICAgICBjb25zdCBmYXZPYmogPSB7XG4gICAgICAgICAgICByZWNpcGVfaWQ6IHJlY2lwZS5pZCxcbiAgICAgICAgICAgIHJlY2lwZV9pbWc6IHJlY2lwZS5pbWdfdXJsLFxuICAgICAgICAgICAgZmF2b3JpdGVkOiB0cnVlLFxuICAgICAgICAgICAgcmVjaXBlX2xpa2VyX2lkOiBjdXJyZW50X3VzZXIsXG4gICAgICAgICAgICByZWNpcGVfbmFtZTogcmVjaXBlLnRpdGxlXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbmZpZ09iaiA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmYXZPYmopXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9mYXZvcml0ZV9yZWNpcGVzJylcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRGYXZvcml0ZX0+QWRkIFRvIEZhdm9yaXRlczwvYnV0dG9uPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IEFkZFRvRmF2b3JpdGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/AddToFavorites.js\n");

/***/ })

})