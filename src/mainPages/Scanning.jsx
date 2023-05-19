import React, { useContext } from "react";
import Zap from "../Components/Zap";
import Nuclei from "../Components/Nuclei";
import AuthContext from "../context/AuthContext";
import Button from "@mui/material/Button";

const Scanning = () => {
  let { getDashboardData, navigateToDashboard } = useContext(AuthContext);
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "#f9fafe",
          paddingTop: "10px",
        }}
      >
        <Zap />
        <Nuclei />
      </div>
      <div>
        <Button
          // type="submit"
          variant="contained"
          fullWidth
          color="primary"
          sx={{ width: "90vw", margin: "1vw 5vw" }}
          onClick={() => {
            getDashboardData();
            navigateToDashboard();
          }}
        >
          Go to Dashboard
        </Button>
      </div>
      {/* <button
        onClick={() => {
          getDashboardData();
          navigateToDashboard();
        }}
      >
        click
      </button> */}
    </>
  );
};

export default Scanning;
