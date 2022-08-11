import { Container, Grid, Button, FormHelperText } from '@mui/material'
import { Divider } from '@mui/material'
import TextField from '@mui/material/TextField'
import Layout from '../../components/Layout'
import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { useSession, getSession } from 'next-auth/react'
import NoSsr from '@mui/material/NoSsr';
import { TicketContext } from '../../components/helper/context'


//Tabs
function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps (index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export const getStaticPaths = async () => {
  const res = await fetch('https://just-chamois-38.hasura.app/v1/graphql', {
    method: 'POST',
    headers: {
      ['x-hasura-admin-secret']: process.env.NEXT_PUBLIC_HASURA_SECRET
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
  })
  const data = await res.json()
  const paths = data.data.Users.map(user => {
    return {
      params: { id: user.uid.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async context => {
  const id = context.params.id
  await fetch('https://just-chamois-38.hasura.app/v1/graphql' + id)

  const response = await fetch(
    'https://just-chamois-38.hasura.app/v1/graphql',
    {
      method: 'POST',
      headers: {
        ['x-hasura-admin-secret']: process.env.NEXT_PUBLIC_HASURA_SECRET
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
    }
  )

  const data = await response.json()

  return {
    props: { data, id },
    revalidate: 10,
  }
}

export default function Details ({ data, id }) {
  // console.log(data)

  const [startTimeInput, setStartTimeInput] = React.useState(0)
  const [tabValueInput, setTabValueInput] = React.useState(0)
  const [value, setValue] = React.useState(0)
  const [endTimeInput, setEndTimeInput] = React.useState(0)
  const [contractorInput, setContractorInput] = React.useState("")
  const [deliveryLocationInput, setDeliveryLocationInput] = React.useState("")
  const [notesInput, setNotesInput] = React.useState('')
  const [phoneInput, setPhoneInput] = React.useState(0)
  const [totalLoadsInput, setTotalLoadsInput] = React.useState(0)
  const [totalHoursInput, setTotalHoursInput] = React.useState('')
  const [customerNameInput, setCustomerNameInput] = React.useState('')
  const [ticket_idInput, setTicket_idInput] = React.useState('')
  const [checks, setChecks] = React.useState(false)




const handleSubmit = async (e)=>{

// await  setNotesInput(e) 
//  await setStartTimeInput(e)
//  await setEndTimeInput(e)
// await  setContractorInput(e)
// await  setDeliveryLocationInput(e)
//  await setPhoneInput(e)
// await  setTotalLoadsInput(e)
//  await setTotalHoursInput(e)
// await  setCustomerNameInput(Inpute)


console.log(
  contractorInput,
  deliveryLocationInput
  )
 

// Prep Payload
// const payload = await {
//   ticket_id: ticket_idInput,
//   // deliveryLocation: deliveryLocationInput,
//   // contractor: contractorInput,
//   // customerName: customerNameInput,
//   // totalLoads: totalLoadsInput,
//   // startTime: startTimeInput,
//   // endTime: endTimeInput,
//   // totalHours: totalHoursInput,
//   notes: notesInput,
//   // phone: phoneInput,
 
// };

// console.log("payload ready..." + JSON.stringify(payload));

// If User
//   if (payload) {
//     console.log("ran");
//     async function fetchGraphQL(operationsDoc, operationName, variables) {
//       const result = await fetch(
//         "https://just-chamois-38.hasura.app/v1/graphql",
//         {
//           method: "POST",
//           headers: { ["x-hasura-admin-secret"]: process.env.HASURA_SECRET },
//           body: JSON.stringify({
//             query: operationsDoc,
//             variables: variables,
//             operationName: operationName,
//           }),
//         }
//       );

//       return await result.json();
//     }

//     const operationsDoc = `
//     mutation MyMutation($_eq: uuid = "${id}", $ticket_id: String = "", $contractor: String = "", $customerName: String = "", $deliveryLocation: String = "", $notes: String = "", $totalHours: String = "", $totalLoads: Number = "", $startTime: String = "", $endTime: String = ) {
//       update_Tickets_by_pk(pk_columns: {ticket_id: $ticket_id}, _set: {contractor: $contractor, customerName: $customerName, phone: $phone, notes: $notes, deliveryLocation: $deliveryLocation, totalHours: $totalHours, totalLoads: $totalLoads, endTime: $endTime}) {
//         totalLoads
//         totalHours
//         startTime
//         phone
//         notes
//         ticket_id
//         endTime
//         deliveryLocation
//         customerName
//         contractor
//         Loads {
//           tripNumber
//           ticket_id
//           load_id
//           loadSite
//           Material
//         }
//       }
//     }
//   `;




//  function executeMyMutation() {
//   return fetchGraphQL(
//     operationsDoc,
//     "MyMutation",
//     {}
//   );
// }

// async function startExecuteMyMutation() {
//   const { errors, data } = await executeMyMutation();

//       if (errors) {
//         // handle those errors like a pro
//         console.error(errors);
//       }

//       // do something great with this precious data
//       console.log(data);
//       console.log("ran");
//     }

//     startExecuteMyMutation();


//   }
}

  const handleChange = async (event, newValue) => {
    setValue(newValue)
    
    
  }
  const session = useSession();
  const [gM, setGM] = React.useState('');
  const {dT} = React.useContext(TicketContext);
  const [ticketData, setTicketData] = React.useState('');

  React.useEffect(() => {
    if (session.status === 'authenticated')
      return setGM(session.data.user.email)
     

// getD()

 setTicketData(JSON.parse(localStorage.getItem('data')));

//  const mydate = new Date(ticketData.startTime);

setTicket_idInput(ticketData.ticket_id)
// setContractorInput(ticketData.contractor)

// setTicketData2(data.data.Users.map((user)=>{
//   return(
//     (user.Tickets.map((ticket)=>{
      
//         if(ticket.ticket_id==ticketData.ticket_id){
//           return ( ticket
//             )}
        
      
//     }))
//   )
// }))
  }, [session.status])




  // function getD() {new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve(
  //      dT
  //       ) 
  //           }, 1000)
  //         })}
         
  
  //               console.log(dT)

  

  // if(session.status === "loading"){
  //   console.log('still loading')
  // }
  // if(session.status === "authenticated"){


  

  return (
    <>
      <Layout />
      <NoSsr>
      <Box container>
        <Grid
          container
          columns={16}
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Grid item xs={9}>
          </Grid>
          <Grid item xs={4}>
            <p>{`TICKET: `+ticketData.ticket_id}</p>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={tabValueInput}
            onChange={handleChange}
            aria-label='basic tabs example'
          >
            <Tab label='Hauling For' {...a11yProps(0)} />
            <Tab label="Who's Hauling" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete='off'
          >
           
            <Grid
              container
              direction='column'
              justifyContent='center'
              alignItems='center'
            >
                <form onSubmit={handleSubmit}>
              <Grid
                container
                columns={12}
                direction='column'
                justifyContent='center'
                alignItems='center'
              >
               
                <Grid item xs={10}>
                  <TextField
                    required
                    // id='outlined-required'
                    type="text"
                    label='Contractor'
                    value={contractorInput }
                    name='contractorInput'
                    style={{ width: 335 }}
                    onChange={(e) => setContractorInput(e.target.value)}

                  />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    required
                    id='outlined-required'
                    type="text"
                    label='Home Owner'
                    // defaultValue={ticketData.customerName}
                    value={customerNameInput}
                    style={{ width: 335 }}
                    onChange={(e) => setCustomerNameInput(e.target.value)}

                  />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    required
                    id='outlined-required'
                    label='Phone No'
                    // defaultValue={ticketData.phone}
                    value={phoneInput}
                    type="text"
                    style={{ width: 335 }}
                    onChange={(e) => setPhoneInput(e.target.value)}

                  />
                </Grid>
              </Grid>
              <Grid
                container
                rows={12}
                direction='row'
                md={4}
                spacing={{ xs: 1, md: 6 }}
              >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Grid item xs={6} md={5}>
                    <TimePicker
                      label='Start Time'
                      id='outlined-required'
                      value={startTimeInput}
                      onChange={(e) => setStartTimeInput(e)}

                      renderInput={(params) => <TextField {...params} style={{ width: 155 }} />}


                      
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TimePicker
                      label='End Time'
                      id='outlined-required'
                      value={endTimeInput}
                      onChange={(e) => setEndTimeInput(e)}
                      renderInput={params => (
                        <TextField {...params} style={{ width: 170 }} />
                      )}
                    />{' '}
                  </Grid>
                </LocalizationProvider>
              </Grid>
              <Grid
                container
                columns={12}
                direction='column'
                justifyContent='center'
                alignItems='center'
              >
                <Grid item xs={10}>
                  <TextField
                    id='outlined-number'
                    label='Total Hours'
                    type='number'
                    // defaultValue={ticketData.totalHours}
                    value={totalHoursInput}
                    InputLabelProps={{
                      shrink: true
                    }}
                    style={{ width: 335 }}
                    onChange={(e) => setTotalHoursInput(e.target.value)}

                  />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    required
                    id='outlined-required'
                    label='Delivery Address'
                    type="text"
                    // defaultValue={ticketData.deliveryLocation}
                    value={deliveryLocationInput}
                    style={{ width: 335 }}
                    onChange={(e) => setDeliveryLocationInput(e.target.value)}

                  />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    id='outlined-multiline-static'
                    label='Notes/Details for Delivery'
                    multiline
                    rows={4}
                    // defaultValue={ticketData.notes}
                    value={notesInput}
                    type="text"
                    style={{ width: 335 }}
                    onChange={(e) => setNotesInput(e.target.value)}
                    

                  />
                </Grid>
              
              </Grid>
              <br />
              <Grid
                container
                rows={12}
                direction='row'
                md={4}
                spacing={{ xs: 3, md: 9 }}
              >
                <Grid item xs={6} md={5}>
                  <Button
                  type="button" 
                  onClick={handleChange}
                    variant='outlined'
                    sx={{
                      height: '64.45px',
                      width: '160px;',
                      backgroundColor: '#A9A9A9',
                      color: '#000',
                      borderColor: 'transparent',
                      '&:hover': {
                        backgroundColor: '#FFA500',
                        color: '#000'}}
                      }
                         >
                    Save
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant='outlined'
                    sx={{
                      height: '64.45px',
                      width: '170px;',
                      backgroundColor: '#A9A9A9',
                      borderColor: 'transparent',
                      color: '#000',
                      '&:hover': {
                        backgroundColor: '#FFA500',
                        color: '#000'
                      }
                    }}
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
              </form>
            </Grid>
            <Grid item xs={10}>
                  <Button
                    type='button'
                    variant='outlined'
                    sx={{
                      height: '64.45px',
                      width: '335px;',
                      backgroundColor: '#fff',
                      color: '#000',
                      '&:hover': {
                        backgroundColor: '#FFA500',
                        color: '#000'
                      }
                    }}
                  >
                    View Load
                  </Button>
                </Grid>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete='off'
          >
            <Grid
              container
              direction='column'
              justifyContent='center'
              alignItems='center'
            >
              <Grid
                container
                columns={12}
                direction='column'
                justifyContent='center'
                alignItems='center'
              >
                <Grid item xs={10}>
                  <TextField
                    required
                    id='outlined-required'
                    label='Company Name'
                    defaultValue=''
                    style={{ width: 335 }}
                  />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    required
                    id='outlined-required'
                    label='Driver'
                    defaultValue=''
                    style={{ width: 335 }}
                  />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    required
                    id='outlined-required'
                    label='Truck No'
                    defaultValue=''
                    style={{ width: 335 }}
                  />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    required
                    id='outlined-required'
                    label='Phone No'
                    defaultValue=''
                    style={{ width: 335 }}
                  />
                </Grid>
                <Grid item xs={10}>
                  <Button
                    variant='outlined'
                    sx={{
                      height: '64.45px',
                      width: '335px;',
                      backgroundColor: '#fff',
                      color: '#000',
                      '&:hover': {
                        backgroundColor: '#FFA500',
                        color: '#000'
                      }
                    }}
                  >
                    View Load
                  </Button>
                </Grid>
              </Grid>

              <br />
              <Grid
                container
                rows={12}
                direction='row'
                md={4}
                spacing={{ xs: 3, md: 9 }}
              >
                <Grid item xs={6} md={5}>
                  <Button
                    variant='outlined'
                    sx={{
                      height: '64.45px',
                      width: '160px;',
                      backgroundColor: '#A9A9A9',
                      color: '#000',
                      borderColor: 'transparent',
                      '&:hover': {
                        backgroundColor: '#FFA500',
                        color: '#000'
                      }
                    }}
                  >
                    Save
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant='outlined'
                    sx={{
                      height: '64.45px',
                      width: '170px;',
                      backgroundColor: '#A9A9A9',
                      borderColor: 'transparent',
                      color: '#000',
                      '&:hover': {
                        backgroundColor: '#FFA500',
                        color: '#000'
                      }
                    }}
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            
          </Box>
        </TabPanel>
      </Box>
      </NoSsr>
    </>
  )
}

