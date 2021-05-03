webpackHotUpdate_N_E("pages/recipes/new",{

/***/ "./src/Components/Form.js":
/*!********************************!*\
  !*** ./src/Components/Form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Form; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _RecipeContext_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../RecipeContext/state */ \"./src/RecipeContext/state.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/Form.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction Form({\n  recipe,\n  setEditState,\n  editHelper,\n  formType\n}) {\n  _s();\n\n  console.log(formType);\n  const {\n    recipes,\n    setRecipes\n  } = Object(_RecipeContext_state__WEBPACK_IMPORTED_MODULE_5__[\"useRecipeContext\"])();\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_3__[\"CURRENT_USER\"]; //Pre-populate input fields with previous data\n\n  const formObj = {\n    id: (recipe === null || recipe === void 0 ? void 0 : recipe.id) || '',\n    recipe_creator_id: current_user,\n    //only for testing before auth fully implemented\n    title: (recipe === null || recipe === void 0 ? void 0 : recipe.title) || '',\n    ingredients: (recipe === null || recipe === void 0 ? void 0 : recipe.ingredients) || '',\n    instructions: (recipe === null || recipe === void 0 ? void 0 : recipe.instructions) || '',\n    img_url: (recipe === null || recipe === void 0 ? void 0 : recipe.img_url) || '',\n    description: (recipe === null || recipe === void 0 ? void 0 : recipe.description) || ''\n  }; //Set initial formData state to object to edit\n\n  const {\n    0: formData,\n    1: setFormData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(formObj); //Set state to capture only changes made\n\n  const changeHandler = e => {\n    setFormData(_objectSpread(_objectSpread({}, formData), {}, {\n      [e.target.name]: e.target.value\n    }));\n    console.log(e.target.value);\n  };\n\n  const submitHelper = e => {\n    e.preventDefault();\n    submitHandler();\n  };\n\n  const submitHandler = async () => {\n    if (formType === 'Edit') {\n      const configObj = {\n        method: 'PATCH',\n        headers: {\n          'Content-Type': 'application/json',\n          'Accept': 'application/json'\n        },\n        body: JSON.stringify(formData)\n      };\n      const res = await fetch(`http://localhost:3000/recipes/${recipe.id}`, configObj);\n      const data = await res.json(); //Toggle edit page to disappear\n\n      setEditState(null);\n      editHelper(formData);\n      const updatedRecipeArray = recipes.filter(recipe => recipe.id !== data.id);\n      setRecipes([...updatedRecipeArray, data].sort());\n    } else if (formType === 'Create') {\n      const configObj = {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n          'Accept': 'application/json'\n        },\n        body: JSON.stringify(formData)\n      };\n      const res = await fetch('http://localhost:3000/recipes', configObj);\n      const data = await res.json();\n      const newRecipeArray = [...recipes, data];\n      setRecipes(newRecipeArray);\n      router.push('/recipes');\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        padding: '2em'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: submitHelper,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Recipe Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.title,\n          type: \"text\",\n          name: \"title\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Ingredients\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.ingredients,\n          type: \"text\",\n          name: \"ingredients\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Instructions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.instructions,\n          type: \"text\",\n          name: \"instructions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Add Photo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.img_url,\n          type: \"text\",\n          name: \"img_url\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Description\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.description,\n          type: \"text\",\n          name: \"description\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }, this)\n  }, void 0, false);\n}\n\n_s(Form, \"fdZjzuWeQig4dRgxHtRwexX0YDo=\", false, function () {\n  return [_RecipeContext_state__WEBPACK_IMPORTED_MODULE_5__[\"useRecipeContext\"], next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Form;\n\nvar _c;\n\n$RefreshReg$(_c, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRm9ybS5qcz8zYzA5Il0sIm5hbWVzIjpbIkZvcm0iLCJyZWNpcGUiLCJzZXRFZGl0U3RhdGUiLCJlZGl0SGVscGVyIiwiZm9ybVR5cGUiLCJjb25zb2xlIiwibG9nIiwicmVjaXBlcyIsInNldFJlY2lwZXMiLCJ1c2VSZWNpcGVDb250ZXh0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiY3VycmVudF91c2VyIiwiQ1VSUkVOVF9VU0VSIiwiZm9ybU9iaiIsImlkIiwicmVjaXBlX2NyZWF0b3JfaWQiLCJ0aXRsZSIsImluZ3JlZGllbnRzIiwiaW5zdHJ1Y3Rpb25zIiwiaW1nX3VybCIsImRlc2NyaXB0aW9uIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInVzZVN0YXRlIiwiY2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzdWJtaXRIZWxwZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdEhhbmRsZXIiLCJjb25maWdPYmoiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwidXBkYXRlZFJlY2lwZUFycmF5IiwiZmlsdGVyIiwic29ydCIsIm5ld1JlY2lwZUFycmF5IiwicHVzaCIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBZTtBQUFFQyxRQUFGO0FBQVVDLGNBQVY7QUFBd0JDLFlBQXhCO0FBQW9DQztBQUFwQyxDQUFmLEVBQStEO0FBQUE7O0FBQzFFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBLFFBQU07QUFBQ0csV0FBRDtBQUFVQztBQUFWLE1BQXdCQyw2RUFBZ0IsRUFBOUM7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsUUFBTUMsWUFB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Z0JBUkosZUFTUTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRSLGVBVUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkosZUFXSTtBQUFPLGtCQUFRLEVBQUVNLGFBQWpCO0FBQWdDLGVBQUssRUFBRUgsUUFBUSxDQUFDRixPQUFoRDtBQUF5RCxjQUFJLEVBQUMsTUFBOUQ7QUFBcUUsY0FBSSxFQUFDO0FBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEosZUFZUTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpSLGVBYUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkosZUFjSTtBQUFPLGtCQUFRLEVBQUVLLGFBQWpCO0FBQWdDLGVBQUssRUFBRUgsUUFBUSxDQUFDRCxXQUFoRDtBQUE2RCxjQUFJLEVBQUMsTUFBbEU7QUFBeUUsY0FBSSxFQUFDO0FBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEosZUFlUTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZSLGVBZ0JJO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFESjtBQXdCSDs7R0FyR3VCckIsSTtVQUVVUyxxRSxFQUNmRSxxRDs7O0tBSEtYLEkiLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9Gb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENVUlJFTlRfVVNFUiB9IGZyb20gJy4uL2N1cnJlbnRfdXNlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUmVjaXBlQ29udGV4dCB9IGZyb20gJy4uL1JlY2lwZUNvbnRleHQvc3RhdGUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0gKHsgcmVjaXBlLCBzZXRFZGl0U3RhdGUsIGVkaXRIZWxwZXIsIGZvcm1UeXBlIH0pIHtcbiAgICBjb25zb2xlLmxvZyhmb3JtVHlwZSlcbiAgICBjb25zdCB7cmVjaXBlcywgc2V0UmVjaXBlc30gPSB1c2VSZWNpcGVDb250ZXh0KCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIGNvbnN0IGN1cnJlbnRfdXNlciA9IENVUlJFTlRfVVNFUlxuICAgIC8vUHJlLXBvcHVsYXRlIGlucHV0IGZpZWxkcyB3aXRoIHByZXZpb3VzIGRhdGFcbiAgICBjb25zdCBmb3JtT2JqID0ge1xuICAgICAgICBpZDogcmVjaXBlPy5pZCB8fCAnJyxcbiAgICAgICAgcmVjaXBlX2NyZWF0b3JfaWQ6IGN1cnJlbnRfdXNlciwgLy9vbmx5IGZvciB0ZXN0aW5nIGJlZm9yZSBhdXRoIGZ1bGx5IGltcGxlbWVudGVkXG4gICAgICAgIHRpdGxlOiByZWNpcGU/LnRpdGxlIHx8ICcnLFxuICAgICAgICBpbmdyZWRpZW50czogcmVjaXBlPy5pbmdyZWRpZW50cyB8fCAnJyxcbiAgICAgICAgaW5zdHJ1Y3Rpb25zOiByZWNpcGU/Lmluc3RydWN0aW9ucyB8fCAnJyxcbiAgICAgICAgaW1nX3VybDogcmVjaXBlPy5pbWdfdXJsIHx8ICcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogcmVjaXBlPy5kZXNjcmlwdGlvbiB8fCAnJ1xuICAgIH1cblxuICAgIC8vU2V0IGluaXRpYWwgZm9ybURhdGEgc3RhdGUgdG8gb2JqZWN0IHRvIGVkaXRcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKGZvcm1PYmopXG4gICAgLy9TZXQgc3RhdGUgdG8gY2FwdHVyZSBvbmx5IGNoYW5nZXMgbWFkZVxuICAgIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgICAgICAuLi5mb3JtRGF0YSwgXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IHN1Ym1pdEhlbHBlciA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzdWJtaXRIYW5kbGVyKClcbiAgICB9XG5cblxuICAgIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmKGZvcm1UeXBlID09PSAnRWRpdCcpe1xuICAgICAgICAgICAgY29uc3QgY29uZmlnT2JqID0ge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWNpcGVzLyR7cmVjaXBlLmlkfWAsIGNvbmZpZ09iailcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgLy9Ub2dnbGUgZWRpdCBwYWdlIHRvIGRpc2FwcGVhclxuICAgICAgICAgICAgc2V0RWRpdFN0YXRlKG51bGwpXG4gICAgICAgICAgICBlZGl0SGVscGVyKGZvcm1EYXRhKVxuXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkUmVjaXBlQXJyYXkgPSByZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4gcmVjaXBlLmlkICE9PSBkYXRhLmlkKVxuXG4gICAgICAgICAgICBzZXRSZWNpcGVzKFtcbiAgICAgICAgICAgICAgICAuLi51cGRhdGVkUmVjaXBlQXJyYXksIGRhdGFcbiAgICAgICAgICAgIF0uc29ydCgpKVxuICAgICAgICB9IGVsc2UgaWYgKGZvcm1UeXBlID09PSAnQ3JlYXRlJyl7XG4gICAgICAgICAgICBjb25zdCBjb25maWdPYmogPSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWNpcGVzJywgY29uZmlnT2JqKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UmVjaXBlQXJyYXkgPSBbLi4ucmVjaXBlcywgZGF0YV1cbiAgICAgICAgICAgICAgICBzZXRSZWNpcGVzKG5ld1JlY2lwZUFycmF5KVxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvcmVjaXBlcycpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IHN0eWxlPSB7eyBwYWRkaW5nOiAnMmVtJ319PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhlbHBlcn0+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlJlY2lwZSBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS50aXRsZX0gdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5JbmdyZWRpZW50czwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17Zm9ybURhdGEuaW5ncmVkaWVudHN9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImluZ3JlZGllbnRzXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+SW5zdHJ1Y3Rpb25zPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS5pbnN0cnVjdGlvbnN9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImluc3RydWN0aW9uc1wiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkFkZCBQaG90bzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17Zm9ybURhdGEuaW1nX3VybH0gdHlwZT1cInRleHRcIiBuYW1lPVwiaW1nX3VybFwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS5kZXNjcmlwdGlvbn0gdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpcHRpb25cIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/Form.js\n");

/***/ })

})