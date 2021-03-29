webpackHotUpdate_N_E("pages/saved_recipes",{

/***/ "./src/Containers/MySavedRecipes.js":
/*!******************************************!*\
  !*** ./src/Containers/MySavedRecipes.js ***!
  \******************************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MySavedRecipes; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components_SavedRecipeCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/SavedRecipeCard */ \"./src/Components/SavedRecipeCard.js\");\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Containers/MySavedRecipes.js\";\n// import { useState, useEffect } from 'react'\n\nconst getStaticProps = async () => {\n  const res = await fetch('http://localhost:3000/favorite_recipes');\n  const data = await res.json();\n  return {\n    props: {\n      recipes: data\n    }\n  };\n};\nfunction MySavedRecipes() {\n  /*\n  const [savedRecipes, setSavedRecipes]  = useState([]);\n  const savedRecipeUrl = 'http://localhost:3000/favorite_recipes'\n   useEffect ( () => {\n      const fetchSavedRecipes = async () => {\n          const response = await fetch(savedRecipeUrl)\n          const json = await response.json()\n          setSavedRecipes(json)\n      }\n      fetchSavedRecipes();\n  }, []);\n   */\n  // const savedRecipeCard = () => {\n  //     return savedRecipes.map((recipes => <SavedRecipeCard key={recipes.id} data={recipes} />))\n  // }\n  // console.log(savedRecipes)\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: recipes.map(recipe => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          children: recipe.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 25\n        }, this)\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 21\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this)\n  }, void 0, false);\n}\n_c = MySavedRecipes;\n\nvar _c;\n\n$RefreshReg$(_c, \"MySavedRecipes\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbnRhaW5lcnMvTXlTYXZlZFJlY2lwZXMuanM/MjgxZCJdLCJuYW1lcyI6WyJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwcm9wcyIsInJlY2lwZXMiLCJNeVNhdmVkUmVjaXBlcyIsIm1hcCIsInJlY2lwZSIsInRpdGxlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNQSxjQUFjLEdBQUcsWUFBWTtBQUN0QyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLHdDQUFELENBQXZCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUFuQjtBQUVBLFNBQU87QUFDSEMsU0FBSyxFQUFFO0FBQUVDLGFBQU8sRUFBRUg7QUFBWDtBQURKLEdBQVA7QUFHSCxDQVBNO0FBU1EsU0FBU0ksY0FBVCxHQUEyQjtBQUV0QztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJSTtBQUNBO0FBQ0E7QUFFQTtBQUNBLHNCQUNJO0FBQUEsMkJBQ0k7QUFBQSxnQkFDS0QsT0FBTyxDQUFDRSxHQUFSLENBQVlDLE1BQU0saUJBQ2Y7QUFBQSwrQkFDSTtBQUFBLG9CQUNLQSxNQUFNLENBQUNDO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFNBQVVELE1BQU0sQ0FBQ0UsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBY0g7S0FwQ3VCSixjIiwiZmlsZSI6Ii4vc3JjL0NvbnRhaW5lcnMvTXlTYXZlZFJlY2lwZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU2F2ZWRSZWNpcGVDYXJkIGZyb20gJy4uL0NvbXBvbmVudHMvU2F2ZWRSZWNpcGVDYXJkJ1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9mYXZvcml0ZV9yZWNpcGVzJyk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyByZWNpcGVzOiBkYXRhIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15U2F2ZWRSZWNpcGVzICgpIHtcblxuICAgIC8qXG4gICAgY29uc3QgW3NhdmVkUmVjaXBlcywgc2V0U2F2ZWRSZWNpcGVzXSAgPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3Qgc2F2ZWRSZWNpcGVVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2Zhdm9yaXRlX3JlY2lwZXMnXG5cbiAgICB1c2VFZmZlY3QgKCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoU2F2ZWRSZWNpcGVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzYXZlZFJlY2lwZVVybClcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIHNldFNhdmVkUmVjaXBlcyhqc29uKVxuICAgICAgICB9XG4gICAgICAgIGZldGNoU2F2ZWRSZWNpcGVzKCk7XG4gICAgfSwgW10pO1xuXG4gICAgKi9cbiAgICBcbiAgICAvLyBjb25zdCBzYXZlZFJlY2lwZUNhcmQgPSAoKSA9PiB7XG4gICAgLy8gICAgIHJldHVybiBzYXZlZFJlY2lwZXMubWFwKChyZWNpcGVzID0+IDxTYXZlZFJlY2lwZUNhcmQga2V5PXtyZWNpcGVzLmlkfSBkYXRhPXtyZWNpcGVzfSAvPikpXG4gICAgLy8gfVxuICAgIFxuICAgIC8vIGNvbnNvbGUubG9nKHNhdmVkUmVjaXBlcylcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7cmVjaXBlcy5tYXAocmVjaXBlID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3JlY2lwZS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVjaXBlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIHtzYXZlZFJlY2lwZUNhcmQoKX0gKi99XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Containers/MySavedRecipes.js\n");

/***/ })

})