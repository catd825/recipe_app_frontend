webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/Components/EditForm.js":
/*!************************************!*\
  !*** ./src/Components/EditForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EditForm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/EditForm.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // import { useRouter } from 'next/router'\n\n\nfunction EditForm({\n  data,\n  editHelper\n}) {\n  _s();\n\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_3__[\"CURRENT_USER\"]; // const router = useRouter()\n\n  /*\n      const [recipe, setRecipes] = useState({});\n      const recipeUrl = `http://localhost:3000/recipes/${data.id}`  \n      \n      useEffect( () => {\n          const fetchRecipes = async () => {\n              const response = await fetch(recipeUrl)\n              const data = await response.json();\n              setRecipes(data);\n          };\n          fetchRecipes();\n        }, []);\n      //   console.log(recipe)\n      \n      */\n\n  const formObj = {\n    recipe_creator_id: current_user,\n    //only for testing before auth fully implemented\n    title: data.title,\n    ingredients: data.ingredients,\n    instructions: data.instructions,\n    img_url: data.img_url,\n    description: data.description\n  }; // debugger\n\n  const {\n    0: formData,\n    1: setFormData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(formObj);\n\n  const changeHandler = e => {\n    setFormData(_objectSpread(_objectSpread({}, formData), {}, {\n      [e.target.name]: e.target.value\n    }));\n    console.log(e.target.value);\n  };\n\n  const submitHelper = e => {\n    e.preventDefault();\n    submitHandler();\n  };\n\n  const submitHandler = async () => {\n    const configObj = {\n      method: 'PATCH',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      },\n      body: JSON.stringify(formData)\n    };\n    const res = await fetch(`http://localhost:3000/recipes/${data.id}`, configObj);\n    const recipe = await res.json(); // console.log(recipe)\n\n    editHelper(recipe);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        padding: '2em'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: submitHelper,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Recipe Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.title,\n          type: \"text\",\n          name: \"title\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Ingredients\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.ingredients,\n          type: \"text\",\n          name: \"ingredients\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Instructions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.instructions,\n          type: \"text\",\n          name: \"instructions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Add Photo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.img_url,\n          type: \"text\",\n          name: \"img_url\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Description\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.description,\n          type: \"text\",\n          name: \"description\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }, this)\n  }, void 0, false);\n}\n\n_s(EditForm, \"NILRWx+W8G78VvLDfRnY0rKVlOA=\");\n\n_c = EditForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"EditForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRWRpdEZvcm0uanM/NWEyNSJdLCJuYW1lcyI6WyJFZGl0Rm9ybSIsImRhdGEiLCJlZGl0SGVscGVyIiwiY3VycmVudF91c2VyIiwiQ1VSUkVOVF9VU0VSIiwiZm9ybU9iaiIsInJlY2lwZV9jcmVhdG9yX2lkIiwidGl0bGUiLCJpbmdyZWRpZW50cyIsImluc3RydWN0aW9ucyIsImltZ191cmwiLCJkZXNjcmlwdGlvbiIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ1c2VTdGF0ZSIsImNoYW5nZUhhbmRsZXIiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInN1Ym1pdEhlbHBlciIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0SGFuZGxlciIsImNvbmZpZ09iaiIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImZldGNoIiwiaWQiLCJyZWNpcGUiLCJqc29uIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBRWUsU0FBU0EsUUFBVCxDQUFtQjtBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBbkIsRUFBeUM7QUFBQTs7QUFHcEQsUUFBTUMsWUFBWSxHQUFHQywwREFBckIsQ0FIb0QsQ0FJcEQ7O0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNJLFFBQU1DLE9BQU8sR0FBRztBQUNaQyxxQkFBaUIsRUFBRUgsWUFEUDtBQUNxQjtBQUNqQ0ksU0FBSyxFQUFFTixJQUFJLENBQUNNLEtBRkE7QUFHWkMsZUFBVyxFQUFFUCxJQUFJLENBQUNPLFdBSE47QUFJWkMsZ0JBQVksRUFBRVIsSUFBSSxDQUFDUSxZQUpQO0FBS1pDLFdBQU8sRUFBRVQsSUFBSSxDQUFDUyxPQUxGO0FBTVpDLGVB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QUFJLEVBQUMsTUFBbEU7QUFBeUUsY0FBSSxFQUFDO0FBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEosZUFlUTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZSLGVBZ0JJO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFESjtBQXdCSDs7R0F4RnVCWCxROztLQUFBQSxRIiwiZmlsZSI6Ii4vc3JjL0NvbXBvbmVudHMvRWRpdEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IENVUlJFTlRfVVNFUiB9IGZyb20gJy4uL2N1cnJlbnRfdXNlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdEZvcm0gKHsgZGF0YSwgZWRpdEhlbHBlciB9KSB7XG5cbiAgICBcbiAgICBjb25zdCBjdXJyZW50X3VzZXIgPSBDVVJSRU5UX1VTRVJcbiAgICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuLypcbiAgICBjb25zdCBbcmVjaXBlLCBzZXRSZWNpcGVzXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCByZWNpcGVVcmwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlY2lwZXMvJHtkYXRhLmlkfWAgIFxuICAgIFxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaFJlY2lwZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlY2lwZVVybClcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBzZXRSZWNpcGVzKGRhdGEpO1xuICAgICAgICB9O1xuICAgICAgICBmZXRjaFJlY2lwZXMoKTtcbiAgICAgIH0sIFtdKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHJlY2lwZSlcbiAgICBcbiAgICAqL1xuICAgIGNvbnN0IGZvcm1PYmogPSB7XG4gICAgICAgIHJlY2lwZV9jcmVhdG9yX2lkOiBjdXJyZW50X3VzZXIsIC8vb25seSBmb3IgdGVzdGluZyBiZWZvcmUgYXV0aCBmdWxseSBpbXBsZW1lbnRlZFxuICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgaW5ncmVkaWVudHM6IGRhdGEuaW5ncmVkaWVudHMsXG4gICAgICAgIGluc3RydWN0aW9uczogZGF0YS5pbnN0cnVjdGlvbnMsXG4gICAgICAgIGltZ191cmw6IGRhdGEuaW1nX3VybCxcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb25cbiAgICB9XG4gICAgXG4gICAgLy8gZGVidWdnZXJcblxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoZm9ybU9iailcblxuICAgIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgICAgICAuLi5mb3JtRGF0YSwgXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IHN1Ym1pdEhlbHBlciA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzdWJtaXRIYW5kbGVyKClcbiAgICB9XG5cblxuICAgIFxuICAgIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbmZpZ09iaiA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpXG4gICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWNpcGVzLyR7ZGF0YS5pZH1gLCBjb25maWdPYmopXG4gICAgICAgICAgICBjb25zdCByZWNpcGUgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVjaXBlKVxuICAgICAgICAgICAgZWRpdEhlbHBlcihyZWNpcGUpXG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgc3R5bGU9IHt7IHBhZGRpbmc6ICcyZW0nfX0+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGVscGVyfT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+UmVjaXBlIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLnRpdGxlfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkluZ3JlZGllbnRzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS5pbmdyZWRpZW50c30gdHlwZT1cInRleHRcIiBuYW1lPVwiaW5ncmVkaWVudHNcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5JbnN0cnVjdGlvbnM8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLmluc3RydWN0aW9uc30gdHlwZT1cInRleHRcIiBuYW1lPVwiaW5zdHJ1Y3Rpb25zXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+QWRkIFBob3RvPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS5pbWdfdXJsfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbWdfdXJsXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLmRlc2NyaXB0aW9ufSB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/EditForm.js\n");

/***/ })

})