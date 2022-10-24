import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Typography, Button, Grid, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import logo from '../images/logo.webp';
import Image from 'next/image';

export const getStaticProps = async () => {
  await fetch("https://just-chamois-38.hasura.app/v1/graphql");

  const response = await fetch(
    "https://just-chamois-38.hasura.app/v1/graphql",
    {
      method: "POST",
      headers: {
        ["x-hasura-admin-secret"]: process.env.NEXT_PUBLIC_HASURA_SECRET,
      },
      body: JSON.stringify({
        query: `
        query MyQuery {
          Users {
            uid
            email
            phone
          }
        }
      `,
      }),
    }
  );

  const reg = await response.json();

  return {
    props: { reg }
    };
};

export default function ThankYou ({ reg }){
  const { data: session, status } = useSession();
  const gM = session.user.email;
    const [loading, setLoading] = useState(null);
    const start = reg.data.Users;



  const router = useRouter();

 

  const [id, setID] = useState("");

  useEffect(() => {
    if (status === 'authenticated'){


      const idC = () => ({
        idCheck: start
          .map((user) => {
            if (user.email === gM) {
              return true
            } else return false
          })
      });
  
  
      const {idCheck} = idC()
      setID(idCheck)
      
      }
    }, [status])
    
  

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  
  
  if (status === "authenticated") {
    
    id ?
    router.push("/dashboard/" ) :
    
    router.push("/register") 

}


    return (
      <>
       <Image
      
      src={logo}
      alt="logo"
      
    />
        <h1>Thank You</h1>
      </>
    )
};
ThankYou.auth = {
  unauthorized: "/", // redirect to this url
}

