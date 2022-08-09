import React, { useState } from "react";
import { Typography, Checkbox, FormControlLabel } from "@mui/material";

const ApplicantsDeclaration = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  return (
    <>
      <Typography variant="h5" gutterBottom>
        I. Applicants Declaration
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked1}
            onChange={(e) => setChecked1(!checked1)}
            name="checked"
            color="primary"
            required
          />
        }
        label={<Typography variant="h6">Understanding</Typography>}
      />
      <Typography variant="body1" gutterBottom>
        I understand and confirm that:
        <br />• I have read and complied with the UIII Admission Guidelines and
        that the contents of my application are true and correct.
        <br />• I authorize UIII to make enquiries and to obtain official
        records from any university and tertiary educational institution
        concerning my current or previous attendance which, in its absolute
        discretion, it believes are necessary.
        <br />• UIII has the right to vary or cancel any incorrect or incomplete
        information, made on the basis provided by me or by my referees.
        <br />• Decisions of the admissions committee are final and confidential
        and no correspondence about outcomes of the admission process will be
        entered to
        <br />• All documents submitted become the property of UIII and will not
        be returned.
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked2}
            onChange={(e) => setChecked2(!checked2)}
            name="checked"
            color="primary"
            required
          />
        }
        label={<Typography variant="h6">Agreement</Typography>}
      />
      <Typography variant="body1" gutterBottom>
        If successful in being accepted by the UIII Admissions, I agree that I
        will:
        <br />• Immediately provide UIII with details of any incident that may
        reflect badly on the prestige of UIII.
        <br />• Not hold another equivalent award or scholarship at the same
        time, if I will be granted UIII related scholarship.
        <br />• Act in a manner befitting a recipient of UIII Admission.
        <br />• Acknowledge the assistance given by UIII in any written report,
        publications or publicity associated with UIII.
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
