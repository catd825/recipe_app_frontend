webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/UserContext/state.js":
/*!**********************************!*\
  !*** ./src/UserContext/state.js ***!
  \**********************************/
/*! exports provided: UserProvider, useUserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserProvider\", function() { return UserProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useUserContext\", function() { return useUserContext; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/UserContext/state.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\nconst UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(); //creates a store\n\nconst UserProvider = ({\n  children\n}) => {\n  _s();\n\n  const router = useRouter();\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const token = getToken();\n\n    if (token) {\n      retrieveUser(token);\n    }\n  }, []);\n\n  const getToken = () => {\n    return localStorage.getItem(\"token\");\n  };\n\n  const retrieveUser = () => {\n    const token = getToken();\n\n    if (token) {\n      fetch(\"http://localhost:3000/api/v1/profile\", {\n        method: \"GET\",\n        headers: {\n          Authorization: `Bearer ${token}`\n        }\n      }).then(response => response.json()).then(data => {\n        setUser({\n          user: data.user\n        });\n      });\n    } else {\n      router.push(\"/signup\");\n    }\n  };\n\n  const loginHandler = userInfo => {\n    const configObj = {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      },\n      'body': JSON.stringify({\n        user: userInfo\n      })\n    };\n    console.log(configObj);\n    fetch(\"http://localhost:3000/api/v1/login\", configObj).then(response => response.json()).then(data => {\n      localStorage.setItem(\"token\", data.jwt);\n      setUser({\n        user: data.user\n      }, next_router__WEBPACK_IMPORTED_MODULE_2___default.a.pushRoute(\"/recipes\"));\n    });\n  };\n\n  const signupHandler = userInfo => {\n    const configObj = {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      },\n      'body': JSON.stringify({\n        user: userInfo\n      })\n    };\n    fetch(\"http://localhost:3000/api/v1/users\", configObj).then(response => response.json()).then(data => {\n      localStorage.setItem(\"token\", data.jwt);\n      setUser({\n        user: data.user\n      }, () => router.push(\"/recipes\"));\n    });\n  };\n\n  console.log(user);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(UserContext.Provider, {\n    value: {\n      user,\n      loginHandler,\n      signupHandler\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(UserProvider, \"oqSgd1pij/9AYejqclHKGkjiBzY=\", true);\n\n_c = UserProvider;\nconst useUserContext = () => {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(UserContext);\n};\n\n_s2(useUserContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"UserProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1VzZXJDb250ZXh0L3N0YXRlLmpzP2QwNjAiXSwibmFtZXMiOlsiVXNlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidG9rZW4iLCJnZXRUb2tlbiIsInJldHJpZXZlVXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJwdXNoIiwibG9naW5IYW5kbGVyIiwidXNlckluZm8iLCJjb25maWdPYmoiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsInNldEl0ZW0iLCJqd3QiLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJzaWdudXBIYW5kbGVyIiwidXNlVXNlckNvbnRleHQiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsRUFBakMsQyxDQUFxQzs7QUFFOUIsTUFBTUMsWUFBWSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQUE7O0FBRTFDLFFBQU1DLE1BQU0sR0FBR0MsU0FBUyxFQUF4QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQyxLQUFELENBQWhDO0FBRUVDLHlEQUFTLENBQUUsTUFBTTtBQUNmLFVBQU1DLEtBQUssR0FBR0MsUUFBUSxFQUF0Qjs7QUFDQSxRQUFHRCxLQUFILEVBQVM7QUFDUEUsa0JBQVksQ0FBQ0YsS0FBRCxDQUFaO0FBQ0Q7QUFDRixHQUxRLEVBS04sRUFMTSxDQUFUOztBQU9BLFFBQU1DLFFBQVEsR0FBRyxNQUFN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TTs7SUFBTW9DLGMiLCJmaWxlIjoiLi9zcmMvVXNlckNvbnRleHQvc3RhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXG5cbmNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpOyAvL2NyZWF0ZXMgYSBzdG9yZVxuXG5leHBvcnQgY29uc3QgVXNlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbigpXG4gICAgICAgIGlmKHRva2VuKXtcbiAgICAgICAgICByZXRyaWV2ZVVzZXIodG9rZW4pXG4gICAgICAgIH1cbiAgICAgIH0sIFtdKTtcblxuICAgICAgY29uc3QgZ2V0VG9rZW4gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJldHJpZXZlVXNlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbigpXG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9wcm9maWxlXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgIHNldFVzZXIoe3VzZXI6IGRhdGEudXNlcn0pfVxuICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3NpZ251cFwiKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBsb2dpbkhhbmRsZXIgPSAodXNlckluZm8pID0+IHtcbiAgICAgICAgY29uc3QgY29uZmlnT2JqID0ge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2JvZHknOiBKU09OLnN0cmluZ2lmeSh7dXNlcjogdXNlckluZm99KVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbmZpZ09iailcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL2xvZ2luXCIsIGNvbmZpZ09iailcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIGRhdGEuand0KVxuICAgICAgICAgIHNldFVzZXIoe3VzZXI6IGRhdGEudXNlcn0sIFJvdXRlci5wdXNoUm91dGUoXCIvcmVjaXBlc1wiKSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2lnbnVwSGFuZGxlciA9ICh1c2VySW5mbykgPT4ge1xuICAgICAgICBjb25zdCBjb25maWdPYmogPSB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnYm9keSc6IEpTT04uc3RyaW5naWZ5KHt1c2VyOiB1c2VySW5mb30pXG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3VzZXJzXCIsIGNvbmZpZ09iailcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIGRhdGEuand0KVxuICAgICAgICAgIHNldFVzZXIoe3VzZXI6IGRhdGEudXNlcn0sICgpID0+IHJvdXRlci5wdXNoKFwiL3JlY2lwZXNcIikpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgY29uc29sZS5sb2codXNlcilcbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBsb2dpbkhhbmRsZXIsIHNpZ251cEhhbmRsZXIgfX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlVXNlckNvbnRleHQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoVXNlckNvbnRleHQpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/UserContext/state.js\n");

/***/ })

})