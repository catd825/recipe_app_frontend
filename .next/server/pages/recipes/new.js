module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/recipes/new.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Components/Form.js":
/*!********************************!*\
  !*** ./src/Components/Form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Form; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../current_user */ \"./src/current_user.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _RecipeContext_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../RecipeContext/state */ \"./src/RecipeContext/state.js\");\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/Form.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nfunction Form() {\n  const {\n    recipes,\n    setRecipes\n  } = Object(_RecipeContext_state__WEBPACK_IMPORTED_MODULE_4__[\"useRecipeContext\"])();\n  const current_user = _current_user__WEBPACK_IMPORTED_MODULE_2__[\"CURRENT_USER\"];\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  const formObj = {\n    recipe_creator_id: current_user,\n    //only for testing before auth fully implemented\n    title: '',\n    ingredients: '',\n    instructions: '',\n    img_url: '',\n    description: ''\n  };\n  const {\n    0: formData,\n    1: setFormData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(formObj);\n\n  const changeHandler = e => {\n    setFormData(_objectSpread(_objectSpread({}, formData), {}, {\n      [e.target.name]: e.target.value\n    }));\n  };\n\n  const submitHelper = e => {\n    e.preventDefault();\n    submitHandler();\n  };\n\n  const submitHandler = async () => {\n    const configObj = {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      },\n      body: JSON.stringify(formData)\n    };\n    const res = await fetch('http://localhost:3000/recipes', configObj);\n    const data = await res.json();\n    const newRecipeArray = [...recipes, data];\n    setRecipes(newRecipeArray);\n    router.push('/recipes');\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: submitHelper,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Recipe Name\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        onChange: changeHandler,\n        value: formData.title,\n        type: \"text\",\n        name: \"title\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 21\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Ingredients\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        onChange: changeHandler,\n        value: formData.ingredients,\n        type: \"text\",\n        name: \"ingredients\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 21\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Instructions\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        onChange: changeHandler,\n        value: formData.instructions,\n        type: \"text\",\n        name: \"instructions\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 21\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Add Photo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        onChange: changeHandler,\n        value: formData.img_url,\n        type: \"text\",\n        name: \"img_url\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 21\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Description\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        onChange: changeHandler,\n        value: formData.description,\n        type: \"text\",\n        name: \"description\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 21\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Gb3JtLmpzPzNjMDkiXSwibmFtZXMiOlsiRm9ybSIsInJlY2lwZXMiLCJzZXRSZWNpcGVzIiwidXNlUmVjaXBlQ29udGV4dCIsImN1cnJlbnRfdXNlciIsIkNVUlJFTlRfVVNFUiIsInJvdXRlciIsInVzZVJvdXRlciIsImZvcm1PYmoiLCJyZWNpcGVfY3JlYXRvcl9pZCIsInRpdGxlIiwiaW5ncmVkaWVudHMiLCJpbnN0cnVjdGlvbnMiLCJpbWdfdXJsIiwiZGVzY3JpcHRpb24iLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlU3RhdGUiLCJjaGFuZ2VIYW5kbGVyIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInN1Ym1pdEhlbHBlciIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0SGFuZGxlciIsImNvbmZpZ09iaiIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJuZXdSZWNpcGVBcnJheSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBaUI7QUFFNUIsUUFBTTtBQUFDQyxXQUFEO0FBQVVDO0FBQVYsTUFBd0JDLDZFQUFnQixFQUE5QztBQUNBLFFBQU1DLFlBQVksR0FBR0MsMERBQXJCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLFFBQU1DLE9BQU8sR0FBRztBQUNaQyxxQkFBaUIsRUFBRUwsWUFEUDtBQUNxQjtBQUNqQ00sU0FBSyxFQUFFLEVBRks7QUFHWkMsZUFBVyxFQUFFLEVBSEQ7QUFJWkMsZ0JBQVksRUFBRSxFQUpGO0FBS1pDLFdBQU8sRUFBRSxFQUxHO0FBTVpDLGVBQVcsRUFBRTtBQU5ELEdBQWhCO0FBU0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFY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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBc0JIIiwiZmlsZSI6Ii4vc3JjL0NvbXBvbmVudHMvRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVIgfSBmcm9tICcuLi9jdXJyZW50X3VzZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZVJlY2lwZUNvbnRleHQgfSBmcm9tICcuLi9SZWNpcGVDb250ZXh0L3N0YXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtICgpIHtcblxuICAgIGNvbnN0IHtyZWNpcGVzLCBzZXRSZWNpcGVzfSA9IHVzZVJlY2lwZUNvbnRleHQoKTtcbiAgICBjb25zdCBjdXJyZW50X3VzZXIgPSBDVVJSRU5UX1VTRVJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgZm9ybU9iaiA9IHtcbiAgICAgICAgcmVjaXBlX2NyZWF0b3JfaWQ6IGN1cnJlbnRfdXNlciwgLy9vbmx5IGZvciB0ZXN0aW5nIGJlZm9yZSBhdXRoIGZ1bGx5IGltcGxlbWVudGVkXG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgaW5ncmVkaWVudHM6ICcnLFxuICAgICAgICBpbnN0cnVjdGlvbnM6ICcnLFxuICAgICAgICBpbWdfdXJsOiAnJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgfVxuXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZShmb3JtT2JqKVxuXG4gICAgY29uc3QgY2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgICAgIC4uLmZvcm1EYXRhLCBcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBzdWJtaXRIZWxwZXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc3VibWl0SGFuZGxlcigpXG4gICAgfVxuXG4gICAgY29uc3Qgc3VibWl0SGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgY29uZmlnT2JqID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVjaXBlcycsIGNvbmZpZ09iailcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1JlY2lwZUFycmF5ID0gWy4uLnJlY2lwZXMsIGRhdGFdXG4gICAgICAgICAgICBzZXRSZWNpcGVzKG5ld1JlY2lwZUFycmF5KVxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9yZWNpcGVzJyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGVscGVyfT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+UmVjaXBlIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLnRpdGxlfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkluZ3JlZGllbnRzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS5pbmdyZWRpZW50c30gdHlwZT1cInRleHRcIiBuYW1lPVwiaW5ncmVkaWVudHNcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5JbnN0cnVjdGlvbnM8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLmluc3RydWN0aW9uc30gdHlwZT1cInRleHRcIiBuYW1lPVwiaW5zdHJ1Y3Rpb25zXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+QWRkIFBob3RvPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS5pbWdfdXJsfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbWdfdXJsXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLmRlc2NyaXB0aW9ufSB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/Form.js\n");

/***/ }),

/***/ "./src/RecipeContext/state.js":
/*!************************************!*\
  !*** ./src/RecipeContext/state.js ***!
  \************************************/
/*! exports provided: RecipeProvider, useRecipeContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RecipeProvider\", function() { return RecipeProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useRecipeContext\", function() { return useRecipeContext; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/RecipeContext/state.js\";\n\nconst RecipeContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(); //creates a store\n\nconst RecipeProvider = ({\n  children\n}) => {\n  const {\n    0: recipes,\n    1: setRecipes\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const recipeUrl = 'http://localhost:3000/recipes';\n  const {\n    0: favorites,\n    1: setFavorites\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const favoriteRecipeUrl = 'http://localhost:3000/favorite_recipes';\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const fetchRecipes = async () => {\n      const response = await fetch(recipeUrl);\n      const data = await response.json();\n      setRecipes(data);\n    };\n\n    fetchRecipes();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const fetchFavorites = async () => {\n      const response = await fetch(favoriteRecipeUrl);\n      const data = await response.json();\n      setFavorites(data);\n    };\n\n    fetchFavorites();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RecipeContext.Provider, {\n    value: {\n      recipes,\n      setRecipes,\n      favorites,\n      setFavorites\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 9\n  }, undefined);\n};\nconst useRecipeContext = () => {\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(RecipeContext);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUmVjaXBlQ29udGV4dC9zdGF0ZS5qcz8wNjcwIl0sIm5hbWVzIjpbIlJlY2lwZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUmVjaXBlUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlY2lwZXMiLCJzZXRSZWNpcGVzIiwidXNlU3RhdGUiLCJyZWNpcGVVcmwiLCJmYXZvcml0ZXMiLCJzZXRGYXZvcml0ZXMiLCJmYXZvcml0ZVJlY2lwZVVybCIsInVzZUVmZmVjdCIsImZldGNoUmVjaXBlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImZldGNoRmF2b3JpdGVzIiwidXNlUmVjaXBlQ29udGV4dCIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsRUFBbkMsQyxDQUF1Qzs7QUFFaEMsTUFBTUMsY0FBYyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQzVDLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLCtCQUFsQjtBQUNBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0Qkgsc0RBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBTUksaUJBQWlCLEdBQUcsd0NBQTFCO0FBRUFDLHlEQUFTLENBQUUsTUFBTTtBQUNiLFVBQU1DLFlBQVksR0FBRyxZQUFZO0FBQzdCLFlBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNQLFNBQUQsQ0FBNUI7QUFDQSxZQUFNUSxJQUFJLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFULEVBQW5CO0FBRUFYLGdCQUFVLENBQUNVLElBQUQsQ0FBVjtBQUNILEtBTEQ7O0FBTUFILGdCQUFZO0FBQ2IsR0FSTSxFQVFKLEVBUkksQ0FBVDtBQVVBRCx5REFBUyxDQUFFLE1BQU07QUFDYixVQUFNTSxjQUFjLEdBQUcsWUFBWTtBQUMvQixZQUFNSixRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDSixpQkFBRCxDQUE1QjtBQUNBLFlBQU1LLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBbkI7QUFDQVAsa0JBQVksQ0FBQ00sSUFBRCxDQUFaO0FBQ0gsS0FKRDs7QUFLQUUsa0JBQWM7QUFDZixHQVBNLEVBT0osRUFQSSxDQUFUO0FBU0Esc0JBQ0kscUVBQUMsYUFBRCxDQUFlLFFBQWY7QUFBd0IsU0FBSyxFQUFFO0FBQUViLGFBQUY7QUFBV0MsZ0JBQVg7QUFBdUJHLGVBQXZCO0FBQWtDQztBQUFsQyxLQUEvQjtBQUFBLGNBQ0tOO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0gsQ0E5Qk07QUFnQ0EsTUFBTWUsZ0JBQWdCLEdBQUcsTUFBTTtBQUNsQyxTQUFPQyx3REFBVSxDQUFDbkIsYUFBRCxDQUFqQjtBQUNILENBRk0iLCJmaWxlIjoiLi9zcmMvUmVjaXBlQ29udGV4dC9zdGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgUmVjaXBlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTsgLy9jcmVhdGVzIGEgc3RvcmVcblxuZXhwb3J0IGNvbnN0IFJlY2lwZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IFtyZWNpcGVzLCBzZXRSZWNpcGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCByZWNpcGVVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlY2lwZXMnXG4gICAgY29uc3QgW2Zhdm9yaXRlcywgc2V0RmF2b3JpdGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBmYXZvcml0ZVJlY2lwZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZmF2b3JpdGVfcmVjaXBlcydcblxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaFJlY2lwZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlY2lwZVVybClcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgXG4gICAgICAgICAgICBzZXRSZWNpcGVzKGRhdGEpO1xuICAgICAgICB9O1xuICAgICAgICBmZXRjaFJlY2lwZXMoKTtcbiAgICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaEZhdm9yaXRlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZmF2b3JpdGVSZWNpcGVVcmwpXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgc2V0RmF2b3JpdGVzKGRhdGEpO1xuICAgICAgICB9O1xuICAgICAgICBmZXRjaEZhdm9yaXRlcygpO1xuICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlY2lwZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgcmVjaXBlcywgc2V0UmVjaXBlcywgZmF2b3JpdGVzLCBzZXRGYXZvcml0ZXMgfX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvUmVjaXBlQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBjb25zdCB1c2VSZWNpcGVDb250ZXh0ID0gKCkgPT4ge1xuICAgIHJldHVybiB1c2VDb250ZXh0KFJlY2lwZUNvbnRleHQpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/RecipeContext/state.js\n");

/***/ }),

/***/ "./src/current_user.js":
/*!*****************************!*\
  !*** ./src/current_user.js ***!
  \*****************************/
/*! exports provided: CURRENT_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CURRENT_USER\", function() { return CURRENT_USER; });\nconst CURRENT_USER = 25;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3VycmVudF91c2VyLmpzPzgzZGYiXSwibmFtZXMiOlsiQ1VSUkVOVF9VU0VSIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQU8sTUFBTUEsWUFBWSxHQUFHLEVBQXJCIiwiZmlsZSI6Ii4vc3JjL2N1cnJlbnRfdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBDVVJSRU5UX1VTRVIgPSAyNSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/current_user.js\n");

/***/ }),

/***/ "./src/pages/recipes/new.js":
/*!**********************************!*\
  !*** ./src/pages/recipes/new.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NewRecipe; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/Form */ \"./src/Components/Form.js\");\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/pages/recipes/new.js\";\n\nfunction NewRecipe() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }, this)\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcmVjaXBlcy9uZXcuanM/YzIyYSJdLCJuYW1lcyI6WyJOZXdSZWNpcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxTQUFULEdBQXNCO0FBQ2pDLHNCQUNBO0FBQUEsMkJBQ0kscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURBO0FBS0giLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVjaXBlcy9uZXcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9Db21wb25lbnRzL0Zvcm0nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1JlY2lwZSAoKSB7XG4gICAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICA8Rm9ybSAvPlxuICAgIDwvPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/recipes/new.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });