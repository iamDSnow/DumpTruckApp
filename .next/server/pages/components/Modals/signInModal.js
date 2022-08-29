"use strict";
(() => {
var exports = {};
exports.id = 565;
exports.ids = [565];
exports.modules = {

/***/ 285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3349);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);





function rand() {
    return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`
    };
}
const useStyles = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: "#fff",
        boxShadow: "#eee",
        padding: "50px",
        outline: "none"
    }
});
function SimpleModal() {
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // getModalStyle is not a pure function, we roll the style only on the first render
    const { 0: modalStyle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getModalStyle);
    const { 0: modalData , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const data = [
        {
            title: "Sign In",
            Info: "Login"
        }
    ];
    const CustomModal = ()=>{
        // const [firstName, setFirstName] = useState("");
        // const [lastName, setlastName] = useState("");
        const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
        const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
        const handleSubmit = async (e)=>{
            e.preventDefault();
            SG({
                email,
                password
            });
        };
        return modalData ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Modal, {
            "aria-labelledby": "simple-modal-title",
            "aria-describedby": "simple-modal-description",
            open: open,
            onClose: handleClose,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: modalStyle,
                className: classes.paper,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        variant: "h6",
                        id: "modal-title",
                        children: modalData.Info
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        variant: "subtitle1",
                        id: "simple-modal-description",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FormWrapper, {
                            onSubmit: handleSubmit,
                            css: `
      padding: 2rem 4rem;
    `,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeaderText, {
                                    children: "Sign in with App"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                                    htmlFor: "email",
                                    children: "Email"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FormField, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Input, {
                                        name: "email",
                                        id: "email",
                                        type: "text",
                                        placeholder: "Email Address",
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value)
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                                    htmlFor: "password",
                                    children: "Password"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FormField, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Input, {
                                        name: "password",
                                        id: "password",
                                        type: "text",
                                        value: password,
                                        placeholder: "Password",
                                        onChange: (e)=>setPassword(e.target.value)
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubmitButton, {
                                    type: "submit",
                                    onClick: handleSubmit,
                                    children: "Sign In"
                                })
                            ]
                        })
                    })
                ]
            })
        }) : null;
    };
    const handleOpen = (index)=>{
        setOpen(true);
        setData(data[index]);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    const classes = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            data.map((d, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                        onClick: ()=>{
                            handleOpen(index);
                        },
                        children: d.title
                    })
                })),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomModal, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleModal);
const HeaderText = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`

`;
const Field = `
  


`;
const FormWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().form)`

`;
const FormField = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`

`;
const Input = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().input)`
  ${Field}
`;
const Input2 = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().input)`

`;
const TextArea = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().textarea)`
  ${Field}

`;
const SubmitButton = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().button)`

`;
const Label = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().label)`

`;


/***/ }),

/***/ 3349:
/***/ ((module) => {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(285));
module.exports = __webpack_exports__;

})();