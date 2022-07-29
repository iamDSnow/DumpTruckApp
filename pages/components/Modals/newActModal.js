import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import styled from "styled-components";
import {Typography, Modal, Button, Grid, TextField, InputAdornment } from '@mui/material';


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

const useStyles = makeStyles( ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: '#fff',
    boxShadow: "#eee",
    padding: '50px',
    outline: "none"
  }
}));

function SimpleModal() {
  const [open, setOpen] = useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [modalData, setData] = useState();

  const data = [
  
    {
        title: "Create Account",
        Info: "New Account"
      }
  ];
  const CustomModal = () => {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [comName, setComName] = useState("");
const [truckPlateNumber, setTruckPlateNumber] = useState("");
const [password, setPassword] = useState("");
const [passwordConfirm, setPasswordConfirm] = useState("");


const handleSubmit = async (e) => {
    e.preventDefault()

    async function fetchGraphQL(operationsDoc, operationName, variables) {
        const result = await fetch(
          " https://just-chamois-38.hasura.app/v1/graphql",
  
          {
            method: "POST",
            body: JSON.stringify({
              query: operationsDoc,
              variables: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                company: user.company,
                truckPlateNumber: user.truckPlateNumber,
                
              },
              operationName: operationName
            })
          }
        );
      
        return await result.json();
      }
      
      const operationsDoc =  `mutation insertUser($id:String,$firstName:String,$lastName:String,$phone:String,$company:String, $truckPlateNumber:String, $truckPlateNumber:String) {
        insert_Users(objects: {email:$email, netlify_id:$id, firstName:$firstName, lastName:$lastName, phone:$phone, company:$company, truckPlateNumber:$truckPlateNumber}) {
          affected_rows
        }
      }
      `;
      
      function executeMyMutation() {
        return fetchGraphQL(
          operationsDoc,
          "MyMutation",
          {}
        );
      }
      
      async function startExecuteMyMutation() {
        const { errors, data } = await executeMyMutation();
      
        if (errors) {
          // handle those errors like a pro
          console.error(errors);
        }
      
        // do something great with this precious data
        console.log(data);
      }
    
          
        //   startExecuteMyMutation();

    console.log(
  
        
  
        firstName,
        lastName,
       email,
       phoneNumber,
       comName,
       truckPlateNumber,
       password,


     
  
);
  
  
  }
  
    return modalData ? (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            {modalData.Info}
          </Typography>
          <Typography variant="subtitle1" id="simple-modal-description">
          <FormWrapper
  
  onSubmit={handleSubmit}
    css={`
      padding: 2rem 4rem;
    `}
  >
     <HeaderText >Create An Account</HeaderText>
     <br />
     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
     <Grid item xs={6}>
   
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
      <Grid item xs={6}>
  
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
      <Grid item xs={6}>
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
      <Grid item xs={6}>
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
      <Grid item xs={6}>
     
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
      <Grid item xs={6}>
     
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
      <Grid item xs={6}>
     
     <FormField>
       <TextField
       required={true} 
       name="password" 
       id="password" 
       type="text"
       value={password} 
       placeholder=" Password" 
       onChange={(e) => setPassword(e.target.value)}
       />
     </FormField>
     </Grid>
     <Grid item xs={6}>
     
     <FormField>
       <TextField
       required={true} 
       name="passwordConfirm" 
       id="passwordConfirm" 
       type="text"
       value={passwordConfirm} 
       placeholder="Confirm Password" 
       onChange={(e) => setPasswordConfirm(e.target.value)}
       />
     </FormField>
     </Grid>
      </Grid>
      
      <Button type="submit" onClick={handleSubmit}>Create</Button>
      <Button onClick={handleClose}>Cancel</Button>
    </FormWrapper>
          </Typography>
          
        </div>
      </Modal>
    ) : null;
  };

  const handleOpen = index => {
    setOpen(true);
    setData(data[index]);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <div>
      {data.map((d, index) => (
        <div>
          <Button
            onClick={() => {
              handleOpen(index);
            }}
          >
            {d.title}
          </Button>
        </div>
      ))}
      <CustomModal />
    </div>
  );
}

export default SimpleModal;

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