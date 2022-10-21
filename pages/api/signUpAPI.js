
export default async function  handler(req , res) {

  // Get data submitted in request's body.
  const data = await req.body

  const responseBodyString =  JSON.stringify({
    query: `
  mutation MyMutation($phone: String = "", $truckPlateNumber: String = "", $firstName: String = "", $email: String = "", $driverLic: String = "", $company: String = "") {
    insert_Users(objects: {truckPlateNumber: $truckPlateNumber, phone: $phone, firstName: $firstName, email: $email, driverLic: $driverLic, company: $company}) {
      affected_rows
      returning {
        uid
      }
    }
  }
`,
    variables: {
      
      firstName: data.firstName,
      email: data.email,
      phone: data.phone,
      company: data.company,
      truckPlateNumber: data.truckPlateNumber,
      driverLic: data.driverLic,
      
      
    },
  });

// Optional logging to see the responses
  //  console.log('body: ', data)

try{


  await fetch(
    "https://just-chamois-38.hasura.app/v1/graphql",
    {
      method: "POST",
      body: responseBodyString,
      headers: {'Content-Type': 'application/json', 'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_SECRET, 'Cache-Control': 'no-cache' },
    }
  )
  await res.unstable_revalidate("/dashboard")
  await res.unstable_revalidate("/createLoad")
  await res.unstable_revalidate("/createTicket")
  await res.unstable_revalidate("/loadData")
  await res.unstable_revalidate("/profile")
  await res.unstable_revalidate("/sendEmail")
  await res.unstable_revalidate("/ticketCon")

  return res.status(200).json({ revalidated: true })

}
  catch (err){
    return res.status(500).json({message: 'something went wrong'})
  }

}