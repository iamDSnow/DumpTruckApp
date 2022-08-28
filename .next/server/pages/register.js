"use strict";
(() => {
var exports = {};
exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 72:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);






const getStaticProps = async ()=>{
    await fetch("https://just-chamois-38.hasura.app/v1/graphql");
    const response = await fetch("https://just-chamois-38.hasura.app/v1/graphql", {
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
          }
        }
      `
        })
    });
    const reg = await response.json();
    return {
        props: {
            reg
        }
    };
};
const Register = ({ reg  })=>{
    const { 0: firstName , 1: setFirstName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: driverLic , 1: setDriverLic  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: phoneNumber , 1: setPhoneNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: comName , 1: setComName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: truckPlateNumber , 1: setTruckPlateNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: shouldRedirect , 1: setShouldRedirect  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    if (status === "loading") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Loading..."
        });
    }
    if (status === "unauthenticated") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Access Denied"
        });
    }
    if (status === "authenticated") {
        const gM = session.user.email;
        const uName = session.user.name;
        // console.log(reg.data.Users.map(user => {
        //   if (user.email === gM) {
        //     return user.uid
        //   }
        // }).reduce((a, b) => a + b, 0).replace('NaN', '')  )
        function Redirect({ to  }) {
            const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
            (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
                router.push(to);
            }, [
                to
            ]);
            return null;
        }
        const handleSubmit = async (e)=>{
            const data1 = {
                firstName: session.user.name,
                driverLic: driverLic,
                email: session.user.email,
                phoneNumber: phoneNumber,
                comName: comName,
                truckPlateNumber: truckPlateNumber
            };
            // Send the data to the server in JSON format.
            const JSONdata = JSON.stringify(data1);
            console.log(JSONdata);
            const endpoint = "/api/signUpAPI";
            const options = {
                // The method is POST because we are sending data.
                method: "POST",
                // Tell the server we're sending JSON.
                headers: {
                    "Content-Type": "application/json"
                },
                // Body of the request is the JSON data we created above.
                body: JSONdata
            };
            const response = await fetch(endpoint, options);
            const result = await response.json();
            alert(`Is this your full name: ${result.data}`);
        };
        const handleOpen = (index)=>{
            setOpen(true);
            setData(data[index]);
        };
        const handleClose = ()=>{
            setOpen(false);
        };
        const id = reg.data.Users.map((user)=>{
            if (user.email === gM) {
                return user.uid;
            } else return "";
        }).reduce((a, b)=>a + b, 0).replace("NaN", "");
        localStorage.setItem("u", JSON.stringify(id));
        if (shouldRedirect) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Redirect, {
                to: "/thankyou"
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FormWrapper, {
            action: "/api/signUpAPI",
            method: "post",
            onSubmit: handleSubmit,
            css: `
        padding: 2rem 4rem;
      `,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                    children: "Create An Account"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                    container: true,
                    columns: 8,
                    direction: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                            item: true,
                            xs: 4,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                disabled: true,
                                required: true,
                                type: "text",
                                name: "Name",
                                value: uName,
                                onChange: (e)=>setFirstName(session.user.name),
                                placeholder: "Full Name"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                            item: true,
                            xs: 4,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                required: true,
                                type: "text",
                                name: "driverLic",
                                value: driverLic,
                                onChange: (e)=>setDriverLic(e.target.value),
                                placeholder: "Driver Lic."
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                            item: true,
                            xs: 4,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                disabled: true,
                                required: true,
                                name: "email",
                                id: "email",
                                type: "text",
                                placeholder: "Email Address",
                                value: gM,
                                onChange: (e)=>setEmail(e.target.value)
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                            item: true,
                            xs: 4,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                required: true,
                                name: "phoneNumber",
                                id: "phoneNumber",
                                type: "number",
                                value: phoneNumber,
                                placeholder: " Phone Number",
                                onChange: (e)=>setPhoneNumber(e.target.value)
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                            item: true,
                            xs: 4,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                required: true,
                                name: "comName",
                                id: "comName",
                                type: "text",
                                value: comName,
                                placeholder: " Comapany Name",
                                onChange: (e)=>setComName(e.target.value)
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                            item: true,
                            xs: 4,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                required: true,
                                name: "truckPlateNumber",
                                id: "truckPlateNumber",
                                type: "text",
                                value: truckPlateNumber,
                                placeholder: " Plate Number",
                                onChange: (e)=>setTruckPlateNumber(e.target.value)
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                    type: "submit",
                    onClick: ()=>{
                        handleSubmit();
                        setShouldRedirect(true);
                    },
                    children: "Create"
                })
            ]
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);
const FormWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().form)`

`;


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

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

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(72));
module.exports = __webpack_exports__;

})();