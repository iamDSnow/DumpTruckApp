"use strict";
(() => {
var exports = {};
exports.id = 663;
exports.ids = [663,157];
exports.modules = {

/***/ 2861:
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
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_NoSsr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3534);
/* harmony import */ var _mui_material_NoSsr__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_NoSsr__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);











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
        revalidate: 5
    };
};
function Details({ data , id  }) {
    const [email1, setEmail1] = react__WEBPACK_IMPORTED_MODULE_4__.useState("");
    const [email2, setEmail2] = react__WEBPACK_IMPORTED_MODULE_4__.useState("");
    const [email3, setEmail3] = react__WEBPACK_IMPORTED_MODULE_4__.useState("");
    const [companyInput, setCompanyInput] = react__WEBPACK_IMPORTED_MODULE_4__.useState("");
    const [driverLicInput, setDriverLicInput] = react__WEBPACK_IMPORTED_MODULE_4__.useState("");
    const [truckNumberInput, setTruckNumberInput] = react__WEBPACK_IMPORTED_MODULE_4__.useState("");
    const [phoneClientInput, setPhoneClientInput] = react__WEBPACK_IMPORTED_MODULE_4__.useState("");
    const [startTimeInput, setStartTimeInput] = react__WEBPACK_IMPORTED_MODULE_4__.useState(0);
    const [endTimeInput, setEndTimeInput] = react__WEBPACK_IMPORTED_MODULE_4__.useState(0);
    const [contractorInput, setContractorInput] = react__WEBPACK_IMPORTED_MODULE_4__.useState("");
    const [deliveryLocationInput, setDeliveryLocationInput] = react__WEBPACK_IMPORTED_MODULE_4__.useState("");
    const [notesInput, setNotesInput] = react__WEBPACK_IMPORTED_MODULE_4__.useState("");
    const [phoneInput, setPhoneInput] = react__WEBPACK_IMPORTED_MODULE_4__.useState(0);
    const [totalLoadsInput, setTotalLoadsInput] = react__WEBPACK_IMPORTED_MODULE_4__.useState(0);
    const [totalHoursInput, setTotalHoursInput] = react__WEBPACK_IMPORTED_MODULE_4__.useState("");
    const [customerNameInput, setCustomerNameInput] = react__WEBPACK_IMPORTED_MODULE_4__.useState("");
    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)();
    const [loadIdInput, setLoadIdInput] = react__WEBPACK_IMPORTED_MODULE_4__.useState([]);
    const [loadSiteInput, setLoadSiteInput] = react__WEBPACK_IMPORTED_MODULE_4__.useState("");
    const [tripNumberInput, setTripNumberInput] = react__WEBPACK_IMPORTED_MODULE_4__.useState("");
    const [materialInput, setMaterialInput] = react__WEBPACK_IMPORTED_MODULE_4__.useState("");
    const [tonInput, setTonInput] = react__WEBPACK_IMPORTED_MODULE_4__.useState("");
    const [ticketData, setTicketData] = react__WEBPACK_IMPORTED_MODULE_4__.useState("");
    const API = "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";
    react__WEBPACK_IMPORTED_MODULE_4__.useEffect(()=>{
        if (session.status === "authenticated") setContractorInput(data.data.Users.map((user)=>{
            if (user.uid === id) {
                return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>ticket.contractor);
            }
        }).join(""));
        setCustomerNameInput(data.data.Users.map((user)=>{
            if (user.uid === id) {
                return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>ticket.customerName);
            }
        }).join(""));
        setCustomerNameInput(data.data.Users.map((user)=>{
            if (user.uid === id) {
                return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>ticket.customerName);
            }
        }).join(""));
        setPhoneClientInput(data.data.Users.map((user)=>{
            if (user.uid === id) {
                return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>ticket.phone);
            }
        }).join(""));
        setStartTimeInput(data.data.Users.map((user)=>{
            if (user.uid === id) {
                return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>ticket.startTime);
            }
        }).join(""));
        setEndTimeInput(data.data.Users.map((user)=>{
            if (user.uid === id) {
                return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>ticket.endTime);
            }
        }).join(""));
        setTotalHoursInput(data.data.Users.map((user)=>{
            if (user.uid === id) {
                return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>ticket.totalHours);
            }
        }).join(""));
        setTotalLoadsInput(data.data.Users.map((user)=>{
            if (user.uid === id) {
                return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>ticket.totalLoads);
            }
        }).join(""));
        setDeliveryLocationInput(data.data.Users.map((user)=>{
            if (user.uid === id) {
                return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>ticket.deliveryLocation);
            }
        }).join(""));
        setNotesInput(data.data.Users.map((user)=>{
            if (user.uid === id) {
                return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>ticket.notes);
            }
        }).join(""));
        setDriverLicInput(data.data.Users.map((user)=>{
            if (user.uid === id) {
                return user.driverLic;
            }
        }).join(""));
        setTruckNumberInput(data.data.Users.map((user)=>{
            if (user.uid === id) {
                return user.truckPlateNumber;
            }
        }).join(""));
        setPhoneInput(data.data.Users.map((user)=>{
            if (user.uid === id) {
                return user.phone;
            }
        }).join(""));
        setCompanyInput(data.data.Users.map((user)=>{
            if (user.uid === id) {
                return user.company;
            }
        }).join(""));
        st.getTime(startTimeInput);
        et.getTime(endTimeInput);
        setLoadIdInput(data.data.Users.map((user)=>{
            if (user.uid === id) {
                return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>{
                    return ticket.Loads.filter((item)=>item.ticket_id === ticketData.ticket_id).map((load)=>load.load_id);
                });
            }
        }));
        setLoadSiteInput(data.data.Users.map((user)=>{
            if (user.uid === id) {
                return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>{
                    return ticket.Loads.filter((item)=>item.ticket_id === ticketData.ticket_id).map((load)=>load.loadSite);
                });
            }
        }));
        setTripNumberInput(data.data.Users.map((user)=>{
            if (user.uid === id) {
                return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>{
                    return ticket.Loads.filter((item)=>item.ticket_id === ticketData.ticket_id).map((load)=>load.tripNumber);
                });
            }
        }));
        setMaterialInput(data.data.Users.map((user)=>{
            if (user.uid === id) {
                return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>{
                    return ticket.Loads.filter((item)=>item.ticket_id === ticketData.ticket_id).map((load)=>load.Material);
                });
            }
        }));
        setTonInput(data.data.Users.map((user)=>{
            if (user.uid === id) {
                return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>{
                    return ticket.Loads.filter((item)=>item.ticket_id === ticketData.ticket_id).map((load)=>load.ton);
                });
            }
        }));
        setTicketData(JSON.parse(localStorage.getItem("data")));
    }, [
        session.status
    ]);
    const st = new Date();
    const et = new Date();
    // console.log( data.data.Users.map((user)=> {
    //     if(user.uid === id){
    //       return(
    //         user.Tickets.map((ticket , i )=>{
    //             if(ticket.ticket_id===ticketData.ticket_id ? console.log('error') : i === 0  ){
    //             return(
    //                 ticket.contractor
    //             )
    //             }
    //         })
    //       )
    //     }
    // }))
    // item => item.ticket_id === ticketData.ticket_id
    //    function tk(){
    //      const tick =}
    async function handleSubmit() {
        const SG = {
            company: companyInput,
            driverLic: driverLicInput,
            truckNumber: truckNumberInput,
            clientPhone: phoneClientInput,
            startTime: startTimeInput,
            endTime: endTimeInput,
            contractor: contractorInput,
            deliveryLocation: deliveryLocationInput,
            notes: notesInput,
            phone: phoneInput,
            totalLoads: totalLoadsInput,
            totalHours: totalHoursInput,
            customerName: customerNameInput,
            loadId: loadIdInput,
            loadSite: loadSiteInput,
            tripNumber: tripNumberInput,
            material: materialInput,
            ton: tonInput
        };
        await fetch("/api/mail.js", {
            method: "POST",
            body: JSON.stringify(SG)
        });
        fetch("/pages/api/mail.js", {
            method: "POST",
            headers: {
                ["key"]: API
            },
            body: JSON.stringify(SG)
        });
    }
    console.log(loadIdInput);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_NoSsr__WEBPACK_IMPORTED_MODULE_8___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                        container: true,
                                        columns: 12,
                                        direction: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        spacing: 2,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                item: true,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    required: true,
                                                    id: "outlined-required",
                                                    label: "Email 1",
                                                    name: "email1",
                                                    type: "text",
                                                    value: email1,
                                                    style: {
                                                        width: 335
                                                    },
                                                    onChange: (e)=>setEmail1(e.target.value)
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                item: true,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    id: "outlined",
                                                    label: "Email 2",
                                                    name: "email2",
                                                    type: "text",
                                                    value: email2,
                                                    style: {
                                                        width: 335
                                                    },
                                                    onChange: (e)=>setEmail2(e.target.value)
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                item: true,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    id: "outlined",
                                                    label: "Email 3",
                                                    name: "email3",
                                                    type: "text",
                                                    value: email3,
                                                    style: {
                                                        width: 335
                                                    },
                                                    onChange: (e)=>setEmail3(e.target.value)
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    children: "Ticket Preview"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    component: "form",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                            container: true,
                                            row: 12,
                                            rowSpacing: 1,
                                            direction: "row",
                                            //   justifyContent='center'
                                            //   alignItems='center'
                                            sx: {
                                                border: "1px solid #000",
                                                borderRadius: "5px"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                    item: true,
                                                    xs: 6,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        disabled: true,
                                                        id: "standard-read-only-input",
                                                        variant: "standard",
                                                        type: "text",
                                                        label: "Contractor",
                                                        value: contractorInput,
                                                        name: "contractorInput",
                                                        //  style={{ width: 335 }}
                                                        onChange: (e)=>setContractorInput(e.target.value)
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                    item: true,
                                                    xs: 6,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        disabled: true,
                                                        id: "standard-read-only-input",
                                                        variant: "standard",
                                                        type: "text",
                                                        label: "Customer Name",
                                                        value: customerNameInput,
                                                        name: "customerNameInput",
                                                        //  style={{ width: 335 }}
                                                        onChange: (e)=>setCustomerNameInput(e.target.value)
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                    item: true,
                                                    xs: 6,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        disabled: true,
                                                        id: "standard-read-only-input",
                                                        variant: "standard",
                                                        type: "text",
                                                        label: "Phone No.",
                                                        value: phoneInput,
                                                        name: "phoneInput",
                                                        //  style={{ width: 335 }}
                                                        onChange: (e)=>setPhoneInput(e.target.value)
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                    item: true,
                                                    xs: 6,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        disabled: true,
                                                        id: "standard-read-only-input",
                                                        variant: "standard",
                                                        type: "text",
                                                        label: "Company",
                                                        value: companyInput,
                                                        name: "companyInput",
                                                        //  style={{ width: 335 }}
                                                        onChange: (e)=>setCompanyInput(e.target.value)
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                    item: true,
                                                    xs: 6,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        disabled: true,
                                                        id: "standard-read-only-input",
                                                        variant: "standard",
                                                        type: "text",
                                                        label: "Truck No",
                                                        value: truckNumberInput,
                                                        name: "truckNumberInput",
                                                        //  style={{ width: 335 }}
                                                        onChange: (e)=>setTruckNumberInput(e.target.value)
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                    item: true,
                                                    xs: 6,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        disabled: true,
                                                        id: "standard-read-only-input",
                                                        variant: "standard",
                                                        type: "text",
                                                        label: "Driver Lic",
                                                        value: driverLicInput,
                                                        name: "driverLicInput",
                                                        onChange: (e)=>setDriverLic(e.target.value)
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                    item: true,
                                                    xs: 6,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        disabled: true,
                                                        id: "standard-read-only-input",
                                                        variant: "standard",
                                                        type: "text",
                                                        label: "Client Phone No",
                                                        value: phoneClientInput,
                                                        name: "phoneClientInput",
                                                        onChange: (e)=>setPhoneClientInput(e.target.value)
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                    item: true,
                                                    xs: 6,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        disabled: true,
                                                        id: "standard-read-only-input",
                                                        variant: "standard",
                                                        type: "text",
                                                        label: "Start Time",
                                                        value: st.toLocaleTimeString(),
                                                        name: "startTimeInput",
                                                        //  style={{ width: 335 }}
                                                        onChange: (e)=>setStartTimeInput(e.target.value)
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                    item: true,
                                                    xs: 6,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        disabled: true,
                                                        id: "standard-read-only-input",
                                                        variant: "standard",
                                                        type: "text",
                                                        label: "End Time",
                                                        value: et.toLocaleTimeString(),
                                                        name: "endTimeInput",
                                                        //  style={{ width: 335 }}
                                                        onChange: (e)=>setEndTimeInput(e.target.value)
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                    item: true,
                                                    xs: 6,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        disabled: true,
                                                        id: "standard-read-only-input",
                                                        variant: "standard",
                                                        type: "text",
                                                        label: "Total Hours",
                                                        value: totalHoursInput,
                                                        name: "totalHoursInput",
                                                        //  style={{ width: 335 }}
                                                        onChange: (e)=>setTotalHoursInput(e.target.value)
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                    item: true,
                                                    xs: 6,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        disabled: true,
                                                        id: "standard-read-only-input",
                                                        variant: "standard",
                                                        type: "text",
                                                        label: "Delivery Address",
                                                        value: deliveryLocationInput,
                                                        name: "deliveryLocationInput",
                                                        //  style={{ width: 335 }}
                                                        onChange: (e)=>setDeliveryLocationInput(e.target.value)
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                    item: true,
                                                    xs: 6,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        disabled: true,
                                                        id: "standard-read-only-input",
                                                        variant: "standard",
                                                        type: "text",
                                                        label: "Notes/Details for Delivery",
                                                        multiline: true,
                                                        value: notesInput,
                                                        name: "notesInput",
                                                        //  style={{ width: 335 }}
                                                        onChange: (e)=>setNotesInput(e.target.value)
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                            container: true,
                                                            direction: "column",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            children: [
                                                                data.data.Users.map((user)=>{
                                                                    if (user.uid === id) {
                                                                        return user.Tickets.filter((item)=>item.ticket_id === ticketData.ticket_id).map((ticket)=>{
                                                                            return ticket.Loads.filter((item)=>item.ticket_id === ticketData.ticket_id).map((load)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                                                    item: true,
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                                                            container: true,
                                                                                            columns: 12,
                                                                                            direction: "row",
                                                                                            sx: {
                                                                                                border: "1px solid #000"
                                                                                            },
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                                                                    item: true,
                                                                                                    xs: 3,
                                                                                                    direction: "row",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        disabled: true,
                                                                                                        id: "standard-read-only-input",
                                                                                                        variant: "filled",
                                                                                                        type: "text",
                                                                                                        label: "LOAD ID",
                                                                                                        value: load.load_id,
                                                                                                        name: "loadID"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                                                                    item: true,
                                                                                                    xs: 6,
                                                                                                    direction: "row"
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                                                                    item: true,
                                                                                                    xs: 6,
                                                                                                    direction: "row",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        disabled: true,
                                                                                                        id: "standard-read-only-input",
                                                                                                        variant: "standard",
                                                                                                        type: "text",
                                                                                                        label: "SITE",
                                                                                                        value: load.loadSite,
                                                                                                        name: "loadSite"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                                                                    item: true,
                                                                                                    xs: 6,
                                                                                                    direction: "row",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        disabled: true,
                                                                                                        id: "standard-read-only-input",
                                                                                                        variant: "standard",
                                                                                                        type: "text",
                                                                                                        label: "TRIP NO",
                                                                                                        value: load.tripNumber,
                                                                                                        name: "tripNo"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                                                                    item: true,
                                                                                                    xs: 6,
                                                                                                    direction: "row",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        disabled: true,
                                                                                                        id: "standard-read-only-input",
                                                                                                        variant: "standard",
                                                                                                        type: "text",
                                                                                                        label: "MATERIAL",
                                                                                                        value: load.Material,
                                                                                                        name: "material"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                                                                    item: true,
                                                                                                    xs: 6,
                                                                                                    direction: "row",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                            disabled: true,
                                                                                                            id: "standard-read-only-input",
                                                                                                            variant: "standard",
                                                                                                            type: "text",
                                                                                                            label: "YARD/TONNAGE",
                                                                                                            value: load.ton,
                                                                                                            name: "ton"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, load.load_id));
                                                                        });
                                                                    }
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                                    item: true,
                                                                    xs: 12,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                        disabled: true,
                                                                        id: "standard-read-only-input",
                                                                        variant: "standard",
                                                                        type: "text",
                                                                        label: "Total Load",
                                                                        value: totalLoadsInput,
                                                                        name: "totalLoadInput",
                                                                        //  style={{ width: 335 }}
                                                                        onChange: (e)=>setTotalLoadsInput(e.target.value)
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                            variant: "outlined",
                                            sx: {
                                                height: "64.45px",
                                                width: "100%;",
                                                backgroundColor: "#fff",
                                                color: "#000",
                                                "&:hover": {
                                                    backgroundColor: "#FFA500",
                                                    color: "#000"
                                                }
                                            },
                                            onClick: ()=>handleSubmit(),
                                            children: "Send Email"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            variant: "outlined",
                            sx: {
                                height: "64.45px",
                                width: "100%;",
                                backgroundColor: "#fff",
                                color: "#000",
                                "&:hover": {
                                    backgroundColor: "#FFA500",
                                    color: "#000"
                                }
                            },
                            onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_9___default().push("../../dashboard/" + id),
                            children: "Dashboard"
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
var __webpack_exports__ = __webpack_require__.X(0, [311,675,461], () => (__webpack_exec__(2861)));
module.exports = __webpack_exports__;

})();