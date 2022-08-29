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
  const [isLoading, setLoading] = useState(false)
  const [gM, setGM] = useState()
  const { data: session, status }  =  useSession()



  useEffect(() => {
    const ApiAsync = async () => {
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

  
      await setD(resopnseJson);
      await setLoading(true)
    };
    ApiAsync();
  }, []);

  React.useEffect(() => {
    if (status === 'authenticated') 
  
    setGM(session.user.email)


   
    
    
  }, [status])

  
  if (status === 'authenticated') {
    
   

          isLoading ?
    
          d.data.Users.map((user)=> {
       
           if (user.email === gM) 
     {
             return Router.push('/dashboard')   
     }})
         :
            Router.push('/register')
         

// console.log(JSON.stringify(d))

    //       (d ==='undefined')?
  
    // <div>...loading</div>
    // :
    // getE()
    
 
  
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
            signIn(
              // 'google', { callbackUrl: '/register/' }
              )
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
