import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./dashboard.css";
import AuthContext from "../context/AuthContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DashboardCards = () => {
  let { subDomains, dashboardData } = useContext(AuthContext);

  return (
    <div style={{ padding: "40px 20px", width: "48vw" }}>
      <div className="card">
        <div className="item item--1">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              fill="rgba(149,149,255,1)"
              d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
            ></path>
          </svg>
          <span
            className="quantity"
            style={{ color: "rgba(149, 149, 255, 1)" }}
          >
            {" "}
            {dashboardData.ip}{" "}
          </span>
          <span className="text text--1"> ip </span>
        </div>
        <div className="item item--2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0L24 0 24 24 0 24z"></path>
            <path
              d="M16 16c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm10 6c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM6 14c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm8.5-12C17.538 2 20 4.462 20 7.5S17.538 13 14.5 13 9 10.538 9 7.5 11.462 2 14.5 2zm0 2C12.567 4 11 5.567 11 7.5s1.567 3.5 3.5 3.5S18 9.433 18 7.5 16.433 4 14.5 4z"
              fill="rgba(252,161,71,1)"
            ></path>
          </svg>{" "}
          <span className="quantity" style={{ color: "rgba(252,161,71,1)" }}>
            {" "}
            {dashboardData.endpt_count}{" "}
          </span>
          <span className="text text--2"> Endpoints </span>
        </div>
        <div className="item item--3">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              fill="rgba(66,193,110,1)"
              d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
            ></path>
          </svg>
          <span className="quantity" style={{ color: "rgba(66,193,110,1)" }}>
            {" "}
            {dashboardData.dir_count}{" "}
          </span>
          <span className="text text--3"> Directories </span>
        </div>
        <div className="item item--4">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              fill="rgba(220,91,183,1)"
              d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
            ></path>
          </svg>
          <span className="quantity" style={{ color: "rgba(220,91,183,1)" }}>
            {" "}
            {subDomains.length}{" "}
          </span>
          <span className="text text--4"> Subdomains </span>
        </div>
        <div className="item item--5">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-140.000000, -3280.000000)"
                fill="#FEC260"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M92,3124 L96,3124 L96,3120 L92,3120 L92,3124 Z M92,3138 L96,3138 L96,3134 L92,3134 L92,3138 Z M100,3138 L104,3138 L104,3134 L100,3134 L100,3138 Z M84,3138 L88,3138 L88,3134 L84,3134 L84,3138 Z M87,3132 L85,3132 L85,3128 L93,3128 L93,3126 L95,3126 L95,3128 L103,3128 L103,3132 L101,3132 L101,3130 L95,3130 L95,3132 L93,3132 L93,3130 L87,3130 L87,3132 Z"
                    id="network_3-[#1116]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <span className="quantity" style={{ color: "#FEC260" }}>
            {" "}
            {dashboardData.ports}{" "}
          </span>
          <span className="text text--5"> Ports </span>
        </div>
        <div className="item item--6">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Bug"
              d="M12.5,25a7.49,7.49,0,0,1-7.41-6.52A7.68,7.68,0,0,0,.83,21.14L0,20.55a8.77,8.77,0,0,1,5-3.08q0-.12,0-.23V15H0V14H5V11.18A8.5,8.5,0,0,1,0,7.55L.83,7c2,2.71,4,3.19,4.55,3.27L5.66,10a13.66,13.66,0,0,1,2.49-1.4A4.5,4.5,0,0,1,10,3.75L7.63.74,8.41.11l2.54,3.17a4.62,4.62,0,0,1,3.09,0L16.57.11l.78.63-2.4,3a4.51,4.51,0,0,1,1.9,4.91,13.55,13.55,0,0,1,2.49,1.4l.27.18c.56-.08,2.58-.56,4.55-3.27l.81.59a8.5,8.5,0,0,1-5,3.63V14h5v1H20v2.24q0,.12,0,.23a8.77,8.77,0,0,1,5,3.08l-.81.59a7.68,7.68,0,0,0-4.26-2.66A7.49,7.49,0,0,1,12.5,25ZM12,13h1V24a6.58,6.58,0,0,0,6-6.74V11l-.21-.14A10.39,10.39,0,0,0,12.54,8.8a10.82,10.82,0,0,0-6.32,2.08L6,11v6.21A6.58,6.58,0,0,0,12,24Zm.5-9a3.5,3.5,0,0,0-3.41,4.3,11.39,11.39,0,0,1,3.41-.5h0a11.37,11.37,0,0,1,3.37.5A3.51,3.51,0,0,0,12.5,4Z"
              fill="#C88EA7"
            ></path>
          </svg>
          <span className="quantity" style={{ color: "#C88EA7" }}>
            {" "}
            {dashboardData.high + dashboardData.medium + dashboardData.low === 0
              ? " "
              : dashboardData.high +
                dashboardData.medium +
                dashboardData.low}{" "}
          </span>
          <span className="text text--6"> Vulnerabilities </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
