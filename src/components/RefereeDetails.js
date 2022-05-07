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

const RefereeDetails = ({ onChange }) => {
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
      <Typography variant="h5">H. Referee Details</Typography>
      <Typography variant="h6">Referee 1</Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Title</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <RadioGroup row onChange={handleChange} name="title_ref1">
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
          <TextField
            fullWidth
            name="f_name_ref1"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Given Name</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="l_name_ref1"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Position/Title</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="position_ref1"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Relationship to Applicant</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="relationship_ref1"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Institution</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="institution_ref1"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Country</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="country_ref1"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Phone Number</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="phone_ref1"
            onChange={handleChange}
            type="number"
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Email Address</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="email_ref1"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>

      <Typography variant="h6">Referee 2</Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Title</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <RadioGroup row onChange={handleChange} name="title_ref2">
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
          <TextField
            fullWidth
            name="f_name_ref2"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Given Name</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="l_name_ref2"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Position/Title</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="position_ref2"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Relationship to Applicant</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="relationship_ref2"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Institution</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="institution_ref2"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Country</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="country_ref2"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Phone Number</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="phone_ref2"
            onChange={handleChange}
            type="number"
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Email Address</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="email_ref2"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
    </>
  );
};

export default RefereeDetails;
