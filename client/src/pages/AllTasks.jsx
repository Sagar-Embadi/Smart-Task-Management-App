import { store } from "@/App";
import TaskCard from "@/components/TaskCard";
import { useContext } from "react";

export function AllTasks() {
    const {data} = useContext(store);

    
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Tasks</h1>
      {!data.length ?<h1 className="text-center text-4xl">No tasks </h1>:<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((task) => (
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
