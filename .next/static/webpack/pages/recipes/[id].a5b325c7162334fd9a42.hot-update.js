webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/pages/recipes/[id].js":
/*!***********************************!*\
  !*** ./src/pages/recipes/[id].js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../current_user */ \"./src/current_user.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Components_EditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/EditForm */ \"./src/Components/EditForm.js\");\n/* harmony import */ var _Components_AddToFavorites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/AddToFavorites */ \"./src/Components/AddToFavorites.js\");\n/* harmony import */ var _Components_RemoveFromFavorites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components/RemoveFromFavorites */ \"./src/Components/RemoveFromFavorites.js\");\n/* harmony import */ var _RecipeContext_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../RecipeContext/state */ \"./src/RecipeContext/state.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/colors */ \"./node_modules/@material-ui/core/esm/colors/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/pages/recipes/[id].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst ShowPage = ({\n  recipe\n}) => {\n  _s();\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_2__[\"CURRENT_USER\"];\n  const {\n    recipes,\n    setRecipes,\n    favorites\n  } = Object(_RecipeContext_state__WEBPACK_IMPORTED_MODULE_7__[\"useRecipeContext\"])();\n  const {\n    0: currentRecipe,\n    1: setCurrentRecipe\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(recipe);\n  const {\n    0: editState,\n    1: setEditState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null);\n\n  const editHelper = updatedRecipeObj => {\n    setCurrentRecipe(updatedRecipeObj);\n  };\n\n  const deleteHandler = async recipeId => {\n    const configObj = {\n      method: 'DELETE',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      }\n    };\n    await fetch('http://localhost:3000/recipes/' + recipeId, configObj);\n    const revisedRecipeArray = recipes.filter(recipe => recipe.id !== recipeId);\n    setRecipes(revisedRecipeArray);\n    router.push('http://localhost:3001/recipes');\n  }; //checks to see if this recipe is saved by the user\n\n\n  const recipeSavedByUser = () => {\n    let arr = favorites.filter(favorite => favorite.recipe_liker_id === current_user && favorite.recipe_id === recipe.id);\n    return arr.length === 1 ? true : false;\n  }; //grabs ID of favorite\n\n\n  const userFavorite = () => {\n    let arr = favorites.map(favorite => favorite.recipe_liker_id === current_user && favorite.recipe_id === recipe.id ? favorite.id : null);\n    return arr.length > 0 && parseInt(arr.filter(favorite => favorite !== null));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"show-card\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [\"Current User: \", current_user, \" Created By:\", currentRecipe.recipe_creator_id]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: currentRecipe.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: currentRecipe.img_url,\n          style: {\n            height: '250px'\n          },\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 16\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: currentRecipe.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: currentRecipe.ingredients\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: currentRecipe.instructions\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: () => router.push('http://localhost:3001/recipes/'),\n        children: \"Back to Main\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 13\n      }, undefined), current_user === recipe.recipe_creator_id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => setEditState(!editState),\n          children: \"Edit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => deleteHandler(currentRecipe.id),\n          children: \"Delete\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true), current_user !== recipe.recipe_creator_id && recipeSavedByUser() && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_RemoveFromFavorites__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          userFavorite: userFavorite(),\n          recipe: recipe\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false), current_user !== recipe.recipe_creator_id && !recipeSavedByUser() && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_AddToFavorites__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          recipe: recipe\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false), editState === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_EditForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        setEditState: setEditState,\n        recipe: recipe,\n        editHelper: editHelper,\n        formType: \"Edit\"\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 35\n      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false);\n};\n\n_s(ShowPage, \"vzd/X6LrAJ9bdU6jXaBtf1i1g0c=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"], _RecipeContext_state__WEBPACK_IMPORTED_MODULE_7__[\"useRecipeContext\"]];\n});\n\n_c = ShowPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShowPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ShowPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlY2lwZXMvLmpzPzJkYWQiXSwibmFtZXMiOlsiU2hvd1BhZ2UiLCJyZWNpcGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJyZWNpcGVzIiwic2V0UmVjaXBlcyIsImZhdm9yaXRlcyIsInVzZVJlY2lwZUNvbnRleHQiLCJjdXJyZW50UmVjaXBlIiwic2V0Q3VycmVudFJlY2lwZSIsInVzZVN0YXRlIiwiZWRpdFN0YXRlIiwic2V0RWRpdFN0YXRlIiwiZWRpdEhlbHBlciIsInVwZGF0ZWRSZWNpcGVPYmoiLCJkZWxldGVIYW5kbGVyIiwicmVjaXBlSWQiLCJjb25maWdPYmoiLCJtZXRob2QiLCJoZWFkZXJzIiwiZmV0Y2giLCJyZXZpc2VkUmVjaXBlQXJyYXkiLCJmaWx0ZXIiLCJpZCIsInB1c2giLCJyZWNpcGVTYXZlZEJ5VXNlciIsImFyciIsImZhdm9yaXRlIiwicmVjaXBlX2xpa2VyX2lkIiwicmVjaXBlX2lkIiwibGVuZ3RoIiwidXNlckZhdm9yaXRlIiwibWFwIiwicGFyc2VJbnQiLCJyZWNpcGVfY3JlYXRvcl9pZCIsInRpdGxlIiwiaW1nX3VybCIsImhlaWdodCIsImRlc2NyaXB0aW9uIiwiaW5ncmVkaWVudHMiLCJpbnN0cnVjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQStCQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZ0I7QUFBQTs7QUFDN0IsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU1DLFlBQVksR0FBR0MsMERBQXJCO0FBQ0EsUUFBTTtBQUFDQyxXQUFEO0FBQVVDLGNBQVY7QUFBc0JDO0FBQXRCLE1BQW1DQyw2RUFBZ0IsRUFBekQ7QUFDQSxRQUFN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L3BhZ2VzL3JlY2lwZXMvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSIH0gZnJvbSAnLi4vLi4vY3VycmVudF91c2VyJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBFZGl0Rm9ybSBmcm9tICcuLi8uLi9Db21wb25lbnRzL0VkaXRGb3JtJ1xuaW1wb3J0IEFkZFRvRmF2b3JpdGVzIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvQWRkVG9GYXZvcml0ZXMnXG5pbXBvcnQgUmVtb3ZlRnJvbUZhdm9yaXRlcyBmcm9tICcuLi8uLi9Db21wb25lbnRzL1JlbW92ZUZyb21GYXZvcml0ZXMnXG5pbXBvcnQgeyB1c2VSZWNpcGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vUmVjaXBlQ29udGV4dC9zdGF0ZSdcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lLCB3aXRoU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB7IGdyZWVuLCBwdXJwbGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnO1xuXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVjaXBlcycpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnN0IHBhdGhzID0gZGF0YS5tYXAocmVjaXBlID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhcmFtczogeyBpZDogcmVjaXBlLmlkLnRvU3RyaW5nKCkgfVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzLFxuICAgICAgICBmYWxsYmFjazogZmFsc2UgLy8gcmVkaXJlY3RzIHRvIDQwNCBwYWdlXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMuaWQ7IFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWNpcGVzLycgKyBpZClcbiAgICBjb25zdCByZWNpcGUgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyBcbiAgICAgICAgICAgIHJlY2lwZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBTaG93UGFnZSA9ICh7IHJlY2lwZSB9KSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBjdXJyZW50X3VzZXIgPSBDVVJSRU5UX1VTRVJcbiAgICBjb25zdCB7cmVjaXBlcywgc2V0UmVjaXBlcywgZmF2b3JpdGVzfSA9IHVzZVJlY2lwZUNvbnRleHQoKTtcbiAgICBjb25zdCBbY3VycmVudFJlY2lwZSwgc2V0Q3VycmVudFJlY2lwZV0gPSB1c2VTdGF0ZShyZWNpcGUpXG4gICAgY29uc3QgW2VkaXRTdGF0ZSwgc2V0RWRpdFN0YXRlXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICBjb25zdCBlZGl0SGVscGVyID0gKHVwZGF0ZWRSZWNpcGVPYmopID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFJlY2lwZSh1cGRhdGVkUmVjaXBlT2JqKVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUhhbmRsZXIgPSBhc3luYyAocmVjaXBlSWQpID0+IHtcbiAgICAgICAgY29uc3QgY29uZmlnT2JqID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVjaXBlcy8nICsgcmVjaXBlSWQsIGNvbmZpZ09iailcbiAgICAgICAgY29uc3QgcmV2aXNlZFJlY2lwZUFycmF5ID0gcmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS5pZCAhPT0gcmVjaXBlSWQpXG4gICAgICAgIHNldFJlY2lwZXMocmV2aXNlZFJlY2lwZUFycmF5KVxuICAgICAgICByb3V0ZXIucHVzaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3JlY2lwZXMnKVxuICAgIH1cbiAgICBcbiAgICAvL2NoZWNrcyB0byBzZWUgaWYgdGhpcyByZWNpcGUgaXMgc2F2ZWQgYnkgdGhlIHVzZXJcbiAgICBjb25zdCByZWNpcGVTYXZlZEJ5VXNlciA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFyciA9IGZhdm9yaXRlcy5maWx0ZXIoZmF2b3JpdGUgPT4gZmF2b3JpdGUucmVjaXBlX2xpa2VyX2lkID09PSBjdXJyZW50X3VzZXIgJiYgZmF2b3JpdGUucmVjaXBlX2lkID09PSByZWNpcGUuaWQpXG4gICAgICAgIHJldHVybiBhcnIubGVuZ3RoID09PSAxID8gdHJ1ZSA6IGZhbHNlXG4gICAgfVxuXG4gICAgLy9ncmFicyBJRCBvZiBmYXZvcml0ZVxuICAgIGNvbnN0IHVzZXJGYXZvcml0ZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFyciA9IGZhdm9yaXRlcy5tYXAoZmF2b3JpdGUgPT4gZmF2b3JpdGUucmVjaXBlX2xpa2VyX2lkID09PSBjdXJyZW50X3VzZXIgJiYgZmF2b3JpdGUucmVjaXBlX2lkID09PSByZWNpcGUuaWQgPyBmYXZvcml0ZS5pZCA6IG51bGwpXG4gICAgICAgIHJldHVybiBhcnIubGVuZ3RoID4gMCAmJiBwYXJzZUludChhcnIuZmlsdGVyKGZhdm9yaXRlID0+IGZhdm9yaXRlICE9PSBudWxsKSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PiBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LWNhcmRcIj5cbiAgICAgICAgICAgIDxwPkN1cnJlbnQgVXNlcjoge2N1cnJlbnRfdXNlcn0gQ3JlYXRlZCBCeTp7Y3VycmVudFJlY2lwZS5yZWNpcGVfY3JlYXRvcl9pZH08L3A+XG4gICAgICAgICAgICA8aDE+e2N1cnJlbnRSZWNpcGUudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxwPjxpbWcgc3JjPXtjdXJyZW50UmVjaXBlLmltZ191cmx9IHN0eWxlPXt7aGVpZ2h0OicyNTBweCd9fSBhbHQ9JycgLz48L3A+XG4gICAgICAgICAgICA8cD57Y3VycmVudFJlY2lwZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8cD57Y3VycmVudFJlY2lwZS5pbmdyZWRpZW50c308L3A+XG4gICAgICAgICAgICA8cD57Y3VycmVudFJlY2lwZS5pbnN0cnVjdGlvbnN9PC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3JlY2lwZXMvJyl9PkJhY2sgdG8gTWFpbjwvYnV0dG9uPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7LyogRWRpdCAvIERlbGV0ZSBidXR0b25zIG9ubHkgYXBwZWFyIGlmIGN1cnJlbnQgdXNlciBpcyB0aGUgY3JlYXRvciAqL30gICAgICAgICAgICBcbiAgICAgICAgICAgIHtjdXJyZW50X3VzZXIgPT09IHJlY2lwZS5yZWNpcGVfY3JlYXRvcl9pZCAmJlxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RWRpdFN0YXRlKCFlZGl0U3RhdGUpfT5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSGFuZGxlcihjdXJyZW50UmVjaXBlLmlkKX0+RGVsZXRlPC9idXR0b24+IFxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB7LyogSWYgbm90IGN1cnJlbnQgdXNlciBhbmQgY3VycmVudCByZWNpcGUgaXMgc2F2ZWQgYnkgdXNlciwgZ2l2ZSBvcHRpb24gdG8gdW5zYXZlICovfVxuICAgICAgICAgICAge2N1cnJlbnRfdXNlciAhPT0gcmVjaXBlLnJlY2lwZV9jcmVhdG9yX2lkICYmIHJlY2lwZVNhdmVkQnlVc2VyKCkgJiZcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlRnJvbUZhdm9yaXRlcyBcbiAgICAgICAgICAgICAgICAgICAgdXNlckZhdm9yaXRlPXt1c2VyRmF2b3JpdGUoKX0gXG4gICAgICAgICAgICAgICAgICAgIHJlY2lwZT17cmVjaXBlfS8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHsvKiBJZiBub3QgY3VycmVudCB1c2VyIGFuZCBjdXJyZW50IHJlY2lwZSBpcyBzYXZlZCBieSB1c2VyLCBnaXZlIG9wdGlvbiB0byBzYXZlICovfVxuICAgICAgICAgICAge2N1cnJlbnRfdXNlciAhPT0gcmVjaXBlLnJlY2lwZV9jcmVhdG9yX2lkICYmICFyZWNpcGVTYXZlZEJ5VXNlcigpICYmXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPEFkZFRvRmF2b3JpdGVzIFxuICAgICAgICAgICAgICAgICAgICByZWNpcGU9e3JlY2lwZX0vPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB7LyogdG9nZ2xlIGVkaXQgc3RhdGUgaWYgYnV0dG9uIGlzIGNsaWNrZWQgb24gYW5kIHNob3cgZm9ybSAqL31cbiAgICAgICAgICAgIHtlZGl0U3RhdGUgPT09IHRydWUgPyA8RWRpdEZvcm0gXG4gICAgICAgICAgICAgICAgc2V0RWRpdFN0YXRlPXtzZXRFZGl0U3RhdGV9IFxuICAgICAgICAgICAgICAgIGtleT17cmVjaXBlLmlkfSBcbiAgICAgICAgICAgICAgICByZWNpcGU9e3JlY2lwZX0gXG4gICAgICAgICAgICAgICAgZWRpdEhlbHBlcj17ZWRpdEhlbHBlcn0gXG4gICAgICAgICAgICAgICAgZm9ybVR5cGU9XCJFZGl0XCIgLz4gXG4gICAgICAgICAgICAgICAgOiBcbiAgICAgICAgICAgICAgICA8PjwvPlxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG93UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/recipes/[id].js\n");

/***/ })

})