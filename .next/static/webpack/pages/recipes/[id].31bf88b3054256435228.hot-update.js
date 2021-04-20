webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/Components/AddToFavorites.js":
/*!******************************************!*\
  !*** ./src/Components/AddToFavorites.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n/* harmony import */ var _RecipeContext_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../RecipeContext/state */ \"./src/RecipeContext/state.js\");\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/AddToFavorites.js\",\n    _s = $RefreshSig$();\n\n\n\nconst current_user = _current_user__WEBPACK_IMPORTED_MODULE_1__[\"CURRENT_USER\"];\n\nconst AddToFavorites = ({\n  recipe\n}) => {\n  _s();\n\n  const {\n    favorites,\n    setFavorites\n  } = Object(_RecipeContext_state__WEBPACK_IMPORTED_MODULE_2__[\"useRecipeContext\"])();\n\n  const addFavorite = async () => {\n    console.log(\"add favorite!\");\n    const favObj = {\n      recipe_id: recipe.id,\n      recipe_img: recipe.img_url,\n      favorited: true,\n      recipe_liker_id: current_user,\n      recipe_name: recipe.title\n    };\n    const configObj = {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      },\n      body: JSON.stringify(favObj)\n    };\n    const res = await fetch('http://localhost:3000/favorite_recipes', configObj);\n    const data = await res.json();\n    const updatedFavorites = [...favorites, data];\n    setFavorites(updatedFavorites);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    onClick: addFavorite,\n    children: \"Add To Favorites\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(AddToFavorites, \"aAww2FjdVfyk3ifWMgQA/YGuKRU=\", false, function () {\n  return [_RecipeContext_state__WEBPACK_IMPORTED_MODULE_2__[\"useRecipeContext\"]];\n});\n\n_c = AddToFavorites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddToFavorites);\n\nvar _c;\n\n$RefreshReg$(_c, \"AddToFavorites\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvQWRkVG9GYXZvcml0ZXMuanM/OWNmZiJdLCJuYW1lcyI6WyJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJBZGRUb0Zhdm9yaXRlcyIsInJlY2lwZSIsImZhdm9yaXRlcyIsInNldEZhdm9yaXRlcyIsInVzZVJlY2lwZUNvbnRleHQiLCJhZGRGYXZvcml0ZSIsImNvbnNvbGUiLCJsb2ciLCJmYXZPYmoiLCJyZWNpcGVfaWQiLCJpZCIsInJlY2lwZV9pbWciLCJpbWdfdXJsIiwiZmF2b3JpdGVkIiwicmVjaXBlX2xpa2VyX2lkIiwicmVjaXBlX25hbWUiLCJ0aXRsZSIsImNvbmZpZ09iaiIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJ1cGRhdGVkRmF2b3JpdGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLFlBQVksR0FBR0MsMERBQXJCOztBQUVBLE1BQU1DLGNBQWMsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFjO0FBQUE7O0FBRWpDLFFBQU07QUFBQ0MsYUFBRDtBQUFZQztBQUFaLE1BQTRCQyw2RUFBZ0IsRUFBbEQ7O0FBRUEsUUFBTUMsV0FBVyxHQUFHLFlBQVk7QUFDNUJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQSxVQUFNQyxNQUFNLEdBQUc7QUFDWEMsZUFBUyxFQUFFUixNQUFNLENBQUNTLEVBRFA7QUFFWEMsZ0JBQVUsRUFBRVYsTUFBTSxDQUFDVyxPQUZSO0FBR1hDLGVBQVMsRUFBRSxJQUhBO0FBSVhDLHFCQUFlLEVBQUVoQixZQUpOO0FBS1hpQixpQkFBVyxFQUFFZCxNQUFNLENBQUNlO0FBTFQsS0FBZjtBQVFBLFVBQU1DLFNBQVMsR0FBRztBQUNkQyxZQUFNLEVBQUUsTUFETTtBQUVkQyxhQUFPLEVBQUU7QUFDTCx3QkFBZ0Isa0JBRFg7QUFFTCxrQkFBVTtBQUZMLE9BRks7QUFNZEMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsTUFBZjtBQU5RLEtBQWxCO0FBU0EsVUFBTWUsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyx3Q0FBRCxFQUEyQ1AsU0FBM0MsQ0FBdkI7QUFDQSxVQUFNUSxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFKLEVBQW5CO0FBQ0EsVUFBTUMsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHekIsU0FBSixFQUFldUIsSUFBZixDQUF6QjtBQUNBdEIsZ0JBQVksQ0FBQ3dCLGdCQUFELENBQVo7QUFDSCxHQXZCRDs7QUF5QkEsc0JBQ0k7QUFBUSxXQUFPLEVBQUV0QixXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBR0gsQ0FoQ0Q7O0dBQU1MLGM7VUFFZ0NJLHFFOzs7S0FGaENKLGM7QUFpQ1NBLDZFQUFmIiwiZmlsZSI6Ii4vc3JjL0NvbXBvbmVudHMvQWRkVG9GYXZvcml0ZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDVVJSRU5UX1VTRVIgfSBmcm9tICcuLi9jdXJyZW50X3VzZXInXG5pbXBvcnQgeyB1c2VSZWNpcGVDb250ZXh0IH0gZnJvbSAnLi4vUmVjaXBlQ29udGV4dC9zdGF0ZSdcblxuY29uc3QgY3VycmVudF91c2VyID0gQ1VSUkVOVF9VU0VSXG5cbmNvbnN0IEFkZFRvRmF2b3JpdGVzID0gKHtyZWNpcGV9KSA9PiB7XG5cbiAgICBjb25zdCB7ZmF2b3JpdGVzLCBzZXRGYXZvcml0ZXN9ID0gdXNlUmVjaXBlQ29udGV4dCgpO1xuXG4gICAgY29uc3QgYWRkRmF2b3JpdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkIGZhdm9yaXRlIVwiKVxuICAgICAgICBjb25zdCBmYXZPYmogPSB7XG4gICAgICAgICAgICByZWNpcGVfaWQ6IHJlY2lwZS5pZCxcbiAgICAgICAgICAgIHJlY2lwZV9pbWc6IHJlY2lwZS5pbWdfdXJsLFxuICAgICAgICAgICAgZmF2b3JpdGVkOiB0cnVlLFxuICAgICAgICAgICAgcmVjaXBlX2xpa2VyX2lkOiBjdXJyZW50X3VzZXIsXG4gICAgICAgICAgICByZWNpcGVfbmFtZTogcmVjaXBlLnRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb25maWdPYmogPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZmF2T2JqKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2Zhdm9yaXRlX3JlY2lwZXMnLCBjb25maWdPYmopXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBjb25zdCB1cGRhdGVkRmF2b3JpdGVzID0gWy4uLmZhdm9yaXRlcywgZGF0YV1cbiAgICAgICAgc2V0RmF2b3JpdGVzKHVwZGF0ZWRGYXZvcml0ZXMpXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZEZhdm9yaXRlfT5BZGQgVG8gRmF2b3JpdGVzPC9idXR0b24+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQWRkVG9GYXZvcml0ZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/AddToFavorites.js\n");

/***/ })

})