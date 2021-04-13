webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/pages/recipes/[id].js":
/*!***********************************!*\
  !*** ./src/pages/recipes/[id].js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../current_user */ \"./src/current_user.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Components_EditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/EditForm */ \"./src/Components/EditForm.js\");\n/* harmony import */ var _Components_AddToFavorites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/AddToFavorites */ \"./src/Components/AddToFavorites.js\");\n/* harmony import */ var _Components_RemoveFromFavorites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components/RemoveFromFavorites */ \"./src/Components/RemoveFromFavorites.js\");\n/* harmony import */ var _RecipeContext_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../RecipeContext/state */ \"./src/RecipeContext/state.js\");\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/pages/recipes/[id].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst ShowPage = ({\n  recipe\n}) => {\n  _s();\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_2__[\"CURRENT_USER\"];\n  const {\n    recipes,\n    setRecipes,\n    favorites,\n    setFavorites\n  } = Object(_RecipeContext_state__WEBPACK_IMPORTED_MODULE_7__[\"useRecipeContext\"])();\n  const {\n    0: currentRecipe,\n    1: setCurrentRecipe\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(recipe);\n  const {\n    0: editState,\n    1: setEditState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null);\n\n  const editHelper = updatedRecipeObj => {\n    setCurrentRecipe(updatedRecipeObj);\n  };\n\n  const deleteHandler = async recipeId => {\n    const configObj = {\n      method: 'DELETE',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      }\n    };\n    await fetch('http://localhost:3000/recipes/' + recipeId, configObj);\n    const revisedRecipeArray = recipes.filter(recipe => recipe.id !== recipeId);\n    setRecipes(revisedRecipeArray);\n    router.push('http://localhost:3001/recipes');\n  }; //checks to see if this recipe is saved by the user\n\n\n  const recipeSavedByUser = () => {\n    let arr = favorites.filter(favorite => favorite.recipe_liker_id === current_user && favorite.recipe_id === recipe.id);\n    return arr.length === 1 ? true : false;\n  }; //grabs ID of favorite\n\n\n  const userFavorite = () => {\n    let arr = favorites.map(favorite => favorite.recipe_liker_id === current_user && favorite.recipe_id === recipe.id ? favorite.id : null);\n    return arr.length > 0 && parseInt(arr.filter(favorite => favorite !== null));\n  };\n\n  console.log(userFavorite());\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"show-card\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [\"Current User: \", current_user, \" Created By:\", currentRecipe.recipe_creator_id]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: currentRecipe.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: currentRecipe.img_url,\n          style: {\n            height: '250px'\n          },\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 16\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: currentRecipe.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: currentRecipe.ingredients\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: currentRecipe.instructions\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: () => router.push('http://localhost:3001/recipes/'),\n        children: \"Back to Main\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 13\n      }, undefined), current_user === recipe.recipe_creator_id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => setEditState(!editState),\n          children: \"Edit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => deleteHandler(currentRecipe.id),\n          children: \"Delete\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true), current_user !== recipe.recipe_creator_id && recipeSavedByUser() && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_RemoveFromFavorites__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          userFavorite: userFavorite(),\n          recipe: recipe\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false), current_user !== recipe.recipe_creator_id && !recipeSavedByUser() && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_AddToFavorites__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          recipe: recipe\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false), editState === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_EditForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        setEditState: setEditState,\n        recipe: recipe,\n        editHelper: editHelper\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 35\n      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false);\n};\n\n_s(ShowPage, \"INfP6DatjV9iOEvcn8LV0C80bzY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"], _RecipeContext_state__WEBPACK_IMPORTED_MODULE_7__[\"useRecipeContext\"]];\n});\n\n_c = ShowPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShowPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ShowPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlY2lwZXMvLmpzPzJkYWQiXSwibmFtZXMiOlsiU2hvd1BhZ2UiLCJyZWNpcGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJyZWNpcGVzIiwic2V0UmVjaXBlcyIsImZhdm9yaXRlcyIsInNldEZhdm9yaXRlcyIsInVzZVJlY2lwZUNvbnRleHQiLCJjdXJyZW50UmVjaXBlIiwic2V0Q3VycmVudFJlY2lwZSIsInVzZVN0YXRlIiwiZWRpdFN0YXRlIiwic2V0RWRpdFN0YXRlIiwiZWRpdEhlbHBlciIsInVwZGF0ZWRSZWNpcGVPYmoiLCJkZWxldGVIYW5kbGVyIiwicmVjaXBlSWQiLCJjb25maWdPYmoiLCJtZXRob2QiLCJoZWFkZXJzIiwiZmV0Y2giLCJyZXZpc2VkUmVjaXBlQXJyYXkiLCJmaWx0ZXIiLCJpZCIsInB1c2giLCJyZWNpcGVTYXZlZEJ5VXNlciIsImFyciIsImZhdm9yaXRlIiwicmVjaXBlX2xpa2VyX2lkIiwicmVjaXBlX2lkIiwibGVuZ3RoIiwidXNlckZhdm9yaXRlIiwibWFwIiwicGFyc2VJbnQiLCJjb25zb2xlIiwibG9nIiwicmVjaXBlX2NyZWF0b3JfaWQiLCJ0aXRsZSIsImltZ191cmwiLCJoZWlnaHQiLCJkZXNjcmlwdGlvbiIsImluZ3JlZGllbnRzIiwiaW5zdHJ1Y3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBZ0NBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFnQjtBQUFBOztBQUM3QixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHQywwREFBckI7QUFDQSxRQUFNO0FBQUNDLFdBQUQ7QUFBVUMsY0FBVjtBQUFzQkMsYUFBdEI7QUFBaUNDO0FBQWpDLE1BQWlEQyw2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RUFFd0NPLHFFOzs7S0FIckRWLFE7O0FBMkVTQSx1RUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9yZWNpcGVzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IENVUlJFTlRfVVNFUiB9IGZyb20gJy4uLy4uL2N1cnJlbnRfdXNlcidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRWRpdEZvcm0gZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9FZGl0Rm9ybSdcbmltcG9ydCBBZGRUb0Zhdm9yaXRlcyBmcm9tICcuLi8uLi9Db21wb25lbnRzL0FkZFRvRmF2b3JpdGVzJ1xuaW1wb3J0IFJlbW92ZUZyb21GYXZvcml0ZXMgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9SZW1vdmVGcm9tRmF2b3JpdGVzJ1xuaW1wb3J0IHsgdXNlUmVjaXBlQ29udGV4dCB9IGZyb20gJy4uLy4uL1JlY2lwZUNvbnRleHQvc3RhdGUnXG5cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWNpcGVzJylcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcChyZWNpcGUgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiByZWNpcGUuaWQudG9TdHJpbmcoKSB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHMsXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSAvLyByZWRpcmVjdHMgdG8gNDA0IHBhZ2VcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgaWQgPSBjb250ZXh0LnBhcmFtcy5pZDsgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlY2lwZXMvJyArIGlkKVxuICAgIGNvbnN0IHJlY2lwZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7IFxuICAgICAgICAgICAgcmVjaXBlXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuY29uc3QgU2hvd1BhZ2UgPSAoeyByZWNpcGUgfSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgY3VycmVudF91c2VyID0gQ1VSUkVOVF9VU0VSXG4gICAgY29uc3Qge3JlY2lwZXMsIHNldFJlY2lwZXMsIGZhdm9yaXRlcywgc2V0RmF2b3JpdGVzfSA9IHVzZVJlY2lwZUNvbnRleHQoKTtcbiAgICBjb25zdCBbY3VycmVudFJlY2lwZSwgc2V0Q3VycmVudFJlY2lwZV0gPSB1c2VTdGF0ZShyZWNpcGUpXG4gICAgY29uc3QgW2VkaXRTdGF0ZSwgc2V0RWRpdFN0YXRlXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICBjb25zdCBlZGl0SGVscGVyID0gKHVwZGF0ZWRSZWNpcGVPYmopID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFJlY2lwZSh1cGRhdGVkUmVjaXBlT2JqKVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUhhbmRsZXIgPSBhc3luYyAocmVjaXBlSWQpID0+IHtcbiAgICAgICAgY29uc3QgY29uZmlnT2JqID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVjaXBlcy8nICsgcmVjaXBlSWQsIGNvbmZpZ09iailcbiAgICAgICAgY29uc3QgcmV2aXNlZFJlY2lwZUFycmF5ID0gcmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS5pZCAhPT0gcmVjaXBlSWQpXG4gICAgICAgIHNldFJlY2lwZXMocmV2aXNlZFJlY2lwZUFycmF5KVxuICAgICAgICByb3V0ZXIucHVzaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3JlY2lwZXMnKVxuICAgIH1cbiAgICBcbiAgICAvL2NoZWNrcyB0byBzZWUgaWYgdGhpcyByZWNpcGUgaXMgc2F2ZWQgYnkgdGhlIHVzZXJcbiAgICBjb25zdCByZWNpcGVTYXZlZEJ5VXNlciA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFyciA9IGZhdm9yaXRlcy5maWx0ZXIoZmF2b3JpdGUgPT4gZmF2b3JpdGUucmVjaXBlX2xpa2VyX2lkID09PSBjdXJyZW50X3VzZXIgJiYgZmF2b3JpdGUucmVjaXBlX2lkID09PSByZWNpcGUuaWQpXG4gICAgICAgIHJldHVybiBhcnIubGVuZ3RoID09PSAxID8gdHJ1ZSA6IGZhbHNlXG4gICAgfVxuXG4gICAgLy9ncmFicyBJRCBvZiBmYXZvcml0ZVxuICAgIGNvbnN0IHVzZXJGYXZvcml0ZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFyciA9IGZhdm9yaXRlcy5tYXAoZmF2b3JpdGUgPT4gZmF2b3JpdGUucmVjaXBlX2xpa2VyX2lkID09PSBjdXJyZW50X3VzZXIgJiYgZmF2b3JpdGUucmVjaXBlX2lkID09PSByZWNpcGUuaWQgPyBmYXZvcml0ZS5pZCA6IG51bGwpXG4gICAgICAgIHJldHVybiBhcnIubGVuZ3RoID4gMCAmJiBwYXJzZUludChhcnIuZmlsdGVyKGZhdm9yaXRlID0+IGZhdm9yaXRlICE9PSBudWxsKSlcbiAgICB9XG4gICAgY29uc29sZS5sb2codXNlckZhdm9yaXRlKCkpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD4gXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1jYXJkXCI+XG4gICAgICAgICAgICA8cD5DdXJyZW50IFVzZXI6IHtjdXJyZW50X3VzZXJ9IENyZWF0ZWQgQnk6e2N1cnJlbnRSZWNpcGUucmVjaXBlX2NyZWF0b3JfaWR9PC9wPlxuICAgICAgICAgICAgPGgxPntjdXJyZW50UmVjaXBlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8cD48aW1nIHNyYz17Y3VycmVudFJlY2lwZS5pbWdfdXJsfSBzdHlsZT17e2hlaWdodDonMjUwcHgnfX0gYWx0PScnIC8+PC9wPlxuICAgICAgICAgICAgPHA+e2N1cnJlbnRSZWNpcGUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPHA+e2N1cnJlbnRSZWNpcGUuaW5ncmVkaWVudHN9PC9wPlxuICAgICAgICAgICAgPHA+e2N1cnJlbnRSZWNpcGUuaW5zdHJ1Y3Rpb25zfTwvcD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9yZWNpcGVzLycpfT5CYWNrIHRvIE1haW48L2J1dHRvbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgey8qIEVkaXQgLyBEZWxldGUgYnV0dG9ucyBvbmx5IGFwcGVhciBpZiBjdXJyZW50IHVzZXIgaXMgdGhlIGNyZWF0b3IgKi99ICAgICAgICAgICAgXG4gICAgICAgICAgICB7Y3VycmVudF91c2VyID09PSByZWNpcGUucmVjaXBlX2NyZWF0b3JfaWQgJiZcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEVkaXRTdGF0ZSghZWRpdFN0YXRlKX0+RWRpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUhhbmRsZXIoY3VycmVudFJlY2lwZS5pZCl9PkRlbGV0ZTwvYnV0dG9uPiBcbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgey8qIElmIG5vdCBjdXJyZW50IHVzZXIgYW5kIGN1cnJlbnQgcmVjaXBlIGlzIHNhdmVkIGJ5IHVzZXIsIGdpdmUgb3B0aW9uIHRvIHVuc2F2ZSAqL31cbiAgICAgICAgICAgIHtjdXJyZW50X3VzZXIgIT09IHJlY2lwZS5yZWNpcGVfY3JlYXRvcl9pZCAmJiByZWNpcGVTYXZlZEJ5VXNlcigpICYmXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUZyb21GYXZvcml0ZXMgdXNlckZhdm9yaXRlPXt1c2VyRmF2b3JpdGUoKX0gcmVjaXBlPXtyZWNpcGV9Lz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAge2N1cnJlbnRfdXNlciAhPT0gcmVjaXBlLnJlY2lwZV9jcmVhdG9yX2lkICYmICFyZWNpcGVTYXZlZEJ5VXNlcigpICYmXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPEFkZFRvRmF2b3JpdGVzIHJlY2lwZT17cmVjaXBlfS8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHtlZGl0U3RhdGUgPT09IHRydWUgPyA8RWRpdEZvcm0gc2V0RWRpdFN0YXRlPXtzZXRFZGl0U3RhdGV9IGtleT17cmVjaXBlLmlkfSByZWNpcGU9e3JlY2lwZX0gZWRpdEhlbHBlcj17ZWRpdEhlbHBlcn0gLz4gOiA8PjwvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvd1BhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/recipes/[id].js\n");

/***/ })

})