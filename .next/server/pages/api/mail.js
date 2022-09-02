"use strict";
(() => {
var exports = {};
exports.id = 70;
exports.ids = [70];
exports.modules = {

/***/ 2139:
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ 218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const mail = __webpack_require__(2139);
async function handler(req, res) {
    await mail.setApiKey("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");
    const appContractor = req.contractor;
    const msg = {
        to: "suprawhiz@gmail.com",
        from: "suprawhiz@gmail.com",
        subject: "JOB APPLICATION:",
        text: appContractor,
        html: appContractor
    };
    try {
        await sgMail.send(msg);
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body);
        }
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(218));
module.exports = __webpack_exports__;

})();