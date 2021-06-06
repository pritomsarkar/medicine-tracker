import React from "react";
import "./Charts.css";
import ChartsBar from "./ChartsBar";

const Charts = (props) => {
  const quantityArray = props.dataPoints.map((item) => item.value);
  const maximumQuantity = Math.max(...quantityArray);
  return (
    <div className="chart">
      <ul className="chart_ul">
        {props.dataPoints.map((dataPoint) => (
          <ChartsBar
            key={Math.random()}
            value={dataPoint.value}
            maxValue={maximumQuantity}
            label={dataPoint.label}
          />
        ))}
      </ul>
    </div>
  );
};

export default Charts;
