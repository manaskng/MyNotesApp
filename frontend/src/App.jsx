import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import axios from "axios";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

function App() {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true);
  useEffect(() => {
    const fetchUser=async()=>{
      try {
        const token= localStorage.getItem("token");
        if(!token) return ;
        const {data}= await axios.get("/api/users/me",
          {
            headers : {
                Authorization: `Bearer ${token}`
            }
          }
        )
        setUser(data);
      } catch (error) {
     localStorage.removeItem("token");
        
      }
      finally {
        setLoading(false);
      }

    }
    fetchUser();
    
    
  }, []);

  if(loading){
    return (
      <div className="min-h-screen bg-gray-900 flex items-center
      justify-center">
        <div className="text-xl text-white">
          Loading...
        </div>

      </div>
    )

  }


  return (
    <div className="bg-gray-500 min-h-screen">
      <Navbar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login setUser={setUser}/>} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register setUser={setUser}/>} />
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/forgot-password" element= {<ForgotPassword/>} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword setUser={setUser} />} />


      </Routes>
    </div>
  );
}

export default App;
