import React, { useState } from "react";

const SortBox = ({ onSortChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSortChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setSelectedOption(value);
    onSortChange(value);
  };

  return (
    <select value={selectedOption} onChange={handleSortChange}>
      <option value="">Sort By</option>
      <option value="lowToHigh">Low to High</option>
      <option value="highToLow">High to Low</option>
    </select>
  );
};

export default SortBox;
