import React from 'react';
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

import {
  MdPool,
  MdApartment,

} from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";

import {
  FaHotel,
  FaHome,
    FaUmbrellaBeach, 
      FaBed,
  FaArrowLeft,
  FaArrowRight,
  FaBuilding,
  FaStore,
  FaCampground,
  FaUserPlus,
  FaSignInAlt,
} from "react-icons/fa";
import { Navigate } from 'react-router-dom';
const ListingPage2 = () => {
      const navigate = useNavigate();
    
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-5xl mx-auto">
          
          {/* Header Section */}
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
              Select Property Category
            </h1>
            <p className="text-lg text-gray-600">
              ✨ Choose the category that best describes your property
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-10">
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 text-lg font-bold text-white bg-green-500 rounded-full shadow-lg">
                  ✓
                </div>
                <div className="mt-2 text-sm font-medium text-gray-600">Details Added</div>
              </div>
              <div className="w-16 h-1 mx-2 bg-green-500"></div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 text-lg font-bold text-white scale-110 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-blue-700">
                  2
                </div>
                <div className="mt-2 text-sm font-medium text-gray-600">Select Category</div>
              </div>
              <div className="w-16 h-1 mx-2 bg-gray-300"></div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 text-lg font-bold text-gray-500 bg-gray-200 rounded-full">
                  3
                </div>
                <div className="mt-2 text-sm font-medium text-gray-600">Upload Photos</div>
              </div>
            </div>
          </div>

          {/* Main Form Card */}
          <div className="overflow-hidden bg-white shadow-2xl rounded-3xl">
            <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
            
            <div className="p-6 md:p-10">
              
              <h2 className="mb-2 text-2xl font-bold text-gray-800">
                Choose Category
              </h2>
              <p className="mb-6 text-gray-500">
                Select one category that matches your property type
              </p>
              
              {/* Category Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                
                <div className="relative p-6 transition-all duration-300 bg-white border-2 border-gray-200 cursor-pointer rounded-2xl hover:border-blue-400 hover:shadow-lg hover:bg-blue-50 group">
                  <div className="text-center">
                    <FaHotel className="w-12 h-12 mx-auto mb-3 text-gray-600 group-hover:text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-700 group-hover:text-blue-600">Villa</h3>
                    <p className="mt-1 text-xs text-gray-500">Luxury living spaces</p>
                  </div>
                </div>

                <div className="relative p-6 transition-all duration-300 bg-white border-2 border-gray-200 cursor-pointer rounded-2xl hover:border-blue-400 hover:shadow-lg hover:bg-blue-50 group">
                  <div className="text-center">
                    <FaHome className="w-12 h-12 mx-auto mb-3 text-gray-600 group-hover:text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-700 group-hover:text-blue-600">Farm House</h3>
                    <p className="mt-1 text-xs text-gray-500">Peaceful countryside stays</p>
                  </div>
                </div>

                <div className="relative p-6 transition-all duration-300 bg-white border-2 border-gray-200 cursor-pointer rounded-2xl hover:border-blue-400 hover:shadow-lg hover:bg-blue-50 group">
                  <div className="text-center">
                    <MdPool className="w-12 h-12 mx-auto mb-3 text-gray-600 group-hover:text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-700 group-hover:text-blue-600">Pool House</h3>
                    <p className="mt-1 text-xs text-gray-500">Refreshing pool access</p>
                  </div>
                </div>

                <div className="relative p-6 transition-all duration-300 bg-white border-2 border-gray-200 cursor-pointer rounded-2xl hover:border-blue-400 hover:shadow-lg hover:bg-blue-50 group">
                  <div className="text-center">
                    <MdApartment className="w-12 h-12 mx-auto mb-3 text-gray-600 group-hover:text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-700 group-hover:text-blue-600">Apartment</h3>
                    <p className="mt-1 text-xs text-gray-500">Modern urban living</p>
                  </div>
                </div>

                <div className="relative p-6 transition-all duration-300 bg-white border-2 border-gray-200 cursor-pointer rounded-2xl hover:border-blue-400 hover:shadow-lg hover:bg-blue-50 group">
                  <div className="text-center">
                    <FaBuilding className="w-12 h-12 mx-auto mb-3 text-gray-600 group-hover:text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-700 group-hover:text-blue-600">PG</h3>
                    <p className="mt-1 text-xs text-gray-500">Affordable shared spaces</p>
                  </div>
                </div>

                <div className="relative p-6 transition-all duration-300 bg-white border-2 border-gray-200 cursor-pointer rounded-2xl hover:border-blue-400 hover:shadow-lg hover:bg-blue-50 group">
                  <div className="text-center">
                    <GiWoodCabin className="w-12 h-12 mx-auto mb-3 text-gray-600 group-hover:text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-700 group-hover:text-blue-600">Cabin</h3>
                    <p className="mt-1 text-xs text-gray-500">Cozy nature retreats</p>
                  </div>
                </div>

                <div className="relative p-6 transition-all duration-300 bg-white border-2 border-gray-200 cursor-pointer rounded-2xl hover:border-blue-400 hover:shadow-lg hover:bg-blue-50 group">
                  <div className="text-center">
                    <FaStore className="w-12 h-12 mx-auto mb-3 text-gray-600 group-hover:text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-700 group-hover:text-blue-600">Shop</h3>
                    <p className="mt-1 text-xs text-gray-500">Commercial spaces</p>
                  </div>
                </div>



                <div className="relative p-6 transition-all duration-300 bg-white border-2 border-gray-200 cursor-pointer rounded-2xl hover:border-blue-400 hover:shadow-lg hover:bg-blue-50 group">
                  <div className="text-center">
                    <FaBed className="w-12 h-12 mx-auto mb-3 text-gray-600 group-hover:text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-700 group-hover:text-blue-600">Homestay</h3>
                    <p className="mt-1 text-xs text-gray-500">Home away from home</p>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-10">
                <button className="flex items-center gap-2 px-8 py-3 font-semibold text-gray-700 transition-all duration-300 bg-gray-200 rounded-xl hover:bg-gray-300"
                 onClick={()=>navigate("/listingpage1")}>
                  <FaArrowLeft /> Back
                </button>
                
                <button className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                  Continue to Photos <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Selected Category Preview */}
          <div className="p-4 mt-6 border border-blue-200 bg-blue-50 rounded-xl">
            <p className="text-sm text-center text-blue-800">
              <span className="font-semibold">Selected Category:</span> None yet
            </p>
          </div>

          {/* Tips Section */}
          <div className="p-6 mt-6 border border-blue-200 bg-blue-50 rounded-2xl">
            <h3 className="flex items-center gap-2 mb-3 font-bold text-blue-800">
              <span>💡</span> Why category matters:
            </h3>
            <ul className="space-y-2 text-sm text-blue-700">
              <li>✓ Helps guests find your property easily</li>
              <li>✓ Improves search visibility</li>
              <li>✓ Attracts the right audience</li>
              <li>✓ Increases booking chances</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingPage2;