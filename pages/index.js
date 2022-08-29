import React from 'react';
import Layout from './components/Layout';
import Login from './components/login';
import logo from '../images/logo.webp'
import {Container, Grid, Stack} from '@mui/material';
import Image from 'next/image'
import Head from 'next/head';


export default function Homepage() {

  return (
    <>
    
        <Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
   zeroMinWidth
>
  <Head>
  <meta name="application-name" content="Dump Truck App" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
<meta name="apple-mobile-web-app-title" content="Dump Truck App" />
<meta name="description" content="Dump Truck App" />
{/* <meta name="format-detection" content="telephone=no" />
<meta name="mobile-web-app-capable" content="yes" />
<meta name="msapplication-config" content="/icons/browserconfig.xml" />
<meta name="msapplication-TileColor" content="#2B5797" />
<meta name="msapplication-tap-highlight" content="no" /> */}
<meta name="theme-color" content="#000000" />

<link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
<link rel="apple-touch-icon" sizes="152x152" href="/images/apple-touch-icon.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
<link rel="apple-touch-icon" sizes="167x167" href="/images/apple-touch-icon.png" />

<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
<link rel="manifest" href="/public/manifest.json" />
<link rel="mask-icon" href="/images/maskable_icon.png" color="#fff" />
<link rel="shortcut icon" href="/images/favicon.ico" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

<meta name="twitter:card" content="summary" />
<meta name="twitter:url" content="https://dump-truck-app.vercel.app" />
<meta name="twitter:title" content="Dump Truck App" />
<meta name="twitter:description" content="Dump Truck Ticketing App" />
<meta name="twitter:image" content={logo} />
<meta name="twitter:creator" content="DerrickSnowJr" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Dump Truck App" />
<meta property="og:description" content="Dump Truck Ticketing App" />
<meta property="og:site_name" content="Dump Truck App" />
<meta property="og:url" content="https://dump-truck-app.vercel.app" />
<meta property="og:image" content="/images/logo.webp" />

  </Head>
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
  
       </>
  
     
  );
}


