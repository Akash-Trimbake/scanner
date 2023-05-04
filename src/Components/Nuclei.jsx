import React, { useState, useContext, useEffect, useRef } from "react";
import AuthContext from "../context/AuthContext";
import Paper from "@mui/material/Paper";
import { fetchEventSource } from "@microsoft/fetch-event-source";

const Nuclei = () => {
  let { authTokens } = useContext(AuthContext);
  const [dctVuln, setdctVuln] = useState([]);
  // const [severity, setSeverity] = useState([]);
  // const [url, setUrl] = useState([]);
  // const [response, setResponse] = useState([]);
  const getNucleiResponse = () => {
    // localStorage.setItem('data',[])
    const url =
      "http://192.168.0.110:8000/vuln/1/nuclei?url=http://testphp.vulnweb.com/listproducts.php?cat=1";
    const headers = { "Content-Type": "application/json" };

    const responseData = document.getElementById("response-data");
    let c = 1;
    fetch(url, {
      headers: {
        ...headers,
        Authorization: `Bearer ${authTokens.access}`,
      },
      method: "GET",
    })
      .then((response) => {
        const reader = response.body.getReader();

        function read() {
          reader
            .read()
            .then(({ done, value }) => {
              if (done) {
                console.log("Stream complete");
                return;
              }

              const decoder = new TextDecoder();
              const text = decoder.decode(value);
              // console.log(text, JSON.parse(`te/xt));
              const items = JSON.parse(`${text}`);
              // console.log(items);
              // setResponse(json.data);
              let dct = [items.data.Vuln, items.data.severity, items.data.url];
              // console.log(dct);

              localStorage.setItem(dct[0], dct);

              let data = Object.keys(localStorage).filter((item) => {
                return item !== "authTokens";
              });
              data = data.filter((item) => {
                return item !== "isLoggedIn";
              });
              console.log(data.length);
              setdctVuln(...[data]);
              read();
              c++;
            })
            .catch((error) => {
              console.error(error);
            });
        }

        read();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <button
        onClick={() => {
          getNucleiResponse();
        }}
      >
        submit
      </button>
      {dctVuln.map((item) => {
        item = localStorage.getItem(item);
        return (
          <Paper
            elevation={1}
            sx={{ padding: "20px 50px", margin: "50px 10px" }}
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
