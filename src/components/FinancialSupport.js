import React from "react";
import {
  FormControlLabel,
  RadioGroup,
  Typography,
  Grid,
  FormLabel,
  Radio,
} from "@mui/material";

const FinancialSupport = ({ onChange, value }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <Typography variant="h5" gutterBottom>
        C. Financial Support
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Apply for Admission:</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <RadioGroup
            name="finance_type"
            onChange={handleChange}
            value={value.finance_type || ""}
          >
            <FormControlLabel
              value="self"
              control={<Radio required />}
              label="Self Financing"
            />
            <FormControlLabel
              value="master"
              control={<Radio required />}
              label="IIIU Admission for Master Program"
            />
            <FormControlLabel
              value="lpdp"
              control={<Radio required />}
              label="LDPD - IIIU Admission for Doctor Program"
            />
            <FormControlLabel
              value="baznas"
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
