webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/Components/EditForm.js":
/*!************************************!*\
  !*** ./src/Components/EditForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EditForm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/EditForm.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nfunction EditForm({\n  recipe,\n  setEditState,\n  editHelper\n}) {\n  _s();\n\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_4__[\"CURRENT_USER\"]; //Pre-populate input fields with previous data\n\n  const formObj = {\n    recipe_creator_id: current_user,\n    //only for testing before auth fully implemented\n    title: recipe.title,\n    ingredients: recipe.ingredients,\n    instructions: recipe.instructions,\n    img_url: recipe.img_url,\n    description: recipe.description\n  }; //Set initial formData state to object to edit\n\n  const {\n    0: formData,\n    1: setFormData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(formObj); //Set state to capture only changes made\n\n  const changeHandler = e => {\n    setFormData(_objectSpread(_objectSpread({}, formData), {}, {\n      [e.target.name]: e.target.value\n    })); // console.log(e.target.value)\n  };\n\n  const submitHelper = e => {\n    e.preventDefault();\n    submitHandler();\n  };\n  /*\n  //Define router and helper function to refresh upon edit submission\n  const router = useRouter();\n  const refreshData = () => {\n      router.replace(router.asPath);\n  }\n  */\n\n\n  const submitHandler = async () => {\n    editHelper();\n    /*\n    const configObj = {\n        method: 'PATCH',\n        headers: {\n            'Content-Type': 'application/json',\n            'Accept': 'application/json',\n        },\n        body: JSON.stringify(formData)\n    }\n     const res = await fetch(`http://localhost:3000/recipes/${recipe.id}`, configObj)\n    const data = await res.json();\n    //Toggle edit page to disappear\n    setEditState(null)\n    \n    /*\n    //Invoke refresh helper\n    if (res.status < 300) {\n        refreshData();\n    }\n    */\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        padding: '2em'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: submitHelper,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Recipe Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.title,\n          type: \"text\",\n          name: \"title\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Ingredients\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.ingredients,\n          type: \"text\",\n          name: \"ingredients\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Instructions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.instructions,\n          type: \"text\",\n          name: \"instructions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Add Photo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.img_url,\n          type: \"text\",\n          name: \"img_url\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Description\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.description,\n          type: \"text\",\n          name: \"description\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }, this)\n  }, void 0, false);\n}\n\n_s(EditForm, \"NILRWx+W8G78VvLDfRnY0rKVlOA=\");\n\n_c = EditForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"EditForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRWRpdEZvcm0uanM/NWEyNSJdLCJuYW1lcyI6WyJFZGl0Rm9ybSIsInJlY2lwZSIsInNldEVkaXRTdGF0ZSIsImVkaXRIZWxwZXIiLCJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJmb3JtT2JqIiwicmVjaXBlX2NyZWF0b3JfaWQiLCJ0aXRsZSIsImluZ3JlZGllbnRzIiwiaW5zdHJ1Y3Rpb25zIiwiaW1nX3VybCIsImRlc2NyaXB0aW9uIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInVzZVN0YXRlIiwiY2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzdWJtaXRIZWxwZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdEhhbmRsZXIiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULENBQW1CO0FBQUVDLFFBQUY7QUFBVUMsY0FBVjtBQUF3QkM7QUFBeEIsQ0FBbkIsRUFBeUQ7QUFBQTs7QUFFcEUsUUFBTUMsWUFBWSxHQUFHQywwREFBckIsQ0FGb0UsQ0FHcEU7O0FBQ0EsUUFBTUMsT0FBTyxHQUFHO0FBQ1pDLHFCQUFpQixFQUFFSCxZQURQO0FBQ3FCO0FBQ2pDSSxTQUFLLEVBQUVQLE1BQU0sQ0FBQ08sS0FGRjtBQUdaQyxlQUFXLEVBQUVSLE1BQU0sQ0FBQ1EsV0FIUjtBQUlaQyxnQkFBWSxFQUFFVCxNQUFNLENBQUNTLFlBSlQ7QUFLWkMsV0FBTyxFQUFFVixNQUFNLENBQUNVLE9BTEo7QUFNWkMsZUFBVyxFQUFFWCxNQUFNLENBQUNXO0FBTlIsR0FBaEIsQ0FKb0UsQ0FhcEU7O0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDVCxPQUFELENBQXhDLENBZG9FLENBZXBFOztBQUNBLFFBQU1VLGFBQWEsR0FBSUMsQ0FBRCxJQUFPO0FBQ3pCSCxlQUFXLGlDQUNKRCxRQURJO0FBRVAsT0FBQ0ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLElBQVYsR0FBaUJGLENBQUMsQ0FBQ0MsTUFBRixDQUFTRTtBQUZuQixPQUFYLENBRHlCLENBS3pCO0FBQ0gsR0FORDs7QUFRQSxRQUFNQyxZQUFZLEdBQUlKLENBQUQsSUFBTztBQUN4QkEsS0FBQyxDQUFDSyxjQUFGO0FBQ0FDLGlCQUFhO0FBQ2hCLEdBSEQ7QUFLQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUksUUFBTUEsYUFBYSxHQUFHLFlBQVk7QUFDOUJwQixjQUFVO0FBQ1Y7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVLLEdBdkJEOztBQXlCQSxzQkFDSTtBQUFBLDJCQUNBO0FBQUssV0FBSyxFQUFHO0FBQUVxQixlQUFPLEVBQUU7QUFBWCxPQUFiO0FBQUEsNkJBQ0k7QUFBTSxnQkFBUSxFQUFFSCxZQUFoQjtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBTyxrQkFBUSxFQUFFTCxhQUFqQjtBQUFnQyxlQUFLLEVBQUVILFFBQVEsQ0FBQ0wsS0FBaEQ7QUFBdUQsY0FBSSxFQUFDLE1BQTVEO0FBQW1FLGNBQUksRUFBQztBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR1E7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIUixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBS0k7QUFBTyxrQkFBUSxFQUFFUSxhQUFqQjtBQUFnQyxlQUFLLEVBQUVILFFBQVEsQ0FBQ0osV0FBaEQ7QUFBNkQsY0FBSSxFQUFDLE1BQWxFO0FBQXlFLGNBQUksRUFBQztBQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKLGVBTVE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOUixlQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKLGVBUUk7QUFBTyxrQkFBUSxFQUFFTyxhQUFqQjtBQUFnQyxlQUFLLEVBQUVILFFBQVEsQ0FBQ0gsWUFBaEQ7QUFBOEQsY0FBSSxFQUFDLE1BQW5FO0FBQTBFLGNBQUksRUFBQztBQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJKLGVBU1E7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFUUixlQVVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZKLGVBV0k7QUFBTyxrQkFBUSxFQUFFTSxhQUFqQjtBQUFnQyxlQUFLLEVBQUVILFFBQVEsQ0FBQ0YsT0FBaEQ7QUFBeUQsY0FBSSxFQUFDLE1BQTlEO0FBQXFFLGNBQUksRUFBQztBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhKLGVBWVE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaUixlQWFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJKLGVBY0k7QUFBTyxrQkFBUSxFQUFFSyxhQUFqQjtBQUFnQyxlQUFLLEVBQUVILFFBQVEsQ0FBQ0QsV0FBaEQ7QUFBNkQsY0FBSSxFQUFDLE1BQWxFO0FBQXlFLGNBQUksRUFBQztBQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRKLGVBZVE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmUixlQWdCSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsbUJBREo7QUF3Qkg7O0dBdEZ1QlosUTs7S0FBQUEsUSIsImZpbGUiOiIuL3NyYy9Db21wb25lbnRzL0VkaXRGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSIH0gZnJvbSAnLi4vY3VycmVudF91c2VyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0Rm9ybSAoeyByZWNpcGUsIHNldEVkaXRTdGF0ZSwgZWRpdEhlbHBlciB9KSB7XG5cbiAgICBjb25zdCBjdXJyZW50X3VzZXIgPSBDVVJSRU5UX1VTRVJcbiAgICAvL1ByZS1wb3B1bGF0ZSBpbnB1dCBmaWVsZHMgd2l0aCBwcmV2aW91cyBkYXRhXG4gICAgY29uc3QgZm9ybU9iaiA9IHtcbiAgICAgICAgcmVjaXBlX2NyZWF0b3JfaWQ6IGN1cnJlbnRfdXNlciwgLy9vbmx5IGZvciB0ZXN0aW5nIGJlZm9yZSBhdXRoIGZ1bGx5IGltcGxlbWVudGVkXG4gICAgICAgIHRpdGxlOiByZWNpcGUudGl0bGUsXG4gICAgICAgIGluZ3JlZGllbnRzOiByZWNpcGUuaW5ncmVkaWVudHMsXG4gICAgICAgIGluc3RydWN0aW9uczogcmVjaXBlLmluc3RydWN0aW9ucyxcbiAgICAgICAgaW1nX3VybDogcmVjaXBlLmltZ191cmwsXG4gICAgICAgIGRlc2NyaXB0aW9uOiByZWNpcGUuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICAvL1NldCBpbml0aWFsIGZvcm1EYXRhIHN0YXRlIHRvIG9iamVjdCB0byBlZGl0XG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZShmb3JtT2JqKVxuICAgIC8vU2V0IHN0YXRlIHRvIGNhcHR1cmUgb25seSBjaGFuZ2VzIG1hZGVcbiAgICBjb25zdCBjaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICAgICAgLi4uZm9ybURhdGEsIFxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBzdWJtaXRIZWxwZXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc3VibWl0SGFuZGxlcigpXG4gICAgfVxuXG4gICAgLypcbiAgICAvL0RlZmluZSByb3V0ZXIgYW5kIGhlbHBlciBmdW5jdGlvbiB0byByZWZyZXNoIHVwb24gZWRpdCBzdWJtaXNzaW9uXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgcmVmcmVzaERhdGEgPSAoKSA9PiB7XG4gICAgICAgIHJvdXRlci5yZXBsYWNlKHJvdXRlci5hc1BhdGgpO1xuICAgIH1cbiAgICAqL1xuXG4gICAgY29uc3Qgc3VibWl0SGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgZWRpdEhlbHBlcigpXG4gICAgICAgIC8qXG4gICAgICAgIGNvbnN0IGNvbmZpZ09iaiA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlY2lwZXMvJHtyZWNpcGUuaWR9YCwgY29uZmlnT2JqKVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgLy9Ub2dnbGUgZWRpdCBwYWdlIHRvIGRpc2FwcGVhclxuICAgICAgICBzZXRFZGl0U3RhdGUobnVsbClcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgIC8vSW52b2tlIHJlZnJlc2ggaGVscGVyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICByZWZyZXNoRGF0YSgpO1xuICAgICAgICB9XG4gICAgICAgICovXG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgc3R5bGU9IHt7IHBhZGRpbmc6ICcyZW0nfX0+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGVscGVyfT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+UmVjaXBlIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLnRpdGxlfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkluZ3JlZGllbnRzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS5pbmdyZWRpZW50c30gdHlwZT1cInRleHRcIiBuYW1lPVwiaW5ncmVkaWVudHNcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5JbnN0cnVjdGlvbnM8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLmluc3RydWN0aW9uc30gdHlwZT1cInRleHRcIiBuYW1lPVwiaW5zdHJ1Y3Rpb25zXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+QWRkIFBob3RvPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS5pbWdfdXJsfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbWdfdXJsXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLmRlc2NyaXB0aW9ufSB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/EditForm.js\n");

/***/ })

})