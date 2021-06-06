import "./MedicineList.css";
import MedicineItem from "./MedicineItem";

const MedicineList = (props) => {
  if (props.medicineItems.length === 0) {
    return <h1 className="medicine-list__fallback">No Medicine Found!..</h1>;
  }

  return (
    <div>
      <div className="medicine-list">
        {props.medicineItems.map((medicine) => {
          return (
            <MedicineItem
              key={medicine.id}
              medicineName={medicine.medicine_name}
              company={medicine.company}
              date={medicine.date}
              signature={medicine.signature}
              type={medicine.type}
              quantity={medicine.quantity}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MedicineList;
