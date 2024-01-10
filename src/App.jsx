

import "./App.css";
import EMRTable from "./components/EMRTable";
import { EMR_DATA } from '../src/Data/EMRData';
 import TimeCostChart from "./Components/TimeCostChart";
//  import ChartAndTableContainer from "./Components/ChartAndTableContainer";

const App = () => {

  

  return (
    <div>
     <div style={{ backgroundColor: 'white', height: '400px', width: '100%' }} className="emr-table-container"></div>
         <TimeCostChart emrData={EMR_DATA } />  
          <EMRTable emrData={EMR_DATA } />
          {/* <ChartAndTableContainer emrData={EMR_DATA} /> */}
   
    </div>
  );
};

export default App;
