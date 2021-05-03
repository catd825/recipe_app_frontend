webpackHotUpdate_N_E("pages/recipes/new",{

/***/ "./src/Components/Form.js":
/*!********************************!*\
  !*** ./src/Components/Form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Form; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _RecipeContext_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../RecipeContext/state */ \"./src/RecipeContext/state.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/Form.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction Form({\n  recipe,\n  setEditState,\n  editHelper,\n  formType\n}) {\n  _s();\n\n  console.log(formType);\n  const {\n    recipes,\n    setRecipes\n  } = Object(_RecipeContext_state__WEBPACK_IMPORTED_MODULE_5__[\"useRecipeContext\"])();\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_3__[\"CURRENT_USER\"]; //Pre-populate input fields with previous data\n\n  const formObj = {\n    id: (recipe === null || recipe === void 0 ? void 0 : recipe.id) || '',\n    recipe_creator_id: current_user,\n    //only for testing before auth fully implemented\n    title: (recipe === null || recipe === void 0 ? void 0 : recipe.title) || '',\n    ingredients: (recipe === null || recipe === void 0 ? void 0 : recipe.ingredients) || '',\n    instructions: (recipe === null || recipe === void 0 ? void 0 : recipe.instructions) || '',\n    img_url: (recipe === null || recipe === void 0 ? void 0 : recipe.img_url) || '',\n    description: recipe === null || recipe === void 0 ? void 0 : recipe.description\n  }; //Set initial formData state to object to edit\n\n  const {\n    0: formData,\n    1: setFormData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(formObj); //Set state to capture only changes made\n\n  const changeHandler = e => {\n    setFormData(_objectSpread(_objectSpread({}, formData), {}, {\n      [e.target.name]: e.target.value\n    }));\n    console.log(e.target.value);\n  };\n\n  const submitHelper = e => {\n    e.preventDefault();\n    submitHandler();\n  };\n\n  const submitHandler = async () => {\n    if (formType === 'Edit') {\n      const configObj = {\n        method: 'PATCH',\n        headers: {\n          'Content-Type': 'application/json',\n          'Accept': 'application/json'\n        },\n        body: JSON.stringify(formData)\n      };\n      const res = await fetch(`http://localhost:3000/recipes/${recipe.id}`, configObj);\n      const data = await res.json(); //Toggle edit page to disappear\n\n      setEditState(null);\n      editHelper(formData);\n      const updatedRecipeArray = recipes.filter(recipe => recipe.id !== data.id);\n      setRecipes([...updatedRecipeArray, data].sort());\n    } else if (formType === 'Create') {\n      const configObj = {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n          'Accept': 'application/json'\n        },\n        body: JSON.stringify(formData)\n      };\n      const res = await fetch('http://localhost:3000/recipes', configObj);\n      const data = await res.json();\n      const newRecipeArray = [...recipes, data];\n      setRecipes(newRecipeArray);\n      router.push('/recipes');\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        padding: '2em'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: submitHelper,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Recipe Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.title,\n          type: \"text\",\n          name: \"title\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Ingredients\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.ingredients,\n          type: \"text\",\n          name: \"ingredients\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Instructions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.instructions,\n          type: \"text\",\n          name: \"instructions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Add Photo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.img_url,\n          type: \"text\",\n          name: \"img_url\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Description\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.description,\n          type: \"text\",\n          name: \"description\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }, this)\n  }, void 0, false);\n}\n\n_s(Form, \"fdZjzuWeQig4dRgxHtRwexX0YDo=\", false, function () {\n  return [_RecipeContext_state__WEBPACK_IMPORTED_MODULE_5__[\"useRecipeContext\"], next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Form;\n\nvar _c;\n\n$RefreshReg$(_c, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRm9ybS5qcz8zYzA5Il0sIm5hbWVzIjpbIkZvcm0iLCJyZWNpcGUiLCJzZXRFZGl0U3RhdGUiLCJlZGl0SGVscGVyIiwiZm9ybVR5cGUiLCJjb25zb2xlIiwibG9nIiwicmVjaXBlcyIsInNldFJlY2lwZXMiLCJ1c2VSZWNpcGVDb250ZXh0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiY3VycmVudF91c2VyIiwiQ1VSUkVOVF9VU0VSIiwiZm9ybU9iaiIsImlkIiwicmVjaXBlX2NyZWF0b3JfaWQiLCJ0aXRsZSIsImluZ3JlZGllbnRzIiwiaW5zdHJ1Y3Rpb25zIiwiaW1nX3VybCIsImRlc2NyaXB0aW9uIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInVzZVN0YXRlIiwiY2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzdWJtaXRIZWxwZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdEhhbmRsZXIiLCJjb25maWdPYmoiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwidXBkYXRlZFJlY2lwZUFycmF5IiwiZmlsdGVyIiwic29ydCIsIm5ld1JlY2lwZUFycmF5IiwicHVzaCIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBZTtBQUFFQyxRQUFGO0FBQVVDLGNBQVY7QUFBd0JDLFlBQXhCO0FBQW9DQztBQUFwQyxDQUFmLEVBQStEO0FBQUE7O0FBQzFFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBLFFBQU07QUFBQ0csV0FBRDtBQUFVQztBQUFWLE1BQXdCQyw2RUFBZ0IsRUFBOUM7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsUUFBTUMsWUFB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QUFBQSxnQkFUUixlQVVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZKLGVBV0k7QUFBTyxrQkFBUSxFQUFFTSxhQUFqQjtBQUFnQyxlQUFLLEVBQUVILFFBQVEsQ0FBQ0YsT0FBaEQ7QUFBeUQsY0FBSSxFQUFDLE1BQTlEO0FBQXFFLGNBQUksRUFBQztBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhKLGVBWVE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaUixlQWFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJKLGVBY0k7QUFBTyxrQkFBUSxFQUFFSyxhQUFqQjtBQUFnQyxlQUFLLEVBQUVILFFBQVEsQ0FBQ0QsV0FBaEQ7QUFBNkQsY0FBSSxFQUFDLE1BQWxFO0FBQXlFLGNBQUksRUFBQztBQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRKLGVBZVE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmUixlQWdCSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsbUJBREo7QUF3Qkg7O0dBckd1QnJCLEk7VUFFVVMscUUsRUFDZkUscUQ7OztLQUhLWCxJIiwiZmlsZSI6Ii4vc3JjL0NvbXBvbmVudHMvRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVIgfSBmcm9tICcuLi9jdXJyZW50X3VzZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZVJlY2lwZUNvbnRleHQgfSBmcm9tICcuLi9SZWNpcGVDb250ZXh0L3N0YXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtICh7IHJlY2lwZSwgc2V0RWRpdFN0YXRlLCBlZGl0SGVscGVyLCBmb3JtVHlwZSB9KSB7XG4gICAgY29uc29sZS5sb2coZm9ybVR5cGUpXG4gICAgY29uc3Qge3JlY2lwZXMsIHNldFJlY2lwZXN9ID0gdXNlUmVjaXBlQ29udGV4dCgpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICBjb25zdCBjdXJyZW50X3VzZXIgPSBDVVJSRU5UX1VTRVJcbiAgICAvL1ByZS1wb3B1bGF0ZSBpbnB1dCBmaWVsZHMgd2l0aCBwcmV2aW91cyBkYXRhXG4gICAgY29uc3QgZm9ybU9iaiA9IHtcbiAgICAgICAgaWQ6IHJlY2lwZT8uaWQgfHwgJycsXG4gICAgICAgIHJlY2lwZV9jcmVhdG9yX2lkOiBjdXJyZW50X3VzZXIsIC8vb25seSBmb3IgdGVzdGluZyBiZWZvcmUgYXV0aCBmdWxseSBpbXBsZW1lbnRlZFxuICAgICAgICB0aXRsZTogcmVjaXBlPy50aXRsZSB8fCAnJyxcbiAgICAgICAgaW5ncmVkaWVudHM6IHJlY2lwZT8uaW5ncmVkaWVudHMgfHwgJycsXG4gICAgICAgIGluc3RydWN0aW9uczogcmVjaXBlPy5pbnN0cnVjdGlvbnMgfHwgJycsXG4gICAgICAgIGltZ191cmw6IHJlY2lwZT8uaW1nX3VybCB8fCAnJyxcbiAgICAgICAgZGVzY3JpcHRpb246IHJlY2lwZT8uZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICAvL1NldCBpbml0aWFsIGZvcm1EYXRhIHN0YXRlIHRvIG9iamVjdCB0byBlZGl0XG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZShmb3JtT2JqKVxuICAgIC8vU2V0IHN0YXRlIHRvIGNhcHR1cmUgb25seSBjaGFuZ2VzIG1hZGVcbiAgICBjb25zdCBjaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICAgICAgLi4uZm9ybURhdGEsIFxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBzdWJtaXRIZWxwZXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc3VibWl0SGFuZGxlcigpXG4gICAgfVxuXG5cbiAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZihmb3JtVHlwZSA9PT0gJ0VkaXQnKXtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZ09iaiA9IHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVjaXBlcy8ke3JlY2lwZS5pZH1gLCBjb25maWdPYmopXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgICAgIC8vVG9nZ2xlIGVkaXQgcGFnZSB0byBkaXNhcHBlYXJcbiAgICAgICAgICAgIHNldEVkaXRTdGF0ZShudWxsKVxuICAgICAgICAgICAgZWRpdEhlbHBlcihmb3JtRGF0YSlcblxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFJlY2lwZUFycmF5ID0gcmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS5pZCAhPT0gZGF0YS5pZClcblxuICAgICAgICAgICAgc2V0UmVjaXBlcyhbXG4gICAgICAgICAgICAgICAgLi4udXBkYXRlZFJlY2lwZUFycmF5LCBkYXRhXG4gICAgICAgICAgICBdLnNvcnQoKSlcbiAgICAgICAgfSBlbHNlIGlmIChmb3JtVHlwZSA9PT0gJ0NyZWF0ZScpe1xuICAgICAgICAgICAgY29uc3QgY29uZmlnT2JqID0ge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVjaXBlcycsIGNvbmZpZ09iailcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1JlY2lwZUFycmF5ID0gWy4uLnJlY2lwZXMsIGRhdGFdXG4gICAgICAgICAgICAgICAgc2V0UmVjaXBlcyhuZXdSZWNpcGVBcnJheSlcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL3JlY2lwZXMnKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGRpdiBzdHlsZT0ge3sgcGFkZGluZzogJzJlbSd9fT5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIZWxwZXJ9PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5SZWNpcGUgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17Zm9ybURhdGEudGl0bGV9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+SW5ncmVkaWVudHM8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLmluZ3JlZGllbnRzfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbmdyZWRpZW50c1wiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkluc3RydWN0aW9uczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17Zm9ybURhdGEuaW5zdHJ1Y3Rpb25zfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbnN0cnVjdGlvbnNcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5BZGQgUGhvdG88L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLmltZ191cmx9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImltZ191cmxcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17Zm9ybURhdGEuZGVzY3JpcHRpb259IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXB0aW9uXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/Form.js\n");

/***/ })

})