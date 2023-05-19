import React, { useContext } from "react";
import { ResponsivePie } from "@nivo/pie";
import Paper from "@mui/material/Paper";
import AuthContext from "../context/AuthContext";

const PieChart = () => {
  let { dashboardData } = useContext(AuthContext);

  let data = [
    {
      id: "medium",
      label: "Medium",
      value: dashboardData.medium,
      color: "hsl(326, 70%, 50%)",
    },
    {
      id: "high",
      label: "high",
      value: dashboardData.high,
      color: "hsl(248, 70%, 50%)",
    },

    {
      id: "low",
      label: "low",
      value: dashboardData.low,
      color: "hsl(118, 70%, 50%)",
    },
  ];

  return (
    <>
      <Paper
        elevation={0}
        style={{ height: "60vh", width: "50vw", backgroundColor: "#f6f8fa" }}
      >
        {/* <p>PieChart</p> */}
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          //   fill={[
          //     {
          //       match: {
          //         id: "ruby",
          //       },
          //       id: "dots",
          //     },
          //     {
          //       match: {
          //         id: "c",
          //       },
          //       id: "dots",
          //     },
          //     {
          //       match: {
          //         id: "go",
          //       },
          //       id: "dots",
          //     },
          //     {
          //       match: {
          //         id: "python",
          //       },
          //       id: "dots",
          //     },
          //     {
          //       match: {
          //         id: "scala",
          //       },
          //       id: "lines",
          //     },
          //     {
          //       match: {
          //         id: "lisp",
          //       },
          //       id: "lines",
          //     },
          //     {
          //       match: {
          //         id: "elixir",
          //       },
          //       id: "lines",
          //     },
          //     {
          //       match: {
          //         id: "javascript",
          //       },
          //       id: "lines",
          //     },
          //   ]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </Paper>
    </>
  );
};

export default PieChart;
