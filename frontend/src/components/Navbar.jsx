// src/components/Navbar.jsx

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi"; // Using a nice search icon

function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  useEffect(() => {
    if (!user) return;
    const delay = setTimeout(() => {
      navigate(search.trim() ? `/?search=${encodeURIComponent(search)}` : `/`);
    }, 500);
    return () => clearTimeout(delay);
  }, [search, navigate, user]);

  return (
    // Updated styles for a modern, bright navbar
    <nav className="bg-white text-gray-800 p-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          NanoNotes
        </Link>
        {user && (
          <>
            {/* Improved search bar with an icon */}
            <div className="relative w-1/3">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Notes..."
                className="w-full px-4 py-2 bg-slate-100 text-gray-800 border-2 border-transparent rounded-full
                 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 font-medium hidden sm:block">
                Welcome, {user.username}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white
                 px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;