webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/Components/EditForm.js":
/*!************************************!*\
  !*** ./src/Components/EditForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EditForm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CURRENT_USER__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CURRENT_USER */ \"./src/CURRENT_USER.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/EditForm.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nfunction EditForm({\n  data,\n  setEditState\n}) {\n  _s();\n\n  const current_user = _CURRENT_USER__WEBPACK_IMPORTED_MODULE_4__[\"CURRENT_USER\"]; //Pre-populate input fields with previous data\n\n  const formObj = {\n    recipe_creator_id: _CURRENT_USER__WEBPACK_IMPORTED_MODULE_4__[\"CURRENT_USER\"],\n    //only for testing before auth fully implemented\n    title: data.title,\n    ingredients: data.ingredients,\n    instructions: data.instructions,\n    img_url: data.img_url,\n    description: data.description\n  }; //Set initial formData state to object to edit\n\n  const {\n    0: formData,\n    1: setFormData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(formObj); //Set state to capture only changes made\n\n  const changeHandler = e => {\n    setFormData(_objectSpread(_objectSpread({}, formData), {}, {\n      [e.target.name]: e.target.value\n    })); // console.log(e.target.value)\n  };\n\n  const submitHelper = e => {\n    e.preventDefault();\n    submitHandler();\n  }; //Define router and helper function to refresh upon edit submission\n\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  const refreshData = () => {\n    router.replace(router.asPath);\n  };\n\n  const submitHandler = async () => {\n    const configObj = {\n      method: 'PATCH',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      },\n      body: JSON.stringify(formData)\n    };\n    const res = await fetch(`http://localhost:3000/recipes/${data.id}`, configObj); // const recipe = await res.json();\n    //Toggle edit page to disappear\n\n    setEditState(null); //Invoke refresh helper\n\n    if (res.status < 300) {\n      refreshData();\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        padding: '2em'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: submitHelper,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Recipe Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.title,\n          type: \"text\",\n          name: \"title\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Ingredients\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.ingredients,\n          type: \"text\",\n          name: \"ingredients\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Instructions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.instructions,\n          type: \"text\",\n          name: \"instructions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Add Photo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.img_url,\n          type: \"text\",\n          name: \"img_url\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Description\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.description,\n          type: \"text\",\n          name: \"description\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }, this)\n  }, void 0, false);\n}\n\n_s(EditForm, \"QOkbelL5PiLlcnACz0SkK5MsHDQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = EditForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"EditForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRWRpdEZvcm0uanM/NWEyNSJdLCJuYW1lcyI6WyJFZGl0Rm9ybSIsImRhdGEiLCJzZXRFZGl0U3RhdGUiLCJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJmb3JtT2JqIiwicmVjaXBlX2NyZWF0b3JfaWQiLCJ0aXRsZSIsImluZ3JlZGllbnRzIiwiaW5zdHJ1Y3Rpb25zIiwiaW1nX3VybCIsImRlc2NyaXB0aW9uIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInVzZVN0YXRlIiwiY2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzdWJtaXRIZWxwZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdEhhbmRsZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJyZWZyZXNoRGF0YSIsInJlcGxhY2UiLCJhc1BhdGgiLCJjb25maWdPYmoiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJmZXRjaCIsImlkIiwic3RhdHVzIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxDQUFtQjtBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBbkIsRUFBMkM7QUFBQTs7QUFFdEQsUUFBTUMsWUFBWSxHQUFHQywwREFBckIsQ0FGc0QsQ0FHdEQ7O0FBQ0EsUUFBTUMsT0FBTyxHQUFHO0FBQ1pDLHFCQUFpQixFQUFFRiwwREFEUDtBQUNxQjtBQUNqQ0csU0FBSyxFQUFFTixJQUFJLENBQUNNLEtBRkE7QUFHWkMsZUFBVyxFQUFFUCxJQUFJLENBQUNPLFdBSE47QUFJWkMsZ0JBQVksRUFBRVIsSUFBSSxDQUFDUSxZQUpQO0FBS1pDLFdBQU8sRUFBRVQsSUFBSSxDQUFDUyxPQUxGO0FBTVpDLGVBQVcsRUFBRVYsSUFBSSxDQUFDVTtBQU5OLEdBQWhCLENBSnNE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O0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkosZUFjSTtBQUFPLGtCQUFRLEVBQUVLLGFBQWpCO0FBQWdDLGVBQUssRUFBRUgsUUFBUSxDQUFDRCxXQUFoRDtBQUE2RCxjQUFJLEVBQUMsTUFBbEU7QUFBeUUsY0FBSSxFQUFDO0FBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEosZUFlUTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZSLGVBZ0JJO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFESjtBQXdCSDs7R0FoRnVCWCxRO1VBOEJMd0IscUQ7OztLQTlCS3hCLFEiLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9FZGl0Rm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IENVUlJFTlRfVVNFUiB9IGZyb20gJy4uL0NVUlJFTlRfVVNFUidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdEZvcm0gKHsgZGF0YSwgc2V0RWRpdFN0YXRlIH0pIHtcblxuICAgIGNvbnN0IGN1cnJlbnRfdXNlciA9IENVUlJFTlRfVVNFUlxuICAgIC8vUHJlLXBvcHVsYXRlIGlucHV0IGZpZWxkcyB3aXRoIHByZXZpb3VzIGRhdGFcbiAgICBjb25zdCBmb3JtT2JqID0ge1xuICAgICAgICByZWNpcGVfY3JlYXRvcl9pZDogQ1VSUkVOVF9VU0VSLCAvL29ubHkgZm9yIHRlc3RpbmcgYmVmb3JlIGF1dGggZnVsbHkgaW1wbGVtZW50ZWRcbiAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICAgIGluZ3JlZGllbnRzOiBkYXRhLmluZ3JlZGllbnRzLFxuICAgICAgICBpbnN0cnVjdGlvbnM6IGRhdGEuaW5zdHJ1Y3Rpb25zLFxuICAgICAgICBpbWdfdXJsOiBkYXRhLmltZ191cmwsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgLy9TZXQgaW5pdGlhbCBmb3JtRGF0YSBzdGF0ZSB0byBvYmplY3QgdG8gZWRpdFxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoZm9ybU9iailcbiAgICAvL1NldCBzdGF0ZSB0byBjYXB0dXJlIG9ubHkgY2hhbmdlcyBtYWRlXG4gICAgY29uc3QgY2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgICAgIC4uLmZvcm1EYXRhLCBcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3Qgc3VibWl0SGVscGVyID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHN1Ym1pdEhhbmRsZXIoKVxuICAgIH1cblxuICAgIC8vRGVmaW5lIHJvdXRlciBhbmQgaGVscGVyIGZ1bmN0aW9uIHRvIHJlZnJlc2ggdXBvbiBlZGl0IHN1Ym1pc3Npb25cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCByZWZyZXNoRGF0YSA9ICgpID0+IHtcbiAgICAgICAgcm91dGVyLnJlcGxhY2Uocm91dGVyLmFzUGF0aCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3VibWl0SGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgY29uZmlnT2JqID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVjaXBlcy8ke2RhdGEuaWR9YCwgY29uZmlnT2JqKVxuICAgICAgICAvLyBjb25zdCByZWNpcGUgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAvL1RvZ2dsZSBlZGl0IHBhZ2UgdG8gZGlzYXBwZWFyXG4gICAgICAgIHNldEVkaXRTdGF0ZShudWxsKVxuICAgICAgICBcbiAgICAgICAgLy9JbnZva2UgcmVmcmVzaCBoZWxwZXJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgIHJlZnJlc2hEYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGRpdiBzdHlsZT0ge3sgcGFkZGluZzogJzJlbSd9fT5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIZWxwZXJ9PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5SZWNpcGUgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17Zm9ybURhdGEudGl0bGV9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+SW5ncmVkaWVudHM8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLmluZ3JlZGllbnRzfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbmdyZWRpZW50c1wiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkluc3RydWN0aW9uczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17Zm9ybURhdGEuaW5zdHJ1Y3Rpb25zfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbnN0cnVjdGlvbnNcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5BZGQgUGhvdG88L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLmltZ191cmx9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImltZ191cmxcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17Zm9ybURhdGEuZGVzY3JpcHRpb259IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXB0aW9uXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/EditForm.js\n");

/***/ })

})