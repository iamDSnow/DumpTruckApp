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
import NoSsr from '@mui/material/NoSsr'
import Router from 'next/router'

//Tabs
function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
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
    }
  )

  const data = await response.json()

  return {
    props: { data, id },
    revalidate: 3
  }
}

export default function Details ({ data, id }) {
  //Hauling For State
  const [startTimeInput, setStartTimeInput] = React.useState(0)
  const [endTimeInput, setEndTimeInput] = React.useState(0)
  const [contractorInput, setContractorInput] = React.useState('')
  const [deliveryLocationInput, setDeliveryLocationInput] = React.useState('')
  const [notesInput, setNotesInput] = React.useState('')
  const [phoneClientInput, setPhoneClientInput] = React.useState(0)
  const [totalLoadsInput, setTotalLoadsInput] = React.useState(0)
  const [totalHoursInput, setTotalHoursInput] = React.useState('')
  const [customerNameInput, setCustomerNameInput] = React.useState('')
  
  //Who and For Hauling State
  const [ticket_idInput, setTicket_idInput] = React.useState('')
  //Tab State
  const [value, setValue] = React.useState(0)

  //Whos Hauling State
  const [load_id, setLoad_id] = React.useState(0)
  const [tripNumber, setTripNumber] = React.useState(0)
  const [loadSite, setLoadSite] = React.useState('')
  const [material, setMaterial] = React.useState('')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleSubmit = async e => {
    await setTicket_idInput(e)
    await setPhoneClientInput(e)

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
    }

    console.log('payload ready...' + JSON.stringify(payload))

    // If User
    if (payload) {
      console.log('ran')
      async function fetchGraphQL (operationsDoc, operationName, variables) {
        const result = await fetch(
          'https://just-chamois-38.hasura.app/v1/graphql',
          {
            method: 'POST',
            headers: {
              ['x-hasura-admin-secret']: process.env.NEXT_PUBLIC_HASURA_SECRET
            },
            body: JSON.stringify({
              query: operationsDoc,
              variables: variables,
              operationName: operationName
            })
          }
        )

        return await result.json()
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
      
    `

      function executeMyMutation () {
        return fetchGraphQL(operationsDoc, 'MyMutation', payload)
      }

      async function startExecuteMyMutation () {
        const { errors, data } = await executeMyMutation()

        if (errors) {
          // handle those errors like a pro
          console.error(errors)
        }

        // do something great with this precious data
        console.log(data)
        console.log('ran')
      }
      startExecuteMyMutation()
    }

    Router.push('../../dashboard/' + id)
  }

  const session = useSession()
  const [gM, setGM] = React.useState('')
  const [ticketData, setTicketData] = React.useState('')

  React.useEffect(() => {
    if (session.status === 'authenticated') setGM(session.data.user.email)
    setTicketData(JSON.parse(localStorage.getItem('data'))),

    getD()
  }, [session.status])

  function getD () {
    new Promise(resolve => {
      setTimeout(() => {
        resolve(
          
          setContractorInput(
            data.data.Users.map(user => {
              if (user.uid === id) {
                return user.Tickets.filter(
                  item => item.ticket_id === ticketData.ticket_id
                ).map(ticket => ticket.contractor)
              }
            }).join('')
          ),

          setCustomerNameInput(
            data.data.Users.map(user => {
              if (user.uid === id) {
                return user.Tickets.filter(
                  item => item.ticket_id === ticketData.ticket_id
                ).map(ticket => ticket.customerName)
              }
            }).join('')
          ),

          setPhoneClientInput(
            data.data.Users.map(user => {
              if (user.uid === id) {
                return user.Tickets.filter(
                  item => item.ticket_id === ticketData.ticket_id
                ).map(ticket => ticket.phone)
              }
            }).join('')
          ),

          setStartTimeInput(
            data.data.Users.map(user => {
              if (user.uid === id) {
                return user.Tickets.filter(
                  item => item.ticket_id === ticketData.ticket_id
                ).map(ticket => ticket.startTime)
              }
            }).join('')
          ),
          setEndTimeInput(
            data.data.Users.map(user => {
              if (user.uid === id) {
                return user.Tickets.filter(
                  item => item.ticket_id === ticketData.ticket_id
                ).map(ticket => ticket.endTime)
              }
            }).join('')
          ),
          setTotalHoursInput(
            data.data.Users.map(user => {
              if (user.uid === id) {
                return user.Tickets.filter(
                  item => item.ticket_id === ticketData.ticket_id
                ).map(ticket => ticket.totalHours)
              }
            }).join('')
          ),
          setTotalLoadsInput(
            data.data.Users.map(user => {
              if (user.uid === id) {
                return user.Tickets.filter(
                  item => item.ticket_id === ticketData.ticket_id
                ).map(ticket => ticket.totalLoads)
              }
            }).join('')
          ),
          setDeliveryLocationInput(
            data.data.Users.map(user => {
              if (user.uid === id) {
                return user.Tickets.filter(
                  item => item.ticket_id === ticketData.ticket_id
                ).map(ticket => ticket.deliveryLocation)
              }
            }).join('')
          ),
          setNotesInput(
            data.data.Users.map(user => {
              if (user.uid === id) {
                return user.Tickets.filter(
                  item => item.ticket_id === ticketData.ticket_id
                ).map(ticket => ticket.notes)
              }
            }).join('')
          ),
          setTicket_idInput(
            data.data.Users.map(user => {
              if (user.uid === id) {
                return user.Tickets.filter(
                  item => item.ticket_id === ticketData.ticket_id
                ).map(ticket => ticket.ticket_id)
              }
            }).join('')
          )
        )
        return true
      }, 1000)
    })
  }
if ( getD()===false){
  return <div>loading</div>
}
else
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
            <Grid item xs={9}></Grid>
            <Grid item xs={4}>
              <TextField
                disabled
                InputProps={{
                  readOnly: true,
                }}
                id="standard-read-only-input"
                variant="standard"
                type='number'
             
                value={ticket_idInput}
                name='ticket_idInput'
                onChange={e => setTicket_idInput(Number(ticketData.ticket_id))}
              />
              {/* <p>{`TICKET: `+ticketData.ticket_id}</p> */}
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label='app tabs'>
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
                        id='outlined-required'
                        type='text'
                        label='Contractor'
                        value={contractorInput}
                        name='contractorInput'
                        style={{ width: 335 }}
                        onChange={e => setContractorInput(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <TextField
                        required
                        id='outlined-required'
                        type='text'
                        label='Customer Name'
                        name='customerNameInput'
                        value={customerNameInput}
                        style={{ width: 335 }}
                        onChange={e => setCustomerNameInput(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <TextField
                        required
                        id='outlined-required'
                        label='Phone No'
                        value={phoneClientInput}
                        type='text'
                        style={{ width: 335 }}
                        onChange={e => setPhoneClientInput(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Grid container direction='row'>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Grid item xs={5.6}>
                        <TimePicker
                          label='Start Time'
                          id='outlined-required'
                          value={startTimeInput}
                          name='startTimeInput'
                          onChange={e => setStartTimeInput(e)}
                          renderInput={params => (
                            <TextField {...params} style={{ width: 155 }} />
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TimePicker
                          label='End Time'
                          id='outlined-required'
                          value={endTimeInput}
                          name='endTimeInput'
                          onChange={e => setEndTimeInput(e)}
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
                        name='totalHoursInput'
                        type='text'
                        // defaultValue={ticketData.totalHours}
                        value={totalHoursInput}
                        InputLabelProps={{
                          shrink: true
                        }}
                        style={{ width: 335 }}
                        onChange={e => setTotalHoursInput(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <TextField
                        required
                        id='outlined-required'
                        label='Delivery Address'
                        name='deliveryLocationInput'
                        type='text'
                        // defaultValue={ticketData.deliveryLocation}
                        value={deliveryLocationInput}
                        style={{ width: 335 }}
                        onChange={e => setDeliveryLocationInput(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <TextField
                        id='outlined-multiline-static'
                        label='Notes/Details for Delivery'
                        name='notesInput'
                        multiline
                        rows={4}
                        // defaultValue={ticketData.notes}
                        value={notesInput}
                        type='text'
                        style={{ width: 335 }}
                        onChange={e => setNotesInput(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type='button'
                        onClick={handleSubmit}
                        variant='outlined'
                        sx={{
                          height: '64.45px',
                          width: '335px;',
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
                    <br />
                    <Grid item >
                  <Button
                    variant='outlined'
                    sx={{
                      height: '64.45px',
                      width: '335px;',
                      backgroundColor: '#A9A9A9',
                      borderColor: 'transparent',
                      color: '#000',
                      '&:hover': {
                        backgroundColor: '#FFA500',
                        color: '#000'
                      }
                    }}
                    onClick={() => Router.push('/dashboard/' + id)}

                  >
                    Cancel
                  </Button>
                </Grid>
                  </Grid>
                </form>
              </Grid>
              <br />
            </Box>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Box
              sx={{
                '& .MuiTextField-root': { width: '25ch', paddingBottom: '15px' }
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
                  <form>
                    <Grid item>
                      <TextField
                        disabled
                        id='outlined-disabled'
                        label='Company Name'
                        defaultValue={data.data.Users.map(user => {
                          if (user.uid === id) {
                            return user.company
                          }
                        })}
                        style={{ width: 335 }}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        disabled
                        id='outlined-disabled'
                        label='Driver'
                        defaultValue={data.data.Users.map(user => {
                          if (user.uid === id) {
                            return user.driverLic
                          }
                        })}
                        style={{ width: 335 }}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        disabled
                        id='outlined-disabled'
                        label='Truck No'
                        defaultValue={data.data.Users.map(user => {
                          if (user.uid === id) {
                            return user.truckPlateNumber
                          }
                        })}
                        style={{ width: 335 }}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        disabled
                        id='outlined-disabled'
                        label='Phone No'
                        defaultValue={data.data.Users.map(user => {
                          if (user.uid === id) {
                            return user.phone
                          }
                        })}
                        style={{ width: 335 }}
                      />
                    </Grid>
                    <Grid item >
                        <Button
                          variant='outlined'
                          sx={{
                            height: '64.45px',
                            width: '335px;',
                            backgroundColor: '#A9A9A9',
                            borderColor: 'transparent',
                            color: '#000',
                            '&:hover': {
                              backgroundColor: '#FFA500',
                              color: '#000'
                            }
                          }}
                          onClick={() => Router.push('../sendEmail/' + id)}
                        >
                          Send
                        </Button>
                      </Grid>
                  </form>
                  <br />
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
                      onClick={() => Router.push('../loadData/' + id)}
                    >
                      View Load
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
Details.auth = {
  unauthorized: "/", // redirect to this url
}