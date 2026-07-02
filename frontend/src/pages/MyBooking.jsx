import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useContext } from "react";
import { userDataContext } from "../context/UserContext";
import Card from "../components/Card";

export default function MyBooking() {
    let navigate = useNavigate();
  let { UserData } = useContext(userDataContext);
  return (
    <div className="relative w-full min-h-screen pt-16 pb-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">

      <button
        className="absolute top-[20px] left-[16px] sm:top-[30px] sm:left-[30px] md:top-[10%] md:left-[30px] 
                   w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] 
                   bg-blue-600 cursor-pointer rounded-full flex items-center justify-center 
                   hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg z-10"
        onClick={() => navigate("/")}
        aria-label="Go back to home"
      >
        <FaArrowLeftLong className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] md:w-[25px] md:h-[25px] text-white" />
      </button>

      {/* Header */}
      <div className="flex items-center justify-center px-4 mt-4 md:mt-6">
        <div className="w-full max-w-[600px] bg-white border-2 border-gray-200 p-4 md:p-5 flex items-center justify-center text-2xl md:text-3xl rounded-2xl shadow-lg text-gray-700 font-bold tracking-wide">
          🏠 My Booking
        </div>
      </div>

      {/* Cards Grid */}
      <div className="w-full px-4 py-8 md:px-8 md:py-10">
        {UserData?.booking && UserData.booking.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center max-w-7xl">
     {UserData.booking.map((list) => (
              <Card
                key={list._id}
                title={list.title}
                landMark={list.landMark}
                city={list.city}
                image1={list.image1}
                image2={list.image2}
                image3={list.image3}
                rent={list.rent}
                id={list._id}
                 isBooked={list.isBooked}
                  host={list.host}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 mx-auto md:py-24 max-w-7xl">
            <div className="flex items-center justify-center w-24 h-24 mb-6 bg-white rounded-full shadow-lg">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-gray-700">
             No Booking Yet
            </h3>
            <p className="max-w-md text-center text-gray-500">
  You haven't booked any stays yet. Explore amazing properties and reserve your next stay today!
            </p>
            <button
              onClick={() => navigate("/")}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
  🔍 Explore Properties
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
