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

const PersonalDetails = ({ onChange }) => {
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
        A. Personal Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Title</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <RadioGroup row onChange={handleChange} name="title">
            <FormControlLabel
              value="mr"
              control={<Radio required />}
              label="Mr"
            />
            <FormControlLabel
              value="ms"
              control={<Radio required />}
              label="Ms"
            />
            <FormControlLabel
              value="mrs"
              control={<Radio required />}
              label="Mrs"
            />
            <FormControlLabel
              value="miss"
              control={<Radio required />}
              label="Miss"
            />
            <FormControlLabel
              value="other"
              control={<Radio required />}
              label="Other"
            />
          </RadioGroup>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Family Name</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField fullWidth name="f_name" onChange={handleChange} required />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Given Name</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField fullWidth name="l_name" onChange={handleChange} required />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>
            Place of Birth <br />
            (City, Province / State, Country)
          </FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="birth_place"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Date of Birth</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="birth_date"
            type="date"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Gender</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <RadioGroup row name="gender" onChange={handleChange}>
            <FormControlLabel
              value="male"
              control={<Radio required />}
              label="Male"
            />
            <FormControlLabel
              value="female"
              control={<Radio required />}
              label="Female"
            />
          </RadioGroup>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Country of Citizenship</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="country"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>National Identity Number</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="national_num"
            onChange={handleChange}
            type="number"
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Passport No.</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <Grid container>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="passport_num"
                onChange={handleChange}
                type="number"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={6}>
                  <FormLabel required>Issue Date</FormLabel>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    name="issue_date"
                    onChange={handleChange}
                    type="date"
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormLabel required>Expiry Date</FormLabel>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    name="expiry_date"
                    onChange={handleChange}
                    type="date"
                    required
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PersonalDetails;
