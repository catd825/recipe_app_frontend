webpackHotUpdate_N_E("pages/recipes",{

/***/ "./src/Components/RecipeItem.js":
/*!**************************************!*\
  !*** ./src/Components/RecipeItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RecipeItem; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/RecipeItem.js\";\n\nfunction RecipeItem({\n  recipes,\n  favorites,\n  selection\n}) {\n  console.log(\"data\", recipes, \"favorites\", favorites, \"selection\", selection);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: recipes.img_url,\n        style: {\n          height: '250px'\n        },\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          href: '/recipes/' + recipes.id,\n          children: recipes.title\n        }, recipes.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 16\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }, this)\n  }, void 0, false);\n}\n/*\nexport default function RecipeItem (props) {\n    console.log(props)\n    return(\n        <div> \n            <img src={recipes.img_url} style={{height:'250px'}} alt='' />\n            <p>{recipes.title}</p>\n        </div>\n    )\n}\n*/\n\n_c = RecipeItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"RecipeItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUmVjaXBlSXRlbS5qcz82ZDQ4Il0sIm5hbWVzIjpbIlJlY2lwZUl0ZW0iLCJyZWNpcGVzIiwiZmF2b3JpdGVzIiwic2VsZWN0aW9uIiwiY29uc29sZSIsImxvZyIsImltZ191cmwiLCJoZWlnaHQiLCJpZCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFVBQVQsQ0FBcUI7QUFBRUMsU0FBRjtBQUFXQyxXQUFYO0FBQXNCQztBQUF0QixDQUFyQixFQUF3RDtBQUVuRUMsU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkosT0FBcEIsRUFBNkIsV0FBN0IsRUFBMENDLFNBQTFDLEVBQXFELFdBQXJELEVBQWtFQyxTQUFsRTtBQUVBLHNCQUNJO0FBQUEsMkJBRUE7QUFBQSw4QkFDSTtBQUFLLFdBQUcsRUFBRUYsT0FBTyxDQUFDSyxPQUFsQjtBQUEyQixhQUFLLEVBQUU7QUFBQ0MsZ0JBQU0sRUFBQztBQUFSLFNBQWxDO0FBQW9ELFdBQUcsRUFBQztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFBLCtCQUFHLHFFQUFDLGdEQUFEO0FBQXVCLGNBQUksRUFBRSxjQUFjTixPQUFPLENBQUNPLEVBQW5EO0FBQUEsb0JBQXdEUCxPQUFPLENBQUNRO0FBQWhFLFdBQVdSLE9BQU8sQ0FBQ08sRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQSxtQkFESjtBQVNIO0FBYUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7S0FwQ3dCUixVIiwiZmlsZSI6Ii4vc3JjL0NvbXBvbmVudHMvUmVjaXBlSXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2lwZUl0ZW0gKHsgcmVjaXBlcywgZmF2b3JpdGVzLCBzZWxlY3Rpb24gfSkge1xuXG4gICAgY29uc29sZS5sb2coXCJkYXRhXCIsIHJlY2lwZXMsIFwiZmF2b3JpdGVzXCIsIGZhdm9yaXRlcywgXCJzZWxlY3Rpb25cIiwgc2VsZWN0aW9uKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICBcbiAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICA8aW1nIHNyYz17cmVjaXBlcy5pbWdfdXJsfSBzdHlsZT17e2hlaWdodDonMjUwcHgnfX0gYWx0PScnIC8+XG4gICAgICAgICAgICA8cD48TGluayBrZXk9e3JlY2lwZXMuaWR9IGhyZWY9eycvcmVjaXBlcy8nICsgcmVjaXBlcy5pZH0+e3JlY2lwZXMudGl0bGV9PC9MaW5rPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8qXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNpcGVJdGVtIChwcm9wcykge1xuICAgIGNvbnNvbGUubG9nKHByb3BzKVxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICA8aW1nIHNyYz17cmVjaXBlcy5pbWdfdXJsfSBzdHlsZT17e2hlaWdodDonMjUwcHgnfX0gYWx0PScnIC8+XG4gICAgICAgICAgICA8cD57cmVjaXBlcy50aXRsZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiovIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/RecipeItem.js\n");

/***/ })

})