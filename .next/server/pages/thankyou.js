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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst getStaticProps = async ()=>{\n    await fetch(\"https://just-chamois-38.hasura.app/v1/graphql\");\n    const response = await fetch(\"https://just-chamois-38.hasura.app/v1/graphql\", {\n        method: \"POST\",\n        headers: {\n            [\"x-hasura-admin-secret\"]: \"MLy43KG049rHc1UVMsodU7dVHYrouGG3KEJ18Pm7z45qdxhZqAcnVte00i7uO4HY\"\n        },\n        body: JSON.stringify({\n            query: `\n        query MyQuery {\n          Users {\n            uid\n            email\n          }\n        }\n      `\n        })\n    });\n    const reg = await response.json();\n    return {\n        props: {\n            reg\n        }\n    };\n};\nconst ThankYou = ({ reg  })=>{\n    const { 0: firstName , 1: setFirstName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: driverLic , 1: setDriverLic  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: phoneNumber , 1: setPhoneNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: comName , 1: setComName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: truckPlateNumber , 1: setTruckPlateNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: shouldRedirect , 1: setShouldRedirect  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/Supra/Documents/projects/DumpTruckApp/pages/thankyou.js\",\n            lineNumber: 53,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (status === \"unauthenticated\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Access Denied\"\n        }, void 0, false, {\n            fileName: \"/Users/Supra/Documents/projects/DumpTruckApp/pages/thankyou.js\",\n            lineNumber: 57,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (status === \"authenticated\") {\n        const gM = session.user.email;\n        const uName = session.user.name;\n        // console.log(reg.data.Users.map(user => {\n        //   if (user.email === gM) {\n        //     return user.uid\n        //   }\n        // }).reduce((a, b) => a + b, 0).replace('NaN', '')  )\n        function Redirect({ to  }) {\n            const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n            (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n                router.push(to);\n            }, [\n                to\n            ]);\n            return null;\n        }\n        const id = reg.data.Users.map((user)=>{\n            if (user.email === gM) {\n                return user.uid;\n            } else return \"\";\n        }).reduce((a, b)=>a + b, 0).replace(\"NaN\", \"\");\n        localStorage.setItem(\"u\", JSON.stringify(id));\n        if (id) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Redirect, {\n                to: \"/dashboard/\" + id.substring(1)\n            }, void 0, false, {\n                fileName: \"/Users/Supra/Documents/projects/DumpTruckApp/pages/thankyou.js\",\n                lineNumber: 91,\n                columnNumber: 10\n            }, undefined);\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Thank You\"\n        }, void 0, false, {\n            fileName: \"/Users/Supra/Documents/projects/DumpTruckApp/pages/thankyou.js\",\n            lineNumber: 96,\n            columnNumber: 7\n        }, undefined);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThankYou);\nconst FormWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().form)`\n\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90aGFua3lvdS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQW1EO0FBQ1o7QUFDNEI7QUFDYjtBQUNkO0FBR2pDLE1BQU1XLGNBQWMsR0FBRyxVQUFZO0lBQ3hDLE1BQU1DLEtBQUssQ0FBQywrQ0FBK0MsQ0FBRTtJQUU3RCxNQUFNQyxRQUFRLEdBQUcsTUFBTUQsS0FBSyxDQUMxQiwrQ0FBK0MsRUFDL0M7UUFDRUUsTUFBTSxFQUFFLE1BQU07UUFDZEMsT0FBTyxFQUFFO1lBQ1AsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFQyxrRUFBcUM7U0FDakU7UUFDREcsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztZQUNuQkMsS0FBSyxFQUFFLENBQUM7Ozs7Ozs7TUFPVixDQUFDO1NBQ0EsQ0FBQztLQUNILENBQ0Y7SUFFRCxNQUFNQyxHQUFHLEdBQUcsTUFBTVYsUUFBUSxDQUFDVyxJQUFJLEVBQUU7SUFFakMsT0FBTztRQUNMQyxLQUFLLEVBQUU7WUFBRUYsR0FBRztTQUFFO0tBQ2Y7Q0FDRjtBQUVELE1BQU1HLFFBQVEsR0FBRyxDQUFDLEVBQUNILEdBQUcsR0FBQyxHQUFLO0lBQzFCLE1BQU0sS0FBQ0ksU0FBUyxNQUFFQyxZQUFZLE1BQUkzQiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUM5QyxNQUFNLEtBQUM0QixTQUFTLE1BQUVDLFlBQVksTUFBSTdCLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQzlDLE1BQU0sS0FBQzhCLEtBQUssTUFBRUMsUUFBUSxNQUFJL0IsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDdEMsTUFBTSxLQUFDZ0MsV0FBVyxNQUFFQyxjQUFjLE1BQUlqQywrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUNsRCxNQUFNLEtBQUNrQyxPQUFPLE1BQUVDLFVBQVUsTUFBSW5DLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQzFDLE1BQU0sS0FBQ29DLGdCQUFnQixNQUFFQyxtQkFBbUIsTUFBSXJDLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQzVELE1BQU0sS0FBQ3NDLGNBQWMsTUFBRUMsaUJBQWlCLE1BQUl2QywrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUUzRCxNQUFNLEVBQUV3QyxJQUFJLEVBQUVDLE9BQU8sR0FBRUMsTUFBTSxHQUFFLEdBQUduQywyREFBVSxFQUFFO0lBQzlDLE1BQU1vQyxNQUFNLEdBQUdsQyxzREFBUyxFQUFFO0lBSTFCLElBQUlpQyxNQUFNLEtBQUssU0FBUyxFQUFFO1FBQ3hCLHFCQUFPLDhEQUFDRSxHQUFDO3NCQUFDLFlBQVU7Ozs7O3FCQUFJO0tBQ3pCO0lBRUQsSUFBSUYsTUFBTSxLQUFLLGlCQUFpQixFQUFFO1FBQ2hDLHFCQUFPLDhEQUFDRSxHQUFDO3NCQUFDLGVBQWE7Ozs7O3FCQUFJO0tBQzVCO0lBQ0QsSUFBSUYsTUFBTSxLQUFLLGVBQWUsRUFBRTtRQUM5QixNQUFNRyxFQUFFLEdBQUdKLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDaEIsS0FBSztRQUM3QixNQUFNaUIsS0FBSyxHQUFHTixPQUFPLENBQUNLLElBQUksQ0FBQ0UsSUFBSTtRQUUvQiwyQ0FBMkM7UUFDM0MsNkJBQTZCO1FBQzdCLHNCQUFzQjtRQUN0QixNQUFNO1FBQ04sc0RBQXNEO1FBSTFELFNBQVNDLFFBQVEsQ0FBQyxFQUFDQyxFQUFFLEdBQUMsRUFBQztZQUNyQixNQUFNUCxNQUFNLEdBQUdsQyxzREFBUyxFQUFFO1lBRTFCUixnREFBUyxDQUFDLElBQUs7Z0JBRWIwQyxNQUFNLENBQUNRLElBQUksQ0FBQ0QsRUFBRSxDQUFDLENBQUM7YUFFakIsRUFBRTtnQkFBQ0EsRUFBRTthQUFDLENBQUMsQ0FBQztZQUNULE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFHRyxNQUFNRSxFQUFFLEdBQUc5QixHQUFHLENBQUNrQixJQUFJLENBQUNhLEtBQUssQ0FBQ0MsR0FBRyxDQUFDUixDQUFBQSxJQUFJLEdBQUk7WUFDcEMsSUFBSUEsSUFBSSxDQUFDaEIsS0FBSyxLQUFLZSxFQUFFLEVBQUU7Z0JBQ3JCLE9BQU9DLElBQUksQ0FBQ1MsR0FBRzthQUNoQixNQUNJLE9BQU8sRUFBRTtTQUNmLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxHQUFLRCxDQUFDLEdBQUdDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDaERDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsRUFBQzFDLElBQUksQ0FBQ0MsU0FBUyxDQUFDZ0MsRUFBRSxDQUFDLENBQUM7UUFDaEQsSUFBR0EsRUFBRSxFQUFDO1lBQ0oscUJBQU8sOERBQUNILFFBQVE7Z0JBQUNDLEVBQUUsRUFBRSxhQUFhLEdBQUdFLEVBQUUsQ0FBQ1UsU0FBUyxDQUFDLENBQUMsQ0FBQzs7Ozs7eUJBQUk7U0FDekQ7UUFFSyxxQkFFQSw4REFBQ0MsSUFBRTtzQkFBQyxXQUFTOzs7OztxQkFBSyxDQUVqQjtLQUNGO0NBQUM7QUFNTixpRUFBZXRDLFFBQVEsRUFBQztBQUl4QixNQUFNdUMsV0FBVyxHQUFHOUQsK0RBQVcsQ0FBQzs7QUFFaEMsQ0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3RoYW5reW91LmpzPzNmNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge1R5cG9ncmFwaHksIEJ1dHRvbiwgR3JpZCwgVGV4dEZpZWxkIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qdXN0LWNoYW1vaXMtMzguaGFzdXJhLmFwcC92MS9ncmFwaHFsJyApXG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAnaHR0cHM6Ly9qdXN0LWNoYW1vaXMtMzguaGFzdXJhLmFwcC92MS9ncmFwaHFsJyxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgWyd4LWhhc3VyYS1hZG1pbi1zZWNyZXQnXTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSEFTVVJBX1NFQ1JFVFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgcXVlcnkgTXlRdWVyeSB7XG4gICAgICAgICAgVXNlcnMge1xuICAgICAgICAgICAgdWlkXG4gICAgICAgICAgICBlbWFpbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYFxuICAgICAgfSlcbiAgICB9XG4gIClcblxuICBjb25zdCByZWcgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHJlZyB9XG4gIH1cbn1cblxuY29uc3QgVGhhbmtZb3UgPSAoe3JlZ30pID0+IHtcbiAgY29uc3QgW2ZpcnN0TmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZHJpdmVyTGljLCBzZXREcml2ZXJMaWNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwaG9uZU51bWJlciwgc2V0UGhvbmVOdW1iZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjb21OYW1lLCBzZXRDb21OYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdHJ1Y2tQbGF0ZU51bWJlciwgc2V0VHJ1Y2tQbGF0ZU51bWJlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Nob3VsZFJlZGlyZWN0LCBzZXRTaG91bGRSZWRpcmVjdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIFxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXG5cbiAgaWYgKHN0YXR1cyA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cbiAgfVxuXG4gIGlmIChzdGF0dXMgPT09IFwidW5hdXRoZW50aWNhdGVkXCIpIHtcbiAgICByZXR1cm4gPHA+QWNjZXNzIERlbmllZDwvcD5cbiAgfVxuICBpZiAoc3RhdHVzID09PSBcImF1dGhlbnRpY2F0ZWRcIikge1xuICAgIGNvbnN0IGdNID0gc2Vzc2lvbi51c2VyLmVtYWlsO1xuICAgIGNvbnN0IHVOYW1lID0gc2Vzc2lvbi51c2VyLm5hbWU7XG4gIFxuICAgIC8vIGNvbnNvbGUubG9nKHJlZy5kYXRhLlVzZXJzLm1hcCh1c2VyID0+IHtcbiAgICAvLyAgIGlmICh1c2VyLmVtYWlsID09PSBnTSkge1xuICAgIC8vICAgICByZXR1cm4gdXNlci51aWRcbiAgICAvLyAgIH1cbiAgICAvLyB9KS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKS5yZXBsYWNlKCdOYU4nLCAnJykgIClcbiAgICBcbiAgIFxuXG5mdW5jdGlvbiBSZWRpcmVjdCh7dG99KXtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpPT4ge1xuXG4gICAgcm91dGVyLnB1c2godG8pO1xuXG4gIH0sIFt0b10pO1xuICByZXR1cm4gbnVsbDtcbn1cblxuICBcbiAgICBjb25zdCBpZCA9IHJlZy5kYXRhLlVzZXJzLm1hcCh1c2VyID0+IHtcbiAgICAgIGlmICh1c2VyLmVtYWlsID09PSBnTSkge1xuICAgICAgICByZXR1cm4gdXNlci51aWRcbiAgICAgIH1cbiAgICAgIGVsc2UgcmV0dXJuICcnXG4gICAgfSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCkucmVwbGFjZSgnTmFOJywgJycpIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidVwiLEpTT04uc3RyaW5naWZ5KGlkKSlcbmlmKGlkKXtcbiAgcmV0dXJuIDxSZWRpcmVjdCB0bz17XCIvZGFzaGJvYXJkL1wiICsgaWQuc3Vic3RyaW5nKDEpfSAvPlxufVxuXG4gICAgICByZXR1cm4gKFxuICAgIFxuICAgICAgPGgxPlRoYW5rIFlvdTwvaDE+XG4gIFxuICAgICAgKSBcbiAgICB9fVxuICBcblxuICBcbiAgXG5cbmV4cG9ydCBkZWZhdWx0IFRoYW5rWW91O1xuXG5cblxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQuZm9ybWBcblxuYDtcblxuXG4gIFxuICBcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVkIiwiVHlwb2dyYXBoeSIsIkJ1dHRvbiIsIkdyaWQiLCJUZXh0RmllbGQiLCJ1c2VTZXNzaW9uIiwic2lnbk91dCIsInVzZVJvdXRlciIsImdldFN0YXRpY1Byb3BzIiwiZmV0Y2giLCJyZXNwb25zZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfSEFTVVJBX1NFQ1JFVCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJyZWciLCJqc29uIiwicHJvcHMiLCJUaGFua1lvdSIsImZpcnN0TmFtZSIsInNldEZpcnN0TmFtZSIsImRyaXZlckxpYyIsInNldERyaXZlckxpYyIsImVtYWlsIiwic2V0RW1haWwiLCJwaG9uZU51bWJlciIsInNldFBob25lTnVtYmVyIiwiY29tTmFtZSIsInNldENvbU5hbWUiLCJ0cnVja1BsYXRlTnVtYmVyIiwic2V0VHJ1Y2tQbGF0ZU51bWJlciIsInNob3VsZFJlZGlyZWN0Iiwic2V0U2hvdWxkUmVkaXJlY3QiLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsInJvdXRlciIsInAiLCJnTSIsInVzZXIiLCJ1TmFtZSIsIm5hbWUiLCJSZWRpcmVjdCIsInRvIiwicHVzaCIsImlkIiwiVXNlcnMiLCJtYXAiLCJ1aWQiLCJyZWR1Y2UiLCJhIiwiYiIsInJlcGxhY2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic3Vic3RyaW5nIiwiaDEiLCJGb3JtV3JhcHBlciIsImZvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/thankyou.js\n");

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