import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const TaskBarChart = ({ tasks }) => {
  const categoryData = Array.from(
    tasks.reduce((map, task) => {
      const count = map.get(task.category) || 0;
      map.set(task.category, count + 1);
      return map;
    }, new Map())
  ).map(([key, value]) => ({ category: key, count: value }));

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={categoryData}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TaskBarChart;
