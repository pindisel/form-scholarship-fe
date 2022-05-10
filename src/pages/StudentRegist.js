import React, { useState } from "react";
import {
  PersonalDetails,
  ContactDetails,
  FinancialSupport,
  ProposedStudy,
  EducationBackground,
  LanguageBackground,
  JobStatus,
  RefereeDetails,
  ApplicantsDeclaration,
  DocumentUpload,
} from "../components";
import { PersonalService } from "../services/personal.service";
import { ContactService } from "../services/contact.service";
import { FinanceService } from "../services/finance.service";
import { StudyService } from "../services/study.service";
import { EducationService } from "../services/education.service";
import { LanguageService } from "../services/language.service";
import { JobService } from "../services/job.service";
import { RefereeService } from "../services/referee.service";

import { Container, Button, Stack } from "@mui/material";

const StudentRegist = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(
      personal,
      contact,
      finance,
      study,
      education,
      language,
      job,
      referee
    );

    try {
      await PersonalService.createPersonal(personal);
      await ContactService.createContact(contact);
      await FinanceService.createFinance(finance);
      await StudyService.createStudy(study);
      await EducationService.createEducation(education);
      await LanguageService.createLanguage(language);
      await JobService.createJob(job);
      await RefereeService.createReferee(referee);
      alert("Successfully submitted");
    } catch (error) {
      console.log(error);
    }
  };
  const [personal, setPersonal] = useState({});
  const [contact, setContact] = useState({});
  const [finance, setFinance] = useState({});
  const [study, setStudy] = useState({});
  const [education, setEducation] = useState({});
  const [language, setLanguage] = useState({});
  const [job, setJob] = useState({});
  const [referee, setReferee] = useState({});
  const [pages, setPages] = useState(1);
  let component = null;

  if (pages === 1) {
    component = <PersonalDetails onChange={setPersonal} value={personal} />;
  } else if (pages === 2) {
    component = <ContactDetails onChange={setContact} value={contact} />;
  } else if (pages === 3) {
    component = <FinancialSupport onChange={setFinance} value={finance} />;
  } else if (pages === 4) {
    component = <ProposedStudy onChange={setStudy} value={study} />;
  } else if (pages === 5) {
    component = (
      <EducationBackground onChange={setEducation} value={education} />
    );
  } else if (pages === 6) {
    component = <LanguageBackground onChange={setLanguage} value={language} />;
  } else if (pages === 7) {
    component = <JobStatus onChange={setJob} value={job} />;
  } else if (pages === 8) {
    component = <RefereeDetails onChange={setReferee} value={referee} />;
  } else if (pages === 9) {
    component = <ApplicantsDeclaration />;
  } else if (pages === 10) {
    component = <DocumentUpload />;
  }
  return (
    <>
      <Container
        sx={{
          mt: "2rem",
        }}
      >
        <form onSubmit={onSubmit}>
          {component}
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            {pages > 1 && (
              <Button
                type="button"
                onClick={() => setPages(pages - 1)}
                variant="contained"
                color="primary"
                style={{ margin: "10px" }}
              >
                Back
              </Button>
            )}
            {pages < 10 && (
              <Button
                type="button"
                variant="contained"
                color="primary"
                onClick={() => setPages(pages + 1)}
                style={{ margin: "10px" }}
              >
                Next
              </Button>
            )}
            {pages === 10 && (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ margin: "10px" }}
              >
                Save and Submit
              </Button>
            )}
          </Stack>
        </form>
      </Container>
    </>
  );
};

export default StudentRegist;
