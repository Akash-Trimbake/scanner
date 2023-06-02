import React, { useState, useContext, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import FormControl from "@mui/material/FormControl";
import { Divider } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import AuthContext from "../context/AuthContext";

import loader from "../assets/loader.svg";

export default function Dir() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isTimeoutComplete, setIsTimeoutComplete] = useState(false);

  let { dir } = useContext(AuthContext);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTimeoutComplete(true);
    }, 7000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {/* <Paper
        sx={{
          width: "40vw",
          overflow: "hidden",
          marginLeft: "20px",
          padding: "10px",
        }}
      >
        {dir.length !== 0 ? (
          <FormControl>
            <TableContainer sx={{ height: 510 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      id="Directories"
                      style={{
                        width: "48vw",
                        fontSize: "1.4rem",
                        color: "#4caf50",
                      }}
                    >
                      Directories
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <ul>
                    {dir
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((item) => {
                        return (
                          <TableRow
                            hover
                            key={item}
                            style={{ listStyle: "none" }}
                          >
                            <li
                              key={item}
                              style={{ margin: "10px", color: "grey" }}
                            >
                              {item}
                            </li>
                          </TableRow>
                        );
                      })}
                  </ul>
                </TableBody>
              </Table>
            </TableContainer>
            <Divider />
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={dir.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </FormControl>
        ) : (
          <p>No Dir Found!</p>
        )}
      </Paper> */}

      <Paper
        sx={{
          width: "40vw",
          overflow: "hidden",
          marginLeft: "20px",
          padding: "10px",
        }}
      >
        <FormControl>
          <TableContainer sx={{ height: 510 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell
                    id="Directories"
                    style={{
                      width: "48vw",
                      fontSize: "1.4rem",
                      color: "#4caf50",
                    }}
                  >
                    Directories
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dir.length !== 0 ? (
                  <ul>
                    {dir
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((item) => {
                        return (
                          <TableRow
                            hover
                            key={item}
                            style={{ listStyle: "none" }}
                          >
                            <li
                              key={item}
                              style={{ margin: "10px", color: "grey" }}
                            >
                              {item}
                            </li>
                          </TableRow>
                        );
                      })}
                  </ul>
                ) : isTimeoutComplete ? (
                  <p style={{ margin: "10px" }}>No Directories Found!</p>
                ) : (
                  <>
                    {" "}
                    <Skeleton
                      width="40%"
                      height={30}
                      sx={{ marginLeft: "3rem", marginTop: "1rem" }}
                    />
                    <Skeleton
                      width="30%"
                      height={30}
                      sx={{ marginLeft: "3rem", marginTop: "1rem" }}
                    />
                    <Skeleton
                      width="35%"
                      height={30}
                      sx={{ marginLeft: "3rem", marginTop: "1rem" }}
                    />
                  </>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <Divider />
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={dir.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </FormControl>
      </Paper>
    </>
  );
}
