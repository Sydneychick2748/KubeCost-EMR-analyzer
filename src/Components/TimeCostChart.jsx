
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PropTypes from 'prop-types';
import moment from 'moment';

const TimeCostChart = ({ emrData }) => {
  const formatStartDate = (dateString) => {
    return moment(dateString).format('MM/DD/YYYY');
  };

  // Extract data for the chart
  const dataArray = Object.values(emrData).map((item) => ({
    name: item.JobID,
    cost: item.Cost,
    startDate: moment(item.Window.start).format('MM/DD/YYYY'), // Extract the formatted start date
  }));

  console.log('dataArray:', dataArray);

  return (
    <BarChart width={800} height={400} data={dataArray}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="startDate" tickFormatter={(date) => formatStartDate(date)} />

      <YAxis
        type="number"
        domain={[0, Math.ceil(Math.max(...dataArray.map((item) => item.cost)) / 1) * 1]}
        tickCount={Math.ceil(Math.max(...dataArray.map((item) => item.cost)) / 1) + 1}
        tickFormatter={(value) => `$${value.toFixed(2)}`}
      />
      <Tooltip />
      <Legend />
      <Bar dataKey="cost" fill="#8884d8" />
    </BarChart>
  );
};

TimeCostChart.propTypes = {
  emrData: PropTypes.object.isRequired,
};

export default TimeCostChart;
