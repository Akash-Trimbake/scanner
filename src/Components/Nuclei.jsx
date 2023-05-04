import React, { useState, useContext, useEffect, useRef } from "react";
import AuthContext from "../context/AuthContext";
import Paper from "@mui/material/Paper";
import { fetchEventSource } from "@microsoft/fetch-event-source";

const Nuclei = () => {
  let { dctVuln, getNucleiResponse } = useContext(AuthContext);

  return (
    <div>
      {/* <button
        onClick={() => {
          getNucleiResponse();
        }}
      >
        submit
      </button> */}
      {dctVuln.map((item) => {
        item = localStorage.getItem(item);
        return (
          <Paper
            elevation={1}
            sx={{
              padding: "20px 50px",
              margin: "50px 10px",
              backgroundColor: "#F1F6F9",
            }}
          >
            <p>Vulnerability: {item.split(",")[0]}</p>
            <p>Severity: {item.split(",")[1]}</p>
            <p>Vulnerable url: {item.split(",")[2].substring(0, 180)}</p>
          </Paper>
        );
      })}
    </div>
  );
  // let count = 0;
  // responseData = JSON.parse(responseData);
  // const [Store, setStore] = useState([]);
  // useEffect(() => {
  //   console.log(dctVuln);
  //   // console.log(Store)
  // }, []);
};

export default Nuclei;
