webpackHotUpdate_N_E("pages/recipes",{

/***/ "./src/Containers/RecipeContainer.js":
/*!*******************************************!*\
  !*** ./src/Containers/RecipeContainer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_RecipeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/RecipeList */ \"./src/Components/RecipeList.js\");\n/* harmony import */ var _Components_RecipeFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/RecipeFilter */ \"./src/Components/RecipeFilter.js\");\n/* harmony import */ var _RecipeContext_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../RecipeContext/state */ \"./src/RecipeContext/state.js\");\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Containers/RecipeContainer.js\",\n    _s = $RefreshSig$();\n\n // import { CURRENT_USER } from '../current_user'\n\n\n\n\n\nfunction RecipeContainer() {\n  _s();\n\n  //fetch all recipes\n\n  /*\n  const [recipes, setRecipes] = useState([]);\n  const recipeUrl = 'http://localhost:3000/recipes'\n  \n  useEffect( () => {\n      const fetchRecipes = async () => {\n          const response = await fetch(recipeUrl)\n          const data = await response.json();\n  \n          setRecipes(data);\n      };\n      fetchRecipes();\n    }, []);\n    */\n  const {\n    0: favorites,\n    1: setFavorites\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const favoriteRecipeUrl = 'http://localhost:3000/favorite_recipes';\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const fetchFavorites = async () => {\n      const response = await fetch(favoriteRecipeUrl);\n      const data = await response.json();\n      setFavorites(data);\n    };\n\n    fetchFavorites();\n  }, []);\n  const {\n    0: recipeSelection,\n    1: setRecipeSelection\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('all');\n\n  const changeHandler = e => {\n    setRecipeSelection({\n      state: e.target.value\n    }); // console.log(e.target.value)\n  };\n\n  const state = Object(_RecipeContext_state__WEBPACK_IMPORTED_MODULE_4__[\"useRecipeContext\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_RecipeFilter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      changeHandler: changeHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, this);\n}\n\n_s(RecipeContainer, \"jeZZK3hIbkD8wZUDqmMi/URF3sQ=\", false, function () {\n  return [_RecipeContext_state__WEBPACK_IMPORTED_MODULE_4__[\"useRecipeContext\"]];\n});\n\n_c = RecipeContainer;\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecipeContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"RecipeContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbnRhaW5lcnMvUmVjaXBlQ29udGFpbmVyLmpzP2YwYWYiXSwibmFtZXMiOlsiUmVjaXBlQ29udGFpbmVyIiwiZmF2b3JpdGVzIiwic2V0RmF2b3JpdGVzIiwidXNlU3RhdGUiLCJmYXZvcml0ZVJlY2lwZVVybCIsInVzZUVmZmVjdCIsImZldGNoRmF2b3JpdGVzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicmVjaXBlU2VsZWN0aW9uIiwic2V0UmVjaXBlU2VsZWN0aW9uIiwiY2hhbmdlSGFuZGxlciIsImUiLCJzdGF0ZSIsInRhcmdldCIsInZhbHVlIiwidXNlUmVjaXBlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxlQUFULEdBQTJCO0FBQUE7O0FBRTNCOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFRSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsRUFBRCxDQUExQztBQUNBLFFBQU1DLGlCQUFpQixHQUFHLHdDQUExQjtBQUVGQyx5REFBUyxDQUFFLE1BQU07QUFDYixVQUFNQyxjQUFjLEdBQUcsWUFBWTtBQUMvQixZQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDSixpQkFBRCxDQUE1QjtBQUNBLFlBQU1LLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBbkI7QUFFQVIsa0JBQVksQ0FBQ08sSUFBRCxDQUFaO0FBQ0gsS0FMRDs7QUFNQUgsa0JBQWM7QUFDZixHQVJNLEVBUUosRUFSSSxDQUFUO0FBVUUsUUFBTTtBQUFBLE9BQUNLLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0NULHNEQUFRLENBQUMsS0FBRCxDQUF0RDs7QUFFQSxRQUFNVSxhQUFhLEdBQUlDLENBQUQsSUFBTztBQUMzQkYsc0JBQWtCLENBQUM7QUFDakJHLFdBQUssRUFBRUQsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBREMsS0FBRCxDQUFsQixDQUQyQixDQUkzQjtBQUNELEdBTEQ7O0FBT0EsUUFBTUYsS0FBSyxHQUFHRyw2RUFBZ0IsRUFBOUI7QUFFQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLGdFQUFEO0FBQWMsbUJBQWEsRUFBRUw7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EOztHQWhEUWIsZTtVQXdDT2tCLHFFOzs7S0F4Q1BsQixlO0FBZ0RSO0FBRWNBLDhFQUFmIiwiZmlsZSI6Ii4vc3JjL0NvbnRhaW5lcnMvUmVjaXBlQ29udGFpbmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgQ1VSUkVOVF9VU0VSIH0gZnJvbSAnLi4vY3VycmVudF91c2VyJ1xuaW1wb3J0IFJlY2lwZUxpc3QgZnJvbSAnLi4vQ29tcG9uZW50cy9SZWNpcGVMaXN0J1xuaW1wb3J0IFJlY2lwZUZpbHRlciBmcm9tICcuLi9Db21wb25lbnRzL1JlY2lwZUZpbHRlcidcbmltcG9ydCB7IHVzZVJlY2lwZUNvbnRleHQgfSBmcm9tICcuLi9SZWNpcGVDb250ZXh0L3N0YXRlJ1xuXG5cbmZ1bmN0aW9uIFJlY2lwZUNvbnRhaW5lcigpIHtcblxuLy9mZXRjaCBhbGwgcmVjaXBlc1xuLypcbmNvbnN0IFtyZWNpcGVzLCBzZXRSZWNpcGVzXSA9IHVzZVN0YXRlKFtdKTtcbmNvbnN0IHJlY2lwZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVjaXBlcydcblxudXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hSZWNpcGVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlY2lwZVVybClcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBzZXRSZWNpcGVzKGRhdGEpO1xuICAgIH07XG4gICAgZmV0Y2hSZWNpcGVzKCk7XG4gIH0sIFtdKTtcbiAgKi9cblxuICBjb25zdCBbZmF2b3JpdGVzLCBzZXRGYXZvcml0ZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBmYXZvcml0ZVJlY2lwZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZmF2b3JpdGVfcmVjaXBlcydcblxudXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hGYXZvcml0ZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZmF2b3JpdGVSZWNpcGVVcmwpXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgc2V0RmF2b3JpdGVzKGRhdGEpO1xuICAgIH07XG4gICAgZmV0Y2hGYXZvcml0ZXMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFtyZWNpcGVTZWxlY3Rpb24sIHNldFJlY2lwZVNlbGVjdGlvbl0gPSB1c2VTdGF0ZSgnYWxsJyk7XG5cbiAgY29uc3QgY2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XG4gICAgc2V0UmVjaXBlU2VsZWN0aW9uKHsgXG4gICAgICBzdGF0ZTogZS50YXJnZXQudmFsdWVcbiAgICB9KVxuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3Qgc3RhdGUgPSB1c2VSZWNpcGVDb250ZXh0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFJlY2lwZUZpbHRlciBjaGFuZ2VIYW5kbGVyPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgey8qIDxSZWNpcGVMaXN0IGN1cnJlbnRTZWxlY3Rpb249e3JlY2lwZVNlbGVjdGlvbn0gZmF2b3JpdGVzPXtmYXZvcml0ZXN9IHJlY2lwZXM9e3JlY2lwZXN9IC8+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlQ29udGFpbmVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Containers/RecipeContainer.js\n");

/***/ })

})