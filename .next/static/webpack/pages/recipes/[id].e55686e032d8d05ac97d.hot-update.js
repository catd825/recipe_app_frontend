webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/RecipeContext/state.js":
/*!************************************!*\
  !*** ./src/RecipeContext/state.js ***!
  \************************************/
/*! exports provided: RecipeProvider, useRecipeContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RecipeProvider\", function() { return RecipeProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useRecipeContext\", function() { return useRecipeContext; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/RecipeContext/state.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nconst RecipeContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(); //creates a store\n\nconst RecipeProvider = ({\n  children\n}) => {\n  _s();\n\n  const {\n    0: recipes,\n    1: setRecipes\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const recipeUrl = 'http://localhost:3000/recipes';\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const fetchRecipes = async () => {\n      const response = await fetch(recipeUrl);\n      const data = await response.json();\n      setRecipes(data);\n    };\n\n    fetchRecipes();\n  }, []);\n  const {\n    0: favorites,\n    1: setFavorites\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const favoriteRecipeUrl = 'http://localhost:3000/favorite_recipes';\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const fetchFavorites = async () => {\n      const response = await fetch(favoriteRecipeUrl);\n      const data = await response.json();\n\n      if (setFavorites) {\n        setFavorites(data);\n      }\n    };\n\n    fetchFavorites();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RecipeContext.Provider, {\n    value: {\n      recipes,\n      setRecipes,\n      favorites,\n      setFavorites\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(RecipeProvider, \"BMjUCO1s93yTNgxTYms4F65mAzY=\");\n\n_c = RecipeProvider;\nconst useRecipeContext = () => {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(RecipeContext);\n};\n\n_s2(useRecipeContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"RecipeProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1JlY2lwZUNvbnRleHQvc3RhdGUuanM/MDY3MCJdLCJuYW1lcyI6WyJSZWNpcGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlJlY2lwZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyZWNpcGVzIiwic2V0UmVjaXBlcyIsInVzZVN0YXRlIiwicmVjaXBlVXJsIiwidXNlRWZmZWN0IiwiZmV0Y2hSZWNpcGVzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZmF2b3JpdGVzIiwic2V0RmF2b3JpdGVzIiwiZmF2b3JpdGVSZWNpcGVVcmwiLCJmZXRjaEZhdm9yaXRlcyIsInVzZVJlY2lwZUNvbnRleHQiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxhQUFhLGdCQUFHQywyREFBYSxFQUFuQyxDLENBQXVDOztBQUVoQyxNQUFNQyxjQUFjLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFBQTs7QUFDNUMsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLEVBQUQsQ0FBdEM7QUFDQSxRQUFNQyxTQUFTLEdBQUcsK0JBQWxCO0FBRUFDLHlEQUFTLENBQUUsTUFBTTtBQUNiLFVBQU1DLFlBQVksR0FBRyxZQUFZO0FBQzdCLFlBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNKLFNBQUQsQ0FBNUI7QUFDQSxZQUFNSyxJQUFJLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFULEVBQW5CO0FBRUFSLGdCQUFVLENBQUNPLElBQUQsQ0FBVjtBQUNILEtBTEQ7O0FBTUFILGdCQUFZO0FBQ2IsR0FSTSxFQVFKLEVBUkksQ0FBVDtBQVVFLFFBQU07QUFBQSxPQUFDSyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QlQsc0RBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBTVUsaUJBQWlCLEdBQUcsd0NBQTFCO0FBRUZSLHlEQUFTLENBQUUsTUFBTTtBQUNiLFVBQU1TLGNBQWMsR0FBRyxZQUFZO0FBQy9CLFlBQU1QLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNLLGlCQUFELENBQTVCO0FBQ0EsWUFBTUosSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUFuQjs7QUFFQSxVQUFHRSxZQUFILEVBQWdCO0FBQ1pBLG9CQUFZLENBQUNILElBQUQsQ0FBWjtBQUNIO0FBQ0osS0FQRDs7QUFRQUssa0JBQWM7QUFDZixHQVZNLEVBVUosRUFWSSxDQUFUO0FBWUEsc0JBQ0kscUVBQUMsYUFBRCxDQUFlLFFBQWY7QUFBd0IsU0FBSyxFQUFFO0FBQUViLGFBQUY7QUFBV0MsZ0JBQVg7QUFBdUJTLGVBQXZCO0FBQWtDQztBQUFsQyxLQUEvQjtBQUFBLGNBQ0taO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0gsQ0FsQ007O0dBQU1ELGM7O0tBQUFBLGM7QUFvQ04sTUFBTWdCLGdCQUFnQixHQUFHLE1BQU07QUFBQTs7QUFDbEMsU0FBT0Msd0RBQVUsQ0FBQ25CLGFBQUQsQ0FBakI7QUFDSCxDQUZNOztJQUFNa0IsZ0IiLCJmaWxlIjoiLi9zcmMvUmVjaXBlQ29udGV4dC9zdGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgUmVjaXBlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTsgLy9jcmVhdGVzIGEgc3RvcmVcblxuZXhwb3J0IGNvbnN0IFJlY2lwZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IFtyZWNpcGVzLCBzZXRSZWNpcGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCByZWNpcGVVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlY2lwZXMnXG5cbiAgICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hSZWNpcGVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZWNpcGVVcmwpXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIFxuICAgICAgICAgICAgc2V0UmVjaXBlcyhkYXRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgZmV0Y2hSZWNpcGVzKCk7XG4gICAgICB9LCBbXSk7XG5cbiAgICAgIGNvbnN0IFtmYXZvcml0ZXMsIHNldEZhdm9yaXRlc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgICBjb25zdCBmYXZvcml0ZVJlY2lwZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZmF2b3JpdGVfcmVjaXBlcydcbiAgICBcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hGYXZvcml0ZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZhdm9yaXRlUmVjaXBlVXJsKVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBcbiAgICAgICAgICAgIGlmKHNldEZhdm9yaXRlcyl7XG4gICAgICAgICAgICAgICAgc2V0RmF2b3JpdGVzKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmZXRjaEZhdm9yaXRlcygpO1xuICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlY2lwZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgcmVjaXBlcywgc2V0UmVjaXBlcywgZmF2b3JpdGVzLCBzZXRGYXZvcml0ZXMgfX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvUmVjaXBlQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBjb25zdCB1c2VSZWNpcGVDb250ZXh0ID0gKCkgPT4ge1xuICAgIHJldHVybiB1c2VDb250ZXh0KFJlY2lwZUNvbnRleHQpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/RecipeContext/state.js\n");

/***/ })

})