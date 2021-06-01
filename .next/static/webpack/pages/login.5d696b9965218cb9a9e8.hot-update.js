webpackHotUpdate_N_E("pages/login",{

/***/ "./src/UserContext/state.js":
/*!**********************************!*\
  !*** ./src/UserContext/state.js ***!
  \**********************************/
/*! exports provided: UserProvider, useUserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserProvider\", function() { return UserProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useUserContext\", function() { return useUserContext; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/UserContext/state.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\nconst UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(); //creates a store\n\nconst UserProvider = ({\n  children\n}) => {\n  _s();\n\n  // const router = useRouter();\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const token = getToken();\n\n    if (token) {\n      retrieveUser(token);\n    }\n  }, []);\n\n  const getToken = () => {\n    return localStorage.getItem(\"token\");\n  };\n\n  const retrieveUser = () => {\n    const token = getToken();\n\n    if (token) {\n      fetch(\"http://localhost:3000/api/v1/profile\", {\n        method: \"GET\",\n        headers: {\n          Authorization: `Bearer ${token}`\n        }\n      }).then(response => response.json()).then(data => {\n        setUser({\n          user: data.user\n        });\n      });\n    } else {\n      router.push(\"/signup\");\n    }\n  };\n\n  const loginHandler = userInfo => {\n    const configObj = {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      },\n      'body': JSON.stringify({\n        user: userInfo\n      })\n    };\n    console.log(configObj);\n    fetch(\"http://localhost:3000/api/v1/login\", configObj).then(response => response.json()).then(data => {\n      localStorage.setItem(\"token\", data.jwt);\n      setUser({\n        user: data.user\n      }, () => next_router__WEBPACK_IMPORTED_MODULE_2___default.a.pushRoute(\"/recipes\"));\n    });\n  };\n\n  const signupHandler = userInfo => {\n    const configObj = {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      },\n      'body': JSON.stringify({\n        user: userInfo\n      })\n    };\n    fetch(\"http://localhost:3000/api/v1/users\", configObj).then(response => response.json()).then(data => {\n      localStorage.setItem(\"token\", data.jwt);\n      setUser({\n        user: data.user\n      }, () => router.push(\"/recipes\"));\n    });\n  };\n\n  console.log(user);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(UserContext.Provider, {\n    value: {\n      user,\n      loginHandler,\n      signupHandler\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(UserProvider, \"Tr6NHhjhUNtJxFA/Y5oEDLx6v2M=\");\n\n_c = UserProvider;\nconst useUserContext = () => {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(UserContext);\n};\n\n_s2(useUserContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"UserProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1VzZXJDb250ZXh0L3N0YXRlLmpzP2QwNjAiXSwibmFtZXMiOlsiVXNlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidG9rZW4iLCJnZXRUb2tlbiIsInJldHJpZXZlVXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJyb3V0ZXIiLCJwdXNoIiwibG9naW5IYW5kbGVyIiwidXNlckluZm8iLCJjb25maWdPYmoiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsInNldEl0ZW0iLCJqd3QiLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJzaWdudXBIYW5kbGVyIiwidXNlVXNlckNvbnRleHQiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsRUFBakMsQyxDQUFxQzs7QUFFOUIsTUFBTUMsWUFBWSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQUE7O0FBRTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEtBQUQsQ0FBaEM7QUFFRUMseURBQVMsQ0FBRSxNQUFNO0FBQ2YsVUFBTUMsS0FBSyxHQUFHQyxRQUFRLEVBQXRCOztBQUNBLFFBQUdELEtBQUgsRUFBUztBQUNQRSxrQkFBWSxDQUFDRixLQUFELENBQVo7QUFDRDtBQUNGLEdBTFEsRUFLTixFQUxNLENBQVQ7O0FBT0EsUUFBTUMsUUFBUSxHQUFHLE1BQU07QUFDckIsV0FBT0UsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJC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ZXh0L3N0YXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTsgLy9jcmVhdGVzIGEgc3RvcmVcblxuZXhwb3J0IGNvbnN0IFVzZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblxuICAgIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgICAgdXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gZ2V0VG9rZW4oKVxuICAgICAgICBpZih0b2tlbil7XG4gICAgICAgICAgcmV0cmlldmVVc2VyKHRva2VuKVxuICAgICAgICB9XG4gICAgICB9LCBbXSk7XG5cbiAgICAgIGNvbnN0IGdldFRva2VuID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXRyaWV2ZVVzZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gZ2V0VG9rZW4oKVxuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvcHJvZmlsZVwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWB9LFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICBzZXRVc2VyKHt1c2VyOiBkYXRhLnVzZXJ9KX1cbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9zaWdudXBcIilcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgbG9naW5IYW5kbGVyID0gKHVzZXJJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbmZpZ09iaiA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgICdib2R5JzogSlNPTi5zdHJpbmdpZnkoe3VzZXI6IHVzZXJJbmZvfSlcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhjb25maWdPYmopXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9sb2dpblwiLCBjb25maWdPYmopXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBkYXRhLmp3dClcbiAgICAgICAgICBzZXRVc2VyKHt1c2VyOiBkYXRhLnVzZXJ9LCAoKSA9PiBSb3V0ZXIucHVzaFJvdXRlKFwiL3JlY2lwZXNcIikpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNpZ251cEhhbmRsZXIgPSAodXNlckluZm8pID0+IHtcbiAgICAgICAgY29uc3QgY29uZmlnT2JqID0ge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2JvZHknOiBKU09OLnN0cmluZ2lmeSh7dXNlcjogdXNlckluZm99KVxuICAgICAgICB9XG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS91c2Vyc1wiLCBjb25maWdPYmopXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBkYXRhLmp3dClcbiAgICAgICAgICBzZXRVc2VyKHt1c2VyOiBkYXRhLnVzZXJ9LCAoKSA9PiByb3V0ZXIucHVzaChcIi9yZWNpcGVzXCIpKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgbG9naW5IYW5kbGVyLCBzaWdudXBIYW5kbGVyIH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVVzZXJDb250ZXh0ID0gKCkgPT4ge1xuICAgIHJldHVybiB1c2VDb250ZXh0KFVzZXJDb250ZXh0KVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/UserContext/state.js\n");

/***/ })

})