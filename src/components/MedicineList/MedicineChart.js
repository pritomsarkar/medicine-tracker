import React from "react";
import Chart from "../Chart/Charts";

const MedicineChart = (props) => {
  let ChartDataPoints = [];
  for (let i = 1; i < props.headings.length; i++) {
    ChartDataPoints.push({ label: props.headings[i].value, value: 0 });
  }
  for (let medicine of props.medicines) {
    const medicineType = medicine.type;
    let index = 0;
    for (let item of ChartDataPoints) {
      if (item.label === medicineType) {
        break;
      } else {
        index++;
      }
    }
    ChartDataPoints[index].value += medicine.quantity;
  }

  return <Chart dataPoints={ChartDataPoints} />;
};

export default MedicineChart;
