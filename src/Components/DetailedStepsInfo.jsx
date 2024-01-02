// DetailedStepsInfo.jsx

import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";

const DetailedStepsInfo = ({ jobId, emrData }) => {
  const steps = emrData[jobId]?.Steps || {};
  const stepRows = Object.keys(steps).map((stepId) => ({
    id: stepId,
    ...steps[stepId],
  }));

  const columns = [
    { field: "ID", headerName: "Step ID", width: 150 },
    { field: "Name", headerName: "Step Name", width: 200 },
    { field: "UserName", headerName: "User Name", width: 150 },
    { field: "UserARN", headerName: "User ARN", width: 200 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }} className="emr-table-container">
      <h3>Steps Information for Job ID: {jobId}</h3>
      <DataGrid rows={stepRows} columns={columns} pageSize={stepRows.length} autoHeight scrollbarSize={20} />
    </div>
  );
};

DetailedStepsInfo.propTypes = {
  jobId: PropTypes.string.isRequired,
  emrData: PropTypes.object.isRequired,
};

export default DetailedStepsInfo;