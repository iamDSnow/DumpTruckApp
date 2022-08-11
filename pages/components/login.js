import React, {useEffect, useState} from 'react'
import {useSession, signIn, signOut} from 'next-auth/react';
import {Button} from '@mui/material';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link'
const Wrapper = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
content-align: center;
` 

const SButton = styled(Button)`
align-self: center;`

export const getStaticProps = async () => {
    const res = await fetch(
        "https://just-chamois-38.hasura.app/v1/graphql",
      {
        method: "POST",
        headers: { ["x-hasura-admin-secret"]: process.env.NEXT_PUBLIC_HASURA_SECRET },
        body: JSON.stringify({
          query:  `
          query MyQuery {
            Users {

              email
            
            }
          }
        `
        })
      }
    );
  const data = await res.json()

  return{
    props: { data}

  }

  }



const Login = ({data}) => {
const router = useRouter();

//    const logged = useEffect(()=> {
//     router.push('/register')
//    })

    const {data: session} = useSession();
 if(session){

    return (
    <Wrapper>
        <p>Welcome, {session.user.name} 
        {/* <h1>{user.data.Users.map((Users, i)=>{
        return(
          <div key={i}> {Users.email}</div> 
            )})}</h1>  */}

                
             </p>
        <SButton size="large" onClick={()=>signOut()}> Sign Out </SButton>
    </Wrapper>
  )
} else{
    return(

    <Wrapper>
        <p> Please sign in.</p>
        <SButton size="large"  onClick={() =>
    signIn( {
      pages: `${window.location.origin}/register`,
    })
  }> Sign In </SButton>
    </Wrapper>
    )
}}

export default Login