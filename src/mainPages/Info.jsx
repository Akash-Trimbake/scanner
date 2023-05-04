import React from "react";
import TechIp from "../Components/TechIp";
import Dir from "../Components/Dir";
import Endpoint from "../Components/Endpoint";

const Info = () => {
  return (
    <div style={{ backgroundColor: "#f6f8fa" }}>
      <TechIp />
      <br />
      <div style={{ display: "flex", gap: "20px" }}>
        <Dir />
        <Endpoint />
      </div>
    </div>
  );
};

export default Info;
