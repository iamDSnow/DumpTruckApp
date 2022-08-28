import { Container, Grid, Button, FormHelperText } from '@mui/material'
import { Divider } from '@mui/material'
import TextField from '@mui/material/TextField'
import Layout from '../../components/Layout'
import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useSession, getSession } from 'next-auth/react'
import NoSsr from '@mui/material/NoSsr'
import Router from 'next/router';
import { Suspense } from 'react'


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
    revalidate: 1
  }
}

export default function Details ({ data, id }) {
  //Hauling For State
  
  const [contractorInput, setContractorInput] = React.useState('')
  const [deliveryLocationInput, setDeliveryLocationInput] = React.useState('')
  const [notesInput, setNotesInput] = React.useState('')
  const [phoneClientInput, setPhoneClientInput] = React.useState('')
  const [customerNameInput, setCustomerNameInput] = React.useState('')
  //Who and For Hauling State
  const [user_idInput, setUser_IdInput] = React.useState('')
 

  const handleSubmit = async e => {

    await setPhoneClientInput(e)

    // Prep Payload
    const payload = await {
      user_id: user_idInput,
      deliveryLocation: deliveryLocationInput,
      contractor: contractorInput,
      customerName: customerNameInput,
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
  mutation MyMutation($contractor: String = "", $customerName: String = "", $deliveryLocation: String = "", $notes: String = "", $phone: Int = 0,$user_id: uuid = "") {
    insert_Tickets_one(object: {contractor: $contractor, customerName: $customerName, deliveryLocation: $deliveryLocation,  notes: $notes, phone: $phone, user_id: $user_id}
) {
      user_id
      phone
      notes
      deliveryLocation
      customerName
      contractor
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

    Router.push('/dashboard/' + id)
  }

  const session = useSession()
  const [gM, setGM] = React.useState('')
  const [ticketData, setTicketData] = React.useState('')

  React.useEffect(() => {
    if (session.status === 'authenticated') 
    setGM(session.data.user.email)
  
    setUser_IdInput(id)
  }, [session.status])

  

  return (
    <>
      <Layout />
      <NoSsr>
     
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          
          </Box>
          
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
                    <Grid item xs={10}>
                      <TextField
                        required
                        id='outlined-required'
                        label='Delivery Address'
                        name='deliveryLocationInput'
                        type='text'
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
                        value={notesInput}
                        type='text'
                        style={{ width: 335 }}
                        onChange={e => setNotesInput(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={10}>
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
                    
                  </Grid>
                </form>
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
            </Box>
        </Box>
      </NoSsr>
    </>
  )
}
Details.auth = {
  unauthorized: "/", // redirect to this url
}