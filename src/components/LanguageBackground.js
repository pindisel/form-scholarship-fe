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

const LanguageBackground = ({ onChange, value }) => {
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
        F. Language Details
      </Typography>
      <Typography variant="h6" gutterBottom>
        English Language Proficiency - "Rate your language proficiency":
        <br />
      </Typography>
      <Typography gutterBottom>
        1 = no proficiency
        <br />
        2 = elementary proficiency
        <br />
        3 = limited warking proficiency
        <br />
        4 = professional working proficiency
        <br />
        5 = full professional proficiency
        <br />6 = native/bilingual proficiency
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>English</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <RadioGroup
            row
            onChange={handleChange}
            name="english_proficiency"
            value={value.english_proficiency || ""}
          >
            <FormControlLabel
              value="no proficiency"
              control={<Radio required />}
              label="1"
            />
            <FormControlLabel
              value="elementary proficiency"
              control={<Radio required />}
              label="2"
            />
            <FormControlLabel
              value="limited working proficiency"
              control={<Radio required />}
              label="3"
            />
            <FormControlLabel
              value="professional working proficiency"
              control={<Radio required />}
              label="4"
            />
            <FormControlLabel
              value="full professional proficiency"
              control={<Radio required />}
              label="5"
            />
            <FormControlLabel
              value="native/bilingual proficiency"
              control={<Radio required />}
              label="6"
            />
          </RadioGroup>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Arabic</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <RadioGroup
            row
            onChange={handleChange}
            name="arabic_proficiency"
            value={value.arabic_proficiency || ""}
          >
            <FormControlLabel
              value="no proficiency"
              control={<Radio required />}
              label="1"
            />
            <FormControlLabel
              value="elementary proficiency"
              control={<Radio required />}
              label="2"
            />
            <FormControlLabel
              value="limited working proficiency"
              control={<Radio required />}
              label="3"
            />
            <FormControlLabel
              value="professional working proficiency"
              control={<Radio required />}
              label="4"
            />
            <FormControlLabel
              value="full professional proficiency"
              control={<Radio required />}
              label="5"
            />
            <FormControlLabel
              value="native/bilingual proficiency"
              control={<Radio required />}
              label="6"
            />
          </RadioGroup>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel>
            <TextField
              fullWidth
              name="other_language"
              onChange={handleChange}
              label="Other Language"
              type="text"
              variant="standard"
              required
              value={value.other_language || ""}
            />
          </FormLabel>
        </Grid>
        <Grid item xs={9}>
          <RadioGroup
            row
            onChange={handleChange}
            name="other_proficiency"
            value={value.other_proficiency || ""}
          >
            <FormControlLabel
              value="no proficiency"
              control={<Radio required />}
              label="1"
            />
            <FormControlLabel
              value="elementary proficiency"
              control={<Radio required />}
              label="2"
            />
            <FormControlLabel
              value="limited working proficiency"
              control={<Radio required />}
              label="3"
            />
            <FormControlLabel
              value="professional working proficiency"
              control={<Radio required />}
              label="4"
            />
            <FormControlLabel
              value="full professional proficiency"
              control={<Radio required />}
              label="5"
            />
            <FormControlLabel
              value="native/bilingual proficiency"
              control={<Radio required />}
              label="6"
            />
          </RadioGroup>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>
            Test name (IELTS, TOEFL or PTE Academic)
          </FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="test_name"
            onChange={handleChange}
            required
            value={value.test_name || ""}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Date test taken</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="test_date"
            onChange={handleChange}
            required
            type="date"
            value={value.test_date || ""}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Overall Score</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            name="test_score"
            onChange={handleChange}
            required
            type="number"
            onWheel={(event) => event.target.blur()}
            value={value.test_score || ""}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default LanguageBackground;
