import React from 'react';
import SignInModal from './components/signInModal';
import NewActModal from './components/newActModal'
import { useState } from 'react';

export default function Homepage() {

  

  return (
    <div>
      
      <SignInModal />
      <NewActModal />
   

      <button onClick={startFetchMyQuery}> Test </button>
     
    </div>
  );
}

export async function fetchGraphQL(operationsDoc) {

  const result = await fetch(
    "https://just-chamois-38.hasura.app/v1/graphql",
    {
      method: "POST",
      headers: { ["x-hasura-admin-secret"]: process.env.NEXT_PUBLIC_HASURA_SECRET},
      body: JSON.stringify({
      query: operationsDoc,
        
      })
    }

  );

  return await result.json();
}

const operationsDoc = `
  query MyQuery {
    Users {
      firstName
      email
      user_role
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
}

