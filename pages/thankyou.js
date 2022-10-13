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

export default function ThankYou ({ reg }){
  const { data: session, status } = useSession();
  const gM = session.user.email;
    const start = reg.data.Users;
    const [loading, setLoading] = useState(null);

  var redir = null;

 

  const router = useRouter();

 

  // const [firstNdame, setFirstName] = useState("");
  // const [id, setID] = useState("");
  // const [driverLic, setDriverLic] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [comName, setComName] = useState("");
  // const [truckPlateNumber, setTruckPlateNumber] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(null);

  var change = null


  useEffect(() => {


 

  
  }, []);
  // useEffect(() => {
  //   if (status === 'authenticated'){

  // }, [status])

  //   useEffect(()=> {
  //     if (status === "authenticated") {

  //      setPhoneNumber(reg.data.Users.map(user => {
  //        if (user.email === gM) {
  //          return user.phone
  //        }else return null
  //      })),
  //  setID(reg.data.Users.map(user => {
  //    if (user.email === gM) {
  //      return user.uid
  //    }
  //    else return ''
  //  }).reduce((a, b) => a + b, 0).replace('NaN', '') ),
  //  localStorage.setItem("u",JSON.stringify(id))
  //    console.log(shouldRedirect)
  //      phoneNumber ?
  //        setShouldRedirect(true)
  //        :

  //        setShouldRedirect(false),

  //          shouldRedirect ? router.push( "/dashboard/" + id.substring(1) ): router.push("/register/")

  // }
  //    }, []);


  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  
  
  if (status === "authenticated") {

    const usePhone = () => ({
      phone: start.map((user) => {
        if (user.email === gM) {
          return user.phone;
        } else return null;
      }),
    });
  
    const useID = () => ({
      id: start
        .map((user) => {
          if (user.email === gM) {
            return user.uid;
          } else return "";
        })
        .reduce((a, b) => a + b, 0)
        .replace("NaN", ""),
    });

    const { phone } = usePhone();
    const { id } = useID();
    var filtered = phone.filter(function (el) {
      return el != null;
    }); 

  filtered.length ?
  router.push( "/dashboard/" + id.substring(1) ) :

  router.push("/register/")
 
    
console.log(filtered)
// console.log(change)

    

   
    // function onlyNumbers(array) {
    //   return array.every(element => {
    //     return typeof element === 'number';
    //   });
    // }

    
   

    // const plainPhone =(JSON.stringify(phone))

    // console.log(onlyNumbers(filtered))
    // console.log(filtered);
    // console.log(loading);

    
    

    // function Redirect({to}){
    //   const router = useRouter();

    //   useEffect(()=> {

    //     router.push(to),
    //     setPhoneNumber(reg.data.Users.map(user => {
    //       if (user.email === gM) {
    //         return user.phone
    //       }else return null
    //     })),
    //     setID(reg.data.Users.map(user => {
    //       if (user.email === gM) {
    //         return user.uid
    //       }
    //       else return ''
    //     }).reduce((a, b) => a + b, 0).replace('NaN', '') ),
    //     localStorage.setItem("u",JSON.stringify(id))

    //     phoneNumber ?
    //       setShouldRedirect(true)
    //       :

    //       setShouldRedirect(false),


    //   }, [to]);
    //   return null;
    // }
// if(loading){


// console.log(shouldRedirect)


 



 
//        shouldRedirect  ? router.push("/dashboard/" + id.substring(1))
//  : router.push("/register")

}

    return (
      <>
        <h1>Thank You</h1>
        {/* <Redirect to={shouldRedirect ? "/dashboard/" + id.substring(1) : "/register/"} /> */}
      </>
    )
    // }

  //   else{
    



    
  // }
};
ThankYou.auth = {
  unauthorized: "/", // redirect to this url
}

