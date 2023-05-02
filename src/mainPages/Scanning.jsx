import React from "react";
import Paper from "@mui/material/Paper";
const data = [
  {
    endpoint_name: "http://testphp.vulnweb.com/listproducts.php?cat=1",
    severity: "High",
    vulnerability: "Cross Site Scripting (Reflected)",
    vulnerable_url:
      "http://testphp.vulnweb.com/listproducts.php?cat=%3Cimg+src%3Dx+onerror%3Dprompt%28%29%3E",
    param: "cat",
    subdomain_name: "testphp.vulnweb.com",
  },
  {
    endpoint_name: "http://testphp.vulnweb.com/listproducts.php?cat=1",
    severity: "High",
    vulnerability: "SQL Injection",
    vulnerable_url:
      "http://testphp.vulnweb.com/listproducts.php?cat=3+AND+1%3D1+--+",
    param: "cat",
    subdomain_name: "testphp.vulnweb.com",
  },
  {
    endpoint_name: "http://testphp.vulnweb.com/listproducts.php?cat=1",
    severity: "High",
    vulnerability: "SQL Injection - MySQL",
    vulnerable_url: "http://testphp.vulnweb.com/listproducts.php?cat=3",
    param: "cat",
    subdomain_name: "testphp.vulnweb.com",
  },
];

const Scanning = () => {
  return (
    <>
      <Paper>Yo</Paper>
    </>
  );
};

export default Scanning;
