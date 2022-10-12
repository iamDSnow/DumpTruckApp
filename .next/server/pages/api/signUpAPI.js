"use strict";
(() => {
var exports = {};
exports.id = 636;
exports.ids = [636];
exports.modules = {

/***/ 3563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    // Get data submitted in request's body.
    const data = req.body;
    const responseBody = {
        app_metadata: {
            roles: [
                "new"
            ],
            my_user_info: "New User"
        }
    };
    const responseBodyString = JSON.stringify({
        query: `
  mutation MyMutation($phone: String = "", $truckPlateNumber: String = "", $firstName: String = "", $email: String = "", $driverLic: String = "", $company: String = "") {
    insert_Users(objects: {truckPlateNumber: $truckPlateNumber, phone: $phone, firstName: $firstName, email: $email, driverLic: $driverLic, company: $company}) {
      affected_rows
    }
  }
`,
        variables: {
            firstName: data.firstName,
            email: data.email,
            phone: data.phoneNumber,
            company: data.comName,
            truckPlateNumber: data.truckPlateNumber,
            driverLic: data.driverLic
        }
    });
    // Optional logging to see the responses
    console.log("body: ", data);
    const response = await fetch("https://just-chamois-38.hasura.app/v1/graphql", {
        method: "POST",
        body: responseBodyString,
        headers: {
            ["x-hasura-admin-secret"]: "MLy43KG049rHc1UVMsodU7dVHYrouGG3KEJ18Pm7z45qdxhZqAcnVte00i7uO4HY"
        }
    });
    console.log("finished");
    const { errors , payload  } = await response.json();
    if (errors) {
        console.log(errors);
    } else return {
        statusCode: 200,
        body: JSON.stringify(responseBody)
    };
    if (!data.firstName) {
        // Sends a HTTP bad request error code
        return res.status(400).json({
            data: "badHTTP"
        });
    }
    // // Found the name.
    // // Sends a HTTP success code
    res.status(200);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3563));
module.exports = __webpack_exports__;

})();