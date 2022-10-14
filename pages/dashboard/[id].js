import { Container, Grid, Button, Box } from '@mui/material'
import { Divider } from '@mui/material'
import Layout from '../components/Layout'
import Router from 'next/router'
import { useSession } from 'next-auth/react'
import * as React from 'react'
import {Modal } from '@mui/material';
import { makeStyles } from "@material-ui/styles";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { createContext, useState } from 'react';


export const UserDetailsContext = createContext();


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}



const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    backgroundColor: 'white',
    boxShadow: 'black',
    padding: '0',
    outline: "none"
  }
}));

export const getStaticPaths = async () => {
  const res = await fetch('https://just-chamois-38.hasura.app/v1/graphql', {
    method: 'POST',
    headers: {
      ['x-hasura-admin-secret']: process.env.NEXT_PUBLIC_HASURA_SECRET
    },
    body: JSON.stringify({
      query:`
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
  const paths = await data.data.Users?.map(user => {
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
    revalidate: 2
  }
}

export default function Details ({ data, id }) {

  
  const handleSubmit = async (e) => {
    e.preventDefault();


    // Prep Payload
    const payload = await {
      ticket_id: Number(selectedRow.ticket_id),
      totalLoads: Number(totalLoadsUpdate),
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
  mutation MyMutation($ticket_id: Int = 0, $totalLoads: Int = 0) {
    update_Tickets_by_pk(pk_columns: {ticket_id: $ticket_id}, _set: {totalLoads: $totalLoads}) {
      totalLoads
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

  }



//Modal Open/Close
  const [open, setOpen] = React.useState(false);
  
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [modalData, setData] = React.useState();

//Style Class
  const classes = useStyles();

//tableData
  const [tableData, setTableData] = React.useState([]);
  
  const [dT, setDT] = React.useState([]);


  const [selectedRow, setSelectedRow] = React.useState({});
  const [rowTF, setRowTF ]= React.useState(false);

  const [loadDisplay, setLoadDisplay] = React.useState();
  const [totalLoadsUpdate, setTotalLoadsUpdate] = React.useState();

  const session = useSession()
  const [ticketData, setTicketData] = React.useState('')
  const [ticket_IdInput, setTicket_IdInput] = React.useState('')


  React.useEffect(() => {
    if (session.status === 'authenticated')
      setTicketData(JSON.parse(localStorage.getItem('data')))
   
  }, [session.status])
  React.useEffect(() => {

    data.data.Users?.map(user => {
  
      //Set table data
    return (setTableData(user.Tickets))
 
    })

    
    //get initial data
    getD()

    setLoadDisplay()
    
    return () => {
      
      tableData,
      loadDisplay
      
    };
  }, []);



  //function to get opening data in state 
  function getD() {new Promise(resolve => {
    setTimeout(() => {
      resolve(
        tableData ?  data.data.Users?.map(user => {
                return user.Tickets.map((tickets, i, row) => {
                  if (i + 1 === row.length) {
                    return(setDT(tickets),
                    localStorage.setItem("data",JSON.stringify(tickets))


                    
                    )
                    
                  }
                })
              }) : "null",
              
              setTicket_IdInput( data.data.Users?.map(user => {
                return user.Tickets.map((tickets, i, row) => {
                  if (i + 1 === row.length) {
                    return( tickets.ticket_id
                    )
                      
                  }
                }).join('')
              }))
              
              ) 
            }, 1000) 
          })}
         
                // console.log(ticket_IdInput)

                const handleOpen = () => {
                  setOpen(true);
                  setData({data});
               
                };
              
                const handleClose = async () => {
               
                   await setOpen(false);
                   await  setTotalLoadsUpdate(data.data.Users?.map(user => {
                    if (user.uid === id) {
                      return user.Tickets.filter(
                        item => item.ticket_id === ticketData.ticket_id
                      ).map(ticket => {
                        return JSON.stringify(ticket.Loads.filter(
                          item => item.ticket_id === ticketData.ticket_id
                        ).map(load => load.ton
                        ).reduce((a, b) => a + b, 0) 
                      )})
                    }
                   } ));
                  
                };
               

  // Modal Layout
  const CustomModal = () => {

    
    console.log(totalLoadsUpdate)

    return modalData ? (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        sx={{ flexGrow: 1, display: { xs: 10} }}
      >
        <div style={modalStyle} className={classes.paper}>
        <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
                            <TableCell align="right" >Ticket ID</TableCell>
                            <TableCell align="right">Customer Name</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Total Loads</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                    {tableData.map((list, index) => (



                        <TableRow 
                        key={index}
                         onClick={() =>
                           { 
                          setSelectedRow(list);  
                          setDT(list); 
                          handleClose(); 
                          setRowTF(true);
                         
                          localStorage.setItem("data",JSON.stringify(list)); 
                         
        
                        }}
                      
                       
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                      >
                                       
                            <TableCell align="right" component="th" scope="row" >{list.ticket_id}</TableCell>
                            <TableCell align="right">{list.customerName}</TableCell>
                            <TableCell align="right">{list.phone}</TableCell>
                            <TableCell align="right">{list.totalLoads}</TableCell>
                        

                        </TableRow>
                      ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
      </Modal>
    ) : null;
  }; 



  return (

    <UserDetailsContext.Provider value={[dT]}>
      <Layout />
      <br />


      <Container static>
      <CustomModal />

        <Grid
          container
          columns={12}
          direction='column'
          justifyContent='center'
          alignItems='center'
        >
          <Grid
            item
            xs={6}
            sx={{
              height: '50px',
              width: '100%',
              backgroundColor: 'white',
              color: '#000',
              textAlign: 'center'
            }}
          >
            <Box
              variant='outlined'
              sx={{
                height: '50px',
                width: '100%',
                backgroundColor: 'white',

                borderTop: 1,
                borderBottom: 1,
                position: 'relative',
                color: '#000',
                '&:hover': {
                  backgroundColor: '#FFA500',
                  color: '#000'
                }
              }}
            >
    
          <Button
            onClick={() => {
              handleOpen();
            }}
          >
             <p>View Ticket</p>
          </Button>

    
            
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          columns={12}
          direction='column'
          justifyContent='center'
          alignItems='center'
          xs
          zeroMinWidth
        >
          <Grid item xs={4}>
            <h1>Current Ticket</h1>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          columns={12}
          direction='column'
          justifyContent='center'
          alignItems='center'
          xs
          zeroMinWidth
        >
       
          <Grid item xs={6}>
            <Box
              sx={{
                width: 335,
                height: 'auto',
                backgroundColor: '#A9A9A9',
                direction: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '5px'
              }}
            >
                 <br />
              <Grid
                container
                columns={16}
                direction='column'
                justifyContent='center'
                alignItems='center'
              >
                <Grid
                  container
                  columns={16}
                  direction='row'
                  justifyContent='center'
                  alignItems='center'
                >
                  <Grid item xs={10}>
                    {rowTF ? <div>{`NAME: `} <strong>{selectedRow.customerName}</strong></div> : data.data.Users?.map(user => {
                      return user.Tickets.map((tickets, i, row) => {
                        if (i + 1 === row.length) {
                          return( <div>{`NAME: `} <strong>{tickets.customerName}</strong></div>
                          )
                        }
                      })
                    })}
                  </Grid>
                  <Grid item xs={4}>
                    {rowTF ?  <p>{`TICKET: ` + selectedRow.ticket_id}</p> 
                    :  data.data.Users?.map(user => {
                      return user.Tickets.map((tickets, i, row) => {
                        if (i + 1 === row.length) {
                          return( <p>{`TICKET: ` + tickets.ticket_id}</p>
                          )
                            
                        }
                      })
                    })}
                  </Grid>
                    
                  

                  <Grid item xs={8}>
                    {rowTF ? <p>{`PHONE: ` + selectedRow.phone}</p> : data.data.Users?.map(user => {
                      return user.Tickets.map((tickets, i, row) => {
                        if (i + 1 === row.length) {
                          return <p>{`PHONE: ` + tickets.phone}</p>
                        }
                      })
                    })}
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant='outlined'
                      sx={{
                        backgroundColor: '#A9A9A9',
                        height: '30px',
                        color: '#000',
                        borderColor: '#000',
                        '&:hover': {
                          backgroundColor: '#FFA500',
                          color: '#000'
                        }
                      }}
                      onClick={() => Router.push('./ticketCon/' + id)}
                    >
                      Edit Ticket
                    </Button>
                  </Grid>
                </Grid>
                <Divider sx={{ background: 'black' }} />
                <Grid item xs={8} direction='column'>
                  <h2> Total Loads</h2>
                </Grid>
                <Grid item xs={12}>
                 <h1>{rowTF ? data.data.Users?.map(user => {
    if (user.uid === id) {
      return user.Tickets.filter(
        item => item.ticket_id === selectedRow.ticket_id
      ).map(ticket => {
        return ticket.Loads.filter(
          item => item.ticket_id === selectedRow.ticket_id
        ).map(load => load.ton
        ).reduce((a, b) => a + b, 0) 
      })
    }
   }):  data.data.Users?.map(user => {
    if (user.uid === id) {
      return user.Tickets.filter(
        item => item.ticket_id === Number(ticket_IdInput)
      ).map(ticket => {
        return ticket.Loads.filter(
          item => item.ticket_id === Number(ticket_IdInput)
        ).map(load => load.ton
        ).reduce((a, b) => a + b, 0) 
      })
    }
   })}</h1> 
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant='outlined'
                    btn
                    sx={{
                      height: '47.225px',
                      width: '167.5px;',
                      backgroundColor: '#A9A9A9',
                      borderColor: '#000',
                      color: '#000',
                      bottom: '15px',
                      '&:hover': {
                        backgroundColor: '#FFA500',
                        color: '#000'
                      }
                    }}
                    onClick={() => Router.push('./createLoad/' + id)}
                  >
                    Add Load
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{
                width: 335,
                height: 360,

                direction: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Grid
                container
                direction='column'
                columns={12}
                spacing={2}
                justifyContent='center'
                alignItems='center'
                paddingTop='20px'
              >
                <Grid item xs={6}>
                  <Button
                    variant='outlined'
                    sx={{
                      height: '94.45px',
                      width: '335px;',
                      backgroundColor: '#A9A9A9',
                      color: '#000',
                      '&:hover': {
                        backgroundColor: '#FFA500',
                        color: '#000'
                      }
                    }}
                    onClick={ async () => { 
                   await  handleSubmit();
                   await  Router.push('./sendEmail/' + id);}}
                  >
                    Send Ticket
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant='outlined'
                    sx={{
                      height: '94.45px',
                      width: '335px;',
                      backgroundColor: '#A9A9A9',
                      color: '#000',
                      '&:hover': {
                        backgroundColor: '#FFA500',
                        color: '#000'
                      }
                    }}
                    onClick={() => {Router.push('./createTicket/' + id); }} 
                  >
                    Create Ticket
                  </Button>
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
                      onClick={() => Router.push('./loadData/' + id)}
                    >
                      View Load
                    </Button>
                  </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </UserDetailsContext.Provider>
  )
}
Details.auth = {
  unauthorized: "/", // redirect to this url
}