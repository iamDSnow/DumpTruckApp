import { Container, Grid, Button, FormHelperText } from '@mui/material'
import { Divider } from '@mui/material'
import TextField from '@mui/material/TextField'
import Layout from '../../components/Layout'
import * as React from 'react'
import PropTypes from 'prop-types'
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
  const paths = data.data.Users?.map(user => {
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
    revalidate: 1
  }
}

export default function Details ({ data, id }) {
 

  //Whos Hauling State
  const [ticket_idInput, setTicket_IDInput] = React.useState(0)

  const [tripNumber, setTripNumber] = React.useState(0)
  const [loadSite, setLoadSite] = React.useState('')
  const [material, setMaterial] = React.useState('')
  const [ton, setTon] = React.useState(0)

  
  const handleSubmit = async e => {
    

    // Prep Payload
    const payload = await {
      ticket_id: ticketData.ticket_id,
      tripNumber: Number(tripNumber),
      loadSite: loadSite.toString(),
      Material: material.toString(),
      ton: Number(ton),
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
      mutation MyMutation($Material: String = "", $loadSite: String = "", $ticket_id: Int = "", $ton: Int = "", $tripNumber: Int = "") {
        insert_Loads_one(object: {Material: $Material, loadSite: $loadSite, ticket_id: $ticket_id, ton: $ton, tripNumber: $tripNumber}) {
          Material
          loadSite
          ticket_id
          ton
          tripNumber
        }
      }
    `;

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
    if (session.status === 'authenticated') 
    setGM(session.data.user.email),
    localStorage.getItem('data')?
    setTicketData(JSON.parse(localStorage.getItem('data')))
    : Router.push ('/dashboard/'+ id)
   
    
  }, [session.status])
  
 
  console.log(ticketData.ticket_id)
  if (!ticketData.ticket_id){
    return (<>
    <h1>Please Create a Ticket</h1>
    </>)
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
            <Grid item xs={5}>
              <TextField
                disabled
                id='filled-disabled'
                variant='filled'
                label='Ticket ID'
                type='number'
                value={ticketData.ticket_id}
                name='ticket_idInput'
       
              />
            </Grid>
          </Grid>
          <form onSubmit={handleSubmit}>
            <Grid
              container
              columnSpacing={12}
              gap={7}
              direction='column'
              justifyContent='center'
              alignItems='center'
            >
             
                <Grid item >
                  <TextField
                    required
                    id='outlined-required'
                    type='text'
                    label='Trip Number'
                    value={tripNumber}
                    name='tripNumber'
                    style={{ width: 335 }}
                    onChange={e => setTripNumber(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    id='outlined-required'
                    type='text'
                    label='Load Site'
                    name='loadSite'
                    value={loadSite}
                    style={{ width: 335 }}
                    onChange={e => setLoadSite(e.target.value)}
                  />
                </Grid>
                <Grid item >
                  <TextField
                    required
                    id='outlined-required'
                    label='Material'
                    value={material}
                    type='text'
                    style={{ width: 335 }}
                    onChange={e => setMaterial(e.target.value)}
                  />
                </Grid>

                <Grid item >
                  <TextField
                    id='outlined-number'
                    label='Yard/Tonnage'
                    name='ton'
                    type='number'
                    value={ton}
                    InputLabelProps={{
                      shrink: true
                    }}
                    style={{ width: 335 }}
                    onChange={e => setTon(e.target.value)}
                  />
                </Grid>

                <Grid item >
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
          
        </Box>
      </NoSsr>
    </>
  )
}
Details.auth = {
  unauthorized: "/", // redirect to this url
}