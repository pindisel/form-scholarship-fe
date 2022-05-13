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
import { Container, Stack, Typography } from "@mui/material";

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

  useEffect(() => {
    const fetchData = async () => {
      setPersonal(await (await PersonalService.getPersonal()).data);
      setContact(await (await ContactService.getContact()).data);
      setFinance(await (await FinanceService.getFinance()).data);
      setStudy(await (await StudyService.getStudy()).data);
      setEducation(await (await EducationService.getEducation()).data);
      setLanguage(await (await LanguageService.getLanguage()).data);
      setJob(await (await JobService.getJob()).data);
      setReferee(await (await RefereeService.getReferee()).data);
      setDocument(await (await DocumentService.getDocument()).data);
    };
    // console.log(
    //   personal
    //   // contact,
    //   // finance,
    //   // study,
    //   // education,
    //   // language,
    //   // job,
    //   // referee,
    //   // document
    // );
    fetchData();
  }, []);

  return (
    <>
      {personal.data.length > 0 &&
      contact.data.length > 0 &&
      finance.data.length > 0 &&
      study.data.length > 0 &&
      education.data.length > 0 &&
      language.data.length > 0 &&
      job.data.length > 0 &&
      referee.data.length > 0 &&
      document.data.length > 0 ? (
        <Container>
          <Stack>
            <Typography variant="h5" gutterBottom>
              A. Personal Details
            </Typography>
          </Stack>
        </Container>
      ) : (
        <Container>Empty Data</Container>
      )}
    </>
  );
};

export default GetDetails;
