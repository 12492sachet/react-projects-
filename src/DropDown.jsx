import React, { useState } from "react";
import "./index.css";
function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("Automatic"); // Initial selected option

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="drop-menu">
      <label className="">Reconciliation Trigger: </label>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option className="automatic-btn" value="Automatic">
          Automatic
        </option>
        <option className="manual-btn" value="Manual">
          Manual
        </option>
      </select>
    </div>
  );
}
export default Dropdown;
