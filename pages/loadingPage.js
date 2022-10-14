import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Typography, Button, Grid, TextField } from "@mui/material";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

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
    props: { reg },
  };
};

export default function LoadingPage ({ reg }){
  const { data: session, status } = useSession();
  const gM = session.user.email;
    const [loading, setLoading] = useState(null);
    const start = reg.data.Users;
    const [id, setID] = useState("");


  const router = useRouter();

  const [shouldRedirect, setShouldRedirect] = useState(null);

  var change = null


  useEffect(() => {
    if (status === 'authenticated'){



    const idC = () => ({
      idCheck: start
        .map((user) => {
          if (user.email === gM) {
            return user.uid
          } else return "";
        })
        .reduce((a, b) => a + b, 0)
        .replace("NaN", ""),
    });


    const {idCheck} = idC()
    setID(idCheck)
      if (idCheck === ''){
        return setLoading(false)
      }
      else{
        setLoading(true)
      }
    }
      setLoading()
  }, [status])


  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  
  
  if (status === "authenticated") {

   

   

 
    
// console.log(change)

    

const router = useRouter();

    // function Redirect({to}){
    //     const router = useRouter();

    //   useEffect(()=> {

    //     router.push(to)

    //   }, [to]);
    //   return null;
    // }

    const id  = 
    start.map((user) => {
       if (user.email === gM) {
         return user.uid;
       } else return "";
     })
     .reduce((a, b) => a + b, 0)
     .replace("NaN", "");

 
     loading ?
router.push("/dashboard/" + id.substring(1) ) :

router.push("/register") 

}

    return (
      <>
        <h1>Thank You</h1>
      </>
    )
    
};
LoadingPage.auth = {
  unauthorized: "/", // redirect to this url
}

