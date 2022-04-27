import React from "react";
import { TextField, Typography, Grid, FormLabel } from "@mui/material";

const ContactDetails = ({ onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <Typography>B. Contact Details</Typography>
      <Typography>Residential Address</Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel>Address Line 1</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="address1"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel>Address Line 2</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="address2"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel>Town/City</FormLabel>
        </Grid>
        <Grid item xs={5}>
          <TextField fullWidth name="city" onChange={handleChange} required />
        </Grid>
        <Grid item xs={1}>
          <FormLabel>Postal Code</FormLabel>
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            name="postalCode"
            onChange={onChange}
            type="number"
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel>State/Province</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="province"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel>Country</FormLabel>
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
      <Typography>Phone</Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel>Home Phone Number</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="phoneNum"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel>Mobile Number</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="mobileNum"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Typography>Email Address</Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel>Primary Email</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="emailPrim"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel>Alternate Email</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="emailAlter"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ContactDetails;
