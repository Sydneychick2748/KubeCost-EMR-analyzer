

import "./App.css";
import EMRTable from "./components/EMRTable";
import { EMR_DATA } from '../src/Data/EMRData';
 import TimeCostChart from "./Components/TimeCostChart";

const App = () => {

  

  return (
    <div>
         <TimeCostChart emrData={EMR_DATA } />  
          <EMRTable emrData={EMR_DATA } />
       
   
    </div>
  );
};

export default App;
