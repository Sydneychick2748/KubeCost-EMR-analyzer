// EMRTable.jsx
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import DetailedStepsInfo from "./DetailedStepsInfo";

const EMRTable = ({ emrData }) => {
  const [selectedTimestamp, setSelectedTimestamp] = useState(null);
  const [jobIdColor, setJobIdColor] = useState({});
  const [selectedResource, setSelectedResource] = useState(null);
  const [selectedJobId, setSelectedJobId] = useState(null); // State to track selected jobId

  useEffect(() => {
    // Update color for Job IDs once on mount
    const colors = Object.keys(emrData).reduce((colors, jobID) => {
      return {
        ...colors,
        [jobID]: "#28b359",
      };
    }, {});
    setJobIdColor(colors);
  }, [emrData]);

  const handleTimestampChange = (e) => {
    setSelectedTimestamp(e.target.value);
  };

  const handleResourceChange = (e, jobId) => {
    const newSelectedResource = e.target.value;
    setSelectedResource((prevSelectedResources) => ({
      ...prevSelectedResources,
      [jobId]: newSelectedResource,
    }));
  };

  const handleJobIdClick = (jobId) => {
    setSelectedJobId(jobId); // Update selectedJobId when a row is clicked
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
      field: "Window.start",
      headerName: "Start Time",
      width: 180,
      valueGetter: (params) => params.row.Window?.start || "",
      description: "Start Time is the beginning timestamp for the job",
    },
    {
      field: "Window.end",
      headerName: "End Time",
      width: 180,
      valueGetter: (params) => params.row.Window?.end || "",
      description: "Start Time is the ending timestamp for the job",
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
    {
      field: "PodName",
      headerName: "Pod Name",
      width: 150,
      description:
        "Pod Name represents the name of the pod associated with the job",
    },
    

    {
      field: "Resources",
      headerName: "Resources",
      width: 200,
      renderCell: (params) => (
        <select
          value={selectedResource || (params.value && params.value[0]?.Memory)}
          onChange={(e) => handleResourceChange(e, params.row.id)}
          style={{
            color: "#000", // Default text color
            backgroundColor: jobIdColor[params.row.id] ? "#FFF" : "#63E892", // Green or white background
            transition: "background-color 0.3s", // Add a smooth transition
          }}
        >
          {params.value &&
            params.value.map((resource, index) => (
              <option key={index} value={resource.Memory}>
                {`${resource.Memory} MB`}
              </option>
            ))}
        </select>
      ),
      description:
        "Resources represent the memory allocation for the job. It reflects the amount of memory assigned to the job, measured in megabytes (MB).",
    },

    {
      field: "Timestamps",
      headerName: "Timestamps",
      width: 200,
      renderCell: (params) => (
        <select
          value={selectedTimestamp || (params.value && params.value[0])}
          onChange={handleTimestampChange}
          style={{
            color: "#000", // Default text color
            backgroundColor: jobIdColor[params.row.id] ? "#FFF" : "#63E892", // Green or white background
            transition: "background-color 0.3s", // Add a smooth transition
          }}
        >
          {params.value &&
            params.value.map((timestamp) => (
              <option key={timestamp} value={timestamp}>
                {new Date(timestamp * 1000).toLocaleString()}
              </option>
            ))}
        </select>
      ),
      description:
        "Timestamps represent the timestamps associated with the job",
    },
    // Add more columns as needed
  ];

  // Flatten the nested structure and generate rows
  const rows = Object.keys(emrData).map((jobID) => ({
    id: jobID,
    ...emrData[jobID],
    "Tags.team": emrData[jobID].Tags?.team, // Flatten 'Tags' structure
  }));

  return (
    <div style={{ height: 400, width: "100%" }} className="emr-table-container">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={rows.length} // Set pageSize to the total number of rows
        autoHeight
        scrollbarSize={20}
        onRowClick={(params, event) => {
          // Check if the clicked column is "Job ID"
          if (
            event.target
              .closest(".MuiDataGrid-cell")
              ?.getAttribute("aria-colindex") === "1"
          ) {
            handleJobIdClick(params.id);
          }
        }}
      />
      {/* Pass jobId and emrData props to DetailedStepsInfo */}
      {selectedJobId && (
        <DetailedStepsInfo
          jobId={selectedJobId}
          emrData={emrData}
          onJobIdClick={handleJobIdClick} // Pass the function as a prop
        />
      )}
    </div>
  );
};

EMRTable.propTypes = {
  emrData: PropTypes.object.isRequired,
};

export default EMRTable;
