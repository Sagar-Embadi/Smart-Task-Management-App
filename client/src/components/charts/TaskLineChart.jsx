import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { format } from "date-fns";

const TaskLineChart = ({ tasks }) => {
  const timeData = tasks.reduce((acc, task) => {
    const date = format(new Date(task.createdAt), "yyyy-MM-dd");
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const formattedData = Object.entries(timeData).map(([date, count]) => ({
    date,
    count,
  }));

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={formattedData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="count" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TaskLineChart;
