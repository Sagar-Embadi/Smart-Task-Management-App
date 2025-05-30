import { useState } from "react";
import { CheckSquare, ChevronDown, Menu } from "lucide-react";
import AddTaskModal from "./AddTaskModal"; // Update path as needed
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDirectories, setShowDirectories] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const onClose = () => setShowModal(false);

  return (
    <>
      {/* Mobile Hamburger Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50 flex items-center gap-2">
        <button
          className=" bg-purple-600 text-white p-2 rounded-md"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center space-x-2" onClick={()=>navigate('/')}>
              <CheckSquare className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900 dark:text-gray-100">TaskFlow</span>
            </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed z-40 top-0 left-0 h-full w-64 p-4 bg-gray-100 dark:bg-[#0f172a] text-gray-800 dark:text-white shadow-md transition-transform duration-300 transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:flex md:flex-col md:w-64`}
      >
        <div className="flex items-center space-x-2 mb-8 py-4" onClick={()=>navigate('/')}>
          <CheckSquare className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
            TaskFlow
          </span>
        </div>

        <button
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md font-medium transition"
          onClick={() => setShowModal(true)}
        >
          Add new task
        </button>

        <nav className="mt-6 space-y-2 text-sm">
          <a
            href="/todaystasks"
            className="block px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            Today's tasks
          </a>
          <a
            href="/alltasks"
            className="block px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            All tasks
          </a>
          <a
            href="/completedtasks"
            className="block px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            Completed tasks
          </a>
          <a
            href="/uncompletedtasks"
            className="block px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            Uncompleted tasks
          </a>

          <div>
            <button
              onClick={() => setShowDirectories(!showDirectories)}
              className="flex items-center w-full px-2 py-1 mt-2 text-left hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition"
            >
              <ChevronDown
                className={`w-4 h-4 mr-1 transform transition-transform ${
                  showDirectories ? "rotate-180" : ""
                }`}
              />
              Category
            </button>

            {showDirectories && (
              <div className="ml-6 mt-1 space-y-1 text-gray-600 dark:text-gray-300">
                <div
                  onClick={() => navigate("/tasks/Work")}
                  className="cursor-pointer hover:underline"
                >
                  Work
                </div>
                <div
                  onClick={() => navigate("/tasks/Personal")}
                  className="cursor-pointer hover:underline"
                >
                  Personal
                </div>
                <div
                  onClick={() => navigate("/tasks/Other")}
                  className="cursor-pointer hover:underline"
                >
                  Others
                </div>
                <button className="border border-dashed border-gray-400 px-2 py-1 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                  + New
                </button>
              </div>
            )}
          </div>
        </nav>

      </aside>
        {showModal && <AddTaskModal onClose={onClose} />}
    </>
  );
}
