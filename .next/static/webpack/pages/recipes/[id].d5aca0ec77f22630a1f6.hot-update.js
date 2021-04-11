webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/pages/recipes/[id].js":
/*!***********************************!*\
  !*** ./src/pages/recipes/[id].js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../current_user */ \"./src/current_user.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Components_EditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/EditForm */ \"./src/Components/EditForm.js\");\n/* harmony import */ var _Components_AddToFavorites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/AddToFavorites */ \"./src/Components/AddToFavorites.js\");\n/* harmony import */ var _Components_RemoveFromFavorites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components/RemoveFromFavorites */ \"./src/Components/RemoveFromFavorites.js\");\n/* harmony import */ var _RecipeContext_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../RecipeContext/state */ \"./src/RecipeContext/state.js\");\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/pages/recipes/[id].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst ShowPage = ({\n  recipe\n}) => {\n  _s();\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_2__[\"CURRENT_USER\"];\n  const {\n    recipes,\n    setRecipes,\n    favorites,\n    setFavorites\n  } = Object(_RecipeContext_state__WEBPACK_IMPORTED_MODULE_7__[\"useRecipeContext\"])();\n  const {\n    0: currentRecipe,\n    1: setCurrentRecipe\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(recipe);\n  const {\n    0: editState,\n    1: setEditState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null);\n\n  const editHelper = updatedRecipeObj => {\n    setCurrentRecipe(updatedRecipeObj);\n  };\n\n  const deleteHandler = async recipeId => {\n    const configObj = {\n      method: 'DELETE',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      }\n    };\n    await fetch('http://localhost:3000/recipes/' + recipeId, configObj);\n    const revisedRecipeArray = recipes.filter(recipe => recipe.id !== recipeId);\n    setRecipes(revisedRecipeArray);\n    router.push('http://localhost:3001/recipes');\n  };\n\n  const recipeSavedByUser = () => {\n    let arr = favorites.filter(favorite => favorite.recipe_liker_id === current_user && favorite.recipe_id === recipe.id);\n    return arr.length === 1 ? true : false;\n  };\n\n  console.log(recipeSavedByUser());\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"show-card\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: currentRecipe.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: currentRecipe.img_url,\n          style: {\n            height: '250px'\n          },\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 16\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: currentRecipe.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: currentRecipe.ingredients\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: currentRecipe.instructions\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: () => router.push('http://localhost:3001/recipes/'),\n        children: \"Back to Main\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 13\n      }, undefined), current_user === recipe.recipe_creator_id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => setEditState(!editState),\n          children: \"Edit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => deleteHandler(currentRecipe.id),\n          children: \"Delete\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true), current_user !== recipe.recipe_creator_id && recipeSavedByUser() ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_RemoveFromFavorites__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          recipe: recipe\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_AddToFavorites__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          recipe: recipe\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false), editState === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_EditForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        setEditState: setEditState,\n        recipe: recipe,\n        editHelper: editHelper\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 35\n      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false);\n};\n\n_s(ShowPage, \"INfP6DatjV9iOEvcn8LV0C80bzY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"], _RecipeContext_state__WEBPACK_IMPORTED_MODULE_7__[\"useRecipeContext\"]];\n});\n\n_c = ShowPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShowPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ShowPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlY2lwZXMvLmpzPzJkYWQiXSwibmFtZXMiOlsiU2hvd1BhZ2UiLCJyZWNpcGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJyZWNpcGVzIiwic2V0UmVjaXBlcyIsImZhdm9yaXRlcyIsInNldEZhdm9yaXRlcyIsInVzZVJlY2lwZUNvbnRleHQiLCJjdXJyZW50UmVjaXBlIiwic2V0Q3VycmVudFJlY2lwZSIsInVzZVN0YXRlIiwiZWRpdFN0YXRlIiwic2V0RWRpdFN0YXRlIiwiZWRpdEhlbHBlciIsInVwZGF0ZWRSZWNpcGVPYmoiLCJkZWxldGVIYW5kbGVyIiwicmVjaXBlSWQiLCJjb25maWdPYmoiLCJtZXRob2QiLCJoZWFkZXJzIiwiZmV0Y2giLCJyZXZpc2VkUmVjaXBlQXJyYXkiLCJmaWx0ZXIiLCJpZCIsInB1c2giLCJyZWNpcGVTYXZlZEJ5VXNlciIsImFyciIsImZhdm9yaXRlIiwicmVjaXBlX2xpa2VyX2lkIiwicmVjaXBlX2lkIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiaW1nX3VybCIsImhlaWdodCIsImRlc2NyaXB0aW9uIiwiaW5ncmVkaWVudHMiLCJpbnN0cnVjdGlvbnMiLCJyZWNpcGVfY3JlYXRvcl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWdDQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZ0I7QUFBQTs7QUFDN0IsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU1DLFlBQVksR0FBR0MsMERBQXJCO0FBQ0EsUUFBTTtBQUFDQyxXQUFEO0FBQVVDLGNBQVY7QUFBc0JDLGFBQXRCO0FBQWlDQztBQUFqQyxNQUFpREMsNkVBQWdCLEVBQXZFO0FBQ0EsUUFBTTtBQUFBLE9BQUND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QURILGdCQUtHO0FBQUEsK0JBQ0kscUVBQUMsa0VBQUQ7QUFBZ0IsZ0JBQU0sRUFBRUE7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHVCQXRCUixFQTJCS2EsU0FBUyxLQUFLLElBQWQsZ0JBQXFCLHFFQUFDLDREQUFEO0FBQVUsb0JBQVksRUFBRUMsWUFBeEI7QUFBc0QsY0FBTSxFQUFFZCxNQUE5RDtBQUFzRSxrQkFBVSxFQUFFZTtBQUFsRixTQUEyQ2YsTUFBTSxDQUFDeUIsRUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBckIsZ0JBQXdILHVKQTNCN0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsbUJBREo7QUFpQ0gsQ0EvREQ7O0dBQU0xQixRO1VBQ2FHLHFELEVBRXdDTyxxRTs7O0tBSHJEVixROztBQWlFU0EsdUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVjaXBlcy9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVIgfSBmcm9tICcuLi8uLi9jdXJyZW50X3VzZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEVkaXRGb3JtIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvRWRpdEZvcm0nXG5pbXBvcnQgQWRkVG9GYXZvcml0ZXMgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9BZGRUb0Zhdm9yaXRlcydcbmltcG9ydCBSZW1vdmVGcm9tRmF2b3JpdGVzIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvUmVtb3ZlRnJvbUZhdm9yaXRlcydcbmltcG9ydCB7IHVzZVJlY2lwZUNvbnRleHQgfSBmcm9tICcuLi8uLi9SZWNpcGVDb250ZXh0L3N0YXRlJ1xuXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVjaXBlcycpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnN0IHBhdGhzID0gZGF0YS5tYXAocmVjaXBlID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhcmFtczogeyBpZDogcmVjaXBlLmlkLnRvU3RyaW5nKCkgfVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzLFxuICAgICAgICBmYWxsYmFjazogZmFsc2UgLy8gcmVkaXJlY3RzIHRvIDQwNCBwYWdlXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMuaWQ7IFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWNpcGVzLycgKyBpZClcbiAgICBjb25zdCByZWNpcGUgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyBcbiAgICAgICAgICAgIHJlY2lwZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmNvbnN0IFNob3dQYWdlID0gKHsgcmVjaXBlIH0pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IGN1cnJlbnRfdXNlciA9IENVUlJFTlRfVVNFUlxuICAgIGNvbnN0IHtyZWNpcGVzLCBzZXRSZWNpcGVzLCBmYXZvcml0ZXMsIHNldEZhdm9yaXRlc30gPSB1c2VSZWNpcGVDb250ZXh0KCk7XG4gICAgY29uc3QgW2N1cnJlbnRSZWNpcGUsIHNldEN1cnJlbnRSZWNpcGVdID0gdXNlU3RhdGUocmVjaXBlKVxuICAgIGNvbnN0IFtlZGl0U3RhdGUsIHNldEVkaXRTdGF0ZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgY29uc3QgZWRpdEhlbHBlciA9ICh1cGRhdGVkUmVjaXBlT2JqKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRSZWNpcGUodXBkYXRlZFJlY2lwZU9iailcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVIYW5kbGVyID0gYXN5bmMgKHJlY2lwZUlkKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbmZpZ09iaiA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlY2lwZXMvJyArIHJlY2lwZUlkLCBjb25maWdPYmopXG4gICAgICAgIGNvbnN0IHJldmlzZWRSZWNpcGVBcnJheSA9IHJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiByZWNpcGUuaWQgIT09IHJlY2lwZUlkKVxuICAgICAgICBzZXRSZWNpcGVzKHJldmlzZWRSZWNpcGVBcnJheSlcbiAgICAgICAgcm91dGVyLnB1c2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9yZWNpcGVzJylcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVjaXBlU2F2ZWRCeVVzZXIgPSAoKSA9PiB7XG4gICAgICAgIGxldCBhcnIgPSBmYXZvcml0ZXMuZmlsdGVyKGZhdm9yaXRlID0+IGZhdm9yaXRlLnJlY2lwZV9saWtlcl9pZCA9PT0gY3VycmVudF91c2VyICYmIGZhdm9yaXRlLnJlY2lwZV9pZCA9PT0gcmVjaXBlLmlkKVxuICAgICAgICByZXR1cm4gYXJyLmxlbmd0aCA9PT0gMSA/IHRydWUgOiBmYWxzZVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhyZWNpcGVTYXZlZEJ5VXNlcigpKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+IFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctY2FyZFwiPlxuICAgICAgICAgICAgPGgxPntjdXJyZW50UmVjaXBlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8cD48aW1nIHNyYz17Y3VycmVudFJlY2lwZS5pbWdfdXJsfSBzdHlsZT17e2hlaWdodDonMjUwcHgnfX0gYWx0PScnIC8+PC9wPlxuICAgICAgICAgICAgPHA+e2N1cnJlbnRSZWNpcGUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPHA+e2N1cnJlbnRSZWNpcGUuaW5ncmVkaWVudHN9PC9wPlxuICAgICAgICAgICAgPHA+e2N1cnJlbnRSZWNpcGUuaW5zdHJ1Y3Rpb25zfTwvcD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9yZWNpcGVzLycpfT5CYWNrIHRvIE1haW48L2J1dHRvbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgey8qIEVkaXQgLyBEZWxldGUgYnV0dG9ucyBvbmx5IGFwcGVhciBpZiBjdXJyZW50IHVzZXIgaXMgdGhlIGNyZWF0b3IgKi99ICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIHtjdXJyZW50X3VzZXIgPT09IHJlY2lwZS5yZWNpcGVfY3JlYXRvcl9pZCAmJlxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RWRpdFN0YXRlKCFlZGl0U3RhdGUpfT5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSGFuZGxlcihjdXJyZW50UmVjaXBlLmlkKX0+RGVsZXRlPC9idXR0b24+IFxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB7Y3VycmVudF91c2VyICE9PSByZWNpcGUucmVjaXBlX2NyZWF0b3JfaWQgJiYgcmVjaXBlU2F2ZWRCeVVzZXIoKSA/XG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUZyb21GYXZvcml0ZXMgcmVjaXBlPXtyZWNpcGV9Lz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPEFkZFRvRmF2b3JpdGVzIHJlY2lwZT17cmVjaXBlfS8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHtlZGl0U3RhdGUgPT09IHRydWUgPyA8RWRpdEZvcm0gc2V0RWRpdFN0YXRlPXtzZXRFZGl0U3RhdGV9IGtleT17cmVjaXBlLmlkfSByZWNpcGU9e3JlY2lwZX0gZWRpdEhlbHBlcj17ZWRpdEhlbHBlcn0gLz4gOiA8PjwvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvd1BhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/recipes/[id].js\n");

/***/ })

})