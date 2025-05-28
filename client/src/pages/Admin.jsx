// AdminDashboard.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { getEnv } from "@/helpers/getEnv";
import { showToastify } from "@/helpers/showToastify";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${getEnv("VITE_BACKEND_URL")}/api/auth/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setUsers(res.data.filter((user) => user.role === "user"));
      })
      .catch((err) => {
        showToastify('error',"can't get users")
        console.error(err)
      });
  }, []);

  const toggleActiveStatus = async (userId, currentStatus) => {
    try {
      await axios.patch(
        `${getEnv("VITE_BACKEND_URL")}/api/auth/users/${userId}/status`,
        {
          active: !currentStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setUsers(
        users.map((user) =>
          user.id === userId ? { ...user, active: !currentStatus } : user
        )
      );
    } catch (err) {
      console.error("Failed to update user status:", err);
    }
  };

  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center sm:text-left">
        Admin Dashboard
      </h1>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-3 sm:px-4 py-2 border">Name</th>
              <th className="px-3 sm:px-4 py-2 border">Email</th>
              <th className="px-3 sm:px-4 py-2 border">Active Status</th>
              <th className="px-3 sm:px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="px-3 sm:px-4 py-2 border">{user.name}</td>
                <td className="px-3 sm:px-4 py-2 border">{user.email}</td>
                <td className="px-3 sm:px-4 py-2 border">
                  {user.active ? "Active" : "Inactive"}
                </td>
                <td className="px-3 sm:px-4 py-2 border">
                  <button
                    onClick={() => toggleActiveStatus(user.id, user.active)}
                    className={`px-3 py-1 text-xs sm:text-sm rounded ${
                      user.active
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-green-500 hover:bg-green-600"
                    } text-white`}
                  >
                    {user.active ? "Deactivate" : "Activate"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
