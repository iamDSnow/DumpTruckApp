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

const ThankYou = ({reg}) => {
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

  
    const id = reg.data.Users.map(user => {
      if (user.email === gM) {
        return user.uid
      }
      else return ''
    }).reduce((a, b) => a + b, 0).replace('NaN', '') 
    localStorage.setItem("u",JSON.stringify(id))
    console.log(id)
if(id){
  return <Redirect to={"/dashboard/" + id.substring(1)} />
}

      return (
    
      <h1>Thank You</h1>
  
      ) 
    }}
  

  
  

export default ThankYou;



const FormWrapper = styled.form`

`;


  
  
