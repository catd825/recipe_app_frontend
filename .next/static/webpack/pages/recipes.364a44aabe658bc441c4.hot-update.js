webpackHotUpdate_N_E("pages/recipes",{

/***/ "./src/Components/RecipeList.js":
/*!**************************************!*\
  !*** ./src/Components/RecipeList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RecipeList; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _RecipeItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecipeItem */ \"./src/Components/RecipeItem.js\");\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar */ \"./src/Components/SearchBar.js\");\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/RecipeList.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction RecipeList({\n  recipes,\n  favorites,\n  currentSelection\n}) {\n  _s();\n\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_3__[\"CURRENT_USER\"];\n  const {\n    0: searchValue,\n    1: setSearchValue\n  } = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])('');\n\n  const searchHandler = e => {\n    setSearchValue(e.target.value);\n  };\n\n  const searchRecipes = () => {\n    return recipes.filter(recipe => recipe.title.toLowerCase().includes(searchValue.toLowerCase()));\n  };\n\n  const searchFavorites = () => {\n    return favorites.filter(recipe => recipe.recipe_name.toLowerCase().includes(searchValue.toLowerCase()));\n  }; // t.boolean \"favorited\"\n  // t.bigint \"recipe_id\", null: false\n  // t.bigint \"recipe_liker_id\"\n  // t.datetime \"created_at\", precision: 6, null: false\n  // t.datetime \"updated_at\", precision: 6, null: false\n  // t.string \"recipe_name\"\n  // t.string \"recipe_img\"\n  //filter out recipes the user has created\n\n\n  const myCreatedRecipes = () => {\n    return searchRecipes().filter(recipe => recipe.recipe_creator_id === current_user);\n  }; //filter out recipes that i have liked\n\n\n  const myFavoriteRecipes = () => {\n    return searchFavorites().filter(favorite => favorite.recipe_liker_id === current_user);\n  }; //map recipe_ids i have liked\n\n\n  const mapFavoriteRecipeIds = () => {\n    return myFavoriteRecipes().map(favorite => favorite.recipe_id);\n  };\n\n  const selection = currentSelection.state; //render conditions based on selection\n\n  const recipeCard = () => {\n    if (selection === 'created') {\n      return myCreatedRecipes().map(recipe => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RecipeItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        recipes: recipe\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, this));\n    } else if (selection === 'all' || selection === undefined) {\n      return searchRecipes().map(recipe => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RecipeItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        recipes: recipe\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, this));\n    } else if (selection === 'saved') {\n      return recipes.map(recipe => {\n        if (mapFavoriteRecipeIds().includes(recipe.id)) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RecipeItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            recipes: recipe\n          }, recipe.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 28\n          }, this);\n        } else {\n          return null;\n        }\n      });\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      textAlign: 'center'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SearchBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      searchHandler: searchHandler,\n      searchValue: searchValue\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"cards\",\n      children: recipeCard()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 9\n  }, this);\n}\n\n_s(RecipeList, \"HM3Ln43XRFR/2uR77U2yFU1TAX4=\");\n\n_c = RecipeList;\n\nvar _c;\n\n$RefreshReg$(_c, \"RecipeList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUmVjaXBlTGlzdC5qcz82M2Y5Il0sIm5hbWVzIjpbIlJlY2lwZUxpc3QiLCJyZWNpcGVzIiwiZmF2b3JpdGVzIiwiY3VycmVudFNlbGVjdGlvbiIsImN1cnJlbnRfdXNlciIsIkNVUlJFTlRfVVNFUiIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJ1c2VTdGF0ZSIsInNlYXJjaEhhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2hSZWNpcGVzIiwiZmlsdGVyIiwicmVjaXBlIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2VhcmNoRmF2b3JpdGVzIiwicmVjaXBlX25hbWUiLCJteUNyZWF0ZWRSZWNpcGVzIiwicmVjaXBlX2NyZWF0b3JfaWQiLCJteUZhdm9yaXRlUmVjaXBlcyIsImZhdm9yaXRlIiwicmVjaXBlX2xpa2VyX2lkIiwibWFwRmF2b3JpdGVSZWNpcGVJZHMiLCJtYXAiLCJyZWNpcGVfaWQiLCJzZWxlY3Rpb24iLCJzdGF0ZSIsInJlY2lwZUNhcmQiLCJpZCIsInVuZGVmaW5lZCIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFVBQVQsQ0FBcUI7QUFBRUMsU0FBRjtBQUFXQyxXQUFYO0FBQXNCQztBQUF0QixDQUFyQixFQUErRDtBQUFBOztBQUMxRSxRQUFNQyxZQUFZLEdBQUdDLDBEQUFyQjtBQUNBLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Msc0RBQVEsQ0FBQyxFQUFELENBQTlDOztBQUVBLFFBQU1DLGFBQWEsR0FBSUMsQ0FBRCxJQUFPO0FBQzNCSCxrQkFBYyxDQUFDRyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQ0QsR0FGRDs7QUFJQSxRQUFNQyxhQUFhLEdBQUcsTUFBTTtBQUN4QixXQUFPWixPQUFPLENBQUNhLE1BQVIsQ0FBZUMsTUFBTSxJQUFJQSxNQUFNLENBQUNDLEtBQVAsQ0FBYUMsV0FBYixHQUEyQkMsUUFBM0IsQ0FBb0NaLFdBQVcsQ0FBQ1csV0FBWixFQUFwQyxDQUF6QixDQUFQO0FBQ0gsR0FGRDs7QUFJQSxRQUFNRSxlQUFlLEdBQUcsTUFBTTtBQUMxQixXQUFPakIsU0FBUyxDQUFDWSxNQUFWLENBQWlCQyxNQUFNLElBQUlBLE1BQU0sQ0FBQ0ssV0FBUCxDQUFtQkgsV0FBbkIsR0FBaUNDLFFBQWpDLENBQTBDWixXQUFXLENBQUNXLFdBQVosRUFBMUMsQ0FBM0IsQ0FBUDtBQUNILEdBRkQsQ0FaMEUsQ0FnQjFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUNBLFFBQU1JLGdCQUFnQixHQUFHLE1BQU07QUFDM0IsV0FBT1IsYUFBYSxHQUFHQyxNQUFoQixDQUF1QkMsTUFBTSxJQUFJQSxNQUFNLENBQUNPLGlCQUFQLEtBQTZCbEIsWUFBOUQsQ0FBUDtBQUNILEdBRkQsQ0F6QjBFLENBNkIxRTs7O0FBQ0EsUUFBTW1CLGlCQUFpQixHQUFHLE1BQU07QUFDNUIsV0FBT0osZUFBZSxHQUFHTCxNQUFsQixDQUF5QlUsUUFBUSxJQUFJQSxRQUFRLENBQUNDLGVBQVQsS0FBNkJyQixZQUFsRSxDQUFQO0FBQ0gsR0FGRCxDQTlCMEUsQ0FrQzFFOzs7QUFDQSxRQUFNc0Isb0JBQW9CLEdBQUcsTUFBTTtBQUMvQixXQUFPSCxpQkFBaUIsR0FBR0ksR0FBcEIsQ0FBd0JILFFBQVEsSUFBSUEsUUFBUSxDQUFDSSxTQUE3QyxDQUFQO0FBQ0gsR0FGRDs7QUFJQSxRQUFNQyxTQUFTLEdBQUcxQixnQkFBZ0IsQ0FBQzJCLEtBQW5DLENBdkMwRSxDQXdDMUU7O0FBQ0EsUUFBTUMsVUFBVSxHQUFHLE1BQU07QUFDckIsUUFBR0YsU0FBUyxLQUFLLFNBQWpCLEVBQTRCO0FBQ3hCLGFBQU9SLGdCQUFnQixHQUFHTSxHQUFuQixDQUF1QlosTUFBTSxpQkFDaEMscUVBQUMsbURBQUQ7QUFBNEIsZUFBTyxFQUFFQTtBQUFyQyxTQUFpQkEsTUFBTSxDQUFDaUIsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURHLENBQVA7QUFFSCxLQUhELE1BR08sSUFBSUgsU0FBUyxLQUFLLEtBQWQsSUFBdUJBLFNBQVMsS0FBS0ksU0FBekMsRUFBb0Q7QUFDdkQsYUFBT3BCLGFBQWEsR0FBR2MsR0FBaEIsQ0FBb0JaLE1BQU0saUJBQzdCLHFFQUFDLG1EQUFEO0FBQTRCLGVBQU8sRUFBRUE7QUFBckMsU0FBaUJBLE1BQU0sQ0FBQ2lCLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERyxDQUFQO0FBRUgsS0FITSxNQUdBLElBQUlILFNBQVMsS0FBSyxPQUFsQixFQUEyQjtBQUM5QixhQUFPNUIsT0FBTyxDQUFDMEIsR0FBUixDQUFZWixNQUFNLElBQUk7QUFDekIsWUFBR1csb0JBQW9CLEdBQUdSLFFBQXZCLENBQWdDSCxNQUFNLENBQUNpQixFQUF2QyxDQUFILEVBQThDO0FBQzFDLDhCQUFPLHFFQUFDLG1EQUFEO0FBQTRCLG1CQUFPLEVBQUVqQjtBQUFyQyxhQUFpQkEsTUFBTSxDQUFDaUIsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBUDtBQUNILFNBRkQsTUFFTztBQUNILGlCQUFPLElBQVA7QUFDSDtBQUNKLE9BTk0sQ0FBUDtBQU9IO0FBQ0osR0FoQkQ7O0FBbUJBLHNCQUNJO0FBQUssU0FBSyxFQUFFO0FBQUNFLGVBQVMsRUFBRTtBQUFaLEtBQVo7QUFBQSw0QkFDSSxxRUFBQyxrREFBRDtBQUFXLG1CQUFhLEVBQUV6QixhQUExQjtBQUF5QyxpQkFBVyxFQUFFSDtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUEsZ0JBQ0t5QixVQUFVO0FBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBUUg7O0dBcEV1Qi9CLFU7O0tBQUFBLFUiLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9SZWNpcGVMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlY2lwZUl0ZW0gZnJvbSAnLi9SZWNpcGVJdGVtJ1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuL1NlYXJjaEJhcidcbmltcG9ydCB7IENVUlJFTlRfVVNFUiB9IGZyb20gJy4uL2N1cnJlbnRfdXNlcidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2lwZUxpc3QgKHsgcmVjaXBlcywgZmF2b3JpdGVzLCBjdXJyZW50U2VsZWN0aW9uIH0pIHtcbiAgICBjb25zdCBjdXJyZW50X3VzZXIgPSBDVVJSRU5UX1VTRVJcbiAgICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgY29uc3Qgc2VhcmNoSGFuZGxlciA9IChlKSA9PiB7XG4gICAgICBzZXRTZWFyY2hWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcbiAgXG4gICAgY29uc3Qgc2VhcmNoUmVjaXBlcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiByZWNpcGUudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKSlcbiAgICB9XG5cbiAgICBjb25zdCBzZWFyY2hGYXZvcml0ZXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBmYXZvcml0ZXMuZmlsdGVyKHJlY2lwZSA9PiByZWNpcGUucmVjaXBlX25hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKSlcbiAgICB9XG5cbiAgICAvLyB0LmJvb2xlYW4gXCJmYXZvcml0ZWRcIlxuICAgIC8vIHQuYmlnaW50IFwicmVjaXBlX2lkXCIsIG51bGw6IGZhbHNlXG4gICAgLy8gdC5iaWdpbnQgXCJyZWNpcGVfbGlrZXJfaWRcIlxuICAgIC8vIHQuZGF0ZXRpbWUgXCJjcmVhdGVkX2F0XCIsIHByZWNpc2lvbjogNiwgbnVsbDogZmFsc2VcbiAgICAvLyB0LmRhdGV0aW1lIFwidXBkYXRlZF9hdFwiLCBwcmVjaXNpb246IDYsIG51bGw6IGZhbHNlXG4gICAgLy8gdC5zdHJpbmcgXCJyZWNpcGVfbmFtZVwiXG4gICAgLy8gdC5zdHJpbmcgXCJyZWNpcGVfaW1nXCJcblxuICAgIC8vZmlsdGVyIG91dCByZWNpcGVzIHRoZSB1c2VyIGhhcyBjcmVhdGVkXG4gICAgY29uc3QgbXlDcmVhdGVkUmVjaXBlcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNlYXJjaFJlY2lwZXMoKS5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS5yZWNpcGVfY3JlYXRvcl9pZCA9PT0gY3VycmVudF91c2VyKVxuICAgIH1cblxuICAgIC8vZmlsdGVyIG91dCByZWNpcGVzIHRoYXQgaSBoYXZlIGxpa2VkXG4gICAgY29uc3QgbXlGYXZvcml0ZVJlY2lwZXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzZWFyY2hGYXZvcml0ZXMoKS5maWx0ZXIoZmF2b3JpdGUgPT4gZmF2b3JpdGUucmVjaXBlX2xpa2VyX2lkID09PSBjdXJyZW50X3VzZXIpXG4gICAgfVxuXG4gICAgLy9tYXAgcmVjaXBlX2lkcyBpIGhhdmUgbGlrZWRcbiAgICBjb25zdCBtYXBGYXZvcml0ZVJlY2lwZUlkcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG15RmF2b3JpdGVSZWNpcGVzKCkubWFwKGZhdm9yaXRlID0+IGZhdm9yaXRlLnJlY2lwZV9pZClcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3Rpb24gPSBjdXJyZW50U2VsZWN0aW9uLnN0YXRlXG4gICAgLy9yZW5kZXIgY29uZGl0aW9ucyBiYXNlZCBvbiBzZWxlY3Rpb25cbiAgICBjb25zdCByZWNpcGVDYXJkID0gKCkgPT4ge1xuICAgICAgICBpZihzZWxlY3Rpb24gPT09ICdjcmVhdGVkJykge1xuICAgICAgICAgICAgcmV0dXJuIG15Q3JlYXRlZFJlY2lwZXMoKS5tYXAocmVjaXBlID0+IFxuICAgICAgICAgICAgICAgIDxSZWNpcGVJdGVtIGtleT17cmVjaXBlLmlkfSByZWNpcGVzPXtyZWNpcGV9IC8+KVxuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGlvbiA9PT0gJ2FsbCcgfHwgc2VsZWN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWFyY2hSZWNpcGVzKCkubWFwKHJlY2lwZSA9PiBcbiAgICAgICAgICAgICAgICA8UmVjaXBlSXRlbSBrZXk9e3JlY2lwZS5pZH0gcmVjaXBlcz17cmVjaXBlfSAvPilcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3Rpb24gPT09ICdzYXZlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiByZWNpcGVzLm1hcChyZWNpcGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmKG1hcEZhdm9yaXRlUmVjaXBlSWRzKCkuaW5jbHVkZXMocmVjaXBlLmlkKSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8UmVjaXBlSXRlbSBrZXk9e3JlY2lwZS5pZH0gcmVjaXBlcz17cmVjaXBlfSAvPlxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxTZWFyY2hCYXIgc2VhcmNoSGFuZGxlcj17c2VhcmNoSGFuZGxlcn0gc2VhcmNoVmFsdWU9e3NlYXJjaFZhbHVlfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkc1wiPlxuICAgICAgICAgICAgICAgIHtyZWNpcGVDYXJkKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/RecipeList.js\n");

/***/ })

})