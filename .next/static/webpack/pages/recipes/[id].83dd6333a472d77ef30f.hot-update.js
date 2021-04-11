webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/pages/recipes/[id].js":
/*!***********************************!*\
  !*** ./src/pages/recipes/[id].js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../current_user */ \"./src/current_user.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Components_EditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/EditForm */ \"./src/Components/EditForm.js\");\n/* harmony import */ var _RecipeContext_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../RecipeContext/state */ \"./src/RecipeContext/state.js\");\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/pages/recipes/[id].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ShowPage = ({\n  recipe\n}) => {\n  _s();\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_2__[\"CURRENT_USER\"];\n  const {\n    recipes,\n    setRecipes,\n    favorites,\n    setFavorites\n  } = Object(_RecipeContext_state__WEBPACK_IMPORTED_MODULE_5__[\"useRecipeContext\"])();\n  const {\n    0: currentRecipe,\n    1: setCurrentRecipe\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(recipe);\n  const {\n    0: editState,\n    1: setEditState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null);\n\n  const editHelper = updatedRecipeObj => {\n    setCurrentRecipe(updatedRecipeObj);\n  };\n\n  const deleteHandler = async recipeId => {\n    const configObj = {\n      method: 'DELETE',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      }\n    };\n    await fetch('http://localhost:3000/recipes/' + recipeId, configObj);\n    const revisedRecipeArray = recipes.filter(recipe => recipe.id !== recipeId);\n    setRecipes(revisedRecipeArray);\n    router.push('http://localhost:3001/recipes');\n  };\n\n  const {\n    0: savedRecipe,\n    1: setSavedRecipe\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null);\n\n  const isUserFavorite = () => {\n    if (favorites.length !== 0) {}\n\n    let arr = favorites.filter(favorite => favorite.recipe_liker_id === current_user && favorite.recipe_id === recipe.id);\n    return arr.length; // console.log('arr', arr)\n  };\n\n  console.log(isUserFavorite());\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"show-card\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: currentRecipe.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: currentRecipe.img_url,\n          style: {\n            height: '250px'\n          },\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 16\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: currentRecipe.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: currentRecipe.ingredients\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: currentRecipe.instructions\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: () => router.push('http://localhost:3001/recipes/'),\n        children: \"Back to Main\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 13\n      }, undefined), current_user === recipe.recipe_creator_id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => setEditState(!editState),\n          children: \"Edit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => deleteHandler(currentRecipe.id),\n          children: \"Delete\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => console.log(\"save!\"),\n          children: \"Save\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false), editState === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_EditForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        setEditState: setEditState,\n        recipe: recipe,\n        editHelper: editHelper\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 35\n      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false);\n};\n\n_s(ShowPage, \"sFlSm2v6LykI+x9fJWoRf3I3ihY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"], _RecipeContext_state__WEBPACK_IMPORTED_MODULE_5__[\"useRecipeContext\"]];\n});\n\n_c = ShowPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShowPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ShowPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlY2lwZXMvLmpzPzJkYWQiXSwibmFtZXMiOlsiU2hvd1BhZ2UiLCJyZWNpcGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJyZWNpcGVzIiwic2V0UmVjaXBlcyIsImZhdm9yaXRlcyIsInNldEZhdm9yaXRlcyIsInVzZVJlY2lwZUNvbnRleHQiLCJjdXJyZW50UmVjaXBlIiwic2V0Q3VycmVudFJlY2lwZSIsInVzZVN0YXRlIiwiZWRpdFN0YXRlIiwic2V0RWRpdFN0YXRlIiwiZWRpdEhlbHBlciIsInVwZGF0ZWRSZWNpcGVPYmoiLCJkZWxldGVIYW5kbGVyIiwicmVjaXBlSWQiLCJjb25maWdPYmoiLCJtZXRob2QiLCJoZWFkZXJzIiwiZmV0Y2giLCJyZXZpc2VkUmVjaXBlQXJyYXkiLCJmaWx0ZXIiLCJpZCIsInB1c2giLCJzYXZlZFJlY2lwZSIsInNldFNhdmVkUmVjaXBlIiwiaXNVc2VyRmF2b3JpdGUiLCJsZW5ndGgiLCJhcnIiLCJmYXZvcml0ZSIsInJlY2lwZV9saWtlcl9pZCIsInJlY2lwZV9pZCIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsImltZ191cmwiLCJoZWlnaHQiLCJkZXNjcmlwdGlvbiIsImluZ3JlZGllbnRzIiwiaW5zdHJ1Y3Rpb25zIiwicmVjaXBlX2NyZWF0b3JfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUErQkEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdCO0FBQUE7O0FBQzdCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNQyxZQUFZLEdBQUdDLDBEQUFyQjtBQUNBLFFBQU07QUFBQ0MsV0FBRDtBQUFVQyxjQUFWO0FBQXNCQyxhQUF0QjtBQUFpQ0M7QUFBakMsTUFBaURDLDZFQUFnQixFQUF2RTtBQUNB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LGlCQUFPLEVBQUUsTUFBTVUsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLHVCQWZSLEVBb0JLdkIsU0FBUyxLQUFLLElBQWQsZ0JBQXFCLHFFQUFDLDREQUFEO0FBQVUsb0JBQVksRUFBRUMsWUFBeEI7QUFBc0QsY0FBTSxFQUFFZCxNQUE5RDtBQUFzRSxrQkFBVSxFQUFFZTtBQUFsRixTQUEyQ2YsTUFBTSxDQUFDeUIsRUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBckIsZ0JBQXdILHVKQXBCN0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsbUJBREo7QUEwQkgsQ0FqRUQ7O0dBQU0xQixRO1VBQ2FHLHFELEVBRXdDTyxxRTs7O0tBSHJEVixROztBQW1FU0EsdUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVjaXBlcy9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVIgfSBmcm9tICcuLi8uLi9jdXJyZW50X3VzZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEVkaXRGb3JtIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvRWRpdEZvcm0nXG5pbXBvcnQgeyB1c2VSZWNpcGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vUmVjaXBlQ29udGV4dC9zdGF0ZSdcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWNpcGVzJylcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcChyZWNpcGUgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiByZWNpcGUuaWQudG9TdHJpbmcoKSB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHMsXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSAvLyByZWRpcmVjdHMgdG8gNDA0IHBhZ2VcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgaWQgPSBjb250ZXh0LnBhcmFtcy5pZDsgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlY2lwZXMvJyArIGlkKVxuICAgIGNvbnN0IHJlY2lwZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7IFxuICAgICAgICAgICAgcmVjaXBlXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuY29uc3QgU2hvd1BhZ2UgPSAoeyByZWNpcGUgfSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgY3VycmVudF91c2VyID0gQ1VSUkVOVF9VU0VSXG4gICAgY29uc3Qge3JlY2lwZXMsIHNldFJlY2lwZXMsIGZhdm9yaXRlcywgc2V0RmF2b3JpdGVzfSA9IHVzZVJlY2lwZUNvbnRleHQoKTtcbiAgICBjb25zdCBbY3VycmVudFJlY2lwZSwgc2V0Q3VycmVudFJlY2lwZV0gPSB1c2VTdGF0ZShyZWNpcGUpXG4gICAgY29uc3QgW2VkaXRTdGF0ZSwgc2V0RWRpdFN0YXRlXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICBjb25zdCBlZGl0SGVscGVyID0gKHVwZGF0ZWRSZWNpcGVPYmopID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFJlY2lwZSh1cGRhdGVkUmVjaXBlT2JqKVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUhhbmRsZXIgPSBhc3luYyAocmVjaXBlSWQpID0+IHtcbiAgICAgICAgY29uc3QgY29uZmlnT2JqID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVjaXBlcy8nICsgcmVjaXBlSWQsIGNvbmZpZ09iailcbiAgICAgICAgY29uc3QgcmV2aXNlZFJlY2lwZUFycmF5ID0gcmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS5pZCAhPT0gcmVjaXBlSWQpXG4gICAgICAgIHNldFJlY2lwZXMocmV2aXNlZFJlY2lwZUFycmF5KVxuICAgICAgICByb3V0ZXIucHVzaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3JlY2lwZXMnKVxuICAgIH1cbiAgXG5cbiAgICBjb25zdCBbc2F2ZWRSZWNpcGUsIHNldFNhdmVkUmVjaXBlXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgaXNVc2VyRmF2b3JpdGUgPSAoKSA9PiB7XG4gICAgICAgIGlmKGZhdm9yaXRlcy5sZW5ndGggIT09IDAgKXtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYXJyID0gZmF2b3JpdGVzLmZpbHRlcihmYXZvcml0ZSA9PiBmYXZvcml0ZS5yZWNpcGVfbGlrZXJfaWQgPT09IGN1cnJlbnRfdXNlciAmJiBmYXZvcml0ZS5yZWNpcGVfaWQgPT09IHJlY2lwZS5pZClcbiAgICAgICAgcmV0dXJuIGFyci5sZW5ndGhcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2FycicsIGFycilcbiAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coaXNVc2VyRmF2b3JpdGUoKSlcblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PiBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LWNhcmRcIj5cbiAgICAgICAgICAgIDxoMT57Y3VycmVudFJlY2lwZS50aXRsZX08L2gxPlxuICAgICAgICAgICAgPHA+PGltZyBzcmM9e2N1cnJlbnRSZWNpcGUuaW1nX3VybH0gc3R5bGU9e3toZWlnaHQ6JzI1MHB4J319IGFsdD0nJyAvPjwvcD5cbiAgICAgICAgICAgIDxwPntjdXJyZW50UmVjaXBlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxwPntjdXJyZW50UmVjaXBlLmluZ3JlZGllbnRzfTwvcD5cbiAgICAgICAgICAgIDxwPntjdXJyZW50UmVjaXBlLmluc3RydWN0aW9uc308L3A+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvcmVjaXBlcy8nKX0+QmFjayB0byBNYWluPC9idXR0b24+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHsvKiBFZGl0IC8gRGVsZXRlIGJ1dHRvbnMgb25seSBhcHBlYXIgaWYgY3VycmVudCB1c2VyIGlzIHRoZSBjcmVhdG9yICovfSAgICAgICAgICAgIFxuICAgICAgICAgICAge2N1cnJlbnRfdXNlciA9PT0gcmVjaXBlLnJlY2lwZV9jcmVhdG9yX2lkID8gXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0U3RhdGUoIWVkaXRTdGF0ZSl9PkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVIYW5kbGVyKGN1cnJlbnRSZWNpcGUuaWQpfT5EZWxldGU8L2J1dHRvbj4gXG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgOiBcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICB7LyogPFNhdmVCdXR0b24gcmVjaXBlPXtyZWNpcGV9IGtleT17cmVjaXBlLmlkfSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhcInNhdmUhXCIpfT5TYXZlPC9idXR0b24+IFxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge2VkaXRTdGF0ZSA9PT0gdHJ1ZSA/IDxFZGl0Rm9ybSBzZXRFZGl0U3RhdGU9e3NldEVkaXRTdGF0ZX0ga2V5PXtyZWNpcGUuaWR9IHJlY2lwZT17cmVjaXBlfSBlZGl0SGVscGVyPXtlZGl0SGVscGVyfSAvPiA6IDw+PC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG93UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/recipes/[id].js\n");

/***/ })

})