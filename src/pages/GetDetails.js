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
  const user = JSON.parse(sessionStorage.getItem("user"));
  const userId = user.id_user;
  const userRole = user.role;

  useEffect(() => {
    const fetchData = async () => {
      if (userRole === "admin") {
        setPersonal(await (await PersonalService.getPersonal()).data.data);
        setContact(await (await ContactService.getContact()).data.data);
        setFinance(await (await FinanceService.getFinance()).data.data);
        setStudy(await (await StudyService.getStudy()).data.data);
        setEducation(await (await EducationService.getEducation()).data.data);
        setLanguage(await (await LanguageService.getLanguage()).data.data);
        setJob(await (await JobService.getJob()).data.data);
        setReferee(await (await RefereeService.getReferee()).data.data);
        setDocument(await (await DocumentService.getDocument()).data.data);
      } else {
        setPersonal(
          await (
            await PersonalService.getPersonalById(userId)
          ).data.data
        );
        setContact(
          await (
            await ContactService.getContactById(userId)
          ).data.data
        );
        setFinance(
          await (
            await FinanceService.getFinanceById(userId)
          ).data.data
        );
        setStudy(await (await StudyService.getStudyById(userId)).data.data);
        setEducation(
          await (
            await EducationService.getEducationById(userId)
          ).data.data
        );
        setLanguage(
          await (
            await LanguageService.getLanguageById(userId)
          ).data.data
        );

        setJob(await (await JobService.getJobById(userId)).data.data);
        setReferee(
          await (
            await RefereeService.getRefereeById(userId)
          ).data.data
        );
        setDocument(
          await (
            await DocumentService.getDocumentById(userId)
          ).data.data
        );
      }
    };

    fetchData().then(() => setLoading(false));
  }, [userId, userRole]);
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
          {userRole === "admin" ? (
            <>asdas</>
          ) : (
            <>
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
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default GetDetails;
