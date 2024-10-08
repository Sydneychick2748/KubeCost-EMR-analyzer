// App.jsx
import "../App.css";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import PaginationComponent from "./PaginationComponent";

// import PropTypes from "prop-types";
import DetailedStepsInfo from "./DetailedStepsInfo";
import TimeCostChart from "./TimeCostChart";
import KubecostLogo from '../assets/images/KubcostLogo.png';

const EMRTable = ({ emrData }) => {
  const [selectedJobId, setSelectedJobId] = useState(null);
  // const [page, setPage] = useState(1);

  const emrDataArr = Object.entries(emrData).map((arr) => ({
    ...arr[1],
    id: arr[0],
  }));

  console.log(emrDataArr, "emrDataArr");

  const handleJobIdClick = (jobId) => {
    setSelectedJobId(jobId);
  };

  const handleBackClick = () => {
    setSelectedJobId(null);
  };

  // const handlePageChange = (newPage) => {
  //   setPage(newPage);
  // };



  const columns = [
    {
      field: "JobID",
      headerName: "Job ID",
      width: 250,
      renderCell: (params) => (
        <span
          style={{
            color: params.value === selectedJobId ? "#FF5733" : "#28b359",
            fontSize: "16px",
          }}
        >
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
      valueGetter: (params) => params.row.Tags?.team || "",
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
        const cost = params.row.Cost || 0;
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

  return (
    <>
     {/* Header Section */}
     <header className="header">
        <img src={KubecostLogo} alt="Kubecost Logo" className="logo" />
        <div className="header-text">
          
         
        </div>
      </header>
      <TimeCostChart emrData={emrDataArr} />
      <div
        style={{ height: "100%", width: "100%" }}
        className="emr-table-container"
      >
        {selectedJobId ? (
          <DetailedStepsInfo
            jobId={selectedJobId}
            emrData={emrDataArr}
            onBackClick={handleBackClick}
          />
        ) : (
          <DataGrid
            rowHeight={80} // Adjust the value as needed
            rows={emrDataArr}
            columns={columns}
            pageSize={25}
            autoHeight
            scrollbarSize={20}
            style={{ backgroundColor: "white" }}
            // page={page}
            // onPageChange={handlePageChange}
            // pagination
            // components={{
            //   Pagination: (props) => (
            //     <PaginationComponent {...props} onPageChange={handlePageChange} />
            //   ),
            // }}
            onRowClick={(params) => {
              handleJobIdClick(params.id);
            }}
          />
        )}
      </div>
    </>
  );
};

// EMRTable.propTypes = {
//   emrData: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.object),
//     PropTypes.object,
//   ]).isRequired,
// };

export default EMRTable;
