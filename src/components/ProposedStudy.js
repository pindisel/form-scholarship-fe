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
    value: "MA in Education at the Faculty of Education",
    label: "MA in Education at the Faculty of Education",
  },
  {
    value: "MA in Economics at the Faculty of Economics and Business",
    label: "MA in Economics at the Faculty of Economics and Business",
  },
  {
    value: "MA in Political Science at the Faculty of Social Sciences",
    label: "MA in Political Science at the Faculty of Social Sciences",
  },
  {
    value: "MA in Islamic Studies at the Faculty of Islamic Studies",
    label: "MA in Islamic Studies at the Faculty of Islamic Studies",
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
          <FormLabel required>Level of Study</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <RadioGroup
            row
            name="study_level"
            onChange={handleChange}
            value={value.study_level || ""}
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
          <FormLabel required>Course Title</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <Select
            fullWidth
            onChange={handleChange}
            name="course_title"
            value={value.course_title || ""}
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
