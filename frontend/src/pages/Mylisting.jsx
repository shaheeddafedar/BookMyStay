import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useContext } from "react";
import { userDataContext } from "../context/UserContext";
import Card from "../components/Card";

export default function Mylisting() {
  let navigate = useNavigate();
  let { UserData } = useContext(userDataContext);
  
  return (
    <div className="relative w-full min-h-screen pt-16 pb-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      
      <div
        className="absolute top-6 left-4 md:left-8 w-[45px] h-[45px] md:w-[50px] md:h-[50px] bg-white cursor-pointer rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 shadow-lg z-10 border border-gray-200"
        onClick={() => navigate("/")}
      >
        <FaArrowLeftLong className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] text-blue-600" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-center px-4 mt-4 md:mt-6">
        <div className="w-full max-w-[600px] bg-white border-2 border-gray-200 p-4 md:p-5 flex items-center justify-center text-2xl md:text-3xl rounded-2xl shadow-lg text-gray-700 font-bold tracking-wide">
          🏠 My Listings
        </div>
      </div>

      {/* Cards Grid */}
      <div className="w-full px-4 py-8 md:px-8 md:py-10">
        {UserData?.listing && UserData.listing.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center max-w-7xl">
            {UserData.listing.map((list) => (
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
              No Listings Yet
            </h3>
            <p className="max-w-md text-center text-gray-500">
              Turn your space into a stay. Add your first property now!
            </p>
            <button
              onClick={() => navigate("/listingpage1")}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              ✨ List Your Property
            </button>
          </div>
        )}
      </div>
    </div>
  );
}