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
  const navigate = useNavigate();
  // console.log(id_user, id_ref);
  const [personal, setPersonal] = useState([]);
  const [referee, setReferee] = useState([]);
  const [study, setStudy] = useState([]);
  const [refereeForm, setRefereeForm] = useState({
    id_user: id_user,
  });

  const handleChange = (e) => {
    setRefereeForm({ ...refereeForm, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchData = async () => {
      setPersonal(
        await (
          await PersonalService.getPersonalById(id_user)
        ).data.data
      );
      setReferee(
        await (
          await RefereeService.getRefereeById(id_user)
        ).data.data
      );
      setStudy(await (await StudyService.getStudyById(id_user)).data.data);
      if (id_ref == 1) {
        var response = await RefereeFormService.getRef1ById(id_user);
      } else if (id_ref == 2) {
        var response = await RefereeFormService.getRef2ById(id_user);
      }
      if (response.data.data) {
        navigate("/");
        window.location.reload();
      }
    };

    fetchData();
  }, [id_user, id_ref]);
  // console.log(refereeForm);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id_ref == 1) {
        await RefereeFormService.createRef1(refereeForm);
      } else if (id_ref == 2) {
        await RefereeFormService.createRef2(refereeForm);
      }
      alert("Data successfully submitted");
      navigate("/");
      window.location.reload();
    } catch (error) {
      // console.log(error);
      alert("Error submitting data");
    }
  };

  return (
    <>
      {(id_ref == 1 || id_ref == 2) && personal ? (
        <>
          <Appbar />
          <Container>
            <form onSubmit={onSubmit}>
              <Typography variant="h5" gutterBottom textAlign="center">
                Letter of Recommendation Form
              </Typography>
              <Typography variant="h6">A. Applicant Data</Typography>
              <List
                sx={{
                  width: "60%",
                  // marginRight: "auto",
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={24}
                  sx={{
                    m: 1,
                  }}
                >
                  <Typography variant="body1">1. Name of Applicant:</Typography>
                  <Typography variant="body1" textAlign="left">
                    {personal.f_name} {personal.l_name}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={24}
                  sx={{
                    m: 1,
                  }}
                >
                  <Typography variant="body1">
                    2. ID Number / Passport No.:
                  </Typography>
                  <Typography variant="body1">
                    {personal.national_num} / {personal.passport_num}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={24}
                  sx={{
                    m: 1,
                  }}
                >
                  <Typography variant="body1">3. Study Program:</Typography>
                  <Typography variant="body1">{study.study_program}</Typography>
                </Stack>
              </List>
              <Typography variant="h6">B. Referee Data</Typography>
              <List
                sx={{
                  width: "60%",
                  marginRight: "auto",
                }}
              >
                {id_ref === "1" ? (
                  <>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      spacing={24}
                      sx={{
                        m: 1,
                      }}
                    >
                      <Typography variant="body1">1. Name:</Typography>
                      <Typography variant="body1">
                        {referee.f_name_ref1}
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      spacing={24}
                      sx={{
                        m: 1,
                      }}
                    >
                      <Typography variant="body1">2. Position:</Typography>
                      <Typography variant="body1">
                        {referee.position_ref1}
                      </Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      spacing={24}
                      sx={{
                        m: 1,
                      }}
                    >
                      <Typography variant="body1">3. Institution:</Typography>
                      <Typography variant="body1">
                        {referee.institution_ref1}
                      </Typography>
                    </Stack>
                  </>
                ) : (
                  <>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      spacing={24}
                      sx={{
                        m: 1,
                      }}
                    >
                      <Typography variant="body1">1. Name:</Typography>
                      <Typography variant="body1">
                        {referee.f_name_ref2}
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      spacing={24}
                      sx={{
                        m: 1,
                      }}
                    >
                      <Typography variant="body1">2. Position:</Typography>
                      <Typography variant="body1">
                        {referee.position_ref2}
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      spacing={24}
                      sx={{
                        m: 1,
                      }}
                    >
                      <Typography variant="body1">3. Institution:</Typography>
                      <Typography variant="body1">
                        {referee.institution_ref2}
                      </Typography>
                    </Stack>
                  </>
                )}
              </List>
              <Typography variant="h6">C. Competence</Typography>
              <List
                sx={{
                  width: "60%",
                  marginRight: "auto",
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={24}
                  sx={{
                    m: 1,
                  }}
                >
                  <Typography variant="body1">
                    1. Intellectual Ability
                  </Typography>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 130 }}>
                    <InputLabel>Grade</InputLabel>
                    <Select
                      name="intelectual_ability"
                      onChange={handleChange}
                      value={refereeForm.intelectual_ability || ""}
                      label="Grade"
                    >
                      {grade.map((item) => (
                        <MenuItem value={item.value} key={item.value}>
                          <Typography variant="body1">{item.label}</Typography>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={24}
                  sx={{
                    m: 1,
                  }}
                >
                  <Typography variant="body1">
                    2. Oral communication Skills
                  </Typography>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 130 }}>
                    <InputLabel>Grade</InputLabel>
                    <Select
                      name="oral_communication"
                      onChange={handleChange}
                      value={refereeForm.oral_communication || ""}
                      label="Grade"
                    >
                      {grade.map((item) => (
                        <MenuItem value={item.value} key={item.value}>
                          <Typography variant="body1">{item.label}</Typography>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={24}
                  sx={{
                    m: 1,
                  }}
                >
                  <Typography variant="body1">
                    3. Written communication Skills
                  </Typography>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 130 }}>
                    <InputLabel>Grade</InputLabel>
                    <Select
                      name="written_communication"
                      onChange={handleChange}
                      value={refereeForm.written_communication || ""}
                      label="Grade"
                    >
                      {grade.map((item) => (
                        <MenuItem value={item.value} key={item.value}>
                          <Typography variant="body1">{item.label}</Typography>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={24}
                  sx={{
                    m: 1,
                  }}
                >
                  <Typography variant="body1">
                    4. Ability to work independently
                  </Typography>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 130 }}>
                    <InputLabel>Grade</InputLabel>
                    <Select
                      name="independent_work"
                      onChange={handleChange}
                      value={refereeForm.independent_work || ""}
                      label="Grade"
                    >
                      {grade.map((item) => (
                        <MenuItem value={item.value} key={item.value}>
                          <Typography variant="body1">{item.label}</Typography>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={24}
                  sx={{
                    m: 1,
                  }}
                >
                  <Typography variant="body1">
                    5. Ability to organize workload
                  </Typography>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 130 }}>
                    <InputLabel>Grade</InputLabel>
                    <Select
                      name="organize_work"
                      onChange={handleChange}
                      value={refereeForm.organize_work || ""}
                      label="Grade"
                    >
                      {grade.map((item) => (
                        <MenuItem value={item.value} key={item.value}>
                          <Typography variant="body1">{item.label}</Typography>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={24}
                  sx={{
                    m: 1,
                  }}
                >
                  <Typography variant="body1">6. Motivation</Typography>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 130 }}>
                    <InputLabel>Grade</InputLabel>
                    <Select
                      name="motivation"
                      onChange={handleChange}
                      value={refereeForm.motivation || ""}
                      label="Grade"
                    >
                      {grade.map((item) => (
                        <MenuItem value={item.value} key={item.value}>
                          <Typography variant="body1">{item.label}</Typography>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Stack>
              </List>
              <Typography variant="h6">D. Overall Assessment</Typography>
              <Typography variant="body1">
                Please use this box to provide an overall assessment of the
                applicant. This includes the constuctive review of performance
                based on your interaction with the applicant. (max. 300 words)
              </Typography>
              <TextField
                multiline
                fullWidth
                minRows={4}
                name="assessment"
                onChange={handleChange}
                value={refereeForm.assessment || ""}
              />
              <Typography variant="h6">E. Recommendation</Typography>
              <Typography variant="body1">
                Please select one of the following by clicking on the relevant
                statement
              </Typography>
              <RadioGroup
                name="recommendation"
                value={refereeForm.recommendation || ""}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Strongly Recommend"
                  control={<Radio required />}
                  label={
                    <Typography variant="body1">
                      I strongly recommend this applicant for the above program
                      of study
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="Recommend"
                  control={<Radio required />}
                  label={
                    <Typography variant="body1">
                      I recommend the applicant for the above program of study
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="Not Recommend"
                  control={<Radio required />}
                  label={
                    <Typography variant="body1">
                      I do not recommend this applicant for the above program of
                      study
                    </Typography>
                  }
                />
              </RadioGroup>
              <Button type="submit">Submit</Button>
            </form>
          </Container>
        </>
      ) : (
        navigate("/").then(() => window.location.reload())
      )}
    </>
  );
};

export default RefereeForm;
