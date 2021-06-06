import "./MedicineFrom.css";
import { useState } from "react";

const MedicineFrom = (props) => {
  const [enteredMedicineName, setMedicineName] = useState("");
  const [enteredCompany, setCompany] = useState("");
  const [enteredType, setType] = useState("");
  const [enteredDate, setDate] = useState("");
  const [enteredCount, setCount] = useState("0");
  const [enteredSignature, setSignature] = useState("");

  const medicineNameChangeHandler = (event) => {
    setMedicineName(event.target.value);
  };

  const compantChangeHandler = (event) => {
    setCompany(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const typeChangeHandler = (event) => {
    setType(event.target.value);
  };

  const countChangeHandler = (event) => {
    setCount(event.target.value);
  };

  const signatureChangeHandler = (event) => {
    setSignature(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const medicineData = {
      medicine_name: enteredMedicineName,
      company: enteredCompany,
      type: enteredType,
      date: new Date(enteredDate),
      signature: enteredSignature,
      quantity: parseInt(enteredCount),
    };
    props.onSaveMedicineData(medicineData);
    setMedicineName("");
    setCompany("");
    setDate("");
    setCount("");
    setSignature("");
  };

  const cursive = {
    fontFamily: "Prestige",
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-medicine__controls">
        <div className="new-medicine__controls">
          <label>Medicine Name</label>
          <input
            type="text"
            value={enteredMedicineName}
            onChange={medicineNameChangeHandler}
          ></input>
        </div>
        <div className="new-medicine__controls">
          <label>Company</label>
          <input
            type="text"
            value={enteredCompany}
            onChange={compantChangeHandler}
          ></input>
        </div>
        <div className="new-medicine__controls">
          <label>Purchase Date</label>
          <input
            type="date"
            min="2014-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div className="new-medicine__controls">
          <label>Type</label>
          <select onChange={typeChangeHandler}>
            {props.dropDownValues.map((item) => (
              <option key={item.id} value={item.value}>
                {item.value}
              </option>
            ))}
          </select>
        </div>
        <div className="new-medicine__controls">
          <label>Count</label>
          <input
            type="number"
            min="1"
            step="1"
            value={enteredCount}
            onChange={countChangeHandler}
          ></input>
        </div>
        <div className="new-medicine__controls">
          <label>Signature</label>
          <input
            type="text"
            value={enteredSignature}
            onChange={signatureChangeHandler}
            style={cursive}
          ></input>
        </div>
      </div>
      <div className="new-medicine__actions">
        <button type="cancel" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Medicine</button>
      </div>
    </form>
  );
};

export default MedicineFrom;
