"use strict";
(() => {
var exports = {};
exports.id = 576;
exports.ids = [576,157];
exports.modules = {

/***/ 666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Details),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: ./pages/components/Layout.js
var Layout = __webpack_require__(8461);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: external "@mui/material/Tabs"
const Tabs_namespaceObject = require("@mui/material/Tabs");
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Tab"
const Tab_namespaceObject = require("@mui/material/Tab");
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: external "@mui/x-date-pickers/TimePicker"
const TimePicker_namespaceObject = require("@mui/x-date-pickers/TimePicker");
;// CONCATENATED MODULE: external "@mui/x-date-pickers/LocalizationProvider"
const LocalizationProvider_namespaceObject = require("@mui/x-date-pickers/LocalizationProvider");
;// CONCATENATED MODULE: external "@mui/x-date-pickers/AdapterDateFns"
const AdapterDateFns_namespaceObject = require("@mui/x-date-pickers/AdapterDateFns");
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "@mui/material/NoSsr"
var NoSsr_ = __webpack_require__(3534);
var NoSsr_default = /*#__PURE__*/__webpack_require__.n(NoSsr_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./pages/dashboard/ticketCon/[id].js

















//Tabs
function TabPanel(props) {
    const { children , value , index , ...other } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        role: "tabpanel",
        hidden: value !== index,
        id: `${index}`,
        "aria-labelledby": `tab-${index}`,
        ...other,
        children: value === index && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            sx: {
                p: 2
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                children: children
            })
        })
    });
}
TabPanel.propTypes = {
    children: (external_prop_types_default()).node,
    index: (external_prop_types_default()).number.isRequired,
    value: (external_prop_types_default()).number.isRequired
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}
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
          lastName
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
            lastName
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
        revalidate: 3
    };
};
function Details({ data , id  }) {
    //Hauling For State
    const [startTimeInput, setStartTimeInput] = external_react_.useState(0);
    const [endTimeInput, setEndTimeInput] = external_react_.useState(0);
    const [contractorInput, setContractorInput] = external_react_.useState("");
    const [deliveryLocationInput, setDeliveryLocationInput] = external_react_.useState("");
    const [notesInput, setNotesInput] = external_react_.useState("");
    const [phoneClientInput, setPhoneClientInput] = external_react_.useState(0);
    const [totalLoadsInput, setTotalLoadsInput] = external_react_.useState(0);
    const [totalHoursInput, setTotalHoursInput] = external_react_.useState("");
    const [customerNameInput, setCustomerNameInput] = external_react_.useState("");
    //Who and For Hauling State
    const [ticket_idInput, setTicket_idInput] = external_react_.useState("");
    //Tab State
    const [value, setValue] = external_react_.useState(0);
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    const handleSubmit = async (e)=>{
        await setTicket_idInput(e);
        await setPhoneClientInput(e);
        // Prep Payload
        const payload = await {
            ticket_id: ticket_idInput,
            deliveryLocation: deliveryLocationInput,
            contractor: contractorInput,
            customerName: customerNameInput,
            totalLoads: totalLoadsInput,
            startTime: String(startTimeInput),
            endTime: String(endTimeInput),
            totalHours: totalHoursInput,
            notes: notesInput,
            phone: Number(phoneClientInput)
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
      mutation MyMutation($ticket_id: Int = 0, $contractor: String = "", $customerName: String = "", $deliveryLocation: String = "", $endTime: String = "", $notes: String = "", $phone: Int = 0, $startTime: String = "", $totalHours: String = "", $totalLoads: Int = 0) {
        update_Tickets_by_pk(pk_columns: {ticket_id: $ticket_id}, _set: {contractor: $contractor, customerName: $customerName, deliveryLocation: $deliveryLocation, endTime: $endTime, notes: $notes, phone: $phone, startTime: $startTime, totalHours: $totalHours, totalLoads: $totalLoads}) {
          contractor
          customerName
          deliveryLocation
          endTime
          notes
          phone
          startTime
          ticket_id
          totalHours
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
        router_default().push("../../dashboard/" + id);
    };
    const { data: session , status  } = (0,react_.useSession)();
    const [isLoading, setIsLoading] = external_react_.useState(false);
    const [ticketData, setTicketData] = external_react_.useState("");
    external_react_.useEffect(async ()=>{
        if (status === "authenticated") {
            {
                await setTicketData(JSON.parse(localStorage.getItem("data")));
                return ()=>{};
            }
        }
    }, [
        status
    ]);
    function getD() {
        new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(setContractorInput(data.data.Users.map((user)=>{
                    if (user.uid === id) {
                        return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>ticket.contractor);
                    }
                }).join("")), setCustomerNameInput(data.data.Users.map((user)=>{
                    if (user.uid === id) {
                        return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>ticket.customerName);
                    }
                }).join("")), setPhoneClientInput(data.data.Users.map((user)=>{
                    if (user.uid === id) {
                        return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>ticket.phone);
                    }
                }).join("")), setStartTimeInput(data.data.Users.map((user)=>{
                    if (user.uid === id) {
                        return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>ticket.startTime);
                    }
                }).join("")), setEndTimeInput(data.data.Users.map((user)=>{
                    if (user.uid === id) {
                        return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>ticket.endTime);
                    }
                }).join("")), setTotalHoursInput(data.data.Users.map((user)=>{
                    if (user.uid === id) {
                        return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>ticket.totalHours);
                    }
                }).join("")), setTotalLoadsInput(data.data.Users.map((user)=>{
                    if (user.uid === id) {
                        return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>ticket.totalLoads);
                    }
                }).join("")), setDeliveryLocationInput(data.data.Users.map((user)=>{
                    if (user.uid === id) {
                        return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>ticket.deliveryLocation);
                    }
                }).join("")), setNotesInput(data.data.Users.map((user)=>{
                    if (user.uid === id) {
                        return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>ticket.notes);
                    }
                }).join("")), setTicket_idInput(data.data.Users.map((user)=>{
                    if (user.uid === id) {
                        return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>ticket.ticket_id);
                    }
                }).join("")), setIsLoading(true));
                return ()=>{
                    true;
                };
            }, 1000);
        });
    }
    isLoading ? console.log("success") : getD();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Layout["default"], {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((NoSsr_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        container: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                            container: true,
                            columns: 16,
                            direction: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    xs: 9
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    xs: 4,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                        disabled: true,
                                        InputProps: {
                                            readOnly: true
                                        },
                                        id: "standard-read-only-input",
                                        variant: "standard",
                                        type: "number",
                                        value: ticket_idInput,
                                        name: "ticket_idInput",
                                        onChange: (e)=>setTicket_idInput(Number(ticketData.ticket_id))
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            width: "100%"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                sx: {
                                    borderBottom: 1,
                                    borderColor: "divider"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Tabs_default()), {
                                    value: value,
                                    onChange: handleChange,
                                    "aria-label": "app tabs",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                            label: "Hauling For",
                                            ...a11yProps(0)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                            label: "Who's Hauling",
                                            ...a11yProps(1)
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TabPanel, {
                                value: value,
                                index: 0,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        "& .MuiTextField-root": {
                                            m: 1,
                                            width: "25ch"
                                        }
                                    },
                                    noValidate: true,
                                    autoComplete: "off",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                            container: true,
                                            direction: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                onSubmit: handleSubmit,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                        container: true,
                                                        columns: 12,
                                                        direction: "column",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                                item: true,
                                                                xs: 10,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                                    required: true,
                                                                    id: "outlined-required",
                                                                    type: "text",
                                                                    label: "Contractor",
                                                                    value: contractorInput,
                                                                    name: "contractorInput",
                                                                    style: {
                                                                        width: 335
                                                                    },
                                                                    onChange: (e)=>setContractorInput(e.target.value)
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                                item: true,
                                                                xs: 10,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                                    required: true,
                                                                    id: "outlined-required",
                                                                    type: "text",
                                                                    label: "Customer Name",
                                                                    name: "customerNameInput",
                                                                    value: customerNameInput,
                                                                    style: {
                                                                        width: 335
                                                                    },
                                                                    onChange: (e)=>setCustomerNameInput(e.target.value)
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                                item: true,
                                                                xs: 10,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                                    required: true,
                                                                    id: "outlined-required",
                                                                    label: "Phone No",
                                                                    value: phoneClientInput,
                                                                    type: "text",
                                                                    style: {
                                                                        width: 335
                                                                    },
                                                                    onChange: (e)=>setPhoneClientInput(e.target.value)
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                        container: true,
                                                        direction: "row",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LocalizationProvider_namespaceObject.LocalizationProvider, {
                                                            dateAdapter: AdapterDateFns_namespaceObject.AdapterDateFns,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                                    item: true,
                                                                    xs: 5.6,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TimePicker_namespaceObject.TimePicker, {
                                                                        label: "Start Time",
                                                                        id: "outlined-required",
                                                                        value: startTimeInput,
                                                                        name: "startTimeInput",
                                                                        onChange: (e)=>setStartTimeInput(e),
                                                                        renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                                                ...params,
                                                                                style: {
                                                                                    width: 155
                                                                                }
                                                                            })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                                    item: true,
                                                                    xs: 6,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(TimePicker_namespaceObject.TimePicker, {
                                                                            label: "End Time",
                                                                            id: "outlined-required",
                                                                            value: endTimeInput,
                                                                            name: "endTimeInput",
                                                                            onChange: (e)=>setEndTimeInput(e),
                                                                            renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                                                    ...params,
                                                                                    style: {
                                                                                        width: 170
                                                                                    }
                                                                                })
                                                                        }),
                                                                        " "
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                        container: true,
                                                        columns: 12,
                                                        direction: "column",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                                item: true,
                                                                xs: 10,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                                    id: "outlined-number",
                                                                    label: "Total Hours",
                                                                    name: "totalHoursInput",
                                                                    type: "text",
                                                                    value: totalHoursInput,
                                                                    InputLabelProps: {
                                                                        shrink: true
                                                                    },
                                                                    style: {
                                                                        width: 335
                                                                    },
                                                                    onChange: (e)=>setTotalHoursInput(e.target.value)
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                                item: true,
                                                                xs: 10,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                                    required: true,
                                                                    id: "outlined-required",
                                                                    label: "Delivery Address",
                                                                    name: "deliveryLocationInput",
                                                                    type: "text",
                                                                    // defaultValue={ticketData.deliveryLocation}
                                                                    value: deliveryLocationInput,
                                                                    style: {
                                                                        width: 335
                                                                    },
                                                                    onChange: (e)=>setDeliveryLocationInput(e.target.value)
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                                item: true,
                                                                xs: 10,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                                    id: "outlined-multiline-static",
                                                                    label: "Notes/Details for Delivery",
                                                                    name: "notesInput",
                                                                    multiline: true,
                                                                    rows: 4,
                                                                    // defaultValue={ticketData.notes}
                                                                    value: notesInput,
                                                                    type: "text",
                                                                    style: {
                                                                        width: 335
                                                                    },
                                                                    onChange: (e)=>setNotesInput(e.target.value)
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                                item: true,
                                                                xs: 12,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
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
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                                item: true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
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
                                                                    onClick: ()=>router_default().push("/dashboard/" + id),
                                                                    children: "Cancel"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TabPanel, {
                                value: value,
                                index: 1,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    sx: {
                                        "& .MuiTextField-root": {
                                            width: "25ch",
                                            paddingBottom: "15px"
                                        }
                                    },
                                    noValidate: true,
                                    autoComplete: "off",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                        container: true,
                                        direction: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                            container: true,
                                            columns: 12,
                                            direction: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                            item: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                                disabled: true,
                                                                id: "outlined-disabled",
                                                                label: "Company Name",
                                                                defaultValue: data.data.Users.map((user)=>{
                                                                    if (user.uid === id) {
                                                                        return user.company;
                                                                    }
                                                                }),
                                                                style: {
                                                                    width: 335
                                                                }
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                            item: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                                disabled: true,
                                                                id: "outlined-disabled",
                                                                label: "Driver",
                                                                defaultValue: data.data.Users.map((user)=>{
                                                                    if (user.uid === id) {
                                                                        return user.driverLic;
                                                                    }
                                                                }),
                                                                style: {
                                                                    width: 335
                                                                }
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                            item: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                                disabled: true,
                                                                id: "outlined-disabled",
                                                                label: "Truck No",
                                                                defaultValue: data.data.Users.map((user)=>{
                                                                    if (user.uid === id) {
                                                                        return user.truckPlateNumber;
                                                                    }
                                                                }),
                                                                style: {
                                                                    width: 335
                                                                }
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                            item: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                                disabled: true,
                                                                id: "outlined-disabled",
                                                                label: "Phone No",
                                                                defaultValue: data.data.Users.map((user)=>{
                                                                    if (user.uid === id) {
                                                                        return user.phone;
                                                                    }
                                                                }),
                                                                style: {
                                                                    width: 335
                                                                }
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                            item: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
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
                                                                onClick: ()=>router_default().push("../sendEmail/" + id),
                                                                children: "Send"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
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
                                                        onClick: ()=>router_default().push("../loadData/" + id),
                                                        children: "View Load"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
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
var __webpack_exports__ = __webpack_require__.X(0, [311,675,461], () => (__webpack_exec__(666)));
module.exports = __webpack_exports__;

})();