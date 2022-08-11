import React from 'react';
import Layout from './components/Layout';
import Login from './components/login';
import logo from '../images/logo.webp'
import {Container, Grid, Stack} from '@mui/material';
import Image from 'next/image'


export default function Homepage() {

  

  return (
    
   
        <Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
  xs zeroMinWidth
>
<Layout />
        <Image
      
      src={logo}
      alt="logo"
      
    />
    <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={1}
>
  
       <Login />
     
 
       </Stack>
       </Grid>
  
   
  
     
  );
}


