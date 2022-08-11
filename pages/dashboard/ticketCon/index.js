import Layout from "../../components/Layout";

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




export default function TicketCon({data, error}) {

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>


  return (

    <div>
          <Layout/> 
      <h1>{data.data.Users.map((Users)=>{
        return(
          <div key={Users.uid}> {Users.email}</div> 
            )})}</h1>


    </div>
  )
}