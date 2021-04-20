webpackHotUpdate_N_E("pages/recipes",{

/***/ "./src/Components/RecipeList.js":
/*!**************************************!*\
  !*** ./src/Components/RecipeList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RecipeList; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _RecipeItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecipeItem */ \"./src/Components/RecipeItem.js\");\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar */ \"./src/Components/SearchBar.js\");\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/RecipeList.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction RecipeList({\n  recipes,\n  favorites,\n  currentSelection\n}) {\n  _s();\n\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_3__[\"CURRENT_USER\"];\n  const {\n    0: searchValue,\n    1: setSearchValue\n  } = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])('');\n\n  const searchHandler = e => {\n    setSearchValue(e.target.value); //   console.log(e.target.value)\n  };\n\n  const searchRecipes = () => {\n    return recipes.filter(recipe => recipe.title.toLowerCase().includes(searchValue.toLowerCase()));\n  }; //filter out recipes the user has created\n\n\n  const myCreatedRecipes = () => {\n    return recipes.filter(recipe => recipe.recipe_creator_id === current_user);\n  }; //filter out recipes that i have liked\n\n\n  const myFavoriteRecipes = () => {\n    return favorites.filter(favorite => favorite.recipe_liker_id === current_user);\n  }; //map recipe_ids i have liked\n\n\n  const mapFavoriteRecipeIds = () => {\n    return myFavoriteRecipes().map(favorite => favorite.recipe_id);\n  };\n\n  const selection = currentSelection.state; //render conditions based on selection\n\n  const recipeCard = () => {\n    if (selection === 'created') {\n      return myCreatedRecipes().map(recipe => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RecipeItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        recipes: recipe\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, this));\n    } else if (selection === 'all' || selection === undefined) {\n      return recipes.map(recipe => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RecipeItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        recipes: recipe\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, this));\n    } else if (selection === 'saved') {\n      return recipes.map(recipe => {\n        if (mapFavoriteRecipeIds().includes(recipe.id)) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RecipeItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            recipes: recipe\n          }, recipe.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 28\n          }, this);\n        } else {\n          return null;\n        }\n      });\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      textAlign: 'center'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SearchBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      searchHandler: searchHandler,\n      searchValue: searchValue\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"cards\",\n      children: recipeCard()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 9\n  }, this);\n}\n\n_s(RecipeList, \"HM3Ln43XRFR/2uR77U2yFU1TAX4=\");\n\n_c = RecipeList;\n\nvar _c;\n\n$RefreshReg$(_c, \"RecipeList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUmVjaXBlTGlzdC5qcz82M2Y5Il0sIm5hbWVzIjpbIlJlY2lwZUxpc3QiLCJyZWNpcGVzIiwiZmF2b3JpdGVzIiwiY3VycmVudFNlbGVjdGlvbiIsImN1cnJlbnRfdXNlciIsIkNVUlJFTlRfVVNFUiIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJ1c2VTdGF0ZSIsInNlYXJjaEhhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2hSZWNpcGVzIiwiZmlsdGVyIiwicmVjaXBlIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibXlDcmVhdGVkUmVjaXBlcyIsInJlY2lwZV9jcmVhdG9yX2lkIiwibXlGYXZvcml0ZVJlY2lwZXMiLCJmYXZvcml0ZSIsInJlY2lwZV9saWtlcl9pZCIsIm1hcEZhdm9yaXRlUmVjaXBlSWRzIiwibWFwIiwicmVjaXBlX2lkIiwic2VsZWN0aW9uIiwic3RhdGUiLCJyZWNpcGVDYXJkIiwiaWQiLCJ1bmRlZmluZWQiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULENBQXFCO0FBQUVDLFNBQUY7QUFBV0MsV0FBWDtBQUFzQkM7QUFBdEIsQ0FBckIsRUFBK0Q7QUFBQTs7QUFDMUUsUUFBTUMsWUFBWSxHQUFHQywwREFBckI7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NDLHNEQUFRLENBQUMsRUFBRCxDQUE5Qzs7QUFFQSxRQUFNQyxhQUFhLEdBQUlDLENBQUQsSUFBTztBQUMzQkgsa0JBQWMsQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZCxDQUQyQixDQUU3QjtBQUNDLEdBSEQ7O0FBS0EsUUFBTUMsYUFBYSxHQUFHLE1BQU07QUFDeEIsV0FBT1osT0FBTyxDQUFDYSxNQUFSLENBQWVDLE1BQU0sSUFDeEJBLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhQyxXQUFiLEdBQTJCQyxRQUEzQixDQUFvQ1osV0FBVyxDQUFDVyxXQUFaLEVBQXBDLENBREcsQ0FBUDtBQUVILEdBSEQsQ0FWMEUsQ0FlMUU7OztBQUNBLFFBQU1FLGdCQUFnQixHQUFHLE1BQU07QUFDM0IsV0FBT2xCLE9BQU8sQ0FBQ2EsTUFBUixDQUFlQyxNQUFNLElBQUlBLE1BQU0sQ0FBQ0ssaUJBQVAsS0FBNkJoQixZQUF0RCxDQUFQO0FBQ0gsR0FGRCxDQWhCMEUsQ0FvQjFFOzs7QUFDQSxRQUFNaUIsaUJBQWlCLEdBQUcsTUFBTTtBQUM1QixXQUFPbkIsU0FBUyxDQUFDWSxNQUFWLENBQWlCUSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsZUFBVCxLQUE2Qm5CLFlBQTFELENBQVA7QUFDSCxHQUZELENBckIwRSxDQXlCMUU7OztBQUNBLFFBQU1vQixvQkFBb0IsR0FBRyxNQUFNO0FBQy9CLFdBQU9ILGlCQUFpQixHQUFHSSxHQUFwQixDQUF3QkgsUUFBUSxJQUFJQSxRQUFRLENBQUNJLFNBQTdDLENBQVA7QUFDSCxHQUZEOztBQUlBLFFBQU1DLFNBQVMsR0FBR3hCLGdCQUFnQixDQUFDeUIsS0FBbkMsQ0E5QjBFLENBK0IxRTs7QUFDQSxRQUFNQyxVQUFVLEdBQUcsTUFBTTtBQUNyQixRQUFHRixTQUFTLEtBQUssU0FBakIsRUFBNEI7QUFDeEIsYUFBT1IsZ0JBQWdCLEdBQUdNLEdBQW5CLENBQXVCVixNQUFNLGlCQUNoQyxxRUFBQyxtREFBRDtBQUE0QixlQUFPLEVBQUVBO0FBQXJDLFNBQWlCQSxNQUFNLENBQUNlLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERyxDQUFQO0FBRUgsS0FIRCxNQUdPLElBQUlILFNBQVMsS0FBSyxLQUFkLElBQXVCQSxTQUFTLEtBQUtJLFNBQXpDLEVBQW9EO0FBQ3ZELGFBQU85QixPQUFPLENBQUN3QixHQUFSLENBQVlWLE1BQU0saUJBQ3JCLHFFQUFDLG1EQUFEO0FBQTRCLGVBQU8sRUFBRUE7QUFBckMsU0FBaUJBLE1BQU0sQ0FBQ2UsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURHLENBQVA7QUFFSCxLQUhNLE1BR0EsSUFBSUgsU0FBUyxLQUFLLE9BQWxCLEVBQTJCO0FBQzlCLGFBQU8xQixPQUFPLENBQUN3QixHQUFSLENBQVlWLE1BQU0sSUFBSTtBQUN6QixZQUFHUyxvQkFBb0IsR0FBR04sUUFBdkIsQ0FBZ0NILE1BQU0sQ0FBQ2UsRUFBdkMsQ0FBSCxFQUE4QztBQUMxQyw4QkFBTyxxRUFBQyxtREFBRDtBQUE0QixtQkFBTyxFQUFFZjtBQUFyQyxhQUFpQkEsTUFBTSxDQUFDZSxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsaUJBQU8sSUFBUDtBQUNIO0FBQ0osT0FOTSxDQUFQO0FBT0g7QUFDSixHQWhCRDs7QUFrQkEsc0JBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBQ0UsZUFBUyxFQUFFO0FBQVosS0FBWjtBQUFBLDRCQUNJLHFFQUFDLGtEQUFEO0FBQVcsbUJBQWEsRUFBRXZCLGFBQTFCO0FBQXlDLGlCQUFXLEVBQUVIO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQSxnQkFDS3VCLFVBQVU7QUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFRSDs7R0ExRHVCN0IsVTs7S0FBQUEsVSIsImZpbGUiOiIuL3NyYy9Db21wb25lbnRzL1JlY2lwZUxpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVjaXBlSXRlbSBmcm9tICcuL1JlY2lwZUl0ZW0nXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vU2VhcmNoQmFyJ1xuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSIH0gZnJvbSAnLi4vY3VycmVudF91c2VyJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlTGlzdCAoeyByZWNpcGVzLCBmYXZvcml0ZXMsIGN1cnJlbnRTZWxlY3Rpb24gfSkge1xuICAgIGNvbnN0IGN1cnJlbnRfdXNlciA9IENVUlJFTlRfVVNFUlxuXG4gICAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZSgnJylcblxuICAgIGNvbnN0IHNlYXJjaEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgc2V0U2VhcmNoVmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICAgIC8vICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gICAgfTtcbiAgXG4gICAgY29uc3Qgc2VhcmNoUmVjaXBlcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiBcbiAgICAgICAgICAgIHJlY2lwZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpKVxuICAgIH1cblxuICAgIC8vZmlsdGVyIG91dCByZWNpcGVzIHRoZSB1c2VyIGhhcyBjcmVhdGVkXG4gICAgY29uc3QgbXlDcmVhdGVkUmVjaXBlcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiByZWNpcGUucmVjaXBlX2NyZWF0b3JfaWQgPT09IGN1cnJlbnRfdXNlcilcbiAgICB9XG5cbiAgICAvL2ZpbHRlciBvdXQgcmVjaXBlcyB0aGF0IGkgaGF2ZSBsaWtlZFxuICAgIGNvbnN0IG15RmF2b3JpdGVSZWNpcGVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZmF2b3JpdGVzLmZpbHRlcihmYXZvcml0ZSA9PiBmYXZvcml0ZS5yZWNpcGVfbGlrZXJfaWQgPT09IGN1cnJlbnRfdXNlcilcbiAgICB9XG5cbiAgICAvL21hcCByZWNpcGVfaWRzIGkgaGF2ZSBsaWtlZFxuICAgIGNvbnN0IG1hcEZhdm9yaXRlUmVjaXBlSWRzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbXlGYXZvcml0ZVJlY2lwZXMoKS5tYXAoZmF2b3JpdGUgPT4gZmF2b3JpdGUucmVjaXBlX2lkKVxuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IGN1cnJlbnRTZWxlY3Rpb24uc3RhdGVcbiAgICAvL3JlbmRlciBjb25kaXRpb25zIGJhc2VkIG9uIHNlbGVjdGlvblxuICAgIGNvbnN0IHJlY2lwZUNhcmQgPSAoKSA9PiB7XG4gICAgICAgIGlmKHNlbGVjdGlvbiA9PT0gJ2NyZWF0ZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbXlDcmVhdGVkUmVjaXBlcygpLm1hcChyZWNpcGUgPT4gXG4gICAgICAgICAgICAgICAgPFJlY2lwZUl0ZW0ga2V5PXtyZWNpcGUuaWR9IHJlY2lwZXM9e3JlY2lwZX0gLz4pXG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uID09PSAnYWxsJyB8fCBzZWxlY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlY2lwZXMubWFwKHJlY2lwZSA9PiBcbiAgICAgICAgICAgICAgICA8UmVjaXBlSXRlbSBrZXk9e3JlY2lwZS5pZH0gcmVjaXBlcz17cmVjaXBlfSAvPilcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3Rpb24gPT09ICdzYXZlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiByZWNpcGVzLm1hcChyZWNpcGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmKG1hcEZhdm9yaXRlUmVjaXBlSWRzKCkuaW5jbHVkZXMocmVjaXBlLmlkKSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8UmVjaXBlSXRlbSBrZXk9e3JlY2lwZS5pZH0gcmVjaXBlcz17cmVjaXBlfSAvPlxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+XG4gICAgICAgICAgICA8U2VhcmNoQmFyIHNlYXJjaEhhbmRsZXI9e3NlYXJjaEhhbmRsZXJ9IHNlYXJjaFZhbHVlPXtzZWFyY2hWYWx1ZX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNcIj5cbiAgICAgICAgICAgICAgICB7cmVjaXBlQ2FyZCgpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/RecipeList.js\n");

/***/ })

})