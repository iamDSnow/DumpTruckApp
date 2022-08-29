"use strict";
(() => {
var exports = {};
exports.id = 182;
exports.ids = [182];
exports.modules = {

/***/ 4298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    async function fetchGraphQL(operationsDoc, operationName, variables) {
        const data = await fetch("https://just-chamois-38.hasura.app/v1/graphql", {
            method: "POST",
            headers: {
                ["x-hasura-admin-secret"]: "MLy43KG049rHc1UVMsodU7dVHYrouGG3KEJ18Pm7z45qdxhZqAcnVte00i7uO4HY"
            },
            body: JSON.stringify({
                query: operationsDoc,
                variables: {
                    firstName: data.firstName,
                    email: data.email
                },
                operationName: operationName
            })
        });
        return await data.json();
    }
    const operationsDoc = `
    query MyQuery {
      Users {
        uid
        email
        firstName
      }
    }
  `;
    function fetchMyQuery() {
        return fetchGraphQL(operationsDoc, "MyQuery", {});
    }
    async function startFetchMyQuery() {
        const { errors , data  } = await fetchMyQuery();
        if (errors) {
            // handle those errors like a pro
            console.error(errors);
        }
        // do something great with this precious data
        console.log(data);
        res.status(200);
    }
    startFetchMyQuery();
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4298));
module.exports = __webpack_exports__;

})();