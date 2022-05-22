import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {
  StudentRegist,
  Login,
  Signup,
  GetDetails,
  RefereeForm,
  VerifyUser,
} from "./pages";
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
  const token = sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          {token && user ? (
            <>
              {user.role === "admin" ? (
                <Routes>
                  <Route path="/" element={<Navigate to="/details" />} />
                  <Route path="/details" element={<GetDetails />} />
                </Routes>
              ) : (
                <Routes>
                  <Route
                    exact
                    path="/*"
                    element={<Navigate to="/regist" replace />}
                  />
                  <Route exact path="/regist" element={<StudentRegist />} />
                  <Route exact path="/details" element={<GetDetails />} />
                </Routes>
              )}
            </>
          ) : (
            <Routes>
              <Route
                exact
                path="/*"
                element={<Navigate to="/signin" replace />}
              />
              <Route exact path="/signin" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route path="/referee" element={<RefereeForm />} />
              <Route path="/verify/:token" element={<VerifyUser />} />
            </Routes>
          )}
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
