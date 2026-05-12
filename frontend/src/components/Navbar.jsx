import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="relative flex items-center justify-center h-32 gap-4 py-4 px-7 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-white to-transparent"></div>
        <img
          src="/logo.png"
          alt="logo"
          className="relative w-16 h-16 transition-all duration-500 rounded-full shadow-lg hover:scale-110 hover:rotate-3"
        />

        <h1 className="relative text-5xl font-black text-white">
          BookMyStay
        </h1>
      </div>

      <nav className="relative bg-white border-b-2 border-gray-200 shadow-md rounded-b-xl">
        <div className="flex items-center justify-center gap-12 py-3 text-base font-semibold">

          <NavLink
            to="/"
            className={({ isActive }) =>`relative px-3 py-2 transition-all duration-300 group
            ${isActive ? "border-b-2 border-blue-500 text-blue-700" : "text-gray-700 hover:text-blue-700"}`} >
            Home
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) => `relative px-3 py-2 transition-all duration-300 group 
            ${isActive ? "border-b-2 border-blue-500 text-blue-700" : "text-gray-700 hover:text-blue-700"}`} >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className={({ isActive }) =>`relative px-3 py-2 transition-all duration-300 group
            ${isActive ? "border-b-2 border-blue-500 text-blue-700" : "text-gray-700 hover:text-blue-700"}`} >
            Signup
          </NavLink>

        </div>
      </nav>
    </>
  );
};

export default Navbar;