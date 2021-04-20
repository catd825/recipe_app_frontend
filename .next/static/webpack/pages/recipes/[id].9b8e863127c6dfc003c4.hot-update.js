webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/Components/RemoveFromFavorites.js":
/*!***********************************************!*\
  !*** ./src/Components/RemoveFromFavorites.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/RemoveFromFavorites.js\";\n\nconst RemoveFromFavorites = ({\n  recipe,\n  userFavorite\n}) => {\n  const removeFavorite = async () => {\n    console.log('remove from favorites', userFavorite);\n    const configObj = {\n      method: 'DELETE',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      }\n    };\n    const res = await fetch(`http://localhost:3000/favorite_recipes/${userFavorite}`, configObj);\n    const data = await res.json();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    onClick: removeFavorite,\n    children: \"Remove from Favorites\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 9\n  }, undefined);\n};\n\n_c = RemoveFromFavorites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RemoveFromFavorites);\n\nvar _c;\n\n$RefreshReg$(_c, \"RemoveFromFavorites\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUmVtb3ZlRnJvbUZhdm9yaXRlcy5qcz9kN2E2Il0sIm5hbWVzIjpbIlJlbW92ZUZyb21GYXZvcml0ZXMiLCJyZWNpcGUiLCJ1c2VyRmF2b3JpdGUiLCJyZW1vdmVGYXZvcml0ZSIsImNvbnNvbGUiLCJsb2ciLCJjb25maWdPYmoiLCJtZXRob2QiLCJoZWFkZXJzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTUEsbUJBQW1CLEdBQUcsQ0FBQztBQUFFQyxRQUFGO0FBQVVDO0FBQVYsQ0FBRCxLQUE4QjtBQUV0RCxRQUFNQyxjQUFjLEdBQUcsWUFBWTtBQUMvQkMsV0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVosRUFBcUNILFlBQXJDO0FBQ0EsVUFBTUksU0FBUyxHQUFHO0FBQ2RDLFlBQU0sRUFBRSxRQURNO0FBRWRDLGFBQU8sRUFBRTtBQUNMLHdCQUFnQixrQkFEWDtBQUVMLGtCQUFVO0FBRkw7QUFGSyxLQUFsQjtBQU9BLFVBQU1DLEdBQUcsR0FBSSxNQUFNQyxLQUFLLENBQUUsMENBQXlDUixZQUFhLEVBQXhELEVBQTJESSxTQUEzRCxDQUF4QjtBQUNBLFVBQU1LLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUosRUFBbkI7QUFFSCxHQVpEOztBQWNBLHNCQUNJO0FBQVEsV0FBTyxFQUFFVCxjQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBR0gsQ0FuQkQ7O0tBQU1ILG1CO0FBb0JTQSxrRkFBZiIsImZpbGUiOiIuL3NyYy9Db21wb25lbnRzL1JlbW92ZUZyb21GYXZvcml0ZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSZW1vdmVGcm9tRmF2b3JpdGVzID0gKHsgcmVjaXBlLCB1c2VyRmF2b3JpdGUgfSkgPT4ge1xuXG4gICAgY29uc3QgcmVtb3ZlRmF2b3JpdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmUgZnJvbSBmYXZvcml0ZXMnLCB1c2VyRmF2b3JpdGUpXG4gICAgICAgIGNvbnN0IGNvbmZpZ09iaiA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlcyAgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2Zhdm9yaXRlX3JlY2lwZXMvJHt1c2VyRmF2b3JpdGV9YCwgY29uZmlnT2JqKVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlbW92ZUZhdm9yaXRlfT5SZW1vdmUgZnJvbSBGYXZvcml0ZXM8L2J1dHRvbj5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBSZW1vdmVGcm9tRmF2b3JpdGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/RemoveFromFavorites.js\n");

/***/ })

})