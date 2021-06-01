webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/RecipeContext/state.js":
/*!************************************!*\
  !*** ./src/RecipeContext/state.js ***!
  \************************************/
/*! exports provided: RecipeProvider, useRecipeContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RecipeProvider\", function() { return RecipeProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useRecipeContext\", function() { return useRecipeContext; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UserContext_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserContext/state */ \"./src/UserContext/state.js\");\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/RecipeContext/state.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\nconst RecipeContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(); //creates a store\n\nconst RecipeProvider = ({\n  children\n}) => {\n  _s();\n\n  const {\n    0: recipes,\n    1: setRecipes\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const recipeUrl = 'http://localhost:3000/recipes';\n  const {\n    0: favorites,\n    1: setFavorites\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const favoriteRecipeUrl = 'http://localhost:3000/favorite_recipes';\n\n  const getToken = () => {\n    return localStorage.getItem(\"token\");\n  };\n\n  const {\n    user\n  } = Object(_UserContext_state__WEBPACK_IMPORTED_MODULE_2__[\"useUserContext\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const token = getToken();\n\n    const fetchRecipes = async () => {\n      const response = await fetch(recipeUrl, {\n        method: \"GET\",\n        headers: {\n          Authorization: `Bearer ${token}`\n        }\n      });\n      const data = await response.json();\n      setRecipes(data);\n    };\n\n    fetchRecipes();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const token = getToken();\n\n    const fetchFavorites = async () => {\n      const response = await fetch(favoriteRecipeUrl, {\n        method: \"GET\",\n        headers: {\n          Authorization: `Bearer ${token}`\n        }\n      });\n      const data = await response.json();\n      setFavorites(data);\n    };\n\n    fetchFavorites();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RecipeContext.Provider, {\n    value: {\n      recipes,\n      setRecipes,\n      favorites,\n      setFavorites\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(RecipeProvider, \"Zxzsvwly5GYDcIfKLyvkRaWwIMM=\", false, function () {\n  return [_UserContext_state__WEBPACK_IMPORTED_MODULE_2__[\"useUserContext\"]];\n});\n\n_c = RecipeProvider;\nconst useRecipeContext = () => {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(RecipeContext);\n};\n\n_s2(useRecipeContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"RecipeProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1JlY2lwZUNvbnRleHQvc3RhdGUuanM/MDY3MCJdLCJuYW1lcyI6WyJSZWNpcGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlJlY2lwZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyZWNpcGVzIiwic2V0UmVjaXBlcyIsInVzZVN0YXRlIiwicmVjaXBlVXJsIiwiZmF2b3JpdGVzIiwic2V0RmF2b3JpdGVzIiwiZmF2b3JpdGVSZWNpcGVVcmwiLCJnZXRUb2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyIiwidXNlVXNlckNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImZldGNoUmVjaXBlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJqc29uIiwiZmV0Y2hGYXZvcml0ZXMiLCJ1c2VSZWNpcGVDb250ZXh0IiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsRUFBbkMsQyxDQUF1Qzs7QUFFaEMsTUFBTUMsY0FBYyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQUE7O0FBQzVDLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLCtCQUFsQjtBQUNBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0Qkgsc0RBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBTUksaUJBQWlCLEdBQUcsd0NBQTFCOztBQUVBLFFBQU1DLFFBQVEsR0FBRyxNQUFNO0FBQ25CLFdBQU9DLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFQO0FBQ0gsR0FGRDs7QUFLQSxRQUFNO0FBQUNDO0FBQUQsTUFBU0MseUVBQWMsRUFBN0I7QUFJQUMseURBQVMsQ0FBRSxNQUFNO0FBQ2IsVUFBTUMsS0FBSyxHQUFHTixRQUFRLEVBQXRCOztBQUNBLFVBQU1PLFlBQVksR0FBRyxZQUFZO0FBQzdCLFlBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNiLFNBQUQsRUFBWTtBQUNwQ2MsY0FBTSxFQUFFLEtBRDRCO0FBRXBDQyxlQUFPLEVBQUU7QUFBQ0MsdUJBQWEsRUFBRyxVQUFTTixLQUFNO0FBQWhDO0FBRjJCLE9BQVosQ0FBNUI7QUFJQSxZQUFNTyxJQUFJLEdBQUcsTUFBTUwsUUFBUSxDQUFDTSxJQUFULEVBQW5CO0FBQ0FwQixnQkFBVSxDQUFDbUIsSUFBRCxDQUFWO0FBQ0gsS0FQRDs7QUFRQU4sZ0JBQVk7QUFDYixHQVhNLEVBV0osRUFYSSxDQUFUO0FBYUFGLHlEQUFTLENBQUUsTUFBTTtBQUNiLFVBQU1DLEtBQUssR0FBR04sUUFBUSxFQUF0Qjs7QUFDQSxVQUFNZSxjQUFjLEdBQUcsWUFBWTtBQUMvQixZQUFNUCxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDVixpQkFBRCxFQUFvQjtBQUM1Q1csY0FBTSxFQUFFLEtBRG9DO0FBRTVDQyxlQUFPLEVBQUU7QUFBQ0MsdUJBQWEsRUFBRyxVQUFTTixLQUFNO0FBQWhDO0FBRm1DLE9BQXBCLENBQTVCO0FBSUEsWUFBTU8sSUFBSSxHQUFHLE1BQU1MLFFBQVEsQ0FBQ00sSUFBVCxFQUFuQjtBQUNBaEIsa0JBQVksQ0FBQ2UsSUFBRCxDQUFaO0FBQ0gsS0FQRDs7QUFRQUUsa0JBQWM7QUFDZixHQVhNLEVBV0osRUFYSSxDQUFUO0FBWUEsc0JBQ0kscUVBQUMsYUFBRCxDQUFlLFFBQWY7QUFBd0IsU0FBSyxFQUFFO0FBQUV0QixhQUFGO0FBQVdDLGdCQUFYO0FBQXVCRyxlQUF2QjtBQUFrQ0M7QUFBbEMsS0FBL0I7QUFBQSxjQUNLTjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUtILENBN0NNOztHQUFNRCxjO1VBV01hLGlFOzs7S0FYTmIsYztBQStDTixNQUFNeUIsZ0JBQWdCLEdBQUcsTUFBTTtBQUFBOztBQUNsQyxTQUFPQyx3REFBVSxDQUFDNUIsYUFBRCxDQUFqQjtBQUNILENBRk07O0lBQU0yQixnQiIsImZpbGUiOiIuL3NyYy9SZWNpcGVDb250ZXh0L3N0YXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVXNlckNvbnRleHQgfSBmcm9tICcuLi9Vc2VyQ29udGV4dC9zdGF0ZSdcblxuY29uc3QgUmVjaXBlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTsgLy9jcmVhdGVzIGEgc3RvcmVcblxuZXhwb3J0IGNvbnN0IFJlY2lwZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IFtyZWNpcGVzLCBzZXRSZWNpcGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCByZWNpcGVVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlY2lwZXMnXG4gICAgY29uc3QgW2Zhdm9yaXRlcywgc2V0RmF2b3JpdGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBmYXZvcml0ZVJlY2lwZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZmF2b3JpdGVfcmVjaXBlcyc7XG5cbiAgICBjb25zdCBnZXRUb2tlbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIilcbiAgICB9XG5cblxuICAgIGNvbnN0IHt1c2VyfSA9IHVzZVVzZXJDb250ZXh0KCk7XG5cbiAgICBcblxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGdldFRva2VuKClcbiAgICAgICAgY29uc3QgZmV0Y2hSZWNpcGVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZWNpcGVVcmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge0F1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBzZXRSZWNpcGVzKGRhdGEpO1xuICAgICAgICB9O1xuICAgICAgICBmZXRjaFJlY2lwZXMoKTtcbiAgICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGdldFRva2VuKClcbiAgICAgICAgY29uc3QgZmV0Y2hGYXZvcml0ZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZhdm9yaXRlUmVjaXBlVXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YH0sXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgc2V0RmF2b3JpdGVzKGRhdGEpO1xuICAgICAgICB9O1xuICAgICAgICBmZXRjaEZhdm9yaXRlcygpO1xuICAgICAgfSwgW10pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWNpcGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHJlY2lwZXMsIHNldFJlY2lwZXMsIGZhdm9yaXRlcywgc2V0RmF2b3JpdGVzIH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1JlY2lwZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlUmVjaXBlQ29udGV4dCA9ICgpID0+IHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChSZWNpcGVDb250ZXh0KVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/RecipeContext/state.js\n");

/***/ })

})