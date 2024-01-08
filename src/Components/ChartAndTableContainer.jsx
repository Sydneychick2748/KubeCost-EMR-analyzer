// YourChartAndTableContainer.jsx
// import  { useState } from 'react';
// import TimeCostChart from './TimeCostChart';
// import EMRTable from './EMRTable';
// import PropTypes from 'prop-types';

// const YourChartAndTableContainer = ({ emrData }) => {
//   const [selectedJobId, setSelectedJobId] = useState(null);

//   const handleChartBarClick = (jobId) => {
//     setSelectedJobId(jobId);
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <TimeCostChart emrData={emrData} onChartBarClick={handleChartBarClick} />
//       <EMRTable emrData={emrData} selectedJobId={selectedJobId} />
//     </div>
//   );
// };

// YourChartAndTableContainer.propTypes = {
//   emrData: PropTypes.object.isRequired,
// };

// export default YourChartAndTableContainer;

