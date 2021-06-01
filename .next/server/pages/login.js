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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Components/Login.js":
/*!*********************************!*\
  !*** ./src/Components/Login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UserContext_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserContext/state */ \"./src/UserContext/state.js\");\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/Components/Login.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction Login() {\n  const {\n    loginHandler\n  } = Object(_UserContext_state__WEBPACK_IMPORTED_MODULE_2__[\"useUserContext\"])();\n  const userObj = {\n    username: '',\n    password: ''\n  };\n  const {\n    0: userData,\n    1: setUserData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(userObj);\n\n  const changeHandler = e => {\n    setUserData(_objectSpread(_objectSpread({}, userData), {}, {\n      [e.target.name]: e.target.value\n    }));\n    console.log(e.target.name, \":\", e.target.value);\n  };\n\n  const submitHandler = e => {\n    e.preventDefault();\n    loginHandler(userData);\n  }; // debugger\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: \"Login\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: submitHandler,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        name: \"username\",\n        onChange: changeHandler,\n        value: userData.username,\n        type: \"text\",\n        placeholder: \"Username\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 135\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        name: \"password\",\n        onChange: changeHandler,\n        value: userData.password,\n        type: \"password\",\n        placeholder: \"Password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 139\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Mb2dpbi5qcz81M2RjIl0sIm5hbWVzIjpbIkxvZ2luIiwibG9naW5IYW5kbGVyIiwidXNlVXNlckNvbnRleHQiLCJ1c2VyT2JqIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJ1c2VTdGF0ZSIsImNoYW5nZUhhbmRsZXIiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInN1Ym1pdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWtCO0FBQzdCLFFBQU07QUFBQ0M7QUFBRCxNQUFpQkMseUVBQWMsRUFBckM7QUFFQSxRQUFNQyxPQUFPLEdBQUc7QUFDWkMsWUFBUSxFQUFFLEVBREU7QUFFWkMsWUFBUSxFQUFFO0FBRkUsR0FBaEI7QUFLQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUNMLE9BQUQsQ0FBeEM7O0FBRUEsUUFBTU0sYUFBYSxHQUFJQyxDQUFELElBQU87QUFDekJILGVBQVcsaUNBQ0pELFFBREk7QUFFUCxPQUFDSSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsSUFBVixHQUFpQkYsQ0FBQyxDQUFDQyxNQUFGLENBQVNFO0FBRm5CLE9BQVg7QUFJQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlMLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxJQUFyQixFQUEwQixHQUExQixFQUErQkYsQ0FBQyxDQUFDQyxNQUFGLENBQVNFLEtBQXhDO0FBQ0gsR0FORDs7QUFRQSxRQUFNRyxhQUFhLEdBQUlOLENBQUQsSUFBTztBQUN6QkEsS0FBQyxDQUFDTyxjQUFGO0FBQ0FoQixnQkFBWSxDQUFDSyxRQUFELENBQVo7QUFDSCxHQUhELENBbEI2QixDQXVCN0I7OztBQUNBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQU0sY0FBUSxFQUFFVSxhQUFoQjtBQUFBLDhCQUNJO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsZ0JBQVEsRUFBRVAsYUFBakM7QUFBZ0QsYUFBSyxFQUFFSCxRQUFRLENBQUNGLFFBQWhFO0FBQTBFLFlBQUksRUFBQyxNQUEvRTtBQUFzRixtQkFBVyxFQUFDO0FBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixvQkFDMEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUQxSCxlQUVJO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsZ0JBQVEsRUFBRUssYUFBakM7QUFBZ0QsYUFBSyxFQUFFSCxRQUFRLENBQUNELFFBQWhFO0FBQTBFLFlBQUksRUFBQyxVQUEvRTtBQUEwRixtQkFBVyxFQUFDO0FBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixvQkFFOEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUY5SCxlQUdJO0FBQU8sWUFBSSxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUgiLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9Mb2dpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VVc2VyQ29udGV4dCB9IGZyb20gJy4uL1VzZXJDb250ZXh0L3N0YXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbiAoKSB7XG4gICAgY29uc3Qge2xvZ2luSGFuZGxlcn0gPSB1c2VVc2VyQ29udGV4dCgpO1xuXG4gICAgY29uc3QgdXNlck9iaiA9IHtcbiAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgfVxuXG4gICAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZSh1c2VyT2JqKVxuXG4gICAgY29uc3QgY2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgIHNldFVzZXJEYXRhKHtcbiAgICAgICAgICAgIC4uLnVzZXJEYXRhLFxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lLFwiOlwiLCBlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsb2dpbkhhbmRsZXIodXNlckRhdGEpXG4gICAgfVxuICAgIFxuICAgIC8vIGRlYnVnZ2VyXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMj5Mb2dpbjwvaDI+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJ1c2VybmFtZVwiIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17dXNlckRhdGEudXNlcm5hbWV9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiPjwvaW5wdXQ+IDxici8+XG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17dXNlckRhdGEucGFzc3dvcmR9IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIj48L2lucHV0PiA8YnIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgPjwvaW5wdXQ+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/Login.js\n");

/***/ }),

/***/ "./src/UserContext/state.js":
/*!**********************************!*\
  !*** ./src/UserContext/state.js ***!
  \**********************************/
/*! exports provided: UserProvider, useUserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserProvider\", function() { return UserProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useUserContext\", function() { return useUserContext; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/UserContext/state.js\";\n\n\nconst UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(); //creates a store\n\nconst UserProvider = ({\n  children\n}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const token = getToken();\n\n    if (token) {\n      retrieveUser(token);\n    }\n  }, []);\n\n  const getToken = () => {\n    return localStorage.getItem(\"token\");\n  };\n\n  const retrieveUser = () => {\n    const token = getToken();\n\n    if (token) {\n      fetch(\"http://localhost:3000/api/v1/profile\", {\n        method: \"GET\",\n        headers: {\n          Authorization: `Bearer ${token}`\n        }\n      }).then(response => response.json()).then(data => {\n        setUser({\n          user: data.user\n        });\n      });\n    } else {\n      router.push(\"/login\");\n    }\n  };\n\n  const loginHandler = userInfo => {\n    const configObj = {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      },\n      'body': JSON.stringify({\n        user: userInfo\n      })\n    };\n    fetch(\"http://localhost:3000/api/v1/login\", configObj).then(response => response.json()).then(data => {\n      localStorage.setItem(\"token\", data.jwt);\n      setUser({\n        user: data.user\n      }, router.push(\"/recipes\"));\n    });\n  };\n\n  const signupHandler = userInfo => {\n    const configObj = {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      },\n      'body': JSON.stringify({\n        user: userInfo\n      })\n    };\n    fetch(\"http://localhost:3000/api/v1/users\", configObj).then(response => response.json()).then(data => {\n      localStorage.setItem(\"token\", data.jwt);\n      setUser({\n        user: data.user\n      }, router.push(\"/recipes\"));\n    });\n  };\n\n  const logOutHandler = () => {\n    localStorage.clear();\n    router.push(\"/login\");\n    setUser({\n      user: false\n    }, () => console.log(user));\n  };\n\n  console.log(user);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(UserContext.Provider, {\n    value: {\n      user,\n      loginHandler,\n      signupHandler,\n      logOutHandler\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 9\n  }, undefined);\n};\nconst useUserContext = () => {\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(UserContext);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVXNlckNvbnRleHQvc3RhdGUuanM/ZDA2MCJdLCJuYW1lcyI6WyJVc2VyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJVc2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZXIiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImdldFRva2VuIiwicmV0cmlldmVVc2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInB1c2giLCJsb2dpbkhhbmRsZXIiLCJ1c2VySW5mbyIsImNvbmZpZ09iaiIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRJdGVtIiwiand0Iiwic2lnbnVwSGFuZGxlciIsImxvZ091dEhhbmRsZXIiLCJjbGVhciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VVc2VyQ29udGV4dCIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLEVBQWpDLEMsQ0FBcUM7O0FBRTlCLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUUxQyxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEtBQUQsQ0FBaEM7QUFFRUMseURBQVMsQ0FBRSxNQUFNO0FBQ2YsVUFBTUMsS0FBSyxHQUFHQyxRQUFRLEVBQXRCOztBQUNBLFFBQUdELEtBQUgsRUFBUztBQUNQRSxrQkFBWSxDQUFDRixLQUFELENBQVo7QUFDRDtBQUNGLEdBTFEsRUFLTixFQUxNLENBQVQ7O0FBT0EsUUFBTUMsUUFBUSxHQUFHLE1BQU07QUFDckIsV0FB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S0FBN0I7QUFBQSxjQUNLN0I7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFNSCxDQTlFTTtBQWdGQSxNQUFNaUMsY0FBYyxHQUFHLE1BQU07QUFDaEMsU0FBT0Msd0RBQVUsQ0FBQ3JDLFdBQUQsQ0FBakI7QUFDSCxDQUZNIiwiZmlsZSI6Ii4vc3JjL1VzZXJDb250ZXh0L3N0YXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpOyAvL2NyZWF0ZXMgYSBzdG9yZVxuXG5leHBvcnQgY29uc3QgVXNlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbigpXG4gICAgICAgIGlmKHRva2VuKXtcbiAgICAgICAgICByZXRyaWV2ZVVzZXIodG9rZW4pXG4gICAgICAgIH1cbiAgICAgIH0sIFtdKTtcblxuICAgICAgY29uc3QgZ2V0VG9rZW4gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJldHJpZXZlVXNlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbigpXG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9wcm9maWxlXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgIHNldFVzZXIoe3VzZXI6IGRhdGEudXNlcn0pfVxuICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGxvZ2luSGFuZGxlciA9ICh1c2VySW5mbykgPT4ge1xuICAgICAgICBjb25zdCBjb25maWdPYmogPSB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnYm9keSc6IEpTT04uc3RyaW5naWZ5KHt1c2VyOiB1c2VySW5mb30pXG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL2xvZ2luXCIsIGNvbmZpZ09iailcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIGRhdGEuand0KVxuICAgICAgICAgIHNldFVzZXIoe3VzZXI6IGRhdGEudXNlcn0sIHJvdXRlci5wdXNoKFwiL3JlY2lwZXNcIikpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNpZ251cEhhbmRsZXIgPSAodXNlckluZm8pID0+IHtcbiAgICAgICAgY29uc3QgY29uZmlnT2JqID0ge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2JvZHknOiBKU09OLnN0cmluZ2lmeSh7dXNlcjogdXNlckluZm99KVxuICAgICAgICB9XG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS91c2Vyc1wiLCBjb25maWdPYmopXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBkYXRhLmp3dClcbiAgICAgICAgICBzZXRVc2VyKHt1c2VyOiBkYXRhLnVzZXJ9LCByb3V0ZXIucHVzaChcIi9yZWNpcGVzXCIpKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBjb25zdCBsb2dPdXRIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKVxuICAgICAgICBzZXRVc2VyKHt1c2VyOiBmYWxzZX0sICgpID0+IGNvbnNvbGUubG9nKHVzZXIpKVxuICAgICAgfVxuXG4gICAgY29uc29sZS5sb2codXNlcilcbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBsb2dpbkhhbmRsZXIsIHNpZ251cEhhbmRsZXIsIGxvZ091dEhhbmRsZXIgfX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlVXNlckNvbnRleHQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoVXNlckNvbnRleHQpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/UserContext/state.js\n");

/***/ }),

/***/ "./src/pages/login.js":
/*!****************************!*\
  !*** ./src/pages/login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Login */ \"./src/Components/Login.js\");\n\n\nvar _jsxFileName = \"/Users/catherineadonofrio/Development/code/Mod6/recipe_app/recipe_tracker_frontend/src/pages/login.js\";\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_Login__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }, this)\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbG9naW4uanM/NDg2NiJdLCJuYW1lcyI6WyJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsSUFBVCxHQUFpQjtBQUM1QixzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQUtIIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2xvZ2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ2luIGZyb20gJy4uL0NvbXBvbmVudHMvTG9naW4nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TG9naW4gLz5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/login.js\n");

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