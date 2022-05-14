import React from "react";
import {
  FormControlLabel,
  RadioGroup,
  Typography,
  FormLabel,
  Radio,
  Container,
  Stack,
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
      <Container>
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
          <FormLabel required>Apply for Admission:</FormLabel>
          <Stack
            sx={{
              ml: "50px",
            }}
          >
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
          </Stack>
        </RadioGroup>
      </Container>
    </>
  );
};

export default FinancialSupport;
