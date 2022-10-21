import { Container, Grid, Button } from '@mui/material'
import NoSsr from '@mui/material/NoSsr';
import { Divider } from '@mui/material'
import TextField from '@mui/material/TextField'
import Layout from '../../components/Layout'
import * as React from 'react'
import Router from 'next/router';

import { useSession } from 'next-auth/react'

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
  // console.log(data)
  const [gM, setGM] = React.useState('');
  const [emailInput, setEmailInput] = React.useState('')
  const [ids, setIDs] = React.useState('');
  const [companyInput, setCompanyInput] = React.useState('');
  const [ticketData, setTicketData] =React.useState('');
  const [phoneInput, setPhoneInput] = React.useState('');
  const [nameInput, setNameInput] = React.useState('');
  const [truckNumberInput, setTruckNumberInput] = React.useState('');
  const [driverLic, setDriverLic] = React.useState('');


  

  const session = useSession()
  
  // const [gName, setGName] = React.useState('');

React.useEffect(() => {
  if (session.status === 'authenticated') setGM(session.data.user.email)
  setTicketData(JSON.parse(localStorage.getItem('data'))),

  getD()
}, [session.status])


function getD(){
  setNameInput(data.data.Users.map(user => {
    if (user.uid === id) {
      return user.firstName
    }
  }))
  setEmailInput(data.data.Users.map(user => {
    if (user.uid === id) {
      return user.email
    }
  }))
  setPhoneInput(data.data.Users.map(user => {
    if (user.uid === id) {
      return user.phone
    }
  }))
  setCompanyInput(data.data.Users.map(user => {
    if (user.uid === id) {
      return user.company
    }
  }))
  setTruckNumberInput(data.data.Users.map(user => {
    if (user.uid === id) {
      return user.truckPlateNumber
    }
  }))
  setDriverLic(data.data.Users.map(user => {
    if (user.uid === id) {
      return user.driverLic
    }
  }))
}

const handleSubmit = async e => {
  // Prep Payload
  const payload = await {
    firstName: nameInput.toString(),
    email: emailInput.toString(),
    company: companyInput.toString(),
    phone: phoneInput.toString(),
    truckPlateNumber: truckNumberInput.toString(),
    driverLic: driverLic.toString(),
    uid: id,

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
            'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_SECRET
          },
          body: JSON.stringify({
            query: operationsDoc,
            variables: variables,
            operationName: operationName
          })
        }
      )

      return await result.json({revalidate:true})
    }

  const operationsDoc = `
  mutation MyMutation($uid: uuid = "", $company: String = "", $driverLic: String = "", $email: String = "", $firstName: String = "", $phone: String = "", $truckPlateNumber: String = "") {
    update_Users_by_pk(pk_columns: {uid: $uid}, _set: {company: $company, driverLic: $driverLic, email: $email, firstName: $firstName, phone: $phone, truckPlateNumber: $truckPlateNumber}) {
      truckPlateNumber
      phone
      firstName
      email
      driverLic
      company
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

  return (
    <>
      <Layout />
      
      <br />
      <NoSsr>
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
                      disabled
                      id='standard-read-only-input'
                      variant='outlined'
                    type='text'
                    label='Name'
                    value={nameInput}
                    style={{ width: 335 }}
                  />
                </Grid>
                <br />
                <Grid item xs={10}>
                  <TextField
                     disabled
                     id='standard-read-only-input'
                     variant='outlined'
                   type='text'
                    label='E-Mail'
                    value={emailInput}
                    style={{ width: 335 }}

                  />
                </Grid>
                <br />
                <Grid item xs={10}>
                  <TextField
                    required
                    id='outlined-required'
                    label='Company Name'
                    value={companyInput}
                    style={{ width: 335 }}
                    onChange={e => setCompanyInput(e.target.value)}

                  />
                </Grid>
                <br />
                <Grid item xs={10}>
                  <TextField
                    required
                    id='outlined-required'
                    label='Phone No'
                    value={phoneInput}
                    style={{ width: 335 }}
                    onChange={e => setPhoneInput(e.target.value)}

                  />
                </Grid>
                <br />
                <Grid item xs={10}>
                  <TextField
                    required
                    id='outlined-required'
                    label='Truck No'
                    value={truckNumberInput}
                    style={{ width: 335 }}
                    onChange={e => setTruckNumberInput(e.target.value)}

                  />
                </Grid>
                <br />
                <Grid item xs={10}>
                  <TextField
                    required
                    id='outlined-required'
                    label='Driver Lic'
                    value={driverLic}
                    style={{ width: 335 }}
                    onChange={e => setDriverLic(e.target.value)}
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
                      width: '150px;',
                      backgroundColor: '#A9A9A9',
                      color: '#000',
                      borderColor: 'transparent',
                      '&:hover': {
                        backgroundColor: '#FFA500',
                        color: '#000'
                      }
                    }}
                    onClick={handleSubmit}
                  >
                    Save
                  </Button>
                </Grid>
                <Grid item >
                  <Button
                    variant='outlined'
                    sx={{
                      height: '64.45px',
                      marginLeft: '35px',
                      width: '150px;',
                      backgroundColor: '#A9A9A9',
                      borderColor: 'transparent',
                      color: '#000',
                      '&:hover': {
                        backgroundColor: '#FFA500',
                        color: '#000'
                      }
                    }}
                    onClick={() => Router.push('../' + id)}

                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
              </form>
          </NoSsr>
        
    </>
  )
}
Details.auth = {
  unauthorized: "/", // redirect to this url
}
