import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import AuthContext from "../context/AuthContext";

let count = 0;

const Zap = () => {
  let { zap } = useContext(AuthContext);
  return (
    // <div style={{ backgroundColor: "#f6f8fa", padding: "10px 50px" }}>
    //   {zap.map((zap) => (
    //     <Paper
    //       key={count + 1}
    //       elevation={1}
    //       sx={{ padding: "20px 50px", margin: "50px 10px" }}
    //     >
    //       <p>Endpoint Name: {zap.endpoint_name}</p>
    //       <p>
    //         Severity: <span style={{ color: "red" }}>{zap.severity}</span>
    //       </p>
    //       <p>Vulnerability: {zap.vulnerability}</p>
    //       <p>Subdomain Name: {zap.subdomain_name}</p>
    //       <p>Vulnerable url: {zap.vulnerable_url}</p>
    //     </Paper>
    //   ))}
    // </div>

    <p>zap</p>
  );
};

export default Zap;
