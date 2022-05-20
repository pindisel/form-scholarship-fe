import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PersonalService } from "../services/personal.service";
import { RefereeService } from "../services/referee.service";
import { StudyService } from "../services/study.service";
import { RefereeFormService } from "../services/refereeform.service";
import { Appbar } from "../components";
import {
  Typography,
  List,
  Stack,
  Container,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const grade = [
  {
    value: "Poor",
    label: "Poor",
  },
  {
    value: "Moderate",
    label: "Moderate",
  },
  {
    value: "Good",
    label: "Good",
  },
  {
    value: "Very Good",
    label: "Very Good",
  },
];

const RefereeForm = () => {
  const { id_user, id_ref } = useParams();
  // const navigate = useNavigate();
  // // console.log(id_user, id_ref);
  // const [personal, setPersonal] = useState([]);
  // const [referee, setReferee] = useState([]);
  // const [study, setStudy] = useState([]);
  // const [refereeForm, setRefereeForm] = useState({
  //   id_user: id_user,
  // });

  // const handleChange = (e) => {
  //   setRefereeForm({ ...refereeForm, [e.target.name]: e.target.value });
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setPersonal(
  //       await (
  //         await PersonalService.getPersonalById(id_user)
  //       ).data.data
  //     );
  //     setReferee(
  //       await (
  //         await RefereeService.getRefereeById(id_user)
  //       ).data.data
  //     );
  //     setStudy(await (await StudyService.getStudyById(id_user)).data.data);
  //     if (id_ref === 1) {
  //       var response = await RefereeFormService.getRef1ById(id_user);
  //     } else if (id_ref === 2) {
  //       response = await RefereeFormService.getRef2ById(id_user);
  //     }
  //     if (response.data.data) {
  //       navigate("/");
  //       window.location.reload();
  //     }
  //   };

  //   fetchData();
  // }, [id_user, id_ref, navigate]);
  // console.log(refereeForm);

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (id_ref === 1) {
  //       await RefereeFormService.createRef1(refereeForm);
  //     } else if (id_ref === 2) {
  //       await RefereeFormService.createRef2(refereeForm);
  //     }
  //     alert("Data successfully submitted");
  //     navigate("/");
  //     window.location.reload();
  //   } catch (error) {
  //     // console.log(error);
  //     alert("Error submitting data");
  //   }
  // };

  return (
    <>
      {id_ref}
      {id_user}
    </>
  );
};

export default RefereeForm;
