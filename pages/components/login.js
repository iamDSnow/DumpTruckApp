import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from '@mui/material'
import styled from 'styled-components'
import { useRouter } from 'next/router'


const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`

const SButton = styled(Button)`
  align-self: center;
`

function Login ()  {
  
  const router = useRouter()


  const { data: session, status }  =  useSession()


  if (status === 'authenticated') {
    const useUser = () => ({ user: status ? session.user.name : null, loading: user ? true : false })

    const { user, loading } = useUser( router.push( '/thankyou' ))
    

    // Server-render loading state
    if (loading || user === true) {
      return <Wrapper>Loading...</Wrapper>
    }
      
  } else {
    return (
      <Wrapper>
        {/* <p> Please sign in.</p> */}
        <SButton
          size='large'
          onClick={() => {
            signIn(
              'google', { callbackUrl: '/thankyou' }
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
