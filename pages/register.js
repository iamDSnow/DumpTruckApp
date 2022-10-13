import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Typography, Button, Grid, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

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

  const { data: session, status } = useSession();
  const start = reg.data.Users;

  const router = useRouter();



  useEffect(() => {
    
    if (status === "authenticated") {
      const uName = String(session.user.name);

      const gM = session.user.email;
      setFirstName(uName)

    setEmail(gM)

    const usePhone = () => ({
      phone: start.map((user) => {
        if (user.email === gM) {
          return user.phone;
        } else return null;
      }), 
    });

    const { phone } = usePhone();

    var filtered = phone.filter(function (el) {
      return el != null;
    });
  

    filtered ? router.push('/thankyou') : null

    
    }
  }, []);



  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }
  if (status === "authenticated") {
  

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


      async function fetchGraphQL(operationsDoc, operationName, variables) {
        const result = await fetch(
          "https://just-chamois-38.hasura.app/v1/graphql",
          {
            headers: { ["x-hasura-admin-secret"]: process.env.NEXT_PUBLIC_HASURA_SECRET },
            method: "POST",
            body: JSON.stringify({
              query: operationsDoc,
              variables: variables,
              operationName: operationName
            })
          }
        );
      
        return await result.json();
      }
      
      const operationsDoc = `
        mutation MyMutation($phone: String = "", $truckPlateNumber: String = "", $firstName: String = "", $email: String = "", $driverLic: String = "", $company: String = "") {
          insert_Users(objects: {truckPlateNumber: $truckPlateNumber, phone: $phone, firstName: $firstName, email: $email, driverLic: $driverLic, company: $company}) {
            affected_rows
          }
        }
      `;
      
      function executeMyMutation(phone, truckPlateNumber, firstName, email, driverLic, company) {
        return fetchGraphQL(
          operationsDoc,
          "MyMutation",
          {"phone": phone, "truckPlateNumber": truckPlateNumber, "firstName": firstName, "email": email, "driverLic": driverLic, "company": company}
        );
      }
      
      async function startExecuteMyMutation(phone, truckPlateNumber, firstName, email, driverLic, company) {
        const { errors, data } = await executeMyMutation(phone, truckPlateNumber, firstName, email, driverLic, company);
      
        if (errors) {
          // handle those errors like a pro
          console.error(errors);
        }
      
        // do something great with this precious data
        console.log(data);
      }
      
      startExecuteMyMutation(phone, truckPlateNumber, firstName, email, driverLic, company);

      

    };

    if (shouldRedirect) {
      return <Redirect to={"/thankyou"} />;
      // return router.push('/thankyou/')
    }

  

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
        onSubmit={handleSubmit}
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

        <Button
          type="submit"
          onClick={() => {
            // handleSubmit(),
            router.push('/thankyou')

          }}

        >
          Create
        </Button>
      </FormWrapper>
    );
  }
};

export default Register;

const FormWrapper = styled.form``;
