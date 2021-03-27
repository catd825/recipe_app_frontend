webpackHotUpdate_N_E("pages/create_recipe",{

/***/ "./src/Components/Form.js":
/*!********************************!*\
  !*** ./src/Components/Form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Form; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/Form.js\";\n\nfunction Form() {\n  const formData = {\n    id: '',\n    title: '',\n    ingredients: '',\n    instructions: '',\n    img_url: ''\n  };\n\n  const submitHandler = e => {\n    e.preventDefault();\n    console.log(e.target.value);\n  };\n\n  console.log(title);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: submitHandler,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Recipe Name\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        value: title,\n        type: \"text\",\n        name: \"title\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Ingredients\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        value: ingredients,\n        type: \"text\",\n        name: \"ingredients\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Instructions\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        value: instructions,\n        type: \"text\",\n        name: \"instructions\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Add Photo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        value: img,\n        type: \"text\",\n        name: \"img_url\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 9\n  }, this);\n}\n_c = Form;\n\nvar _c;\n\n$RefreshReg$(_c, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRm9ybS5qcz8zYzA5Il0sIm5hbWVzIjpbIkZvcm0iLCJmb3JtRGF0YSIsImlkIiwidGl0bGUiLCJpbmdyZWRpZW50cyIsImluc3RydWN0aW9ucyIsImltZ191cmwiLCJzdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiaW1nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsSUFBVCxHQUFpQjtBQUM1QixRQUFNQyxRQUFRLEdBQUc7QUFDYkMsTUFBRSxFQUFFLEVBRFM7QUFFYkMsU0FBSyxFQUFFLEVBRk07QUFHYkMsZUFBVyxFQUFFLEVBSEE7QUFJYkMsZ0JBQVksRUFBRSxFQUpEO0FBS2JDLFdBQU8sRUFBRTtBQUxJLEdBQWpCOztBQVFBLFFBQU1DLGFBQWEsR0FBSUMsQ0FBRCxJQUFPO0FBQ3pCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlILENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxLQUFyQjtBQUNILEdBSEQ7O0FBS0FILFNBQU8sQ0FBQ0MsR0FBUixDQUFZUixLQUFaO0FBQ0Esc0JBQ0k7QUFBQSwyQkFDSTtBQUFNLGNBQVEsRUFBRUksYUFBaEI7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBTyxhQUFLLEVBQUVKLEtBQWQ7QUFBcUIsWUFBSSxFQUFDLE1BQTFCO0FBQWlDLFlBQUksRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLGVBS0k7QUFBTyxhQUFLLEVBQUVDLFdBQWQ7QUFBMkIsWUFBSSxFQUFDLE1BQWhDO0FBQXVDLFlBQUksRUFBQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkosZUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKLGVBUUk7QUFBTyxhQUFLLEVBQUVDLFlBQWQ7QUFBNEIsWUFBSSxFQUFDLE1BQWpDO0FBQXdDLFlBQUksRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkosZUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEosZUFVSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZKLGVBV0k7QUFBTyxhQUFLLEVBQUVTLEdBQWQ7QUFBbUIsWUFBSSxFQUFDLE1BQXhCO0FBQStCLFlBQUksRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEosZUFZSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkosZUFhSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUJIO0tBbEN1QmQsSSIsImZpbGUiOiIuL3NyYy9Db21wb25lbnRzL0Zvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtICgpIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IHtcbiAgICAgICAgaWQ6ICcnLFxuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIGluZ3JlZGllbnRzOiAnJyxcbiAgICAgICAgaW5zdHJ1Y3Rpb25zOiAnJyxcbiAgICAgICAgaW1nX3VybDogJydcbiAgICB9XG5cbiAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZyh0aXRsZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5SZWNpcGUgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt0aXRsZX0gdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkluZ3JlZGllbnRzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2luZ3JlZGllbnRzfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbmdyZWRpZW50c1wiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+SW5zdHJ1Y3Rpb25zPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2luc3RydWN0aW9uc30gdHlwZT1cInRleHRcIiBuYW1lPVwiaW5zdHJ1Y3Rpb25zXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5BZGQgUGhvdG88L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17aW1nfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbWdfdXJsXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/Form.js\n");

/***/ })

})