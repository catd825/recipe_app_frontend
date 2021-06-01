module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/signup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Components/Signup.js":
/*!**********************************!*\
  !*** ./src/Components/Signup.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UserContext_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserContext/state */ \"./src/UserContext/state.js\");\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/Signup.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction Login() {\n  const {\n    signupHandler\n  } = Object(_UserContext_state__WEBPACK_IMPORTED_MODULE_2__[\"useUserContext\"])();\n  const userObj = {\n    username: '',\n    password: '',\n    name: '',\n    bio: ''\n  };\n  const {\n    0: userData,\n    1: setUserData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(userObj);\n\n  const changeHandler = e => {\n    setUserData(_objectSpread(_objectSpread({}, userData), {}, {\n      [e.target.name]: e.target.value\n    }));\n    console.log(e.target.name, \":\", e.target.value);\n  };\n\n  const submitHandler = e => {\n    e.preventDefault();\n    signupHandler(userData);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: \"Login\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: submitHandler,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        name: \"username\",\n        onChange: changeHandler,\n        value: userData.username,\n        type: \"text\",\n        placeholder: \"Username\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 135\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        name: \"password\",\n        onChange: changeHandler,\n        value: userData.password,\n        type: \"password\",\n        placeholder: \"Password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 139\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        name: \"name\",\n        onChange: changeHandler,\n        value: userData.name,\n        type: \"text\",\n        placeholder: \"Name\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 123\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n        name: \"bio\",\n        onChange: changeHandler,\n        value: userData.bio,\n        type: \"text\",\n        placeholder: \"Tell us about yourself!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 146\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TaWdudXAuanM/OThiNiJdLCJuYW1lcyI6WyJMb2dpbiIsInNpZ251cEhhbmRsZXIiLCJ1c2VVc2VyQ29udGV4dCIsInVzZXJPYmoiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibmFtZSIsImJpbyIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJ1c2VTdGF0ZSIsImNoYW5nZUhhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwic3VibWl0SGFuZGxlciIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBa0I7QUFDN0IsUUFBTTtBQUFDQztBQUFELE1BQWtCQyx5RUFBYyxFQUF0QztBQUVBLFFBQU1DLE9BQU8sR0FBRztBQUNaQyxZQUFRLEVBQUUsRUFERTtBQUVaQyxZQUFRLEVBQUUsRUFGRTtBQUdaQyxRQUFJLEVBQUUsRUFITTtBQUlaQyxPQUFHLEVBQUU7QUFKTyxHQUFoQjtBQU9BLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQ1AsT0FBRCxDQUF4Qzs7QUFFQSxRQUFNUSxhQUFhLEdBQUlDLENBQUQsSUFBTztBQUN6QkgsZUFBVyxpQ0FDSkQsUUFESTtBQUVQLE9BQUNJLENBQUMsQ0FBQ0MsTUFBRixDQUFTUCxJQUFWLEdBQWlCTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0M7QUFGbkIsT0FBWDtBQUlBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosQ0FBQyxDQUFDQyxNQUFGLENBQVNQLElBQXJCLEVBQTBCLEdBQTFCLEVBQStCTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBeEM7QUFDSCxHQU5EOztBQVFBLFFBQU1HLGFBQWEsR0FBSUwsQ0FBRCxJQUFPO0FBQ3pCQSxLQUFDLENBQUNNLGNBQUY7QUFDQWpCLGlCQUFhLENBQUNPLFFBQUQsQ0FBYjtBQUNILEdBSEQ7O0FBTUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBTSxjQUFRLEVBQUVTLGFBQWhCO0FBQUEsOEJBQ0k7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixnQkFBUSxFQUFFTixhQUFqQztBQUFnRCxhQUFLLEVBQUVILFFBQVEsQ0FBQ0osUUFBaEU7QUFBMEUsWUFBSSxFQUFDLE1BQS9FO0FBQXNGLG1CQUFXLEVBQUM7QUFBbEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLG9CQUMwSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRDFILGVBRUk7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixnQkFBUSxFQUFFTyxhQUFqQztBQUFnRCxhQUFLLEVBQUVILFFBQVEsQ0FBQ0gsUUFBaEU7QUFBMEUsWUFBSSxFQUFDLFVBQS9FO0FBQTBGLG1CQUFXLEVBQUM7QUFBdEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLG9CQUU4SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRjlILGVBR0k7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixnQkFBUSxFQUFFTSxhQUE3QjtBQUE0QyxhQUFLLEVBQUVILFFBQVEsQ0FBQ0YsSUFBNUQ7QUFBa0UsWUFBSSxFQUFDLE1BQXZFO0FBQThFLG1CQUFXLEVBQUM7QUFBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLG9CQUc4RztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSDlHLGVBSUk7QUFBVSxZQUFJLEVBQUMsS0FBZjtBQUFxQixnQkFBUSxFQUFFSyxhQUEvQjtBQUE4QyxhQUFLLEVBQUVILFFBQVEsQ0FBQ0QsR0FBOUQ7QUFBbUUsWUFBSSxFQUFDLE1BQXhFO0FBQStFLG1CQUFXLEVBQUM7QUFBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLG9CQUlxSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSnJJLGVBS0k7QUFBTyxZQUFJLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSCIsImZpbGUiOiIuL3NyYy9Db21wb25lbnRzL1NpZ251cC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VVc2VyQ29udGV4dCB9IGZyb20gJy4uL1VzZXJDb250ZXh0L3N0YXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbiAoKSB7XG4gICAgY29uc3Qge3NpZ251cEhhbmRsZXJ9ID0gdXNlVXNlckNvbnRleHQoKTtcblxuICAgIGNvbnN0IHVzZXJPYmogPSB7XG4gICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgYmlvOiAnJ1xuICAgIH1cblxuICAgIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUodXNlck9iailcblxuICAgIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICBzZXRVc2VyRGF0YSh7XG4gICAgICAgICAgICAuLi51c2VyRGF0YSxcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQubmFtZSxcIjpcIiwgZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2lnbnVwSGFuZGxlcih1c2VyRGF0YSlcbiAgICB9XG4gICAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPkxvZ2luPC9oMj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInVzZXJuYW1lXCIgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXt1c2VyRGF0YS51c2VybmFtZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCI+PC9pbnB1dD4gPGJyLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXt1c2VyRGF0YS5wYXNzd29yZH0gdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiPjwvaW5wdXQ+IDxici8+XG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXt1c2VyRGF0YS5uYW1lfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiPjwvaW5wdXQ+IDxici8+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJiaW9cIiBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e3VzZXJEYXRhLmJpb30gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRlbGwgdXMgYWJvdXQgeW91cnNlbGYhXCI+PC90ZXh0YXJlYT4gPGJyLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiID48L2lucHV0PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/Signup.js\n");

/***/ }),

/***/ "./src/UserContext/state.js":
/*!**********************************!*\
  !*** ./src/UserContext/state.js ***!
  \**********************************/
/*! exports provided: UserProvider, useUserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserProvider\", function() { return UserProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useUserContext\", function() { return useUserContext; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/UserContext/state.js\";\n\n\nconst UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(); //creates a store\n\nconst UserProvider = ({\n  children\n}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false); // const userUrl = 'http://localhost:3000/api/v1/users';\n  // useEffect( () => {\n  //   const fetchUsers = async () => {\n  //       const response = await fetch(userUrl)\n  //       const data = await response.json();\n  //       setUser(data);\n  //   };\n  //   fetchUsers();\n  // }, []);\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const token = getToken();\n\n    if (token) {\n      retrieveUser(token);\n    }\n  }, []);\n\n  const getToken = () => {\n    return localStorage.getItem(\"token\");\n  };\n\n  const retrieveUser = () => {\n    const token = getToken();\n\n    if (token) {\n      fetch(\"http://localhost:3000/api/v1/profile\", {\n        method: \"GET\",\n        headers: {\n          Authorization: `Bearer ${token}`\n        }\n      }).then(response => response.json()).then(data => {\n        setUser({\n          user: data.user\n        });\n      });\n    } else {\n      router.push(\"/signup\");\n    }\n  };\n\n  const loginHandler = userInfo => {\n    const configObj = {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      },\n      'body': JSON.stringify({\n        user: userInfo\n      })\n    };\n    console.log(configObj);\n    fetch(\"http://localhost:3000/api/v1/login\", configObj).then(response => response.json()).then(data => {\n      localStorage.setItem(\"token\", data.jwt);\n      setUser({\n        user: data.user\n      }, () => router.push(\"/recipes\"));\n    });\n  };\n\n  const signupHandler = userInfo => {\n    const configObj = {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      },\n      'body': JSON.stringify({\n        user: userInfo\n      })\n    };\n    fetch(\"http://localhost:3000/api/v1/users\", configObj).then(response => response.json()).then(data => {\n      localStorage.setItem(\"token\", data.jwt);\n      setUser({\n        user: data.user\n      }, () => router.push(\"/recipes\"));\n    });\n  };\n\n  console.log(user);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(UserContext.Provider, {\n    value: {\n      user,\n      loginHandler,\n      signupHandler\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 9\n  }, undefined);\n};\nconst useUserContext = () => {\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(UserContext);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVXNlckNvbnRleHQvc3RhdGUuanM/ZDA2MCJdLCJuYW1lcyI6WyJVc2VyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJVc2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZXIiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImdldFRva2VuIiwicmV0cmlldmVVc2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInB1c2giLCJsb2dpbkhhbmRsZXIiLCJ1c2VySW5mbyIsImNvbmZpZ09iaiIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsImp3dCIsInNpZ251cEhhbmRsZXIiLCJ1c2VVc2VyQ29udGV4dCIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLEVBQWpDLEMsQ0FBcUM7O0FBRTlCLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUUxQyxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEtBQUQsQ0FBaEMsQ0FKMEMsQ0FLMUM7QUFFRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQyx5REFBUyxDQUFFLE1BQU07QUFDZixVQUFNQyxLQUFLLEdBQUdDLFFBQVEsRUFBdEI7O0FBQ0EsUUFBR0QsS0FBSCxFQUFTO0FBQ1BFLGtCQUFZLENBQUNGLEtBQUQsQ0FBWjtBQUNEO0FBQ0YsR0FMUSxFQUtOLEVBTE0sQ0FBVDs7QUFPQSxR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ImZpbGUiOiIuL3NyYy9Vc2VyQ29udGV4dC9zdGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTsgLy9jcmVhdGVzIGEgc3RvcmVcblxuZXhwb3J0IGNvbnN0IFVzZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIC8vIGNvbnN0IHVzZXJVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS91c2Vycyc7XG5cbiAgICAgIC8vIHVzZUVmZmVjdCggKCkgPT4ge1xuICAgICAgLy8gICBjb25zdCBmZXRjaFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1c2VyVXJsKVxuICAgICAgLy8gICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIC8vICAgICAgIHNldFVzZXIoZGF0YSk7XG4gICAgICAvLyAgIH07XG4gICAgICAvLyAgIGZldGNoVXNlcnMoKTtcbiAgICAgIC8vIH0sIFtdKTtcblxuICAgICAgdXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gZ2V0VG9rZW4oKVxuICAgICAgICBpZih0b2tlbil7XG4gICAgICAgICAgcmV0cmlldmVVc2VyKHRva2VuKVxuICAgICAgICB9XG4gICAgICB9LCBbXSk7XG5cbiAgICAgIGNvbnN0IGdldFRva2VuID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXRyaWV2ZVVzZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gZ2V0VG9rZW4oKVxuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvcHJvZmlsZVwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWB9LFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICBzZXRVc2VyKHt1c2VyOiBkYXRhLnVzZXJ9KX1cbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9zaWdudXBcIilcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgbG9naW5IYW5kbGVyID0gKHVzZXJJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbmZpZ09iaiA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgICdib2R5JzogSlNPTi5zdHJpbmdpZnkoe3VzZXI6IHVzZXJJbmZvfSlcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhjb25maWdPYmopXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9sb2dpblwiLCBjb25maWdPYmopXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBkYXRhLmp3dClcbiAgICAgICAgICBzZXRVc2VyKHt1c2VyOiBkYXRhLnVzZXJ9LCAoKSA9PiByb3V0ZXIucHVzaChcIi9yZWNpcGVzXCIpKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBjb25zdCBzaWdudXBIYW5kbGVyID0gKHVzZXJJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbmZpZ09iaiA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgICdib2R5JzogSlNPTi5zdHJpbmdpZnkoe3VzZXI6IHVzZXJJbmZvfSlcbiAgICAgICAgfVxuICAgICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvdXNlcnNcIiwgY29uZmlnT2JqKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgZGF0YS5qd3QpXG4gICAgICAgICAgc2V0VXNlcih7dXNlcjogZGF0YS51c2VyfSwgKCkgPT4gcm91dGVyLnB1c2goXCIvcmVjaXBlc1wiKSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgbG9naW5IYW5kbGVyLCBzaWdudXBIYW5kbGVyIH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVVzZXJDb250ZXh0ID0gKCkgPT4ge1xuICAgIHJldHVybiB1c2VDb250ZXh0KFVzZXJDb250ZXh0KVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/UserContext/state.js\n");

/***/ }),

/***/ "./src/pages/signup.js":
/*!*****************************!*\
  !*** ./src/pages/signup.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components_Signup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Signup */ \"./src/Components/Signup.js\");\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/pages/signup.js\";\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_Signup__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }, this)\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2lnbnVwLmpzPzViMGMiXSwibmFtZXMiOlsiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLElBQVQsR0FBaUI7QUFDNUIsc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFLSCIsImZpbGUiOiIuL3NyYy9wYWdlcy9zaWdudXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2lnbnVwIGZyb20gJy4uL0NvbXBvbmVudHMvU2lnbnVwJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFNpZ251cCAvPlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/signup.js\n");

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