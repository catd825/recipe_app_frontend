webpackHotUpdate_N_E("pages/create_recipe",{

/***/ "./src/Components/Form.js":
/*!********************************!*\
  !*** ./src/Components/Form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Form; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/Form.js\",\n    _s = $RefreshSig$();\n\n\nfunction Form() {\n  _s();\n\n  const formObj = {\n    id: '',\n    title: '',\n    ingredients: '',\n    instructions: '',\n    img_url: ''\n  };\n  const {\n    0: formData,\n    1: setFormData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])();\n\n  const changeHandler = e => {\n    setFormData({\n      [e.target.name]: e.target.value\n    });\n  };\n\n  const submitHandler = e => {\n    e.preventDefault();\n    console.log(e.target.value);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: submitHandler,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Recipe Name\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        onChange: changeHandler,\n        value: formObj.title,\n        type: \"text\",\n        name: \"title\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Ingredients\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        value: formObj.ingredients,\n        type: \"text\",\n        name: \"ingredients\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Instructions\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        value: formObj.instructions,\n        type: \"text\",\n        name: \"instructions\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Add Photo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        value: formObj.img_url,\n        type: \"text\",\n        name: \"img_url\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Form, \"6oOAwxF1TNsTYU9PBKxMtxW30rE=\");\n\n_c = Form;\n\nvar _c;\n\n$RefreshReg$(_c, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRm9ybS5qcz8zYzA5Il0sIm5hbWVzIjpbIkZvcm0iLCJmb3JtT2JqIiwiaWQiLCJ0aXRsZSIsImluZ3JlZGllbnRzIiwiaW5zdHJ1Y3Rpb25zIiwiaW1nX3VybCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ1c2VTdGF0ZSIsImNoYW5nZUhhbmRsZXIiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic3VibWl0SGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLElBQVQsR0FBaUI7QUFBQTs7QUFDNUIsUUFBTUMsT0FBTyxHQUFHO0FBQ1pDLE1BQUUsRUFBRSxFQURRO0FBRVpDLFNBQUssRUFBRSxFQUZLO0FBR1pDLGVBQVcsRUFBRSxFQUhEO0FBSVpDLGdCQUFZLEVBQUUsRUFKRjtBQUtaQyxXQUFPLEVBQUU7QUFMRyxHQUFoQjtBQVFBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsRUFBeEM7O0FBRUEsUUFBTUMsYUFBYSxHQUFJQyxDQUFELElBQU87QUFDekJILGVBQVcsQ0FBQztBQUFDLE9BQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxJQUFWLEdBQWlCRixDQUFDLENBQUNDLE1BQUYsQ0FBU0U7QUFBM0IsS0FBRCxDQUFYO0FBQ0gsR0FGRDs7QUFJQSxRQUFNQyxhQUFhLEdBQUlKLENBQUQsSUFBTztBQUN6QkEsS0FBQyxDQUFDSyxjQUFGO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxDQUFDLENBQUNDLE1BQUYsQ0FBU0UsS0FBckI7QUFDSCxHQUhEOztBQUtBLHNCQUNJO0FBQUEsMkJBQ0k7QUFBTSxjQUFRLEVBQUVDLGFBQWhCO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQU8sZ0JBQVEsRUFBRUwsYUFBakI7QUFBZ0MsYUFBSyxFQUFFVCxPQUFPLENBQUNFLEtBQS9DO0FBQXNELFlBQUksRUFBQyxNQUEzRDtBQUFrRSxZQUFJLEVBQUM7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQUtJO0FBQU8sYUFBSyxFQUFFRixPQUFPLENBQUNHLFdBQXRCO0FBQW1DLFlBQUksRUFBQyxNQUF4QztBQUErQyxZQUFJLEVBQUM7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKLGVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLGVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSixlQVFJO0FBQU8sYUFBSyxFQUFFSCxPQUFPLENBQUNJLFlBQXRCO0FBQW9DLFlBQUksRUFBQyxNQUF6QztBQUFnRCxZQUFJLEVBQUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJKLGVBU0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRKLGVBVUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWSixlQVdJO0FBQU8sYUFBSyxFQUFFSixPQUFPLENBQUNLLE9BQXRCO0FBQStCLFlBQUksRUFBQyxNQUFwQztBQUEyQyxZQUFJLEVBQUM7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhKLGVBWUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpKLGVBYUk7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW1CSDs7R0F2Q3VCTixJOztLQUFBQSxJIiwiZmlsZSI6Ii4vc3JjL0NvbXBvbmVudHMvRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0gKCkge1xuICAgIGNvbnN0IGZvcm1PYmogPSB7XG4gICAgICAgIGlkOiAnJyxcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICBpbmdyZWRpZW50czogJycsXG4gICAgICAgIGluc3RydWN0aW9uczogJycsXG4gICAgICAgIGltZ191cmw6ICcnXG4gICAgfVxuXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSgpXG4gICAgXG4gICAgY29uc3QgY2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgIHNldEZvcm1EYXRhKHtbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlfSlcbiAgICB9XG5cbiAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5SZWNpcGUgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17Zm9ybU9iai50aXRsZX0gdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkluZ3JlZGllbnRzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2Zvcm1PYmouaW5ncmVkaWVudHN9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImluZ3JlZGllbnRzXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5JbnN0cnVjdGlvbnM8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17Zm9ybU9iai5pbnN0cnVjdGlvbnN9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImluc3RydWN0aW9uc1wiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+QWRkIFBob3RvPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2Zvcm1PYmouaW1nX3VybH0gdHlwZT1cInRleHRcIiBuYW1lPVwiaW1nX3VybFwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/Form.js\n");

/***/ })

})