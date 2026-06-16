// external module
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";

//internal module
import { authDataContext } from "../context/Authcontext";

// React Icons Imports
import {
  MdWhatshot,
  MdPool,
  MdApartment,
  MdClose,
  MdLogout,
  MdDashboard,
  MdListAlt,
  MdBookOnline,
} from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import {
  FaHotel,
  FaHome,
  FaBuilding,
  FaStore,
  FaCampground,
  FaUserPlus,
  FaSignInAlt,
} from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiWoodCabin } from "react-icons/gi";
import { userDataContext } from "../context/UserContext";

const Navbar = () => {
  let { serverUrl } = useContext(authDataContext);
  let { UserData, setUserData } = useContext(userDataContext);

  let [showpopup, setshowpopup] = useState(false);
  let navigate = useNavigate();

  const handleLogout = async () => {
    try {
      let result = await axios.post(
        serverUrl + "/api/auth/logout",
        {},
        { withCredentials: true },
        setUserData(null),
      );
      navigate("/");
      setshowpopup(false);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-between gap-4 px-4 py-4 shadow-xl md:flex-row md:gap-0 md:px-7 md:py-4 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-white to-transparent"></div>
        <div
          className="z-10 flex items-center justify-center gap-3 cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <img
            src="/logo.png"
            alt="logo"
            className="relative w-12 h-12 transition-all duration-500 rounded-full shadow-lg md:w-16 md:h-16 group-hover:scale-110 group-hover:rotate-3"
          />
          <h1 className="relative text-2xl font-black text-white transition-all duration-300 md:text-4xl group-hover:text-blue-200">
            BookMyStay
          </h1>
        </div>

        <div className="z-10 items-center flex-1 hidden max-w-xl mx-4 md:flex">
          <div className="relative w-full group">
            <input
              type="text"
              placeholder="Where are you going? | Location | City"
              className="w-full px-5 py-3 pr-12 text-gray-700 transition-all duration-300 bg-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-xl group-hover:shadow-xl"
            />
            <button className="absolute transform -translate-y-1/2 right-2 top-1/2">
              <FaSearch
                className="text-gray-400 transition-all duration-300 cursor-pointer hover:text-blue-600 hover:scale-110"
                size={20}
              />
            </button>
          </div>
        </div>

        <div className="z-10 flex items-center justify-center gap-2 md:gap-3">
          <span className="hidden px-4 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-full cursor-pointer md:inline-block md:text-base hover:bg-white/10 hover:scale-105 backdrop-blur-sm">
            ✨ List your Home
          </span>

          <button
            onClick={() => setshowpopup((prev) => !prev)}
            className="relative bg-white py-2 px-3 md:px-5 md:py-2.5 flex items-center justify-center gap-2 border-2 border-gray-200 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-blue-300 group"
          >
            <CiMenuBurger className="w-4 h-4 text-gray-700 transition-colors md:w-5 md:h-5 group-hover:text-blue-600" />
            <div className="w-px h-5 bg-gray-300"></div>
            {UserData == null && (
              <span>
                {" "}
                <CgProfile className="w-5 h-5 text-gray-700 transition-colors md:w-6 md:h-6 group-hover:text-blue-600" />
              </span>
            )}
            {UserData != null && (
              <span className="w-[35px] h-[35px] bg-black text-white rounded-full flex items-center justify-center text-lg font-semibold">
                {UserData?.name?.slice(0, 1).toUpperCase()}
              </span>
            )}
          </button>

          {showpopup && (
            <>
              <div
                className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm animate-fadeIn md:hidden"
                onClick={() => setshowpopup(false)}
              />

              <div className="absolute top-[90%] right-[2%] md:top-[110%] md:right-[5%] w-[280px] md:w-[260px] bg-white rounded-2xl shadow-2xl z-50 animate-slideDown overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

                <div className="px-4 py-4 bg-gradient-to-br from-blue-50 to-indigo-50">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-md bg-gradient-to-br from-blue-500 to-blue-700">
                      {UserData == null && (
                        <span>
                          {" "}
                          <CgProfile className="w-5 h-5 text-gray-700 transition-colors md:w-6 md:h-6 group-hover:text-blue-600" />
                        </span>
                      )}
                      {UserData != null && (
                        <span className="w-[35px] h-[35px] bg-black text-white rounded-full flex items-center justify-center text-lg font-semibold">
                          {UserData?.name?.slice(0, 1).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Guest User</h4>
                      <p className="text-xs text-gray-500">Welcome back! 👋</p>
                    </div>
                  </div>
                </div>

                <ul className="py-2">
                 { !UserData && <li
                    className="flex items-center gap-3 px-4 py-3 transition-all duration-200 cursor-pointer hover:bg-blue-50 group"
                    onClick={() => {
                      navigate("/login");
                      setshowpopup(false);
                    }}
                  >
                    <FaSignInAlt className="w-4 h-4 text-blue-600 transition-transform group-hover:scale-110" />
                    <span className="flex-1 text-sm font-medium text-gray-700 group-hover:text-blue-600">
                      Login
                    </span>
                    <span className="text-xs text-gray-400">→</span>
                  </li>
}
                  {UserData && <li
                    className="flex items-center gap-3 px-4 py-3 transition-all duration-200 cursor-pointer hover:bg-blue-50 group"
                    onClick={handleLogout}
                  >
                    <MdLogout className="w-4 h-4 text-red-600 transition-transform group-hover:scale-110" />
                    <span className="flex-1 text-sm font-medium text-gray-700 group-hover:text-red-600">
                      Logout
                    </span>
                    <span className="text-xs text-gray-400">→</span>
                  </li>
}
                  <div className="my-2 border-t border-gray-100"></div>

{              UserData &&    <li
                    className="flex items-center gap-3 px-4 py-3 transition-all duration-200 cursor-pointer hover:bg-blue-50 group"
                    onClick={() => {
                      navigate("/listingpage1");
                      setshowpopup(false);
                    }}                  >
                    <FaHome className="w-4 h-4 text-green-600 transition-transform group-hover:scale-110" />
                    <span className="flex-1 text-sm font-medium text-gray-700 group-hover:text-green-600">
                      List your home
                    </span>
                    <span className="text-xs text-gray-400">✨</span>
                  </li>}

                  {UserData && <li
                    className="flex items-center gap-3 px-4 py-3 transition-all duration-200 cursor-pointer hover:bg-blue-50 group"
                    onClick={() => setshowpopup(false)}
                  >
                    <MdListAlt className="w-4 h-4 text-purple-600 transition-transform group-hover:scale-110" />
                    <span className="flex-1 text-sm font-medium text-gray-700 group-hover:text-purple-600">
                      My listing
                    </span>
                    <span className="text-xs text-gray-400">📋</span>
                  </li>}

                  { UserData && <li
                    className="flex items-center gap-3 px-4 py-3 transition-all duration-200 cursor-pointer hover:bg-blue-50 group"
                    onClick={() => setshowpopup(false)}
                  >
                    <MdBookOnline className="w-4 h-4 text-orange-600 transition-transform group-hover:scale-110" />
                    <span className="flex-1 text-sm font-medium text-gray-700 group-hover:text-orange-600">
                      Check Booking
                    </span>
                    <span className="text-xs text-gray-400">📅</span>
                  </li>}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="flex justify-center px-4 py-2 border-t border-blue-600 md:hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700">
        <span className="w-full px-4 py-2 text-sm font-semibold text-center text-white transition-all duration-300 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm">
          ✨ List your Home
        </span>
      </div>

      <div className="relative bg-white border-b border-gray-200 shadow-md">
        <div className="flex items-center gap-4 px-4 py-3 overflow-x-auto md:gap-6 scrollbar-hide md:justify-center">
          <div className="flex flex-col items-center justify-center min-w-fit text-[11px] md:text-[13px] group cursor-pointer transition-all duration-300 hover:border-b-2 hover:border-blue-500 pb-2">
            <MdWhatshot className="w-6 h-6 md:w-[30px] md:h-[30px] text-gray-700 group-hover:text-orange-500 transition-all duration-300 group-hover:scale-110" />
            <h3 className="mt-1 font-medium text-gray-600 transition-colors duration-300 group-hover:text-orange-500">
              Trending
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center min-w-fit text-[11px] md:text-[13px] group cursor-pointer transition-all duration-300 hover:border-b-2 hover:border-blue-500 pb-2">
            <FaHotel className="w-6 h-6 md:w-[30px] md:h-[30px] text-gray-700 group-hover:text-blue-600 transition-all duration-300 group-hover:scale-110" />
            <h3 className="mt-1 font-medium text-gray-600 transition-colors duration-300 group-hover:text-blue-600">
              Villa
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center min-w-fit text-[11px] md:text-[13px] group cursor-pointer transition-all duration-300 hover:border-b-2 hover:border-blue-500 pb-2">
            <FaHome className="w-6 h-6 md:w-[30px] md:h-[30px] text-gray-700 group-hover:text-green-600 transition-all duration-300 group-hover:scale-110" />
            <h3 className="mt-1 font-medium text-gray-600 transition-colors duration-300 group-hover:text-green-600">
              Farm House
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center min-w-fit text-[11px] md:text-[13px] group cursor-pointer transition-all duration-300 hover:border-b-2 hover:border-blue-500 pb-2">
            <MdPool className="w-6 h-6 md:w-[30px] md:h-[30px] text-gray-700 group-hover:text-cyan-600 transition-all duration-300 group-hover:scale-110" />
            <h3 className="mt-1 font-medium text-gray-600 transition-colors duration-300 group-hover:text-cyan-600">
              Pool House
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center min-w-fit text-[11px] md:text-[13px] group cursor-pointer transition-all duration-300 hover:border-b-2 hover:border-blue-500 pb-2">
            <FaBuilding className="w-6 h-6 md:w-[30px] md:h-[30px] text-gray-700 group-hover:text-purple-600 transition-all duration-300 group-hover:scale-110" />
            <h3 className="mt-1 font-medium text-gray-600 transition-colors duration-300 group-hover:text-purple-600">
              Rooms
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center min-w-fit text-[11px] md:text-[13px] group cursor-pointer transition-all duration-300 hover:border-b-2 hover:border-blue-500 pb-2">
            <MdApartment className="w-6 h-6 md:w-[30px] md:h-[30px] text-gray-700 group-hover:text-indigo-600 transition-all duration-300 group-hover:scale-110" />
            <h3 className="mt-1 font-medium text-gray-600 transition-colors duration-300 group-hover:text-indigo-600">
              Flat
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center min-w-fit text-[11px] md:text-[13px] group cursor-pointer transition-all duration-300 hover:border-b-2 hover:border-blue-500 pb-2">
            <FaBuilding className="w-6 h-6 md:w-[30px] md:h-[30px] text-gray-700 group-hover:text-pink-600 transition-all duration-300 group-hover:scale-110" />
            <h3 className="mt-1 font-medium text-gray-600 transition-colors duration-300 group-hover:text-pink-600">
              PG
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center min-w-fit text-[11px] md:text-[13px] group cursor-pointer transition-all duration-300 hover:border-b-2 hover:border-blue-500 pb-2">
            <GiWoodCabin className="w-6 h-6 md:w-[30px] md:h-[30px] text-gray-700 group-hover:text-amber-600 transition-all duration-300 group-hover:scale-110" />
            <h3 className="mt-1 font-medium text-gray-600 transition-colors duration-300 group-hover:text-amber-600">
              Cabins
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center min-w-fit text-[11px] md:text-[13px] group cursor-pointer transition-all duration-300 hover:border-b-2 hover:border-blue-500 pb-2">
            <FaStore className="w-6 h-6 md:w-[30px] md:h-[30px] text-gray-700 group-hover:text-red-600 transition-all duration-300 group-hover:scale-110" />
            <h3 className="mt-1 font-medium text-gray-600 transition-colors duration-300 group-hover:text-red-600">
              Shops
            </h3>
          </div>
        </div>
      </div>

      <div className="px-4 py-3 bg-white border-b border-gray-200 md:hidden">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search destinations..."
            className="w-full px-4 py-3 pr-12 text-gray-700 transition-all duration-300 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white"
          />
          <FaSearch
            className="absolute text-gray-400 transition-colors duration-300 transform -translate-y-1/2 right-4 top-1/2 hover:text-blue-600"
            size={18}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
