import { VercelRequest, VercelResponse } from '@vercel/node';


export default async function  handler(req:VercelRequest , res:VercelResponse) {
  // Get data submitted in request's body.
  const data = await req.body

  const requestHeaders: HeadersInit = new Headers();
   requestHeaders.set("x-hasura-admin-secret", process.env.NEXT_PUBLIC_HASURA_SECRET as any);

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
   console.log('body: ', data)


  const response = await fetch(
    "https://just-chamois-38.hasura.app/v1/graphql",
    {
      method: "POST",
      body: responseBodyString,
      headers: requestHeaders,
    }
  );
  const { errors, payload } = await response.json();
  if (errors) {
    console.log(errors);
  } else 
  return { statusCode: 200, body: JSON.stringify(payload) };


  if (!data.firstName) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'badHTTP' })
  }

  // // Found the name.
  // // Sends a HTTP success code
//  console.log(res.status());
   res.status(200);

  

}