import { store } from "@/App";
import TaskCard from "@/components/TaskCard";
import { useContext, useEffect, useState } from "react";

export function TodayTasks() {
  const{data, update} = useContext(store);
  const [tasks,setTasks] = useState([]);
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]
    setTasks(data.filter(task => task.due_date === today));
  }, [data,update]);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Today Tasks</h1>
      {!data.length ?<h1 className="text-center text-4xl">No tasks </h1>:<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskCard
            id={task.id}
            title={task.title}
            description={task.description}
            category={task.category}
            date={task.due_date}
            status={task.status}
          />
        ))}
      </div>}
    </div>
  );
}
