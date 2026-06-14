import React from 'react';
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

// React Icons
import { FaHome, FaRupeeSign, FaCity, FaMapMarkerAlt, FaTags, FaImage, FaPlus, FaTrash } from "react-icons/fa";
import { MdDescription, MdCategory, MdUpload } from "react-icons/md";
import { GiPayMoney, GiHouse } from "react-icons/gi";

const Listingpage1 = () => {
    const navigate = useNavigate();

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-5xl mx-auto">
          
          {/* Header Section */}
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-6xl font-bold text-gray-800 md:text-5xl">
              List Your Property
            </h1>
            <p className="text-3xl text-gray-600">
              ✨ Share your space with travelers and start earning
            </p>
          </div>

          {/* Main Form Card */}
          <div className="overflow-hidden bg-white shadow-2xl rounded-3xl">
            <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
            
            <form action="" className="p-6 md:p-10">
              
              {/* Basic Information Section */}
              <div className="mb-10">
                <h2 className="flex items-center gap-3 mb-6 text-2xl font-bold text-gray-800">
                  <GiHouse className="text-blue-600" />
                  Basic Information
                </h2>
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Title */}
                  <div className="md:col-span-2">
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Property Title *
                    </label>
                    <div className="relative">
                      <FaHome className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                      <input
                        type="text"
                        name="title"
                        required
                        placeholder="e.g., Luxury Villa with Pool, Cozy Apartment in City Center"
                        className="w-full py-3 pl-10 pr-4 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Description *
                    </label>
                    <div className="relative">
                      <MdDescription className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-5" />
                      <textarea
                        name="description"
                        required
                        rows="4"
                        placeholder="Describe your property - amenities, nearby attractions, unique features..."
                        className="w-full py-3 pl-10 pr-4 transition-all duration-300 border-2 border-gray-200 resize-none rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      ></textarea>
                    </div>
                  </div>

                  {/* Rent */}
                  <div className="md:col-span-2">
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Rent per Month (₹) *
                    </label>
                    <div className="relative">
 <FaRupeeSign className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />                      <input
                        type="number"
                        name="rent"

                        required
                        placeholder="e.g., 25000"
                        className="w-full py-3 pl-10 pr-4 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div className="md:col-span-2">
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                     City *
                    </label>
                    <div className="relative">
                      <FaCity className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                      <input
                        type="text"
                        name="city"
                        required
                        placeholder="e.g., Mumbai, Delhi, Bangalore"
                        className="w-full py-3 pl-10 pr-4 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                  </div>

                  {/* Landmark */}
                  <div className="md:col-span-2">
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Landmark *
                    </label>
                    <div className="relative">
                      <FaMapMarkerAlt className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                      <input
                        type="text"
                        name="landmark"
                        required
                        placeholder="Near Metro Station, Main Market etc."
                        className="w-full py-3 pl-10 pr-4 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Images Section */}
              <div className="mb-10">
                <h2 className="flex items-center gap-3 mb-6 text-2xl font-bold text-gray-800">
                  <FaImage className="text-purple-600" />
                  Property Images
                </h2>
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {/* Image 1 */}
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Main Image *
                    </label>
                    <div className="relative">
                        <label className="flex flex-col items-center justify-center w-full h-48 transition-all duration-300 border-2 border-gray-300 border-dashed cursor-pointer rounded-xl hover:border-blue-500 bg-gray-50 hover:bg-blue-50">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <MdUpload className="w-10 h-10 mb-2 text-gray-400" />
                            <p className="text-sm text-gray-500">Click to upload</p>
                            <p className="text-xs text-gray-400">JPG, PNG, WEBP</p>
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                          />
                        </label>
                    </div>
                  </div>

                  {/* Image 2 */}
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Image 2
                    </label>
                    <div className="relative">
                        <label className="flex flex-col items-center justify-center w-full h-48 transition-all duration-300 border-2 border-gray-300 border-dashed cursor-pointer rounded-xl hover:border-blue-500 bg-gray-50 hover:bg-blue-50">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <MdUpload className="w-10 h-10 mb-2 text-gray-400" />
                            <p className="text-sm text-gray-500">Click to upload</p>
                            <p className="text-xs text-gray-400">Optional</p>
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            
                            className="hidden"
                          />
                        </label>

                    </div>
                  </div>

                  {/* Image 3 */}
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Image 3
                    </label>
                    <div className="relative">
                        <label className="flex flex-col items-center justify-center w-full h-48 transition-all duration-300 border-2 border-gray-300 border-dashed cursor-pointer rounded-xl hover:border-blue-500 bg-gray-50 hover:bg-blue-50">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <MdUpload className="w-10 h-10 mb-2 text-gray-400" />
                            <p className="text-sm text-gray-500">Click to upload</p>
                            <p className="text-xs text-gray-400">Optional</p>
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                          />
                        </label>

                    </div>
                  </div>
                </div>
                <p className="mt-3 text-xs text-center text-gray-500">
                  * Main image is required. Upload high-quality images to attract more guests
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  onClick={() => navigate("/Listingpage2")}
                  className="flex-1 py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                > Next
                </button>
                
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="px-8 py-4 font-semibold text-gray-700 transition-all duration-300 bg-gray-200 rounded-xl hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>

          {/* Tips Section */}
          <div className="p-6 mt-8 border border-blue-200 bg-blue-50 rounded-2xl">
            <h3 className="flex items-center gap-2 mb-3 font-bold text-blue-800">
              <FaTags /> Tips for a great listing:
            </h3>
            <ul className="space-y-2 text-sm text-blue-700">
              <li>✓ Use high-quality, well-lit photos</li>
              <li>✓ Write a detailed description highlighting unique features</li>
              <li>✓ Set competitive pricing based on similar properties</li>
              <li>✓ Mention nearby attractions, restaurants, and transport options</li>
              <li>✓ Keep your calendar updated to avoid double bookings</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listingpage1;