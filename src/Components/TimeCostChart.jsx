

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PropTypes from 'prop-types';


const TimeCostChart = ({ data, selectedJobId }) => {
  

  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis
        type="number"
        domain={[0, Math.ceil(Math.max(...data.map(item => item.cost)) / 1) * 1]}
        tickCount={Math.ceil(Math.max(...data.map(item => item.cost)) / 1) + 1}
        tickFormatter={(value) => `$${value.toFixed(2)}`}
      />
      <Tooltip />
      <Legend />
      <Bar dataKey="cost" fill="#8884d8" />
    </BarChart>
  );
}
TimeCostChart.propTypes = {
  data: PropTypes.object.isRequired,
  selectedJobId: PropTypes.string,
};

export default TimeCostChart;
