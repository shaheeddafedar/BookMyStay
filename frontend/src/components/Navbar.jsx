import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  let navigate = useNavigate();
  
  return (
    <>
      {/* Header Section */}
      <div className="relative flex items-center justify-between h-32 gap-4 py-4 px-7 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-white to-transparent"></div>
        
        {/* Logo Section */}
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => navigate("/")}>
          <img
            src="/logo.png"
            alt="logo"
            className="relative w-16 h-16 transition-all duration-500 rounded-full shadow-lg group-hover:scale-110 group-hover:rotate-3"
          />
          <h1 className="relative text-4xl font-black text-white transition-all duration-300 md:text-5xl group-hover:text-blue-200">
            BookMyStay
          </h1>
        </div>

        <div className="items-center flex-1 hidden max-w-md mx-8 md:flex">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search destinations, hotels..."
              className="w-full px-5 py-3 pr-12 text-gray-700 transition-all duration-300 bg-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <FaSearch className="absolute text-gray-400 transition-colors duration-300 transform -translate-y-1/2 cursor-pointer right-4 top-1/2 hover:text-blue-600" />
          </div>
        </div>

        <div className="w-32"></div>
      </div>
      <nav className="relative bg-white border-b-2 border-gray-200 shadow-md rounded-b-xl">
        <div className="flex items-center justify-center gap-12 py-3 text-base font-semibold">
          
          <NavLink
            to="/"
            className={({ isActive }) => `relative px-3 py-2 transition-all duration-300 group
            ${isActive ? "text-blue-700" : "text-gray-700 hover:text-blue-700"}`}
          >
            Home
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-transform duration-300 `}></span>
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) => `relative px-3 py-2 transition-all duration-300 group 
            ${isActive ? "text-blue-700" : "text-gray-700 hover:text-blue-700"}`}
          >
            Login
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-transform duration-300 
              }`}></span>
          </NavLink>

          <NavLink
            to="/signup"
            className={({ isActive }) => `relative px-6 py-2 transition-all duration-300 transform
            ${isActive 
              ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md" 
              : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700"} 
            rounded-full`}
          >
            Signup
          </NavLink>

        </div>
      </nav>

      <div className="px-4 py-3 bg-white border-b border-gray-200 md:hidden">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search destinations..."
            className="w-full px-4 py-2 pr-10 text-gray-700 transition-all duration-300 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2" />
        </div>
      </div>
    </>
  );
};

export default Navbar;