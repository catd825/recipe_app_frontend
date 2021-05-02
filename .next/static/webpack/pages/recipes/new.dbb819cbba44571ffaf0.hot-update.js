webpackHotUpdate_N_E("pages/recipes/new",{

/***/ "./src/Components/Form.js":
/*!********************************!*\
  !*** ./src/Components/Form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Form; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _RecipeContext_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../RecipeContext/state */ \"./src/RecipeContext/state.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/Form.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction Form({\n  recipe,\n  setEditState,\n  editHelper,\n  formType\n}) {\n  _s();\n\n  console.log(formType);\n  const {\n    recipes,\n    setRecipes\n  } = Object(_RecipeContext_state__WEBPACK_IMPORTED_MODULE_5__[\"useRecipeContext\"])();\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_3__[\"CURRENT_USER\"]; //Pre-populate input fields with previous data\n\n  console.log('recipe', recipe);\n  const formObj = {\n    id: recipe === null || recipe === void 0 ? void 0 : recipe.id,\n    recipe_creator_id: current_user || '',\n    //only for testing before auth fully implemented\n    title: recipe.title || '',\n    ingredients: recipe.ingredients || '',\n    instructions: recipe.instructions || '',\n    img_url: recipe.img_url || '',\n    description: recipe.description || ''\n  }; //Set initial formData state to object to edit\n\n  const {\n    0: formData,\n    1: setFormData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(formObj); //Set state to capture only changes made\n\n  const changeHandler = e => {\n    setFormData(_objectSpread(_objectSpread({}, formData), {}, {\n      [e.target.name]: e.target.value\n    })); // console.log(e.target.value)\n  };\n\n  const submitHelper = e => {\n    e.preventDefault();\n    submitHandler();\n  };\n\n  const submitHandler = async () => {\n    if (formType === 'Edit') {\n      const configObj = {\n        method: 'PATCH',\n        headers: {\n          'Content-Type': 'application/json',\n          'Accept': 'application/json'\n        },\n        body: JSON.stringify(formData)\n      };\n      const res = await fetch(`http://localhost:3000/recipes/${recipe.id}`, configObj);\n      const data = await res.json(); //Toggle edit page to disappear\n\n      setEditState(null);\n      editHelper(formData);\n      const updatedRecipeArray = recipes.filter(recipe => recipe.id !== data.id);\n      setRecipes([...updatedRecipeArray, data].sort());\n    } else if (formType === 'Create') {\n      const configObj = {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n          'Accept': 'application/json'\n        },\n        body: JSON.stringify(formData)\n      };\n      const res = await fetch('http://localhost:3000/recipes', configObj);\n      const data = await res.json();\n      const newRecipeArray = [...recipes, data];\n      setRecipes(newRecipeArray);\n      router.push('/recipes');\n    }\n  }; // //Define router and helper function to refresh upon edit submission\n  // const router = useRouter();\n  // const refreshData = () => {\n  //     router.replace(router.asPath);\n  // }\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        padding: '2em'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: submitHelper,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Recipe Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.title,\n          type: \"text\",\n          name: \"title\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Ingredients\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.ingredients,\n          type: \"text\",\n          name: \"ingredients\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Instructions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.instructions,\n          type: \"text\",\n          name: \"instructions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Add Photo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.img_url,\n          type: \"text\",\n          name: \"img_url\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Description\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.description,\n          type: \"text\",\n          name: \"description\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }, this)\n  }, void 0, false);\n}\n\n_s(Form, \"fdZjzuWeQig4dRgxHtRwexX0YDo=\", false, function () {\n  return [_RecipeContext_state__WEBPACK_IMPORTED_MODULE_5__[\"useRecipeContext\"], next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Form;\n\nvar _c;\n\n$RefreshReg$(_c, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRm9ybS5qcz8zYzA5Il0sIm5hbWVzIjpbIkZvcm0iLCJyZWNpcGUiLCJzZXRFZGl0U3RhdGUiLCJlZGl0SGVscGVyIiwiZm9ybVR5cGUiLCJjb25zb2xlIiwibG9nIiwicmVjaXBlcyIsInNldFJlY2lwZXMiLCJ1c2VSZWNpcGVDb250ZXh0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiY3VycmVudF91c2VyIiwiQ1VSUkVOVF9VU0VSIiwiZm9ybU9iaiIsImlkIiwicmVjaXBlX2NyZWF0b3JfaWQiLCJ0aXRsZSIsImluZ3JlZGllbnRzIiwiaW5zdHJ1Y3Rpb25zIiwiaW1nX3VybCIsImRlc2NyaXB0aW9uIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInVzZVN0YXRlIiwiY2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzdWJtaXRIZWxwZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdEhhbmRsZXIiLCJjb25maWdPYmoiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwidXBkYXRlZFJlY2lwZUFycmF5IiwiZmlsdGVyIiwic29ydCIsIm5ld1JlY2lwZUFycmF5IiwicHVzaCIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBZTtBQUFFQyxRQUFGO0FBQVVDLGNBQVY7QUFBd0JDLFlBQXhCO0FBQW9DQztBQUFwQyxDQUFmLEVBQStEO0FBQUE7O0FBQzFFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBLFFBQU07QUFBQ0csV0FBRDtBQUFVQztBQUFWLE1BQXdCQyw2RUFBZ0IsRUFBOUM7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsUUFBTUMsWUFB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RSxjQUFJLEVBQUM7QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYSixlQVlRO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWlIsZUFhSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiSixlQWNJO0FBQU8sa0JBQVEsRUFBRUssYUFBakI7QUFBZ0MsZUFBSyxFQUFFSCxRQUFRLENBQUNELFdBQWhEO0FBQTZELGNBQUksRUFBQyxNQUFsRTtBQUF5RSxjQUFJLEVBQUM7QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkSixlQWVRO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZlIsZUFnQkk7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURKO0FBd0JIOztHQTVHdUJyQixJO1VBRVVTLHFFLEVBQ2ZFLHFEOzs7S0FIS1gsSSIsImZpbGUiOiIuL3NyYy9Db21wb25lbnRzL0Zvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSIH0gZnJvbSAnLi4vY3VycmVudF91c2VyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSZWNpcGVDb250ZXh0IH0gZnJvbSAnLi4vUmVjaXBlQ29udGV4dC9zdGF0ZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSAoeyByZWNpcGUsIHNldEVkaXRTdGF0ZSwgZWRpdEhlbHBlciwgZm9ybVR5cGUgfSkge1xuICAgIGNvbnNvbGUubG9nKGZvcm1UeXBlKVxuICAgIGNvbnN0IHtyZWNpcGVzLCBzZXRSZWNpcGVzfSA9IHVzZVJlY2lwZUNvbnRleHQoKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgY3VycmVudF91c2VyID0gQ1VSUkVOVF9VU0VSXG4gICAgLy9QcmUtcG9wdWxhdGUgaW5wdXQgZmllbGRzIHdpdGggcHJldmlvdXMgZGF0YVxuICAgIGNvbnNvbGUubG9nKCdyZWNpcGUnLCByZWNpcGUpXG4gICAgY29uc3QgZm9ybU9iaiA9IHtcbiAgICAgICAgaWQ6IHJlY2lwZT8uaWQsXG4gICAgICAgIHJlY2lwZV9jcmVhdG9yX2lkOiBjdXJyZW50X3VzZXIgfHwgJycsIC8vb25seSBmb3IgdGVzdGluZyBiZWZvcmUgYXV0aCBmdWxseSBpbXBsZW1lbnRlZFxuICAgICAgICB0aXRsZTogcmVjaXBlLnRpdGxlIHx8ICcnLFxuICAgICAgICBpbmdyZWRpZW50czogcmVjaXBlLmluZ3JlZGllbnRzIHx8ICcnLFxuICAgICAgICBpbnN0cnVjdGlvbnM6IHJlY2lwZS5pbnN0cnVjdGlvbnMgfHwgJycsXG4gICAgICAgIGltZ191cmw6IHJlY2lwZS5pbWdfdXJsIHx8ICcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogcmVjaXBlLmRlc2NyaXB0aW9uIHx8ICcnXG4gICAgfVxuXG4gICAgLy9TZXQgaW5pdGlhbCBmb3JtRGF0YSBzdGF0ZSB0byBvYmplY3QgdG8gZWRpdFxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoZm9ybU9iailcbiAgICAvL1NldCBzdGF0ZSB0byBjYXB0dXJlIG9ubHkgY2hhbmdlcyBtYWRlXG4gICAgY29uc3QgY2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgICAgIC4uLmZvcm1EYXRhLCBcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3Qgc3VibWl0SGVscGVyID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHN1Ym1pdEhhbmRsZXIoKVxuICAgIH1cblxuXG4gICAgY29uc3Qgc3VibWl0SGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYoZm9ybVR5cGUgPT09ICdFZGl0Jyl7XG4gICAgICAgICAgICBjb25zdCBjb25maWdPYmogPSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlY2lwZXMvJHtyZWNpcGUuaWR9YCwgY29uZmlnT2JqKVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAvL1RvZ2dsZSBlZGl0IHBhZ2UgdG8gZGlzYXBwZWFyXG4gICAgICAgICAgICBzZXRFZGl0U3RhdGUobnVsbClcbiAgICAgICAgICAgIGVkaXRIZWxwZXIoZm9ybURhdGEpXG5cbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRSZWNpcGVBcnJheSA9IHJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiByZWNpcGUuaWQgIT09IGRhdGEuaWQpXG5cbiAgICAgICAgICAgIHNldFJlY2lwZXMoW1xuICAgICAgICAgICAgICAgIC4uLnVwZGF0ZWRSZWNpcGVBcnJheSwgZGF0YVxuICAgICAgICAgICAgXS5zb3J0KCkpXG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybVR5cGUgPT09ICdDcmVhdGUnKXtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZ09iaiA9IHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSlcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlY2lwZXMnLCBjb25maWdPYmopXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdSZWNpcGVBcnJheSA9IFsuLi5yZWNpcGVzLCBkYXRhXVxuICAgICAgICAgICAgICAgIHNldFJlY2lwZXMobmV3UmVjaXBlQXJyYXkpXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9yZWNpcGVzJyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgICAgICAvLyAvL0RlZmluZSByb3V0ZXIgYW5kIGhlbHBlciBmdW5jdGlvbiB0byByZWZyZXNoIHVwb24gZWRpdCBzdWJtaXNzaW9uXG4gICAgICAgIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgICAgICAvLyBjb25zdCByZWZyZXNoRGF0YSA9ICgpID0+IHtcbiAgICAgICAgLy8gICAgIHJvdXRlci5yZXBsYWNlKHJvdXRlci5hc1BhdGgpO1xuICAgICAgICAvLyB9XG4gICAgXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGRpdiBzdHlsZT0ge3sgcGFkZGluZzogJzJlbSd9fT5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIZWxwZXJ9PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5SZWNpcGUgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17Zm9ybURhdGEudGl0bGV9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+SW5ncmVkaWVudHM8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLmluZ3JlZGllbnRzfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbmdyZWRpZW50c1wiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkluc3RydWN0aW9uczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17Zm9ybURhdGEuaW5zdHJ1Y3Rpb25zfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbnN0cnVjdGlvbnNcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5BZGQgUGhvdG88L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLmltZ191cmx9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImltZ191cmxcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17Zm9ybURhdGEuZGVzY3JpcHRpb259IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXB0aW9uXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/Form.js\n");

/***/ })

})