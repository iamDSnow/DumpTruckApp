import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {Typography, Button, Grid, TextField } from '@mui/material';
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";


export const getStaticProps = async () => {
  await fetch('https://just-chamois-38.hasura.app/v1/graphql' )

  const response = await fetch(
    'https://just-chamois-38.hasura.app/v1/graphql',
    {
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
          }
        }
      `
      })
    }
  )

  const reg = await response.json()

  return {
    props: { reg }
  }
}

const Register = ({reg}) => {
  const [firstName, setFirstName] = useState("");
  const [driverLic, setDriverLic] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comName, setComName] = useState("");
  const [truckPlateNumber, setTruckPlateNumber] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);
  
  const { data: session, status } = useSession();
  const router = useRouter();



  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>
  }
  if (status === "authenticated") {
    const gM = session.user.email;
    const uName = session.user.name;
  
    // console.log(reg.data.Users.map(user => {
    //   if (user.email === gM) {
    //     return user.uid
    //   }
    // }).reduce((a, b) => a + b, 0).replace('NaN', '')  )
    
   

function Redirect({to}){
  const router = useRouter();

  useEffect(()=> {

    router.push(to);

  }, [to]);
  return null;
}

  const handleSubmit = async (e) => {
     
  
  
      const data ={
    
          
    
        firstName: session.user.name,
        driverLic: driverLic,
        email: session.user.email,
         phoneNumber: phoneNumber,
         comName: comName,
         truckPlateNumber: truckPlateNumber,
       
    
      }


  // Send the data to the server in JSON format.
  const JSONdata = JSON.stringify(data)

  console.log(JSONdata)
    
  const endpoint = '/api/signUpAPI'

  const options = {
    // The method is POST because we are sending data.
    method: 'POST',
    // Tell the server we're sending JSON.
    headers: {
      'Content-Type': 'application/json',
    },
    // Body of the request is the JSON data we created above.
    body: JSONdata,
  }

  const response = await fetch(endpoint, options)

  const result = await response.json()
  alert(`Is this your full name: ${result.data}`)


    }
    const handleOpen = index => {
      setOpen(true);
      setData(data[index]);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const id = reg.data.Users.map(user => {
      if (user.email === gM) {
        return user.uid
      }
      else return ''
    }).reduce((a, b) => a + b, 0).replace('NaN', '') 
    localStorage.setItem("u",JSON.stringify(id))
if(shouldRedirect){
  return <Redirect to={"/thankyou" } />
}

      return (
    
      
            <FormWrapper
    action="/api/signUpAPI"
    method="post"
    onSubmit={handleSubmit}
      css={`
        padding: 2rem 4rem;
      `}
    >
       <Typography >Create An Account</Typography>
       <br />

       <Grid container columns={8}
       direction='row'
       justifyContent='center'
       alignItems='center'>

     <Grid item xs={4}>
      <TextField
       disabled 
      required={true}
      type="text"
      name="Name"
      value={uName}
      onChange={(e) => setFirstName(session.user.name)}
      placeholder="Full Name" 
       />
    
      </Grid>
      <Grid item xs={4}>
  
     
      <TextField 
      required={true}
      type="text"
      name="driverLic"
      value={driverLic}
      onChange={(e) => setDriverLic(e.target.value)}
      placeholder="Driver Lic." 
       />
      
      </Grid>
      <Grid item xs={4}>
 
        <TextField
         disabled
        required={true} 
        name="email" 
        id="email" 
        type="text"
        placeholder="Email Address"
        value={gM} 
        onChange={(e) => setEmail(e.target.value)}
         />
    
      </Grid>
      <Grid item xs={4}>
      
        <TextField 
        required={true}
        name="phoneNumber" 
        id="phoneNumber" 
        type="number"
        value={phoneNumber} 
        placeholder=" Phone Number" 
        onChange={(e) => setPhoneNumber(e.target.value)}
        />
      
      </Grid>
      <Grid item xs={4}>
     
        <TextField
        required={true} 
        name="comName" 
        id="comName" 
        type="text"
        value={comName} 
        placeholder=" Comapany Name" 
        onChange={(e) => setComName(e.target.value)}
        />
    
      </Grid>
      <Grid item xs={4}>
        <TextField
        required={true} 
        name="truckPlateNumber" 
        id="truckPlateNumber" 
        type="text"
        value={truckPlateNumber} 
        placeholder=" Plate Number" 
        onChange={(e) => setTruckPlateNumber(e.target.value)}
        />
      
      </Grid>
      </Grid>
        
        <Button type="submit" onClick={() => { handleSubmit(); 
          setShouldRedirect(true);
          } }>Create</Button>
      
      </FormWrapper>
  
      ) 
    }}
  

  
  

export default Register;



const FormWrapper = styled.form`

`;


  
  
