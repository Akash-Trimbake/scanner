import React, { useContext } from "react";

import Divider from "@mui/material/Divider";
import AuthContext from "../context/AuthContext";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

function createData(infoOf, info) {
  return { infoOf, info };
}

const rows = [
  createData("Address", "Address"),
  createData("IP", "ip"),
  createData("Web Server", "webserver"),
  createData("Programming Language", "programminglanguage"),
  createData("CMS", "cms"),
];

const TechIp = () => {
  let { ip, webserver, programminglanguage, cms } = useContext(AuthContext);

  return (
    <>
      <Paper style={{ padding: "20px ", textAlign: "center" }}>
        <Typography
          variant="h5"
          style={{ textAlign: "center", margin: "10px" }}
        >
          Information of Target: Subdomain
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
            <Typography>{ip ? ip : <p>-</p>}</Typography>
          </div>
          <div>
            <Typography>Web Server</Typography>
            <Typography>{webserver ? webserver : <p>-</p>}</Typography>
          </div>
          <div>
            <Typography>Programming Language</Typography>
            <Typography>
              {programminglanguage ? programminglanguage : <p>-</p>}
            </Typography>
          </div>
          <div>
            <Typography>CMS</Typography>
            <Typography>{cms ? cms : <p>-</p>}</Typography>
          </div>
        </div>
      </Paper>
    </>
  );
};

export default TechIp;
