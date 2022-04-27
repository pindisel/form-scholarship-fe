import React from "react";
import { TextField, Typography, Grid, FormLabel } from "@mui/material";

const EducationalBackground = ({ onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Typography>E. Educational Background</Typography>
      <Typography>Undergraduate Degree</Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Name of Institution</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="undergradName"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>State/Province</FormLabel>
        </Grid>
        <Grid item xs={5}>
          <TextField
            fullWidth
            name="undergradProvince"
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={1}>
          <FormLabel>Country</FormLabel>
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            name="undergradCountry"
            onChange={onChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Language of Instruction</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField fullWidth name="undergradLanguage" />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Graduation Date</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="undergradDate"
            type="date"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Typography>Master Degree</Typography>{" "}
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Name of Institution</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="masterName"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>State/Province</FormLabel>
        </Grid>
        <Grid item xs={5}>
          <TextField
            fullWidth
            name="masterProvince"
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={1}>
          <FormLabel>Country</FormLabel>
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            name="masterCountry"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Language of Instruction</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField fullWidth name="masterLanguage" onChange={handleChange} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Graduation Date</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="masterDate"
            type="date"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
    </>
  );
};

export default EducationalBackground;
