import React, { useContext } from 'react'
import { ListingDataContext } from '../context/ListingContext';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaMapMarkerAlt, FaHome, FaRupeeSign, FaImage, FaBed, FaCity, FaTag } from 'react-icons/fa';

export default function Listingpage3() {
  const navigate = useNavigate();
  let {
    title,
    description,
    rent,
    city,
    landMark,
    category,
    frontendimage1,
    frontendimage2,
    frontendimage3,
  } = useContext(ListingDataContext);

  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
            Review Your Listing
          </h1>
          <p className="text-lg text-gray-600">
            ✨ Please review your property details before listing
          </p>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden bg-white shadow-2xl rounded-3xl">
          <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
          
          <div className="p-6 md:p-8">
            
            {/* Location Badge */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center gap-2 px-4 py-2 border border-blue-200 rounded-full bg-blue-50">
                <FaMapMarkerAlt className="text-blue-600" />
                <span className="font-semibold text-gray-700">
                  {landMark && city ? `${landMark}, ${city}` : 'Location not provided'}
                </span>
              </div>
            </div>

            {/* Images Section */}
            <div className="mb-8">
              <h2 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-800">
                <FaImage className="text-purple-600" /> Property Images
              </h2>
              
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {/* Main Image */}
                <div className="md:col-span-2">
                  <div className="overflow-hidden bg-gray-100 rounded-xl">
                    <img 
                      src={frontendimage1} 
                      alt="Main Property" 
                      className="object-cover w-full h-64 transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                
                {/* Side Images */}
 <div>
                  <div className="overflow-hidden bg-gray-100 rounded-xl">
                    <img 
                      src={frontendimage2 || "https://via.placeholder.com/300x200?text=No+Image"} 
                      alt="Property Image 2" 
                      className="object-cover w-full h-32 transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <p className="mt-1 text-xs text-center text-gray-500">Image 2</p>
                </div>
                
                                <div>
                  <div className="overflow-hidden bg-gray-100 rounded-xl">
                    <img 
                      src={frontendimage3 || "https://via.placeholder.com/300x200?text=No+Image"} 
                      alt="Property Image 3" 
                      className="object-cover w-full h-32 transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <p className="mt-1 text-xs text-center text-gray-500">Image 3</p>
                </div>
              </div>
            </div>

            {/* Property Details Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              
              {/* Title Card */}
              <div className="p-4 border-2 border-gray-200 rounded-xl bg-gradient-to-r from-blue-50 to-white">
                <div className="flex items-center gap-2 mb-2">
                  <FaHome className="text-blue-600" />
                  <span className="text-sm font-semibold text-blue-600">Property Title</span>
                </div>
                <p className="text-lg font-semibold text-gray-800">
                  {title || 'Not provided'}
                </p>
              </div>

              {/* Category Card */}
              <div className="p-4 border-2 border-gray-200 rounded-xl bg-gradient-to-r from-purple-50 to-white">
                <div className="flex items-center gap-2 mb-2">
                  <FaTag className="text-purple-600" />
                  <span className="text-sm font-semibold text-purple-600">Category</span>
                </div>
                <p className="text-lg font-semibold text-gray-800">
                  {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Not selected'}
                </p>
              </div>

              {/* Location Card */}
              <div className="p-4 border-2 border-gray-200 rounded-xl bg-gradient-to-r from-green-50 to-white">
                <div className="flex items-center gap-2 mb-2">
                  <FaCity className="text-green-600" />
                  <span className="text-sm font-semibold text-green-600">Location</span>
                </div>
                <p className="text-lg font-semibold text-gray-800">
                  {city || 'City not provided'}
                </p>
                <p className="text-sm text-gray-500">{landMark || 'Landmark not provided'}</p>
              </div>

              {/* Rent Card */}
              <div className="p-4 border-2 border-gray-200 rounded-xl bg-gradient-to-r from-yellow-50 to-white">
                <div className="flex items-center gap-2 mb-2">
                  <FaRupeeSign className="text-yellow-600" />
                  <span className="text-sm font-semibold text-yellow-600">Rent per Month</span>
                </div>
                <p className="text-2xl font-bold text-gray-800">
                  ₹{rent || '0'} <span className="text-sm font-normal text-gray-500">/month</span>
                </p>
              </div>

              {/* Description Card - Full Width */}
              <div className="md:col-span-2">
                <div className="p-4 border-2 border-gray-200 rounded-xl bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-center gap-2 mb-2">
                    <FaBed className="text-gray-600" />
                    <span className="text-sm font-semibold text-gray-600">Description</span>
                  </div>
                  <p className="text-gray-700">
                    {description || 'No description provided'}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 mt-8 sm:flex-row">
              <button 
                onClick={() => navigate("/listingpage2")}
                className="flex items-center justify-center gap-2 px-6 py-3 font-semibold text-gray-700 transition-all duration-300 bg-gray-200 rounded-xl hover:bg-gray-300"
              >
                <FaArrowLeft /> Back to Edit
              </button>
              
              <button 
                className="flex-1 py-3 font-bold text-white transition-all duration-300 transform bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <FaCheckCircle /> Confirm & Add Listing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}