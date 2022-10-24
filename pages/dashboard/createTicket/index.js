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




export default function CreateTicket({data, error}) {


  const session = useSession()

  const [ticketData, setTicketData] = React.useState('')

  React.useEffect(() => {
    if (session.status === 'authenticated') 
  
    setTicketData(JSON.parse(localStorage.getItem('u')))
   

   
    
  }, [session.status])
  React.useEffect(() => {
    const { pathname } = Router;
    if (pathname === "/dashboard/createTicket") {
      Router.push("/dashboard/createTicket/" + ticketData.substring(1))
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
createTicket.auth = {
  unauthorized: "/", // redirect to this url
}