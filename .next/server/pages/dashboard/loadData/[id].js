"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,157];
exports.modules = {

/***/ 2490:
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8461);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_NoSsr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3534);
/* harmony import */ var _mui_material_NoSsr__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_NoSsr__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);









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
    const paths = data.data.Users.map((user)=>{
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
        revalidate: 10
    };
};
function Details({ data , id  }) {
    const [startTimeInput, setStartTimeInput] = react__WEBPACK_IMPORTED_MODULE_3__.useState(0);
    const [endTimeInput, setEndTimeInput] = react__WEBPACK_IMPORTED_MODULE_3__.useState(0);
    const [contractorInput, setContractorInput] = react__WEBPACK_IMPORTED_MODULE_3__.useState("");
    const [deliveryLocationInput, setDeliveryLocationInput] = react__WEBPACK_IMPORTED_MODULE_3__.useState("");
    const [notesInput, setNotesInput] = react__WEBPACK_IMPORTED_MODULE_3__.useState("");
    const [phoneInput, setPhoneInput] = react__WEBPACK_IMPORTED_MODULE_3__.useState(0);
    const [totalLoadsInput, setTotalLoadsInput] = react__WEBPACK_IMPORTED_MODULE_3__.useState(0);
    const [totalHoursInput, setTotalHoursInput] = react__WEBPACK_IMPORTED_MODULE_3__.useState("");
    const [customerNameInput, setCustomerNameInput] = react__WEBPACK_IMPORTED_MODULE_3__.useState("");
    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();
    const [ticketData, setTicketData] = react__WEBPACK_IMPORTED_MODULE_3__.useState("");
    react__WEBPACK_IMPORTED_MODULE_3__.useEffect(()=>{
        if (session.status === "authenticated") setTicketData(JSON.parse(localStorage.getItem("data")));
    }, [
        session.status
    ]);
    console.log(data.data.Users.map((user)=>{
        if (user.uid === id) {
            return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>{
                return ticket.Loads.filter((item)=>item.ticket_id === ticketData.ticket_id).map((load)=>load);
            });
        }
    }));
    //   filter(
    //     item => item.ticket_id === ticketData.ticket_id
    //   ).map(ticket => ticket)
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_NoSsr__WEBPACK_IMPORTED_MODULE_7___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                container: true,
                                direction: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                children: [
                                    data.data.Users.map((user)=>{
                                        if (user.uid === id) {
                                            return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>{
                                                return ticket.Loads.filter((item)=>item.ticket_id === ticketData.ticket_id).map((load)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        sx: {
                                                            paddingBottom: "15px"
                                                        },
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                            item: true,
                                                            sx: {
                                                                width: 250,
                                                                height: "auto",
                                                                backgroundColor: "#A9A9A9",
                                                                direction: "column",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                borderRadius: "5px"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                                    container: true,
                                                                    columns: 12,
                                                                    direction: "row",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                                            container: true,
                                                                            sx: {
                                                                                borderBottom: "1px solid #000"
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                                                    item: true,
                                                                                    xs: 7,
                                                                                    direction: "row",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                                        sx: {
                                                                                            paddingTop: "10px",
                                                                                            paddingLeft: "15px",
                                                                                            paddingBottom: "5px",
                                                                                            textAlign: "left"
                                                                                        },
                                                                                        children: "LOAD ID: "
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                                                    item: true,
                                                                                    xs: 5,
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                                        sx: {
                                                                                            paddingTop: "10px",
                                                                                            paddingRight: "15px",
                                                                                            paddingBottom: "5px",
                                                                                            textAlign: "right"
                                                                                        },
                                                                                        children: load.load_id
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                                            item: true,
                                                                            xs: 7,
                                                                            direction: "row",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                                sx: {
                                                                                    paddingTop: "10px",
                                                                                    paddingLeft: "15px",
                                                                                    textAlign: "left"
                                                                                },
                                                                                children: "SITE: "
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                                            item: true,
                                                                            xs: 5,
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                                sx: {
                                                                                    paddingTop: "10px",
                                                                                    paddingRight: "15px",
                                                                                    textAlign: "right"
                                                                                },
                                                                                children: [
                                                                                    " ",
                                                                                    load.loadSite
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                                            item: true,
                                                                            xs: 7,
                                                                            direction: "row",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                                sx: {
                                                                                    paddingTop: "10px",
                                                                                    paddingLeft: "15px",
                                                                                    textAlign: "left"
                                                                                },
                                                                                children: "TRIP NO: "
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                                            item: true,
                                                                            xs: 5,
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                                sx: {
                                                                                    paddingTop: "10px",
                                                                                    paddingRight: "15px",
                                                                                    textAlign: "right"
                                                                                },
                                                                                children: [
                                                                                    " ",
                                                                                    load.tripNumber
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                                            item: true,
                                                                            xs: 7,
                                                                            direction: "row",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                                sx: {
                                                                                    paddingTop: "10px",
                                                                                    paddingLeft: "15px",
                                                                                    textAlign: "left"
                                                                                },
                                                                                children: "MATERIAL: "
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                                            item: true,
                                                                            xs: 5,
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                                sx: {
                                                                                    paddingTop: "10px",
                                                                                    paddingRight: "15px",
                                                                                    textAlign: "right"
                                                                                },
                                                                                children: [
                                                                                    " ",
                                                                                    load.Material
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                                            item: true,
                                                                            xs: 7,
                                                                            direction: "row",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                                sx: {
                                                                                    paddingTop: "10px",
                                                                                    paddingLeft: "15px",
                                                                                    textAlign: "left"
                                                                                },
                                                                                children: "YARD/TONNAGE: "
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                                            item: true,
                                                                            xs: 5,
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                                sx: {
                                                                                    paddingTop: "10px",
                                                                                    paddingRight: "15px",
                                                                                    textAlign: "right"
                                                                                },
                                                                                children: [
                                                                                    " ",
                                                                                    load.ton
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                                    container: true,
                                                                    direction: "column",
                                                                    justifyContent: "center",
                                                                    alignItems: "center",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                                        item: true,
                                                                        xs: 6,
                                                                        sx: {
                                                                            paddingBottom: "10px",
                                                                            alignContent: "center",
                                                                            justifyContent: "center",
                                                                            alignItems: "center"
                                                                        },
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                                                            variant: "outlined",
                                                                            btn: true,
                                                                            sx: {
                                                                                height: "47.225px",
                                                                                width: "167.5px;",
                                                                                backgroundColor: "#A9A9A9",
                                                                                borderColor: "#000",
                                                                                color: "#000",
                                                                                "&:hover": {
                                                                                    backgroundColor: "#FFA500",
                                                                                    color: "#000"
                                                                                }
                                                                            },
                                                                            onClick: ()=>{
                                                                                next_router__WEBPACK_IMPORTED_MODULE_8___default().push("./loadConfig/" + id);
                                                                                localStorage.setItem("LOADID", JSON.stringify(load.load_id));
                                                                            },
                                                                            children: "Button"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }, load.load_id)
                                                    }));
                                            });
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                        item: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                            variant: "outlined",
                                            sx: {
                                                height: "64.45px",
                                                width: "250px;",
                                                backgroundColor: "#A9A9A9",
                                                borderColor: "transparent",
                                                color: "#000",
                                                "&:hover": {
                                                    backgroundColor: "#FFA500",
                                                    color: "#000"
                                                }
                                            },
                                            onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_8___default().push("/dashboard/" + id),
                                            children: "Cancel"
                                        })
                                    })
                                ]
                            })
                        })
                    })
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
var __webpack_exports__ = __webpack_require__.X(0, [311,675,461], () => (__webpack_exec__(2490)));
module.exports = __webpack_exports__;

})();