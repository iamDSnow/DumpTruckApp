"use strict";
(() => {
var exports = {};
exports.id = 342;
exports.ids = [342];
exports.modules = {

/***/ 3188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handle)
});

;// CONCATENATED MODULE: external "next-auth/react"
const react_namespaceObject = require("next-auth/react");
;// CONCATENATED MODULE: ./pages/api/getSeshEmail.js

async function handle(req, res) {
    const session = await (0,react_namespaceObject.getSession)(req);
    if (!session) {
        const email = await session;
        console.log(session);
        res.json(email);
    } else {
        res.send([]);
        console.log("not working");
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3188));
module.exports = __webpack_exports__;

})();