import { Container, Grid, Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import Layout from '../../components/Layout'
import * as React from 'react'
import Box from '@mui/material/Box'
import { useSession } from 'next-auth/react'
import NoSsr from '@mui/material/NoSsr'
import Router from 'next/router'

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
    }
  )

  const data = await response.json()

  return {
    props: { data, id }
    }
}

export default function Details ({ data, id }) {
  const [ticketData, setTicketData] = React.useState('')
  const [isLoading, setisLoading] = React.useState('')
  const { data: session, status } = useSession()
 //Set email State
 const [email1, setEmail1] = React.useState('')
 const [email2, setEmail2] = React.useState('')
 const [email3, setEmail3] = React.useState('')
 
  React.useEffect(() => {
    if (status === 'authenticated') {
      //  getD()
      setTicketData(JSON.parse(localStorage.getItem('data')))
    }
    return () => {}
  }, [status])

  if (isLoading === false) {
    return (
      <>
        <h1>Loading</h1>
      </>
    )
  } else {
    function myFunction (someArray) {
      for (let i = 0; i < someArray.length; i++) {
        someArray[i]
      }

      return someArray
    }

   
    //Create variables
   const emailPayload= data.data.Users.map(user => {
      if (user.uid === id) {
        let userInfo = {
 companyInput: ticketData? user.company : '', 
driverLic: ticketData ? user.driverLic :'',
truckPlateNumber: ticketData ? user.truckPlateNumber : '',

phoneClientInput: ticketData? user.Tickets.filter(
  item => item.ticket_id === ticketData.ticket_id
).map(ticket => ticket.phone).toString():'',

startTimeInput: ticketData ? data.data.Users.map(user => {
  if (user.uid === id) {
    return user.Tickets.filter(
      item => item.ticket_id === ticketData.ticket_id
    ).map(ticket => ticket.startTime)
  }
}).toString() :'',
endTimeInput: ticketData ? data.data.Users.map(user => {
  if (user.uid === id) {
    return user.Tickets.filter(
      item => item.ticket_id === ticketData.ticket_id
    ).map(ticket => ticket.endTime)
  }
}).toString() : '',
contractorInput: ticketData? data.data.Users.map(user => {
  if (user.uid === id) {
    return user.Tickets.filter(
      item => item.ticket_id === ticketData.ticket_id
    ).map(ticket => ticket.contractor)
  }
}).toString():'',
deliveryLocationInput: ticketData ? data.data.Users.map(user => {
  if (user.uid === id) {
    return user.Tickets.filter(
      item => item.ticket_id === ticketData.ticket_id
    ).map(ticket => ticket.deliveryLocation)
  }
}).toString(): '',
notesInput: ticketData ? data.data.Users.map(user => {
  if (user.uid === id) {
    return user.Tickets.filter(
      item => item.ticket_id === ticketData.ticket_id
    ).map(ticket => ticket.notes)
  }
}).toString() : '',
phoneInput: ticketData ? data.data.Users.map(user => {
  if (user.uid === id) {
    return user.phone
  }
}).toString()
: '',
totalLoadsInput: ticketData
? data.data.Users.map(user => {
    if (user.uid === id) {
      return user.Tickets.filter(
        item => item.ticket_id === ticketData.ticket_id
      )
      .map(ticket => ticket.totalLoads)
      .reduce((a, b) => a + b, 0)

    }
  })
  .toString()
: '',
totalHoursInput: ticketData
? data.data.Users.map(user => {
    if (user.uid === id) {
      return user.Tickets.filter(
        item => item.ticket_id === ticketData.ticket_id
      )
      .map(ticket => ticket.totalHours)
    }
  })
  .toString()
: '',
loadIdInput: ticketData ?  myFunction(
  data.data.Users.map(user => {
      user.uid === id
      return user.Tickets.filter(
        item => item.ticket_id === ticketData.ticket_id
      ).map(ticket => {
        return ticket.Loads.map(
          item => item 
        )
      })
    
  })
):'',
customerName: ticketData
? data.data.Users.map(user => {
    if (user.uid === id) {
      return user.Tickets.filter(
        item => item.ticket_id === ticketData.ticket_id
      ).map(ticket => ticket.customerName)
    }
  }).toString()
: ''
        }
        return userInfo 
      }
    })

   const lds = JSON.stringify(emailPayload[0].loadIdInput).replaceAll('[','').replaceAll(']','')
  //  .replaceAll('[','').replaceAll(']','')

  //  for(let i = 0; i < lds.length; i++){
    // console.log(lds)
  //      for(let i = 0; i < lds.length; i++){
  //     var nL = console.log(JSON.stringify(lds[i]).replaceAll('[','').replaceAll(']','').split('},'))
  //       return nL
  // }
  
  // console.log( ld)
   

    const st = new Date()
    const et = new Date()

    st.getTime(emailPayload[0].startTimeInput)
    et.getTime(emailPayload[0].endTimeInput)


const loads =  emailPayload[0].loadIdInput[0];

    async function handleSubmit (e) {



  
      const SG = {
        company: emailPayload[0].companyInput,
        driverLic: emailPayload[0].driverLic,
        truckNumber: emailPayload[0].truckPlateNumber,
        clientPhone: emailPayload[0].phoneClientInput,
        startTime: st.toLocaleTimeString(),
        endTime: et.toLocaleTimeString(),
        contractor: emailPayload[0].contractorInput,
        deliveryLocation: emailPayload[0].deliveryLocationInput,
        notes: emailPayload[0].notesInput,
        phone: emailPayload[0].phoneInput,
        totalLoads: emailPayload[0].totalLoadsInput,
        totalHours: emailPayload[0].totalHoursInput,
        customerName: emailPayload[0].customerName,
        loadInfo: lds,
        email1: email1,
        email2: email2,
        email3: email3,
      }
      try {
        await fetch('/api/mail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(SG)
        })
      } catch (err) {
        // console.log(err)
      }

      // console.log(SG)
      // Router.push('/dashboard/' + id);
    }
    
    return (
      <>
        <Layout />
        <br />
        <NoSsr>
          <Container>
            <form onSubmit={handleSubmit}>
              <Box>
                <Grid
                  container
                  columns={12}
                  direction='column'
                  justifyContent='center'
                  alignItems='center'
                  spacing={2}
                >
                  <Grid item>
                    <TextField
                      required
                      id='outlined-required'
                      label='Email 1'
                      name='email1'
                      type='text'
                      value={email1}
                      style={{ width: 335 }}
                      onChange={e => setEmail1(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid item>
                    <TextField
                      id='outlined'
                      label='Email 2'
                      name='email2'
                      type='text'
                      value={email2}
                      style={{ width: 335 }}
                      onChange={e => setEmail2(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid item>
                    <TextField
                      id='outlined'
                      label='Email 3'
                      name='email3'
                      type='text'
                      value={email3}
                      style={{ width: 335 }}
                      onChange={e => setEmail3(e.target.value)}
                    ></TextField>
                  </Grid>
                </Grid>
              </Box>
              <h4>Ticket Preview</h4>
              <Box >
                <Grid
                  container
                  row={12}
                  rowSpacing={1}
                  direction='row'
                  //   justifyContent='center'
                  //   alignItems='center'
                  sx={{ border: '1px solid #000', borderRadius: '5px' }}
                >
                  <br />
                  <Grid item xs={6}>
                    <TextField
                      disabled
                      id='standard-read-only-input'
                      variant='standard'
                      type='text'
                      label='Contractor'
                      value={emailPayload[0].contractorInput}
                      name='contractorInput'
                      //  style={{ width: 335 }}
                      // onChange={e => setCustomerNameInput(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      disabled
                      id='standard-read-only-input'
                      variant='standard'
                      type='text'
                      label='Customer Name'
                      value={emailPayload[0].customerName}
                      name='customerNameInput'
                      //  style={{ width: 335 }}
                      // onChange={e => setCustomerNameInput(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      disabled
                      id='standard-read-only-input'
                      variant='standard'
                      type='text'
                      label='Phone No.'
                      value={emailPayload[0].phoneInput}
                      name='phoneInput'
                      //  style={{ width: 335 }}
                      // onChange={e => setPhoneInput(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      disabled
                      id='standard-read-only-input'
                      variant='standard'
                      type='text'
                      label='Company'
                      value={emailPayload[0].companyInput}
                      name='companyInput'
                      //  style={{ width: 335 }}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      disabled
                      id='standard-read-only-input'
                      variant='standard'
                      type='text'
                      label='Truck No'
                      value={emailPayload[0].truckPlateNumber}
                      name='truckNumberInput'
                      //  style={{ width: 335 }}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      disabled
                      id='standard-read-only-input'
                      variant='standard'
                      type='text'
                      label='Driver Lic'
                      value={emailPayload[0].driverLic}
                      name='driverLicInput'
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      disabled
                      id='standard-read-only-input'
                      variant='standard'
                      type='text'
                      label='Client Phone No'
                      value={emailPayload[0].phoneClientInput}
                      name='phoneClientInput'
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      disabled
                      id='standard-read-only-input'
                      variant='standard'
                      type='text'
                      label='Start Time'
                      value={st.toLocaleTimeString()}
                      name='startTimeInput'
                      //  style={{ width: 335 }}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      disabled
                      id='standard-read-only-input'
                      variant='standard'
                      type='text'
                      label='End Time'
                      value={et.toLocaleTimeString()}
                      name='endTimeInput'
                      //  style={{ width: 335 }}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      disabled
                      id='standard-read-only-input'
                      variant='standard'
                      type='text'
                      label='Total Hours'
                      value={emailPayload[0].totalHoursInput}
                      name='totalHoursInput'
                      //  style={{ width: 335 }}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      disabled
                      id='standard-read-only-input'
                      variant='standard'
                      type='text'
                      label='Delivery Address'
                      value={emailPayload[0].deliveryLocationInput}
                      name='deliveryLocationInput'
                      //  style={{ width: 335 }}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      disabled
                      id='standard-read-only-input'
                      variant='standard'
                      type='text'
                      label='Notes/Details for Delivery'
                      multiline
                      value={emailPayload[0].notesInput}
                      name='notesInput'
                      //  style={{ width: 335 }}
                    ></TextField>
                  </Grid>
                  <Box>
                    <Grid
                      container
                      direction='column'
                      justifyContent='center'
                      alignItems='center'
                    >
                      {data.data.Users.map(user => {
                        if (user.uid === id) {
                          return user.Tickets.filter(
                            item => item.ticket_id === ticketData.ticket_id
                          ).map(ticket => {
                            return ticket.Loads.filter(
                              item => item.ticket_id === ticketData.ticket_id
                            ).map(load => (
                              <Grid item key={load.load_id}>
                                <br />

                                <Grid
                                  container
                                  columns={12}
                                  direction='row'
                                  sx={{ border: '1px solid #000' }}
                                >
                                  <Grid item xs={3}>
                                    <TextField
                                      disabled
                                      id='standard-read-only-input'
                                      variant='filled'
                                      type='text'
                                      label='LOAD ID'
                                      value={load.load_id}
                                      name='loadID'
                                      // onChange={e =>
                                      //   setLoadIdInput(e.target.value)
                                      // }
                                    ></TextField>
                                  </Grid>
                                  <Grid item xs={6}></Grid>

                                  <Grid item xs={6}>
                                    <TextField
                                      disabled
                                      id='standard-read-only-input'
                                      variant='standard'
                                      type='text'
                                      label='SITE'
                                      value={load.loadSite}
                                      name='loadSite'
                                      // onChange={e =>
                                      //   setLoadSiteInput(e.target.value)
                                      // }
                                    ></TextField>
                                  </Grid>

                                  <Grid item xs={6}>
                                    <TextField
                                      disabled
                                      id='standard-read-only-input'
                                      variant='standard'
                                      type='text'
                                      label='TRIP NO'
                                      value={load.tripNumber}
                                      name='tripNo'
                                      // onChange={e =>
                                      //   setTripNumberInput(e.target.value)
                                      // }
                                    ></TextField>
                                  </Grid>

                                  <Grid item xs={6}>
                                    <TextField
                                      disabled
                                      id='standard-read-only-input'
                                      variant='standard'
                                      type='text'
                                      label='MATERIAL'
                                      value={load.Material}
                                      name='material'
                                      // onChange={e =>
                                      //   setMaterialInput(e.target.value)
                                      // }
                                    ></TextField>
                                  </Grid>

                                  <Grid item xs={6}>
                                    <TextField
                                      disabled
                                      id='standard-read-only-input'
                                      variant='standard'
                                      type='text'
                                      label='YARD/TONNAGE'
                                      value={load.ton}
                                      name='ton'
                                      // onChange={e =>
                                      //   setTonInput(e.target.value)
                                      // }
                                    ></TextField>
                                    <br />
                                  </Grid>
                                </Grid>
                              </Grid>
                            ))
                          })
                        }
                      })}

                      <Grid item xs={12}>
                        <TextField
                          disabled
                          id='standard-read-only-input'
                          variant='standard'
                          type='text'
                          label='Total Load'
                          value={emailPayload[0].totalLoadsInput}
                          name='totalLoadInput'
                          //  style={{ width: 335 }}
                          // onChange={e => setTotalLoadsInput(e.target.value)}
                        ></TextField>
                      </Grid>
                    </Grid>
                    <br />
                  </Box>
                </Grid>
                <br />
                <Button
                  variant='outlined'
                  sx={{
                    height: '64.45px',
                    width: '100%;',
                    backgroundColor: '#fff',
                    color: '#000',
                    '&:hover': {
                      backgroundColor: '#FFA500',
                      color: '#000'
                    }
                  }}
                  onClick={() => {
                    handleSubmit();
                    Router.push('/dashboard/' + id);
                  }}
                >
                  Send Email
                </Button>
              </Box>
            </form>
            <br />
            <Button
              variant='outlined'
              sx={{
                height: '64.45px',
                width: '100%;',
                backgroundColor: '#fff',
                color: '#000',
                '&:hover': {
                  backgroundColor: '#FFA500',
                  color: '#000'
                }
              }}
              onClick={() => Router.push('/dashboard/' + id)}
            >
              Dashboard
            </Button>
          </Container>
        </NoSsr>
      </>
    )
  }
}
Details.auth = {
  unauthorized: '/' // redirect to this url
}
