"use strict";
exports.id = 981;
exports.ids = [981];
exports.modules = {

/***/ 5981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);






const Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  content-align: center;
`;
const SButton = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button)`
  align-self: center;
`;
function Login() {
    const { 0: d , 1: setD  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: gM , 1: setGM  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const ApiAsync = async ()=>{
            const resopnse = await fetch("https://just-chamois-38.hasura.app/v1/graphql", {
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
              firstName
              driverLic
            }
          }
        `
                })
            });
            const resopnseJson = await resopnse.json();
            await setD(resopnseJson.data.Users.map((user)=>{
                user.email;
            }));
            await setLoading(resopnseJson);
        };
        ApiAsync();
    }, []);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (status === "authenticated") setGM(session.user.email);
    }, [
        status
    ]);
    if (status === "authenticated") {
        d === gM ? next_router__WEBPACK_IMPORTED_MODULE_5___default().push("/thankyou") : next_router__WEBPACK_IMPORTED_MODULE_5___default().push("/register");
        // console.log(JSON.stringify(d))
        //       (d ==='undefined')?
        // <div>...loading</div>
        // :
        // getE()
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: " Please sign in."
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SButton, {
                    size: "large",
                    onClick: ()=>{
                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)();
                    },
                    children: [
                        " ",
                        "Sign In",
                        " "
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);


/***/ })

};
;