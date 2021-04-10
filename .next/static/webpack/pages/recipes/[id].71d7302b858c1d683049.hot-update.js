webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/CURRENT_USER.js":
false,

/***/ "./src/Components/EditForm.js":
/*!************************************!*\
  !*** ./src/Components/EditForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EditForm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/EditForm.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nfunction EditForm({\n  data,\n  setEditState\n}) {\n  _s();\n\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_4__[\"CURRENT_USER\"]; //Pre-populate input fields with previous data\n\n  const formObj = {\n    recipe_creator_id: current_user,\n    //only for testing before auth fully implemented\n    title: data.title,\n    ingredients: data.ingredients,\n    instructions: data.instructions,\n    img_url: data.img_url,\n    description: data.description\n  }; //Set initial formData state to object to edit\n\n  const {\n    0: formData,\n    1: setFormData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(formObj); //Set state to capture only changes made\n\n  const changeHandler = e => {\n    setFormData(_objectSpread(_objectSpread({}, formData), {}, {\n      [e.target.name]: e.target.value\n    })); // console.log(e.target.value)\n  };\n\n  const submitHelper = e => {\n    e.preventDefault();\n    submitHandler();\n  }; //Define router and helper function to refresh upon edit submission\n\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  const refreshData = () => {\n    router.replace(router.asPath);\n  };\n\n  const submitHandler = async () => {\n    const configObj = {\n      method: 'PATCH',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      },\n      body: JSON.stringify(formData)\n    };\n    const res = await fetch(`http://localhost:3000/recipes/${data.id}`, configObj); // const recipe = await res.json();\n    //Toggle edit page to disappear\n\n    setEditState(null); //Invoke refresh helper\n\n    if (res.status < 300) {\n      refreshData();\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        padding: '2em'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: submitHelper,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Recipe Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.title,\n          type: \"text\",\n          name: \"title\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Ingredients\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.ingredients,\n          type: \"text\",\n          name: \"ingredients\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Instructions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.instructions,\n          type: \"text\",\n          name: \"instructions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Add Photo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.img_url,\n          type: \"text\",\n          name: \"img_url\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Description\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.description,\n          type: \"text\",\n          name: \"description\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }, this)\n  }, void 0, false);\n}\n\n_s(EditForm, \"QOkbelL5PiLlcnACz0SkK5MsHDQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = EditForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"EditForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRWRpdEZvcm0uanM/NWEyNSJdLCJuYW1lcyI6WyJFZGl0Rm9ybSIsImRhdGEiLCJzZXRFZGl0U3RhdGUiLCJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJmb3JtT2JqIiwicmVjaXBlX2NyZWF0b3JfaWQiLCJ0aXRsZSIsImluZ3JlZGllbnRzIiwiaW5zdHJ1Y3Rpb25zIiwiaW1nX3VybCIsImRlc2NyaXB0aW9uIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInVzZVN0YXRlIiwiY2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzdWJtaXRIZWxwZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdEhhbmRsZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJyZWZyZXNoRGF0YSIsInJlcGxhY2UiLCJhc1BhdGgiLCJjb25maWdPYmoiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJmZXRjaCIsImlkIiwic3RhdHVzIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxDQUFtQjtBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBbkIsRUFBMkM7QUFBQTs7QUFFdEQsUUFBTUMsWUFBWSxHQUFHQywwREFBckIsQ0FGc0QsQ0FHdEQ7O0FBQ0EsUUFBTUMsT0FBTyxHQUFHO0FBQ1pDLHFCQUFpQixFQUFFSCxZQURQO0FBQ3FCO0FBQ2pDSSxTQUFLLEVBQUVOLElBQUksQ0FBQ00sS0FGQTtBQUdaQyxlQUFXLEVBQUVQLElBQUksQ0FBQ08sV0FITjtBQUlaQyxnQkFBWSxFQUFFUixJQUFJLENBQUNRLFlBSlA7QUFLWkMsV0FBTyxFQUFFVCxJQUFJLENBQUNTLE9BTEY7QUFNWkMsZUFBVyxFQUFFVixJQUFJLENBQUNVO0FBTk4sR0FBaEIsQ0FKc0Qs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QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiSixlQWNJO0FBQU8sa0JBQVEsRUFBRUssYUFBakI7QUFBZ0MsZUFBSyxFQUFFSCxRQUFRLENBQUNELFdBQWhEO0FBQTZELGNBQUksRUFBQyxNQUFsRTtBQUF5RSxjQUFJLEVBQUM7QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkSixlQWVRO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZlIsZUFnQkk7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURKO0FBd0JIOztHQWhGdUJYLFE7VUE4Qkx3QixxRDs7O0tBOUJLeEIsUSIsImZpbGUiOiIuL3NyYy9Db21wb25lbnRzL0VkaXRGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSIH0gZnJvbSAnLi4vY3VycmVudF91c2VyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0Rm9ybSAoeyBkYXRhLCBzZXRFZGl0U3RhdGUgfSkge1xuXG4gICAgY29uc3QgY3VycmVudF91c2VyID0gQ1VSUkVOVF9VU0VSXG4gICAgLy9QcmUtcG9wdWxhdGUgaW5wdXQgZmllbGRzIHdpdGggcHJldmlvdXMgZGF0YVxuICAgIGNvbnN0IGZvcm1PYmogPSB7XG4gICAgICAgIHJlY2lwZV9jcmVhdG9yX2lkOiBjdXJyZW50X3VzZXIsIC8vb25seSBmb3IgdGVzdGluZyBiZWZvcmUgYXV0aCBmdWxseSBpbXBsZW1lbnRlZFxuICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgaW5ncmVkaWVudHM6IGRhdGEuaW5ncmVkaWVudHMsXG4gICAgICAgIGluc3RydWN0aW9uczogZGF0YS5pbnN0cnVjdGlvbnMsXG4gICAgICAgIGltZ191cmw6IGRhdGEuaW1nX3VybCxcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICAvL1NldCBpbml0aWFsIGZvcm1EYXRhIHN0YXRlIHRvIG9iamVjdCB0byBlZGl0XG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZShmb3JtT2JqKVxuICAgIC8vU2V0IHN0YXRlIHRvIGNhcHR1cmUgb25seSBjaGFuZ2VzIG1hZGVcbiAgICBjb25zdCBjaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICAgICAgLi4uZm9ybURhdGEsIFxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBzdWJtaXRIZWxwZXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc3VibWl0SGFuZGxlcigpXG4gICAgfVxuXG4gICAgLy9EZWZpbmUgcm91dGVyIGFuZCBoZWxwZXIgZnVuY3Rpb24gdG8gcmVmcmVzaCB1cG9uIGVkaXQgc3VibWlzc2lvblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHJlZnJlc2hEYXRhID0gKCkgPT4ge1xuICAgICAgICByb3V0ZXIucmVwbGFjZShyb3V0ZXIuYXNQYXRoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb25maWdPYmogPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWNpcGVzLyR7ZGF0YS5pZH1gLCBjb25maWdPYmopXG4gICAgICAgIC8vIGNvbnN0IHJlY2lwZSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIC8vVG9nZ2xlIGVkaXQgcGFnZSB0byBkaXNhcHBlYXJcbiAgICAgICAgc2V0RWRpdFN0YXRlKG51bGwpXG4gICAgICAgIFxuICAgICAgICAvL0ludm9rZSByZWZyZXNoIGhlbHBlclxuICAgICAgICBpZiAocmVzLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgICAgcmVmcmVzaERhdGEoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IHN0eWxlPSB7eyBwYWRkaW5nOiAnMmVtJ319PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhlbHBlcn0+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlJlY2lwZSBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS50aXRsZX0gdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5JbmdyZWRpZW50czwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17Zm9ybURhdGEuaW5ncmVkaWVudHN9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImluZ3JlZGllbnRzXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+SW5zdHJ1Y3Rpb25zPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS5pbnN0cnVjdGlvbnN9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImluc3RydWN0aW9uc1wiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkFkZCBQaG90bzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17Zm9ybURhdGEuaW1nX3VybH0gdHlwZT1cInRleHRcIiBuYW1lPVwiaW1nX3VybFwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS5kZXNjcmlwdGlvbn0gdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpcHRpb25cIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/EditForm.js\n");

/***/ })

})