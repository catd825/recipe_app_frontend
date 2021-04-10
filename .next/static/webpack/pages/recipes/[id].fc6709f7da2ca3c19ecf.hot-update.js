webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/pages/recipes/[id].js":
/*!***********************************!*\
  !*** ./src/pages/recipes/[id].js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../current_user */ \"./src/current_user.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Components_EditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/EditForm */ \"./src/Components/EditForm.js\");\n/* harmony import */ var _Components_SaveButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/SaveButton */ \"./src/Components/SaveButton.js\");\n/* harmony import */ var _RecipeContext_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../RecipeContext/state */ \"./src/RecipeContext/state.js\");\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/pages/recipes/[id].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ShowPage = ({\n  recipe\n}) => {\n  _s();\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_2__[\"CURRENT_USER\"];\n  const {\n    0: editState,\n    1: setEditState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null);\n  const {\n    recipes,\n    setRecipes\n  } = Object(_RecipeContext_state__WEBPACK_IMPORTED_MODULE_6__[\"useRecipeContext\"])();\n\n  const editHelper = updatedRecipeObj => {\n    //find current object we are working with\n    const recipeArray = recipes.filter(recipe => recipe.id !== updatedRecipeObj.id);\n    console.log(recipeArray);\n    recipeArray.push(updatedRecipeObj); //update changed properties, render it without refresh \n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"show-card\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: recipe.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: recipe.img_url,\n          style: {\n            height: '250px'\n          },\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 16\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: recipe.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: recipe.ingredients\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: recipe.instructions\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: () => router.push('/recipes/'),\n        children: \"Back to Main\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 13\n      }, undefined), current_user === recipe.recipe_creator_id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => setEditState(!editState),\n          children: \"Edit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => console.log(\"delete!\"),\n          children: \"Delete\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_SaveButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          recipe: recipe\n        }, recipe.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false), editState === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_EditForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        setEditState: setEditState,\n        recipe: recipe,\n        editHelper: editHelper\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 35\n      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false);\n};\n\n_s(ShowPage, \"VbdEDeZXq1x0Tn3QBECdycc+M90=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"], _RecipeContext_state__WEBPACK_IMPORTED_MODULE_6__[\"useRecipeContext\"]];\n});\n\n_c = ShowPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShowPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ShowPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlY2lwZXMvLmpzPzJkYWQiXSwibmFtZXMiOlsiU2hvd1BhZ2UiLCJyZWNpcGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJlZGl0U3RhdGUiLCJzZXRFZGl0U3RhdGUiLCJ1c2VTdGF0ZSIsInJlY2lwZXMiLCJzZXRSZWNpcGVzIiwidXNlUmVjaXBlQ29udGV4dCIsImVkaXRIZWxwZXIiLCJ1cGRhdGVkUmVjaXBlT2JqIiwicmVjaXBlQXJyYXkiLCJmaWx0ZXIiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwidGl0bGUiLCJpbWdfdXJsIiwiaGVpZ2h0IiwiZGVzY3JpcHRpb24iLCJpbmdyZWRpZW50cyIsImluc3RydWN0aW9ucyIsInJlY2lwZV9jcmVhdG9yX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBK0JBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFnQjtBQUFBOztBQUM3QixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHQywwREFBckI7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsSUFBRCxDQUExQztBQUVBLFFBQU07QUFBQ0MsV0FBRDtBQUFVQztBQUFWLE1BQXdCQyw2RUFBZ0IsRUFBOUM7O0FBRUEsUUFBTUMsVUFBVSxHQUFJQyxnQkFBRCxJQUFzQjtBQUNyQztBQUNBLFVBQU1DLFdBQVcsR0FBR0wsT0FBTyxDQUFDTSxNQUFSLENBQWVkLE1BQU0sSUFBSUEsTUFBTSxDQUFDZSxFQUFQLEtBQWNILGdCQUFnQixDQUFDRyxFQUF4RCxDQUFwQjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosV0FBWjtBQUNBQSxlQUFXLENBQUNLLElBQVosQ0FBaUJOLGdCQUFqQixFQUpxQyxDQU9yQztBQUNILEdBUkQ7O0FBVUEsc0JBQ0k7QUFBQSwyQkFDQTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0k7QUFBQSxrQkFBS1osTUFBTSxDQUFDbUI7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQSwrQkFBRztBQUFLLGFBQUcsRUFBRW5CLE1BQU0sQ0FBQ29CLE9BQWpCO0FBQTBCLGVBQUssRUFBRTtBQUFDQyxrQkFBTSxFQUFDO0FBQVIsV0FBakM7QUFBbUQsYUFBRyxFQUFDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBR0k7QUFBQSxrQkFBSXJCLE1BQU0sQ0FBQ3NCO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUlJO0FBQUEsa0JBQUl0QixNQUFNLENBQUN1QjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkosZUFLSTtBQUFBLGtCQUFJdkIsTUFBTSxDQUFDd0I7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBTUk7QUFBUSxlQUFPLEVBQUUsTUFBTXZCLE1BQU0sQ0FBQ2lCLElBQVAsQ0FBWSxXQUFaLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KLEVBU0tmLFlBQVksS0FBS0gsTUFBTSxDQUFDeUIsaUJBQXhCLGdCQUNHO0FBQUEsZ0NBQ0k7QUFBUSxpQkFBTyxFQUFFLE1BQU1uQixZQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQVEsaUJBQU8sRUFBRSxNQUFNVyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUEsc0JBREgsZ0JBTUc7QUFBQSwrQkFDSSxxRUFBQyw4REFBRDtBQUFZLGdCQUFNLEVBQUVqQjtBQUFwQixXQUFpQ0EsTUFBTSxDQUFDZSxFQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosdUJBZlIsRUFvQktWLFNBQVMsS0FBSyxJQUFkLGdCQUFxQixxRUFBQyw0REFBRDtBQUFVLG9CQUFZLEVBQUVDLFlBQXhCO0FBQXNELGNBQU0sRUFBRU4sTUFBOUQ7QUFBc0Usa0JBQVUsRUFBRVc7QUFBbEYsU0FBMkNYLE1BQU0sQ0FBQ2UsRUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBckIsZ0JBQXdILHVKQXBCN0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsbUJBREo7QUEwQkgsQ0E1Q0Q7O0dBQU1oQixRO1VBQ2FHLHFELEVBS2VRLHFFOzs7S0FONUJYLFE7O0FBOENTQSx1RUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9yZWNpcGVzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IENVUlJFTlRfVVNFUiB9IGZyb20gJy4uLy4uL2N1cnJlbnRfdXNlcidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRWRpdEZvcm0gZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9FZGl0Rm9ybSdcbmltcG9ydCBTYXZlQnV0dG9uIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvU2F2ZUJ1dHRvbidcbmltcG9ydCB7IHVzZVJlY2lwZUNvbnRleHQgfSBmcm9tICcuLi8uLi9SZWNpcGVDb250ZXh0L3N0YXRlJ1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlY2lwZXMnKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zdCBwYXRocyA9IGRhdGEubWFwKHJlY2lwZSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXJhbXM6IHsgaWQ6IHJlY2lwZS5pZC50b1N0cmluZygpIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRocyxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlIC8vIHJlZGlyZWN0cyB0byA0MDQgcGFnZVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkOyBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVjaXBlcy8nICsgaWQpXG4gICAgY29uc3QgcmVjaXBlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHsgXG4gICAgICAgICAgICByZWNpcGVcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5jb25zdCBTaG93UGFnZSA9ICh7IHJlY2lwZSB9KSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBjdXJyZW50X3VzZXIgPSBDVVJSRU5UX1VTRVJcblxuICAgIGNvbnN0IFtlZGl0U3RhdGUsIHNldEVkaXRTdGF0ZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgY29uc3Qge3JlY2lwZXMsIHNldFJlY2lwZXN9ID0gdXNlUmVjaXBlQ29udGV4dCgpO1xuXG4gICAgY29uc3QgZWRpdEhlbHBlciA9ICh1cGRhdGVkUmVjaXBlT2JqKSA9PiB7XG4gICAgICAgIC8vZmluZCBjdXJyZW50IG9iamVjdCB3ZSBhcmUgd29ya2luZyB3aXRoXG4gICAgICAgIGNvbnN0IHJlY2lwZUFycmF5ID0gcmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS5pZCAhPT0gdXBkYXRlZFJlY2lwZU9iai5pZClcbiAgICAgICAgY29uc29sZS5sb2cocmVjaXBlQXJyYXkpXG4gICAgICAgIHJlY2lwZUFycmF5LnB1c2godXBkYXRlZFJlY2lwZU9iailcblxuXG4gICAgICAgIC8vdXBkYXRlIGNoYW5nZWQgcHJvcGVydGllcywgcmVuZGVyIGl0IHdpdGhvdXQgcmVmcmVzaCBcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PiBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LWNhcmRcIj5cbiAgICAgICAgICAgIDxoMT57cmVjaXBlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8cD48aW1nIHNyYz17cmVjaXBlLmltZ191cmx9IHN0eWxlPXt7aGVpZ2h0OicyNTBweCd9fSBhbHQ9JycgLz48L3A+XG4gICAgICAgICAgICA8cD57cmVjaXBlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxwPntyZWNpcGUuaW5ncmVkaWVudHN9PC9wPlxuICAgICAgICAgICAgPHA+e3JlY2lwZS5pbnN0cnVjdGlvbnN9PC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3JlY2lwZXMvJyl9PkJhY2sgdG8gTWFpbjwvYnV0dG9uPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7LyogRWRpdCAvIERlbGV0ZSBidXR0b25zIG9ubHkgYXBwZWFyIGlmIGN1cnJlbnQgdXNlciBpcyB0aGUgY3JlYXRvciAqL30gICAgICAgICAgICBcbiAgICAgICAgICAgIHtjdXJyZW50X3VzZXIgPT09IHJlY2lwZS5yZWNpcGVfY3JlYXRvcl9pZCA/IFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RWRpdFN0YXRlKCFlZGl0U3RhdGUpfT5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXCJkZWxldGUhXCIpfT5EZWxldGU8L2J1dHRvbj4gXG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgOiBcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8U2F2ZUJ1dHRvbiByZWNpcGU9e3JlY2lwZX0ga2V5PXtyZWNpcGUuaWR9IC8+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKFwic2F2ZSFcIil9PlNhdmU8L2J1dHRvbj4gICovfVxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge2VkaXRTdGF0ZSA9PT0gdHJ1ZSA/IDxFZGl0Rm9ybSBzZXRFZGl0U3RhdGU9e3NldEVkaXRTdGF0ZX0ga2V5PXtyZWNpcGUuaWR9IHJlY2lwZT17cmVjaXBlfSBlZGl0SGVscGVyPXtlZGl0SGVscGVyfSAvPiA6IDw+PC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG93UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/recipes/[id].js\n");

/***/ })

})