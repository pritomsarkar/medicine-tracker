import React, { useState } from "react";
import NewMedicine from "./components/NewMedicine/NewMedicine";
import Medicine from "./components/MedicineList/Medicine";

const INITIAL_MEDICIENES = [
  {
    id: Math.random(),
    medicine_name: "Aimovig",
    company: "Amgen",
    date: new Date(2021, 2, 12),
    signature: "pritom.sarkar",
    type: "Headaches",
    quantity: 8,
  },
  {
    id: Math.random(),
    medicine_name: "Pfizer",
    company: "Biocon",
    date: new Date(2021, 10, 17),
    signature: "mohit.kanto",
    type: "Osteoporosis",
    quantity: 12,
  },
  {
    id: Math.random(),
    medicine_name: "Roche",
    company: "NovaBay",
    date: new Date(2021, 7, 5),
    signature: "pritom.sarkar",
    type: "Anemia",
    quantity: 20,
  },
  {
    id: Math.random(),
    medicine_name: "GlaxoSmithKline",
    company: "Taro",
    date: new Date(2020, 1, 12),
    signature: "suman.roy",
    type: "Arthritis",
    quantity: 15,
  },
  {
    id: Math.random(),
    medicine_name: "Sanofi",
    company: "Solvay",
    date: new Date(2017, 11, 25),
    signature: "rohit.sil",
    type: "Headaches",
    quantity: 5,
  },
  {
    id: Math.random(),
    medicine_name: "Takeda",
    company: "UBC",
    date: new Date(2018, 10, 22),
    signature: "suman.roy",
    type: "Anemia",
    quantity: 10,
  },
  {
    id: Math.random(),
    medicine_name: "Novartis",
    company: "Ionis",
    date: new Date(2018, 4, 19),
    signature: "aditya.jana",
    type: "Mucositis",
    quantity: 15,
  },
];
const MEDICINE_DROPDOWN = [
  { id: 1, value: "Select" },
  { id: 2, value: "Headaches" },
  { id: 3, value: "Osteoporosis" },
  { id: 4, value: "Anemia" },
  { id: 5, value: "Arthritis" },
  { id: 6, value: "Mucositis" },
  { id: 8, value: "Cancer" },
  { id: 9, value: "Styes" },
  { id: 10, value: "Fiver" },
];

const App = () => {
  let [medicines, setMedicines] = useState(INITIAL_MEDICIENES);

  let saveNewMedicineHandler = (medicines) => {
    setMedicines((previousMediciens) => {
      return [medicines, ...previousMediciens];
    });
  };

  return (
    <div>
      <NewMedicine
        onSaveNewMedicine={saveNewMedicineHandler}
        dropdowns={MEDICINE_DROPDOWN}
      />
      <Medicine items={medicines} barHeadings={MEDICINE_DROPDOWN} />
    </div>
  );
};

export default App;
