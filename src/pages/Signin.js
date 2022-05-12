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
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { UserService } from "../services/user.service";
import Background from "../assets/images/COVER_UIII2.jpg";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  // console.log(email);
  // console.log(password);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    // console.log(data);
    try {
      const response = await UserService.signinUser(data);
      console.log(response);
      if (response.data.success) {
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.data.user));
        navigate("/regist");
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  const handleShowPassword = () => {
    setShowPass(!showPass);
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
          <form>
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
              textAlign="center"
              color="#fff"
            >
              Email
            </Typography>
            <TextField
              variant="outlined"
              color="darkBlue"
              size="small"
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
              textAlign="center"
              color="#fff"
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
              onClick={onSubmit}
            >
              <Typography variant="h6">Login</Typography>
            </Button>
          </form>
          <Box
            sx={{
              mt: 3,
            }}
          >
            <Typography variant="h6" color="#fff" textAlign="center">
              Belum memiliki akun?
            </Typography>
            <Button
              variant="contained"
              type="submit"
              style={{ borderRadius: 10 }}
              fullWidth
              onClick={() => {
                navigate("/signup");
              }}
            >
              <Typography variant="h6">Sign Up</Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
