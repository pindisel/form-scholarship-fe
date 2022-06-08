import React from "react";
import { Typography, Input, List, Stack } from "@mui/material";

const DocumentUpload = ({
  setDocument1,
  setDocument2,
  setDocument3,
  setDocument4,
  setDocument5,
  setDocument6,
  setDocument7,
  setDocument8,
  setDocument9,
  setDocument10,
  setDocument11,
}) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        J. Document Upload
      </Typography>
      <List
        sx={{
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body1">1. ID or Passport:</Typography>
          <Input
            type="file"
            name="files"
            id="file"
            variant="outlined"
            required
            inputProps={{
              accept: ".pdf",
            }}
            onChange={(e) => setDocument1(e.target.files[0])}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body1">2. Certificate of Graduation:</Typography>
          <Input
            type="file"
            name="files"
            id="file"
            variant="outlined"
            required
            inputProps={{
              accept: ".pdf",
            }}
            onChange={(e) => setDocument2(e.target.files[0])}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body1">
            3. Certified copies of academic transcripts:
          </Typography>
          <Input
            type="file"
            name="files"
            id="file"
            variant="outlined"
            required
            inputProps={{
              accept: ".pdf",
            }}
            onChange={(e) => setDocument3(e.target.files[0])}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body1">4. Motivation Letter:</Typography>
          <Input
            type="file"
            name="files"
            id="file"
            variant="outlined"
            required
            inputProps={{
              accept: ".pdf",
            }}
            onChange={(e) => setDocument4(e.target.files[0])}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body1">
            5. IELTS/TOEFL/Pearson Academic Results:
          </Typography>
          <Input
            type="file"
            name="files"
            id="file"
            variant="outlined"
            required
            inputProps={{
              accept: ".pdf",
            }}
            onChange={(e) => setDocument5(e.target.files[0])}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body1">
            6. TOAFL or other Arabic Certificate **:
          </Typography>
          <Input
            type="file"
            name="files"
            id="file"
            variant="outlined"
            required
            inputProps={{
              accept: ".pdf",
            }}
            onChange={(e) => setDocument6(e.target.files[0])}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body1">7. Curriculum Vitae:</Typography>
          <Input
            type="file"
            name="files"
            id="file"
            variant="outlined"
            required
            inputProps={{
              accept: ".pdf",
            }}
            onChange={(e) => setDocument7(e.target.files[0])}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body1">
            8. Research proposal (doctoral program only):
          </Typography>
          <Input
            type="file"
            name="files"
            id="file"
            variant="outlined"
            required
            inputProps={{
              accept: ".pdf",
            }}
            onChange={(e) => setDocument8(e.target.files[0])}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body1">9. Proof of Payment:</Typography>
          <Input
            type="file"
            name="files"
            id="file"
            variant="outlined"
            required
            inputProps={{
              accept: ".pdf",
            }}
            onChange={(e) => setDocument9(e.target.files[0])}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body1">10. Publication:</Typography>
          <Input
            type="file"
            name="files"
            id="file"
            variant="outlined"
            required
            inputProps={{
              accept: ".pdf",
            }}
            onChange={(e) => setDocument10(e.target.files[0])}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body1">11. Other:</Typography>
          <Input
            type="file"
            name="files"
            id="file"
            variant="outlined"
            required
            inputProps={{
              accept: ".pdf",
            }}
            onChange={(e) => setDocument11(e.target.files[0])}
          />
        </Stack>
      </List>
    </>
  );
};

export default DocumentUpload;
