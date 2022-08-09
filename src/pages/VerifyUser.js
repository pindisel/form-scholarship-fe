import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { UserService } from "../services/user.service";
import { Appbar } from "../components";
import { Container, Typography, Button, Grid } from "@mui/material";

const VerifyUser = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const params = Object.fromEntries([...searchParams]);
  // console.log(params);
  const token = params.token;
  const [component, setComponent] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await UserService.verifyUser(token);
        if (response.status === 200) {
          setComponent(
            <>
              <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: "80vh" }}
              >
                <Grid item>
                  <Typography variant="h5">
                    Your account has been verified. Please login to continue.
                  </Typography>
                </Grid>
                <Grid item>
                  <Button onClick={() => navigate("/login")}>Login</Button>
                </Grid>
              </Grid>
            </>
          );
        }
      } catch (error) {
        console.log(error);
        if (error.response.data.message === "Token expired") {
          setComponent(
            <>
              <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: "80vh" }}
              >
                <Grid item>
                  <Typography variant="h5">
                    Your account could not be verified. Token expired.
                  </Typography>
                </Grid>
                <Grid item>
                  <Button onClick={() => UserService.resendEmail(token)}>
                    Resend Email
                  </Button>
                </Grid>
              </Grid>
            </>
          );
        } else {
          setComponent(
            <>
              <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: "80vh" }}
              >
                <Grid item>
                  <Typography variant="h5">
                    Your account could not be verified. Invalid token.
                  </Typography>
                </Grid>
              </Grid>
            </>
          );
        }
      }
    };
    verifyUser();
  }, [token, navigate]);

  return (
    <>
      <Appbar />
      <Container>{component}</Container>
    </>
  );
};

export default VerifyUser;
