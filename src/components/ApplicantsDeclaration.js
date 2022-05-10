import React from "react";
import { Typography, Checkbox, FormControlLabel } from "@mui/material";

const ApplicantsDeclaration = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        I. Applicants Declaration
      </Typography>
      <FormControlLabel
        control={<Checkbox required />}
        label={<Typography variant="h6">Understanding</Typography>}
      />
      <Typography variant="body1" gutterBottom>
        I understand and confirm that:
        <br />• I have read and complied with the IIIU Admission Guidelines and
        that the contents of my application are true and correct.
        <br />• I authorize IIIU to make enquiries and to obtain official
        records from any university and tertiary educational institution
        concerning my current or previous attendance which, in its absolute
        discretion, it believes are necessary.
        <br />• IIIU has the right to vary or cancel any made on the basis of
        incorrect or incomplete information provided by me or by my referees.
        <br />• Decisions of the admission panel are final and confidential and
        no correspondence about outcomes of the selection process will be
        entered into.
        <br />• All documents submitted become the property of IIIU and will not
        be returned.
      </Typography>
      <FormControlLabel
        control={<Checkbox required />}
        label={<Typography variant="h6">Agreement</Typography>}
      />
      <Typography variant="body1" gutterBottom>
        If successful in gaining IIIU Admission, I agree that I will:
        <br />• Immediately provide IIIU with details of any incident that may
        reflect badly on the prestige of IIIU.
        <br />• Not hold another equivalent award or scholarship at the same
        time, if I will be granted IIIU related scholarship.
        <br />• Act in a manner befitting a recipient of IIIU Admission.
        <br />• Acknowledge the assistance given by IIIU in any written report,
        publications or publicity associated with IIIU.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Declaration and acknowledgement
      </Typography>
      <Typography variant="body1" gutterBottom>
        In submitting this application form, I declare that the information
        contained in it and provided in connection with it is true and correct.
      </Typography>
    </>
  );
};

export default ApplicantsDeclaration;
