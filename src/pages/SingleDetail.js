import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PersonalService } from "../services/personal.service";
import { ContactService } from "../services/contact.service";
import { FinanceService } from "../services/finance.service";
import { StudyService } from "../services/study.service";
import { EducationService } from "../services/education.service";
import { LanguageService } from "../services/language.service";
import { JobService } from "../services/job.service";
import { RefereeService } from "../services/referee.service";
import { RefereeFormService } from "../services/refereeform.service";
import { DocumentService } from "../services/document.service";
import { Link } from "react-scroll";
import {
  Container,
  Stack,
  Typography,
  List,
  IconButton,
  Box,
  ListItem,
  Button,
} from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";
import { Appbar } from "../components";

const SingleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [personal, setPersonal] = useState([]);
  const [contact, setContact] = useState([]);
  const [finance, setFinance] = useState([]);
  const [study, setStudy] = useState([]);
  const [education, setEducation] = useState([]);
  const [language, setLanguage] = useState([]);
  const [job, setJob] = useState([]);
  const [referee, setReferee] = useState([]);
  const [referee1, setReferee1] = useState([]);
  const [referee2, setReferee2] = useState([]);
  const [document, setDocument] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setPersonal(await (await PersonalService.getPersonalById(id)).data.data);
      setContact(await (await ContactService.getContactById(id)).data.data);
      setFinance(await (await FinanceService.getFinanceById(id)).data.data);
      setStudy(await (await StudyService.getStudyById(id)).data.data);
      setEducation(
        await (
          await EducationService.getEducationById(id)
        ).data.data
      );
      setLanguage(await (await LanguageService.getLanguageById(id)).data.data);
      setJob(await (await JobService.getJobById(id)).data.data);
      setReferee(await (await RefereeService.getRefereeById(id)).data.data);
      setReferee1(await (await RefereeFormService.getRefById(1, id)).data.data);
      setReferee2(await (await RefereeFormService.getRefById(2, id)).data.data);
      setDocument(await (await DocumentService.getDocumentById(id)).data.data);
    };

    fetchData().then(() => setLoading(false));
  }, [id]);

  console.log(
    // personal,
    // contact,
    // finance,
    // study,
    // education,
    // language,
    // job,
    // referee
    // referee1
    // referee2
    document
  );

  return (
    <>
      <Appbar />

      {loading ? (
        <Typography variant="h4">Loading...</Typography>
      ) : (
        <Container maxWidth="xl">
          <IconButton
            variant="contained"
            color="darkBlue"
            onClick={() => navigate("/details")}
          >
            <ArrowBackIosNew />
          </IconButton>
          <Stack direction="row" justifyContent="space-between">
            <Box
              sx={{
                width: "70%",
              }}
            >
              <Typography variant="h5" gutterBottom id="personal">
                A. Personal Details
              </Typography>
              <List>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    1. Title:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {personal.title}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    2. Family Name:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {personal.f_name}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    3. Given Name:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {personal.l_name}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    4. Place of Birth:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {personal.birth_place}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    5. Date of Birth
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {personal.birth_date.substring(0, 10)}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    6. Gender:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {personal.gender}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    7. Country of Citizenship:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {personal.country}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    8. National Identity Number:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {personal.national_num}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    9. Passport No.:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {personal.passport_num}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    marginLeft: "3rem",
                  }}
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    Issue Date:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {personal.issue_date.substring(0, 10)}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    marginLeft: "3rem",
                  }}
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    Expiry Date:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {personal.expiry_date.substring(0, 10)}
                  </Typography>
                </Stack>
              </List>
              <Typography
                variant="h5"
                gutterBottom
                id="contact"
                sx={{
                  marginTop: "2rem",
                }}
              >
                B. Contact Details
              </Typography>
              <List>
                <Typography variant="h6">Residential Address</Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    1. Address Line 1:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {contact.address1}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    2. Address Line 2:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {contact.address2}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    3. District/City:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {contact.city}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    4. State/Province:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {contact.province}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    5. Country:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {contact.country}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    6. Postal Code:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {contact.postal_code}
                  </Typography>
                </Stack>
                <Typography variant="h6">Phone</Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    7. Home Phone Number:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {contact.home_phone}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    8. Mobile Number:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {contact.mobile_phone}
                  </Typography>
                </Stack>
                <Typography variant="h6">Email Address</Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    9. Primary Email:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {contact.primary_email}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    10. Alternate Email:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {contact.alternate_email}
                  </Typography>
                </Stack>
              </List>
              <Typography
                variant="h5"
                gutterBottom
                id="finance"
                sx={{
                  marginTop: "2rem",
                }}
              >
                C. Financial Support
              </Typography>
              <List>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  {finance.finance_type === "self" ? (
                    <>
                      <Typography variant="subtitle1" fontSize="1.25rem">
                        Self Financing
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Typography variant="subtitle1" fontSize="1.25rem">
                        1. Admission:
                      </Typography>
                      {finance.finance_type === "master" ? (
                        <Typography variant="subtitle1" fontSize="1.25rem">
                          IIIU Admission for Master Program
                        </Typography>
                      ) : (
                        <>
                          {finance.finance_type === "lpdp" ? (
                            <Typography variant="subtitle1" fontSize="1.25rem">
                              LDPD - IIIU Admission for Doctor Program
                            </Typography>
                          ) : null}
                        </>
                      )}
                    </>
                  )}
                </Stack>
              </List>
              <Typography
                variant="h5"
                gutterBottom
                id="study"
                sx={{
                  marginTop: "2rem",
                }}
              >
                D. Proposed Study
              </Typography>
              <List>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    1. Degree:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {study.degree}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    2. Study Program:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {study.study_program}
                  </Typography>
                </Stack>
              </List>
              <Typography
                variant="h5"
                gutterBottom
                id="education"
                sx={{
                  marginTop: "2rem",
                }}
              >
                E. Educational Background
              </Typography>
              <List>
                <Typography variant="h6">Education</Typography>
                <Typography
                  variant="subtitle1"
                  fontSize="1.25rem"
                  fontWeight="bold"
                >
                  Undergraduate Degree
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    1. Name of Institution:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {education.undergrad_institution}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    2. State/Province:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {education.undergrad_province}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    3. Country:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {education.undergrad_country}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    4. Graduation Date:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {education.undergrad_date.substring(0, 10)}
                  </Typography>
                </Stack>
                <Typography
                  variant="subtitle1"
                  fontSize="1.25rem"
                  fontWeight="bold"
                >
                  Master Degree
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    1. Name of Institution:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {education.master_institution}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    2. State/Province:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {education.master_province}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    3. Country:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {education.master_country}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    4. Graduation Date:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {education.master_date.substring(0, 10)}
                  </Typography>
                </Stack>
              </List>
              <Typography
                variant="h5"
                gutterBottom
                id="language"
                sx={{
                  marginTop: "2rem",
                }}
              >
                F. Language Details
              </Typography>
              <List>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    1. English Proficiency:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {language.english_proficiency}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    2. Arabic Proficiency:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {language.arabic_proficiency}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    3. {language.other_language} Proficiency:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {language.other_proficiency}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    4. Test Name:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {language.test_name}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    5. Date Test Taken:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {language.test_date.substring(0, 10)}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    6. Overall Score:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {language.test_score}
                  </Typography>
                </Stack>
              </List>
              <Typography
                variant="h5"
                gutterBottom
                id="job"
                sx={{
                  marginTop: "2rem",
                }}
              >
                G. Job Status
              </Typography>
              <List>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    1. Unemployed:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {job.unemployed.toString()}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    2. Self Employment:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {job.self_employment.toString()}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    3. Employed:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {job.employed.toString()}
                  </Typography>
                </Stack>
                {job.employed ? (
                  <>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{
                        marginLeft: "3rem",
                      }}
                    >
                      <Typography variant="subtitle1" fontSize="1.25rem">
                        4. Position Title:
                      </Typography>
                      <Typography variant="subtitle1" fontSize="1.25rem">
                        {job.position}
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{
                        marginLeft: "3rem",
                      }}
                    >
                      <Typography variant="subtitle1" fontSize="1.25rem">
                        5. Organization Name:
                      </Typography>
                      <Typography variant="subtitle1" fontSize="1.25rem">
                        {job.organization_name}
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{
                        marginLeft: "3rem",
                      }}
                    >
                      <Typography variant="subtitle1" fontSize="1.25rem">
                        6. Organization Address:
                      </Typography>
                      <Typography variant="subtitle1" fontSize="1.25rem">
                        {job.organization_address}
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{
                        marginLeft: "3rem",
                      }}
                    >
                      <Typography variant="subtitle1" fontSize="1.25rem">
                        7. Starting Date:
                      </Typography>
                      <Typography variant="subtitle1" fontSize="1.25rem">
                        {job.date.substring(0, 10)}
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{
                        marginLeft: "3rem",
                      }}
                    >
                      <Typography variant="subtitle1" fontSize="1.25rem">
                        6. Organization Type:
                      </Typography>
                      <Typography variant="subtitle1" fontSize="1.25rem">
                        {job.organization_type}
                      </Typography>
                    </Stack>
                  </>
                ) : null}
              </List>
              <Typography
                variant="h5"
                gutterBottom
                id="referee"
                sx={{
                  marginTop: "2rem",
                }}
              >
                H. Referee Details
              </Typography>
              {/* Referee 1 */}
              <List>
                <Typography variant="h6" id="referee1">
                  Referee 1
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    1. Title:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee.title_ref1}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    2. Family Name:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee.f_name_ref1}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    3. Given Name:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee.l_name_ref1}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    4. Position/Title:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee.position_ref1}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    5. Relationship to Applicant:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee.relationship_ref1}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    6. Institution:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee.institution_ref1}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    7. Country:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee.country_ref1}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    8. Phone Number:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee.phone_ref1}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    9. Email Address:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee.email_ref1}
                  </Typography>
                </Stack>
                <Typography variant="h6">Applicant's Competence</Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    1. Intellectual Ability:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee1.intelectual_ability}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    2. Oral Communication Skills:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee1.oral_communication}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    3. Written Communication Skills:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee1.written_communication}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    4. Ability to Work Independently:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee1.independent_work}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    5. Ability to Organize Workload:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee1.organize_work}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    6. Motivation:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee1.motivation}
                  </Typography>
                </Stack>
                <Typography variant="subtitle1" fontSize="1.25rem">
                  7. Referee Assessment
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontSize="1.25rem"
                  sx={{
                    marginLeft: "3rem",
                  }}
                >
                  {referee1.assessment}
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    8. Recommendation:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee1.recommendation}
                  </Typography>
                </Stack>
              </List>
              {/* Referee 2 */}
              <List>
                <Typography variant="h6" id="referee2">
                  Referee 2
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    1. Title:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee.title_ref2}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    2. Family Name:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee.f_name_ref2}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    3. Given Name:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee.l_name_ref2}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    4. Position/Title:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee.position_ref2}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    5. Relationship to Applicant:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee.relationship_ref2}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    6. Institution:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee.institution_ref2}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    7. Country:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee.country_ref2}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    8. Phone Number:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee.phone_ref2}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    9. Email Address:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee.email_ref2}
                  </Typography>
                </Stack>
                <Typography variant="h6">Applicant's Competence</Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    1. Intellectual Ability:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee2.intelectual_ability}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    2. Oral Communication Skills:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee2.oral_communication}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    3. Written Communication Skills:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee2.written_communication}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    4. Ability to Work Independently:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee2.independent_work}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    5. Ability to Organize Workload:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee2.organize_work}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    6. Motivation:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee2.motivation}
                  </Typography>
                </Stack>
                <Typography variant="subtitle1" fontSize="1.25rem">
                  7. Referee Assessment
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontSize="1.25rem"
                  sx={{
                    marginLeft: "3rem",
                  }}
                >
                  {referee2.assessment}
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    8. Recommendation:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {referee2.recommendation}
                  </Typography>
                </Stack>
              </List>
              <Typography
                variant="h5"
                gutterBottom
                id="document"
                sx={{
                  marginTop: "2rem",
                }}
              >
                I. Documents
              </Typography>
              <List>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    1. ID or Passport:
                  </Typography>
                  <Button variant="outlined" color="darkBlue">
                    View
                  </Button>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    2. Certificate of Graduation:
                  </Typography>
                  <Button variant="outlined" color="darkBlue">
                    View
                  </Button>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    3. Certified copies of academic transcripts:
                  </Typography>
                  <Button variant="outlined" color="darkBlue">
                    View
                  </Button>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    4. Motivation Letter:
                  </Typography>
                  <Button variant="outlined" color="darkBlue">
                    View
                  </Button>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    5. IELTS/TOEFL/Pearson Academic Results:
                  </Typography>
                  <Button variant="outlined" color="darkBlue">
                    View
                  </Button>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    6. TOAFL or other Arabic Certificate:
                  </Typography>
                  <Button variant="outlined" color="darkBlue">
                    View
                  </Button>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    7. Curriculum Vitae:
                  </Typography>
                  <Button variant="outlined" color="darkBlue">
                    View
                  </Button>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    8. Research proposal (doctoral program only):
                  </Typography>
                  <Button variant="outlined" color="darkBlue">
                    View
                  </Button>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    9. Proof of Payment:
                  </Typography>
                  <Button variant="outlined" color="darkBlue">
                    View
                  </Button>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    10. Publication:
                  </Typography>
                  <Button variant="outlined" color="darkBlue">
                    View
                  </Button>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    11. Other:
                  </Typography>
                  <Button variant="outlined" color="darkBlue">
                    View
                  </Button>
                </Stack>
              </List>
            </Box>
            <Box>
              <List
                sx={{ listStyleType: "disc" }}
                dense={true}
                disablePadding={true}
              >
                <ListItem sx={{ display: "list-item" }}>
                  <Link
                    to="personal"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <Typography variant="subtitle1" fontSize="1rem">
                      Personal Details
                    </Typography>
                  </Link>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <Link
                    to="contact"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <Typography variant="subtitle1" fontSize="1rem">
                      Contact Details
                    </Typography>
                  </Link>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <Link
                    to="finance"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <Typography variant="subtitle1" fontSize="1rem">
                      Financial Support
                    </Typography>
                  </Link>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <Link
                    to="study"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <Typography variant="subtitle1" fontSize="1rem">
                      Proposed Study
                    </Typography>
                  </Link>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <Link
                    to="education"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <Typography variant="subtitle1" fontSize="1rem">
                      Educational Background
                    </Typography>
                  </Link>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <Link
                    to="language"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <Typography variant="subtitle1" fontSize="1rem">
                      Language Details
                    </Typography>
                  </Link>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <Link
                    to="job"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <Typography variant="subtitle1" fontSize="1rem">
                      Job Status
                    </Typography>
                  </Link>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <Link
                    to="referee"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <Typography variant="subtitle1" fontSize="1rem">
                      Referee Details
                    </Typography>
                  </Link>
                </ListItem>
                <ListItem sx={{ display: "list-item", marginLeft: "3rem" }}>
                  <Link
                    to="referee1"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <Typography variant="subtitle1" fontSize="1rem">
                      Referee 1
                    </Typography>
                  </Link>
                </ListItem>
                <ListItem sx={{ display: "list-item", marginLeft: "3rem" }}>
                  <Link
                    to="referee2"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <Typography variant="subtitle1" fontSize="1rem">
                      Referee 2
                    </Typography>
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Container>
      )}
    </>
  );
};

export default SingleDetail;
