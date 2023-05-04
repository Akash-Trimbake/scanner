import React, { useContext } from "react";

import Divider from "@mui/material/Divider";
import AuthContext from "../context/AuthContext";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

const TechIp = () => {
  let { selectedDomain, ip, webserver, programminglanguage, cms } =
    useContext(AuthContext);

  return (
    <>
      <Paper style={{ padding: "20px ", textAlign: "center" }}>
        <Typography
          variant="h5"
          style={{ textAlign: "center", margin: "10px" }}
        >
          Information of Target:{" "}
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
          <div>
            <Typography>IP</Typography>
            <Typography>{ip ? ip : <span>0.0.0.0</span>}</Typography>
          </div>
          <div>
            <Typography>Web Server</Typography>
            <Typography>{webserver ? webserver : <span>-</span>}</Typography>
          </div>
          <div>
            <Typography>Programming Language</Typography>
            <Typography>
              {programminglanguage ? programminglanguage : <span>-</span>}
            </Typography>
          </div>
          <div>
            <Typography>CMS</Typography>
            <Typography>{cms ? cms : <span>-</span>}</Typography>
          </div>
        </div>
      </Paper>
    </>
  );
};

export default TechIp;
