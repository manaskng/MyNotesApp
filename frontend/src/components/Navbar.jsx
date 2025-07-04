import React, { useEffect ,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({user ,setUser}) {
  const navigate=useNavigate();
  //for search bar
  const [search ,setSearch]=useState("");


  //while logout we remove token and set user to null and navigate to home page
  const handleLogout=()=>{
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  }
  useEffect(()=>{
    if(!user) return ;
    const delay =setTimeout(()=>{
      navigate(search.trim()? `/?search=${encodeURIComponent(search)}`:`/`)
    },500)
    return ()=>clearTimeout(delay);
  },[search ,navigate,user])
  return (
    <nav className='bg-gray-900 text-white p-4 shadow-lg'>
      <div className='container mx-auto flex items-center justify-between'>
        <Link to="/">Notes App</Link>
        {user && (
          <>
          <div>
            <input type="text" value={search}  
            onChange={(e)=>setSearch(e.target.value)}
            placeholder='Search Notes...'
            className='w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md
            outline-none focus:ring-2 focus:ring-blue-500 ' />
          </div>
          <div className='flex items-center space-x-4'>
            <span className='text-gray-300 font-medium'>{user.username}</span>
            <button onClick={ handleLogout} className="bg-red-600 text-white
            px-3 py-1 rounded-md hover:bg-red-800">Logout</button>
          </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
