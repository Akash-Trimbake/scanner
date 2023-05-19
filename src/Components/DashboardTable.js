import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {
  DataGrid,
  GridToolbarQuickFilter,
  GridLogicOperator,
} from "@mui/x-data-grid";
import AuthContext from "../context/AuthContext";

// import data from "./data";

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <GridToolbarQuickFilter
        quickFilterParser={(searchInput) =>
          searchInput
            .split(",")
            .map((value) => value.trim())
            .filter((value) => value !== "")
        }
      />
    </Box>
  );
}

export default function QuickFilteringCustomizedGrid() {
  let { dashboardData } = useContext(AuthContext);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "vuln",
      headerName: "Vulnerability",
      width: 250,
    },
    {
      field: "severity",
      headerName: "Severity",
      width: 150,
    },
    {
      field: "vuln_url",
      headerName: "Vulnerable URL",
      width: 700,
    },
  ];

  //   const count = 0;

  // const rows = [
  //   {
  //     id: 1,
  //     vuln: "SQL Injection - SQLite",
  //     severity: "High",
  //     vuln_url: "http://testphp.vulnweb.com:80/admin/?C=",
  //   },
  //   {
  //     id: 2,
  //     vuln: "Cross Site Scripting (Reflected)",
  //     severity: "High",
  //     vuln_url:
  //       "http://testphp.vulnweb.com/listproducts.php?cat=%3Cimg+src%3Dx+onerror%3Dprompt%28%29%3E",
  //   },
  //   {
  //     id: 3,
  //     vuln: "SQL Injection",
  //     severity: "High",
  //     vuln_url:
  //       "http://testphp.vulnweb.com/listproducts.php?cat=3+AND+1%3D1+--+",
  //   },
  //   {
  //     id: 4,
  //     vuln: "SQL Injection - MySQL",
  //     severity: "High",
  //     vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=3",
  //   },
  //   {
  //     id: 5,
  //     vuln: "php-detect",
  //     severity: "info",
  //     vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
  //   },
  //   {
  //     id: 6,
  //     vuln: "nginx-version",
  //     severity: "info",
  //     vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
  //   },
  //   {
  //     id: 7,
  //     vuln: "php-errors",
  //     severity: "info",
  //     vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
  //   },
  // ];

  return (
    <Paper elevation={3} sx={{ backgroundColor: "#f6f8fa" }}>
      <Box
        sx={{
          height: 600,
          width: 1,
          backgroundColor: "#f6f8fa",
        }}
      >
        <DataGrid
          rows={dashboardData.vulnout}
          columns={columns}
          initialState={{
            filterModel: {
              items: [],
              quickFilterLogicOperator: GridLogicOperator.Or,
            },
          }}
          slots={{ toolbar: QuickSearchToolbar }}
        />
        {console.log("at table", dashboardData)}
      </Box>
    </Paper>
  );
}
