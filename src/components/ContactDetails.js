import React from "react";
import { TextField, Typography, Grid, FormLabel } from "@mui/material";

const ContactDetails = ({ onChange, value }) => {
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
        B. Contact Details
      </Typography>
      <Typography variant="h6" gutterBottom>
        Residential Address
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Address Line 1</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="address1"
            onChange={handleChange}
            required
            value={value.address1 || ""}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Address Line 2</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="address2"
            onChange={handleChange}
            required
            value={value.address2 || ""}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Town/City</FormLabel>
        </Grid>
        <Grid item xs={5}>
          <TextField
            fullWidth
            name="city"
            onChange={handleChange}
            required
            value={value.city || ""}
          />
        </Grid>
        <Grid item xs={1}>
          <FormLabel required>Postal Code</FormLabel>
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            name="postal_code"
            onChange={handleChange}
            type="number"
            onWheel={(event) => event.target.blur()}
            required
            value={value.postal_code || ""}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>State/Province</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="province"
            onChange={handleChange}
            required
            value={value.province || ""}
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
            name="country"
            onChange={handleChange}
            required
            value={value.country || ""}
          />
        </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom>
        Phone
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Home Phone Number</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="home_phone"
            onChange={handleChange}
            type="number"
            onWheel={(event) => event.target.blur()}
            required
            value={value.home_phone || ""}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Mobile Number</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="mobile_phone"
            onChange={handleChange}
            type="number"
            onWheel={(event) => event.target.blur()}
            required
            value={value.mobile_phone || ""}
          />
        </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom>
        Email Address
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Primary Email</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="primary_email"
            onChange={handleChange}
            type="email"
            required
            value={value.primary_email || ""}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Alternate Email</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="alternate_email"
            onChange={handleChange}
            type="email"
            required
            value={value.alternate_email || ""}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ContactDetails;
