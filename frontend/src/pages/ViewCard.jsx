import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';



import { FaArrowLeftLong } from "react-icons/fa6";
import {
  FaMapMarkerAlt,
  FaHome,
  FaRupeeSign,
  FaImage,
  FaBed,
  FaCity,
  FaTag,
} from "react-icons/fa";

import { ListingDataContext } from '../context/ListingContext';

export default function ViewCard() {

   const navigate = useNavigate();
    let {cardDetails} =useContext(ListingDataContext)

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
    handleaddListing,
     adding,setadding
  } = useContext(ListingDataContext);
  return (
    <>
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div
          className="absolute top-[10%] left-[30px] w-[50px] h-[50px] bg-blue-600 cursor-pointer rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg"
          onClick={() => navigate("/")}
        >
          <FaArrowLeftLong className="w-[25px] h-[25px] text-white" />
        </div>
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
{cardDetails.landMark && cardDetails.city
  ? `${cardDetails.landMark}, ${cardDetails.city}`
  : "Location not provided"}
                </span>
              </div>
            </div>

<div className="grid grid-cols-1 gap-[10px] md:grid-cols-3">

  {/* Main Image */}
  <div className="md:col-span-2">
    <div className="overflow-hidden shadow-lg rounded-2xl">
      <img
        src={cardDetails.image1}
        alt="Main Property"
        className="object-cover w-full h-[400px] transition-transform duration-500 hover:scale-105"
      />
    </div>
  </div>

  {/* Side Images */}
  <div className="flex flex-col gap-4">

{cardDetails.image2 && (
  <div className="overflow-hidden shadow-lg rounded-2xl">
    <img
      src={cardDetails.image2}
      alt="Property Image 2"
      className="object-cover w-full h-[192px] transition-transform duration-500 hover:scale-105"
    />
  </div>
)}

    {cardDetails.image3 && (<div className="overflow-hidden shadow-lg rounded-2xl">
      <img
        src={
          cardDetails.image3 ||
          "https://via.placeholder.com/300x200?text=Image+3"
        }
        alt="Property Image 3"
        className="object-cover w-full h-[192px] transition-transform duration-500 hover:scale-105"
      />
    </div>
    )}
  </div>
</div>
<br />

            {/* Property Details Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Title Card */}
              <div className="p-4 border-2 border-gray-200 rounded-xl bg-gradient-to-r from-blue-50 to-white">
                <div className="flex items-center gap-2 mb-2">
                  <FaHome className="text-blue-600" />
                  <span className="text-sm font-semibold text-blue-600">
                    Property Title
                  </span>
                </div>
                <p className="text-lg font-semibold text-gray-800">{cardDetails?.title}</p>
              </div>

              {/* Category Card */}
              <div className="p-4 border-2 border-gray-200 rounded-xl bg-gradient-to-r from-purple-50 to-white">
                <div className="flex items-center gap-2 mb-2">
                  <FaTag className="text-purple-600" />
                  <span className="text-sm font-semibold text-purple-600">
                    Category
                  </span>
                </div>
                <p className="text-lg font-semibold text-gray-800">
                  {cardDetails.category
                    ? cardDetails.category.charAt(0).toUpperCase() + cardDetails.category.slice(1)
                    : "Not selected"}
                </p>
              </div>

              {/* Location Card */}
              <div className="p-4 border-2 border-gray-200 rounded-xl bg-gradient-to-r from-green-50 to-white">
                <div className="flex items-center gap-2 mb-2">
                  <FaCity className="text-green-600" />
                  <span className="text-sm font-semibold text-green-600">
                    Location
                  </span>
                </div>
                <p className="text-lg font-semibold text-gray-800">{cardDetails?.city}</p>
                <p className="text-sm text-gray-500">{cardDetails?.landMark}</p>
              </div>

              {/* Rent Card */}
              <div className="p-4 border-2 border-gray-200 rounded-xl bg-gradient-to-r from-yellow-50 to-white">
                <div className="flex items-center gap-2 mb-2">
                  <FaRupeeSign className="text-yellow-600" />
                  <span className="text-sm font-semibold text-yellow-600">
                    Rent per Month
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-800">
                  ₹{cardDetails?.rent}{" "}
                  <span className="text-sm font-normal text-gray-500">
                    /month
                  </span>
                </p>
              </div>

              {/* Description Card - Full Width */}
              <div className="md:col-span-2">
                <div className="p-4 border-2 border-gray-200 rounded-xl bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-center gap-2 mb-2">
                    <FaBed className="text-gray-600" />
                    <span className="text-sm font-semibold text-gray-600">
                      Description
                    </span>
                  </div>
                  <p className="text-gray-700">{cardDetails?.description}</p>
                </div>
              </div>
            </div>

              <button className="h-[50px] w-[75px] bg-green-700 pt-5 mt-3 items-center justify-center text-center text-white font-medium rounded-lg" >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
