import React, { useContext } from "react";
import PieChart from "../Components/PieChart";
import AuthContext from "../context/AuthContext";
import DashboardCards from "../Components/DashboardCards";
import DashboardTable from "../Components/DashboardTable";

const Dashboard = () => {
  let { dashboardData, getDashboardData } = useContext(AuthContext);

  return (
    <div style={{ backgroundColor: "#f6f8fa" }}>
      {/* <button onClick={() => getDashboardData()}>click</button> */}
      {console.log(dashboardData)}
      <div
        style={{
          display: "flex",
          backgroundColor: "#f6f8fa",
          padding: "10px",
        }}
      >
        <PieChart />
        <DashboardCards />
      </div>
      <div>{dashboardData.vulnout ? <DashboardTable /> : <></>}</div>
    </div>
  );
};

export default Dashboard;
