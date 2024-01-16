import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
// import PropTypes from "prop-types";
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

    return null;
  });

  const CustomTooltip = ({ payload, active }) => {
    if (payload && payload[0] && payload[0].payload) {
      const { id, Cost } = payload[0].payload;

      const currItem = payload[0].payload;

      const startTimeCurrent = startDateTimeMap.find((item) => {
        return item.id === currItem.id;
      });

      const endTimeCurrent = endDateTimeMap.find((item) => {
        return item.id === currItem.id;
      });

      if (active && payload && payload.length) {
        return (
          <div
            className="custom-tooltip-container"
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <p
              style={{ fontSize: "12px", color: "grey" }}
            >{`${startTimeCurrent.date}, ${startTimeCurrent.time} to ${endTimeCurrent.date}, ${endTimeCurrent.time}`}</p>
            <p style={{ fontSize: "14px" }}>{`JobID: ${id}`}</p>

            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: payload[0].fill,
                  marginRight: "5px",
                 
                }}
              ></div>
              <p style={{ fontSize: "14px" }}>{`Cost: $${Cost.toFixed(2)}`}</p>
            </div>
          </div>
        );
      }
    }

    return null;
  };

  // CustomTooltip.propTypes = {
  //   payload: PropTypes.array,
  //   active: PropTypes.bool,
  // };

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

      <Tooltip content={<CustomTooltip />} />
      <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />

      <Bar dataKey="Cost" name="cost" fill="#28B359" />
    </BarChart>
  );
};

// TimeCostChart.propTypes = {
//   emrData: PropTypes.oneOfType([
//     PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         Window: PropTypes.shape({
//           start: PropTypes.string,
//           end: PropTypes.string,
//         }),
//       })
//     ),
//     PropTypes.object,
//   ]).isRequired,
//   payload: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       Window: PropTypes.shape({
//         start: PropTypes.string,
//         end: PropTypes.string,
//       }),

//       payload: PropTypes.shape({
//         id: PropTypes.string.isRequired,
//       }),
//     })
//   ),
// };

export default TimeCostChart;
