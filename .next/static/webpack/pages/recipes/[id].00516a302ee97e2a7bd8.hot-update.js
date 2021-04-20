webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/Components/AddToFavorites.js":
/*!******************************************!*\
  !*** ./src/Components/AddToFavorites.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n/* harmony import */ var _RecipeContext_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../RecipeContext/state */ \"./src/RecipeContext/state.js\");\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/AddToFavorites.js\",\n    _s = $RefreshSig$();\n\n\n\nconst current_user = _current_user__WEBPACK_IMPORTED_MODULE_1__[\"CURRENT_USER\"];\n\nconst AddToFavorites = ({\n  recipe\n}) => {\n  _s();\n\n  const {\n    favorites,\n    setFavorites\n  } = Object(_RecipeContext_state__WEBPACK_IMPORTED_MODULE_2__[\"useRecipeContext\"])();\n\n  const addFavorite = async () => {\n    console.log(\"add favorite!\");\n    const favObj = {\n      recipe_id: recipe.id,\n      recipe_img: recipe.img_url,\n      favorited: true,\n      recipe_liker_id: current_user,\n      recipe_name: recipe.title\n    };\n    const configObj = {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      },\n      body: JSON.stringify(favObj)\n    };\n    const res = await fetch('http://localhost:3000/favorite_recipes', configObj);\n    const data = await res.json();\n    const updatedFavorites = favorites.filter(favorite => favorite.id !== data.id);\n    setFavorites(updatedFavorites);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    onClick: addFavorite,\n    children: \"Add To Favorites\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(AddToFavorites, \"aAww2FjdVfyk3ifWMgQA/YGuKRU=\", false, function () {\n  return [_RecipeContext_state__WEBPACK_IMPORTED_MODULE_2__[\"useRecipeContext\"]];\n});\n\n_c = AddToFavorites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddToFavorites);\n\nvar _c;\n\n$RefreshReg$(_c, \"AddToFavorites\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvQWRkVG9GYXZvcml0ZXMuanM/OWNmZiJdLCJuYW1lcyI6WyJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJBZGRUb0Zhdm9yaXRlcyIsInJlY2lwZSIsImZhdm9yaXRlcyIsInNldEZhdm9yaXRlcyIsInVzZVJlY2lwZUNvbnRleHQiLCJhZGRGYXZvcml0ZSIsImNvbnNvbGUiLCJsb2ciLCJmYXZPYmoiLCJyZWNpcGVfaWQiLCJpZCIsInJlY2lwZV9pbWciLCJpbWdfdXJsIiwiZmF2b3JpdGVkIiwicmVjaXBlX2xpa2VyX2lkIiwicmVjaXBlX25hbWUiLCJ0aXRsZSIsImNvbmZpZ09iaiIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJ1cGRhdGVkRmF2b3JpdGVzIiwiZmlsdGVyIiwiZmF2b3JpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsWUFBWSxHQUFHQywwREFBckI7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWM7QUFBQTs7QUFFakMsUUFBTTtBQUFDQyxhQUFEO0FBQVlDO0FBQVosTUFBNEJDLDZFQUFnQixFQUFsRDs7QUFFQSxRQUFNQyxXQUFXLEdBQUcsWUFBWTtBQUM1QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBLFVBQU1DLE1BQU0sR0FBRztBQUNYQyxlQUFTLEVBQUVSLE1BQU0sQ0FBQ1MsRUFEUDtBQUVYQyxnQkFBVSxFQUFFVixNQUFNLENBQUNXLE9BRlI7QUFHWEMsZUFBUyxFQUFFLElBSEE7QUFJWEMscUJBQWUsRUFBRWhCLFlBSk47QUFLWGlCLGlCQUFXLEVBQUVkLE1BQU0sQ0FBQ2U7QUFMVCxLQUFmO0FBUUEsVUFBTUMsU0FBUyxHQUFHO0FBQ2RDLFlBQU0sRUFBRSxNQURNO0FBRWRDLGFBQU8sRUFBRTtBQUNMLHdCQUFnQixrQkFEWDtBQUVMLGtCQUFVO0FBRkwsT0FGSztBQU1kQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlZCxNQUFmO0FBTlEsS0FBbEI7QUFTQSxVQUFNZSxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLHdDQUFELEVBQTJDUCxTQUEzQyxDQUF2QjtBQUNBLFVBQU1RLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUosRUFBbkI7QUFDQSxVQUFNQyxnQkFBZ0IsR0FBR3pCLFNBQVMsQ0FBQzBCLE1BQVYsQ0FBaUJDLFFBQVEsSUFBSUEsUUFBUSxDQUFDbkIsRUFBVCxLQUFnQmUsSUFBSSxDQUFDZixFQUFsRCxDQUF6QjtBQUNBUCxnQkFBWSxDQUFDd0IsZ0JBQUQsQ0FBWjtBQUVILEdBeEJEOztBQTBCQSxzQkFDSTtBQUFRLFdBQU8sRUFBRXRCLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFHSCxDQWpDRDs7R0FBTUwsYztVQUVnQ0kscUU7OztLQUZoQ0osYztBQWtDU0EsNkVBQWYiLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9BZGRUb0Zhdm9yaXRlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENVUlJFTlRfVVNFUiB9IGZyb20gJy4uL2N1cnJlbnRfdXNlcidcbmltcG9ydCB7IHVzZVJlY2lwZUNvbnRleHQgfSBmcm9tICcuLi9SZWNpcGVDb250ZXh0L3N0YXRlJ1xuXG5jb25zdCBjdXJyZW50X3VzZXIgPSBDVVJSRU5UX1VTRVJcblxuY29uc3QgQWRkVG9GYXZvcml0ZXMgPSAoe3JlY2lwZX0pID0+IHtcblxuICAgIGNvbnN0IHtmYXZvcml0ZXMsIHNldEZhdm9yaXRlc30gPSB1c2VSZWNpcGVDb250ZXh0KCk7XG4gICAgXG4gICAgY29uc3QgYWRkRmF2b3JpdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkIGZhdm9yaXRlIVwiKVxuICAgICAgICBjb25zdCBmYXZPYmogPSB7XG4gICAgICAgICAgICByZWNpcGVfaWQ6IHJlY2lwZS5pZCxcbiAgICAgICAgICAgIHJlY2lwZV9pbWc6IHJlY2lwZS5pbWdfdXJsLFxuICAgICAgICAgICAgZmF2b3JpdGVkOiB0cnVlLFxuICAgICAgICAgICAgcmVjaXBlX2xpa2VyX2lkOiBjdXJyZW50X3VzZXIsXG4gICAgICAgICAgICByZWNpcGVfbmFtZTogcmVjaXBlLnRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb25maWdPYmogPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZmF2T2JqKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2Zhdm9yaXRlX3JlY2lwZXMnLCBjb25maWdPYmopXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBjb25zdCB1cGRhdGVkRmF2b3JpdGVzID0gZmF2b3JpdGVzLmZpbHRlcihmYXZvcml0ZSA9PiBmYXZvcml0ZS5pZCAhPT0gZGF0YS5pZClcbiAgICAgICAgc2V0RmF2b3JpdGVzKHVwZGF0ZWRGYXZvcml0ZXMpXG5cbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxidXR0b24gb25DbGljaz17YWRkRmF2b3JpdGV9PkFkZCBUbyBGYXZvcml0ZXM8L2J1dHRvbj5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBBZGRUb0Zhdm9yaXRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/AddToFavorites.js\n");

/***/ })

})