import "./App.css";
import FilterByCategory from "./screens/FilterByCategory/FilterByCategory";
import FilterByLicensePlate from "./screens/FilterByLicensePlate/FilterByLicensePlate";
import FilterByModel from "./screens/FilterByModel/FilterByModel";
function App() {
  return (
    <div>
      <FilterByCategory />
      <FilterByLicensePlate />
      <FilterByModel />
    </div>
  );
}

export default App;
