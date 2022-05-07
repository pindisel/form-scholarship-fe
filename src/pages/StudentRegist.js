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
} from "../components";
import { PersonalService } from "../services/personal.service";
import { ContactService } from "../services/contact.service";
import { FinanceService } from "../services/finance.service";
import { StudyService } from "../services/study.service";
import { EducationService } from "../services/education.service";
import { LanguageService } from "../services/language.service";
import { JobService } from "../services/job.service";
import { RefereeService } from "../services/referee.service";

import { Container } from "@mui/material";

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
    } catch (error) {
      console.log(error.message);
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
  // console.log(personal);
  // console.log(contact);
  // console.log(finance);
  // console.log(study);
  // console.log(education);
  return (
    <>
      <Container>
        <form onSubmit={onSubmit}>
          <PersonalDetails onChange={setPersonal} value={personal} />
          <ContactDetails onChange={setContact} value={contact} />
          <FinancialSupport onChange={setFinance} value={finance} />
          <ProposedStudy onChange={setStudy} value={study} />
          <EducationBackground onChange={setEducation} value={education} />
          <LanguageBackground onChange={setLanguage} value={language} />
          <JobStatus onChange={setJob} value={job} />
          <RefereeDetails onChange={setReferee} value={referee} />
          <button type="submit">Submit</button>
        </form>
      </Container>
    </>
  );
};

export default StudentRegist;
