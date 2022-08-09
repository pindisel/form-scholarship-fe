import React from "react";
import { Button, Stack, AppBar, Typography, Grid } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import Icon from "../assets/icons/icon.svg";
import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Stack
        spacing={2}
        alignItems="flex-end"
        justifyContent="center"
        style={{
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingRight: "50px",
        }}
        sx={{
          backgroundColor: "blue.main",
        }}
      >
        <img src={Logo} alt="logo" style={{ width: "200px" }} />
      </Stack>
      {user ? (
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="flex-end"
          sx={{
            mt: "5px",
            mb: "5px",
          }}
        >
          <Grid item>
            <Typography
              variant="h5"
              noWrap
              textAlign="right"
              sx={{
                mb: "5px",
              }}
            >
              {user.name}
            </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                sessionStorage.clear();
                navigate("/signin");
                window.location.reload();
              }}
            >
              Logout
            </Button>
          </Grid>
          <Grid
            item
            sx={{
              mr: "50px",
            }}
          >
            <img src={Icon} alt="icon" style={{ width: "75px" }} />
          </Grid>
        </Grid>
      ) : null}
    </AppBar>
  );
};

export default Appbar;
