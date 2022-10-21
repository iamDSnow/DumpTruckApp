import fetch from "node-fetch";


export default async function  handler(req , res) {

  // Get data submitted in request's body.
  const data = await req.body

  const responseBodyString =  JSON.stringify({
    query:  `
    query MyQuery($_eq: String = "") {
      Users_connection(where: {email: {_eq: $_eq}}) {
        edges {
          node {
            uid
          }
        }
      }
    }
  `,
    variables: {
      
      email: data.email,
          
    },
  });

// Optional logging to see the responses
//    console.log('body: ', data)



  const response = await fetch(
    "https://just-chamois-38.hasura.app/v1/graphql",
    {
      method: "POST",
      body: responseBodyString,
      headers: {'Content-Type': 'application/json', 'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_SECRET, 'Cache-Control': 'no-cache' },
    }
  )





  await response.json({ revalidated: true })
   return res.status(200)



}

// async function handler( req, res) {

//     const data = await req.body;
//     // const email = data.email
//     console.log(data)

// //   const result = await fetch(
// //     "https://just-chamois-38.hasura.app/v1/graphql",
// //     {
// //       method: "POST",
//       headers: {'Content-Type': 'application/json', 'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_SECRET },
// //       body: JSON.stringify({
// //         query: operationsDoc,
// //         variables: variables,   
// //       })
// //     }
// //   );

// //   return await result.json();
// // }



// // function fetchMyQuery(email) {
// //     return fetchGraphQL(
// //       operationsDoc,
// //       "MyQuery",
// // {"email": email}
// //     );
// //   }
  
// //   async function startFetchMyQuery(email) {
// //     const { errors, data } = await fetchMyQuery(email);
  
// //     if (errors) {
// //       // handle those errors like a pro
// //       console.error(errors);
// //     }

// //   // do something great with this precious data
// //   console.log(data);
// //   return data.json({ revalidated: true }), res.status(200)

// }

// // startFetchMyQuery();