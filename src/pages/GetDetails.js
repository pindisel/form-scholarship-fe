import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PersonalService } from "../services/personal.service";
import { ContactService } from "../services/contact.service";
import { FinanceService } from "../services/finance.service";
import { StudyService } from "../services/study.service";
import {
  Container,
  Stack,
  Typography,
  List,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Button,
} from "@mui/material";
import { Appbar } from "../components";

const GetDetails = () => {
  const navigate = useNavigate();
  const [personal, setPersonal] = useState([]);
  const [contact, setContact] = useState([]);
  const [finance, setFinance] = useState([]);
  const [study, setStudy] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const userId = user.id_user;
  const userRole = user.role;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      if (userRole === "admin") {
        setPersonal(await (await PersonalService.getPersonal()).data.data);
        setContact(await (await ContactService.getContact()).data.data);
        setFinance(await (await FinanceService.getFinance()).data.data);
        setStudy(await (await StudyService.getStudy()).data.data);
      } else {
        setPersonal(
          await (
            await PersonalService.getPersonalById(userId)
          ).data.data
        );
        setContact(
          await (
            await ContactService.getContactById(userId)
          ).data.data
        );
        setFinance(
          await (
            await FinanceService.getFinanceById(userId)
          ).data.data
        );
        setStudy(await (await StudyService.getStudyById(userId)).data.data);
      }
    };

    fetchData().then(() => setLoading(false));
  }, [userId, userRole]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - personal.length) : 0;

  return (
    <>
      <Appbar />
      {loading ? (
        <Typography variant="h4">Loading...</Typography>
      ) : (
        <Container maxWidth="xl">
          {userRole === "admin" ? (
            <>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" width={50}>
                        <Typography variant="h6">No</Typography>
                      </TableCell>
                      <TableCell align="center" width={200}>
                        <Typography variant="h6">Name</Typography>
                      </TableCell>
                      <TableCell align="center" width={200}>
                        <Typography variant="h6">Birth Date</Typography>
                      </TableCell>
                      <TableCell align="center" width={200}>
                        <Typography variant="h6">Email</Typography>
                      </TableCell>
                      <TableCell align="center" width={200}>
                        <Typography variant="h6">Study</Typography>
                      </TableCell>
                      <TableCell align="center" width={200}>
                        <Typography variant="h6">Financial</Typography>
                      </TableCell>
                      <TableCell align="center" width={50} />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      {personal.map((item, index) => (
                        <>
                          <TableCell align="center" width={50}>
                            <Typography variant="subtitle1">
                              {index + 1}
                            </Typography>
                          </TableCell>
                          <TableCell align="center" width={200}>
                            <Typography variant="subtitle1">
                              {item.f_name + " " + item.l_name}
                            </Typography>
                          </TableCell>
                          <TableCell align="center" width={200}>
                            <Typography variant="subtitle1">
                              {item.birth_date.substring(0, 10)}
                            </Typography>
                          </TableCell>
                        </>
                      ))}
                      {contact.map((item) => (
                        <>
                          <TableCell align="center" width={200}>
                            <Typography variant="subtitle1">
                              {item.primary_email}
                            </Typography>
                          </TableCell>
                        </>
                      ))}
                      {study.map((item) => (
                        <>
                          <TableCell align="center" width={200}>
                            <Typography variant="subtitle1">
                              {item.study_program}
                            </Typography>
                          </TableCell>
                        </>
                      ))}
                      {finance.map((item) => (
                        <>
                          <TableCell align="center" width={200}>
                            <Typography variant="subtitle1">
                              {item.finance_type}
                            </Typography>
                          </TableCell>
                        </>
                      ))}
                      <TableCell align="center" width={50}>
                        <Button
                          onClick={() => {
                            navigate(`/single-detail/${userId}`);
                          }}
                        >
                          Details
                        </Button>
                      </TableCell>
                    </TableRow>
                    {emptyRows > 0 && (
                      <TableRow
                        style={{
                          height: 53 * emptyRows,
                        }}
                      >
                        <TableCell colSpan={7} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                component="div"
                count={personal.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[5, 10, 20, 25]}
              />
            </>
          ) : (
            <>
              <Typography variant="h5" gutterBottom>
                A. Personal Details
              </Typography>
              <List
                sx={{
                  width: "60%",
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="h6">1. First Name:</Typography>
                  <Typography variant="h6">{personal.f_name}</Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="h6">1. Last Name:</Typography>
                  <Typography variant="h6">{personal.l_name}</Typography>
                </Stack>
              </List>
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default GetDetails;
