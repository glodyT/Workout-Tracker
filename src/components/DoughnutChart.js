import React from 'react';
import Chart from 'react-apexcharts';

const DoughnutChart = () => {
  const options = {
    chart: {
      height: 380,
      type: "radialBar",
    },
    colors: ["#FF5733", "#33FF57", "#3357FF"], 
    plotOptions: {
      radialBar: {
        size: 185,
        hollow: {
          size: "40%",
        },
        track: {
          margin: 10,
          background: "#f4f4f4",
        },
        dataLabels: {
          name: {
            fontSize: "1.5rem",
          },
          value: {
            fontSize: "1rem",
            color: "#333",
          },
          total: {
            show: true,
            fontWeight: 400,
            fontSize: "1.3rem",
            label: "Overall Progress",
            formatter: function (w) {
              return "85%";
            },
          },
        },
      },
    },
    grid: {
      borderColor: "#e0e0e0",
      padding: {
        top: 0,
        bottom: 0,
      },
    },
    legend: {
      show: true,
      position: "bottom",
      labels: {
        useSeriesColors: true,
      },
    },
    stroke: {
      lineCap: "round",
    },
    series: [85, 65, 50], 
    labels: ["Completed Workouts", "Active Days", "Goals Achieved"], 
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h3 className="text-xl font-semibold text-center mb-4">
        Key Workout Tracker Insights
      </h3>
      <Chart options={options} series={options.series} type="radialBar" height={300} />
    </div>
  );
};

export default DoughnutChart;
