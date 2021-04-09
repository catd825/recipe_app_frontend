webpackHotUpdate_N_E("pages/recipes",{

/***/ "./src/Containers/RecipeContainer.js":
/*!*******************************************!*\
  !*** ./src/Containers/RecipeContainer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n/* harmony import */ var _Components_RecipeList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/RecipeList */ \"./src/Components/RecipeList.js\");\n/* harmony import */ var _Components_RecipeFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/RecipeFilter */ \"./src/Components/RecipeFilter.js\");\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Containers/RecipeContainer.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction RecipeContainer({\n  recipes\n}) {\n  _s();\n\n  console.log(recipes);\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_2__[\"CURRENT_USER\"]; //fetch all recipes\n\n  /*\n  const [recipes, setRecipes] = useState([]);\n  const recipeUrl = 'http://localhost:3000/recipes'\n  \n  useEffect( () => {\n      const fetchRecipes = async () => {\n          const response = await fetch(recipeUrl)\n          const data = await response.json();\n  \n          setRecipes(data);\n      };\n      fetchRecipes();\n    }, []);\n    */\n\n  const {\n    0: favorites,\n    1: setFavorites\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const favoriteRecipeUrl = 'http://localhost:3000/favorite_recipes';\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const fetchFavorites = async () => {\n      const response = await fetch(favoriteRecipeUrl);\n      const data = await response.json();\n      setFavorites(data);\n    };\n\n    fetchFavorites();\n  }, []);\n  const {\n    0: recipeSelection,\n    1: setRecipeSelection\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('all');\n\n  const changeHandler = e => {\n    setRecipeSelection({\n      state: e.target.value\n    });\n    console.log(e.target.value);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_RecipeFilter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      changeHandler: changeHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_RecipeList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      currentSelection: recipeSelection,\n      favorites: favorites,\n      recipes: recipes\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 5\n  }, this);\n}\n\n_s(RecipeContainer, \"oKqi8ElTStw6m9taWaueq9tQJZM=\");\n\n_c = RecipeContainer;\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecipeContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"RecipeContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbnRhaW5lcnMvUmVjaXBlQ29udGFpbmVyLmpzP2YwYWYiXSwibmFtZXMiOlsiUmVjaXBlQ29udGFpbmVyIiwicmVjaXBlcyIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJmYXZvcml0ZXMiLCJzZXRGYXZvcml0ZXMiLCJ1c2VTdGF0ZSIsImZhdm9yaXRlUmVjaXBlVXJsIiwidXNlRWZmZWN0IiwiZmV0Y2hGYXZvcml0ZXMiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJyZWNpcGVTZWxlY3Rpb24iLCJzZXRSZWNpcGVTZWxlY3Rpb24iLCJjaGFuZ2VIYW5kbGVyIiwiZSIsInN0YXRlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxlQUFULENBQXlCO0FBQUNDO0FBQUQsQ0FBekIsRUFBb0M7QUFBQTs7QUFFcENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQ0EsUUFBTUcsWUFBWSxHQUFHQywwREFBckIsQ0FIb0MsQ0FNcEM7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJRSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsRUFBRCxDQUExQztBQUNBLFFBQU1DLGlCQUFpQixHQUFHLHdDQUExQjtBQUVGQyx5REFBUyxDQUFFLE1BQU07QUFDYixVQUFNQyxjQUFjLEdBQUcsWUFBWTtBQUMvQixZQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDSixpQkFBRCxDQUE1QjtBQUNBLFlBQU1LLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBbkI7QUFFQVIsa0JBQVksQ0FBQ08sSUFBRCxDQUFaO0FBQ0gsS0FMRDs7QUFNQUgsa0JBQWM7QUFDZixHQVJNLEVBUUosRUFSSSxDQUFUO0FBVUUsUUFBTTtBQUFBLE9BQUNLLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0NULHNEQUFRLENBQUMsS0FBRCxDQUF0RDs7QUFFQSxRQUFNVSxhQUFhLEdBQUlDLENBQUQsSUFBTztBQUMzQkYsc0JBQWtCLENBQUM7QUFDakJHLFdBQUssRUFBRUQsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBREMsS0FBRCxDQUFsQjtBQUdBcEIsV0FBTyxDQUFDQyxHQUFSLENBQVlnQixDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBckI7QUFDRCxHQUxEOztBQU9BLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0VBQUQ7QUFBYyxtQkFBYSxFQUFFSjtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyw4REFBRDtBQUFZLHNCQUFnQixFQUFFRixlQUE5QjtBQUErQyxlQUFTLEVBQUVWLFNBQTFEO0FBQXFFLGFBQU8sRUFBRUw7QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0dBcERRRCxlOztLQUFBQSxlO0FBb0RSO0FBRWNBLDhFQUFmIiwiZmlsZSI6Ii4vc3JjL0NvbnRhaW5lcnMvUmVjaXBlQ29udGFpbmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSIH0gZnJvbSAnLi4vY3VycmVudF91c2VyJ1xuaW1wb3J0IFJlY2lwZUxpc3QgZnJvbSAnLi4vQ29tcG9uZW50cy9SZWNpcGVMaXN0J1xuaW1wb3J0IFJlY2lwZUZpbHRlciBmcm9tICcuLi9Db21wb25lbnRzL1JlY2lwZUZpbHRlcidcblxuXG5mdW5jdGlvbiBSZWNpcGVDb250YWluZXIoe3JlY2lwZXN9KSB7XG5cbmNvbnNvbGUubG9nKHJlY2lwZXMpXG5jb25zdCBjdXJyZW50X3VzZXIgPSBDVVJSRU5UX1VTRVJcblxuXG4vL2ZldGNoIGFsbCByZWNpcGVzXG4vKlxuY29uc3QgW3JlY2lwZXMsIHNldFJlY2lwZXNdID0gdXNlU3RhdGUoW10pO1xuY29uc3QgcmVjaXBlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWNpcGVzJ1xuXG51c2VFZmZlY3QoICgpID0+IHtcbiAgICBjb25zdCBmZXRjaFJlY2lwZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVjaXBlVXJsKVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIHNldFJlY2lwZXMoZGF0YSk7XG4gICAgfTtcbiAgICBmZXRjaFJlY2lwZXMoKTtcbiAgfSwgW10pO1xuICAqL1xuXG5cblxuICBjb25zdCBbZmF2b3JpdGVzLCBzZXRGYXZvcml0ZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBmYXZvcml0ZVJlY2lwZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZmF2b3JpdGVfcmVjaXBlcydcblxudXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hGYXZvcml0ZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZmF2b3JpdGVSZWNpcGVVcmwpXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgc2V0RmF2b3JpdGVzKGRhdGEpO1xuICAgIH07XG4gICAgZmV0Y2hGYXZvcml0ZXMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFtyZWNpcGVTZWxlY3Rpb24sIHNldFJlY2lwZVNlbGVjdGlvbl0gPSB1c2VTdGF0ZSgnYWxsJyk7XG5cbiAgY29uc3QgY2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XG4gICAgc2V0UmVjaXBlU2VsZWN0aW9uKHsgXG4gICAgICBzdGF0ZTogZS50YXJnZXQudmFsdWVcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFJlY2lwZUZpbHRlciBjaGFuZ2VIYW5kbGVyPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgPFJlY2lwZUxpc3QgY3VycmVudFNlbGVjdGlvbj17cmVjaXBlU2VsZWN0aW9ufSBmYXZvcml0ZXM9e2Zhdm9yaXRlc30gcmVjaXBlcz17cmVjaXBlc30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZUNvbnRhaW5lcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Containers/RecipeContainer.js\n");

/***/ })

})