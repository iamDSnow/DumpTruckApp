import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Typography, Button, Grid, TextField, Box } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

export const getStaticProps = async () => {

  const response = await fetch(
    "https://just-chamois-38.hasura.app/v1/graphql",
    {
      method: "POST",
      headers: {
        ["x-hasura-admin-secret"]: process.env.NEXT_PUBLIC_HASURA_SECRET,
         'Cache-Control': 'no-cache' 
      },
      body: JSON.stringify({
        query: `
        query MyQuery {
          Users {
            uid
            email
            phone
          }
        }
      `,
      }),
    }
  );

  const reg = await response.json();

  return {
    props: { reg },

  };
};

const Register = ({ reg }) => {
  const [firstName, setFirstName] = useState();
  const [driverLic, setDriverLic] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [truckPlateNumber, setTruckPlateNumber] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const start = reg.data?.Users;

  const { data: session, status } = useSession();

  const router = useRouter();
 
  useEffect(() => {
    if (status === "authenticated") {
      const gEmail = session.user.email;
      const gFirstName = session.user.name;

        setEmail(gEmail),
        setFirstName(gFirstName)

    }
    
  }, [status]);

  

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }
  if (status === "authenticated") {
    const revalidate = async (e) => {

      const data ={
        email: email,
      }
  
  // Send the data to the server in JSON format.
  const JSONdata = JSON.stringify(data)
  

  console.log(JSONdata)
  const endpoint = '/api/revalidate'
  
  const options = {
    // The method is POST because we are sending data.
    method: 'POST',
    // Tell the server we're sending JSON.
    headers: {
      'Content-Type': 'application/json',
    },
    // Body of the request is the JSON data we created above.
    body: JSONdata,
  }
  
  await fetch(endpoint, options)
  
  console.log('Success')
    }
    const handleSubmit = async (e) => {


    //   async function fetchGraphQL(operationsDoc, operationName, variables) {
    //     const result = await fetch(
    //       "https://just-chamois-38.hasura.app/v1/graphql",
    //       {
    //         headers: { ["x-hasura-admin-secret"]: process.env.NEXT_PUBLIC_HASURA_SECRET },
    //         method: "POST",
    //         body: JSON.stringify({
    //           query: operationsDoc,
    //           variables: variables,
    //           operationName: operationName
    //         })
    //       }
    //     );
      
    //     return await result.json();
    //   }
      
    //   const operationsDoc = `
    //     mutation MyMutation($phone: String = "", $truckPlateNumber: String = "", $firstName: String = "", $email: String = "", $driverLic: String = "", $company: String = "") {
    //       insert_Users(objects: {truckPlateNumber: $truckPlateNumber, phone: $phone, firstName: $firstName, email: $email, driverLic: $driverLic, company: $company}) {
    //         affected_rows
    //       }
    //     }
    //   `;
      
    //   function executeMyMutation(phone, truckPlateNumber, firstName, email, driverLic, company) {
    //     return fetchGraphQL(
    //       operationsDoc,
    //       "MyMutation",
    //       {"phone": phone, "truckPlateNumber": truckPlateNumber, "firstName": firstName, "email": email, "driverLic": driverLic, "company": company}
    //     );
    //   }
      
    //   async function startExecuteMyMutation(phone, truckPlateNumber, firstName, email, driverLic, company) {
    //     const { errors, data } = await executeMyMutation(phone, truckPlateNumber, firstName, email, driverLic, company);
      
    //     if (errors) {
    //       // handle those errors like a pro
    //       console.error(errors);
    //     }
      
    //     // do something great with this precious data
    //     console.log(data);
    //   }
      


    const data ={
  
      firstName: firstName,
      driverLic: driverLic,
      email: email,
      phone: phone,
       company: company,
       truckPlateNumber: truckPlateNumber,
     
    }

// Send the data to the server in JSON format.
const JSONdata = JSON.stringify(data)

// console.log(JSONdata)
  
const endpoint = '/api/signUpAPI'

const options = {
  // The method is POST because we are sending data.
  method: 'POST',
  // Tell the server we're sending JSON.
  headers: {
    'Content-Type': 'application/json',
  },
  // Body of the request is the JSON data we created above.
  body: JSONdata,
}

 await fetch(endpoint, options)

console.log('Success')



    };

   

    const id = reg.data?.Users.map((user) => {
      if (user.email === email) {
        return user.uid;
      } else return "";
    })
      .reduce((a, b) => a + b, 0)
      .replace("NaN", "");

    localStorage.setItem("u", JSON.stringify(id));

    return (

     
      <FormWrapper
        css={`
          padding: 2rem 4rem;
          display: flex;
          justify-items: center;
          
        `}
      >
        <Typography>Create An Account</Typography>
        <br />

        <Grid
          container
          columns={12}
          justifyContent="center"
          alignItems="center"

        >
          <Grid
          container
      
        >
          <Grid item  >
            <TextField
              disabled
              required={true}
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              placeholder="Full Name"

            />
          </Grid>
          <Grid item >
            <TextField
              required={true}
              type="text"
              name="driverLic"
              id="driverLic"
              value={driverLic}
              onChange={(e) => setDriverLic(e.target.value)}
              placeholder="Driver Lic."
            />
            </Grid>
            
          </Grid>
          <Grid
          container
          row={12}
      
        >
          <Grid item >
            <TextField
              disabled
              required={true}
              name="email"
              id="email"
              type="email"
              placeholder="Email Address"
              value={email}

            />
          </Grid>
          <Grid item >
            <TextField
              required={true}
              name="phone"
              id="phone"
              type="text"
              value={phone}
              placeholder=" Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
          </Grid>
          <Grid
          container
          row={12}
      
        >
          <Grid item  >
            <TextField
              required={true}
              name="company"
              id="company"
              type="text"
              value={company}
              placeholder=" Comapany Name"
              onChange={(e) => setCompany(e.target.value)}
            />
          </Grid>
          <Grid item  >
            <TextField
              required={true}
              name="truckPlateNumber"
              id="truckPlateNumber"
              type="text"
              value={truckPlateNumber}
              placeholder=" Plate Number"
              onChange={(e) => setTruckPlateNumber(e.target.value)}
            />
            </Grid>
          </Grid>
        </Grid>

        <Link
          href="/loadingPage"
          >
            <Button
          type="submit"


          onClick={
            () => {
            handleSubmit();
            // revalidate();

          }
        }
        >
          Create
          </Button>
        </Link>
      </FormWrapper>
    );
  }
};

export default Register;

const FormWrapper = styled.form``;
