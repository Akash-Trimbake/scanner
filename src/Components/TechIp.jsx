import React, { useContext } from "react";

import Divider from "@mui/material/Divider";
import AuthContext from "../context/AuthContext";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Opacity } from "@mui/icons-material";

const TechIp = () => {
  let { selectedDomain, ip, webserver, programminglanguage, cms } =
    useContext(AuthContext);

  return (
    <div style={{ backgroundColor: "#f9fafe" }}>
      {/* <Paper elevation={0} style={{ padding: "20px ", textAlign: "center" }}> */}
      <Typography variant="h5" style={{ textAlign: "center", margin: "10px" }}>
        Target Information:{" "}
        <span style={{ color: "rgba(0, 127, 255, 0.4)" }}>
          {selectedDomain}
        </span>
      </Typography>
      <Divider />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <Paper elevation={2} className="info_card">
          <div>
            <Typography className="info_typo">IP</Typography>
            <Typography className="info_typo_val">
              {ip ? ip : <span>0.0.0.0</span>}
            </Typography>
          </div>
        </Paper>
        <Paper elevation={2} className="info_card">
          <div>
            <Typography className="info_typo">Web Server</Typography>
            <Typography className="info_typo_val">
              {webserver ? webserver : <span>-</span>}
            </Typography>
          </div>
        </Paper>
        <Paper elevation={2} className="info_card">
          <div>
            <Typography className="info_typo">Programming Language</Typography>
            <Typography className="info_typo_val">
              {programminglanguage ? programminglanguage : <span>-</span>}
            </Typography>
          </div>
        </Paper>
        <Paper elevation={2} className="info_card">
          <div>
            <Typography className="info_typo">CMS</Typography>
            <Typography className="info_typo_val">
              {cms ? cms : <span>-</span>}
            </Typography>
          </div>
        </Paper>
      </div>
      {/* </Paper> */}
    </div>
  );
};

export default TechIp;
