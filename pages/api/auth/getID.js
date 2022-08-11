export default async function handler(req, res) {

async function fetchGraphQL(operationsDoc, operationName, variables) {
    const data = await fetch(
        "https://just-chamois-38.hasura.app/v1/graphql",
      {
        method: "POST",
        headers: { ["x-hasura-admin-secret"]: process.env.NEXT_PUBLIC_HASURA_SECRET },
        body: JSON.stringify({
          query: operationsDoc,
          variables: {
      
            firstName: data.firstName,
      
            email: data.email,
            
            
          },
          operationName: operationName
        })
      }
    );
  
    return await data.json();

  }
  
  const operationsDoc = `
    query MyQuery {
      Users {
        uid
        email
        firstName
      }
    }
  `;
  
  function fetchMyQuery() {
    return fetchGraphQL(
      operationsDoc,
      "MyQuery",
      {}
    );
  }
  
  async function startFetchMyQuery() {
    const { errors, data } = await fetchMyQuery();
  
    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }
  
    // do something great with this precious data
            console.log(data);
    
          res.status(200);
  }
  
    
  startFetchMyQuery();
}