"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App({ Component , pageProps: { session , ...pageProps } ,  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {\n        session: session,\n        children: Component.auth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Auth, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/Supra/Documents/projects/DumpTruckApp/pages/_app.js\",\n                lineNumber: 11,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/Supra/Documents/projects/DumpTruckApp/pages/_app.js\",\n            lineNumber: 10,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/Supra/Documents/projects/DumpTruckApp/pages/_app.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Supra/Documents/projects/DumpTruckApp/pages/_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n};\nfunction Auth({ children  }) {\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const isUser = !!session?.user;\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{\n        if (status === \"loading\") return;\n        if (!isUser) (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)();\n    }, [\n        isUser,\n        status\n    ]);\n    if (isUser) {\n        return children;\n    }\n    // Session is being fetched, or no user.\n    // If no user, useEffect() will redirect.\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/Supra/Documents/projects/DumpTruckApp/pages/_app.js\",\n        lineNumber: 34,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFzRTtBQUM1QztBQUNYLFNBQVNJLEdBQUcsQ0FBQyxFQUMxQkMsU0FBUyxHQUNUQyxTQUFTLEVBQUUsRUFBRUMsT0FBTyxHQUFFLEdBQUdELFNBQVMsRUFBRSxLQUNyQyxFQUFFO0lBQ0QscUJBQ0UsOERBQUNOLDREQUFlO1FBQUNPLE9BQU8sRUFBRUEsT0FBTztrQkFDOUJGLFNBQVMsQ0FBQ0csSUFBSSxpQkFDYiw4REFBQ0MsSUFBSTtzQkFDSCw0RUFBQ0osU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7Z0JBQ3ZCLGlCQUVQLDhEQUFDRCxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBRWQsQ0FDbkI7Q0FDRjtBQUVELFNBQVNHLElBQUksQ0FBQyxFQUFFQyxRQUFRLEdBQUUsRUFBRTtJQUMxQixNQUFNLEVBQUVDLElBQUksRUFBRUosT0FBTyxHQUFFSyxNQUFNLEdBQUUsR0FBR1gsMkRBQVUsRUFBRTtJQUM5QyxNQUFNWSxNQUFNLEdBQUcsQ0FBQyxDQUFDTixPQUFPLEVBQUVPLElBQUk7SUFDOUJYLHNEQUFlLENBQUMsSUFBTTtRQUNwQixJQUFJUyxNQUFNLEtBQUssU0FBUyxFQUFFLE9BQU07UUFDaEMsSUFBSSxDQUFDQyxNQUFNLEVBQUVYLHVEQUFNLEVBQUU7S0FDdEIsRUFBRTtRQUFDVyxNQUFNO1FBQUVELE1BQU07S0FBQyxDQUFDO0lBRXBCLElBQUlDLE1BQU0sRUFBRTtRQUNWLE9BQU9ILFFBQVE7S0FDaEI7SUFFRCx3Q0FBd0M7SUFDeEMseUNBQXlDO0lBQ3pDLHFCQUFPLDhEQUFDTSxLQUFHO2tCQUFDLFlBQVU7Ozs7O1lBQU07Q0FDN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyLCB1c2VTZXNzaW9uLCBzaWduSW4gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7XG4gIENvbXBvbmVudCxcbiAgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9LFxufSkge1xuICByZXR1cm4gKFxuICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0+XG4gICAgICB7Q29tcG9uZW50LmF1dGggPyAoXG4gICAgICAgIDxBdXRoPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9BdXRoPlxuICAgICAgKSA6IChcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgKX1cbiAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgKVxufVxuXG5mdW5jdGlvbiBBdXRoKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpXG4gIGNvbnN0IGlzVXNlciA9ICEhc2Vzc2lvbj8udXNlclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdGF0dXMgPT09IFwibG9hZGluZ1wiKSByZXR1cm5cbiAgICBpZiAoIWlzVXNlcikgc2lnbkluKClcbiAgfSwgW2lzVXNlciwgc3RhdHVzXSlcblxuICBpZiAoaXNVc2VyKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuXG4gIH1cblxuICAvLyBTZXNzaW9uIGlzIGJlaW5nIGZldGNoZWQsIG9yIG5vIHVzZXIuXG4gIC8vIElmIG5vIHVzZXIsIHVzZUVmZmVjdCgpIHdpbGwgcmVkaXJlY3QuXG4gIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbn0iXSwibmFtZXMiOlsiU2Vzc2lvblByb3ZpZGVyIiwidXNlU2Vzc2lvbiIsInNpZ25JbiIsIlJlYWN0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiIsImF1dGgiLCJBdXRoIiwiY2hpbGRyZW4iLCJkYXRhIiwic3RhdHVzIiwiaXNVc2VyIiwidXNlciIsInVzZUVmZmVjdCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();