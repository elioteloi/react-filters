import React, { useState } from "react";

const options = [
  { value: "all", label: "All" },
  { value: "Hatch Econômico", label: "Hatch Econômico" },
  { value: "Hatch Intermediário", label: "Hatch Intermediário" },
  { value: "Sedan", label: "Sedan" },
  { value: "SUV Compacto", label: "SUV Compacto" },
];

const data = [
  {
    vehicleId: 1,
    vehiclePlate: "1337C0D3",
    vehicleBrand: "Volkswagem",
    vehicleModel: "Gol",
    vehicleCategory: "Hatch Econômic",
    contracts: [
      {
        contractId: 5,
        userId: 23,
        userName: "Elliot",
        startDate: "2023-03-14 12:08:31.000",
        endDate: "2023-03-25 12:08:31.000",
      },
      {
        contractId: 6,
        userId: 25,
        userName: "Lorran",
        startDate: "2023-03-14 12:08:31.000",
        endDate: "2023-03-25 12:08:31.000",
      },
    ],
  },
  {
    vehicleId: 2,
    vehiclePlate: "4122D1F2",
    vehicleBrand: "Peugeot",
    vehicleModel: "208",
    vehicleCategory: "Hatch Intermediário",

    contracts: [
      {
        contractId: 7,
        userId: 23,
        userName: "John",
        startDate: "2023-03-14 12:08:31.000",
        endDate: "2023-03-25 12:08:31.000",
      },
      {
        contractId: 8,
        userId: 25,
        userName: "Marc",
        startDate: "2023-03-14 12:08:31.000",
        endDate: "2023-03-25 12:08:31.000",
      },
    ],
  },
  {
    vehicleId: 3,
    vehiclePlate: "4122D1F2",
    vehicleBrand: "Fiat",
    vehicleModel: "Cronos",
    vehicleCategory: "Seda",

    contracts: [
      {
        contractId: 7,
        userId: 23,
        userName: "John",
        startDate: "2023-03-14 12:08:31.000",
        endDate: "2023-03-25 12:08:31.000",
      },
      {
        contractId: 8,
        userId: 25,
        userName: "Marc",
        startDate: "2023-03-14 12:08:31.000",
        endDate: "2023-03-25 12:08:31.000",
      },
    ],
  },
  {
    vehicleId: 4,
    vehiclePlate: "4122D1F2",
    vehicleBrand: "Fiat",
    vehicleModel: "Pulse",
    vehicleCategory: "SUV Compacto",

    contracts: [
      {
        contractId: 7,
        userId: 23,
        userName: "John",
        startDate: "2023-03-14 12:08:31.000",
        endDate: "2023-03-25 12:08:31.000",
      },
      {
        contractId: 8,
        userId: 25,
        userName: "Marc",
        startDate: "2023-03-14 12:08:31.000",
        endDate: "2023-03-25 12:08:31.000",
      },
    ],
  },
  {
    vehicleId: 5,
    vehiclePlate: "4122D1F2",
    vehicleBrand: "Volkswagem",
    vehicleModel: "T-Cross",
    vehicleCategory: "SUV Compacto",

    contracts: [
      {
        contractId: 7,
        userId: 23,
        userName: "John",
        startDate: "2023-03-14 12:08:31.000",
        endDate: "2023-03-25 12:08:31.000",
      },
      {
        contractId: 8,
        userId: 25,
        userName: "Marc",
        startDate: "2023-03-14 12:08:31.000",
        endDate: "2023-03-25 12:08:31.000",
      },
    ],
  },
  {
    vehicleId: 5,
    vehiclePlate: "4122D1F2",
    vehicleBrand: "Volkswagem",
    vehicleModel: "Gol",
    vehicleCategory: "SUV Compacto",

    contracts: [
      {
        contractId: 7,
        userId: 23,
        userName: "John",
        startDate: "2023-03-14 12:08:31.000",
        endDate: "2023-03-25 12:08:31.000",
      },
      {
        contractId: 8,
        userId: 25,
        userName: "Marc",
        startDate: "2023-03-14 12:08:31.000",
        endDate: "2023-03-25 12:08:31.000",
      },
    ],
  },
];

const Dropdown = () => {
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
          <li key={data.vehicleId}>
            {data.vehicleBrand} ({data.vehicleCategory})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
