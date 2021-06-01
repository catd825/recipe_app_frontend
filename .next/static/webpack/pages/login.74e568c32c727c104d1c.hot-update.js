webpackHotUpdate_N_E("pages/login",{

/***/ "./src/Components/Login.js":
/*!*********************************!*\
  !*** ./src/Components/Login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _UserContext_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UserContext/state */ \"./src/UserContext/state.js\");\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/Login.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_catherineadonofrio_Development_code_Mod6_recipe_app_recipe_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction Login() {\n  _s();\n\n  const {\n    singupHandler\n  } = Object(_UserContext_state__WEBPACK_IMPORTED_MODULE_3__[\"useUserContext\"])();\n  const userObj = {\n    username: '',\n    password: ''\n  };\n  const {\n    0: userData,\n    1: setUserData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(userObj);\n\n  const changeHandler = e => {\n    setUserData(_objectSpread(_objectSpread({}, userData), {}, {\n      [e.target.name]: e.target.value\n    }));\n    console.log(e.target.name, \":\", e.target.value);\n  };\n\n  const submitHandler = e => {\n    e.preventDefault();\n    loginHandler(userData);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: \"Login\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: submitHandler,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        name: \"username\",\n        onChange: changeHandler,\n        value: userData.username,\n        type: \"text\",\n        placeholder: \"Username\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 135\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        name: \"password\",\n        onChange: changeHandler,\n        value: userData.password,\n        type: \"password\",\n        placeholder: \"Password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 139\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Login, \"z7GuZrvjVUNsEarhf66z3hh+uSI=\", false, function () {\n  return [_UserContext_state__WEBPACK_IMPORTED_MODULE_3__[\"useUserContext\"]];\n});\n\n_c = Login;\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvTG9naW4uanM/NTNkYyJdLCJuYW1lcyI6WyJMb2dpbiIsInNpbmd1cEhhbmRsZXIiLCJ1c2VVc2VyQ29udGV4dCIsInVzZXJPYmoiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsInVzZVN0YXRlIiwiY2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwic3VibWl0SGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwibG9naW5IYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFrQjtBQUFBOztBQUM3QixRQUFNO0FBQUNDO0FBQUQsTUFBa0JDLHlFQUFjLEVBQXRDO0FBRUEsUUFBTUMsT0FBTyxHQUFHO0FBQ1pDLFlBQVEsRUFBRSxFQURFO0FBRVpDLFlBQVEsRUFBRTtBQUZFLEdBQWhCO0FBS0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDTCxPQUFELENBQXhDOztBQUVBLFFBQU1NLGFBQWEsR0FBSUMsQ0FBRCxJQUFPO0FBQ3pCSCxlQUFXLGlDQUNKRCxRQURJO0FBRVAsT0FBQ0ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLElBQVYsR0FBaUJGLENBQUMsQ0FBQ0MsTUFBRixDQUFTRTtBQUZuQixPQUFYO0FBSUFDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsSUFBckIsRUFBMEIsR0FBMUIsRUFBK0JGLENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxLQUF4QztBQUNILEdBTkQ7O0FBUUEsUUFBTUcsYUFBYSxHQUFJTixDQUFELElBQU87QUFDekJBLEtBQUMsQ0FBQ08sY0FBRjtBQUNBQyxnQkFBWSxDQUFDWixRQUFELENBQVo7QUFDSCxHQUhEOztBQU1BLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQU0sY0FBUSxFQUFFVSxhQUFoQjtBQUFBLDhCQUNJO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsZ0JBQVEsRUFBRVAsYUFBakM7QUFBZ0QsYUFBSyxFQUFFSCxRQUFRLENBQUNGLFFBQWhFO0FBQTBFLFlBQUksRUFBQyxNQUEvRTtBQUFzRixtQkFBVyxFQUFDO0FBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixvQkFDMEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUQxSCxlQUVJO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsZ0JBQVEsRUFBRUssYUFBakM7QUFBZ0QsYUFBSyxFQUFFSCxRQUFRLENBQUNELFFBQWhFO0FBQTBFLFlBQUksRUFBQyxVQUEvRTtBQUEwRixtQkFBVyxFQUFDO0FBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixvQkFFOEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUY5SCxlQUdJO0FBQU8sWUFBSSxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUg7O0dBbEN1QkwsSztVQUNJRSxpRTs7O0tBREpGLEsiLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9Mb2dpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VVc2VyQ29udGV4dCB9IGZyb20gJy4uL1VzZXJDb250ZXh0L3N0YXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbiAoKSB7XG4gICAgY29uc3Qge3Npbmd1cEhhbmRsZXJ9ID0gdXNlVXNlckNvbnRleHQoKTtcblxuICAgIGNvbnN0IHVzZXJPYmogPSB7XG4gICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgIH1cblxuICAgIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUodXNlck9iailcblxuICAgIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICBzZXRVc2VyRGF0YSh7XG4gICAgICAgICAgICAuLi51c2VyRGF0YSxcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQubmFtZSxcIjpcIiwgZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbG9naW5IYW5kbGVyKHVzZXJEYXRhKVxuICAgIH1cbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+TG9naW48L2gyPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwidXNlcm5hbWVcIiBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e3VzZXJEYXRhLnVzZXJuYW1lfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIj48L2lucHV0PiA8YnIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e3VzZXJEYXRhLnBhc3N3b3JkfSB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCI+PC9pbnB1dD4gPGJyLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiID48L2lucHV0PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/Login.js\n");

/***/ })

})