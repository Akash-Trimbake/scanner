import React, { useState, useContext } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Divider } from "@mui/material";
import Button from "@mui/material/Button";
import AuthContext from "../context/AuthContext";

const Endpoint = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  let {
    endpoints,
    selectedEndpoint,
    setSelectedEndpoint,
    getZapSpyderResponse,
    navigateToScanningPage,
    getNucleiResponse,
  } = useContext(AuthContext);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "52vw", overflow: "hidden", padding: "10px" }}>
      {endpoints.length !== 0 ? (
        <FormControl>
          <TableContainer sx={{ width: "52vw", height: 510 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell
                    id="EndPoints"
                    style={{
                      minWidth: "170",
                      fontSize: "1.4rem",
                      color: "#4caf50",
                    }}
                  >
                    EndPoints
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="radio"
                  value={selectedEndpoint}
                  onChange={(event) => setSelectedEndpoint(event.target.value)}
                >
                  {endpoints
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((item) => {
                      return (
                        <TableRow
                          hover
                          key={item}
                          style={{
                            listStyle: "none",
                            marginLeft: "3rem",
                            color: "grey",
                          }}
                        >
                          <FormControlLabel
                            value={item}
                            control={<Radio />}
                            label={item}
                          />
                        </TableRow>
                      );
                    })}
                </RadioGroup>
              </TableBody>
            </Table>
          </TableContainer>
          <Divider />
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={endpoints.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            onClick={() => {
              navigateToScanningPage();
              getZapSpyderResponse();
              getNucleiResponse();
              console.log("endpoint selected :", selectedEndpoint);
            }}
          >
            Submit
          </Button>
        </FormControl>
      ) : (
        <p>No Endpoints Foiund!!!</p>
      )}
    </Paper>
  );
};

export default Endpoint;
