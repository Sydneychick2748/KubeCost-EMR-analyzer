// App.jsx
import "./App.css";
import EMRTable from "./components/EMRTable";
import { EMR_DATA } from '../src/Data/EMRData';

const App = () => {
  return (
    <div>
      <EMRTable emrData={EMR_DATA} />
    </div>
  );
};

export default App;
