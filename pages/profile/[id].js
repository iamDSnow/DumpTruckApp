import { Container, Grid, Button } from '@mui/material'
import NoSsr from '@mui/material/NoSsr';
import { Divider } from '@mui/material'
import TextField from '@mui/material/TextField'
import Layout from '../components/Layout'
import * as React from 'react'


import { useSession, getSession } from 'next-auth/react'

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

  // console.log(data)

  const paths = data.data.Users.map(user => {
    return {
      params: { id: user.uid.toString() }
    }
  })

  // console.log(data.data.Users.map((user) => {

  //   return(
  //     user.uid
  //   )}))

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
    props: { data }
  }
}
export default function Details ({ data }) {
  // console.log(data)

  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const session = useSession()
  const [gM, setGM] = React.useState('')
  React.useEffect(() => {
    if (session.status === 'authenticated')
      return setGM(session.data.user.email)
  }, [session.status])

  // console.log(gM)

  // if(session.status === "loading"){
  //   console.log('still loading')
  // }
  // if(session.status === "authenticated"){

  // console.log(session)

  return (
    <>
      <Layout />
      
      <br />
      <NoSsr>

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
                    label='Name'
                    defaultValue=''
                    style={{ width: 335 }}
                  />
                </Grid>
                <br />
                <Grid item xs={10}>
                  <TextField
                    required
                    id='outlined-required'
                    label='E-Mail'
                    defaultValue=''
                    style={{ width: 335 }}
                  />
                </Grid>
                <br />
                <Grid item xs={10}>
                  <TextField
                    required
                    id='outlined-required'
                    label='Company Name'
                    defaultValue=''
                    style={{ width: 335 }}
                  />
                </Grid>
                <br />
                <Grid item xs={10}>
                  <TextField
                    required
                    id='outlined-required'
                    label='Phone No'
                    defaultValue=''
                    style={{ width: 335 }}
                  />
                </Grid>
                <br />
                <Grid item xs={10}>
                  <TextField
                    required
                    id='outlined-required'
                    label='Truck No'
                    defaultValue=''
                    style={{ width: 335 }}
                  />
                </Grid>
                <br />
              </Grid>
             
             
              <Grid
                container
                rows={10}
                direction='row'
                justifyContent='center'
                alignItems='center'
              >
                <Grid item >
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
                <Grid item >
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
          </NoSsr>
        
    </>
  )
}

