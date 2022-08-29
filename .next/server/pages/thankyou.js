"use strict";
(() => {
var exports = {};
exports.id = 225;
exports.ids = [225,260];
exports.modules = {

/***/ 9687:
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
const ThankYou = ({ reg  })=>{
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
        const id = reg.data.Users.map((user)=>{
            if (user.email === gM) {
                return user.uid;
            } else return "";
        }).reduce((a, b)=>a + b, 0).replace("NaN", "");
        localStorage.setItem("u", JSON.stringify(id));
        if (id) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Redirect, {
                to: "/dashboard/" + id.substring(1)
            });
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
            children: "Thank You"
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThankYou);
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
var __webpack_exports__ = (__webpack_exec__(9687));
module.exports = __webpack_exports__;

})();