import React, { useState } from "react";
import "./Medicine.css";
import Card from "../UI/Card";
import MedicienFilter from "./MedicineFilter";
import MedicineChart from "./MedicineChart";
import MedicineList from "./MedicineList";

const Medicine = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredMedicines = props.items.filter(
    (element) => element.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="medicine">
        <MedicienFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <MedicineChart
          medicines={filteredMedicines}
          headings={props.barHeadings}
        />
        <MedicineList medicineItems={filteredMedicines} />
      </Card>
    </div>
  );
};

export default Medicine;
