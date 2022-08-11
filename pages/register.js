import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {Typography, Button, Grid, TextField } from '@mui/material';
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";




const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comName, setComName] = useState("");
  const [truckPlateNumber, setTruckPlateNumber] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);
  
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>
  }


function Redirect({to}){
  const router = useRouter();

  useEffect(()=> {

    router.push(to);

  }, [to]);
  return null;
}
  const router = useRouter();
  const handleSubmit = async (e) => {
      e.preventDefault()
  
  
      const data ={
    
          
    
        firstName: firstName,
        lastName: lastName,
        email: email,
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
if(shouldRedirect){
  return <Redirect to="/profile" />
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
       <Grid container columns={8}>
     <Grid item xs={4}>
      <TextField 
      required={true}
      type="text"
      name="firstName"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      placeholder="First Name" 
       />
    
      </Grid>
      <Grid item xs={4}>
  
     
      <TextField 
      required={true}
      type="text"
      name="lastName"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      placeholder="Last Name" 
       />
      
      </Grid>
      <Grid item xs={4}>
 
        <TextField
        required={true} 
        name="email" 
        id="email" 
        type="text"
        placeholder="Email Address"
        value={email} 
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
        
        <Button type="submit" onClick={() =>  setShouldRedirect(true) }>Create</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </FormWrapper>
  
      ) 
    };
  

  
  

export default Register;

const FormWrapper = styled.form`

`;




   
  
  
