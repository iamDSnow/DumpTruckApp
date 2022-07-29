import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import styled from "styled-components";
import {Typography, Modal, Button, Grid, Item } from '@mui/material'


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
      title: "Sign In",
      Info: "Login"
    }
  
  ];
  const CustomModal = () => {
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setlastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");



const handleSubmit = async (e) => {
    e.preventDefault()

   
 
  
    SG({
  
       
       email,
       password,
       
     
  
    });
  
  
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
     <HeaderText >Sign in with App</HeaderText>
     <br />
      <Label htmlFor="email">Email</Label>
      <FormField>
       
        <Input 
        name="email" 
        id="email" 
        type="text"
        placeholder="Email Address"
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
         />
      </FormField>

      <Label htmlFor="password">Password</Label>
      <FormField>
        <Input 
        name="password" 
        id="password" 
        type="text"
        value={password} 
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
   
      <SubmitButton type="submit" onClick={handleSubmit}>Sign In</SubmitButton>
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

const Input2 = styled.input`

`;


const TextArea = styled.textarea`
  ${Field}

`;

const SubmitButton = styled.button`

`;


const Label = styled.label`

`;