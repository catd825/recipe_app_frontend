webpackHotUpdate_N_E("pages/recipes",{

/***/ "./src/Components/RecipeItem.js":
/*!**************************************!*\
  !*** ./src/Components/RecipeItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RecipeItem; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/RecipeItem.js\";\n\n\n\nfunction RecipeItem({\n  data\n}) {\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_3__[\"CURRENT_USER\"];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      src: data.img_url,\n      style: {\n        height: '250px'\n      },\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: '/recipes/' + data.id,\n        children: data.title\n      }, data.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 16\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, this);\n}\n/*\nexport default function RecipeItem (props) {\n    console.log(props)\n    return(\n        <div> \n            <img src={data.img_url} style={{height:'250px'}} alt='' />\n            <p>{data.title}</p>\n        </div>\n    )\n}\n*/\n\n_c = RecipeItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"RecipeItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUmVjaXBlSXRlbS5qcz82ZDQ4Il0sIm5hbWVzIjpbIlJlY2lwZUl0ZW0iLCJkYXRhIiwiY3VycmVudF91c2VyIiwiQ1VSUkVOVF9VU0VSIiwiaW1nX3VybCIsImhlaWdodCIsImlkIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsVUFBVCxDQUFxQjtBQUFDQztBQUFELENBQXJCLEVBQTZCO0FBQ3hDLFFBQU1DLFlBQVksR0FBR0MsMERBQXJCO0FBQ0Esc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxpREFBRDtBQUFPLFNBQUcsRUFBRUYsSUFBSSxDQUFDRyxPQUFqQjtBQUEwQixXQUFLLEVBQUU7QUFBQ0MsY0FBTSxFQUFDO0FBQVIsT0FBakM7QUFBbUQsU0FBRyxFQUFDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUEsNkJBQUcscUVBQUMsZ0RBQUQ7QUFBb0IsWUFBSSxFQUFFLGNBQWNKLElBQUksQ0FBQ0ssRUFBN0M7QUFBQSxrQkFBa0RMLElBQUksQ0FBQ007QUFBdkQsU0FBV04sSUFBSSxDQUFDSyxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUg7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQXBCd0JOLFUiLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9SZWNpcGVJdGVtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IENVUlJFTlRfVVNFUiB9IGZyb20gJy4uL2N1cnJlbnRfdXNlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlSXRlbSAoe2RhdGF9KSB7XG4gICAgY29uc3QgY3VycmVudF91c2VyID0gQ1VSUkVOVF9VU0VSXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PiBcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2RhdGEuaW1nX3VybH0gc3R5bGU9e3toZWlnaHQ6JzI1MHB4J319IGFsdD0nJyAvPlxuICAgICAgICAgICAgPHA+PExpbmsga2V5PXtkYXRhLmlkfSBocmVmPXsnL3JlY2lwZXMvJyArIGRhdGEuaWR9PntkYXRhLnRpdGxlfTwvTGluaz48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuLypcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2lwZUl0ZW0gKHByb3BzKSB7XG4gICAgY29uc29sZS5sb2cocHJvcHMpXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PiBcbiAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmltZ191cmx9IHN0eWxlPXt7aGVpZ2h0OicyNTBweCd9fSBhbHQ9JycgLz5cbiAgICAgICAgICAgIDxwPntkYXRhLnRpdGxlfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuKi8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/RecipeItem.js\n");

/***/ })

})