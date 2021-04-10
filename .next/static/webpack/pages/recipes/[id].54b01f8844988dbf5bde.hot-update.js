webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/Components/EditForm.js":
/*!************************************!*\
  !*** ./src/Components/EditForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EditForm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/EditForm.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nfunction EditForm({\n  data,\n  setEditState\n}) {\n  _s();\n\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_4__[\"CURRENT_USER\"]; // const router = useRouter()\n\n  /*\n      const [recipe, setRecipes] = useState({});\n      const recipeUrl = `http://localhost:3000/recipes/${data.id}`  \n      \n      useEffect( () => {\n          const fetchRecipes = async () => {\n              const response = await fetch(recipeUrl)\n              const data = await response.json();\n              setRecipes(data);\n          };\n          fetchRecipes();\n        }, []);\n      //   console.log(recipe)\n      \n      */\n\n  const formObj = {\n    recipe_creator_id: current_user,\n    //only for testing before auth fully implemented\n    title: data.title,\n    ingredients: data.ingredients,\n    instructions: data.instructions,\n    img_url: data.img_url,\n    description: data.description\n  }; // debugger\n\n  const {\n    0: formData,\n    1: setFormData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(formObj);\n\n  const changeHandler = e => {\n    setFormData(_objectSpread(_objectSpread({}, formData), {}, {\n      [e.target.name]: e.target.value\n    }));\n    console.log(e.target.value);\n  };\n\n  const submitHelper = e => {\n    e.preventDefault();\n    submitHandler();\n  };\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  const refreshData = () => {\n    router.replace(router.asPath);\n  };\n\n  const submitHandler = async () => {\n    const configObj = {\n      method: 'PATCH',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      },\n      body: JSON.stringify(formData)\n    };\n    const res = await fetch(`http://localhost:3000/recipes/${data.id}`, configObj);\n    const recipe = await res.json();\n    editState(null);\n\n    if (res.status < 300) {\n      refreshData();\n    } // console.log(recipe)\n    // editHelper(recipe)\n\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        padding: '2em'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: submitHelper,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Recipe Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.title,\n          type: \"text\",\n          name: \"title\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Ingredients\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.ingredients,\n          type: \"text\",\n          name: \"ingredients\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Instructions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.instructions,\n          type: \"text\",\n          name: \"instructions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Add Photo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.img_url,\n          type: \"text\",\n          name: \"img_url\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Description\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.description,\n          type: \"text\",\n          name: \"description\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }, this)\n  }, void 0, false);\n}\n\n_s(EditForm, \"QOkbelL5PiLlcnACz0SkK5MsHDQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = EditForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"EditForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRWRpdEZvcm0uanM/NWEyNSJdLCJuYW1lcyI6WyJFZGl0Rm9ybSIsImRhdGEiLCJzZXRFZGl0U3RhdGUiLCJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJmb3JtT2JqIiwicmVjaXBlX2NyZWF0b3JfaWQiLCJ0aXRsZSIsImluZ3JlZGllbnRzIiwiaW5zdHJ1Y3Rpb25zIiwiaW1nX3VybCIsImRlc2NyaXB0aW9uIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInVzZVN0YXRlIiwiY2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwic3VibWl0SGVscGVyIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXRIYW5kbGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwicmVmcmVzaERhdGEiLCJyZXBsYWNlIiwiYXNQYXRoIiwiY29uZmlnT2JqIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwiZmV0Y2giLCJpZCIsInJlY2lwZSIsImpzb24iLCJlZGl0U3RhdGUiLCJzdGF0dXMiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULENBQW1CO0FBQUVDLE1BQUY7QUFBUUM7QUFBUixDQUFuQixFQUEyQztBQUFBOztBQUd0RCxRQUFNQyxZQUFZLEdBQUdDLDBEQUFyQixDQUhzRCxDQUl0RDs7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0ksUUFBTUMsT0FBTyxHQUFHO0FBQ1pDLHFCQUFpQixFQUFFSCxZQURQO0FBQ3FCO0FBQ2pDSSxTQUFLLEVBQUVOLElBQUksQ0FBQ00sS0FGQTtBQUdaQyxlQUFXLEVBQUVQLElBQUksQ0FB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V0k7QUFBTyxrQkFBUSxFQUFFTSxhQUFqQjtBQUFnQyxlQUFLLEVBQUVILFFBQVEsQ0FBQ0YsT0FBaEQ7QUFBeUQsY0FBSSxFQUFDLE1BQTlEO0FBQXFFLGNBQUksRUFBQztBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhKLGVBWVE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaUixlQWFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJKLGVBY0k7QUFBTyxrQkFBUSxFQUFFSyxhQUFqQjtBQUFnQyxlQUFLLEVBQUVILFFBQVEsQ0FBQ0QsV0FBaEQ7QUFBNkQsY0FBSSxFQUFDLE1BQWxFO0FBQXlFLGNBQUksRUFBQztBQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRKLGVBZVE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmUixlQWdCSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsbUJBREo7QUF3Qkg7O0dBbkd1QlgsUTtVQThDTDBCLHFEOzs7S0E5Q0sxQixRIiwiZmlsZSI6Ii4vc3JjL0NvbXBvbmVudHMvRWRpdEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IENVUlJFTlRfVVNFUiB9IGZyb20gJy4uL2N1cnJlbnRfdXNlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdEZvcm0gKHsgZGF0YSwgc2V0RWRpdFN0YXRlIH0pIHtcblxuICAgIFxuICAgIGNvbnN0IGN1cnJlbnRfdXNlciA9IENVUlJFTlRfVVNFUlxuICAgIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4vKlxuICAgIGNvbnN0IFtyZWNpcGUsIHNldFJlY2lwZXNdID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IHJlY2lwZVVybCA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVjaXBlcy8ke2RhdGEuaWR9YCAgXG4gICAgXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoUmVjaXBlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVjaXBlVXJsKVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHNldFJlY2lwZXMoZGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIGZldGNoUmVjaXBlcygpO1xuICAgICAgfSwgW10pO1xuICAgIC8vICAgY29uc29sZS5sb2cocmVjaXBlKVxuICAgIFxuICAgICovXG4gICAgY29uc3QgZm9ybU9iaiA9IHtcbiAgICAgICAgcmVjaXBlX2NyZWF0b3JfaWQ6IGN1cnJlbnRfdXNlciwgLy9vbmx5IGZvciB0ZXN0aW5nIGJlZm9yZSBhdXRoIGZ1bGx5IGltcGxlbWVudGVkXG4gICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgICBpbmdyZWRpZW50czogZGF0YS5pbmdyZWRpZW50cyxcbiAgICAgICAgaW5zdHJ1Y3Rpb25zOiBkYXRhLmluc3RydWN0aW9ucyxcbiAgICAgICAgaW1nX3VybDogZGF0YS5pbWdfdXJsLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvblxuICAgIH1cbiAgICBcbiAgICAvLyBkZWJ1Z2dlclxuXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZShmb3JtT2JqKVxuXG4gICAgY29uc3QgY2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgICAgIC4uLmZvcm1EYXRhLCBcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3Qgc3VibWl0SGVscGVyID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHN1Ym1pdEhhbmRsZXIoKVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHJlZnJlc2hEYXRhID0gKCkgPT4ge1xuICAgICAgICByb3V0ZXIucmVwbGFjZShyb3V0ZXIuYXNQYXRoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb25maWdPYmogPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWNpcGVzLyR7ZGF0YS5pZH1gLCBjb25maWdPYmopXG4gICAgICAgIGNvbnN0IHJlY2lwZSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICAgICAgZWRpdFN0YXRlKG51bGwpXG4gICAgICAgIFxuICAgICAgICBpZiAocmVzLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgICAgcmVmcmVzaERhdGEoKTtcbiAgICAgICAgfVxuICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVjaXBlKVxuICAgICAgICAgICAgLy8gZWRpdEhlbHBlcihyZWNpcGUpXG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgc3R5bGU9IHt7IHBhZGRpbmc6ICcyZW0nfX0+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGVscGVyfT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+UmVjaXBlIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLnRpdGxlfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkluZ3JlZGllbnRzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS5pbmdyZWRpZW50c30gdHlwZT1cInRleHRcIiBuYW1lPVwiaW5ncmVkaWVudHNcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5JbnN0cnVjdGlvbnM8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLmluc3RydWN0aW9uc30gdHlwZT1cInRleHRcIiBuYW1lPVwiaW5zdHJ1Y3Rpb25zXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+QWRkIFBob3RvPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS5pbWdfdXJsfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbWdfdXJsXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLmRlc2NyaXB0aW9ufSB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/EditForm.js\n");

/***/ })

})