import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { UserService } from "../services/user.service";
import { Appbar } from "../components";
import { Container, Typography } from "@mui/material";

const VerifyUser = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const params = Object.fromEntries([...searchParams]);
  // console.log(params);
  const token = params.token;

  useEffect(() => {
    UserService.verifyUser(token).then(() => {
      navigate("/signin");
    });
  }, [token, navigate]);

  return (
    <>
      <Appbar />
      <Container>
        <Typography variant="h4" textAlign="center">
          Email verification failed. Link may be expired.
        </Typography>
      </Container>
    </>
  );
};

export default VerifyUser;
