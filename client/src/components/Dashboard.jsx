import React, { useContext } from "react";
import TaskPieChart from "./charts/TaskPieChart";
import TaskBarChart from "./charts/TaskBarChart";
import TaskLineChart from "./charts/TaskLineChart";
import { store } from "@/App";

export const Dashboard = () => {
    const {data} = useContext(store)
    const tasks = data
  return (
    <div className="p-4 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-2">Task Status Overview</h2>
        <TaskPieChart tasks={tasks} />
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-2">Tasks per Category</h2>
        <TaskBarChart tasks={tasks} />
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md col-span-full lg:col-span-1">
        <h2 className="text-lg font-semibold mb-2">Tasks Over Time</h2>
        <TaskLineChart tasks={tasks} />
      </div>
    </div>
  );
};

