import React, { useState } from "react";
import "./NewMedicine.css";
import MedicineFrom from "../NewMedicine/MedicineFrom";

const NewMedicine = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveMedicineHandler = (enteredMedicineData) => {
    const medicineData = {
      id: Math.random(),
      ...enteredMedicineData,
    };
    props.onSaveNewMedicine(medicineData);
    stopEditHandler(false);
  };

  const startEditHandler = () => {
    setIsEditing(true);
  };
  const stopEditHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-medicine">
      {!isEditing && (
        <button onClick={startEditHandler}>Add New Medicine</button>
      )}
      {isEditing && (
        <MedicineFrom
          onSaveMedicineData={saveMedicineHandler}
          dropDownValues={props.dropdowns}
          onCancel={stopEditHandler}
        />
      )}
    </div>
  );
};

export default NewMedicine;
