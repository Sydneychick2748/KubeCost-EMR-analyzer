// EMRTable.jsx
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';

const EMRTable = ({ emrData }) => {
  const [selectedTimestamp, setSelectedTimestamp] = useState(null);
  const [jobIdColor, setJobIdColor] = useState({});

  useEffect(() => {
    
    // Update color for Job IDs once on mount
  const colors = Object.keys(emrData).reduce((colors, jobID) => {
    return {
      ...colors,
      [jobID]: 'green',
    };
  }, {});
  setJobIdColor(colors);
}, [emrData]);

  const handleTimestampChange = (e) => {
    setSelectedTimestamp(e.target.value);
  };

  // Define columns
  const columns = [
    {
      field: 'JobID',
      headerName: 'Job ID',
      width: 150,
      renderCell: (params) => (
        <span style={{ color: jobIdColor[params.value] || 'black' }}>{params.value}</span>
      ),
    },
    {
    field: 'Window.start',
    headerName: 'Start Time',
    width: 180,
    valueGetter: (params) => params.row.Window?.start || '',
    
  },
  {
    field: 'Window.end',
    headerName: 'End Time',
    width: 180,
    valueGetter: (params) => params.row.Window?.end || '',
   
  },
    { field: 'Adjustment', headerName: 'Adjustment', type: 'number', width: 120 },
    { field: 'IdlePct', headerName: 'Idle Pct', type: 'number', width: 150 },
    { field: 'Tags.team', headerName: 'Team', width: 120 }, // Assuming 'team' is a property in Tags
    { field: 'InstanceType', headerName: 'InstanceType', width: 150 },
    { field: 'MemoryAllocated', headerName: 'Memory Allocated', type: 'number', width: 120 },
    { field: 'MemoryUsed', headerName: 'Memory Used', type: 'number', width: 120 },
    { field: 'Runtime', headerName: 'Runtime', type: 'number', width: 100 },
    {
      field: 'Timestamps',
      headerName: 'Timestamps',
      width: 200,
      renderCell: (params) => (
        <select
          value={selectedTimestamp || (params.value && params.value[0])}
          onChange={handleTimestampChange}
        >
          {params.value &&
            params.value.map((timestamp) => (
              <option key={timestamp} value={timestamp}>
                {new Date(timestamp * 1000).toLocaleString()}
              </option>
            ))}
        </select>
      ),
    },
    // Add more columns as needed
  ];

  // Flatten the nested structure and generate rows
  const rows = Object.keys(emrData).map((jobID) => ({
    id: jobID,
    ...emrData[jobID],
    'Tags.team': emrData[jobID].Tags?.team, // Flatten 'Tags' structure
  }));

  return (
    <div style={{ height: 400, width: '100%' }} className="emr-table-container">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        autoHeight={false}
        autoPageSize
        scrollbarSize={20} // Add this line to specify the size of the scrollbar
      />
    </div>
  );
};

EMRTable.propTypes = {
  emrData: PropTypes.object.isRequired,
};

export default EMRTable;
