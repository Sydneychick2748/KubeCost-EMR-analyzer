// App.jsx
import "./App.css";
import EMRTable from "./components/EMRTable";
import { EMR_DATA } from '../src/Data/EMRData';
import TimeCostChart from "./Components/TimeCostChart";

const App = () => {

// Transform the data for the TimeCostChart
const costChartData = Object.keys(EMR_DATA ).map((jobID) => ({
  name: jobID,
  cost: EMR_DATA [jobID].Cost,
}));


  return (
    <div>
        <TimeCostChart data={costChartData} /> 
          <EMRTable emrData={EMR_DATA } />
       
   
    </div>
  );
};

export default App;
