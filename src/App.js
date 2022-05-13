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
    green: {
      main: "#007C4B",
      contrastText: "#fff",
    },
    darkBlue: {
      main: "#001730",
      contrastText: "#fff",
    },
  },
});

function App() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user.role);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          {token && user ? (
            <Routes>
              {/* <Route
                exact
                path="/*"
                element={<Navigate to="/regist" replace />}
              /> */}
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
