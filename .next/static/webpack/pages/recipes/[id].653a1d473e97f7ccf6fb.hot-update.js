webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./src/pages/recipes/[id].js":
/*!***********************************!*\
  !*** ./src/pages/recipes/[id].js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../current_user */ \"./src/current_user.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Components_EditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/EditForm */ \"./src/Components/EditForm.js\");\n/* harmony import */ var _Components_SaveButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/SaveButton */ \"./src/Components/SaveButton.js\");\n\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/pages/recipes/[id].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ShowPage = ({\n  recipe\n}) => {\n  _s();\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_2__[\"CURRENT_USER\"];\n  console.log(current_user);\n  const {\n    0: editState,\n    1: setEditState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"show-card\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: recipe.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: recipe.img_url,\n          style: {\n            height: '250px'\n          },\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 16\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: recipe.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: recipe.ingredients\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: recipe.instructions\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: () => router.push('/recipes/'),\n        children: \"Back to Main\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 13\n      }, undefined), current_user === recipe.recipe_creator_id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => setEditState(!editState),\n          children: \"Edit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => console.log(\"delete!\"),\n          children: \"Delete\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false), editState === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_EditForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        setEditState: setEditState,\n        data: recipe\n      }, recipe.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 35\n      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false);\n};\n\n_s(ShowPage, \"S4B8VU9vgqN0KFxHvUFKu2t9ud4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = ShowPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShowPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ShowPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlY2lwZXMvLmpzPzJkYWQiXSwibmFtZXMiOlsiU2hvd1BhZ2UiLCJyZWNpcGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjdXJyZW50X3VzZXIiLCJDVVJSRU5UX1VTRVIiLCJjb25zb2xlIiwibG9nIiwiZWRpdFN0YXRlIiwic2V0RWRpdFN0YXRlIiwidXNlU3RhdGUiLCJ0aXRsZSIsImltZ191cmwiLCJoZWlnaHQiLCJkZXNjcmlwdGlvbiIsImluZ3JlZGllbnRzIiwiaW5zdHJ1Y3Rpb25zIiwicHVzaCIsInJlY2lwZV9jcmVhdG9yX2lkIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUErQkEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdCO0FBQUE7O0FBQzdCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNQyxZQUFZLEdBQUdDLDBEQUFyQjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsWUFBWjtBQUVBLFFBQU07QUFBQSxPQUFDSSxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQyxJQUFELENBQTFDO0FBRUEsc0JBQ0k7QUFBQSwyQkFDQTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0k7QUFBQSxrQkFBS1QsTUFBTSxDQUFDVTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBLCtCQUFHO0FBQUssYUFBRyxFQUFFVixNQUFNLENBQUNXLE9BQWpCO0FBQTBCLGVBQUssRUFBRTtBQUFDQyxrQkFBTSxFQUFDO0FBQVIsV0FBakM7QUFBbUQsYUFBRyxFQUFDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBR0k7QUFBQSxrQkFBSVosTUFBTSxDQUFDYTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEosZUFJSTtBQUFBLGtCQUFJYixNQUFNLENBQUNjO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQUtJO0FBQUEsa0JBQUlkLE1BQU0sQ0FBQ2U7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBTUk7QUFBUSxlQUFPLEVBQUUsTUFBTWQsTUFBTSxDQUFDZSxJQUFQLENBQVksV0FBWixDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSixFQVNLYixZQUFZLEtBQUtILE1BQU0sQ0FBQ2lCLGlCQUF4QixnQkFDRztBQUFBLGdDQUNJO0FBQVEsaUJBQU8sRUFBRSxNQUFNVCxZQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQVEsaUJBQU8sRUFBRSxNQUFNRixPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUEsc0JBREgsZ0JBTUcsdUpBZlIsRUFvQktDLFNBQVMsS0FBSyxJQUFkLGdCQUFxQixxRUFBQyw0REFBRDtBQUFVLG9CQUFZLEVBQUVDLFlBQXhCO0FBQXNELFlBQUksRUFBRVI7QUFBNUQsU0FBMkNBLE1BQU0sQ0FBQ2tCLEVBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXJCLGdCQUE2Rix1SkFwQmxHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURKO0FBMEJILENBakNEOztHQUFNbkIsUTtVQUNhRyxxRDs7O0tBRGJILFE7O0FBbUNTQSx1RUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9yZWNpcGVzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IENVUlJFTlRfVVNFUiB9IGZyb20gJy4uLy4uL2N1cnJlbnRfdXNlcidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRWRpdEZvcm0gZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9FZGl0Rm9ybSdcbmltcG9ydCBTYXZlQnV0dG9uIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvU2F2ZUJ1dHRvbidcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWNpcGVzJylcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcChyZWNpcGUgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiByZWNpcGUuaWQudG9TdHJpbmcoKSB9XG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzLFxuICAgICAgICBmYWxsYmFjazogZmFsc2UgLy8gcmVkaXJlY3RzIHRvIDQwNCBwYWdlXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMuaWQ7IFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWNpcGVzLycgKyBpZClcbiAgICBjb25zdCByZWNpcGUgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyBcbiAgICAgICAgICAgIHJlY2lwZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuY29uc3QgU2hvd1BhZ2UgPSAoeyByZWNpcGUgfSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgY3VycmVudF91c2VyID0gQ1VSUkVOVF9VU0VSXG4gICAgY29uc29sZS5sb2coY3VycmVudF91c2VyKVxuXG4gICAgY29uc3QgW2VkaXRTdGF0ZSwgc2V0RWRpdFN0YXRlXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PiBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LWNhcmRcIj5cbiAgICAgICAgICAgIDxoMT57cmVjaXBlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8cD48aW1nIHNyYz17cmVjaXBlLmltZ191cmx9IHN0eWxlPXt7aGVpZ2h0OicyNTBweCd9fSBhbHQ9JycgLz48L3A+XG4gICAgICAgICAgICA8cD57cmVjaXBlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxwPntyZWNpcGUuaW5ncmVkaWVudHN9PC9wPlxuICAgICAgICAgICAgPHA+e3JlY2lwZS5pbnN0cnVjdGlvbnN9PC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3JlY2lwZXMvJyl9PkJhY2sgdG8gTWFpbjwvYnV0dG9uPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7LyogRWRpdCAvIERlbGV0ZSBidXR0b25zIG9ubHkgYXBwZWFyIGlmIGN1cnJlbnQgdXNlciBpcyB0aGUgY3JlYXRvciAqL30gICAgICAgICAgICBcbiAgICAgICAgICAgIHtjdXJyZW50X3VzZXIgPT09IHJlY2lwZS5yZWNpcGVfY3JlYXRvcl9pZCA/IFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RWRpdFN0YXRlKCFlZGl0U3RhdGUpfT5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXCJkZWxldGUhXCIpfT5EZWxldGU8L2J1dHRvbj4gXG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgOiBcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXCJzYXZlIVwiKX0+U2F2ZTwvYnV0dG9uPiAgKi99XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7ZWRpdFN0YXRlID09PSB0cnVlID8gPEVkaXRGb3JtIHNldEVkaXRTdGF0ZT17c2V0RWRpdFN0YXRlfSBrZXk9e3JlY2lwZS5pZH0gZGF0YT17cmVjaXBlfS8+IDogPD48Lz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/recipes/[id].js\n");

/***/ })

})