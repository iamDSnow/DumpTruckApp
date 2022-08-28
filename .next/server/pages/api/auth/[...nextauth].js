"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 6811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth/next"
const next_namespaceObject = require("next-auth/next");
var next_default = /*#__PURE__*/__webpack_require__.n(next_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/google"
const google_namespaceObject = require("next-auth/providers/google");
var google_default = /*#__PURE__*/__webpack_require__.n(google_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js


/* harmony default export */ const _nextauth_ = (next_default()({
    providers: [
        google_default()({
            clientId: "510405974127-fau62sv9a5lhkc24hc8kd4mdunnabv65.apps.googleusercontent.com",
            clientSecret: "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"
        }), 
    ],
    callbacks: {
        async signIn ({ account , profile  }) {
            if (account.provider === "google ") {
                return profile.email_verified;
            }
            return true // Do different verification for other providers that don't have `email_verified`
            ;
        }
    },
    pages: {
        // signIn: '/',
        signOut: "/",
        error: "/404",
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: "/register" // New users will be directed here on first sign in (leave the property out if not of interest)
    }
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6811));
module.exports = __webpack_exports__;

})();