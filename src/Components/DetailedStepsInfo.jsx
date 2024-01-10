// DetailedStepsInfo.jsx

import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import "../App.css";


const DetailedStepsInfo = ({ jobId, emrData, onBackClick }) => {
  const job = emrData.find((item) => item.JobID === jobId) || {};
  const steps = job.Steps || {};

  const stepRows = Object.values(steps).map((step) => ({
    id: `${jobId}-${step.ID}`, // Combine JobID and StepID for a unique ID
    ...step,
  }));
  
  

  const columns = [
    {
      field: "ID",
      headerName: "Step ID",
      width: 150,
      description: "Unique identifier for each step",
    },
    {
      field: "Name",
      headerName: "Step Name",
      width: 200,
      description: "Name or label associated with the step",
    },
    {
      field: "UserName",
      headerName: "User Name",
      width: 150,
      description: "Name of the user associated with the step",
    },
    {
      field: "UserARN",
      headerName: "User ARN",
      width: 200,
      description: "Amazon Resource Name (ARN) associated with the user",
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }} className="emr-table-container">
      <h3 className="your-h3-class" onClick={() => onBackClick()}>
        Steps Information for Job ID: <span className="job-id">{jobId}</span>
      </h3>

      <DataGrid
        rows={stepRows}
        columns={columns}
        pageSize={stepRows.length}
        autoHeight
        scrollbarSize={20}
        style={{ backgroundColor: 'white' }}
      />
    </div>
  );
};

DetailedStepsInfo.propTypes = {
  jobId: PropTypes.string.isRequired,
  emrData: PropTypes.arrayOf(PropTypes.object).isRequired, // Change to arrayOf
  onBackClick: PropTypes.func.isRequired,
};


export default DetailedStepsInfo;
