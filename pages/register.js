import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Typography, Button, Grid, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

export const getStaticProps = async () => {
  await fetch("https://just-chamois-38.hasura.app/v1/graphql");

  const response = await fetch(
    "https://just-chamois-38.hasura.app/v1/graphql",
    {
      method: "POST",
      headers: {
        ["x-hasura-admin-secret"]: process.env.NEXT_PUBLIC_HASURA_SECRET,
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
    revalidate: 1

  };
};

const Register = ({ reg }) => {
  const [firstName, setFirstName] = useState();
  const [driverLic, setDriverLic] = useState("");
  // const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [truckPlateNumber, setTruckPlateNumber] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const { data: session, status } = useSession();

  const router = useRouter();
 

  
  // useEffect(() => {
    
  // }, []);

  

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }
  if (status === "authenticated") {

    const email = session.user.email;
  const firstName = session.user.name;
  
    const start = reg.data.Users;

    const usePhone = () => ({
      phones: start.map((user) => {
        if (user.email === email) {
          return user.phone;
        } 
      }), 
    });



    const { phones } = usePhone();


    var filtered = phones.filter(function (el) {
      return el != null;
    });
  

    console.log( phones)


    console.log( filtered.length)
    filtered.length ?  router.push('/thankyou') : null

    // console.log(reg.data.Users.map(user => {
    //   if (user.email === gM) {
    //     return user.uid
    //   }
    // }).reduce((a, b) => a + b, 0).replace('NaN', '')  )

    function Redirect({ to }) {
      const router = useRouter();

      useEffect(() => {
        router.push(to);
      }, [to]);
      return null;
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
      
    //   startExecuteMyMutation(phone, truckPlateNumber, firstName, email, driverLic, company).then(router.push('/thankyou'))


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
  
const endpoint = './api/signUpAPI.js'

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

const response = await fetch(endpoint, options)

const result = await response.json()
alert(`Is this your full name: ${result.data}`)


await router.push('/thankyou');
      

    };

    // if (shouldRedirect) {
    //   return <Redirect to={"/thankyou"} />;
    //   // return router.push('/thankyou/')
    // }

  

    const id = reg.data.Users.map((user) => {
      if (user.email === email) {
        return user.uid;
      } else return "";
    })
      .reduce((a, b) => a + b, 0)
      .replace("NaN", "");

    localStorage.setItem("u", JSON.stringify(id));

    return (
      <FormWrapper
        // action="/api/signUpAPI"
        // method="post"
        // onSubmit={handleSubmit}
        css={`
          padding: 2rem 4rem;
        `}
      >
        <Typography>Create An Account</Typography>
        <br />

        <Grid
          container
          columns={8}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
          <Grid item xs={4}>
            <TextField
              required={true}
              name="phone"
              id="phone"
              type="number"
              value={phone}
              placeholder=" Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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

        {/* <Link
          href="/thankyou"
          > */}
            <Button
          type="submit"

          onClick={() => {
            handleSubmit();
            router.push('/thankyou');

          }}

        >
          Create
          </Button>
        {/* </Link> */}
      </FormWrapper>
    );
  }
};

export default Register;

const FormWrapper = styled.form``;
