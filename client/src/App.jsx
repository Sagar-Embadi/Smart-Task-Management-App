/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { AllTasks } from "./pages/AllTasks";
import { CompletedTasks } from "./pages/CompletedTasks";
import { UnCompletedTasks } from "./pages/UnCompletedTasks";
import { TodayTasks } from "./pages/TodayTasks";
import axios from "axios";
import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Category } from "./pages/Category";
import LandingPage from "./components/LandingPage";
import AdminDashboard from "./pages/Admin";
import { getEnv } from "./helpers/getEnv";
import { ToastContainer } from "react-toastify";
import { Dashboard } from "./components/Dashboard";

export const themes = createContext();
export const store = createContext();
export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${getEnv('VITE_BACKEND_URL')}/api/tasks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data);
        console.log(JSON.stringify(res.data))
        
      })
      .catch((err) => {
        console.error("Error fetching tasks:", err);
      });
  }, [update]);
  return (
    <themes.Provider value={{ theme, setTheme }}>
      <store.Provider value={{ data, update, setUpdate }}>
        <ToastContainer/>
        <Routes>
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Sidebar />
                <div className="flex-col flex-1">
                  <Navbar />
                  <Dashboard/>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Sidebar />
                <div className="flex-col flex-1">
                  <Navbar />
                  <AdminDashboard/>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/alltasks"
            element={
              <ProtectedRoute>
                <Sidebar />
                <div className="flex-col flex-1">
                  <Navbar />
                  <AllTasks />
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/todaystasks"
            element={
              <ProtectedRoute>
                <Sidebar />
                <div className="flex-col flex-1">
                  <Navbar />
                  <TodayTasks />
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/completedtasks"
            element={
              <ProtectedRoute>
                <Sidebar />
                <div className="flex-col flex-1">
                  <Navbar />
                  <CompletedTasks />
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/uncompletedtasks"
            element={
              <ProtectedRoute>
                <Sidebar />
                <div className="flex-col flex-1">
                  <Navbar />
                  <UnCompletedTasks />
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/tasks/:cat"
            element={
              <ProtectedRoute>
                <Sidebar />
                <div className="flex-col flex-1">
                  <Navbar />
                  <Category />
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </store.Provider>
    </themes.Provider>
  );
}
