import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { StudentRegist, Login, Signup } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/regist" element={<StudentRegist />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
