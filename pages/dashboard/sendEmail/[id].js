import { Container, Grid, Button } from '@mui/material'
import { Divider } from '@mui/material'
import TextField from '@mui/material/TextField'
import Layout from '../../components/Layout'
import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useSession, getSession } from 'next-auth/react'
import NoSsr from '@mui/material/NoSsr'
import { TicketContext } from '../../components/helper/context'
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
    revalidate: 5
  }
}

export default function Details ({ data, id }) {
  const [email1, setEmail1] = React.useState('')
  const [email2, setEmail2] = React.useState('')
  const [email3, setEmail3] = React.useState('')
  const [companyInput, setCompanyInput] = React.useState('')
  const [driverLicInput, setDriverLicInput] = React.useState('')
  const [truckNumberInput, setTruckNumberInput] = React.useState('')
  const [phoneClientInput, setPhoneClientInput] = React.useState('')

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
  const [loadIdInput, setLoadIdInput] = React.useState([])
  const [loadSiteInput, setLoadSiteInput ] = React.useState('')
  const [tripNumberInput, setTripNumberInput] = React.useState('')
  const [materialInput, setMaterialInput] = React.useState('')
  const [tonInput, setTonInput] = React.useState('')
  const [ticketData, setTicketData] = React.useState('')

  const API = process.env.NEXT_PUBLIC_SENDGRID;


  React.useEffect(() => {
    if (session.status === 'authenticated')
      setContractorInput(
        data.data.Users.map(user => {
          if (user.uid === id) {
            return user.Tickets.filter(
              item => item.ticket_id === ticketData.ticket_id
            ).map(ticket => ticket.contractor)
          }
        }).join('')
      )

    setCustomerNameInput(
      data.data.Users.map(user => {
        if (user.uid === id) {
          return user.Tickets.filter(
            item => item.ticket_id === ticketData.ticket_id
          ).map(ticket => ticket.customerName)
        }
      }).join('')
    )
    setCustomerNameInput(
      data.data.Users.map(user => {
        if (user.uid === id) {
          return user.Tickets.filter(
            item => item.ticket_id === ticketData.ticket_id
          ).map(ticket => ticket.customerName)
        }
      }).join('')
    )
    setPhoneClientInput(
      data.data.Users.map(user => {
        if (user.uid === id) {
          return user.Tickets.filter(
            item => item.ticket_id === ticketData.ticket_id
          ).map(ticket => ticket.phone)
        }
      }).join('')
    )
    setStartTimeInput(
      data.data.Users.map(user => {
        if (user.uid === id) {
          return user.Tickets.filter(
            item => item.ticket_id === ticketData.ticket_id
          ).map(ticket => ticket.startTime)
        }
      }).join('')
    )
    setEndTimeInput(
      data.data.Users.map(user => {
        if (user.uid === id) {
          return user.Tickets.filter(
            item => item.ticket_id === ticketData.ticket_id
          ).map(ticket => ticket.endTime)
        }
      }).join('')
    )
    setTotalHoursInput(
      data.data.Users.map(user => {
        if (user.uid === id) {
          return user.Tickets.filter(
            item => item.ticket_id === ticketData.ticket_id
          ).map(ticket => ticket.totalHours)
        }
      }).join('')
    )
    setTotalLoadsInput(
      data.data.Users.map(user => {
        if (user.uid === id) {
          return user.Tickets.filter(
            item => item.ticket_id === ticketData.ticket_id
          ).map(ticket => ticket.totalLoads)
        }
      }).join('')
    )
    setDeliveryLocationInput(
      data.data.Users.map(user => {
        if (user.uid === id) {
          return user.Tickets.filter(
            item => item.ticket_id === ticketData.ticket_id
          ).map(ticket => ticket.deliveryLocation)
        }
      }).join('')
    )
    setNotesInput(
      data.data.Users.map(user => {
        if (user.uid === id) {
          return user.Tickets.filter(
            item => item.ticket_id === ticketData.ticket_id
          ).map(ticket => ticket.notes)
        }
      }).join('')
    )
    setDriverLicInput(
      data.data.Users.map(user => {
        if (user.uid === id) {
          return user.driverLic
        }
      }).join('')
    )
    setTruckNumberInput(
      data.data.Users.map(user => {
        if (user.uid === id) {
          return user.truckPlateNumber
        }
      }).join('')
    )
    setPhoneInput(
      data.data.Users.map(user => {
        if (user.uid === id) {
          return user.phone
        }
      }).join('')
    )
    setCompanyInput(
      data.data.Users.map(user => {
        if (user.uid === id) {
          return user.company
        }
      }).join('')
    )
    st.getTime(startTimeInput)
    et.getTime(endTimeInput)

    setLoadIdInput(
      data.data.Users.map(user => {
        if (user.uid === id) {
          return user.Tickets.filter(
            item => item.ticket_id === ticketData.ticket_id
          ).map(ticket => {
            return ticket.Loads.filter(
              item => item.ticket_id === ticketData.ticket_id
            ).map(load => (load.load_id ))
          })
        }
      })
    )
    setLoadSiteInput(
      data.data.Users.map(user => {
        if (user.uid === id) {
          return user.Tickets.filter(
            item => item.ticket_id === ticketData.ticket_id
          ).map(ticket => {
            return ticket.Loads.filter(
              item => item.ticket_id === ticketData.ticket_id
            ).map(load => (load.loadSite ))
          })
        }
      })
    )
    setTripNumberInput(
      data.data.Users.map(user => {
        if (user.uid === id) {
          return user.Tickets.filter(
            item => item.ticket_id === ticketData.ticket_id
          ).map(ticket => {
            return ticket.Loads.filter(
              item => item.ticket_id === ticketData.ticket_id
            ).map(load => (load.tripNumber ))
          })
        }
      })
    )
    setMaterialInput(
      data.data.Users.map(user => {
        if (user.uid === id) {
          return user.Tickets.filter(
            item => item.ticket_id === ticketData.ticket_id
          ).map(ticket => {
            return ticket.Loads.filter(
              item => item.ticket_id === ticketData.ticket_id
            ).map(load => (load.Material ))
          })
        }
      })
    )
     setTonInput(
      data.data.Users.map(user => {
        if (user.uid === id) {
          return user.Tickets.filter(
            item => item.ticket_id === ticketData.ticket_id
          ).map(ticket => {
            return ticket.Loads.filter(
              item => item.ticket_id === ticketData.ticket_id
            ).map(load => (load.ton ))
          })
        }
      })
    )
    setTicketData(JSON.parse(localStorage.getItem('data')))
  }, [session.status])

  const st = new Date()
  const et = new Date()

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
async function handleSubmit (){

const SG = ({
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
  ton: tonInput,


})
await fetch('/api/mail.js', {
  method: 'POST',
  body: JSON.stringify(SG)
});

fetch(
  '/pages/api/mail.js',
  {
    method: 'POST',
    headers: {
      ['key']: API
    },
    body: JSON.stringify(SG)

  }
)

}
console.log(loadIdInput)
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
            <Box component='form'>
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
                    onChange={e => setContractorInput(e.target.value)}
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
                    
                          <Grid
                            item
                            key={load.load_id}

                          >
                          <br />

                            <Grid container columns={12} direction='row'
                              sx={{border: '1px solid #000',
                                 }}

                            >
                             
                              <Grid item xs={3} direction='row'>
                              <TextField
                    disabled
                    id='standard-read-only-input'
                    variant='filled'
                    type='text'
                    label='LOAD ID'
                    value={load.load_id}
                    name='loadID'
                    
                  ></TextField>
                                
                              </Grid>
                              <Grid item xs={6} direction='row'>
                      
                              </Grid>

                             

                              <Grid item xs={6} direction='row'>
                              <TextField
                    disabled
                    id='standard-read-only-input'
                    variant='standard'
                    type='text'
                    label='SITE'
                    value={load.loadSite}
                    name='loadSite'
                    
                    // onChange={e => setLoadSiteInput(e.target.value)}
                  ></TextField>
                                
                            </Grid>

                              <Grid item xs={6} direction='row' >
                              <TextField
                    disabled
                    
                    id='standard-read-only-input'
                    variant='standard'
                    type='text'
                    label='TRIP NO'
                    value={load.tripNumber}
                    name='tripNo'
                    
                    // onChange={e => setTripNumberInput(e.target.value)}
                  ></TextField>
            
                              </Grid>

                              <Grid item xs={6} direction='row'>
                              <TextField
                    disabled
                    id='standard-read-only-input'
                    variant='standard'
                    type='text'
                    label='MATERIAL'
                    value={load.Material}
                    name='material'
                                      ></TextField>
        
                              </Grid>

                              <Grid item xs={6} direction='row'>
                              <TextField
                    disabled
                    id='standard-read-only-input'
                    variant='standard'
                    type='text'
                    label='YARD/TONNAGE'
                    value={load.ton}
                    name='ton'
                    
                    
                  >
                    
                  </TextField>
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
                    onChange={e => setTotalLoadsInput(e.target.value)}
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
                onClick={() => handleSubmit()}

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
                onClick={() => Router.push('../../dashboard/' + id)}

              >
                Dashboard
              </Button>
        </Container>
      </NoSsr>
    </>
  )
}
Details.auth = {
  unauthorized: "/", // redirect to this url
}