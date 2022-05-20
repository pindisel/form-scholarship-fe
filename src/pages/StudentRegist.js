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
  Appbar,
} from "../components";
import { PersonalService } from "../services/personal.service";
import { ContactService } from "../services/contact.service";
import { FinanceService } from "../services/finance.service";
import { StudyService } from "../services/study.service";
import { EducationService } from "../services/education.service";
import { LanguageService } from "../services/language.service";
import { JobService } from "../services/job.service";
import { RefereeService } from "../services/referee.service";
import { DocumentService } from "../services/document.service";
import { Container, Button, Stack } from "@mui/material";

const StudentRegist = () => {
  const token = sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const userId = user.id_user;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id_user", userId);
    formData.append("files", document1);
    formData.append("files", document2);
    formData.append("files", document3);
    formData.append("files", document4);
    formData.append("files", document5);
    formData.append("files", document6);
    formData.append("files", document7);
    formData.append("files", document8);
    formData.append("files", document9);
    formData.append("files", document10);
    formData.append("files", document11);

    try {
      await PersonalService.createPersonal(personal);
      await ContactService.createContact(contact);
      await FinanceService.createFinance(finance);
      await StudyService.createStudy(study);
      await EducationService.createEducation(education);
      await LanguageService.createLanguage(language);
      await JobService.createJob(job);
      await RefereeService.createReferee(referee);
      await DocumentService.createDocument(formData);
      alert("Successfully submitted");
    } catch (error) {
      console.log(error);
    }
  };

  const [personal, setPersonal] = useState({
    id_user: userId,
  });
  const [contact, setContact] = useState({
    id_user: userId,
  });
  const [finance, setFinance] = useState({
    id_user: userId,
  });
  const [study, setStudy] = useState({ id_user: userId });
  const [education, setEducation] = useState({ id_user: userId });
  const [language, setLanguage] = useState({ id_user: userId });
  const [job, setJob] = useState({ id_user: userId });
  const [referee, setReferee] = useState({ id_user: userId });
  const [document1, setDocument1] = useState(null);
  const [document2, setDocument2] = useState(null);
  const [document3, setDocument3] = useState(null);
  const [document4, setDocument4] = useState(null);
  const [document5, setDocument5] = useState(null);
  const [document6, setDocument6] = useState(null);
  const [document7, setDocument7] = useState(null);
  const [document8, setDocument8] = useState(null);
  const [document9, setDocument9] = useState(null);
  const [document10, setDocument10] = useState(null);
  const [document11, setDocument11] = useState(null);
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
    component = (
      <DocumentUpload
        setDocument1={setDocument1}
        setDocument2={setDocument2}
        setDocument3={setDocument3}
        setDocument4={setDocument4}
        setDocument5={setDocument5}
        setDocument6={setDocument6}
        setDocument7={setDocument7}
        setDocument8={setDocument8}
        setDocument9={setDocument9}
        setDocument10={setDocument10}
        setDocument11={setDocument11}
      />
    );
  } else if (pages === 10) {
    component = <ApplicantsDeclaration />;
  }

  return (
    <>
      {token && user ? (
        <>
          <Appbar />
          <Container>
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
                {pages === 8 && (
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
      ) : null}
    </>
  );
};

export default StudentRegist;
