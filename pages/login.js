import React from 'react'
import {useSession, signIn, signOut} from 'next-auth/react';

const Login = () => {

    const {data: session} = useSession();
 if(session){

    return (
    <div>
        <p>Welcome,
          
             {session.user.email}
               {" "} {session.user.name}</p>
        <button onClick={()=>signOut()}> Sign Out </button>
    </div>
  )
} else{
    return(

    <div>
        <p> Please sign in.</p>
        <button onClick={() => signIn()}> Sign In </button>
    </div>
    )
}}

export default Login