import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PersonalService } from "../services/personal.service";
import { ContactService } from "../services/contact.service";
import { FinanceService } from "../services/finance.service";
import { StudyService } from "../services/study.service";
import { EducationService } from "../services/education.service";
import { LanguageService } from "../services/language.service";
import { JobService } from "../services/job.service";
import { RefereeService } from "../services/referee.service";
import { UserService } from "../services/user.service";
import {
  Container,
  Stack,
  Typography,
  List,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { Appbar } from "../components";

const GetDetails = () => {
  const navigate = useNavigate();
  const [personal, setPersonal] = useState([]);
  const [contact, setContact] = useState([]);
  const [finance, setFinance] = useState([]);
  const [study, setStudy] = useState([]);
  const [education, setEducation] = useState([]);
  const [language, setLanguage] = useState([]);
  const [job, setJob] = useState([]);
  const [referee, setReferee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
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
        setUserData(
          await (
            await UserService.getUser()
          ).data.data.filter((user) => user.role === "user")
        );
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
      }
    };

    fetchData().then(() => setLoading(false));
  }, [userId, userRole]);

  // console.log(userData);

  return (
    <>
      <Appbar />
      {loading ? (
        <Typography variant="h4">Loading...</Typography>
      ) : (
        <Container maxWidth="xl">
          {userRole === "admin" ? (
            <>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" width={50}>
                        <Typography variant="h6">No</Typography>
                      </TableCell>
                      <TableCell align="center" width={200}>
                        <Typography variant="h6">Name</Typography>
                      </TableCell>
                      <TableCell align="center" width={200}>
                        <Typography variant="h6">Birth Date</Typography>
                      </TableCell>
                      <TableCell align="center" width={200}>
                        <Typography variant="h6">Email</Typography>
                      </TableCell>
                      <TableCell align="center" width={200}>
                        <Typography variant="h6">Study</Typography>
                      </TableCell>
                      <TableCell align="center" width={200}>
                        <Typography variant="h6">Financial</Typography>
                      </TableCell>
                      <TableCell align="center" width={50} />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userData.map((user, index) => (
                      <TableRow key={user.id_user}>
                        <TableCell align="center" width={50}>
                          <Typography variant="subtitle1">
                            {index + 1}
                          </Typography>
                        </TableCell>
                        <TableCell align="center" width={200}>
                          <Typography variant="subtitle1">
                            {personal[index].f_name +
                              " " +
                              personal[index].l_name}
                          </Typography>
                        </TableCell>
                        <TableCell align="center" width={200}>
                          <Typography variant="subtitle1">
                            {personal[index].birth_date.substring(0, 10)}
                          </Typography>
                        </TableCell>
                        <TableCell align="center" width={200}>
                          <Typography variant="subtitle1">
                            {contact[index].primary_email}
                          </Typography>
                        </TableCell>
                        <TableCell align="center" width={200}>
                          <Typography variant="subtitle1">
                            {study[index].study_program}
                          </Typography>
                        </TableCell>
                        <TableCell align="center" width={200}>
                          <Typography variant="subtitle1">
                            {finance[index].finance_type}
                          </Typography>
                        </TableCell>
                        <TableCell align="center" width={50}>
                          <Button
                            onClick={() => {
                              navigate(`/details/${user.id_user}`);
                            }}
                          >
                            Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          ) : (
            <>
              <Typography variant="h5" gutterBottom id="personal">
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
              <List
                sx={{
                  width: "60%",
                }}
              >
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
                    3. City:
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
                    4. Postal Code:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {contact.postal_code}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    5. State/Province:
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
                    6. Country:
                  </Typography>
                  <Typography variant="subtitle1" fontSize="1.25rem">
                    {contact.country}
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
              <List
                sx={{
                  width: "60%",
                }}
              >
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
              <List
                sx={{
                  width: "60%",
                }}
              >
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
              </List>
              <List
                sx={{
                  width: "60%",
                }}
              >
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
              </List>
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default GetDetails;
