import React from "react";
import "./MedicineItem.css";
import MedicineDate from "./MedicineDate";
import Card from "../UI/Card";

const MedicineItem = (props) => {
  return (
    <Card className="medicine-item">
      <div className="medicine-item__description">{props.company}</div>
      <div className="medicine-item__description">{props.medicineName}</div>
      <MedicineDate date={props.date} />
      <label>Quantity</label>
      <div className="medicine-item__price">{props.quantity}</div>
      <div className="medicine-item__description">{props.signature}</div>
    </Card>
  );
};

export default MedicineItem;
