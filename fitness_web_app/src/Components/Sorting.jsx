import React, { useState, useEffect } from "react";

const SortThing = ({ options, onFilterChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleFilterChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setSelectedOption(value);
    onFilterChange(value); // Callback to parent component with selected option
  };

  return (
    <select value={selectedOption} onChange={handleFilterChange}>
      <option value="All">All</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SortThing;
