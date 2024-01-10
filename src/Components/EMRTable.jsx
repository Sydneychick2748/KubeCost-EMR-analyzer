// App.jsx
import "../App.css"
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import DetailedStepsInfo from "./DetailedStepsInfo";

const EMRTable = ({ emrData }) => {
  const [jobIdColor, setJobIdColor] = useState({});

  const [selectedJobId, setSelectedJobId] = useState(null);

  useEffect(() => {
    const colors = emrData.reduce((colorMap, item) => {
      return {
        ...colorMap,
        [item.JobID]: item.JobID === selectedJobId ? "#FF5733" : "#28b359", // Highlight selected job ID
      };
    }, {});
    setJobIdColor(colors);
  }, [emrData, selectedJobId]);

  console.log("EMRTable - emrData:", emrData); // Log emrData to see its structure

  const rows = emrData.map((jobDetails, index) => {
    console.log("EMRTable - jobDetails:", jobDetails); // Log jobDetails to see individual job details

    return {
      id: `${jobDetails.JobID}`, // Assuming JobID is unique for each job
      index, // Include the index for internal use
      ...jobDetails,
      "Tags.team":
        jobDetails.Tags && jobDetails.Tags.team ? jobDetails.Tags.team : "",
    };
  });

  console.log("EMRTable - rows:", rows); // Log the generated rows

  const handleJobIdClick = (jobId) => {
    setSelectedJobId(jobId); // Update selectedJobId when a row is clicked
  };

  const handleBackClick = () => {
    setSelectedJobId(null); // Set selectedJobId to null to indicate no job ID is selected
  };

  const columns = [
    {
      field: "JobID",
      headerName: "Job ID",
      width: 150,
      renderCell: (params) => (
        <span style={{ color: jobIdColor[params.value] || "#28b359" }}>
          {params.value}
        </span>
      ),

      description: "Job ID is a unique identifier for each job",
    },

    {
      field: "AccountID",
      headerName: "Account ID",
      width: 150,
      valueGetter: (params) => params.row.AccountID,
      description:
        "Account ID represents the unique identifier for the account associated with the job",
    },
    {
      field: "InstanceID",
      headerName: "Instance ID",
      width: 150,
      valueGetter: (params) => params.row.InstanceID,
      description:
        "Instance ID represents the unique identifier for the instance used in the job",
    },

    {
      field: "Tags.team",
      headerName: "Team",
      width: 120,
      valueGetter: (params) => params.row["Tags.team"] || "", // Ensure a default value if undefined
      description: "Team is the team associated with the job",
    },
    {
      field: "InstanceType",
      headerName: "Instance Type",
      width: 150,
      valueGetter: (params) => params.row.InstanceType,
      description:
        "Instance Type represents the type of virtual machine or instance used for the job",
    }, // Assuming 'team' is a p
    {
      field: "Adjustment",
      headerName: "Adjustment",
      type: "number",
      width: 120,
      valueGetter: (params) => params.row.Adjustment,
      description: "Adjustment is a numeric value representing some adjustment",
    },
    {
      field: "Cost",
      headerName: "Cost",
      type: "number",
      width: 120,
      valueGetter: (params) => {
        const cost = params.row.Cost || 0; // Default to 0 if Cost is undefined or null
        return `$${cost.toFixed(2)}`;
      },

      description:
        "Cost represents the monetary expense associated with the job. Reflects overall resource consumption, usage, including compute instances, storage, and related services.",
    },

    {
      field: "IdlePct",
      headerName: "Idle Pct",
      type: "number",
      width: 150,
      valueGetter: (params) => params.row.IdlePct,
      description: "Idle Pct is a numeric value representing idle percentage",
    },

    {
      field: "MemoryUsed",
      headerName: "Memory Used",
      type: "number",
      width: 120,
      valueGetter: (params) => params.row.MemoryUsed,
      description: "Memory Used is a numeric value representing used memory",
    },

    {
      field: "Runtime",
      headerName: "Runtime",
      type: "number",
      width: 100,
      valueGetter: (params) => params.row.Runtime,
      description:
        "Runtime is a numeric value representing the duration of the job",
    },
  ];

  // const stepRows = Object.keys(steps).map((stepId) => ({
  //   id: `${jobId}-${stepId}`, // Combine JobID and StepID for a unique ID
  //   ...steps[stepId],
  // }));

  return (
    <div style={{ height: 400, width: "100%" }} className="emr-table-container">
      {selectedJobId ? (
        // Render the detailed steps page if a job ID is selected
        <DetailedStepsInfo
          jobId={selectedJobId}
          emrData={emrData}
          onBackClick={handleBackClick} // Pass the back click hand
        />
      ) : (
        // Render the main table if no job ID is selected
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={25} // Adjust this number based on your preference
          autoHeight
          scrollbarSize={20}
          style={{ backgroundColor: 'white' }}
          onRowClick={(params) => {
            handleJobIdClick(params.id);
          }}
        />
      )}
    </div>
  );
};

EMRTable.propTypes = {
  emrData: PropTypes.array.isRequired,
  // selectedJobId: PropTypes.string,
};

export default EMRTable;
