// src/App.jsx

import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import axios from "axios";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import LandingPage from "./components/LandingPage";
import SplashScreen from "./components/SplashScreen"; // 1. Import the new component

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ... (keep your existing useEffect logic)
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        // Add a small artificial delay to see the splash screen
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (!token) return;

        const { data } = await axios.get(`${API_URL}/api/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
      } catch (error) {
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [API_URL]);

  // 2. Replace the old loading div with the SplashScreen component
  if (loading) {
    return <SplashScreen />;
  }

  return (
    // ... (the rest of your return statement remains the same)
    <div className="bg-slate-100 min-h-screen">
      {user && <Navbar user={user} setUser={setUser} />}
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/welcome" />}
        />
        <Route path="/welcome" element={user ? <Navigate to="/" /> : <LandingPage />} />
        
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login setUser={setUser} />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register setUser={setUser} />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/reset-password/:id/:token"
          element={<ResetPassword />}
        />
      </Routes>
    </div>
  );
}

export default App;