import React, { useEffect } from "react";
import Chart from "chart.js";
import style from "./index.module.css"
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
        responsive:false,
        maintainAspectRatio:false
      },
    });
  }, [chartRef]);
  return (
    <div style={{width:"100%"}}>
      <canvas style={{width:"100%"}} id={style.myChart} ref={(ref) => (chartRef = ref)} />
    </div>
  );
}

export default MyChart;
