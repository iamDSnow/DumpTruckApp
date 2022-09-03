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
exports.id = "pages/thankyou";
exports.ids = ["pages/thankyou"];
exports.modules = {

/***/ "./pages/thankyou.js":
/*!***************************!*\
  !*** ./pages/thankyou.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst getStaticProps = async ()=>{\n    await fetch(\"https://just-chamois-38.hasura.app/v1/graphql\");\n    const response = await fetch(\"https://just-chamois-38.hasura.app/v1/graphql\", {\n        method: \"POST\",\n        headers: {\n            [\"x-hasura-admin-secret\"]: \"MLy43KG049rHc1UVMsodU7dVHYrouGG3KEJ18Pm7z45qdxhZqAcnVte00i7uO4HY\"\n        },\n        body: JSON.stringify({\n            query: `\n        query MyQuery {\n          Users {\n            uid\n            email\n          }\n        }\n      `\n        })\n    });\n    const reg = await response.json();\n    return {\n        props: {\n            reg\n        }\n    };\n};\nconst ThankYou = ({ reg  })=>{\n    const { 0: firstName , 1: setFirstName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: driverLic , 1: setDriverLic  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: phoneNumber , 1: setPhoneNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: comName , 1: setComName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: truckPlateNumber , 1: setTruckPlateNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: shouldRedirect , 1: setShouldRedirect  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/Supra/Documents/GitHub/DumpTruckApp/pages/thankyou.js\",\n            lineNumber: 53,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (status === \"unauthenticated\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Access Denied\"\n        }, void 0, false, {\n            fileName: \"/Users/Supra/Documents/GitHub/DumpTruckApp/pages/thankyou.js\",\n            lineNumber: 57,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (status === \"authenticated\") {\n        const gM = session.user.email;\n        const uName = session.user.name;\n        // console.log(reg.data.Users.map(user => {\n        //   if (user.email === gM) {\n        //     return user.uid\n        //   }\n        // }).reduce((a, b) => a + b, 0).replace('NaN', '')  )\n        function Redirect({ to  }) {\n            const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n            (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n                router.push(to);\n            }, [\n                to\n            ]);\n            return null;\n        }\n        const id = reg.data.Users.map((user)=>{\n            if (user.email === gM) {\n                return user.uid;\n            } else return \"\";\n        }).reduce((a, b)=>a + b, 0).replace(\"NaN\", \"\");\n        localStorage.setItem(\"u\", JSON.stringify(id));\n        if (id) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Redirect, {\n                to: \"/dashboard/\" + id.substring(1)\n            }, void 0, false, {\n                fileName: \"/Users/Supra/Documents/GitHub/DumpTruckApp/pages/thankyou.js\",\n                lineNumber: 91,\n                columnNumber: 10\n            }, undefined);\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Thank You\"\n        }, void 0, false, {\n            fileName: \"/Users/Supra/Documents/GitHub/DumpTruckApp/pages/thankyou.js\",\n            lineNumber: 96,\n            columnNumber: 7\n        }, undefined);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThankYou);\nconst FormWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().form)`\n\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBQ1MsR0FBRzthQUNoQixNQUNJLE9BQU8sRUFBRTtTQUNmLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxHQUFLRCxDQUFDLEdBQUdDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDaERDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsRUFBQzFDLElBQUksQ0FBQ0MsU0FBUyxDQUFDZ0MsRUFBRSxDQUFDLENBQUM7UUFDaEQsSUFBR0EsRUFBRSxFQUFDO1lBQ0oscUJBQU8sOERBQUNILFFBQVE7Z0JBQUNDLEVBQUUsRUFBRSxhQUFhLEdBQUdFLEVBQUUsQ0FBQ1UsU0FBUyxDQUFDLENBQUMsQ0FBQzs7Ozs7eUJBQUk7U0FDekQ7UUFFSyxxQkFFQSw4REFBQ0MsSUFBRTtzQkFBQyxXQUFTOzs7OztxQkFBSyxDQUVqQjtLQUNGO0NBQUM7QUFNTixpRUFBZXRDLFFBQVEsRUFBQztBQUl4QixNQUFNdUMsV0FBVyxHQUFHOUQsK0RBQVcsQ0FBQzs7QUFFaEMsQ0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtanMtYXBwLy4vcGFnZXMvdGhhbmt5b3UuanM/M2Y0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7VHlwb2dyYXBoeSwgQnV0dG9uLCBHcmlkLCBUZXh0RmllbGQgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IGZldGNoKCdodHRwczovL2p1c3QtY2hhbW9pcy0zOC5oYXN1cmEuYXBwL3YxL2dyYXBocWwnIClcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICdodHRwczovL2p1c3QtY2hhbW9pcy0zOC5oYXN1cmEuYXBwL3YxL2dyYXBocWwnLFxuICAgIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBbJ3gtaGFzdXJhLWFkbWluLXNlY3JldCddOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IQVNVUkFfU0VDUkVUXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBxdWVyeTogYFxuICAgICAgICBxdWVyeSBNeVF1ZXJ5IHtcbiAgICAgICAgICBVc2VycyB7XG4gICAgICAgICAgICB1aWRcbiAgICAgICAgICAgIGVtYWlsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgXG4gICAgICB9KVxuICAgIH1cbiAgKVxuXG4gIGNvbnN0IHJlZyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcmVnIH1cbiAgfVxufVxuXG5jb25zdCBUaGFua1lvdSA9ICh7cmVnfSkgPT4ge1xuICBjb25zdCBbZmlyc3ROYW1lLCBzZXRGaXJzdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtkcml2ZXJMaWMsIHNldERyaXZlckxpY10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bob25lTnVtYmVyLCBzZXRQaG9uZU51bWJlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NvbU5hbWUsIHNldENvbU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0cnVja1BsYXRlTnVtYmVyLCBzZXRUcnVja1BsYXRlTnVtYmVyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2hvdWxkUmVkaXJlY3QsIHNldFNob3VsZFJlZGlyZWN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cblxuICBpZiAoc3RhdHVzID09PSBcImxvYWRpbmdcIikge1xuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxuICB9XG5cbiAgaWYgKHN0YXR1cyA9PT0gXCJ1bmF1dGhlbnRpY2F0ZWRcIikge1xuICAgIHJldHVybiA8cD5BY2Nlc3MgRGVuaWVkPC9wPlxuICB9XG4gIGlmIChzdGF0dXMgPT09IFwiYXV0aGVudGljYXRlZFwiKSB7XG4gICAgY29uc3QgZ00gPSBzZXNzaW9uLnVzZXIuZW1haWw7XG4gICAgY29uc3QgdU5hbWUgPSBzZXNzaW9uLnVzZXIubmFtZTtcbiAgXG4gICAgLy8gY29uc29sZS5sb2cocmVnLmRhdGEuVXNlcnMubWFwKHVzZXIgPT4ge1xuICAgIC8vICAgaWYgKHVzZXIuZW1haWwgPT09IGdNKSB7XG4gICAgLy8gICAgIHJldHVybiB1c2VyLnVpZFxuICAgIC8vICAgfVxuICAgIC8vIH0pLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApLnJlcGxhY2UoJ05hTicsICcnKSAgKVxuICAgIFxuICAgXG5cbmZ1bmN0aW9uIFJlZGlyZWN0KHt0b30pe1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCk9PiB7XG5cbiAgICByb3V0ZXIucHVzaCh0byk7XG5cbiAgfSwgW3RvXSk7XG4gIHJldHVybiBudWxsO1xufVxuXG4gIFxuICAgIGNvbnN0IGlkID0gcmVnLmRhdGEuVXNlcnMubWFwKHVzZXIgPT4ge1xuICAgICAgaWYgKHVzZXIuZW1haWwgPT09IGdNKSB7XG4gICAgICAgIHJldHVybiB1c2VyLnVpZFxuICAgICAgfVxuICAgICAgZWxzZSByZXR1cm4gJydcbiAgICB9KS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKS5yZXBsYWNlKCdOYU4nLCAnJykgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1XCIsSlNPTi5zdHJpbmdpZnkoaWQpKVxuaWYoaWQpe1xuICByZXR1cm4gPFJlZGlyZWN0IHRvPXtcIi9kYXNoYm9hcmQvXCIgKyBpZC5zdWJzdHJpbmcoMSl9IC8+XG59XG5cbiAgICAgIHJldHVybiAoXG4gICAgXG4gICAgICA8aDE+VGhhbmsgWW91PC9oMT5cbiAgXG4gICAgICApIFxuICAgIH19XG4gIFxuXG4gIFxuICBcblxuZXhwb3J0IGRlZmF1bHQgVGhhbmtZb3U7XG5cblxuXG5jb25zdCBGb3JtV3JhcHBlciA9IHN0eWxlZC5mb3JtYFxuXG5gO1xuXG5cbiAgXG4gIFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZWQiLCJUeXBvZ3JhcGh5IiwiQnV0dG9uIiwiR3JpZCIsIlRleHRGaWVsZCIsInVzZVNlc3Npb24iLCJzaWduT3V0IiwidXNlUm91dGVyIiwiZ2V0U3RhdGljUHJvcHMiLCJmZXRjaCIsInJlc3BvbnNlIiwibWV0aG9kIiwiaGVhZGVycyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19IQVNVUkFfU0VDUkVUIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInJlZyIsImpzb24iLCJwcm9wcyIsIlRoYW5rWW91IiwiZmlyc3ROYW1lIiwic2V0Rmlyc3ROYW1lIiwiZHJpdmVyTGljIiwic2V0RHJpdmVyTGljIiwiZW1haWwiLCJzZXRFbWFpbCIsInBob25lTnVtYmVyIiwic2V0UGhvbmVOdW1iZXIiLCJjb21OYW1lIiwic2V0Q29tTmFtZSIsInRydWNrUGxhdGVOdW1iZXIiLCJzZXRUcnVja1BsYXRlTnVtYmVyIiwic2hvdWxkUmVkaXJlY3QiLCJzZXRTaG91bGRSZWRpcmVjdCIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwicm91dGVyIiwicCIsImdNIiwidXNlciIsInVOYW1lIiwibmFtZSIsIlJlZGlyZWN0IiwidG8iLCJwdXNoIiwiaWQiLCJVc2VycyIsIm1hcCIsInVpZCIsInJlZHVjZSIsImEiLCJiIiwicmVwbGFjZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzdWJzdHJpbmciLCJoMSIsIkZvcm1XcmFwcGVyIiwiZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/thankyou.js\n");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/thankyou.js"));
module.exports = __webpack_exports__;

})();