import Layout from "../../components/Layout";
import React from "react";
import { useSession } from 'next-auth/react'
import Router from 'next/router'

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




export default function CreateLoad({data, error}) {

    const [ticketData, setTicketData] = React.useState('')


  const session = useSession()


  React.useEffect(() => {
    if (session.status === 'authenticated') 
  
    setTicketData(JSON.parse(localStorage.getItem('u')))
   

   
    
  }, [session.status])
  React.useEffect(() => {
    const { pathname } = Router;
    if (pathname === "/dashboard/createLoad") {
      Router.push("/dashboard/createLoad/" + ticketData.substring(1))
    }
  });

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (

    <div>
          <Layout/> 
    
<div>...Loading</div>

    </div>
  )
}
CreateLoad.auth = {
  unauthorized: "/", // redirect to this url
}