import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from '@mui/material'
import styled from 'styled-components'
import  Router  from 'next/router'


const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  content-align: center;
`

const SButton = styled(Button)`
  align-self: center;
`

 function Login ()  {
  const [d, setD] = useState()
  const [gM, setGM] = useState()
  const { data: session, status }  =  useSession()

  function getD(){
    return true
  }

  useEffect(() => {
    const ApiAsync = async () => {
      if (status === 'authenticated') 
{
      const resopnse = await fetch(
        "https://just-chamois-38.hasura.app/v1/graphql",
      {
        method: "POST",
        headers: { ["x-hasura-admin-secret"]: process.env.NEXT_PUBLIC_HASURA_SECRET },
        body: JSON.stringify({
          query:  `
          query MyQuery {
            Users {
              uid
              email
              firstName
              driverLic
            }
          }
        `
        })
      }
    );
      const resopnseJson = await resopnse.json();
  
      setD(resopnseJson);
    }
    await ApiAsync(),
    await setGM(session.user.email),
    await getD()
  }
  }, [status]);

  if (status === 'authenticated') {
    
   
    if ( getD()===false){
      return <div>loading</div>
    }
    else
    d ?
    
     d.data.Users.map((user)=> {
  
      if (user.email === gM) 
{
        return Router.push('/dashboard/'+ user.uid.toString())   
}})
    :
       Router.push('/register')
    
    
 
  
    return (
      <Wrapper>
       <div></div>
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <p> Please sign in.</p>
        <SButton
          size='large'
          onClick={() => {
            signIn('google', { callbackUrl: '/register/' })
          }}
        >
          {' '}
          Sign In{' '}
        </SButton>
      </Wrapper>
    )
  }
}

export default Login
