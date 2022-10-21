import Layout from "../components/Layout";
import React from "react";
import { useSession } from 'next-auth/react'
import Router from 'next/router'



export const getStaticProps = async () => {
    const res = await fetch(
        "https://just-chamois-38.hasura.app/v1/graphql",
      {
        method: "POST",
        headers: { ["x-hasura-admin-secret"]: process.env.NEXT_PUBLIC_HASURA_SECRET,
        'Cache-Control': 'no-cache' 
       },
        body: JSON.stringify({
          query:  `
          query MyQuery {
            Users {
              uid
              email
              firstName
            }
          }
        `
        })
      }
    );
  const data = await res.json()

  return{
    props: {data}
   
    } 

  }




export default function Dashboard({data, error}) {

  const session = useSession()
  const [ticketData, setTicketData] = React.useState('')

 

  // async function fetchGraphQL(operationsDoc, operationName, variables) {
  //   const result = await fetch(
  //     "https://just-chamois-38.hasura.app/v1/graphql",
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //         query: operationsDoc,
  //         variables: variables,
  //         operationName: operationName
  //       })
  //     }
  //   );
  
  //   return await result.json();
  // }
  
  // const operationsDoc = `
  //   query MyQuery($_eq: String = "") {
  //     Users_connection(where: {email: {_eq: ${_eq}}}) {
  //       edges {
  //         node {
  //           uid
  //         }
  //       }
  //     }
  //   }
  // `;
  
  // function fetchMyQuery(_eq) {
  //   return fetchGraphQL(
  //     operationsDoc,
  //     "MyQuery",
  //     {"_eq": _eq}
  //   );
  // }
  
  // async function startFetchMyQuery(_eq) {
  //   const { errors, data } = await fetchMyQuery(_eq);
  
  //   if (errors) {
  //     // handle those errors like a pro
  //     console.error(errors);
  //   }
  
  //   // do something great with this precious data
  //   console.log(data);
  // }
  
  // startFetchMyQuery(_eq);
 
  // React.useEffect(() => {
  //   if (session.status === 'authenticated') 
  
  //   setTicketData(JSON.parse(localStorage.getItem('u')))
   

   
    
  // }, [session.status])

  React.useEffect(() => {
    const { pathname } = Router;
    const gEmail = session.data.user.email

    const id = data.data?.Users.map((user) => {
      if (user.email === gEmail) {
        return user.uid;
      } else return "";
    })
      .reduce((a, b) => a + b, 0)
      .replace("NaN", "");
  
  
  

    if (pathname === "/dashboard") {
      Router.push("/dashboard/" + id.substring(1))
    }
  });


  return (

    <div>
          <Layout/> 
    
<div>...Loading</div>

    </div>
  )
}
Dashboard.auth = {
  unauthorized: "/", // redirect to this url
}