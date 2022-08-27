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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth_next__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: \"510405974127-fau62sv9a5lhkc24hc8kd4mdunnabv65.apps.googleusercontent.com\",\n            clientSecret: \"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\"\n        }), \n    ],\n    callbacks: {\n        async signIn ({ account , profile  }) {\n            if (account.provider === \"google \") {\n                return profile.email_verified;\n            }\n            return true // Do different verification for other providers that don't have `email_verified`\n            ;\n        }\n    },\n    pages: {\n        // signIn: '/',\n        signOut: \"/\",\n        error: \"/404\",\n        // verifyRequest: '/auth/verify-request', // (used for check email message)\n        newUser: \"/register\" // New users will be directed here on first sign in (leave the property out if not of interest)\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNDO0FBQ2tCO0FBRXhELGlFQUFlQSxxREFBUSxDQUFDO0lBQ3RCRSxTQUFTLEVBQUU7UUFDVEQsaUVBQWMsQ0FBQztZQUNiRSxRQUFRLEVBQUVDLDBFQUFpQztZQUMzQ0csWUFBWSxFQUFFSCxxQ0FBcUM7U0FDcEQsQ0FBQztLQUNIO0lBQ0RLLFNBQVMsRUFBRTtRQUNULE1BQU1DLE1BQU0sRUFBQyxFQUFFQyxPQUFPLEdBQUVDLE9BQU8sR0FBRSxFQUFFO1lBQ2pDLElBQUlELE9BQU8sQ0FBQ0UsUUFBUSxLQUFLLFNBQVMsRUFBRTtnQkFDbEMsT0FBT0QsT0FBTyxDQUFDRSxjQUFjO2FBQzlCO1lBQ0QsT0FBTyxJQUFJLENBQUMsaUZBQWlGO2FBQWxGO1NBQ1o7S0FDRjtJQUNEQyxLQUFLLEVBQUU7UUFDTCxlQUFlO1FBQ2ZDLE9BQU8sRUFBRSxHQUFHO1FBQ1pDLEtBQUssRUFBRSxNQUFNO1FBQ2IsMkVBQTJFO1FBQzNFQyxPQUFPLEVBQUUsV0FBVyxDQUFDLCtGQUErRjtLQUNySDtDQUNGLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoL25leHQnO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTElFTlRfSUQgLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTElFTlRfU0VDUkVULFxuICAgIH0pLFxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBzaWduSW4oeyBhY2NvdW50LCBwcm9maWxlIH0pIHtcbiAgICAgIGlmIChhY2NvdW50LnByb3ZpZGVyID09PSBcImdvb2dsZSBcIikge1xuICAgICAgICByZXR1cm4gcHJvZmlsZS5lbWFpbF92ZXJpZmllZCBcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlIC8vIERvIGRpZmZlcmVudCB2ZXJpZmljYXRpb24gZm9yIG90aGVyIHByb3ZpZGVycyB0aGF0IGRvbid0IGhhdmUgYGVtYWlsX3ZlcmlmaWVkYFxuICAgIH0sXG4gIH0sXG4gIHBhZ2VzOiB7XG4gICAgLy8gc2lnbkluOiAnLycsXG4gICAgc2lnbk91dDogJy8nLFxuICAgIGVycm9yOiAnLzQwNCcsIC8vIEVycm9yIGNvZGUgcGFzc2VkIGluIHF1ZXJ5IHN0cmluZyBhcyA/ZXJyb3I9XG4gICAgLy8gdmVyaWZ5UmVxdWVzdDogJy9hdXRoL3ZlcmlmeS1yZXF1ZXN0JywgLy8gKHVzZWQgZm9yIGNoZWNrIGVtYWlsIG1lc3NhZ2UpXG4gICAgbmV3VXNlcjogJy9yZWdpc3RlcicgLy8gTmV3IHVzZXJzIHdpbGwgYmUgZGlyZWN0ZWQgaGVyZSBvbiBmaXJzdCBzaWduIGluIChsZWF2ZSB0aGUgcHJvcGVydHkgb3V0IGlmIG5vdCBvZiBpbnRlcmVzdClcbiAgfVxufSk7Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJORVhUX1BVQkxJQ19DTElFTlRfU0VDUkVUIiwiY2FsbGJhY2tzIiwic2lnbkluIiwiYWNjb3VudCIsInByb2ZpbGUiLCJwcm92aWRlciIsImVtYWlsX3ZlcmlmaWVkIiwicGFnZXMiLCJzaWduT3V0IiwiZXJyb3IiLCJuZXdVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();