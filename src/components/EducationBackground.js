import React from "react";
import { TextField, Typography, Grid, FormLabel } from "@mui/material";

const EducationalBackground = ({ onChange, value }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // console.log(value);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        E. Educational Background
      </Typography>
      <Typography variant="h6" gutterBottom>
        Undergraduate Degree
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Name of Institution</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="undergrad_institution"
            onChange={handleChange}
            required
            value={value.undergrad_institution || ""}
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
            name="undergrad_province"
            onChange={handleChange}
            required
            value={value.undergrad_province || ""}
          />
        </Grid>
        <Grid item xs={1}>
          <FormLabel required>Country</FormLabel>
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            name="undergrad_country"
            onChange={handleChange}
            required
            value={value.undergrad_country || ""}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Language of Instruction</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="undergrad_language"
            onChange={handleChange}
            required
            value={value.undergrad_language || ""}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Graduation Date</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="undergrad_date"
            type="date"
            onChange={handleChange}
            required
            value={value.undergrad_date || ""}
          />
        </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom>
        Master Degree
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Name of Institution</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="master_institution"
            onChange={handleChange}
            required
            value={value.master_institution || ""}
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
            name="master_province"
            onChange={handleChange}
            required
            value={value.master_province || ""}
          />
        </Grid>
        <Grid item xs={1}>
          <FormLabel required>Country</FormLabel>
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            name="master_country"
            onChange={handleChange}
            required
            value={value.master_country || ""}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Language of Instruction</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="master_language"
            onChange={handleChange}
            required
            value={value.master_language || ""}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Graduation Date</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="master_date"
            type="date"
            onChange={handleChange}
            required
            value={value.master_date || ""}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default EducationalBackground;
