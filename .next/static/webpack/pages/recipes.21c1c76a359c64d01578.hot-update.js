webpackHotUpdate_N_E("pages/recipes",{

/***/ "./src/Components/RecipeList.js":
/*!**************************************!*\
  !*** ./src/Components/RecipeList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RecipeList; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _RecipeItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecipeItem */ \"./src/Components/RecipeItem.js\");\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar */ \"./src/Components/SearchBar.js\");\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/RecipeList.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction RecipeList({\n  recipes,\n  favorites,\n  currentSelection\n}) {\n  _s();\n\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_3__[\"CURRENT_USER\"];\n  const {\n    0: searchValue,\n    1: setSearchValue\n  } = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])('');\n\n  const searchHandler = e => {\n    setSearchValue(e.target.value);\n  };\n\n  const searchRecipes = () => {\n    return recipes.filter(recipe => recipe.title.toLowerCase().includes(searchValue.toLowerCase()));\n  };\n\n  const searchFavorites = () => {\n    return favorites.filter(recipe => recipe.title.toLowerCase().includes(searchValue.toLowerCase()));\n  }; // t.boolean \"favorited\"\n  // t.bigint \"recipe_id\", null: false\n  // t.bigint \"recipe_liker_id\"\n  // t.datetime \"created_at\", precision: 6, null: false\n  // t.datetime \"updated_at\", precision: 6, null: false\n  // t.string \"recipe_name\"\n  // t.string \"recipe_img\"\n  //filter out recipes the user has created\n\n\n  const myCreatedRecipes = () => {\n    return searchRecipes().filter(recipe => recipe.recipe_creator_id === current_user);\n  }; //filter out recipes that i have liked\n\n\n  const myFavoriteRecipes = () => {\n    return favorites.filter(favorite => favorite.recipe_liker_id === current_user);\n  }; //map recipe_ids i have liked\n\n\n  const mapFavoriteRecipeIds = () => {\n    return myFavoriteRecipes().map(favorite => favorite.recipe_id);\n  };\n\n  const selection = currentSelection.state; //render conditions based on selection\n\n  const recipeCard = () => {\n    if (selection === 'created') {\n      return myCreatedRecipes().map(recipe => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RecipeItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        recipes: recipe\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, this));\n    } else if (selection === 'all' || selection === undefined) {\n      return searchRecipes().map(recipe => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RecipeItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        recipes: recipe\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, this));\n    } else if (selection === 'saved') {\n      return recipes.map(recipe => {\n        if (mapFavoriteRecipeIds().includes(recipe.id)) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RecipeItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            recipes: recipe\n          }, recipe.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 28\n          }, this);\n        } else {\n          return null;\n        }\n      });\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      textAlign: 'center'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SearchBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      searchHandler: searchHandler,\n      searchValue: searchValue\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"cards\",\n      children: recipeCard()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 9\n  }, this);\n}\n\n_s(RecipeList, \"HM3Ln43XRFR/2uR77U2yFU1TAX4=\");\n\n_c = RecipeList;\n\nvar _c;\n\n$RefreshReg$(_c, \"RecipeList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUmVjaXBlTGlzdC5qcz82M2Y5Il0sIm5hbWVzIjpbIlJlY2lwZUxpc3QiLCJyZWNpcGVzIiwiZmF2b3JpdGVzIiwiY3VycmVudFNlbGVjdGlvbiIsImN1cnJlbnRfdXNlciIsIkNVUlJFTlRfVVNFUiIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJ1c2VTdGF0ZSIsInNlYXJjaEhhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2hSZWNpcGVzIiwiZmlsdGVyIiwicmVjaXBlIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2VhcmNoRmF2b3JpdGVzIiwibXlDcmVhdGVkUmVjaXBlcyIsInJlY2lwZV9jcmVhdG9yX2lkIiwibXlGYXZvcml0ZVJlY2lwZXMiLCJmYXZvcml0ZSIsInJlY2lwZV9saWtlcl9pZCIsIm1hcEZhdm9yaXRlUmVjaXBlSWRzIiwibWFwIiwicmVjaXBlX2lkIiwic2VsZWN0aW9uIiwic3RhdGUiLCJyZWNpcGVDYXJkIiwiaWQiLCJ1bmRlZmluZWQiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULENBQXFCO0FBQUVDLFNBQUY7QUFBV0MsV0FBWDtBQUFzQkM7QUFBdEIsQ0FBckIsRUFBK0Q7QUFBQTs7QUFDMUUsUUFBTUMsWUFBWSxHQUFHQywwREFBckI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NDLHNEQUFRLENBQUMsRUFBRCxDQUE5Qzs7QUFFQSxRQUFNQyxhQUFhLEdBQUlDLENBQUQsSUFBTztBQUMzQkgsa0JBQWMsQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUNELEdBRkQ7O0FBSUEsUUFBTUMsYUFBYSxHQUFHLE1BQU07QUFDeEIsV0FBT1osT0FBTyxDQUFDYSxNQUFSLENB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ZUxpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVjaXBlSXRlbSBmcm9tICcuL1JlY2lwZUl0ZW0nXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vU2VhcmNoQmFyJ1xuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSIH0gZnJvbSAnLi4vY3VycmVudF91c2VyJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlTGlzdCAoeyByZWNpcGVzLCBmYXZvcml0ZXMsIGN1cnJlbnRTZWxlY3Rpb24gfSkge1xuICAgIGNvbnN0IGN1cnJlbnRfdXNlciA9IENVUlJFTlRfVVNFUlxuICAgIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoJycpXG5cbiAgICBjb25zdCBzZWFyY2hIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgIHNldFNlYXJjaFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuICBcbiAgICBjb25zdCBzZWFyY2hSZWNpcGVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpKVxuICAgIH1cblxuICAgIGNvbnN0IHNlYXJjaEZhdm9yaXRlcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZhdm9yaXRlcy5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpKVxuICAgIH1cblxuICAgIC8vIHQuYm9vbGVhbiBcImZhdm9yaXRlZFwiXG4gICAgLy8gdC5iaWdpbnQgXCJyZWNpcGVfaWRcIiwgbnVsbDogZmFsc2VcbiAgICAvLyB0LmJpZ2ludCBcInJlY2lwZV9saWtlcl9pZFwiXG4gICAgLy8gdC5kYXRldGltZSBcImNyZWF0ZWRfYXRcIiwgcHJlY2lzaW9uOiA2LCBudWxsOiBmYWxzZVxuICAgIC8vIHQuZGF0ZXRpbWUgXCJ1cGRhdGVkX2F0XCIsIHByZWNpc2lvbjogNiwgbnVsbDogZmFsc2VcbiAgICAvLyB0LnN0cmluZyBcInJlY2lwZV9uYW1lXCJcbiAgICAvLyB0LnN0cmluZyBcInJlY2lwZV9pbWdcIlxuXG4gICAgLy9maWx0ZXIgb3V0IHJlY2lwZXMgdGhlIHVzZXIgaGFzIGNyZWF0ZWRcbiAgICBjb25zdCBteUNyZWF0ZWRSZWNpcGVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2VhcmNoUmVjaXBlcygpLmZpbHRlcihyZWNpcGUgPT4gcmVjaXBlLnJlY2lwZV9jcmVhdG9yX2lkID09PSBjdXJyZW50X3VzZXIpXG4gICAgfVxuXG4gICAgLy9maWx0ZXIgb3V0IHJlY2lwZXMgdGhhdCBpIGhhdmUgbGlrZWRcbiAgICBjb25zdCBteUZhdm9yaXRlUmVjaXBlcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZhdm9yaXRlcy5maWx0ZXIoZmF2b3JpdGUgPT4gZmF2b3JpdGUucmVjaXBlX2xpa2VyX2lkID09PSBjdXJyZW50X3VzZXIpXG4gICAgfVxuXG4gICAgLy9tYXAgcmVjaXBlX2lkcyBpIGhhdmUgbGlrZWRcbiAgICBjb25zdCBtYXBGYXZvcml0ZVJlY2lwZUlkcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG15RmF2b3JpdGVSZWNpcGVzKCkubWFwKGZhdm9yaXRlID0+IGZhdm9yaXRlLnJlY2lwZV9pZClcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3Rpb24gPSBjdXJyZW50U2VsZWN0aW9uLnN0YXRlXG4gICAgLy9yZW5kZXIgY29uZGl0aW9ucyBiYXNlZCBvbiBzZWxlY3Rpb25cbiAgICBjb25zdCByZWNpcGVDYXJkID0gKCkgPT4ge1xuICAgICAgICBpZihzZWxlY3Rpb24gPT09ICdjcmVhdGVkJykge1xuICAgICAgICAgICAgcmV0dXJuIG15Q3JlYXRlZFJlY2lwZXMoKS5tYXAocmVjaXBlID0+IFxuICAgICAgICAgICAgICAgIDxSZWNpcGVJdGVtIGtleT17cmVjaXBlLmlkfSByZWNpcGVzPXtyZWNpcGV9IC8+KVxuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGlvbiA9PT0gJ2FsbCcgfHwgc2VsZWN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWFyY2hSZWNpcGVzKCkubWFwKHJlY2lwZSA9PiBcbiAgICAgICAgICAgICAgICA8UmVjaXBlSXRlbSBrZXk9e3JlY2lwZS5pZH0gcmVjaXBlcz17cmVjaXBlfSAvPilcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3Rpb24gPT09ICdzYXZlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiByZWNpcGVzLm1hcChyZWNpcGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmKG1hcEZhdm9yaXRlUmVjaXBlSWRzKCkuaW5jbHVkZXMocmVjaXBlLmlkKSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8UmVjaXBlSXRlbSBrZXk9e3JlY2lwZS5pZH0gcmVjaXBlcz17cmVjaXBlfSAvPlxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxTZWFyY2hCYXIgc2VhcmNoSGFuZGxlcj17c2VhcmNoSGFuZGxlcn0gc2VhcmNoVmFsdWU9e3NlYXJjaFZhbHVlfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkc1wiPlxuICAgICAgICAgICAgICAgIHtyZWNpcGVDYXJkKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/RecipeList.js\n");

/***/ })

})