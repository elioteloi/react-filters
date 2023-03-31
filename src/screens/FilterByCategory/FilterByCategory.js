import React, { useState } from "react";
import data from "../../data.json";
const options = [
  { value: "all", label: "All" },
  { value: "Hatch Econômico", label: "Hatch Econômico" },
  { value: "Hatch Intermediário", label: "Hatch Intermediário" },
  { value: "Sedan", label: "Sedan" },
  { value: "SUV Compacto", label: "SUV Compacto" },
];

const FilterByCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(options[0].value);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems =
    selectedCategory === "all"
      ? data
      : data.filter((data) => data.vehicleCategory === selectedCategory);

  return (
    <div>
      <label htmlFor="dropdown">Filtrar por categorias:</label>
      <select
        id="dropdown"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <ul>
        {filteredItems.map((data) => (
          <li key={data.vehicleId} style={{ listStyleType: "none" }}>
            {data.vehicleBrand} {data.vehicleModel} ({data.vehicleCategory})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterByCategory;
