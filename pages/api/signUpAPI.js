const fetch = require('node-fetch');


export default async function  handler(req , res) {

  // Get data submitted in request's body.
  const data = await req.body

  // const requestHeaders: HeadersInit = new Headers();
  //  requestHeaders.set(["x-hasura-admin-secret"], process.env.NEXT_PUBLIC_HASURA_SECRET as any);

  const responseBodyString =  JSON.stringify({
    query: `
  mutation MyMutation($phone: String = "", $truckPlateNumber: String = "", $firstName: String = "", $email: String = "", $driverLic: String = "", $company: String = "") {
    insert_Users(objects: {truckPlateNumber: $truckPlateNumber, phone: $phone, firstName: $firstName, email: $email, driverLic: $driverLic, company: $company}) {
      affected_rows
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



  const response = await fetch(
    "https://just-chamois-38.hasura.app/v1/graphql",
    {
      method: "POST",
      body: responseBodyString,
      headers: {'Content-Type': 'application/json', 'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_SECRET },
    }
  );





   const payload = await response.json()
   return res.status(200).json({payload})

//   if (errors) {
//     console.log(errors);
//   } else return { statusCode: 200, data: payload
//  };




  

}