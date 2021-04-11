webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/pages/recipes/[id].js":
/*!***********************************!*\
  !*** ./src/pages/recipes/[id].js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../current_user */ \"./src/current_user.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Components_EditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/EditForm */ \"./src/Components/EditForm.js\");\n/* harmony import */ var _RecipeContext_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../RecipeContext/state */ \"./src/RecipeContext/state.js\");\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/pages/recipes/[id].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ShowPage = ({\n  recipe\n}) => {\n  _s();\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_2__[\"CURRENT_USER\"];\n  const {\n    recipes,\n    setRecipes,\n    favorites,\n    setFavorites\n  } = Object(_RecipeContext_state__WEBPACK_IMPORTED_MODULE_5__[\"useRecipeContext\"])();\n  const {\n    0: currentRecipe,\n    1: setCurrentRecipe\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(recipe);\n  const {\n    0: editState,\n    1: setEditState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null);\n\n  const editHelper = updatedRecipeObj => {\n    setCurrentRecipe(updatedRecipeObj);\n  };\n\n  const deleteHandler = async recipeId => {\n    const configObj = {\n      method: 'DELETE',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      }\n    };\n    await fetch('http://localhost:3000/recipes/' + recipeId, configObj);\n    const revisedRecipeArray = recipes.filter(recipe => recipe.id !== recipeId);\n    setRecipes(revisedRecipeArray);\n    router.push('http://localhost:3001/recipes');\n  };\n  /*\n      const userFavorites = () => {\n          return favorites.filter(favorite => favorite.recipe_liker_id === current_user)\n      }\n       const isRecipeSaved = () => {\n          return favorites.filter(favorite => favorite.recipe_id === recipe.id)\n      }\n       console.log(\"liker id = current user\", userFavorites())\n      console.log(\"recipe id = current recipe\", isRecipeSaved())\n      */\n\n\n  cons;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"show-card\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: currentRecipe.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: currentRecipe.img_url,\n          style: {\n            height: '250px'\n          },\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 16\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: currentRecipe.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: currentRecipe.ingredients\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: currentRecipe.instructions\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: () => router.push('http://localhost:3001/recipes/'),\n        children: \"Back to Main\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 13\n      }, undefined), current_user === recipe.recipe_creator_id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => setEditState(!editState),\n          children: \"Edit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => deleteHandler(currentRecipe.id),\n          children: \"Delete\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => console.log(\"save!\"),\n          children: \"Save\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false), editState === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_EditForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        setEditState: setEditState,\n        recipe: recipe,\n        editHelper: editHelper\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 35\n      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false);\n};\n\n_s(ShowPage, \"INfP6DatjV9iOEvcn8LV0C80bzY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"], _RecipeContext_state__WEBPACK_IMPORTED_MODULE_5__[\"useRecipeContext\"]];\n});\n\n_c = ShowPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShowPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ShowPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlY2lwZXMvLmpzPzJkYWQiXSwibmFtZXMiOlsiU2hvd1BhZ2UiLCJyZWNpcGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJyZWNpcGVzIiwic2V0UmVjaXBlcyIsImZhdm9yaXRlcyIsInNldEZhdm9yaXRlcyIsInVzZVJlY2lwZUNvbnRleHQiLCJjdXJyZW50UmVjaXBlIiwic2V0Q3VycmVudFJlY2lwZSIsInVzZVN0YXRlIiwiZWRpdFN0YXRlIiwic2V0RWRpdFN0YXRlIiwiZWRpdEhlbHBlciIsInVwZGF0ZWRSZWNpcGVPYmoiLCJkZWxldGVIYW5kbGVyIiwicmVjaXBlSWQiLCJjb25maWdPYmoiLCJtZXRob2QiLCJoZWFkZXJzIiwiZmV0Y2giLCJyZXZpc2VkUmVjaXBlQXJyYXkiLCJmaWx0ZXIiLCJpZCIsInB1c2giLCJjb25zIiwidGl0bGUiLCJpbWdfdXJsIiwiaGVpZ2h0IiwiZGVzY3JpcHRpb24iLCJpbmdyZWRpZW50cyIsImluc3RydWN0aW9ucyIsInJlY2lwZV9jcmVhdG9yX2lkIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQStCQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZ0I7QUFBQTs7QUFDN0IsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU1DLFlBQVksR0FBR0MsMERBQXJCO0FBQ0EsUUFBTTtBQUFDQyxXQUFEO0FBQVVDLGNBQVY7QUFBc0JDLGFBQXRCO0FBQWlDQztBQUFqQyxNQUFpREMsNkVBQWdCLEVBQXZFO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NDLHNEQUFRLENBQUNaLE1BQUQsQ0FBbEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ2EsU0FBRDtB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b250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSIH0gZnJvbSAnLi4vLi4vY3VycmVudF91c2VyJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBFZGl0Rm9ybSBmcm9tICcuLi8uLi9Db21wb25lbnRzL0VkaXRGb3JtJ1xuaW1wb3J0IHsgdXNlUmVjaXBlQ29udGV4dCB9IGZyb20gJy4uLy4uL1JlY2lwZUNvbnRleHQvc3RhdGUnXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVjaXBlcycpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnN0IHBhdGhzID0gZGF0YS5tYXAocmVjaXBlID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhcmFtczogeyBpZDogcmVjaXBlLmlkLnRvU3RyaW5nKCkgfVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzLFxuICAgICAgICBmYWxsYmFjazogZmFsc2UgLy8gcmVkaXJlY3RzIHRvIDQwNCBwYWdlXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMuaWQ7IFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWNpcGVzLycgKyBpZClcbiAgICBjb25zdCByZWNpcGUgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyBcbiAgICAgICAgICAgIHJlY2lwZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmNvbnN0IFNob3dQYWdlID0gKHsgcmVjaXBlIH0pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IGN1cnJlbnRfdXNlciA9IENVUlJFTlRfVVNFUlxuICAgIGNvbnN0IHtyZWNpcGVzLCBzZXRSZWNpcGVzLCBmYXZvcml0ZXMsIHNldEZhdm9yaXRlc30gPSB1c2VSZWNpcGVDb250ZXh0KCk7XG4gICAgY29uc3QgW2N1cnJlbnRSZWNpcGUsIHNldEN1cnJlbnRSZWNpcGVdID0gdXNlU3RhdGUocmVjaXBlKVxuICAgIGNvbnN0IFtlZGl0U3RhdGUsIHNldEVkaXRTdGF0ZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgY29uc3QgZWRpdEhlbHBlciA9ICh1cGRhdGVkUmVjaXBlT2JqKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRSZWNpcGUodXBkYXRlZFJlY2lwZU9iailcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVIYW5kbGVyID0gYXN5bmMgKHJlY2lwZUlkKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbmZpZ09iaiA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlY2lwZXMvJyArIHJlY2lwZUlkLCBjb25maWdPYmopXG4gICAgICAgIGNvbnN0IHJldmlzZWRSZWNpcGVBcnJheSA9IHJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiByZWNpcGUuaWQgIT09IHJlY2lwZUlkKVxuICAgICAgICBzZXRSZWNpcGVzKHJldmlzZWRSZWNpcGVBcnJheSlcbiAgICAgICAgcm91dGVyLnB1c2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9yZWNpcGVzJylcbiAgICB9XG4gICAgLypcbiAgICAgICAgY29uc3QgdXNlckZhdm9yaXRlcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmYXZvcml0ZXMuZmlsdGVyKGZhdm9yaXRlID0+IGZhdm9yaXRlLnJlY2lwZV9saWtlcl9pZCA9PT0gY3VycmVudF91c2VyKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNSZWNpcGVTYXZlZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmYXZvcml0ZXMuZmlsdGVyKGZhdm9yaXRlID0+IGZhdm9yaXRlLnJlY2lwZV9pZCA9PT0gcmVjaXBlLmlkKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJsaWtlciBpZCA9IGN1cnJlbnQgdXNlclwiLCB1c2VyRmF2b3JpdGVzKCkpXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVjaXBlIGlkID0gY3VycmVudCByZWNpcGVcIiwgaXNSZWNpcGVTYXZlZCgpKVxuICAgICAgICAqL1xuXG4gICAgICAgIGNvbnNcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+IFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctY2FyZFwiPlxuICAgICAgICAgICAgPGgxPntjdXJyZW50UmVjaXBlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8cD48aW1nIHNyYz17Y3VycmVudFJlY2lwZS5pbWdfdXJsfSBzdHlsZT17e2hlaWdodDonMjUwcHgnfX0gYWx0PScnIC8+PC9wPlxuICAgICAgICAgICAgPHA+e2N1cnJlbnRSZWNpcGUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPHA+e2N1cnJlbnRSZWNpcGUuaW5ncmVkaWVudHN9PC9wPlxuICAgICAgICAgICAgPHA+e2N1cnJlbnRSZWNpcGUuaW5zdHJ1Y3Rpb25zfTwvcD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9yZWNpcGVzLycpfT5CYWNrIHRvIE1haW48L2J1dHRvbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgey8qIEVkaXQgLyBEZWxldGUgYnV0dG9ucyBvbmx5IGFwcGVhciBpZiBjdXJyZW50IHVzZXIgaXMgdGhlIGNyZWF0b3IgKi99ICAgICAgICAgICAgXG4gICAgICAgICAgICB7Y3VycmVudF91c2VyID09PSByZWNpcGUucmVjaXBlX2NyZWF0b3JfaWQgPyBcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEVkaXRTdGF0ZSghZWRpdFN0YXRlKX0+RWRpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUhhbmRsZXIoY3VycmVudFJlY2lwZS5pZCl9PkRlbGV0ZTwvYnV0dG9uPiBcbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICA6IFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8U2F2ZUJ1dHRvbiByZWNpcGU9e3JlY2lwZX0ga2V5PXtyZWNpcGUuaWR9IC8+ICovfVxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKFwic2F2ZSFcIil9PlNhdmU8L2J1dHRvbj4gXG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7ZWRpdFN0YXRlID09PSB0cnVlID8gPEVkaXRGb3JtIHNldEVkaXRTdGF0ZT17c2V0RWRpdFN0YXRlfSBrZXk9e3JlY2lwZS5pZH0gcmVjaXBlPXtyZWNpcGV9IGVkaXRIZWxwZXI9e2VkaXRIZWxwZXJ9IC8+IDogPD48Lz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/recipes/[id].js\n");

/***/ })

})