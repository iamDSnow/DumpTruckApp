"use strict";
(() => {
var exports = {};
exports.id = 931;
exports.ids = [931,157];
exports.modules = {

/***/ 1023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Details),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8461);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_NoSsr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3534);
/* harmony import */ var _mui_material_NoSsr__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_NoSsr__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);












const getStaticPaths = async ()=>{
    const res = await fetch("https://just-chamois-38.hasura.app/v1/graphql", {
        method: "POST",
        headers: {
            ["x-hasura-admin-secret"]: "MLy43KG049rHc1UVMsodU7dVHYrouGG3KEJ18Pm7z45qdxhZqAcnVte00i7uO4HY"
        },
        body: JSON.stringify({
            query: `
      query MyQuery {
        Users {
          uid
          email
          company
          firstName
          phone
          truckPlateNumber
          Tickets {
            user_id
            totalLoads
            totalHours
            ticket_id
            startTime
            phone
            notes
            endTime
            deliveryLocation
            customerName
            contractor
            Loads {
              tripNumber
              ticket_id
              load_id
              loadSite
              Material
              ton
            }
          }
        }
      }
    `
        })
    });
    const data = await res.json();
    const paths = data.data.Users?.map((user)=>{
        return {
            params: {
                id: user.uid.toString()
            }
        };
    });
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async (context)=>{
    const id = context.params.id;
    await fetch("https://just-chamois-38.hasura.app/v1/graphql" + id);
    const response = await fetch("https://just-chamois-38.hasura.app/v1/graphql", {
        method: "POST",
        headers: {
            ["x-hasura-admin-secret"]: "MLy43KG049rHc1UVMsodU7dVHYrouGG3KEJ18Pm7z45qdxhZqAcnVte00i7uO4HY"
        },
        body: JSON.stringify({
            query: `
        query MyQuery($_eq: uuid = "${id}") {
          Users(where: {uid: {_eq: $_eq}}) {
            uid
            email
            company
            firstName
            phone
            driverLic
            truckPlateNumber
            Tickets {
              user_id
              totalLoads
              totalHours
              ticket_id
              startTime
              phone
              notes
              endTime
              deliveryLocation
              customerName
              contractor
              Loads {
                tripNumber
                ticket_id
                load_id
                loadSite
                Material
                ton
              }
            }
          }
        }
      `
        })
    });
    const data = await response.json();
    return {
        props: {
            data,
            id
        },
        revalidate: 1
    };
};
function Details({ data , id  }) {
    //Whos Hauling State
    const [ticket_idInput, setTicket_IDInput] = react__WEBPACK_IMPORTED_MODULE_4__.useState(0);
    const [tripNumber, setTripNumber] = react__WEBPACK_IMPORTED_MODULE_4__.useState(0);
    const [loadSite, setLoadSite] = react__WEBPACK_IMPORTED_MODULE_4__.useState("");
    const [material, setMaterial] = react__WEBPACK_IMPORTED_MODULE_4__.useState("");
    const [ton, setTon] = react__WEBPACK_IMPORTED_MODULE_4__.useState(0);
    const handleSubmit = async (e)=>{
        // Prep Payload
        const payload = await {
            ticket_id: ticketData.ticket_id,
            tripNumber: Number(tripNumber),
            loadSite: loadSite.toString(),
            Material: material.toString(),
            ton: Number(ton)
        };
        console.log("payload ready..." + JSON.stringify(payload));
        // If User
        if (payload) {
            console.log("ran");
            async function fetchGraphQL(operationsDoc, operationName, variables) {
                const result = await fetch("https://just-chamois-38.hasura.app/v1/graphql", {
                    method: "POST",
                    headers: {
                        ["x-hasura-admin-secret"]: "MLy43KG049rHc1UVMsodU7dVHYrouGG3KEJ18Pm7z45qdxhZqAcnVte00i7uO4HY"
                    },
                    body: JSON.stringify({
                        query: operationsDoc,
                        variables: variables,
                        operationName: operationName
                    })
                });
                return await result.json();
            }
            const operationsDoc = `
      mutation MyMutation($Material: String = "", $loadSite: String = "", $ticket_id: Int = "", $ton: Int = "", $tripNumber: Int = "") {
        insert_Loads_one(object: {Material: $Material, loadSite: $loadSite, ticket_id: $ticket_id, ton: $ton, tripNumber: $tripNumber}) {
          Material
          loadSite
          ticket_id
          ton
          tripNumber
        }
      }
    `;
            function executeMyMutation() {
                return fetchGraphQL(operationsDoc, "MyMutation", payload);
            }
            async function startExecuteMyMutation() {
                const { errors , data  } = await executeMyMutation();
                if (errors) {
                    // handle those errors like a pro
                    console.error(errors);
                }
                // do something great with this precious data
                console.log(data);
                console.log("ran");
            }
            startExecuteMyMutation();
        }
        next_router__WEBPACK_IMPORTED_MODULE_10___default().push("../../dashboard/" + id);
    };
    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.useSession)();
    const [gM, setGM] = react__WEBPACK_IMPORTED_MODULE_4__.useState("");
    const [ticketData, setTicketData] = react__WEBPACK_IMPORTED_MODULE_4__.useState("");
    react__WEBPACK_IMPORTED_MODULE_4__.useEffect(()=>{
        if (session.status === "authenticated") setGM(session.data.user.email), localStorage.getItem("data") ? setTicketData(JSON.parse(localStorage.getItem("data"))) : next_router__WEBPACK_IMPORTED_MODULE_10___default().push("/dashboard/" + id);
    }, [
        session.status
    ]);
    console.log(ticketData.ticket_id);
    if (!ticketData.ticket_id) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Please Create a Ticket"
            })
        });
    } else return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_NoSsr__WEBPACK_IMPORTED_MODULE_9___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default()), {
                    container: true,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            container: true,
                            columns: 16,
                            direction: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                    item: true,
                                    xs: 9
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                    item: true,
                                    xs: 5,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        disabled: true,
                                        id: "filled-disabled",
                                        variant: "filled",
                                        label: "Ticket ID",
                                        type: "number",
                                        value: ticketData.ticket_id,
                                        name: "ticket_idInput"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                            onSubmit: handleSubmit,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                container: true,
                                columnSpacing: 12,
                                gap: 7,
                                direction: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                        item: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            required: true,
                                            id: "outlined-required",
                                            type: "text",
                                            label: "Trip Number",
                                            value: tripNumber,
                                            name: "tripNumber",
                                            style: {
                                                width: 335
                                            },
                                            onChange: (e)=>setTripNumber(e.target.value)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                        item: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            required: true,
                                            id: "outlined-required",
                                            type: "text",
                                            label: "Load Site",
                                            name: "loadSite",
                                            value: loadSite,
                                            style: {
                                                width: 335
                                            },
                                            onChange: (e)=>setLoadSite(e.target.value)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                        item: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            required: true,
                                            id: "outlined-required",
                                            label: "Material",
                                            value: material,
                                            type: "text",
                                            style: {
                                                width: 335
                                            },
                                            onChange: (e)=>setMaterial(e.target.value)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                        item: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            id: "outlined-number",
                                            label: "Yard/Tonnage",
                                            name: "ton",
                                            type: "number",
                                            value: ton,
                                            InputLabelProps: {
                                                shrink: true
                                            },
                                            style: {
                                                width: 335
                                            },
                                            onChange: (e)=>setTon(e.target.value)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                        item: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                            type: "button",
                                            onClick: handleSubmit,
                                            variant: "outlined",
                                            sx: {
                                                height: "64.45px",
                                                width: "335px;",
                                                backgroundColor: "#A9A9A9",
                                                color: "#000",
                                                borderColor: "transparent",
                                                "&:hover": {
                                                    backgroundColor: "#FFA500",
                                                    color: "#000"
                                                }
                                            },
                                            children: "Save"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                        item: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                            variant: "outlined",
                                            sx: {
                                                height: "64.45px",
                                                width: "335px;",
                                                backgroundColor: "#A9A9A9",
                                                borderColor: "transparent",
                                                color: "#000",
                                                "&:hover": {
                                                    backgroundColor: "#FFA500",
                                                    color: "#000"
                                                }
                                            },
                                            onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_10___default().push("/dashboard/" + id),
                                            children: "Cancel"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
Details.auth = {
    unauthorized: "/"
};


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3882:
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 4475:
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 8125:
/***/ ((module) => {

module.exports = require("@mui/material/Menu");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 3534:
/***/ ((module) => {

module.exports = require("@mui/material/NoSsr");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 1431:
/***/ ((module) => {

module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 7229:
/***/ ((module) => {

module.exports = require("@mui/material/Tooltip");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [311,675,461], () => (__webpack_exec__(1023)));
module.exports = __webpack_exports__;

})();