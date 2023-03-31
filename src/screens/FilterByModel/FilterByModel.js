import React, { useState } from "react";
import data from "../../data.json";

const options = [
  { value: "all", label: "All" },
  { value: "Gol", label: "Gol" },
  { value: "208", label: "208" },
  { value: "Cronos", label: "Cronos" },
  { value: "Pulse", label: "Pulse" },
  { value: "T-Cross", label: "T-Cross" },
];

const FilterByModel = () => {
  const [selectedModel, setSelectedModel] = useState(options[0].value);

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const filteredItems =
    selectedModel === "all"
      ? data
      : data.filter((data) => data.vehicleModel === selectedModel);

  return (
    <div>
      <label htmlFor="dropdown">Filtrar por Modelo:</label>
      <select id="dropdown" value={selectedModel} onChange={handleModelChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <ul>
        {filteredItems.map((data) => (
          <li key={data.vehicleId} style={{ listStyleType: "none" }}>
            {data.vehicleModel} ({data.vehicleCategory})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterByModel;
