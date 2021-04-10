webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/pages/recipes/[id].js":
/*!***********************************!*\
  !*** ./src/pages/recipes/[id].js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../current_user */ \"./src/current_user.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Components_EditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/EditForm */ \"./src/Components/EditForm.js\");\n/* harmony import */ var _Components_SaveButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/SaveButton */ \"./src/Components/SaveButton.js\");\n/* harmony import */ var _RecipeContext_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../RecipeContext/state */ \"./src/RecipeContext/state.js\");\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/pages/recipes/[id].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ShowPage = ({\n  recipe\n}) => {\n  _s();\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_2__[\"CURRENT_USER\"];\n  const {\n    0: currentRecipe,\n    1: setCurrentRecipe\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(recipe);\n  const {\n    0: editState,\n    1: setEditState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null);\n  const {\n    recipes,\n    setRecipes\n  } = Object(_RecipeContext_state__WEBPACK_IMPORTED_MODULE_6__[\"useRecipeContext\"])();\n\n  const editHelper = updatedRecipeObj => {\n    //find current object we are working with\n    const recipeArray = recipes.filter(recipe => recipe.id !== updatedRecipeObj.id);\n    recipeArray.push(updatedRecipeObj);\n    setRecipes(recipeArray); //update changed properties, render it without refresh \n  };\n\n  console.log(recipe);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"show-card\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: currentRecipe.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: recipe.img_url,\n          style: {\n            height: '250px'\n          },\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 16\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: recipe.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: recipe.ingredients\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: recipe.instructions\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: () => router.push('/recipes/'),\n        children: \"Back to Main\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 13\n      }, undefined), current_user === recipe.recipe_creator_id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => setEditState(!editState),\n          children: \"Edit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => console.log(\"delete!\"),\n          children: \"Delete\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_SaveButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          recipe: recipe\n        }, recipe.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false), editState === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_EditForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        setEditState: setEditState,\n        recipe: recipe,\n        editHelper: editHelper\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 35\n      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false);\n};\n\n_s(ShowPage, \"YIEcGdj1VlWh1f+KZxZDeCr2WaE=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"], _RecipeContext_state__WEBPACK_IMPORTED_MODULE_6__[\"useRecipeContext\"]];\n});\n\n_c = ShowPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShowPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ShowPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlY2lwZXMvLmpzPzJkYWQiXSwibmFtZXMiOlsiU2hvd1BhZ2UiLCJyZWNpcGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJjdXJyZW50UmVjaXBlIiwic2V0Q3VycmVudFJlY2lwZSIsInVzZVN0YXRlIiwiZWRpdFN0YXRlIiwic2V0RWRpdFN0YXRlIiwicmVjaXBlcyIsInNldFJlY2lwZXMiLCJ1c2VSZWNpcGVDb250ZXh0IiwiZWRpdEhlbHBlciIsInVwZGF0ZWRSZWNpcGVPYmoiLCJyZWNpcGVBcnJheSIsImZpbHRlciIsImlkIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsImltZ191cmwiLCJoZWlnaHQiLCJkZXNjcmlwdGlvbiIsImluZ3JlZGllbnRzIiwiaW5zdHJ1Y3Rpb25zIiwicmVjaXBlX2NyZWF0b3JfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUErQkEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdCO0FBQUE7O0FBQzdCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNQyxZQUFZLEdBQUdDLDBEQUFyQjtBQUNBLFFBQU07QUFBQSxPQUFDQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DQyxzREFBUSxDQUFDUCxNQUFELENBQWxEO0FBRUEsUUFBTTtBQUFBLE9BQUNRLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCRixzREFBUSxDQUFDLElBQUQsQ0FBMUM7QUFFQSxRQUFNO0FBQUNHLFdBQUQ7QUFBVUM7QUFBVixNQUF3QkMsNkVBQWdCLEVBQTlDOztBQUVBLFFBQU1DLFVBQVUsR0FBSUMsZ0JBQUQsSUFBc0I7QUFDckM7QUFDQSxVQUFNQyxXQUFXLEdBQUdMLE9BQU8sQ0FBQ00sTUFBUixDQUFlaEIsTUFBTSxJQUFJQSxNQUFNLENBQUNpQixFQUFQLEtBQWNILGdCQUFnQixDQUFDRyxFQUF4RCxDQUFwQjtBQUNBRixlQUFXLENBQUNHLElBQVosQ0FBaUJKLGdCQUFqQjtBQUNBSCxjQUFVLENBQUNJLFdBQUQsQ0FBVixDQUpxQyxDQUtyQztBQUNILEdBTkQ7O0FBT0FJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZcEIsTUFBWjtBQUVBLHNCQUNJO0FBQUEsMkJBQ0E7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUNJO0FBQUEsa0JBQUtLLGFBQWEsQ0FBQ2dCO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBLCtCQUFHO0FBQUssYUFBRyxFQUFFckIsTUFBTSxDQUFDc0IsT0FBakI7QUFBMEIsZUFBSyxFQUFFO0FBQUNDLGtCQUFNLEVBQUM7QUFBUixXQUFqQztBQUFtRCxhQUFHLEVBQUM7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFBLGtCQUFJdkIsTUFBTSxDQUFDd0I7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLGVBSUk7QUFBQSxrQkFBSXhCLE1BQU0sQ0FBQ3lCO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQUtJO0FBQUEsa0JBQUl6QixNQUFNLENBQUMwQjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEosZUFNSTtBQUFRLGVBQU8sRUFBRSxNQUFNekIsTUFBTSxDQUFDaUIsSUFBUCxDQUFZLFdBQVosQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkosRUFTS2YsWUFBWSxLQUFLSCxNQUFNLENBQUMyQixpQkFBeEIsZ0JBQ0c7QUFBQSxnQ0FDSTtBQUFRLGlCQUFPLEVBQUUsTUFBTWxCLFlBQVksQ0FBQyxDQUFDRCxTQUFGLENBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBUSxpQkFBTyxFQUFFLE1BQU1XLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQSxzQkFESCxnQkFNRztBQUFBLCtCQUNJLHFFQUFDLDhEQUFEO0FBQVksZ0JBQU0sRUFBRXBCO0FBQXBCLFdBQWlDQSxNQUFNLENBQUNpQixFQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosdUJBZlIsRUFvQktULFNBQVMsS0FBSyxJQUFkLGdCQUFxQixxRUFBQyw0REFBRDtBQUFVLG9CQUFZLEVBQUVDLFlBQXhCO0FBQXNELGNBQU0sRUFBRVQsTUFBOUQ7QUFBc0Usa0JBQVUsRUFBRWE7QUFBbEYsU0FBMkNiLE1BQU0sQ0FBQ2lCLEVBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXJCLGdCQUF3SCx1SkFwQjdIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURKO0FBMEJILENBNUNEOztHQUFNbEIsUTtVQUNhRyxxRCxFQU1lVSxxRTs7O0tBUDVCYixROztBQThDU0EsdUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVjaXBlcy9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVIgfSBmcm9tICcuLi8uLi9jdXJyZW50X3VzZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEVkaXRGb3JtIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvRWRpdEZvcm0nXG5pbXBvcnQgU2F2ZUJ1dHRvbiBmcm9tICcuLi8uLi9Db21wb25lbnRzL1NhdmVCdXR0b24nXG5pbXBvcnQgeyB1c2VSZWNpcGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vUmVjaXBlQ29udGV4dC9zdGF0ZSdcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWNpcGVzJylcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcChyZWNpcGUgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiByZWNpcGUuaWQudG9TdHJpbmcoKSB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHMsXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSAvLyByZWRpcmVjdHMgdG8gNDA0IHBhZ2VcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgaWQgPSBjb250ZXh0LnBhcmFtcy5pZDsgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlY2lwZXMvJyArIGlkKVxuICAgIGNvbnN0IHJlY2lwZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7IFxuICAgICAgICAgICAgcmVjaXBlXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuY29uc3QgU2hvd1BhZ2UgPSAoeyByZWNpcGUgfSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgY3VycmVudF91c2VyID0gQ1VSUkVOVF9VU0VSXG4gICAgY29uc3QgW2N1cnJlbnRSZWNpcGUsIHNldEN1cnJlbnRSZWNpcGVdID0gdXNlU3RhdGUocmVjaXBlKVxuXG4gICAgY29uc3QgW2VkaXRTdGF0ZSwgc2V0RWRpdFN0YXRlXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICBjb25zdCB7cmVjaXBlcywgc2V0UmVjaXBlc30gPSB1c2VSZWNpcGVDb250ZXh0KCk7XG5cbiAgICBjb25zdCBlZGl0SGVscGVyID0gKHVwZGF0ZWRSZWNpcGVPYmopID0+IHtcbiAgICAgICAgLy9maW5kIGN1cnJlbnQgb2JqZWN0IHdlIGFyZSB3b3JraW5nIHdpdGhcbiAgICAgICAgY29uc3QgcmVjaXBlQXJyYXkgPSByZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4gcmVjaXBlLmlkICE9PSB1cGRhdGVkUmVjaXBlT2JqLmlkKVxuICAgICAgICByZWNpcGVBcnJheS5wdXNoKHVwZGF0ZWRSZWNpcGVPYmopXG4gICAgICAgIHNldFJlY2lwZXMocmVjaXBlQXJyYXkpXG4gICAgICAgIC8vdXBkYXRlIGNoYW5nZWQgcHJvcGVydGllcywgcmVuZGVyIGl0IHdpdGhvdXQgcmVmcmVzaCBcbiAgICB9XG4gICAgY29uc29sZS5sb2cocmVjaXBlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD4gXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1jYXJkXCI+XG4gICAgICAgICAgICA8aDE+e2N1cnJlbnRSZWNpcGUudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxwPjxpbWcgc3JjPXtyZWNpcGUuaW1nX3VybH0gc3R5bGU9e3toZWlnaHQ6JzI1MHB4J319IGFsdD0nJyAvPjwvcD5cbiAgICAgICAgICAgIDxwPntyZWNpcGUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPHA+e3JlY2lwZS5pbmdyZWRpZW50c308L3A+XG4gICAgICAgICAgICA8cD57cmVjaXBlLmluc3RydWN0aW9uc308L3A+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvcmVjaXBlcy8nKX0+QmFjayB0byBNYWluPC9idXR0b24+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHsvKiBFZGl0IC8gRGVsZXRlIGJ1dHRvbnMgb25seSBhcHBlYXIgaWYgY3VycmVudCB1c2VyIGlzIHRoZSBjcmVhdG9yICovfSAgICAgICAgICAgIFxuICAgICAgICAgICAge2N1cnJlbnRfdXNlciA9PT0gcmVjaXBlLnJlY2lwZV9jcmVhdG9yX2lkID8gXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0U3RhdGUoIWVkaXRTdGF0ZSl9PkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhcImRlbGV0ZSFcIil9PkRlbGV0ZTwvYnV0dG9uPiBcbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICA6IFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxTYXZlQnV0dG9uIHJlY2lwZT17cmVjaXBlfSBrZXk9e3JlY2lwZS5pZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXCJzYXZlIVwiKX0+U2F2ZTwvYnV0dG9uPiAgKi99XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7ZWRpdFN0YXRlID09PSB0cnVlID8gPEVkaXRGb3JtIHNldEVkaXRTdGF0ZT17c2V0RWRpdFN0YXRlfSBrZXk9e3JlY2lwZS5pZH0gcmVjaXBlPXtyZWNpcGV9IGVkaXRIZWxwZXI9e2VkaXRIZWxwZXJ9IC8+IDogPD48Lz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/recipes/[id].js\n");

/***/ })

})