webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/pages/recipes/[id].js":
/*!***********************************!*\
  !*** ./src/pages/recipes/[id].js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../current_user */ \"./src/current_user.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Components_EditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/EditForm */ \"./src/Components/EditForm.js\");\n/* harmony import */ var _RecipeContext_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../RecipeContext/state */ \"./src/RecipeContext/state.js\");\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/pages/recipes/[id].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ShowPage = ({\n  recipe\n}) => {\n  _s();\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_2__[\"CURRENT_USER\"];\n  const {\n    recipes,\n    setRecipes,\n    favorites,\n    setFavorites\n  } = Object(_RecipeContext_state__WEBPACK_IMPORTED_MODULE_5__[\"useRecipeContext\"])();\n  const {\n    0: currentRecipe,\n    1: setCurrentRecipe\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(recipe);\n  const {\n    0: editState,\n    1: setEditState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null);\n\n  const editHelper = updatedRecipeObj => {\n    setCurrentRecipe(updatedRecipeObj);\n  };\n\n  const deleteHandler = async recipeId => {\n    const configObj = {\n      method: 'DELETE',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      }\n    };\n    await fetch('http://localhost:3000/recipes/' + recipeId, configObj);\n    const revisedRecipeArray = recipes.filter(recipe => recipe.id !== recipeId);\n    setRecipes(revisedRecipeArray);\n    router.push('http://localhost:3001/recipes');\n  };\n\n  const isUserFavorite = () => {\n    let arr = favorites.filter(favorite => favorite.recipe_liker_id === current_user && favorite.recipe_id === recipe.id);\n    return !favorites && arr.length;\n  };\n\n  console.log('isuserfavorite', isUserFavorite());\n  const {\n    0: savedRecipe,\n    1: setSavedRecipe\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(isUserFavorite());\n  console.log(isUserFavorite());\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"show-card\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: currentRecipe.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: currentRecipe.img_url,\n          style: {\n            height: '250px'\n          },\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 16\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: currentRecipe.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: currentRecipe.ingredients\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: currentRecipe.instructions\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: () => router.push('http://localhost:3001/recipes/'),\n        children: \"Back to Main\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 13\n      }, undefined), current_user === recipe.recipe_creator_id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => setEditState(!editState),\n          children: \"Edit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => deleteHandler(currentRecipe.id),\n          children: \"Delete\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => console.log(\"save!\"),\n          children: \"Save\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false), editState === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_EditForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        setEditState: setEditState,\n        recipe: recipe,\n        editHelper: editHelper\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 35\n      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false);\n};\n\n_s(ShowPage, \"LkpGkZheBG9ssI/5IbEPBUxU2v8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"], _RecipeContext_state__WEBPACK_IMPORTED_MODULE_5__[\"useRecipeContext\"]];\n});\n\n_c = ShowPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShowPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ShowPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlY2lwZXMvLmpzPzJkYWQiXSwibmFtZXMiOlsiU2hvd1BhZ2UiLCJyZWNpcGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJyZWNpcGVzIiwic2V0UmVjaXBlcyIsImZhdm9yaXRlcyIsInNldEZhdm9yaXRlcyIsInVzZVJlY2lwZUNvbnRleHQiLCJjdXJyZW50UmVjaXBlIiwic2V0Q3VycmVudFJlY2lwZSIsInVzZVN0YXRlIiwiZWRpdFN0YXRlIiwic2V0RWRpdFN0YXRlIiwiZWRpdEhlbHBlciIsInVwZGF0ZWRSZWNpcGVPYmoiLCJkZWxldGVIYW5kbGVyIiwicmVjaXBlSWQiLCJjb25maWdPYmoiLCJtZXRob2QiLCJoZWFkZXJzIiwiZmV0Y2giLCJyZXZpc2VkUmVjaXBlQXJyYXkiLCJmaWx0ZXIiLCJpZCIsInB1c2giLCJpc1VzZXJGYXZvcml0ZSIsImFyciIsImZhdm9yaXRlIiwicmVjaXBlX2xpa2VyX2lkIiwicmVjaXBlX2lkIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInNhdmVkUmVjaXBlIiwic2V0U2F2ZWRSZWNpcGUiLCJ0aXRsZSIsImltZ191cmwiLCJoZWlnaHQiLCJkZXNjcmlwdGlvbiIsImluZ3JlZGllbnRzIiwiaW5zdHJ1Y3Rpb25zIiwicmVjaXBlX2NyZWF0b3JfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUErQkEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdCO0FBQUE7O0FBQzdCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNQyxZQUFZLEdBQUdDLDBEQUFyQjtBQUNBLFFBQU07QUFBQ0MsV0FBRDtBQUFVQyxjQUFWO0FBQXNCQyxhQUF0QjtBQUFpQ0M7QUFBakMsTUFBaURDLDZFQUFnQixFQUF2RTtBQUNB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QUVJO0FBQVEsaUJBQU8sRUFBRSxNQUFNUSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkosdUJBZlIsRUFvQktyQixTQUFTLEtBQUssSUFBZCxnQkFBcUIscUVBQUMsNERBQUQ7QUFBVSxvQkFBWSxFQUFFQyxZQUF4QjtBQUFzRCxjQUFNLEVBQUVkLE1BQTlEO0FBQXNFLGtCQUFVLEVBQUVlO0FBQWxGLFNBQTJDZixNQUFNLENBQUN5QixFQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFyQixnQkFBd0gsdUpBcEI3SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFESjtBQTBCSCxDQTdERDs7R0FBTTFCLFE7VUFDYUcscUQsRUFFd0NPLHFFOzs7S0FIckRWLFE7O0FBK0RTQSx1RUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9yZWNpcGVzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IENVUlJFTlRfVVNFUiB9IGZyb20gJy4uLy4uL2N1cnJlbnRfdXNlcidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRWRpdEZvcm0gZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9FZGl0Rm9ybSdcbmltcG9ydCB7IHVzZVJlY2lwZUNvbnRleHQgfSBmcm9tICcuLi8uLi9SZWNpcGVDb250ZXh0L3N0YXRlJ1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlY2lwZXMnKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zdCBwYXRocyA9IGRhdGEubWFwKHJlY2lwZSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXJhbXM6IHsgaWQ6IHJlY2lwZS5pZC50b1N0cmluZygpIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRocyxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlIC8vIHJlZGlyZWN0cyB0byA0MDQgcGFnZVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkOyBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVjaXBlcy8nICsgaWQpXG4gICAgY29uc3QgcmVjaXBlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHsgXG4gICAgICAgICAgICByZWNpcGVcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5jb25zdCBTaG93UGFnZSA9ICh7IHJlY2lwZSB9KSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBjdXJyZW50X3VzZXIgPSBDVVJSRU5UX1VTRVJcbiAgICBjb25zdCB7cmVjaXBlcywgc2V0UmVjaXBlcywgZmF2b3JpdGVzLCBzZXRGYXZvcml0ZXN9ID0gdXNlUmVjaXBlQ29udGV4dCgpO1xuICAgIGNvbnN0IFtjdXJyZW50UmVjaXBlLCBzZXRDdXJyZW50UmVjaXBlXSA9IHVzZVN0YXRlKHJlY2lwZSlcbiAgICBjb25zdCBbZWRpdFN0YXRlLCBzZXRFZGl0U3RhdGVdID0gdXNlU3RhdGUobnVsbClcblxuICAgIGNvbnN0IGVkaXRIZWxwZXIgPSAodXBkYXRlZFJlY2lwZU9iaikgPT4ge1xuICAgICAgICBzZXRDdXJyZW50UmVjaXBlKHVwZGF0ZWRSZWNpcGVPYmopXG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlSGFuZGxlciA9IGFzeW5jIChyZWNpcGVJZCkgPT4ge1xuICAgICAgICBjb25zdCBjb25maWdPYmogPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWNpcGVzLycgKyByZWNpcGVJZCwgY29uZmlnT2JqKVxuICAgICAgICBjb25zdCByZXZpc2VkUmVjaXBlQXJyYXkgPSByZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4gcmVjaXBlLmlkICE9PSByZWNpcGVJZClcbiAgICAgICAgc2V0UmVjaXBlcyhyZXZpc2VkUmVjaXBlQXJyYXkpXG4gICAgICAgIHJvdXRlci5wdXNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvcmVjaXBlcycpXG4gICAgfVxuXG4gICAgICAgIGNvbnN0IGlzVXNlckZhdm9yaXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBhcnIgPSBmYXZvcml0ZXMuZmlsdGVyKGZhdm9yaXRlID0+IGZhdm9yaXRlLnJlY2lwZV9saWtlcl9pZCA9PT0gY3VycmVudF91c2VyICYmIGZhdm9yaXRlLnJlY2lwZV9pZCA9PT0gcmVjaXBlLmlkKVxuICAgICAgICAgICAgICAgIHJldHVybiAhZmF2b3JpdGVzICYmIGFyci5sZW5ndGhcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnaXN1c2VyZmF2b3JpdGUnLCBpc1VzZXJGYXZvcml0ZSgpKVxuXG4gICAgICAgIGNvbnN0IFtzYXZlZFJlY2lwZSwgc2V0U2F2ZWRSZWNpcGVdID0gdXNlU3RhdGUoaXNVc2VyRmF2b3JpdGUoKSlcblxuICAgICAgICBjb25zb2xlLmxvZyhpc1VzZXJGYXZvcml0ZSgpKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD4gXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1jYXJkXCI+XG4gICAgICAgICAgICA8aDE+e2N1cnJlbnRSZWNpcGUudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxwPjxpbWcgc3JjPXtjdXJyZW50UmVjaXBlLmltZ191cmx9IHN0eWxlPXt7aGVpZ2h0OicyNTBweCd9fSBhbHQ9JycgLz48L3A+XG4gICAgICAgICAgICA8cD57Y3VycmVudFJlY2lwZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8cD57Y3VycmVudFJlY2lwZS5pbmdyZWRpZW50c308L3A+XG4gICAgICAgICAgICA8cD57Y3VycmVudFJlY2lwZS5pbnN0cnVjdGlvbnN9PC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3JlY2lwZXMvJyl9PkJhY2sgdG8gTWFpbjwvYnV0dG9uPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7LyogRWRpdCAvIERlbGV0ZSBidXR0b25zIG9ubHkgYXBwZWFyIGlmIGN1cnJlbnQgdXNlciBpcyB0aGUgY3JlYXRvciAqL30gICAgICAgICAgICBcbiAgICAgICAgICAgIHtjdXJyZW50X3VzZXIgPT09IHJlY2lwZS5yZWNpcGVfY3JlYXRvcl9pZCA/IFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RWRpdFN0YXRlKCFlZGl0U3RhdGUpfT5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSGFuZGxlcihjdXJyZW50UmVjaXBlLmlkKX0+RGVsZXRlPC9idXR0b24+IFxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIDogXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxTYXZlQnV0dG9uIHJlY2lwZT17cmVjaXBlfSBrZXk9e3JlY2lwZS5pZH0gLz4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXCJzYXZlIVwiKX0+U2F2ZTwvYnV0dG9uPiBcbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtlZGl0U3RhdGUgPT09IHRydWUgPyA8RWRpdEZvcm0gc2V0RWRpdFN0YXRlPXtzZXRFZGl0U3RhdGV9IGtleT17cmVjaXBlLmlkfSByZWNpcGU9e3JlY2lwZX0gZWRpdEhlbHBlcj17ZWRpdEhlbHBlcn0gLz4gOiA8PjwvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvd1BhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/recipes/[id].js\n");

/***/ })

})