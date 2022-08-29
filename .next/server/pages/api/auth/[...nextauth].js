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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth_next__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: \"510405974127-fau62sv9a5lhkc24hc8kd4mdunnabv65.apps.googleusercontent.com\",\n            clientSecret: \"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\"\n        }), \n    ],\n    callbacks: {\n        async signIn ({ account , profile  }) {\n            if (account.provider === \"google \") {\n                return profile.email;\n            }\n            return true // Do different verification for other providers that don't have `email_verified`\n            ;\n        }\n    },\n    pages: {\n        // signIn: '/',\n        signOut: \"/\",\n        error: \"/404\",\n        // verifyRequest: '/auth/verify-request', // (used for check email message)\n        newUser: \"/register\" // New users will be directed here on first sign in (leave the property out if not of interest)\n    },\n    secret: process.env.NEXTAUTH_SECRET\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNDO0FBQ2tCO0FBRXhELGlFQUFlQSxxREFBUSxDQUFDO0lBQ3RCRSxTQUFTLEVBQUU7UUFDVEQsaUVBQWMsQ0FBQztZQUNiRSxRQUFRLEVBQUVDLDBFQUFpQztZQUMzQ0csWUFBWSxFQUFFSCxxQ0FBcUM7U0FDcEQsQ0FBQztLQUNIO0lBQ0RLLFNBQVMsRUFBRTtRQUNULE1BQU1DLE1BQU0sRUFBQyxFQUFFQyxPQUFPLEdBQUVDLE9BQU8sR0FBRSxFQUFFO1lBQ2pDLElBQUlELE9BQU8sQ0FBQ0UsUUFBUSxLQUFLLFNBQVMsRUFBRTtnQkFDbEMsT0FBT0QsT0FBTyxDQUFDRSxLQUFLO2FBQ3JCO1lBQ0QsT0FBTyxJQUFJLENBQUMsaUZBQWlGO2FBQWxGO1NBQ1o7S0FDRjtJQUNEQyxLQUFLLEVBQUU7UUFDTCxlQUFlO1FBQ2ZDLE9BQU8sRUFBRSxHQUFHO1FBQ1pDLEtBQUssRUFBRSxNQUFNO1FBQ2IsMkVBQTJFO1FBQzNFQyxPQUFPLEVBQUUsV0FBVyxDQUFDLCtGQUErRjtLQUNySDtJQUNEQyxNQUFNLEVBQUVmLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZSxlQUFlO0NBRXBDLENBQ0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtanMtYXBwLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgvbmV4dCc7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMSUVOVF9JRCAsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMSUVOVF9TRUNSRVQsXG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNpZ25Jbih7IGFjY291bnQsIHByb2ZpbGUgfSkge1xuICAgICAgaWYgKGFjY291bnQucHJvdmlkZXIgPT09IFwiZ29vZ2xlIFwiKSB7XG4gICAgICAgIHJldHVybiBwcm9maWxlLmVtYWlsIFxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWUgLy8gRG8gZGlmZmVyZW50IHZlcmlmaWNhdGlvbiBmb3Igb3RoZXIgcHJvdmlkZXJzIHRoYXQgZG9uJ3QgaGF2ZSBgZW1haWxfdmVyaWZpZWRgXG4gICAgfSxcbiAgfSxcbiAgcGFnZXM6IHtcbiAgICAvLyBzaWduSW46ICcvJyxcbiAgICBzaWduT3V0OiAnLycsXG4gICAgZXJyb3I6ICcvNDA0JywgLy8gRXJyb3IgY29kZSBwYXNzZWQgaW4gcXVlcnkgc3RyaW5nIGFzID9lcnJvcj1cbiAgICAvLyB2ZXJpZnlSZXF1ZXN0OiAnL2F1dGgvdmVyaWZ5LXJlcXVlc3QnLCAvLyAodXNlZCBmb3IgY2hlY2sgZW1haWwgbWVzc2FnZSlcbiAgICBuZXdVc2VyOiAnL3JlZ2lzdGVyJyAvLyBOZXcgdXNlcnMgd2lsbCBiZSBkaXJlY3RlZCBoZXJlIG9uIGZpcnN0IHNpZ24gaW4gKGxlYXZlIHRoZSBwcm9wZXJ0eSBvdXQgaWYgbm90IG9mIGludGVyZXN0KVxuICB9LFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVFxuICBcbn0sXG4pO1xuXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIk5FWFRfUFVCTElDX0NMSUVOVF9TRUNSRVQiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJhY2NvdW50IiwicHJvZmlsZSIsInByb3ZpZGVyIiwiZW1haWwiLCJwYWdlcyIsInNpZ25PdXQiLCJlcnJvciIsIm5ld1VzZXIiLCJzZWNyZXQiLCJORVhUQVVUSF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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