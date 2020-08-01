import React, { useEffect } from "react";
import Chart from "chart.js";
function MyChart() {
  let chartRef = React.createRef();

  useEffect(() => {
    const myChartRef = chartRef.getContext("2d");
    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: ["Jan", "Feb", "March"],
        datasets: [
          {
            label: "Sales",
            data: [86, 67, 91],
          },
        ],
      },
      options: {
        //Customize chart options
      },
    });
  }, [chartRef]);
  return (
    <div className="chart-area" style={{ width: 350 }}>
      <canvas id="myChart" ref={(ref) => (chartRef = ref)} />
    </div>
  );
}

export default MyChart;
