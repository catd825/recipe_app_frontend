webpackHotUpdate_N_E("pages/recipes",{

/***/ "./src/Containers/RecipeContainer.js":
/*!*******************************************!*\
  !*** ./src/Containers/RecipeContainer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n/* harmony import */ var _Components_RecipeList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/RecipeList */ \"./src/Components/RecipeList.js\");\n/* harmony import */ var _Components_RecipeFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/RecipeFilter */ \"./src/Components/RecipeFilter.js\");\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Containers/RecipeContainer.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction RecipeContainer() {\n  _s();\n\n  x;\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_2__[\"CURRENT_USER\"]; //fetch all recipes\n\n  const {\n    0: recipes,\n    1: setRecipes\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const recipeUrl = 'http://localhost:3000/recipes';\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const fetchRecipes = async () => {\n      const response = await fetch(recipeUrl);\n      const data = await response.json();\n      setRecipes(data);\n    };\n\n    fetchRecipes();\n  }, []);\n  const {\n    0: favorites,\n    1: setFavorites\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const favoriteRecipeUrl = 'http://localhost:3000/favorite_recipes';\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const fetchFavorites = async () => {\n      const response = await fetch(favoriteRecipeUrl);\n      const data = await response.json();\n      setFavorites(data);\n    };\n\n    fetchFavorites();\n  }, []);\n  const {\n    0: recipeSelection,\n    1: setRecipeSelection\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('all');\n\n  const changeHandler = e => {\n    setRecipeSelection({\n      state: e.target.value\n    });\n    console.log(e.target.value);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_RecipeFilter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      changeHandler: changeHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_RecipeList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      currentSelection: recipeSelection,\n      favorites: favorites,\n      recipes: recipes\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, this);\n}\n\n_s(RecipeContainer, \"phk2jUcgGYMvOxr0vw7FOLpBfqk=\");\n\n_c = RecipeContainer;\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecipeContainer);\n/*\nexport const getStaticPropse = async () => {\n  const res = await fetch ('http://localhost:3000/recipes')\n  const recipes = await res.json();\n\n  return {\n    props: {\n      recipes\n    }\n  }\n}\n*/\n\nvar _c;\n\n$RefreshReg$(_c, \"RecipeContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbnRhaW5lcnMvUmVjaXBlQ29udGFpbmVyLmpzP2YwYWYiXSwibmFtZXMiOlsiUmVjaXBlQ29udGFpbmVyIiwieCIsImN1cnJlbnRfdXNlciIsIkNVUlJFTlRfVVNFUiIsInJlY2lwZXMiLCJzZXRSZWNpcGVzIiwidXNlU3RhdGUiLCJyZWNpcGVVcmwiLCJ1c2VFZmZlY3QiLCJmZXRjaFJlY2lwZXMiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJmYXZvcml0ZXMiLCJzZXRGYXZvcml0ZXMiLCJmYXZvcml0ZVJlY2lwZVVybCIsImZldGNoRmF2b3JpdGVzIiwicmVjaXBlU2VsZWN0aW9uIiwic2V0UmVjaXBlU2VsZWN0aW9uIiwiY2hhbmdlSGFuZGxlciIsImUiLCJzdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLGVBQVQsR0FBMkI7QUFBQTs7QUFDM0JDLEdBQUM7QUFDRCxRQUFNQyxZQUFZLEdBQUdDLDBEQUFyQixDQUYyQixDQUszQjs7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBLFFBQU1DLFNBQVMsR0FBRywrQkFBbEI7QUFFQUMseURBQVMsQ0FBRSxNQUFNO0FBQ2IsVUFBTUMsWUFBWSxHQUFHLFlBQVk7QUFDN0IsWUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0osU0FBRCxDQUE1QjtBQUNBLFlBQU1LLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBbkI7QUFFQVIsZ0JBQVUsQ0FBQ08sSUFBRCxDQUFWO0FBQ0gsS0FMRDs7QUFNQUgsZ0JBQVk7QUFDYixHQVJNLEVBUUosRUFSSSxDQUFUO0FBVUUsUUFBTTtBQUFBLE9BQUNLLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCVCxzREFBUSxDQUFDLEVBQUQsQ0FBMUM7QUFDQSxRQUFNVSxpQkFBaUIsR0FBRyx3Q0FBMUI7QUFFRlIseURBQVMsQ0FBRSxNQUFNO0FBQ2IsVUFBTVMsY0FBYyxHQUFHLFlBQVk7QUFDL0IsWUFBTVAsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0ssaUJBQUQsQ0FBNUI7QUFDQSxZQUFNSixJQUFJLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFULEVBQW5CO0FBRUFFLGtCQUFZLENBQUNILElBQUQsQ0FBWjtBQUNILEtBTEQ7O0FBTUFLLGtCQUFjO0FBQ2YsR0FSTSxFQVFKLEVBUkksQ0FBVDtBQVVFLFFBQU07QUFBQSxPQUFDQyxlQUFEO0FBQUEsT0FBa0JDO0FBQWxCLE1BQXdDYixzREFBUSxDQUFDLEtBQUQsQ0FBdEQ7O0FBRUEsUUFBTWMsYUFBYSxHQUFJQyxDQUFELElBQU87QUFDM0JGLHNCQUFrQixDQUFDO0FBQ2pCRyxXQUFLLEVBQUVELENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQURDLEtBQUQsQ0FBbEI7QUFHQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlMLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFyQjtBQUNELEdBTEQ7O0FBT0Esc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnRUFBRDtBQUFjLG1CQUFhLEVBQUVKO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLDhEQUFEO0FBQVksc0JBQWdCLEVBQUVGLGVBQTlCO0FBQStDLGVBQVMsRUFBRUosU0FBMUQ7QUFBcUUsYUFBTyxFQUFFVjtBQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDs7R0EvQ1FKLGU7O0tBQUFBLGU7QUErQ1I7QUFFY0EsOEVBQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvQ29udGFpbmVycy9SZWNpcGVDb250YWluZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVIgfSBmcm9tICcuLi9jdXJyZW50X3VzZXInXG5pbXBvcnQgUmVjaXBlTGlzdCBmcm9tICcuLi9Db21wb25lbnRzL1JlY2lwZUxpc3QnXG5pbXBvcnQgUmVjaXBlRmlsdGVyIGZyb20gJy4uL0NvbXBvbmVudHMvUmVjaXBlRmlsdGVyJ1xuXG5cbmZ1bmN0aW9uIFJlY2lwZUNvbnRhaW5lcigpIHtcbnhcbmNvbnN0IGN1cnJlbnRfdXNlciA9IENVUlJFTlRfVVNFUlxuXG5cbi8vZmV0Y2ggYWxsIHJlY2lwZXNcbmNvbnN0IFtyZWNpcGVzLCBzZXRSZWNpcGVzXSA9IHVzZVN0YXRlKFtdKTtcbmNvbnN0IHJlY2lwZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVjaXBlcydcblxudXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hSZWNpcGVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlY2lwZVVybClcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBzZXRSZWNpcGVzKGRhdGEpO1xuICAgIH07XG4gICAgZmV0Y2hSZWNpcGVzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBbZmF2b3JpdGVzLCBzZXRGYXZvcml0ZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBmYXZvcml0ZVJlY2lwZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZmF2b3JpdGVfcmVjaXBlcydcblxudXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hGYXZvcml0ZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZmF2b3JpdGVSZWNpcGVVcmwpXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgc2V0RmF2b3JpdGVzKGRhdGEpO1xuICAgIH07XG4gICAgZmV0Y2hGYXZvcml0ZXMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFtyZWNpcGVTZWxlY3Rpb24sIHNldFJlY2lwZVNlbGVjdGlvbl0gPSB1c2VTdGF0ZSgnYWxsJyk7XG5cbiAgY29uc3QgY2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XG4gICAgc2V0UmVjaXBlU2VsZWN0aW9uKHsgXG4gICAgICBzdGF0ZTogZS50YXJnZXQudmFsdWVcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFJlY2lwZUZpbHRlciBjaGFuZ2VIYW5kbGVyPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgPFJlY2lwZUxpc3QgY3VycmVudFNlbGVjdGlvbj17cmVjaXBlU2VsZWN0aW9ufSBmYXZvcml0ZXM9e2Zhdm9yaXRlc30gcmVjaXBlcz17cmVjaXBlc30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZUNvbnRhaW5lcjtcblxuLypcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wc2UgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoICgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlY2lwZXMnKVxuICBjb25zdCByZWNpcGVzID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICByZWNpcGVzXG4gICAgfVxuICB9XG59XG4qLyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Containers/RecipeContainer.js\n");

/***/ })

})