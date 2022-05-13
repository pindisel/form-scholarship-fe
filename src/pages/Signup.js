import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  Grid,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { UserService } from "../services/user.service";
import Background from "../assets/images/COVER_UIII2.jpg";

const Signup = () => {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleShowPassword = () => {
    setShowPass(!showPass);
  };

  const onSubmit = async (e) => {
    const data = {
      name: nama,
      email: email,
      password: password,
    };
    try {
      if (
        data.nama === "" ||
        data.email === "" ||
        data.password === "" ||
        data.nama === null ||
        data.email === null ||
        data.password === null
      ) {
        throw new Error("Please fill all the fields");
      } else {
        const response = await UserService.createUser(data);
        console.log(response);
        navigate("/signin");
        alert("Berhasil Registrasi");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${Background})`,
        }}
      >
        <Grid item xs={3}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h4"
              fontWeight={600}
              gutterBottom
              textAlign="center"
              color="#fff"
              sx={{ marginBottom: 5 }}
            >
              UIII Admission
            </Typography>
            <Typography
              variant="h5"
              fontWeight={600}
              gutterBottom
              color="#fff"
              textAlign="center"
            >
              Nama
            </Typography>
            <TextField
              variant="outlined"
              color="darkBlue"
              size="small"
              fullWidth
              focused
              onChange={(e) => setNama(e.target.value)}
              sx={{ marginBottom: 5 }}
              style={{
                backgroundColor: "#fff",

                borderRadius: "5px",
              }}
              value={nama || ""}
            />
            <Typography
              variant="h5"
              fontWeight={600}
              gutterBottom
              color="#fff"
              textAlign="center"
            >
              Email
            </Typography>
            <TextField
              variant="outlined"
              color="darkBlue"
              size="small"
              type="email"
              fullWidth
              focused
              onChange={(e) => setEmail(e.target.value)}
              sx={{ marginBottom: 5 }}
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
              }}
              value={email || ""}
            />
            <Typography
              variant="h5"
              fontWeight={600}
              gutterBottom
              color="#fff"
              textAlign="center"
            >
              Password
            </Typography>
            <TextField
              variant="outlined"
              color="darkBlue"
              size="small"
              type={showPass ? "text" : "password"}
              fullWidth
              focused
              onChange={(e) => setPassword(e.target.value)}
              sx={{ marginBottom: 5 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {showPass ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
              }}
              value={password || ""}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                mt: 5,
              }}
              style={{ borderRadius: 10 }}
              fullWidth
            >
              <Typography variant="h6">Sign Up</Typography>
            </Button>
          </form>
          <Box
            sx={{
              mt: 3,
            }}
          >
            <Typography variant="h6" color="#fff" textAlign="center">
              Already have an account?
            </Typography>
            <Button
              variant="contained"
              style={{ borderRadius: 10 }}
              fullWidth
              onClick={() => {
                navigate("/signin");
              }}
            >
              <Typography variant="h6">Log In</Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
