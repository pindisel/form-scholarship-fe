import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { StudentRegist, Login, Signup, GetDetails } from "./pages";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    darkBlue: {
      main: "#001730",
      contrastText: "#fff",
    },
    white: {
      main: "#fff",
      contrastText: "#000",
    },
    blue: {
      main: "#02516C",
    },
  },
});

function App() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const expiration = localStorage.getItem("expiration");
  const now = new Date();
  console.log(now.getTime() + " " + expiration);
  // console.log(user.role);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          {token && user && now.getTime() < expiration ? (
            <Routes>
              <Route
                exact
                path="/*"
                element={<Navigate to="/regist" replace />}
              />
              <Route exact path="/regist" element={<StudentRegist />} />
              {user.role === "admin" ? (
                <Route exact path="/details" element={<GetDetails />} />
              ) : null}
            </Routes>
          ) : (
            <Routes>
              <Route
                exact
                path="/*"
                element={<Navigate to="/signin" replace />}
              />
              <Route exact path="/signin" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
            </Routes>
          )}
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
