webpackHotUpdate_N_E("pages/recipes",{

/***/ "./src/Containers/RecipeContainer.js":
/*!*******************************************!*\
  !*** ./src/Containers/RecipeContainer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_RecipeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/RecipeList */ \"./src/Components/RecipeList.js\");\n/* harmony import */ var _Components_RecipeFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/RecipeFilter */ \"./src/Components/RecipeFilter.js\");\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Containers/RecipeContainer.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction RecipeContainer() {\n  _s();\n\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_4__[\"CURRENT_USER\"]; //fetch all recipes\n\n  const {\n    0: recipes,\n    1: setRecipes\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const recipeUrl = 'http://localhost:3000/recipes';\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const fetchRecipes = async () => {\n      const response = await fetch(recipeUrl);\n      const data = await response.json();\n      setRecipes(data);\n    };\n\n    fetchRecipes();\n  }, []);\n  const {\n    0: favorites,\n    1: setFavorites\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const favoriteRecipeUrl = 'http://localhost:3000/favorite_recipes';\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const fetchRecipes = async () => {\n      const response = await fetch(recipeUrl);\n      const data = await response.json();\n      setRecipes(data);\n    };\n\n    fetchRecipes();\n  }, []);\n  const {\n    0: recipeSelection,\n    1: setRecipeSelection\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('all');\n\n  const changeHandler = e => {\n    setRecipeSelection({\n      selection: e.target.value\n    });\n    console.log(e.target.value);\n  }; //  debugger\n\n\n  console.log('recipes', recipes);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_RecipeFilter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      changeHandler: changeHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_RecipeList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      selection: recipeSelection,\n      recipes: recipes\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, this);\n}\n\n_s(RecipeContainer, \"phk2jUcgGYMvOxr0vw7FOLpBfqk=\");\n\n_c = RecipeContainer;\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecipeContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"RecipeContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbnRhaW5lcnMvUmVjaXBlQ29udGFpbmVyLmpzP2YwYWYiXSwibmFtZXMiOlsiUmVjaXBlQ29udGFpbmVyIiwiY3VycmVudF91c2VyIiwiQ1VSUkVOVF9VU0VSIiwicmVjaXBlcyIsInNldFJlY2lwZXMiLCJ1c2VTdGF0ZSIsInJlY2lwZVVybCIsInVzZUVmZmVjdCIsImZldGNoUmVjaXBlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImZhdm9yaXRlcyIsInNldEZhdm9yaXRlcyIsImZhdm9yaXRlUmVjaXBlVXJsIiwicmVjaXBlU2VsZWN0aW9uIiwic2V0UmVjaXBlU2VsZWN0aW9uIiwiY2hhbmdlSGFuZGxlciIsImUiLCJzZWxlY3Rpb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxlQUFULEdBQTJCO0FBQUE7O0FBRTNCLFFBQU1DLFlBQVksR0FBR0MsMERBQXJCLENBRjJCLENBSTNCOztBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLCtCQUFsQjtBQUVBQyx5REFBUyxDQUFFLE1BQU07QUFDYixVQUFNQyxZQUFZLEdBQUcsWUFBWTtBQUM3QixZQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDSixTQUFELENBQTVCO0FBQ0EsWUFBTUssSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUFuQjtBQUVBUixnQkFBVSxDQUFDTyxJQUFELENBQVY7QUFDSCxLQUxEOztBQU1BSCxnQkFBWTtBQUNiLEdBUk0sRUFRSixFQVJJLENBQVQ7QUFVRSxRQUFNO0FBQUEsT0FBQ0ssU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJULHNEQUFRLENBQUMsRUFBRCxDQUExQztBQUNBLFFBQU1VLGlCQUFpQixHQUFHLHdDQUExQjtBQUVGUix5REFBUyxDQUFFLE1BQU07QUFDYixVQUFNQyxZQUFZLEdBQUcsWUFBWTtBQUM3QixZQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDSixTQUFELENBQTVCO0FBQ0EsWUFBTUssSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUFuQjtBQUVBUixnQkFBVSxDQUFDTyxJQUFELENBQVY7QUFDSCxLQUxEOztBQU1BSCxnQkFBWTtBQUNiLEdBUk0sRUFRSixFQVJJLENBQVQ7QUFVRSxRQUFNO0FBQUEsT0FBQ1EsZUFBRDtBQUFBLE9BQWtCQztBQUFsQixNQUF3Q1osc0RBQVEsQ0FBQyxLQUFELENBQXREOztBQUVBLFFBQU1hLGFBQWEsR0FBSUMsQ0FBRCxJQUFPO0FBQzNCRixzQkFBa0IsQ0FBQztBQUNqQkcsZUFBUyxFQUFFRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFESCxLQUFELENBQWxCO0FBR0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBckI7QUFDRCxHQUxELENBakN5QixDQXdDM0I7OztBQUNFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCckIsT0FBdkI7QUFDQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdFQUFEO0FBQWMsbUJBQWEsRUFBRWU7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsOERBQUQ7QUFBWSxlQUFTLEVBQUVGLGVBQXZCO0FBQXdDLGFBQU8sRUFBRWI7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0dBaERRSCxlOztLQUFBQSxlO0FBZ0RSO0FBRWNBLDhFQUFmIiwiZmlsZSI6Ii4vc3JjL0NvbnRhaW5lcnMvUmVjaXBlQ29udGFpbmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlY2lwZUxpc3QgZnJvbSAnLi4vQ29tcG9uZW50cy9SZWNpcGVMaXN0J1xuaW1wb3J0IFJlY2lwZUZpbHRlciBmcm9tICcuLi9Db21wb25lbnRzL1JlY2lwZUZpbHRlcidcbmltcG9ydCB7IENVUlJFTlRfVVNFUiB9IGZyb20gJy4uL2N1cnJlbnRfdXNlcidcblxuZnVuY3Rpb24gUmVjaXBlQ29udGFpbmVyKCkge1xuXG5jb25zdCBjdXJyZW50X3VzZXIgPSBDVVJSRU5UX1VTRVJcblxuLy9mZXRjaCBhbGwgcmVjaXBlc1xuY29uc3QgW3JlY2lwZXMsIHNldFJlY2lwZXNdID0gdXNlU3RhdGUoW10pO1xuY29uc3QgcmVjaXBlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWNpcGVzJ1xuXG51c2VFZmZlY3QoICgpID0+IHtcbiAgICBjb25zdCBmZXRjaFJlY2lwZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVjaXBlVXJsKVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIHNldFJlY2lwZXMoZGF0YSk7XG4gICAgfTtcbiAgICBmZXRjaFJlY2lwZXMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFtmYXZvcml0ZXMsIHNldEZhdm9yaXRlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGZhdm9yaXRlUmVjaXBlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9mYXZvcml0ZV9yZWNpcGVzJ1xuXG51c2VFZmZlY3QoICgpID0+IHtcbiAgICBjb25zdCBmZXRjaFJlY2lwZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVjaXBlVXJsKVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIHNldFJlY2lwZXMoZGF0YSk7XG4gICAgfTtcbiAgICBmZXRjaFJlY2lwZXMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFtyZWNpcGVTZWxlY3Rpb24sIHNldFJlY2lwZVNlbGVjdGlvbl0gPSB1c2VTdGF0ZSgnYWxsJyk7XG5cbiAgY29uc3QgY2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XG4gICAgc2V0UmVjaXBlU2VsZWN0aW9uKHsgXG4gICAgICBzZWxlY3Rpb246IGUudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4vLyAgZGVidWdnZXJcbiAgY29uc29sZS5sb2coJ3JlY2lwZXMnLCByZWNpcGVzKVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8UmVjaXBlRmlsdGVyIGNoYW5nZUhhbmRsZXI9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICA8UmVjaXBlTGlzdCBzZWxlY3Rpb249e3JlY2lwZVNlbGVjdGlvbn0gcmVjaXBlcz17cmVjaXBlc30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZUNvbnRhaW5lcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Containers/RecipeContainer.js\n");

/***/ })

})