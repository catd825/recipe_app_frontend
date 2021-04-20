webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/Components/EditForm.js":
/*!************************************!*\
  !*** ./src/Components/EditForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EditForm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n/* harmony import */ var _RecipeContext_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../RecipeContext/state */ \"./src/RecipeContext/state.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/EditForm.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // import { useRouter } from 'next/router'\n\n\n\nfunction EditForm({\n  recipe,\n  setEditState,\n  editHelper\n}) {\n  _s();\n\n  const {\n    recipes,\n    setRecipes\n  } = Object(_RecipeContext_state__WEBPACK_IMPORTED_MODULE_4__[\"useRecipeContext\"])();\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_3__[\"CURRENT_USER\"]; //Pre-populate input fields with previous data\n\n  const formObj = {\n    id: recipe.id,\n    recipe_creator_id: current_user,\n    //only for testing before auth fully implemented\n    title: recipe.title,\n    ingredients: recipe.ingredients,\n    instructions: recipe.instructions,\n    img_url: recipe.img_url,\n    description: recipe.description\n  }; //Set initial formData state to object to edit\n\n  const {\n    0: formData,\n    1: setFormData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(formObj); //Set state to capture only changes made\n\n  const changeHandler = e => {\n    setFormData(_objectSpread(_objectSpread({}, formData), {}, {\n      [e.target.name]: e.target.value\n    })); // console.log(e.target.value)\n  };\n\n  const submitHelper = e => {\n    e.preventDefault();\n    submitHandler();\n  };\n\n  const submitHandler = async () => {\n    const configObj = {\n      method: 'PATCH',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      },\n      body: JSON.stringify(formData)\n    };\n    const res = await fetch(`http://localhost:3000/recipes/${recipe.id}`, configObj);\n    const data = await res.json(); //Toggle edit page to disappear\n\n    setEditState(null);\n    editHelper(formData);\n    const updatedRecipeArray = recipes.filter(recipe => recipe.id !== data.id);\n    setRecipes([updatedRecipeArray, data]);\n    console.log(data);\n    /*\n    //Invoke refresh helper\n    if (res.status < 300) {\n        refreshData();\n    }\n    */\n  }; // //Define router and helper function to refresh upon edit submission\n  // const router = useRouter();\n  // const refreshData = () => {\n  //     router.replace(router.asPath);\n  // }\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        padding: '2em'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: submitHelper,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Recipe Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.title,\n          type: \"text\",\n          name: \"title\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Ingredients\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.ingredients,\n          type: \"text\",\n          name: \"ingredients\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Instructions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.instructions,\n          type: \"text\",\n          name: \"instructions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Add Photo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.img_url,\n          type: \"text\",\n          name: \"img_url\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Description\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.description,\n          type: \"text\",\n          name: \"description\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }, this)\n  }, void 0, false);\n}\n\n_s(EditForm, \"2L+Xg9Deb9iqyLo0KdvdzjIo1Rs=\", false, function () {\n  return [_RecipeContext_state__WEBPACK_IMPORTED_MODULE_4__[\"useRecipeContext\"]];\n});\n\n_c = EditForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"EditForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRWRpdEZvcm0uanM/NWEyNSJdLCJuYW1lcyI6WyJFZGl0Rm9ybSIsInJlY2lwZSIsInNldEVkaXRTdGF0ZSIsImVkaXRIZWxwZXIiLCJyZWNpcGVzIiwic2V0UmVjaXBlcyIsInVzZVJlY2lwZUNvbnRleHQiLCJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJmb3JtT2JqIiwiaWQiLCJyZWNpcGVfY3JlYXRvcl9pZCIsInRpdGxlIiwiaW5ncmVkaWVudHMiLCJpbnN0cnVjdGlvbnMiLCJpbWdfdXJsIiwiZGVzY3JpcHRpb24iLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlU3RhdGUiLCJjaGFuZ2VIYW5kbGVyIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInN1Ym1pdEhlbHBlciIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0SGFuZGxlciIsImNvbmZpZ09iaiIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJ1cGRhdGVkUmVjaXBlQXJyYXkiLCJmaWx0ZXIiLCJjb25zb2xlIiwibG9nIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxDQUFtQjtBQUFFQyxRQUFGO0FBQVVDLGNBQVY7QUFBd0JDO0FBQXhCLENBQW5CLEVBQXlEO0FBQUE7O0FBRXBFLFFBQU07QUFBQ0MsV0FBRDtBQUFVQztBQUFWLE1BQXdCQyw2RUFBZ0IsRUFBOUM7QUFFQSxRQUFNQyxZQUFZLEdBQUdDLDBEQUFyQixDQUpvRSxDQUtwRTs7QUFDQSxRQUFNQyxPQUFPLEdBQUc7QUFDWkMsTUFBRSxFQUFFVCxNQUFNLENBQUNTLEVBREM7QUFFWkMscUJBQWlCLEVBQUVKLFlBRlA7QUFFcUI7QUFDakNLLFNBQUssRUFBRVgsTUFBTSxDQUFD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O0FBQUE7QUFBQTtBQUFBLGdCQVJKLGVBU1E7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFUUixlQVVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZKLGVBV0k7QUFBTyxrQkFBUSxFQUFFTSxhQUFqQjtBQUFnQyxlQUFLLEVBQUVILFFBQVEsQ0FBQ0YsT0FBaEQ7QUFBeUQsY0FBSSxFQUFDLE1BQTlEO0FBQXFFLGNBQUksRUFBQztBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhKLGVBWVE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaUixlQWFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJKLGVBY0k7QUFBTyxrQkFBUSxFQUFFSyxhQUFqQjtBQUFnQyxlQUFLLEVBQUVILFFBQVEsQ0FBQ0QsV0FBaEQ7QUFBNkQsY0FBSSxFQUFDLE1BQWxFO0FBQXlFLGNBQUksRUFBQztBQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRKLGVBZVE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmUixlQWdCSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsbUJBREo7QUF3Qkg7O0dBOUZ1QmhCLFE7VUFFVU0scUU7OztLQUZWTixRIiwiZmlsZSI6Ii4vc3JjL0NvbXBvbmVudHMvRWRpdEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVIgfSBmcm9tICcuLi9jdXJyZW50X3VzZXInXG5pbXBvcnQgeyB1c2VSZWNpcGVDb250ZXh0IH0gZnJvbSAnLi4vUmVjaXBlQ29udGV4dC9zdGF0ZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdEZvcm0gKHsgcmVjaXBlLCBzZXRFZGl0U3RhdGUsIGVkaXRIZWxwZXIgfSkge1xuXG4gICAgY29uc3Qge3JlY2lwZXMsIHNldFJlY2lwZXN9ID0gdXNlUmVjaXBlQ29udGV4dCgpO1xuXG4gICAgY29uc3QgY3VycmVudF91c2VyID0gQ1VSUkVOVF9VU0VSXG4gICAgLy9QcmUtcG9wdWxhdGUgaW5wdXQgZmllbGRzIHdpdGggcHJldmlvdXMgZGF0YVxuICAgIGNvbnN0IGZvcm1PYmogPSB7XG4gICAgICAgIGlkOiByZWNpcGUuaWQsXG4gICAgICAgIHJlY2lwZV9jcmVhdG9yX2lkOiBjdXJyZW50X3VzZXIsIC8vb25seSBmb3IgdGVzdGluZyBiZWZvcmUgYXV0aCBmdWxseSBpbXBsZW1lbnRlZFxuICAgICAgICB0aXRsZTogcmVjaXBlLnRpdGxlLFxuICAgICAgICBpbmdyZWRpZW50czogcmVjaXBlLmluZ3JlZGllbnRzLFxuICAgICAgICBpbnN0cnVjdGlvbnM6IHJlY2lwZS5pbnN0cnVjdGlvbnMsXG4gICAgICAgIGltZ191cmw6IHJlY2lwZS5pbWdfdXJsLFxuICAgICAgICBkZXNjcmlwdGlvbjogcmVjaXBlLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgLy9TZXQgaW5pdGlhbCBmb3JtRGF0YSBzdGF0ZSB0byBvYmplY3QgdG8gZWRpdFxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoZm9ybU9iailcbiAgICAvL1NldCBzdGF0ZSB0byBjYXB0dXJlIG9ubHkgY2hhbmdlcyBtYWRlXG4gICAgY29uc3QgY2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgICAgIC4uLmZvcm1EYXRhLCBcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3Qgc3VibWl0SGVscGVyID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHN1Ym1pdEhhbmRsZXIoKVxuICAgIH1cblxuXG4gICAgY29uc3Qgc3VibWl0SGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgY29uZmlnT2JqID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVjaXBlcy8ke3JlY2lwZS5pZH1gLCBjb25maWdPYmopXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAvL1RvZ2dsZSBlZGl0IHBhZ2UgdG8gZGlzYXBwZWFyXG4gICAgICAgIHNldEVkaXRTdGF0ZShudWxsKVxuICAgICAgICBlZGl0SGVscGVyKGZvcm1EYXRhKVxuXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRSZWNpcGVBcnJheSA9IHJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiByZWNpcGUuaWQgIT09IGRhdGEuaWQpXG5cbiAgICAgICAgc2V0UmVjaXBlcyhbXG4gICAgICAgICAgICB1cGRhdGVkUmVjaXBlQXJyYXksIGRhdGFcbiAgICAgICAgXSlcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgLypcbiAgICAgICAgLy9JbnZva2UgcmVmcmVzaCBoZWxwZXJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgIHJlZnJlc2hEYXRhKCk7XG4gICAgICAgIH1cbiAgICAgICAgKi9cbiAgICB9XG5cbiAgICAgICAgLy8gLy9EZWZpbmUgcm91dGVyIGFuZCBoZWxwZXIgZnVuY3Rpb24gdG8gcmVmcmVzaCB1cG9uIGVkaXQgc3VibWlzc2lvblxuICAgICAgICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICAgICAgLy8gY29uc3QgcmVmcmVzaERhdGEgPSAoKSA9PiB7XG4gICAgICAgIC8vICAgICByb3V0ZXIucmVwbGFjZShyb3V0ZXIuYXNQYXRoKTtcbiAgICAgICAgLy8gfVxuICAgIFxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgc3R5bGU9IHt7IHBhZGRpbmc6ICcyZW0nfX0+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGVscGVyfT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+UmVjaXBlIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLnRpdGxlfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkluZ3JlZGllbnRzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS5pbmdyZWRpZW50c30gdHlwZT1cInRleHRcIiBuYW1lPVwiaW5ncmVkaWVudHNcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5JbnN0cnVjdGlvbnM8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLmluc3RydWN0aW9uc30gdHlwZT1cInRleHRcIiBuYW1lPVwiaW5zdHJ1Y3Rpb25zXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+QWRkIFBob3RvPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS5pbWdfdXJsfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbWdfdXJsXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLmRlc2NyaXB0aW9ufSB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/EditForm.js\n");

/***/ })

})