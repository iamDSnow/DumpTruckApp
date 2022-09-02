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
    props: { data, id },
    revalidate: 15
  }
}

export default function Details ({ data, id }) {
  const [ticketData, setTicketData] = React.useState('')
  const [isLoading, setisLoading] = React.useState('')
  const { data: session, status } = useSession()

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

    //Set email State
    const [email1, setEmail1] = React.useState('')
    const [email2, setEmail2] = React.useState('')
    const [email3, setEmail3] = React.useState('')
    //Create variables

    const companyInput = data.data.Users.map(user => {
      if (user.uid === id) {
        return user.company
      }
    }).join('')

    const driverLicInput = data.data.Users.map(user => {
      if (user.uid === id) {
        return user.driverLic
      }
    }).join('')

    const truckNumberInput = data.data.Users.map(user => {
      if (user.uid === id) {
        return user.truckPlateNumber
      }
    }).join('')

    const phoneClientInput = ticketData
      ? data.data.Users.map(user => {
          if (user.uid === id) {
            return user.Tickets.filter(
              item => item.ticket_id === ticketData.ticket_id
            ).map(ticket => ticket.phone)
          }
        }).join('')
      : ''

    const startTimeInput = ticketData
      ? data.data.Users.map(user => {
          if (user.uid === id) {
            return user.Tickets.filter(
              item => item.ticket_id === ticketData.ticket_id
            ).map(ticket => ticket.startTime)
          }
        }).join('')
      : ''

    const endTimeInput = ticketData
      ? data.data.Users.map(user => {
          if (user.uid === id) {
            return user.Tickets.filter(
              item => item.ticket_id === ticketData.ticket_id
            ).map(ticket => ticket.endTime)
          }
        }).join('')
      : ''

    const contractorInput = ticketData
      ? data.data.Users.map(user => {
          if (user.uid === id) {
            return user.Tickets.filter(
              item => item.ticket_id === ticketData.ticket_id
            ).map(ticket => ticket.contractor)
          }
        }).join('')
      : ''

    const deliveryLocationInput = ticketData
      ? data.data.Users.map(user => {
          if (user.uid === id) {
            return user.Tickets.filter(
              item => item.ticket_id === ticketData.ticket_id
            ).map(ticket => ticket.deliveryLocation)
          }
        }).join('')
      : ''

    const notesInput = ticketData
      ? data.data.Users.map(user => {
          if (user.uid === id) {
            return user.Tickets.filter(
              item => item.ticket_id === ticketData.ticket_id
            ).map(ticket => ticket.notes)
          }
        }).join('')
      : ''

    const phoneInput = ticketData
      ? data.data.Users.map(user => {
          if (user.uid === id) {
            return user.phone
          }
        }).join('')
      : ''

    const totalLoadsInput = ticketData
      ? data.data.Users.map(user => {
          if (user.uid === id) {
            return user.Tickets.filter(
              item => item.ticket_id === ticketData.ticket_id
            ).map(ticket => ticket.totalLoads)
          }
        }).join('')
      : ''

    const totalHoursInput = ticketData
      ? data.data.Users.map(user => {
          if (user.uid === id) {
            return user.Tickets.filter(
              item => item.ticket_id === ticketData.ticket_id
            ).map(ticket => ticket.totalHours)
          }
        }).join('')
      : ''

    const customerNameInput = ticketData
      ? data.data.Users.map(user => {
          if (user.uid === id) {
            return user.Tickets.filter(
              item => item.ticket_id === ticketData.ticket_id
            ).map(ticket => ticket.customerName)
          }
        }).join('')
      : ''

    const loadIdInput = ticketData ?  myFunction(
      data.data.Users.map(user => {
        if (user.uid === id) {
          return user.Tickets.filter(
            item => item.ticket_id === ticketData.ticket_id
          ).map(ticket => {
            return ticket.Loads.map(load => load)
          })
        }
      })
    ):''

    //       const loadSiteInput
    //       = ticketData ? data.data.Users.map(user => {
    //         if (user.uid === id) {
    //           return user.Tickets.filter(
    //             item => item.ticket_id === ticketData.ticket_id
    //           ).map(ticket => {
    //             return ticket.Loads.map((load) => load.loadSite
    //             )})}}) : '';

    // const tripNumberInput = ticketData ? data.data.Users.map(user => {
    //   if (user.uid === id) {
    //     return user.Tickets.filter(
    //       item => item.ticket_id === ticketData.ticket_id
    //     ).map(ticket => {
    //       return ticket.Loads.filter(
    //         item => item.ticket_id === ticketData.ticket_id
    //       ).map((load) => load.tripNumber
    //       )})}}) : '';
    // const materialInput= ticketData ? data.data.Users.map(user => {
    //   if (user.uid === id) {
    //     return user.Tickets.filter(
    //       item => item.ticket_id === ticketData.ticket_id
    //     ).map(ticket => {
    //       return ticket.Loads.filter(
    //         item => item.ticket_id === ticketData.ticket_id
    //       ).map((load) => load.Material
    //       )})}}) : '';
    // const tonInput= ticketData ? data.data.Users.map(user => {
    //   if (user.uid === id) {
    //     return user.Tickets.filter(
    //       item => item.ticket_id === ticketData.ticket_id
    //     ).map(ticket => {
    //       return ticket.Loads.filter(
    //         item => item.ticket_id === ticketData.ticket_id
    //       ).map((load) => load.ton
    //       )})}}) : '';

    const st = new Date()
    const et = new Date()

    st.getTime(startTimeInput)
    et.getTime(endTimeInput)

    async function handleSubmit (e) {
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
        loadInfo: loadIdInput[0][0]
        // loadSite: loadSiteInput,
        // tripNumber: tripNumberInput,
        // material: materialInput,
        // ton: tonInput,
      }
      try {
        await fetch('/api/mail', {
          method: 'POST',
          body: JSON.stringify(SG)
        })
      } catch (err) {
        console.log(err)
      }

      console.log(SG)
      // Router.push('/dashboard/' + id);
    }
    loadIdInput?
    console.log(JSON.stringify(loadIdInput[0][0]))
: console.log('did not run')
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
                      value={contractorInput}
                      name='contractorInput'
                      //  style={{ width: 335 }}
                      onChange={e => setCustomerNameInput(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      disabled
                      id='standard-read-only-input'
                      variant='standard'
                      type='text'
                      label='Customer Name'
                      value={customerNameInput}
                      name='customerNameInput'
                      //  style={{ width: 335 }}
                      onChange={e => setCustomerNameInput(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      disabled
                      id='standard-read-only-input'
                      variant='standard'
                      type='text'
                      label='Phone No.'
                      value={phoneInput}
                      name='phoneInput'
                      //  style={{ width: 335 }}
                      onChange={e => setPhoneInput(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      disabled
                      id='standard-read-only-input'
                      variant='standard'
                      type='text'
                      label='Company'
                      value={companyInput}
                      name='companyInput'
                      //  style={{ width: 335 }}
                      onChange={e => setCompanyInput(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      disabled
                      id='standard-read-only-input'
                      variant='standard'
                      type='text'
                      label='Truck No'
                      value={truckNumberInput}
                      name='truckNumberInput'
                      //  style={{ width: 335 }}
                      onChange={e => setTruckNumberInput(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      disabled
                      id='standard-read-only-input'
                      variant='standard'
                      type='text'
                      label='Driver Lic'
                      value={driverLicInput}
                      name='driverLicInput'
                      onChange={e => setDriverLic(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      disabled
                      id='standard-read-only-input'
                      variant='standard'
                      type='text'
                      label='Client Phone No'
                      value={phoneClientInput}
                      name='phoneClientInput'
                      onChange={e => setPhoneClientInput(e.target.value)}
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
                      onChange={e => setStartTimeInput(e.target.value)}
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
                      onChange={e => setEndTimeInput(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      disabled
                      id='standard-read-only-input'
                      variant='standard'
                      type='text'
                      label='Total Hours'
                      value={totalHoursInput}
                      name='totalHoursInput'
                      //  style={{ width: 335 }}
                      onChange={e => setTotalHoursInput(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      disabled
                      id='standard-read-only-input'
                      variant='standard'
                      type='text'
                      label='Delivery Address'
                      value={deliveryLocationInput}
                      name='deliveryLocationInput'
                      //  style={{ width: 335 }}
                      onChange={e => setDeliveryLocationInput(e.target.value)}
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
                      value={notesInput}
                      name='notesInput'
                      //  style={{ width: 335 }}
                      onChange={e => setNotesInput(e.target.value)}
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
                                      onChange={e =>
                                        setLoadIdInput(e.target.value)
                                      }
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
                                      onChange={e =>
                                        setLoadSiteInput(e.target.value)
                                      }
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
                                      onChange={e =>
                                        setTripNumberInput(e.target.value)
                                      }
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
                                      onChange={e =>
                                        setMaterialInput(e.target.value)
                                      }
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
                                      onChange={e =>
                                        setTonInput(e.target.value)
                                      }
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
                          value={totalLoadsInput}
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
                    handleSubmit()
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
