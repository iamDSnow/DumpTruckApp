import { Container, Grid, Button } from '@mui/material'
import Layout from '../../components/Layout'
import * as React from 'react'
import Typography from '@mui/material/Typography'
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
    props: { data, id },
    revalidate: 10
  }
}

export default function Details ({ data, id }) {
  const [startTimeInput, setStartTimeInput] = React.useState(0)
  const [endTimeInput, setEndTimeInput] = React.useState(0)
  const [contractorInput, setContractorInput] = React.useState('')
  const [deliveryLocationInput, setDeliveryLocationInput] = React.useState('')
  const [notesInput, setNotesInput] = React.useState('')
  const [phoneInput, setPhoneInput] = React.useState(0)
  const [totalLoadsInput, setTotalLoadsInput] = React.useState(0)
  const [totalHoursInput, setTotalHoursInput] = React.useState('')
  const [customerNameInput, setCustomerNameInput] = React.useState('')

  const session = useSession()
  const [ticketData, setTicketData] = React.useState('')

  React.useEffect(() => {
    if (session.status === 'authenticated')
      setTicketData(JSON.parse(localStorage.getItem('data')))
   
  }, [session.status])

  console.log(
    data.data.Users.map(user => {
      if (user.uid === id) {
        return user.Tickets.filter(
          item => item.ticket_id === ticketData.ticket_id
        ).map(ticket => {
          return ticket.Loads.filter(
            item => item.ticket_id === ticketData.ticket_id
          ).map(load => load)
        })
      }
    })
  )

  

  //   filter(
  //     item => item.ticket_id === ticketData.ticket_id
  //   ).map(ticket => ticket)

  return (
    <>
      <Layout />
      <br />
      <NoSsr>
        <Container>
          <Box>
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
                        <Box
                          sx={{
                            paddingBottom: '15px'
                          }}
                        >
                          <Grid
                            item
                            key={load.load_id}
                            sx={{
                              width: 250,
                              height: 'auto',
                              backgroundColor: '#A9A9A9',
                              direction: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius: '5px'
                            }}
                          >
                            <Grid container columns={12} direction='row'>
                              <Grid container  sx={{
                                  borderBottom: '1px solid #000',
                                  }}>
                              <Grid item xs={7} direction='row'>
                                <Typography
                                  sx={{
                                    paddingTop: '10px',
                                    paddingLeft: '15px',
                                    paddingBottom: '5px',
                                    textAlign: 'left'
                                  }}
                                >
                                  {'LOAD ID: '}
                                </Typography>
                              </Grid>
                              <Grid item xs={5}>
                                <Typography
                                  sx={{
                                    paddingTop: '10px',
                                    paddingRight: '15px',
                                    paddingBottom: '5px',
                                    textAlign: 'right'
                                  }}
                                >
                                  {load.load_id}
                                  
                                </Typography>
                                
                              </Grid>
                           

                              </Grid>

                              <Grid item xs={7} direction='row'>
                                <Typography
                                  sx={{
                                    paddingTop: '10px',
                                    paddingLeft: '15px',
                                    textAlign: 'left'
                                  }}
                                >
                                
                                  {'SITE: '}
                                </Typography>
                              </Grid>
                              <Grid item xs={5}>
                                <Typography
                                  sx={{
                                    paddingTop: '10px',
                                    paddingRight: '15px',
                                    textAlign: 'right'
                                  }}
                                >
                                  {' '}
                                  {load.loadSite}
                                </Typography>
                              </Grid>

                              <Grid item xs={7} direction='row'>
                                <Typography
                                  sx={{
                                    paddingTop: '10px',
                                    paddingLeft: '15px',
                                    textAlign: 'left'
                                  }}
                                >
                                  {/* <Divider /> */}
                                  {'TRIP NO: '}
                                </Typography>
                              </Grid>
                              <Grid item xs={5}>
                                <Typography
                                  sx={{
                                    paddingTop: '10px',
                                    paddingRight: '15px',
                                    textAlign: 'right'
                                  }}
                                >
                                  {' '}
                                  {load.tripNumber}
                                </Typography>
                              </Grid>

                              <Grid item xs={7} direction='row'>
                                <Typography
                                  sx={{
                                    paddingTop: '10px',
                                    paddingLeft: '15px',
                                    textAlign: 'left'
                                  }}
                                >
                                  {/* <Divider /> */}
                                  {'MATERIAL: '}
                                </Typography>
                              </Grid>
                              <Grid item xs={5}>
                                <Typography
                                  sx={{
                                    paddingTop: '10px',
                                    paddingRight: '15px',
                                    textAlign: 'right'
                                  }}
                                >
                                  {' '}
                                  {load.Material}
                                </Typography>
                              </Grid>

                              <Grid item xs={7} direction='row'>
                                <Typography
                                  sx={{
                                    paddingTop: '10px',
                                    paddingLeft: '15px',
                                    textAlign: 'left'
                                  }}
                                >
                                  {'YARD/TONNAGE: '}
                                </Typography>
                              </Grid>
                              <Grid item xs={5}>
                                <Typography
                                  sx={{
                                    paddingTop: '10px',
                                    paddingRight: '15px',
                                    textAlign: 'right'
                                  }}
                                >
                                  {' '}
                                  {load.ton}
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              direction='column'
                              justifyContent='center'
                              alignItems='center'
                            >
                              <Grid
                                item
                                xs={6}
                                sx={{
                                  paddingBottom: '10px',
                                  alignContent: 'center',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <Button
                                  variant='outlined'
                                  btn
                                  sx={{
                                    height: '47.225px',
                                    width: '167.5px;',
                                    backgroundColor: '#A9A9A9',
                                    borderColor: '#000',
                                    color: '#000',
                                    '&:hover': {
                                      backgroundColor: '#FFA500',
                                      color: '#000'
                                    }
                                  }}
                                  onClick={() =>
                                    {
                                    Router.push('./loadConfig/' + id );
                                    localStorage.setItem(
                                      'LOADID',
                                      JSON.stringify(load.load_id));
                                    }
                                  }
                                >
                                  Button
                                </Button>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Box>
                      ))
                    })
                  }
                })}
                 <Grid item >
                  <Button
                    variant='outlined'
                    sx={{
                      height: '64.45px',
                      width: '250px;',
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
            </Box>
          </Box>
        </Container>
      </NoSsr>
    </>
  )
}
Details.auth = {
  unauthorized: "/", // redirect to this url
}