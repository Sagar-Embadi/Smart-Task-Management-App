import { store } from "@/App";
import axios from "axios";
import { CalendarDays, Trash2, MoreVertical } from "lucide-react";
import { useContext, useState } from "react";
import AddTaskModal from "./AddTaskModal";
import { getEnv } from "@/helpers/getEnv";
import { showToastify } from "@/helpers/showToastify";

const TaskCard = ({ id, title, description, category, date, status }) => {
  const [ show, setShow] = useState(false);
  const editData = {
    id,
    title,
    description,
    category,
    due_date:date,
    status
  }
  const { update, setUpdate } = useContext(store);
  const handleDelete = (id) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`${getEnv('VITE_BACKEND_URL')}/api/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        showToastify('success',"Task deleted successfully")
        console.log("Task deleted successfully:", response.data);
        setUpdate(!update);
      })
      .catch((error) => {
        showToastify('error',"Error deleting task")
        console.error("Error deleting task:", error);
      });
  };
  const handleEdit = () =>{
    setShow(true)
  }

  return (
    <div
      className="bg-white dark:bg-purple-700 text-gray-900 dark:text-white rounded-xl p-4 w-full max-w-sm shadow-lg transition-colors flex flex-col justify-between h-64"
      key={parseInt(id)}
    >
      <div>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm break-words">{description}</p>
        <p className="text-sm text-gray-500 dark:text-white/70 mt-1">
          {category}
        </p>
      </div>
      <div className="mt-auto">
        <div className="flex items-center text-sm text-gray-600 dark:text-white/80 mt-3">
          <CalendarDays className="w-4 h-4 mr-1" />
          <span>{date}</span>
        </div>
        <div className="border-t border-gray-300 dark:border-white/20 my-3"></div>
        <div className="flex items-center justify-between">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              status === "completed"
                ? "bg-green-500 text-white"
                : "bg-yellow-300 text-yellow-900 dark:text-yellow-800"
            }`}
            title={`Status: ${status}`}
          >
            {status}
          </span>
          <div className="flex items-center gap-2">
            <span title="Delete" onClick={() => handleDelete(id)}>
              <Trash2 className="w-5 h-5 cursor-pointer" />
            </span>
            <span title="Edit" onClick={()=>handleEdit(editData)}>
              <MoreVertical className="w-5 h-5 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
      {show && <AddTaskModal 
        onClose={()=>setShow(false)}
        editData={editData}
      />}
    </div>
  );
};

export default TaskCard;
