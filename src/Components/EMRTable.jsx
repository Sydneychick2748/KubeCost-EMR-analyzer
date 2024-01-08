// App.jsx


import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import DetailedStepsInfo from "./DetailedStepsInfo";

const EMRTable = ({ emrData }) => {
  const [jobIdColor, setJobIdColor] = useState({});

  const [selectedJobId, setSelectedJobId] = useState(null); // State to track selected jobId

  useEffect(() => {
    // Update color for Job IDs once on mount or when selectedJobId changes
    const colors = Object.keys(emrData).reduce((colors, jobID) => {
      return {
        ...colors,
        [jobID]: jobID === selectedJobId ? "#FF5733" : "#28b359", // Highlight selected job ID
      };
    }, {});
    setJobIdColor(colors);
  }, [emrData, selectedJobId]);

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
      description:
        "Account ID represents the unique identifier for the account associated with the job",
    },
    {
      field: "InstanceID",
      headerName: "Instance ID",
      width: 150,
      description:
        "Instance ID represents the unique identifier for the instance used in the job",
    },

    {
      field: "Tags.team",
      headerName: "Team",
      width: 120,
      description: "Team is the team associated with the job",
    },
    {
      field: "InstanceType",
      headerName: "Instance Type",
      width: 150,
      description:
        "Instance Type represents the type of virtual machine or instance used for the job",
    }, // Assuming 'team' is a p
    {
      field: "Adjustment",
      headerName: "Adjustment",
      type: "number",
      width: 120,
      description: "Adjustment is a numeric value representing some adjustment",
    },
    {
      field: "Cost",
      headerName: "Cost",
      type: "number",
      width: 120,
      valueGetter: (params) => `$${params.row.Cost.toFixed(2)}`, // Add a dollar sign and format the cost
      description:
        "Cost represents the monetary expense associated with the job. Reflects overall resource consumption, usage, including compute instances, storage, and related services.",
    },

    {
      field: "IdlePct",
      headerName: "Idle Pct",
      type: "number",
      width: 150,
      description: "Idle Pct is a numeric value representing idle percentage",
    },

    {
      field: "MemoryAllocated",
      headerName: "Memory Allocated",
      type: "number",
      width: 120,
      description:
        "Memory Allocated is a numeric value representing allocated memory",
    },
    {
      field: "MemoryUsed",
      headerName: "Memory Used",
      type: "number",
      width: 120,
      description: "Memory Used is a numeric value representing used memory",
    },

    {
      field: "Runtime",
      headerName: "Runtime",
      type: "number",
      width: 100,
      description:
        "Runtime is a numeric value representing the duration of the job",
    },
  ];

  // Flatten the nested structure and generate rows
  const rows = Object.keys(emrData).map((jobID) => ({
    id: jobID,
    ...emrData[jobID],
    "Tags.team": emrData[jobID].Tags?.team, // Flatten 'Tags' structure
  }));

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
          pageSize={rows.length}
          autoHeight
          scrollbarSize={20}
          onRowClick={(params, event) => {
            if (
              event.target
                .closest(".MuiDataGrid-cell")
                ?.getAttribute("aria-colindex") === "1"
            ) {
              handleJobIdClick(params.id);
            }
          }}
        />
      )}
    </div>
  );
};

EMRTable.propTypes = {
  emrData: PropTypes.object.isRequired,
};

export default EMRTable;



