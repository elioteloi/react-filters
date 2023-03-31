import { useState } from "react";
import data from "../../data.json";
function FilterByLicensePlate() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        placeholder={"Pesquise a sua vacina..."}
        onChange={(e) => setQuery(e.target.value)}
      />
      {data
        .filter((data) => data.vehiclePlate.toLowerCase().includes(query))
        .map((data) => {
          return (
            <div>
              <div key={data.vehicleId}>{data.vehiclePlate}</div>
            </div>
          );
        })}
    </div>
  );
}

export default FilterByLicensePlate;
