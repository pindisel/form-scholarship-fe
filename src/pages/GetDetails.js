import React, { useEffect, useState } from "react";
import { PersonalService } from "../services/personal.service";
import { ContactService } from "../services/contact.service";
import { FinanceService } from "../services/finance.service";
import { StudyService } from "../services/study.service";
import { EducationService } from "../services/education.service";
import { LanguageService } from "../services/language.service";
import { JobService } from "../services/job.service";
import { RefereeService } from "../services/referee.service";
import { DocumentService } from "../services/document.service";
import { Container, Stack, Typography, List } from "@mui/material";
import { Appbar } from "../components";

const GetDetails = () => {
  const [personal, setPersonal] = useState([]);
  const [contact, setContact] = useState([]);
  const [finance, setFinance] = useState([]);
  const [study, setStudy] = useState([]);
  const [education, setEducation] = useState([]);
  const [language, setLanguage] = useState([]);
  const [job, setJob] = useState([]);
  const [referee, setReferee] = useState([]);
  const [document, setDocument] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user.id_user - 1;

  useEffect(() => {
    const fetchData = async () => {
      setPersonal(
        await (
          await PersonalService.getPersonal()
        ).data.data[userId]
      );
      setContact(await (await ContactService.getContact()).data.data[userId]);
      setFinance(await (await FinanceService.getFinance()).data.data[userId]);
      setStudy(await (await StudyService.getStudy()).data.data[userId]);
      setEducation(
        await (
          await EducationService.getEducation()
        ).data.data[userId]
      );
      setLanguage(
        await (
          await LanguageService.getLanguage()
        ).data.data[userId]
      );
      setJob(await (await JobService.getJob()).data.data[userId]);
      setReferee(await (await RefereeService.getReferee()).data.data[userId]);
      setDocument(
        await (
          await DocumentService.getDocument()
        ).data.data[userId]
      );
    };

    fetchData().then(() => setLoading(false));
  }, [userId]);
  console.log(
    personal,
    contact,
    finance,
    study,
    education,
    language,
    job,
    referee,
    document
  );

  return (
    <>
      <Appbar />
      {loading ? (
        <Typography variant="h4">Loading...</Typography>
      ) : (
        <Container>
          <Typography variant="h5" gutterBottom>
            A. Personal Details
          </Typography>
          <List
            sx={{
              width: "60%",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6">1. First Name:</Typography>
              <Typography variant="h6">{personal.f_name}</Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6">1. Last Name:</Typography>
              <Typography variant="h6">{personal.l_name}</Typography>
            </Stack>
          </List>
        </Container>
      )}
    </>
  );
};

export default GetDetails;
