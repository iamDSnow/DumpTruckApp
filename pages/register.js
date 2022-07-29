import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import styled from "styled-components";
import {Typography, Modal, Button, Grid, TextField, InputAdornment } from '@mui/material';
import { useSession, getSession } from "next-auth/react";
import {startExecuteMyMutation} from './api/signUpAPI'


const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comName, setComName] = useState("");
  const [truckPlateNumber, setTruckPlateNumber] = useState("");
  
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>
  }



  
  const handleSubmit = async (e) => {
      e.preventDefault()
  
      // async function fetchGraphQL(operationsDoc, operationName, variables) {
      //     const result = await fetch(
      //       " https://just-chamois-38.hasura.app/v1/graphql",
    
      //       {
      //         method: "POST",
      //         body: JSON.stringify({
      //           query: operationsDoc,
                // variables: {
                //   id: user.id,
                //   firstName: user.firstName,
                //   lastName: user.lastName,
                //   email: user.email,
                //   phone: user.phone,
                //   company: user.company,
                //   truckPlateNumber: user.truckPlateNumber,
                  
                // },
      //           operationName: operationName
      //         })
      //       }
      //     );
        
      //     return await result.json();
      //   }
        
      //   const operationsDoc =  `mutation insertUser($id:String,$firstName:String,$lastName:String,$phone:String,$company:String, $truckPlateNumber:String, $truckPlateNumber:String) {
      //     insert_Users(objects: {email:$email, netlify_id:$id, firstName:$firstName, lastName:$lastName, phone:$phone, company:$company, truckPlateNumber:$truckPlateNumber}) {
      //       affected_rows
      //     }
      //   }
      //   `;
        
      //   function executeMyMutation() {
      //     return fetchGraphQL(
      //       operationsDoc,
      //       "MyMutation",
      //       {}
      //     );
      //   }
        
      //   async function startExecuteMyMutation() {
      //     const { errors, data } = await executeMyMutation();
        
      //     if (errors) {
      //       // handle those errors like a pro
      //       console.error(errors);
      //     }
        
      //     // do something great with this precious data
      //     console.log(data);
      //   }
      
     
            // startExecuteMyMutation();
  
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
   
    <FormField>  
      <TextField 
      required={true}
      type="text"
      name="firstName"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      placeholder="First Name" 
       />
      </FormField>
      </Grid>
      <Grid item xs={4}>
  
    <FormField>  
      <TextField 
      required={true}
      type="text"
      name="lastName"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      placeholder="Last Name" 
       />
      </FormField>
      </Grid>
      <Grid item xs={4}>
      <FormField>
        <TextField
        required={true} 
        name="email" 
        id="email" 
        type="text"
        placeholder="Email Address"
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
         />
      </FormField>
      </Grid>
      <Grid item xs={4}>
      <FormField>
        <TextField 
        required={true}
        name="phoneNumber" 
        id="phoneNumber" 
        type="number"
        value={phoneNumber} 
        placeholder=" Phone Number" 
        onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </FormField>
      </Grid>
      <Grid item xs={4}>
     
      <FormField>
        <TextField
        required={true} 
        name="comName" 
        id="comName" 
        type="text"
        value={comName} 
        placeholder=" Comapany Name" 
        onChange={(e) => setComName(e.target.value)}
        />
      </FormField>
      </Grid>
      <Grid item xs={4}>
     
      <FormField>
        <TextField
        required={true} 
        name="truckPlateNumber" 
        id="truckPlateNumber" 
        type="text"
        value={truckPlateNumber} 
        placeholder=" Plate Number" 
        onChange={(e) => setTruckPlateNumber(e.target.value)}
        />
      </FormField>
      </Grid>
      </Grid>
        
        <Button type="submit" onClick={handleSubmit}>Create</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </FormWrapper>
  
      ) 
    };
  

  
  

export default Register;

const HeaderText = styled.div`

`
const Field = `
  
`;
const FormWrapper = styled.form`

`;
const FormField = styled.div`

`;

const Input = styled.input`
  ${Field}
`;


const SubmitButton = styled.button`

`;


const Label = styled.label`

`;



   
  
  
