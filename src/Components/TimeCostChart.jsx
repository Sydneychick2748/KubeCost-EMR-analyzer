import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import PropTypes from "prop-types";
import { format } from "date-fns";

const TimeCostChart = ({ emrData }) => {
  const startDateTimeMap = emrData.map((item) => {
    const startDateTime = item?.Window?.start;
    if (startDateTime) {
      return {
        id: item.id,
        date: format(new Date(startDateTime), "M/d/yyyy"),
        time: format(new Date(startDateTime), "h:mm a"),
      };
    }
    // If startDateTime is falsy, return null or an empty object, depending on your preference.
    return null;
  });

  const endDateTimeMap = emrData.map((item) => {
    const endDateTime = item?.Window?.start;
    if (endDateTime) {
      return {
        id: item.id,
        date: format(new Date(endDateTime), "M/d/yyyy"),
        time: format(new Date(endDateTime), "h:mm a"),
      };
    }
    // If endDateTime is falsy, return null or an empty object, depending on your preference.
    return null;
  });
// debugger
  // Tick formatter function
  const tooltipFormatter = (value) => {
    const startDateTime = startDateTimeMap[value] || { date: "", time: "" };
    console.log(startDateTime, "startDateTime")
    const endDateTime = endDateTimeMap[value] || { date: "", time: "" };
    return `${startDateTime.date}, ${startDateTime.time} to ${endDateTime.date}, ${endDateTime.time}`;
  };

  return (
    <BarChart width={1400} height={400} data={emrData}>
      {/* ... (other chart components) */}
      <XAxis
        dataKey="id"
        type="category"
        tick={{ fontSize: 10 }}
        tickFormatter={(value) => {
          const startDate = emrData.find((item) => item.id === value)?.Window
            ?.start;
          return startDate ? format(new Date(startDate), "M/d/yyyy") : "";
        }}
      />
      <YAxis
        tickFormatter={(value) => `$${value.toFixed(2)}`}
        domain={["dataMin - 1", "dataMax + 1"]}
      />

      {/* i do not know how to show the return statment in this tooltip and colaborate the cost in it as well */}
        {/* <Tooltip formatter={tooltipFormatter} />   */}
       <Tooltip formatter={(value) => `$${value.toFixed(2)}`} /> 
      {/* <Legend /> */}
      <Bar dataKey="Cost" name="Cost" fill="#28B359" />
    </BarChart>
  );
};

TimeCostChart.propTypes = {
  emrData: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]).isRequired,
};

export default TimeCostChart;
