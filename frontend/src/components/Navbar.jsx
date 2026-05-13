import { NavLink, useNavigate } from "react-router-dom";

// react icon
// React Icons Imports
import { MdWhatshot, MdPool, MdApartment } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

import {
  FaHotel,
  FaHome,
  FaBuilding,
  FaStore,
  FaCampground,
} from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import { GiWoodCabin } from "react-icons/gi";

const Navbar = () => {
  let navigate = useNavigate();

  return (
    <>
      <div className="relative flex items-center justify-between h-32 gap-4 py-4 px-7 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-white to-transparent"></div>
        <div
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => navigate("/")}
        >
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
              placeholder="Any Where | Any Location | Any City "
              className="w-full px-5 py-3 pr-12 text-gray-700 transition-all duration-300 bg-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />{" "}
            <button>
              <FaSearch className="absolute text-gray-400 transition-colors duration-300 transform -translate-y-1/2 cursor-pointer right-4 top-1/3 hover:text-blue-600" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <span className="relative inline-block px-2 py-1 text-2xl text-white transition-all duration-300 rounded-full cursor-pointer md:text-2xl hover:text-blue-200">
            List your Home
          </span>
          <button className=" relative px-[20px] bg-white py-[10px] flex items-center justify-center gap-1 border-[1px] border-gray-700 hover:shadow-lg rounded-[50px] ">
            <span>
              <CiMenuBurger className="w-[30px] h-[20px]" />
            </span>
            <span>
              <CgProfile className="w-[30px] h-[20px]" />
            </span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center w-[100vw] h-20 gap-6 bg-white cursor-pointer">
        <div className="flex flex-col items-center justify-center text-[13px] hover:border-b-[3px]">
          <MdWhatshot className="w-[30px] h-[30px]" />
          <h3>Trending</h3>
        </div>

        <div className="flex flex-col items-center justify-center text-[13px] hover:border-b-[3px]">
          <FaHotel className="w-[30px] h-[30px]" />
          <h3>Villa</h3>
        </div>

        <div className="flex flex-col items-center justify-center text-[13px] hover:border-b-[3px]">
          <FaHome className="w-[30px] h-[30px]" />
          <h3>Farm House</h3>
        </div>

        <div className="flex flex-col items-center justify-center text-[13px] hover:border-b-[3px]">
          <MdPool className="w-[30px] h-[30px]" />
          <h3>Pool House</h3>
        </div>

        <div className="flex flex-col items-center justify-center text-[13px] hover:border-b-[3px]">
          <FaBuilding className="w-[30px] h-[30px]" />
          <h3>Rooms</h3>
        </div>

        <div className="flex flex-col items-center justify-center text-[13px] hover:border-b-[3px]">
          <MdApartment className="w-[30px] h-[30px]" />
          <h3>Flat</h3>
        </div>

        <div className="flex flex-col items-center justify-center text-[13px] hover:border-b-[3px]">
          <FaBuilding className="w-[30px] h-[30px]" />
          <h3>PG</h3>
        </div>

        <div className="flex flex-col items-center justify-center text-[13px] hover:border-b-[3px]">
          <GiWoodCabin className="w-[30px] h-[30px]" />
          <h3>Cabins</h3>
        </div>

        <div className="flex flex-col items-center justify-center text-[13px] hover:border-b-[3px]">
          <FaStore className="w-[30px] h-[30px]" />
          <h3>Shops</h3>
        </div>
      </div>

      <nav className="relative bg-white border-b-2 border-gray-200 shadow-md rounded-b-xl">
        <div className="flex items-center justify-center gap-12 py-3 text-base font-semibold">
          <NavLink
            to="/"
            className={({
              isActive,
            }) => `relative px-3 py-2 transition-all duration-300 group
            ${isActive ? "border-b-2 border-blue-500 text-blue-700" : "text-gray-700 hover:text-blue-700"}`}
          >
            Home
          </NavLink>

          <NavLink
            to="/login"
            className={({
              isActive,
            }) => `relative px-3 py-2 transition-all duration-300 group 
            ${isActive ? "border-b-2 border-blue-500 text-blue-700" : "text-gray-700 hover:text-blue-700"}`}
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className={({
              isActive,
            }) => `relative px-3 py-2 transition-all duration-300 group
            ${isActive ? "border-b-2 border-blue-500 text-blue-700" : "text-gray-700 hover:text-blue-700"}`}
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
