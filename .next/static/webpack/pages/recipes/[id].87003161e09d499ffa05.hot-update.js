webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/Components/EditForm.js":
/*!************************************!*\
  !*** ./src/Components/EditForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EditForm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n/* harmony import */ var _RecipeContext_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../RecipeContext/state */ \"./src/RecipeContext/state.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/EditForm.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // import { useRouter } from 'next/router'\n\n\n\nfunction EditForm({\n  recipe,\n  setEditState,\n  editHelper\n}) {\n  _s();\n\n  const {\n    recipes,\n    setRecipes\n  } = Object(_RecipeContext_state__WEBPACK_IMPORTED_MODULE_4__[\"useRecipeContext\"])();\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_3__[\"CURRENT_USER\"]; //Pre-populate input fields with previous data\n\n  const formObj = {\n    id: recipe.id,\n    recipe_creator_id: current_user,\n    //only for testing before auth fully implemented\n    title: recipe.title,\n    ingredients: recipe.ingredients,\n    instructions: recipe.instructions,\n    img_url: recipe.img_url,\n    description: recipe.description\n  }; //Set initial formData state to object to edit\n\n  const {\n    0: formData,\n    1: setFormData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(formObj); //Set state to capture only changes made\n\n  const changeHandler = e => {\n    setFormData(_objectSpread(_objectSpread({}, formData), {}, {\n      [e.target.name]: e.target.value\n    })); // console.log(e.target.value)\n  };\n\n  const submitHelper = e => {\n    e.preventDefault();\n    submitHandler();\n  };\n\n  const submitHandler = async () => {\n    const configObj = {\n      method: 'PATCH',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      },\n      body: JSON.stringify(formData)\n    };\n    const res = await fetch(`http://localhost:3000/recipes/${recipe.id}`, configObj);\n    const data = await res.json(); //Toggle edit page to disappear\n\n    setEditState(null);\n    editHelper(formData);\n    const updatedRecipeArray = recipes.filter(recipe => recipe.id !== data.id);\n    setRecipes([...updatedRecipeArray, data]);\n    console.log(data);\n    /*\n    //Invoke refresh helper\n    if (res.status < 300) {\n        refreshData();\n    }\n    */\n  }; // //Define router and helper function to refresh upon edit submission\n  // const router = useRouter();\n  // const refreshData = () => {\n  //     router.replace(router.asPath);\n  // }\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        padding: '2em'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: submitHelper,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Recipe Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.title,\n          type: \"text\",\n          name: \"title\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Ingredients\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.ingredients,\n          type: \"text\",\n          name: \"ingredients\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Instructions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.instructions,\n          type: \"text\",\n          name: \"instructions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Add Photo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.img_url,\n          type: \"text\",\n          name: \"img_url\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Description\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.description,\n          type: \"text\",\n          name: \"description\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }, this)\n  }, void 0, false);\n}\n\n_s(EditForm, \"2L+Xg9Deb9iqyLo0KdvdzjIo1Rs=\", false, function () {\n  return [_RecipeContext_state__WEBPACK_IMPORTED_MODULE_4__[\"useRecipeContext\"]];\n});\n\n_c = EditForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"EditForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRWRpdEZvcm0uanM/NWEyNSJdLCJuYW1lcyI6WyJFZGl0Rm9ybSIsInJlY2lwZSIsInNldEVkaXRTdGF0ZSIsImVkaXRIZWxwZXIiLCJyZWNpcGVzIiwic2V0UmVjaXBlcyIsInVzZVJlY2lwZUNvbnRleHQiLCJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJmb3JtT2JqIiwiaWQiLCJyZWNpcGVfY3JlYXRvcl9pZCIsInRpdGxlIiwiaW5ncmVkaWVudHMiLCJpbnN0cnVjdGlvbnMiLCJpbWdfdXJsIiwiZGVzY3JpcHRpb24iLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlU3RhdGUiLCJjaGFuZ2VIYW5kbGVyIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInN1Ym1pdEhlbHBlciIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0SGFuZGxlciIsImNvbmZpZ09iaiIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJ1cGRhdGVkUmVjaXBlQXJyYXkiLCJmaWx0ZXIiLCJjb25zb2xlIiwibG9nIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxDQUFtQjtBQUFFQyxRQUFGO0FBQVVDLGNBQVY7QUFBd0JDO0FBQXhCLENBQW5CLEVBQXlEO0FBQUE7O0FBRXBFLFFBQU07QUFBQ0MsV0FBRDtBQUFVQztBQUFWLE1BQXdCQyw2RUFBZ0IsRUFBOUM7QUFFQSxRQUFNQyxZQUFZLEdBQUdDLDBEQUFyQixDQUpvRSxDQUtwRTs7QUFDQSxRQUFNQyxPQUFPLEdBQUc7QUFDWkMsTUFBRSxFQUFFVCxNQUFNLENBQUNTLEVBREM7QUFFWkMscUJBQWlCLEVBQUVKLFlBRlA7QUFFcUI7QUFDakNLLFNBQUssRUFBRVgsTUFBTSxDQUFD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L0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSixlQVNRO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVFIsZUFVSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWSixlQVdJO0FBQU8sa0JBQVEsRUFBRU0sYUFBakI7QUFBZ0MsZUFBSyxFQUFFSCxRQUFRLENBQUNGLE9BQWhEO0FBQXlELGNBQUksRUFBQyxNQUE5RDtBQUFxRSxjQUFJLEVBQUM7QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYSixlQVlRO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWlIsZUFhSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiSixlQWNJO0FBQU8sa0JBQVEsRUFBRUssYUFBakI7QUFBZ0MsZUFBSyxFQUFFSCxRQUFRLENBQUNELFdBQWhEO0FBQTZELGNBQUksRUFBQyxNQUFsRTtBQUF5RSxjQUFJLEVBQUM7QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkSixlQWVRO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZlIsZUFnQkk7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURKO0FBd0JIOztHQTlGdUJoQixRO1VBRVVNLHFFOzs7S0FGVk4sUSIsImZpbGUiOiIuL3NyYy9Db21wb25lbnRzL0VkaXRGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSIH0gZnJvbSAnLi4vY3VycmVudF91c2VyJ1xuaW1wb3J0IHsgdXNlUmVjaXBlQ29udGV4dCB9IGZyb20gJy4uL1JlY2lwZUNvbnRleHQvc3RhdGUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRGb3JtICh7IHJlY2lwZSwgc2V0RWRpdFN0YXRlLCBlZGl0SGVscGVyIH0pIHtcblxuICAgIGNvbnN0IHtyZWNpcGVzLCBzZXRSZWNpcGVzfSA9IHVzZVJlY2lwZUNvbnRleHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRfdXNlciA9IENVUlJFTlRfVVNFUlxuICAgIC8vUHJlLXBvcHVsYXRlIGlucHV0IGZpZWxkcyB3aXRoIHByZXZpb3VzIGRhdGFcbiAgICBjb25zdCBmb3JtT2JqID0ge1xuICAgICAgICBpZDogcmVjaXBlLmlkLFxuICAgICAgICByZWNpcGVfY3JlYXRvcl9pZDogY3VycmVudF91c2VyLCAvL29ubHkgZm9yIHRlc3RpbmcgYmVmb3JlIGF1dGggZnVsbHkgaW1wbGVtZW50ZWRcbiAgICAgICAgdGl0bGU6IHJlY2lwZS50aXRsZSxcbiAgICAgICAgaW5ncmVkaWVudHM6IHJlY2lwZS5pbmdyZWRpZW50cyxcbiAgICAgICAgaW5zdHJ1Y3Rpb25zOiByZWNpcGUuaW5zdHJ1Y3Rpb25zLFxuICAgICAgICBpbWdfdXJsOiByZWNpcGUuaW1nX3VybCxcbiAgICAgICAgZGVzY3JpcHRpb246IHJlY2lwZS5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIC8vU2V0IGluaXRpYWwgZm9ybURhdGEgc3RhdGUgdG8gb2JqZWN0IHRvIGVkaXRcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKGZvcm1PYmopXG4gICAgLy9TZXQgc3RhdGUgdG8gY2FwdHVyZSBvbmx5IGNoYW5nZXMgbWFkZVxuICAgIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgICAgICAuLi5mb3JtRGF0YSwgXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IHN1Ym1pdEhlbHBlciA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzdWJtaXRIYW5kbGVyKClcbiAgICB9XG5cblxuICAgIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbmZpZ09iaiA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlY2lwZXMvJHtyZWNpcGUuaWR9YCwgY29uZmlnT2JqKVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgLy9Ub2dnbGUgZWRpdCBwYWdlIHRvIGRpc2FwcGVhclxuICAgICAgICBzZXRFZGl0U3RhdGUobnVsbClcbiAgICAgICAgZWRpdEhlbHBlcihmb3JtRGF0YSlcblxuICAgICAgICBjb25zdCB1cGRhdGVkUmVjaXBlQXJyYXkgPSByZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4gcmVjaXBlLmlkICE9PSBkYXRhLmlkKVxuXG4gICAgICAgIHNldFJlY2lwZXMoW1xuICAgICAgICAgICAgLi4udXBkYXRlZFJlY2lwZUFycmF5LCBkYXRhXG4gICAgICAgIF0pXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIC8qXG4gICAgICAgIC8vSW52b2tlIHJlZnJlc2ggaGVscGVyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICByZWZyZXNoRGF0YSgpO1xuICAgICAgICB9XG4gICAgICAgICovXG4gICAgfVxuXG4gICAgICAgIC8vIC8vRGVmaW5lIHJvdXRlciBhbmQgaGVscGVyIGZ1bmN0aW9uIHRvIHJlZnJlc2ggdXBvbiBlZGl0IHN1Ym1pc3Npb25cbiAgICAgICAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgICAgIC8vIGNvbnN0IHJlZnJlc2hEYXRhID0gKCkgPT4ge1xuICAgICAgICAvLyAgICAgcm91dGVyLnJlcGxhY2Uocm91dGVyLmFzUGF0aCk7XG4gICAgICAgIC8vIH1cbiAgICBcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IHN0eWxlPSB7eyBwYWRkaW5nOiAnMmVtJ319PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhlbHBlcn0+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlJlY2lwZSBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS50aXRsZX0gdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5JbmdyZWRpZW50czwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17Zm9ybURhdGEuaW5ncmVkaWVudHN9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImluZ3JlZGllbnRzXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+SW5zdHJ1Y3Rpb25zPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS5pbnN0cnVjdGlvbnN9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImluc3RydWN0aW9uc1wiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkFkZCBQaG90bzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17Zm9ybURhdGEuaW1nX3VybH0gdHlwZT1cInRleHRcIiBuYW1lPVwiaW1nX3VybFwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS5kZXNjcmlwdGlvbn0gdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpcHRpb25cIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/EditForm.js\n");

/***/ })

})