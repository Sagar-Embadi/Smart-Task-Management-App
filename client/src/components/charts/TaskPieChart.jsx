import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

const TaskPieChart = ({ tasks }) => {
  const data = [
    { name: "Completed", value: tasks.filter(t => t.status === "completed").length },
    { name: "Pending", value: tasks.filter(t => t.status === "pending").length },
    { name: "In Progress", value: tasks.filter(t => t.status === "in-progress").length },
  ];

  return (
    <PieChart width={300} height={200}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={60}
        label
        dataKey="value"
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default TaskPieChart;
