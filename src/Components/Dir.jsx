import React, { useState, useContext } from "react";
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
import AuthContext from "../context/AuthContext";

export default function Dir() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  let { dir } = useContext(AuthContext);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper
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
                    <TableCell id="Directories" style={{ width: "48vw" }}>
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
                            <li key={item} style={{ margin: "10px" }}>
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
          <p>No Directories Found!!!</p>
        )}
      </Paper>
    </>
  );
}
