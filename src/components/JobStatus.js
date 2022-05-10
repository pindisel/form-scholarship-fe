import React from "react";
import {
  FormControlLabel,
  RadioGroup,
  TextField,
  Typography,
  Grid,
  FormLabel,
  Radio,
} from "@mui/material";

const JobStatus = ({ onChange, value }) => {
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
        G. Job Status
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Unemployed</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <RadioGroup
            row
            onChange={handleChange}
            name="unemployed"
            value={value.unemployed || ""}
          >
            <FormControlLabel
              value="yes"
              control={<Radio required />}
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={<Radio required />}
              label="No"
            />
          </RadioGroup>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Self Employment</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <RadioGroup
            row
            onChange={handleChange}
            name="self_employment"
            value={value.self_employment || ""}
          >
            <FormControlLabel
              value="yes"
              control={<Radio required />}
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={<Radio required />}
              label="No"
            />
          </RadioGroup>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Are you currently employed?</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <RadioGroup
            row
            onChange={handleChange}
            name="employed"
            value={value.employed || ""}
          >
            <FormControlLabel
              value="yes"
              control={<Radio required />}
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={<Radio required />}
              label="No"
            />
          </RadioGroup>
        </Grid>
      </Grid>
      {value.employed === "yes" ? (
        <>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <FormLabel>Position Title</FormLabel>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                name="position"
                onChange={handleChange}
                value={value.position || ""}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <FormLabel>Organization Name</FormLabel>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                name="organization_name"
                onChange={handleChange}
                value={value.organization_name || ""}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <FormLabel>Organization Address</FormLabel>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                name="organization_address"
                onChange={handleChange}
                value={value.organization_address || ""}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <FormLabel>Date Commenced</FormLabel>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                name="date"
                onChange={handleChange}
                type="date"
                value={value.date || ""}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <FormLabel required>Organization Type</FormLabel>
            </Grid>
            <Grid item xs={9}>
              <RadioGroup
                row
                onChange={handleChange}
                name="organization_type"
                value={value.organization_type || ""}
              >
                <FormControlLabel
                  value="government/public"
                  control={<Radio required />}
                  label="Government/Public"
                />
                <FormControlLabel
                  value="ngo/civil society"
                  control={<Radio required />}
                  label="NGO/Civil Society"
                />
                <FormControlLabel
                  value="private"
                  control={<Radio required />}
                  label="Private"
                />
              </RadioGroup>
            </Grid>
          </Grid>
        </>
      ) : null}
    </>
  );
};

export default JobStatus;
