webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/pages/recipes/[id].js":
/*!***********************************!*\
  !*** ./src/pages/recipes/[id].js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../current_user */ \"./src/current_user.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Components_EditForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/EditForm */ \"./src/Components/EditForm.js\");\n/* harmony import */ var _Components_SaveButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components/SaveButton */ \"./src/Components/SaveButton.js\");\n/* harmony import */ var _RecipeContext_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../RecipeContext/state */ \"./src/RecipeContext/state.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/pages/recipes/[id].js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nconst ShowPage = ({\n  recipe\n}) => {\n  _s();\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_3__[\"CURRENT_USER\"];\n  const {\n    0: editState,\n    1: setEditState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null);\n  const {\n    recipes,\n    setRecipes\n  } = Object(_RecipeContext_state__WEBPACK_IMPORTED_MODULE_7__[\"useRecipeContext\"])();\n\n  const editHelper = updatedRecipeObj => {\n    //find current object we are working with\n    let recipeObj = recipes.filter(recipe => recipe.id !== updatedRecipeObj.id);\n    console.log(recipeObj);\n    recipeObj = _objectSpread({}, updatedRecipeObj); // console.log(recipeObj, recipes)\n    //update changed properties, render it without refresh \n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"show-card\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: recipe.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: recipe.img_url,\n          style: {\n            height: '250px'\n          },\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 16\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: recipe.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: recipe.ingredients\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: recipe.instructions\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: () => router.push('/recipes/'),\n        children: \"Back to Main\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 13\n      }, undefined), current_user === recipe.recipe_creator_id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => setEditState(!editState),\n          children: \"Edit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => console.log(\"delete!\"),\n          children: \"Delete\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_SaveButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          recipe: recipe\n        }, recipe.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false), editState === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_EditForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        setEditState: setEditState,\n        recipe: recipe,\n        editHelper: editHelper\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 35\n      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false);\n};\n\n_s(ShowPage, \"VbdEDeZXq1x0Tn3QBECdycc+M90=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"], _RecipeContext_state__WEBPACK_IMPORTED_MODULE_7__[\"useRecipeContext\"]];\n});\n\n_c = ShowPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShowPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ShowPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlY2lwZXMvLmpzPzJkYWQiXSwibmFtZXMiOlsiU2hvd1BhZ2UiLCJyZWNpcGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJlZGl0U3RhdGUiLCJzZXRFZGl0U3RhdGUiLCJ1c2VTdGF0ZSIsInJlY2lwZXMiLCJzZXRSZWNpcGVzIiwidXNlUmVjaXBlQ29udGV4dCIsImVkaXRIZWxwZXIiLCJ1cGRhdGVkUmVjaXBlT2JqIiwicmVjaXBlT2JqIiwiZmlsdGVyIiwiaWQiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJpbWdfdXJsIiwiaGVpZ2h0IiwiZGVzY3JpcHRpb24iLCJpbmdyZWRpZW50cyIsImluc3RydWN0aW9ucyIsInB1c2giLCJyZWNpcGVfY3JlYXRvcl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQStCQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZ0I7QUFBQTs7QUFDN0IsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU1DLFlBQVksR0FBR0MsMERBQXJCO0FBRUEsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDLElBQUQsQ0FBMUM7QUFFQSxRQUFNO0FBQUNDLFdBQUQ7QUFBVUM7QUFBVixNQUF3QkMsNkVBQWdCLEVBQTlDOztBQUVBLFFBQU1DLFVBQVUsR0FBSUMsZ0JBQUQsSUFBc0I7QUFDckM7QUFDQSxRQUFJQyxTQUFTLEdBQUdMLE9BQU8sQ0FBQ00sTUFBUixDQUFlZCxNQUFNLElBQUlBLE1BQU0sQ0FBQ2UsRUFBUCxLQUFjSCxnQkFBZ0IsQ0FBQ0csRUFBeEQsQ0FBaEI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlKLFNBQVo7QUFDQUEsYUFBUyxxQkFBT0QsZ0JBQVAsQ0FBVCxDQUpxQyxDQUtyQztBQUVBO0FBQ0gsR0FSRDs7QUFVQSxzQkFDSTtBQUFBLDJCQUNBO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDSTtBQUFBLGtCQUFLWixNQUFNLENBQUNrQjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBLCtCQUFHO0FBQUssYUFBRyxFQUFFbEIsTUFBTSxDQUFDbUIsT0FBakI7QUFBMEIsZUFBSyxFQUFFO0FBQUNDLGtCQUFNLEVBQUM7QUFBUixXQUFqQztBQUFtRCxhQUFHLEVBQUM7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFBLGtCQUFJcEIsTUFBTSxDQUFDcUI7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLGVBSUk7QUFBQSxrQkFBSXJCLE1BQU0sQ0FBQ3NCO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQUtJO0FBQUEsa0JBQUl0QixNQUFNLENBQUN1QjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEosZUFNSTtBQUFRLGVBQU8sRUFBRSxNQUFNdEIsTUFBTSxDQUFDdUIsSUFBUCxDQUFZLFdBQVosQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkosRUFTS3JCLFlBQVksS0FBS0gsTUFBTSxDQUFDeUIsaUJBQXhCLGdCQUNHO0FBQUEsZ0NBQ0k7QUFBUSxpQkFBTyxFQUFFLE1BQU1uQixZQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQVEsaUJBQU8sRUFBRSxNQUFNVyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUEsc0JBREgsZ0JBTUc7QUFBQSwrQkFDSSxxRUFBQyw4REFBRDtBQUFZLGdCQUFNLEVBQUVqQjtBQUFwQixXQUFpQ0EsTUFBTSxDQUFDZSxFQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosdUJBZlIsRUFvQktWLFNBQVMsS0FBSyxJQUFkLGdCQUFxQixxRUFBQyw0REFBRDtBQUFVLG9CQUFZLEVBQUVDLFlBQXhCO0FBQXNELGNBQU0sRUFBRU4sTUFBOUQ7QUFBc0Usa0JBQVUsRUFBRVc7QUFBbEYsU0FBMkNYLE1BQU0sQ0FBQ2UsRUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBckIsZ0JBQXdILHVKQXBCN0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsbUJBREo7QUEwQkgsQ0E1Q0Q7O0dBQU1oQixRO1VBQ2FHLHFELEVBS2VRLHFFOzs7S0FONUJYLFE7O0FBOENTQSx1RUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9yZWNpcGVzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IENVUlJFTlRfVVNFUiB9IGZyb20gJy4uLy4uL2N1cnJlbnRfdXNlcidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRWRpdEZvcm0gZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9FZGl0Rm9ybSdcbmltcG9ydCBTYXZlQnV0dG9uIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvU2F2ZUJ1dHRvbidcbmltcG9ydCB7IHVzZVJlY2lwZUNvbnRleHQgfSBmcm9tICcuLi8uLi9SZWNpcGVDb250ZXh0L3N0YXRlJ1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlY2lwZXMnKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zdCBwYXRocyA9IGRhdGEubWFwKHJlY2lwZSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXJhbXM6IHsgaWQ6IHJlY2lwZS5pZC50b1N0cmluZygpIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRocyxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlIC8vIHJlZGlyZWN0cyB0byA0MDQgcGFnZVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkOyBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVjaXBlcy8nICsgaWQpXG4gICAgY29uc3QgcmVjaXBlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHsgXG4gICAgICAgICAgICByZWNpcGVcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5jb25zdCBTaG93UGFnZSA9ICh7IHJlY2lwZSB9KSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBjdXJyZW50X3VzZXIgPSBDVVJSRU5UX1VTRVJcblxuICAgIGNvbnN0IFtlZGl0U3RhdGUsIHNldEVkaXRTdGF0ZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgY29uc3Qge3JlY2lwZXMsIHNldFJlY2lwZXN9ID0gdXNlUmVjaXBlQ29udGV4dCgpO1xuXG4gICAgY29uc3QgZWRpdEhlbHBlciA9ICh1cGRhdGVkUmVjaXBlT2JqKSA9PiB7XG4gICAgICAgIC8vZmluZCBjdXJyZW50IG9iamVjdCB3ZSBhcmUgd29ya2luZyB3aXRoXG4gICAgICAgIGxldCByZWNpcGVPYmogPSByZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4gcmVjaXBlLmlkICE9PSB1cGRhdGVkUmVjaXBlT2JqLmlkKVxuICAgICAgICBjb25zb2xlLmxvZyhyZWNpcGVPYmopXG4gICAgICAgIHJlY2lwZU9iaiA9IHsuLi51cGRhdGVkUmVjaXBlT2JqfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZWNpcGVPYmosIHJlY2lwZXMpXG5cbiAgICAgICAgLy91cGRhdGUgY2hhbmdlZCBwcm9wZXJ0aWVzLCByZW5kZXIgaXQgd2l0aG91dCByZWZyZXNoIFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+IFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctY2FyZFwiPlxuICAgICAgICAgICAgPGgxPntyZWNpcGUudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxwPjxpbWcgc3JjPXtyZWNpcGUuaW1nX3VybH0gc3R5bGU9e3toZWlnaHQ6JzI1MHB4J319IGFsdD0nJyAvPjwvcD5cbiAgICAgICAgICAgIDxwPntyZWNpcGUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPHA+e3JlY2lwZS5pbmdyZWRpZW50c308L3A+XG4gICAgICAgICAgICA8cD57cmVjaXBlLmluc3RydWN0aW9uc308L3A+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvcmVjaXBlcy8nKX0+QmFjayB0byBNYWluPC9idXR0b24+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHsvKiBFZGl0IC8gRGVsZXRlIGJ1dHRvbnMgb25seSBhcHBlYXIgaWYgY3VycmVudCB1c2VyIGlzIHRoZSBjcmVhdG9yICovfSAgICAgICAgICAgIFxuICAgICAgICAgICAge2N1cnJlbnRfdXNlciA9PT0gcmVjaXBlLnJlY2lwZV9jcmVhdG9yX2lkID8gXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0U3RhdGUoIWVkaXRTdGF0ZSl9PkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhcImRlbGV0ZSFcIil9PkRlbGV0ZTwvYnV0dG9uPiBcbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICA6IFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxTYXZlQnV0dG9uIHJlY2lwZT17cmVjaXBlfSBrZXk9e3JlY2lwZS5pZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXCJzYXZlIVwiKX0+U2F2ZTwvYnV0dG9uPiAgKi99XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7ZWRpdFN0YXRlID09PSB0cnVlID8gPEVkaXRGb3JtIHNldEVkaXRTdGF0ZT17c2V0RWRpdFN0YXRlfSBrZXk9e3JlY2lwZS5pZH0gcmVjaXBlPXtyZWNpcGV9IGVkaXRIZWxwZXI9e2VkaXRIZWxwZXJ9IC8+IDogPD48Lz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/recipes/[id].js\n");

/***/ })

})