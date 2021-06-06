import "./ChartsBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div style={{ margin: "10px" }}>
      <div className="chart-bar">
        <label className="chart-bar__label">{props.label}</label>
        <div className="chart-bar__inner">
          <div
            className="chart-bar__fill"
            style={{ width: barFillHeight }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ChartBar;
