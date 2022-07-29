export default async function  handler(req, res) {
  // Get data submitted in request's body.
  const data = req.body

 

  const responseBody = {
    app_metadata: {
      roles: ["new"],
      my_user_info: "New User",
    },
  };

  const responseBodyString = JSON.stringify({
    query: `mutation insertUser($firstName:String,$lastName:String,$email:String, $phone:String, $company:String,  $truckPlateNumber:String) {
      insert_Users(objects: {email:$email, firstName:$firstName, lastName:$lastName, phone:$phone, company:$company, truckPlateNumber:$truckPlateNumber}) {
        affected_rows
      }
    }
    `,
    variables: {
      
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phoneNumber,
      company: data.comName,
      truckPlateNumber: data.truckPlateNumber,
      
    },
  });
// Optional logging to see the responses
  console.log('body: ', data)


  const response = await fetch(
    "https://just-chamois-38.hasura.app/v1/graphql",
    {
      method: "POST",
      body: responseBodyString,
      headers: { ["x-hasura-admin-secret"]: process.env.NEXT_PUBLIC_HASURA_SECRET },
    }
  );
  console.log("finished");
  const { errors, payload } = await response.json();
  if (errors) {
    console.log(errors);
  } else return { statusCode: 200, body: JSON.stringify(responseBody) };


  // if (!data.firstName || !data.lastName) {
  //   // Sends a HTTP bad request error code
  //   return res.status(400).json({ data: 'First or last name not found' })
  // }

  // // Found the name.
  // // Sends a HTTP success code
  // res.status(200).json({ data: `${data.firstName} ${data.lastName}` })
}