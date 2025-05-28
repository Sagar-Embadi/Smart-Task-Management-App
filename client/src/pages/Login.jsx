import { getEnv } from "@/helpers/getEnv";
import { showToastify } from "@/helpers/showToastify";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${getEnv('VITE_BACKEND_URL')}/api/auth/login`, form).then((res) => {
      localStorage.setItem("loggedInUser", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);
      showToastify('success','Login success')
      if (res.data.user.role === "user"){
        navigate("/");
      }else{
        navigate('/admin')
      }
    }).catch((err)=>{
      showToastify('error',err.response.data.error)
    })
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black/50 dark:bg-black/50">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 w-96 shadow-xl"
      >
        <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
        >
          Login
        </button>
         <p className="mt-4">Dont have an Account yet <a href="/signup" className="text-violet-900 dark:text-violet-100">Create here</a></p>
      </form>
    </div>
  );
}
