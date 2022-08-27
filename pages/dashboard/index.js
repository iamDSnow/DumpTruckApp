import Layout from "../components/Layout";
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
    props: {data},
    revalidate: 2
  }

  }




export default function Dashboard({data, error}) {

  const session = useSession()


  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const [ticketData, setTicketData] = React.useState('')

  React.useEffect(() => {
    if (session.status === 'authenticated') 
    {
   

    setTicketData(data.data.Users)

    localStorage.setItem("u",JSON.stringify(id))
    
  }

  const id = data.data.Users.map((user) => {
    user.email === session.user.email
    ?
       user.uid
   : ''
  }).reduce((a, b) => a + b, 0).replace('NaN', '') 
    
  }, [session.status])
  React.useEffect(() => {
    const { pathname } = Router;
    if (pathname === "/dashboard") {
      Router.push("/dashboard/" + ticketData.substring(1))
    }
  });

  if(session){

  }

  return (

    <div>
          <Layout/> 
      {/* <h1>{data.data.Users.map((Users)=>{
        return(
          <div key={Users.uid}> {Users.email}</div> 
            )})}</h1> */}




    </div>
  )
}