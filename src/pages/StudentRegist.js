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
import { DocumentService } from "../services/document.service";
import {
  Container,
  Button,
  Stack,
  AppBar,
  Typography,
  Grid,
} from "@mui/material";
import Logo from "../assets/images/Logo.png";
import Icon from "../assets/icons/icon.svg";
import { useNavigate } from "react-router-dom";

const StudentRegist = () => {
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("files", document1);
    formData.append("files", document2);
    formData.append("files", document3);
    formData.append("files", document4);
    formData.append("files", document5);
    formData.append("files", document6);
    formData.append("files", document7);
    formData.append("files", document8);
    formData.append("files", document9);

    var fields = [
      personal,
      contact,
      finance,
      study,
      education,
      language,
      job,
      referee,
    ];
    var data = {};
    fields.forEach((field) => {
      data = { ...data, [field]: personal[field] };
    });
    // if (data.country === undefined) {
    //   alert("Please select your country");
    // }

    // var size = Object.keys(personal);
    // var data = {};
    // size.forEach((element) => {
    //   data = { ...data, [element]: personal[element] };
    // });
    // console.log(data);

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

  const [personal, setPersonal] = useState({});
  const [contact, setContact] = useState({});
  const [finance, setFinance] = useState({});
  const [study, setStudy] = useState({});
  const [education, setEducation] = useState({});
  const [language, setLanguage] = useState({});
  const [job, setJob] = useState({});
  const [referee, setReferee] = useState({});
  const [document1, setDocument1] = useState(null);
  const [document2, setDocument2] = useState(null);
  const [document3, setDocument3] = useState(null);
  const [document4, setDocument4] = useState(null);
  const [document5, setDocument5] = useState(null);
  const [document6, setDocument6] = useState(null);
  const [document7, setDocument7] = useState(null);
  const [document8, setDocument8] = useState(null);
  const [document9, setDocument9] = useState(null);
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
      />
    );
  } else if (pages === 10) {
    component = <ApplicantsDeclaration />;
  }

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const appBar = (
    <AppBar position="static" color="transparent" elevation={0}>
      <Stack
        spacing={2}
        alignItems="flex-end"
        justifyContent="center"
        style={{
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingRight: "50px",
        }}
        sx={{
          backgroundColor: "blue.main",
        }}
      >
        <img src={Logo} alt="logo" style={{ width: "200px" }} />
      </Stack>
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="flex-end"
        sx={{
          mt: "5px",
          mb: "5px",
        }}
      >
        <Grid item>
          <Typography
            variant="h5"
            noWrap
            textAlign="right"
            sx={{
              mb: "5px",
            }}
          >
            {user.name}
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              localStorage.clear();
              navigate("/signin");
              window.location.reload();
            }}
          >
            Logout
          </Button>
        </Grid>
        <Grid
          item
          sx={{
            mr: "50px",
          }}
        >
          <img src={Icon} alt="icon" style={{ width: "75px" }} />
        </Grid>
      </Grid>
    </AppBar>
  );

  return (
    <>
      {token && user ? (
        <>
          {appBar}
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
      ) : null}
    </>
  );
};

export default StudentRegist;
