import "./MedicineFilter.css";

const MedicineFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="medicine-filter">
      <div className="medicine-filter__control">
        <label>Filter by Year:</label>
        <select onChange={dropDownChangeHandler} defaultValue="2021">
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
        </select>
      </div>
    </div>
  );
};

export default MedicineFilter;
