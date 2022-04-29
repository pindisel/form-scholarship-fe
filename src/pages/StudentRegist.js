import React, { useState } from "react";
import {
  PersonalDetails,
  ContactDetails,
  FinancialSupport,
  ProposedStudy,
  EducationalBackground,
} from "../components";
import { PersonalService } from "../services/personal.service";

const StudentRegist = () => {
  const onSubmit = async () => {
    try {
      await PersonalService.createPersonal(personal);
    } catch (error) {
      console.log(error.message);
    }
  };
  const [personal, setPersonal] = useState({});
  const [contact, setContact] = useState({});
  const [financial, setFinancial] = useState({});
  const [study, setStudy] = useState({});
  const [education, setEducation] = useState({});
  // console.log(personal);
  // console.log(contact);
  // console.log(financial);
  // console.log(study);
  // console.log(education);
  return (
    <>
      <form onSubmit={onSubmit}>
        <PersonalDetails onChange={setPersonal} value={personal} />
        {/* <ContactDetails onChange={setContact} value={contact} />
        <FinancialSupport onChange={setFinancial} value={financial} />
        <ProposedStudy onChange={setStudy} value={study} />
        <EducationalBackground onChange={setEducation} value={education} /> */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default StudentRegist;
