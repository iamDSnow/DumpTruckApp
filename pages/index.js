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
      <Head>
      <title>DT app</title>
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#fff" />
      <meta
        name="description"
        content="make your Next.js application work offline using service workers via Google's workbox"
      />
    </Head>
        <Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
   zeroMinWidth
>
  <Head>
  {/* <meta name="application-name" content="Dump Truck App" />
{/* <meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
<meta name="apple-mobile-web-app-title" content="Dump Truck App" /> */}
{/* <meta name="description" content="Dump Truck App" />
<meta name="theme-color" content="#000000" /> */}
{/* <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" /> */}
{/* <link rel="manifest" href="/manifest.json" />
<link rel="mask-icon" href="/maskable_icon.png" color="#fff" />
<link rel="shortcut icon" href="/maskable_icon.png" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" /> */}
{/* <meta name="twitter:card" content="summary" />
<meta name="twitter:url" content="https://dump-truck-app.vercel.app" />
<meta name="twitter:title" content="Dump Truck App" />
<meta name="twitter:description" content="Dump Truck Ticketing App" />
<meta name="twitter:image" content={logo} />
<meta name="twitter:creator" content="DerrickSnowJr" /> */}
{/* <meta property="og:type" content="website" />
<meta property="og:title" content="Dump Truck App" />
<meta property="og:description" content="Dump Truck Ticketing App" />
<meta property="og:site_name" content="Dump Truck App" />
<meta property="og:url" content="https://dump-truck-app.vercel.app" />
<meta property="og:image" content="/logo.webp" /> */} å

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


