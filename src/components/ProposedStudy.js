import React from "react";
import {
  FormControlLabel,
  RadioGroup,
  Select,
  MenuItem,
  Typography,
  Grid,
  FormLabel,
  Radio,
} from "@mui/material";

const courses = [
  {
    value: "Education at the Faculty of Education",
    label: "Education at the Faculty of Education",
  },
  {
    value: "Economics at the Faculty of Economics and Business",
    label: "Economics at the Faculty of Economics and Business",
  },
  {
    value: "Political Science at the Faculty of Social Sciences",
    label: "Political Science at the Faculty of Social Sciences",
  },
  {
    value: "Islamic Studies at the Faculty of Islamic Studies",
    label: "Islamic Studies at the Faculty of Islamic Studies",
  },
];

const ProposedStudy = ({ onChange, value }) => {
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
        D. Proposed Study
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Degree</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <RadioGroup
            row
            name="degree"
            onChange={handleChange}
            value={value.degree || ""}
          >
            <FormControlLabel
              value="master"
              control={<Radio required />}
              label="Master"
            />
            <FormControlLabel
              value="phd"
              control={<Radio required />}
              label="PhD"
            />
          </RadioGroup>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel required>Study Program</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <Select
            fullWidth
            onChange={handleChange}
            name="study_program"
            value={value.study_program || ""}
          >
            {courses.map((option) => (
              <MenuItem value={option.value} key={option.value}>
                <Typography variant="subtitle1">{option.value}</Typography>
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
    </>
  );
};

export default ProposedStudy;
