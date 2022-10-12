"use strict";
(() => {
var exports = {};
exports.id = 588;
exports.ids = [588,157];
exports.modules = {

/***/ 506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "UserDetailsContext": () => (/* binding */ UserDetailsContext),
  "default": () => (/* binding */ Details),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./pages/components/Layout.js
var Layout = __webpack_require__(8461);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@material-ui/styles"
const styles_namespaceObject = require("@material-ui/styles");
;// CONCATENATED MODULE: external "@mui/material/Paper"
const Paper_namespaceObject = require("@mui/material/Paper");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Table"
const Table_namespaceObject = require("@mui/material/Table");
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableBody"
const TableBody_namespaceObject = require("@mui/material/TableBody");
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableCell"
const TableCell_namespaceObject = require("@mui/material/TableCell");
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableContainer"
const TableContainer_namespaceObject = require("@mui/material/TableContainer");
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableHead"
const TableHead_namespaceObject = require("@mui/material/TableHead");
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableRow"
const TableRow_namespaceObject = require("@mui/material/TableRow");
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_namespaceObject);
;// CONCATENATED MODULE: ./pages/dashboard/[id].js

















const UserDetailsContext = /*#__PURE__*/ (0,external_react_.createContext)();
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
const useStyles = (0,styles_namespaceObject.makeStyles)((theme)=>({
        paper: {
            position: "absolute",
            backgroundColor: "white",
            boxShadow: "black",
            padding: "0",
            outline: "none"
        }
    }));
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
    const paths = await data.data.Users?.map((user)=>{
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
        revalidate: 2
    };
};
function Details({ data , id  }) {
    const handleSubmit = async (e)=>{
        // Prep Payload
        const payload = await {
            ticket_id: Number(selectedRow.ticket_id),
            totalLoads: Number(totalLoadsUpdate)
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
  mutation MyMutation($ticket_id: Int = 0, $totalLoads: Int = 0) {
    update_Tickets_by_pk(pk_columns: {ticket_id: $ticket_id}, _set: {totalLoads: $totalLoads}) {
      totalLoads
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
    };
    //Modal Open/Close
    const [open, setOpen] = external_react_.useState(false);
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = external_react_.useState(getModalStyle);
    const [modalData, setData] = external_react_.useState();
    //Style Class
    const classes = useStyles();
    //tableData
    const [tableData, setTableData] = external_react_.useState([]);
    const [dT, setDT] = external_react_.useState([]);
    const [selectedRow, setSelectedRow] = external_react_.useState({});
    const [rowTF, setRowTF] = external_react_.useState(false);
    const [loadDisplay, setLoadDisplay] = external_react_.useState();
    const [totalLoadsUpdate, setTotalLoadsUpdate] = external_react_.useState();
    const session = (0,react_.useSession)();
    const [ticketData, setTicketData] = external_react_.useState("");
    const [ticket_IdInput, setTicket_IdInput] = external_react_.useState("");
    external_react_.useEffect(()=>{
        if (session.status === "authenticated") setTicketData(JSON.parse(localStorage.getItem("data")));
    }, [
        session.status
    ]);
    external_react_.useEffect(()=>{
        data.data.Users?.map((user)=>{
            //Set table data
            return setTableData(user.Tickets);
        });
        //get initial data
        getD();
        setLoadDisplay();
        return ()=>{
            tableData, loadDisplay;
        };
    }, []);
    //function to get opening data in state 
    function getD() {
        new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(tableData ? data.data.Users?.map((user)=>{
                    return user.Tickets.map((tickets, i, row)=>{
                        if (i + 1 === row.length) {
                            return setDT(tickets), localStorage.setItem("data", JSON.stringify(tickets));
                        }
                    });
                }) : "null", setTicket_IdInput(data.data.Users?.map((user)=>{
                    return user.Tickets.map((tickets, i, row)=>{
                        if (i + 1 === row.length) {
                            return tickets.ticket_id;
                        }
                    }).join("");
                })));
            }, 1000);
        });
    }
    // console.log(ticket_IdInput)
    const handleOpen = ()=>{
        setOpen(true);
        setData({
            data
        });
    };
    const handleClose = async ()=>{
        await setOpen(false);
        await setTotalLoadsUpdate(data.data.Users?.map((user)=>{
            if (user.uid === id) {
                return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>{
                    return JSON.stringify(ticket.Loads.filter((item)=>item.ticket_id === ticketData.ticket_id).map((load)=>load.ton).reduce((a, b)=>a + b, 0));
                });
            }
        }));
    };
    // Modal Layout
    const CustomModal = ()=>{
        console.log(totalLoadsUpdate);
        return modalData ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Modal, {
            "aria-labelledby": "simple-modal-title",
            "aria-describedby": "simple-modal-description",
            open: open,
            onClose: handleClose,
            sx: {
                flexGrow: 1,
                display: {
                    xs: 10
                }
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: modalStyle,
                className: classes.paper,
                children: /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
                    component: (Paper_default()),
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Table_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((TableHead_default()), {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "right",
                                            children: "Ticket ID"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "right",
                                            children: "Customer Name"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "right",
                                            children: "Phone"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "right",
                                            children: "Total Loads"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((TableBody_default()), {
                                children: tableData.map((list, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                        onClick: ()=>{
                                            setSelectedRow(list);
                                            setDT(list);
                                            handleClose();
                                            setRowTF(true);
                                            localStorage.setItem("data", JSON.stringify(list));
                                        },
                                        sx: {
                                            "&:last-child td, &:last-child th": {
                                                border: 0
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                align: "right",
                                                component: "th",
                                                scope: "row",
                                                children: list.ticket_id
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                align: "right",
                                                children: list.customerName
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                align: "right",
                                                children: list.phone
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                align: "right",
                                                children: list.totalLoads
                                            })
                                        ]
                                    }, index))
                            })
                        ]
                    })
                })
            })
        }) : null;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(UserDetailsContext.Provider, {
        value: [
            dT
        ],
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Layout["default"], {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Container, {
                static: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(CustomModal, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        container: true,
                        columns: 12,
                        direction: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            xs: 6,
                            sx: {
                                height: "50px",
                                width: "100%",
                                backgroundColor: "white",
                                color: "#000",
                                textAlign: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                variant: "outlined",
                                sx: {
                                    height: "50px",
                                    width: "100%",
                                    backgroundColor: "white",
                                    borderTop: 1,
                                    borderBottom: 1,
                                    position: "relative",
                                    color: "#000",
                                    "&:hover": {
                                        backgroundColor: "#FFA500",
                                        color: "#000"
                                    }
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                    onClick: ()=>{
                                        handleOpen();
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "View Ticket"
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        container: true,
                        spacing: 2,
                        columns: 12,
                        direction: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        xs: true,
                        zeroMinWidth: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            xs: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "Current Ticket"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        container: true,
                        spacing: 2,
                        columns: 12,
                        direction: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        xs: true,
                        zeroMinWidth: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                            item: true,
                            xs: 6,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        width: 335,
                                        height: "auto",
                                        backgroundColor: "#A9A9A9",
                                        direction: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "5px"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                            container: true,
                                            columns: 16,
                                            direction: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                    container: true,
                                                    columns: 16,
                                                    direction: "row",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                            item: true,
                                                            xs: 10,
                                                            children: rowTF ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                children: [
                                                                    `NAME: `,
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                        children: selectedRow.customerName
                                                                    })
                                                                ]
                                                            }) : data.data.Users?.map((user)=>{
                                                                return user.Tickets.map((tickets, i, row)=>{
                                                                    if (i + 1 === row.length) {
                                                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            children: [
                                                                                `NAME: `,
                                                                                " ",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                                    children: tickets.customerName
                                                                                })
                                                                            ]
                                                                        });
                                                                    }
                                                                });
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                            item: true,
                                                            xs: 4,
                                                            children: rowTF ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: `TICKET: ` + selectedRow.ticket_id
                                                            }) : data.data.Users?.map((user)=>{
                                                                return user.Tickets.map((tickets, i, row)=>{
                                                                    if (i + 1 === row.length) {
                                                                        return /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: `TICKET: ` + tickets.ticket_id
                                                                        });
                                                                    }
                                                                });
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                            item: true,
                                                            xs: 8,
                                                            children: rowTF ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: `PHONE: ` + selectedRow.phone
                                                            }) : data.data.Users?.map((user)=>{
                                                                return user.Tickets.map((tickets, i, row)=>{
                                                                    if (i + 1 === row.length) {
                                                                        return /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: `PHONE: ` + tickets.phone
                                                                        });
                                                                    }
                                                                });
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                            item: true,
                                                            xs: 6,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                                variant: "outlined",
                                                                sx: {
                                                                    backgroundColor: "#A9A9A9",
                                                                    height: "30px",
                                                                    color: "#000",
                                                                    borderColor: "#000",
                                                                    "&:hover": {
                                                                        backgroundColor: "#FFA500",
                                                                        color: "#000"
                                                                    }
                                                                },
                                                                onClick: ()=>router_default().push("./ticketCon/" + id),
                                                                children: "Edit Ticket"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                                                    sx: {
                                                        background: "black"
                                                    }
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                    item: true,
                                                    xs: 8,
                                                    direction: "column",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        children: " Total Loads"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                    item: true,
                                                    xs: 12,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        children: rowTF ? data.data.Users?.map((user)=>{
                                                            if (user.uid === id) {
                                                                return user.Tickets.filter((item)=>item.ticket_id === selectedRow.ticket_id).map((ticket)=>{
                                                                    return ticket.Loads.filter((item)=>item.ticket_id === selectedRow.ticket_id).map((load)=>load.ton).reduce((a, b)=>a + b, 0);
                                                                });
                                                            }
                                                        }) : data.data.Users?.map((user)=>{
                                                            if (user.uid === id) {
                                                                return user.Tickets.filter((item)=>item.ticket_id === Number(ticket_IdInput)).map((ticket)=>{
                                                                    return ticket.Loads.filter((item)=>item.ticket_id === Number(ticket_IdInput)).map((load)=>load.ton).reduce((a, b)=>a + b, 0);
                                                                });
                                                            }
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                    item: true,
                                                    xs: 6,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                        variant: "outlined",
                                                        btn: true,
                                                        sx: {
                                                            height: "47.225px",
                                                            width: "167.5px;",
                                                            backgroundColor: "#A9A9A9",
                                                            borderColor: "#000",
                                                            color: "#000",
                                                            bottom: "15px",
                                                            "&:hover": {
                                                                backgroundColor: "#FFA500",
                                                                color: "#000"
                                                            }
                                                        },
                                                        onClick: ()=>router_default().push("./createLoad/" + id),
                                                        children: "Add Load"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    sx: {
                                        width: 335,
                                        height: 360,
                                        direction: "column",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                        container: true,
                                        direction: "column",
                                        columns: 12,
                                        spacing: 2,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        paddingTop: "20px",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                item: true,
                                                xs: 6,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                    variant: "outlined",
                                                    sx: {
                                                        height: "94.45px",
                                                        width: "335px;",
                                                        backgroundColor: "#A9A9A9",
                                                        color: "#000",
                                                        "&:hover": {
                                                            backgroundColor: "#FFA500",
                                                            color: "#000"
                                                        }
                                                    },
                                                    onClick: async ()=>{
                                                        await handleSubmit();
                                                        await router_default().push("./sendEmail/" + id);
                                                    },
                                                    children: "Send Ticket"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                item: true,
                                                xs: 6,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                    variant: "outlined",
                                                    sx: {
                                                        height: "94.45px",
                                                        width: "335px;",
                                                        backgroundColor: "#A9A9A9",
                                                        color: "#000",
                                                        "&:hover": {
                                                            backgroundColor: "#FFA500",
                                                            color: "#000"
                                                        }
                                                    },
                                                    onClick: ()=>{
                                                        router_default().push("./createTicket/" + id);
                                                    },
                                                    children: "Create Ticket"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                item: true,
                                                xs: 10,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                    variant: "outlined",
                                                    sx: {
                                                        height: "64.45px",
                                                        width: "335px;",
                                                        backgroundColor: "#fff",
                                                        color: "#000",
                                                        "&:hover": {
                                                            backgroundColor: "#FFA500",
                                                            color: "#000"
                                                        }
                                                    },
                                                    onClick: ()=>router_default().push("./loadData/" + id),
                                                    children: "View Load"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [311,675,461], () => (__webpack_exec__(506)));
module.exports = __webpack_exports__;

})();