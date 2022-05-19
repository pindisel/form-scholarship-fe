import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { PersonalService } from "../services/personal.service";

const RefereeForm = () => {
  const { id } = useParams();
  console.log(id);
  // const [personal, setPersonal] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {

  //   };
  // }, []);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Letter of Recommendation Form
      </Typography>
      <Typography>A. Applicant Data</Typography>
    </>
  );
};

export default RefereeForm;
