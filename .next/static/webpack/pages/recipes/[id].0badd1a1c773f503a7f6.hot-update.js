webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/RecipeContext/state.js":
/*!************************************!*\
  !*** ./src/RecipeContext/state.js ***!
  \************************************/
/*! exports provided: RecipeProvider, useRecipeContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RecipeProvider\", function() { return RecipeProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useRecipeContext\", function() { return useRecipeContext; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/RecipeContext/state.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nconst RecipeContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(); //creates a store\n\nconst RecipeProvider = ({\n  children\n}) => {\n  _s();\n\n  const {\n    0: recipes,\n    1: setRecipes\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const recipeUrl = 'http://localhost:3000/recipes'; // const [favorites, setFavorites] = useState([]);\n  // const favoriteRecipeUrl = 'http://localhost:3000/favorite_recipes'\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const fetchRecipes = async () => {\n      const response = await fetch(recipeUrl);\n      const data = await response.json();\n      setRecipes(data);\n    };\n\n    fetchRecipes();\n  }, []);\n\n  const favorites = async API => {\n    try {\n      const res = await fetch(API);\n      const data = await res.json();\n      return data;\n    } catch (e) {\n      throw new Error(e);\n    }\n  };\n  /*\n      useEffect( () => {\n          const fetchFavorites = async () => {\n              const response = await fetch(favoriteRecipeUrl)\n              const data = await response.json();\n              console.log(data)\n              setFavorites(data);\n          };\n          fetchFavorites();\n        }, []);\n  */\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RecipeContext.Provider, {\n    value: {\n      recipes,\n      setRecipes,\n      favorites,\n      setFavorites\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(RecipeProvider, \"xBkrk5r3hhKgEpMO+HGI7yKr/O8=\");\n\n_c = RecipeProvider;\nconst useRecipeContext = () => {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(RecipeContext);\n};\n\n_s2(useRecipeContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"RecipeProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1JlY2lwZUNvbnRleHQvc3RhdGUuanM/MDY3MCJdLCJuYW1lcyI6WyJSZWNpcGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlJlY2lwZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyZWNpcGVzIiwic2V0UmVjaXBlcyIsInVzZVN0YXRlIiwicmVjaXBlVXJsIiwidXNlRWZmZWN0IiwiZmV0Y2hSZWNpcGVzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZmF2b3JpdGVzIiwiQVBJIiwicmVzIiwiZSIsIkVycm9yIiwic2V0RmF2b3JpdGVzIiwidXNlUmVjaXBlQ29udGV4dCIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLGFBQWEsZ0JBQUdDLDJEQUFhLEVBQW5DLEMsQ0FBdUM7O0FBRWhDLE1BQU1DLGNBQWMsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUFBOztBQUM1QyxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBLFFBQU1DLFNBQVMsR0FBRywrQkFBbEIsQ0FGNEMsQ0FHNUM7QUFDQTs7QUFFQUMseURBQVMsQ0FBRSxNQUFNO0FBQ2IsVUFBTUMsWUFBWSxHQUFHLFlBQVk7QUFDN0IsWUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0osU0FBRCxDQUE1QjtBQUNBLFlBQU1LLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBbkI7QUFFQVIsZ0JBQVUsQ0FBQ08sSUFBRCxDQUFWO0FBQ0gsS0FMRDs7QUFNQUgsZ0JBQVk7QUFDYixHQVJNLEVBUUosRUFSSSxDQUFUOztBQVVFLFFBQU1LLFNBQVMsR0FBRyxNQUFPQyxHQUFQLElBQWU7QUFDL0IsUUFBSTtBQUNILFlBQU1DLEdBQUcsR0FBRyxNQUFNTCxLQUFLLENBQUNJLEdBQUQsQ0FBdkI7QUFDQSxZQUFNSCxJQUFJLEdBQUcsTUFBTUksR0FBRyxDQUFDSCxJQUFKLEVBQW5CO0FBRUMsYUFBT0QsSUFBUDtBQUNBLEtBTEYsQ0FLRyxPQUFPSyxDQUFQLEVBQVU7QUFDVixZQUFNLElBQUlDLEtBQUosQ0FBVUQsQ0FBVixDQUFOO0FBQ0Q7QUFDRixHQVRGO0FBV047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUksc0JBQ0kscUVBQUMsYUFBRCxDQUFlLFFBQWY7QUFBd0IsU0FBSyxFQUFFO0FBQUViLGFBQUY7QUFBV0MsZ0JBQVg7QUFBdUJTLGVBQXZCO0FBQWtDSztBQUFsQyxLQUEvQjtBQUFBLGNBQ0toQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUtILENBNUNNOztHQUFNRCxjOztLQUFBQSxjO0FBOENOLE1BQU1rQixnQkFBZ0IsR0FBRyxNQUFNO0FBQUE7O0FBQ2xDLFNBQU9DLHdEQUFVLENBQUNyQixhQUFELENBQWpCO0FBQ0gsQ0FGTTs7SUFBTW9CLGdCIiwiZmlsZSI6Ii4vc3JjL1JlY2lwZUNvbnRleHQvc3RhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IFJlY2lwZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7IC8vY3JlYXRlcyBhIHN0b3JlXG5cbmV4cG9ydCBjb25zdCBSZWNpcGVQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCBbcmVjaXBlcywgc2V0UmVjaXBlc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgcmVjaXBlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWNpcGVzJ1xuICAgIC8vIGNvbnN0IFtmYXZvcml0ZXMsIHNldEZhdm9yaXRlc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgLy8gY29uc3QgZmF2b3JpdGVSZWNpcGVVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2Zhdm9yaXRlX3JlY2lwZXMnXG5cbiAgICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hSZWNpcGVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZWNpcGVVcmwpXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIFxuICAgICAgICAgICAgc2V0UmVjaXBlcyhkYXRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgZmV0Y2hSZWNpcGVzKCk7XG4gICAgICB9LCBbXSk7XG5cbiAgICAgIGNvbnN0IGZhdm9yaXRlcyA9IGFzeW5jIChBUEkpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKEFQSSk7XG4gICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICBcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUpO1xuICAgICAgICAgfVxuICAgICAgIH1cblxuLypcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hGYXZvcml0ZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZhdm9yaXRlUmVjaXBlVXJsKVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICBzZXRGYXZvcml0ZXMoZGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIGZldGNoRmF2b3JpdGVzKCk7XG4gICAgICB9LCBbXSk7XG4qL1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlY2lwZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgcmVjaXBlcywgc2V0UmVjaXBlcywgZmF2b3JpdGVzLCBzZXRGYXZvcml0ZXMgfX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvUmVjaXBlQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBjb25zdCB1c2VSZWNpcGVDb250ZXh0ID0gKCkgPT4ge1xuICAgIHJldHVybiB1c2VDb250ZXh0KFJlY2lwZUNvbnRleHQpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/RecipeContext/state.js\n");

/***/ })

})