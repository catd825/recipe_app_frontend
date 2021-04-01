webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/Components/EditForm.js":
/*!************************************!*\
  !*** ./src/Components/EditForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EditForm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/EditForm.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nfunction EditForm({\n  data\n}) {\n  _s();\n\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_4__[\"CURRENT_USER\"];\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  const {\n    0: recipe,\n    1: setRecipes\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({});\n  const recipeUrl = `http://localhost:3000/recipes/${data.id}`;\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    const fetchRecipes = async () => {\n      const response = await fetch(recipeUrl);\n      const data = await response.json();\n      setRecipes(data);\n    };\n\n    fetchRecipes();\n  }, []); //   console.log(recipe)\n  // const recipeEmpty = () => {\n  //     return recipes.length !==0 ? recipes : ''\n  // }\n\n  const formObj = {\n    recipe_creator_id: current_user,\n    //only for testing before auth fully implemented\n    title: data.title,\n    ingredients: data.ingredients,\n    instructions: data.instructions,\n    img_url: data.img_url,\n    description: data.description\n  }; // debugger\n\n  const {\n    0: formData,\n    1: setFormData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(formObj);\n\n  const changeHandler = e => {\n    setFormData(_objectSpread(_objectSpread({}, formData), {}, {\n      [e.target.name]: e.target.value\n    }));\n    console.log(e.target.value);\n  };\n\n  const submitHelper = e => {\n    e.preventDefault();\n    submitHandler();\n  };\n\n  const submitHandler = () => {\n    const configObj = {\n      method: 'PATCH',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      },\n      body: JSON.stringify(formData)\n    };\n    fetch(`http://localhost:3000/recipes/${data.id}`, configObj).then(res => res.json()).then(console.log);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: submitHelper,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Recipe Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.title,\n          type: \"text\",\n          name: \"title\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Ingredients\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.ingredients,\n          type: \"text\",\n          name: \"ingredients\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Instructions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.instructions,\n          type: \"text\",\n          name: \"instructions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Add Photo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.img_url,\n          type: \"text\",\n          name: \"img_url\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Description\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: changeHandler,\n          value: formData.description,\n          type: \"text\",\n          name: \"description\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }, this)\n  }, void 0, false);\n}\n\n_s(EditForm, \"FcFQdLzQJWbq3N3bA3StKAV1LQY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = EditForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"EditForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRWRpdEZvcm0uanM/NWEyNSJdLCJuYW1lcyI6WyJFZGl0Rm9ybSIsImRhdGEiLCJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJyZWNpcGUiLCJzZXRSZWNpcGVzIiwidXNlU3RhdGUiLCJyZWNpcGVVcmwiLCJpZCIsInVzZUVmZmVjdCIsImZldGNoUmVjaXBlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZm9ybU9iaiIsInJlY2lwZV9jcmVhdG9yX2lkIiwidGl0bGUiLCJpbmdyZWRpZW50cyIsImluc3RydWN0aW9ucyIsImltZ191cmwiLCJkZXNjcmlwdGlvbiIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJjaGFuZ2VIYW5kbGVyIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJzdWJtaXRIZWxwZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdEhhbmRsZXIiLCJjb25maWdPYmoiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULENBQW1CO0FBQUNDO0FBQUQsQ0FBbkIsRUFBMkI7QUFBQTs7QUFFdEMsUUFBTUMsWUFBWSxHQUFHQywwREFBckI7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXVCQyxzREFBUSxDQUFDLEVBQUQsQ0FBckM7QUFDQSxRQUFNQyxTQUFTLEdBQUksaUNBQWdDUixJQUFJLENBQUNTLEVBQUcsRUFBM0Q7QUFFQUMseURBQVMsQ0FBRSxNQUFNO0FBQ2IsVUFBTUMsWUFBWSxHQUFHLFlBQVk7QUFDN0IsWUFBTUMsUUFB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LGdCQVRSLGVBVUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkosZUFXSTtBQUFPLGtCQUFRLEVBQUVLLGFBQWpCO0FBQWdDLGVBQUssRUFBRUYsUUFBUSxDQUFDRixPQUFoRDtBQUF5RCxjQUFJLEVBQUMsTUFBOUQ7QUFBcUUsY0FBSSxFQUFDO0FBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEosZUFZUTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpSLGVBYUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkosZUFjSTtBQUFPLGtCQUFRLEVBQUVJLGFBQWpCO0FBQWdDLGVBQUssRUFBRUYsUUFBUSxDQUFDRCxXQUFoRDtBQUE2RCxjQUFJLEVBQUMsTUFBbEU7QUFBeUUsY0FBSSxFQUFDO0FBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEosZUFlUTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZSLGVBZ0JJO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFESjtBQXdCSDs7R0F6RnVCdEIsUTtVQUdMSyxxRDs7O0tBSEtMLFEiLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9FZGl0Rm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSIH0gZnJvbSAnLi4vY3VycmVudF91c2VyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0Rm9ybSAoe2RhdGF9KSB7XG5cbiAgICBjb25zdCBjdXJyZW50X3VzZXIgPSBDVVJSRU5UX1VTRVJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgW3JlY2lwZSwgc2V0UmVjaXBlc10gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgcmVjaXBlVXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWNpcGVzLyR7ZGF0YS5pZH1gICBcbiAgICBcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hSZWNpcGVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZWNpcGVVcmwpXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgc2V0UmVjaXBlcyhkYXRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgZmV0Y2hSZWNpcGVzKCk7XG4gICAgICB9LCBbXSk7XG4gICAgLy8gICBjb25zb2xlLmxvZyhyZWNpcGUpXG5cblxuICAgIC8vIGNvbnN0IHJlY2lwZUVtcHR5ID0gKCkgPT4ge1xuICAgIC8vICAgICByZXR1cm4gcmVjaXBlcy5sZW5ndGggIT09MCA/IHJlY2lwZXMgOiAnJ1xuICAgIC8vIH1cbiAgICBcbiAgICBjb25zdCBmb3JtT2JqID0ge1xuICAgICAgICByZWNpcGVfY3JlYXRvcl9pZDogY3VycmVudF91c2VyLCAvL29ubHkgZm9yIHRlc3RpbmcgYmVmb3JlIGF1dGggZnVsbHkgaW1wbGVtZW50ZWRcbiAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICAgIGluZ3JlZGllbnRzOiBkYXRhLmluZ3JlZGllbnRzLFxuICAgICAgICBpbnN0cnVjdGlvbnM6IGRhdGEuaW5zdHJ1Y3Rpb25zLFxuICAgICAgICBpbWdfdXJsOiBkYXRhLmltZ191cmwsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uXG4gICAgfVxuICAgIFxuICAgIC8vIGRlYnVnZ2VyXG5cbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKGZvcm1PYmopXG5cbiAgICBjb25zdCBjaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICAgICAgLi4uZm9ybURhdGEsIFxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cblxuICAgIGNvbnN0IHN1Ym1pdEhlbHBlciA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzdWJtaXRIYW5kbGVyKClcbiAgICB9XG5cbiAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb25maWdPYmogPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVjaXBlcy8ke2RhdGEuaWR9YCwgY29uZmlnT2JqKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihjb25zb2xlLmxvZylcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIZWxwZXJ9PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5SZWNpcGUgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17Zm9ybURhdGEudGl0bGV9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+SW5ncmVkaWVudHM8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLmluZ3JlZGllbnRzfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbmdyZWRpZW50c1wiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkluc3RydWN0aW9uczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17Zm9ybURhdGEuaW5zdHJ1Y3Rpb25zfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbnN0cnVjdGlvbnNcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5BZGQgUGhvdG88L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLmltZ191cmx9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImltZ191cmxcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17Zm9ybURhdGEuZGVzY3JpcHRpb259IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXB0aW9uXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/EditForm.js\n");

/***/ })

})