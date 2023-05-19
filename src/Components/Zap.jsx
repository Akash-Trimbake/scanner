import React, { useContext, useState } from "react";
import Paper from "@mui/material/Paper";
import AuthContext from "../context/AuthContext";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import FormControl from "@mui/material/FormControl";
import { Divider } from "@mui/material";

let count = 0;

const Zap = () => {
  let { zap } = useContext(AuthContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    // <div style={{ backgroundColor: "#f6f8fa", padding: "10px 50px" }}>
    //   {zap.map((zap) => (
    //     <Paper
    //       key={count + 1}
    //       elevation={1}
    //       sx={{ padding: "20px 50px", margin: "50px 10px" }}
    //     >
    //       <p>Endpoint Name: {zap.endpoint_name}</p>
    //       <p>Severity: {zap.severity}</p>
    //       <p>Vulnerability: {zap.vulnerability}</p>
    //       <p>Subdomain Name: {zap.subdomain_name}</p>
    //       <p>Vulnerable url: {zap.vulnerable_url}</p>
    //     </Paper>
    //   ))}
    // </div>

    <Paper
      sx={{
        width: "48vw",
        overflow: "hidden",
        marginLeft: "10px",
        padding: "10px",
        backgroundColor: "#f9fafe",
      }}
    >
      {zap.length !== 0 ? (
        <FormControl>
          <TableContainer sx={{ height: "85vh" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell id="zap" style={{ width: "48vw" }}>
                    Zap Alerts
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <ul>
                  {zap
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((zap) => {
                      return (
                        <Paper
                          key={count + 1}
                          elevation={1}
                          sx={{ padding: "20px 50px", margin: "50px 10px" }}
                        >
                          <p>
                            <span style={{ fontWeight: 500 }}>
                              Endpoint Name
                            </span>
                            : {zap.endpoint_name}
                          </p>
                          <p>
                            <span style={{ fontWeight: 500 }}>Severity </span>:{" "}
                            {zap.severity}
                          </p>
                          <p>
                            <span style={{ fontWeight: 500 }}>
                              Vulnerability{" "}
                            </span>
                            : {zap.vulnerability}
                          </p>
                          <p>
                            <span style={{ fontWeight: 500 }}>
                              Subdomain Name{" "}
                            </span>
                            : {zap.subdomain_name}
                          </p>
                          <p>
                            <span style={{ fontWeight: 500 }}>
                              Vulnerable url{" "}
                            </span>
                            : {zap.vulnerable_url}
                          </p>
                        </Paper>
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
            count={zap.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </FormControl>
      ) : (
        <p>No Vulnerabilities found by Zap.</p>
      )}
    </Paper>
  );
};

export default Zap;
