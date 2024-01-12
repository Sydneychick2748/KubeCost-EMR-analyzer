import "./App.css";
import EMRTable from "./components/EMRTable";
import { EMR_DATA } from "../src/Data/EMRData";

const App = () => {
  const emrData = EMR_DATA[0];

  return (
    <div>
      <div
        style={{ backgroundColor: "white", height: "400px", width: "100%" }}
        className="emr-table-container"
      ></div>

      <EMRTable emrData={emrData} />
    </div>
  );
};

export default App;
