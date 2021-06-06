import "./MedicineDate.css";

const MedicineDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="medicine-date">
      <div className="medicine-date__month">{month}</div>
      <div className="medicine-date__year">{year}</div>
      <div className="medicine-date__day">{day}</div>
    </div>
  );
};

export default MedicineDate;
