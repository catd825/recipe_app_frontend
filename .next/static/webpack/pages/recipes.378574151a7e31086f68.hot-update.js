webpackHotUpdate_N_E("pages/recipes",{

/***/ "./src/Components/RecipeItem.js":
/*!**************************************!*\
  !*** ./src/Components/RecipeItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RecipeItem; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/RecipeItem.js\";\n\nfunction RecipeItem({\n  recipes,\n  favorites,\n  selection\n}) {\n  // console.log(\"data\", recipes, \"favorites\", favorites, \"selection\", selection)\n  console.log(selection.selection);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: selection.selection === 'saved' ? favorites.map(favorite => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: favorite.recipe_img,\n        style: {\n          height: '250px'\n        },\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          href: '/recipes/' + favorite.id,\n          children: favorite.recipe_name\n        }, favorite.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 20\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 70\n    }, this)) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: recipes.img_url,\n        style: {\n          height: '250px'\n        },\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          href: '/recipes/' + recipes.id,\n          children: recipes.title\n        }, recipes.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 20\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, this)\n  }, void 0, false);\n}\n/*\nexport default function RecipeItem (props) {\n    console.log(props)\n    return(\n        <div> \n            <img src={recipes.img_url} style={{height:'250px'}} alt='' />\n            <p>{recipes.title}</p>\n        </div>\n    )\n}\n*/\n\n_c = RecipeItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"RecipeItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUmVjaXBlSXRlbS5qcz82ZDQ4Il0sIm5hbWVzIjpbIlJlY2lwZUl0ZW0iLCJyZWNpcGVzIiwiZmF2b3JpdGVzIiwic2VsZWN0aW9uIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImZhdm9yaXRlIiwicmVjaXBlX2ltZyIsImhlaWdodCIsImlkIiwicmVjaXBlX25hbWUiLCJpbWdfdXJsIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsVUFBVCxDQUFxQjtBQUFFQyxTQUFGO0FBQVdDLFdBQVg7QUFBc0JDO0FBQXRCLENBQXJCLEVBQXdEO0FBRW5FO0FBR0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixTQUFTLENBQUNBLFNBQXRCO0FBQ0Esc0JBQ0k7QUFBQSxjQUNDQSxTQUFTLENBQUNBLFNBQVYsS0FBd0IsT0FBeEIsR0FBa0NELFNBQVMsQ0FBQ0ksR0FBVixDQUFjQyxRQUFRLGlCQUFJO0FBQUEsOEJBQ3JEO0FBQUssV0FBRyxFQUFFQSxRQUFRLENBQUNDLFVBQW5CO0FBQStCLGFBQUssRUFBRTtBQUFDQyxnQkFBTSxFQUFDO0FBQVIsU0FBdEM7QUFBd0QsV0FBRyxFQUFDO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEcUQsZUFFckQ7QUFBQSwrQkFBRyxxRUFBQyxnREFBRDtBQUF3QixjQUFJLEVBQUUsY0FBY0YsUUFBUSxDQUFDRyxFQUFyRDtBQUFBLG9CQUEwREgsUUFBUSxDQUFDSTtBQUFuRSxXQUFXSixRQUFRLENBQUNHLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRnFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUExQixDQUFsQyxnQkFJRztBQUFBLDhCQUNJO0FBQUssV0FBRyxFQUFFVCxPQUFPLENBQUNXLE9BQWxCO0FBQTJCLGFBQUssRUFBRTtBQUFDSCxnQkFBTSxFQUFDO0FBQVIsU0FBbEM7QUFBb0QsV0FBRyxFQUFDO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUEsK0JBQUcscUVBQUMsZ0RBQUQ7QUFBdUIsY0FBSSxFQUFFLGNBQWNSLE9BQU8sQ0FBQ1MsRUFBbkQ7QUFBQSxvQkFBd0RULE9BQU8sQ0FBQ1k7QUFBaEUsV0FBV1osT0FBTyxDQUFDUyxFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKLG1CQURKO0FBYUg7QUFhRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQTFDd0JWLFUiLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9SZWNpcGVJdGVtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlSXRlbSAoeyByZWNpcGVzLCBmYXZvcml0ZXMsIHNlbGVjdGlvbiB9KSB7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcImRhdGFcIiwgcmVjaXBlcywgXCJmYXZvcml0ZXNcIiwgZmF2b3JpdGVzLCBcInNlbGVjdGlvblwiLCBzZWxlY3Rpb24pXG5cblxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGlvbi5zZWxlY3Rpb24pXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICB7c2VsZWN0aW9uLnNlbGVjdGlvbiA9PT0gJ3NhdmVkJyA/IGZhdm9yaXRlcy5tYXAoZmF2b3JpdGUgPT4gPGRpdj4gXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2Zhdm9yaXRlLnJlY2lwZV9pbWd9IHN0eWxlPXt7aGVpZ2h0OicyNTBweCd9fSBhbHQ9JycgLz5cbiAgICAgICAgICAgICAgICA8cD48TGluayBrZXk9e2Zhdm9yaXRlLmlkfSBocmVmPXsnL3JlY2lwZXMvJyArIGZhdm9yaXRlLmlkfT57ZmF2b3JpdGUucmVjaXBlX25hbWV9PC9MaW5rPjwvcD5cbiAgICAgICAgICAgIDwvZGl2PikgOiBcbiAgICAgICAgICAgIDxkaXY+IFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZWNpcGVzLmltZ191cmx9IHN0eWxlPXt7aGVpZ2h0OicyNTBweCd9fSBhbHQ9JycgLz5cbiAgICAgICAgICAgICAgICA8cD48TGluayBrZXk9e3JlY2lwZXMuaWR9IGhyZWY9eycvcmVjaXBlcy8nICsgcmVjaXBlcy5pZH0+e3JlY2lwZXMudGl0bGV9PC9MaW5rPjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8qXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNpcGVJdGVtIChwcm9wcykge1xuICAgIGNvbnNvbGUubG9nKHByb3BzKVxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICA8aW1nIHNyYz17cmVjaXBlcy5pbWdfdXJsfSBzdHlsZT17e2hlaWdodDonMjUwcHgnfX0gYWx0PScnIC8+XG4gICAgICAgICAgICA8cD57cmVjaXBlcy50aXRsZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiovIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/RecipeItem.js\n");

/***/ })

})