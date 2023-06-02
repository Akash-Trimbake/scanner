import React, { useState, useContext, useEffect, useRef } from "react";
import AuthContext from "../context/AuthContext";
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

const Nuclei = () => {
  let { dctVuln, getNucleiResponse } = useContext(AuthContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  // const [isTimeoutComplete, setIsTimeoutComplete] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsTimeoutComplete(true);
  //   }, 7000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  let count = 0;

  return (
    // <div style={{ backgroundColor: "#f6f8fa", padding: "0 50px" }}>

    //   {dctVuln.map((item) => {
    //     item = localStorage.getItem(item);
    //     return (
    //       <Paper
    //         elevation={1}
    //         sx={{
    //           padding: "20px 50px",
    //           margin: "50px 10px",
    //           // backgroundColor: "#F1F6F9",
    //         }}
    //       >
    //         <p>Vulnerability: {item.split(",")[0]}</p>
    //         <p>Severity: {item.split(",")[1]}</p>
    //         <p>Vulnerable url: {item.split(",")[2].substring(0, 180)}</p>
    //       </Paper>
    //     );
    //   })}
    // </div>

    <>
      {/* <button onClick={() => getNucleiResponse()}>submit</button> */}
      <Paper
        sx={{
          width: "52vw",
          overflow: "hidden",
          marginLeft: "20px",
          padding: "10px",
          backgroundColor: "#f9fafe",
        }}
      >
        <FormControl>
          <TableContainer sx={{ height: "85vh" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell id="nuclei" style={{ width: "48vw" }}>
                    Nuclei Alerts
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dctVuln.length !== 0 ? (
                  <ul sx={{ marginLeft: "0px", padding: "0px" }}>
                    {dctVuln
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((dctVuln) => {
                        return (
                          <Paper
                            elevation={1}
                            sx={{
                              padding: "10px 50px",
                              margin: "30px -20px",
                              width: "80%",
                              // backgroundColor: "#F1F6F9",
                            }}
                          >
                            <p>
                              <span style={{ fontWeight: 500 }}>
                                Vulnerability
                              </span>
                              : {localStorage.getItem(dctVuln).split(",")[0]}
                            </p>
                            <p>
                              <span style={{ fontWeight: 500 }}>Severity</span>:
                              {localStorage.getItem(dctVuln).split(",")[1]}
                            </p>
                            <p>
                              <span style={{ fontWeight: 500 }}>
                                Vulnerable url
                              </span>
                              :{" "}
                              {localStorage
                                .getItem(dctVuln)
                                .split(",")[2]
                                .substring(0, 100)}
                            </p>
                          </Paper>
                        );
                      })}
                  </ul>
                ) : (
                  <>
                    {" "}
                    <Skeleton
                      width="80%"
                      height={120}
                      sx={{ marginLeft: "3rem", marginTop: "1rem" }}
                    />
                    <Skeleton
                      width="80%"
                      height={120}
                      sx={{ marginLeft: "3rem", marginTop: "1rem" }}
                    />
                    <Skeleton
                      width="80%"
                      height={120}
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
            count={dctVuln.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </FormControl>
      </Paper>
    </>
  );
};

export default Nuclei;
