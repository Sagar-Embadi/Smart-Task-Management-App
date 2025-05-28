import { store } from "@/App";
import { getEnv } from "@/helpers/getEnv";
import { showToastify } from "@/helpers/showToastify";
import axios from "axios";
import React, { useContext, useState } from "react";

const AddTaskModal = ({ onClose, editData }) => {
  const {update , setUpdate} = useContext(store)
  const [taskData,setTaskData] = useState(editData ||{
    title: "",
    description: "",
    due_date: "",
    category: "Work",
    important: false,
    completed: false,
  });
  const handleSubmit = () => {
    const token = localStorage.getItem("token");
    try {
      if(editData){
        console.log(editData);
        
        axios.put(`${getEnv('VITE_BACKEND_URL')}/api/tasks/${editData.id}`,{
          ...taskData,id:editData.id
        },{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res)=>{
          console.log(res.data)
          setUpdate(!update)
        })
      }else{
        axios.post( `${getEnv('VITE_BACKEND_URL')}/api/tasks`, taskData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response)=>{
            console.log("Task added successfully:", response.data);
            showToastify('success',"Task added successfully")
            setUpdate(!update); // Toggle update state to re-fetch tasks
            onClose(); // Close the modal after submission

        })

      }
      setTaskData({
        title: "",
        due_date: "",
        description: "",
        category: "Work",
        important: false,
        status: 'pending',
      });
    } catch (error) {
      showToastify('error','Error adding task')
      console.error("Error adding task:", error);
    }
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white" onClick={onClose}>&times;</button>
        <h2 className="text-xl font-semibold mb-4">Add Task</h2>
        <form className="space-y-4">          
          <div>            
            <label className="block mb-1 text-sm">Title</label>
            <input
              type="text"
                value={taskData.title}
                onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
              placeholder="Enter title"
              className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Description</label>
            <textarea
                value={taskData.description}
                onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
              placeholder="Enter description"
              className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              rows="2"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Category</label>
            <select className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm" 
              value={taskData.directory}
              onChange={(e) => setTaskData({ ...taskData, category: e.target.value })}>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 text-sm">Due Date</label>
            <input
              type="date"
                value={taskData.due_date}
                onChange={(e) => setTaskData({ ...taskData, due_date: e.target.value })}
              className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Status</label>
            <select className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm" 
              value={taskData.status}
              onChange={(e) => setTaskData({ ...taskData, status: e.target.value })}>
              <option value='pending'>Pending</option>
              <option value='completed'>Completed</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md font-semibold text-sm"
            onClick={(e) => {
                e.preventDefault(); // Prevent default form submission
                handleSubmit();
            }}
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
