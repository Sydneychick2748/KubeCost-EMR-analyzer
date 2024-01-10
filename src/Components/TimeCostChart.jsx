
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PropTypes from 'prop-types';


const TimeCostChart = ({ emrData }) => {
  

  

  return (
    <AreaChart width={1400} height={400} data={emrData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="start" />

      <YAxis
        type="number"
        domain={[0, Math.ceil(Math.max(...emrData.map((item) => item.cost)) / 1) * 1]}
        tickCount={Math.ceil(Math.max(...emrData.map((item) => item.cost)) / 1) + 1}
        tickFormatter={(value) => `$${value.toFixed(2)}`}
      />
      <Tooltip />
      <Legend />
      <Area dataKey="cost" fill="#28B359" stroke="#28B359" />
    </AreaChart>
  );
};

TimeCostChart.propTypes = {
  emrData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TimeCostChart;
