import React from "react";
import {
  FormControlLabel,
  RadioGroup,
  Typography,
  Grid,
  FormLabel,
  Radio,
} from "@mui/material";

const FinancialSupport = ({ onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <Typography>C. Financial Support</Typography>
      ????
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Apply for Admission:</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <RadioGroup name="finance" onChange={handleChange}>
            <FormControlLabel
              value="Master"
              control={<Radio required />}
              label="IIIU Admission for Master Program"
            />
            <FormControlLabel
              value="LPDP"
              control={<Radio required />}
              label="LDPD - IIIU Admission for Doctor Program"
            />
            <FormControlLabel
              value="Baznas"
              control={<Radio required />}
              label="BAZNAS - IIIU Admission for Doctor Program"
            />
          </RadioGroup>
        </Grid>
      </Grid>
    </>
  );
};

export default FinancialSupport;
