import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaArrowLeftLong } from "react-icons/fa6";
import {
  FaMapMarkerAlt,
  FaHome,
  FaRupeeSign,
  FaPencilAlt,
  FaImage,
  FaBed,
  FaCity,
  FaTag,
  FaCheckCircle,
} from "react-icons/fa";
import { RxCross1 } from "react-icons/rx"
import { GiHouse } from "react-icons/gi";
import { MdDescription, MdUpload } from "react-icons/md";


import { ListingDataContext } from "../context/ListingContext";
import { userDataContext } from "../context/UserContext";

export default function ViewCard() {
  const navigate = useNavigate();
  let { cardDetails } = useContext(ListingDataContext);
  let { UserData } = useContext(userDataContext);
  let [updatePopup, setUpdatePop] = useState(false);

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
    adding,
    setadding,
  } = useContext(ListingDataContext);
  return (
    <>
      <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
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
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          {cardDetails.host == UserData._id && (
            <div className="mb-8 text-center">
              <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
                Review Your Listing
              </h1>
              <p className="text-lg text-gray-600">
                ✨ Please review your property details before listing
              </p>
            </div>
          )}

          {cardDetails.host != UserData._id && (
            <div className="mb-8 text-center">
              <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
                Review Your Booking
              </h1>
              <p className="text-lg text-gray-600">
                ✨ Please review your booking details before confirming your
                reservation.
              </p>
            </div>
          )}

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

                  {cardDetails.image3 && (
                    <div className="overflow-hidden shadow-lg rounded-2xl">
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
                  <p className="text-lg font-semibold text-gray-800">
                    {cardDetails?.title}
                  </p>
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
                      ? cardDetails.category.charAt(0).toUpperCase() +
                        cardDetails.category.slice(1)
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
                  <p className="text-lg font-semibold text-gray-800">
                    {cardDetails?.city}
                  </p>
                  <p className="text-sm text-gray-500">
                    {cardDetails?.landMark}
                  </p>
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

              <div className="flex items-center w-full gap-4 mt-3 sm:w-auto">
                {cardDetails.host == UserData._id && (
                  <button
                    className="flex-1 sm:flex-none px-8 py-3.5 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center  gap-2 bg-green-600"
                    onClick={() => setUpdatePop((prev) => !prev)}
                  >
                    <FaPencilAlt className="text-sm" />
                    Edit
                  </button>
                )}
                {cardDetails.host != UserData._id && (
                  <button className="flex-1 sm:flex-none px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-[10px]">
                    <span>Booking </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* update listing page    */}

{updatePopup && (
  <div className="fixed inset-0 flex items-start justify-center bg-black/60 backdrop-blur-sm z-[100] p-4 overflow-y-auto">
    <div className="relative w-full max-w-4xl my-4 md:my-8">
      {/* Close Button */}
      <button
        className="absolute z-50 flex items-center justify-center w-10 h-10 transition-all duration-300 shadow-lg cursor-pointer md:w-12 md:h-12 -top-3 -right-3 md:-top-4 md:-right-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl hover:shadow-2xl hover:scale-110 group"
        onClick={() => setUpdatePop(false)}
      >
        <RxCross1 className="w-5 h-5 text-white transition-transform duration-300 md:w-6 md:h-6 group-hover:rotate-90" />
      </button>

      {/* Main Form Card */}
      <div className="overflow-hidden bg-white shadow-2xl rounded-2xl md:rounded-3xl">
        <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>

        <form className="p-4 sm:p-6 md:p-8 lg:p-10" onSubmit={handleaddListing}>
          {/* Basic Information Section */}
          <div className="mb-6 md:mb-10">
            <h2 className="flex items-center gap-3 mb-4 text-xl font-bold text-gray-800 md:mb-6 md:text-2xl">
              <GiHouse className="text-lg text-blue-600 md:text-2xl" />
              Basic Information
            </h2>

            <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 md:grid-cols-2">
              {/* Title */}
              <div className="md:col-span-2">
                <label className="block mb-1.5 md:mb-2 text-xs md:text-sm font-semibold text-gray-700">
                  Property Title *
                </label>
                <div className="relative">
                  <FaHome className="absolute text-sm text-gray-400 transform -translate-y-1/2 left-3 top-1/2 md:text-base" />
                  <input
                    type="text"
                    name="title"
                    required
                    placeholder="e.g., Luxury Villa with Pool, Cozy Apartment in City Center"
                    className="w-full py-2.5 md:py-3 pl-9 md:pl-10 pr-4 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm md:text-base"
                    id="title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block mb-1.5 md:mb-2 text-xs md:text-sm font-semibold text-gray-700">
                  Description *
                </label>
                <div className="relative">
                  <MdDescription className="absolute text-sm text-gray-400 transform -translate-y-1/2 left-3 top-5 md:text-base" />
                  <textarea
                    name="description"
                    required
                    rows="4"
                    placeholder="Describe your property - amenities, nearby attractions, unique features..."
                    className="w-full py-2.5 md:py-3 pl-9 md:pl-10 pr-4 transition-all duration-300 border-2 border-gray-200 resize-none rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm md:text-base"
                    id="description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  ></textarea>
                </div>
              </div>

              {/* Rent */}
              <div>
                <label className="block mb-1.5 md:mb-2 text-xs md:text-sm font-semibold text-gray-700">
                  Rent per Month (₹) *
                </label>
                <div className="relative">
                  <FaRupeeSign className="absolute text-sm text-gray-400 transform -translate-y-1/2 left-3 top-1/2 md:text-base" />
                  <input
                    type="number"
                    name="rent"
                    required
                    placeholder="e.g., 25000"
                    className="w-full py-2.5 md:py-3 pl-9 md:pl-10 pr-4 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm md:text-base"
                    min={0}
                    id="rent"
                    onChange={(e) => setRent(e.target.value)}
                    value={rent}
                  />
                </div>
              </div>

              {/* City */}
              <div>
                <label className="block mb-1.5 md:mb-2 text-xs md:text-sm font-semibold text-gray-700">
                  City *
                </label>
                <div className="relative">
                  <FaCity className="absolute text-sm text-gray-400 transform -translate-y-1/2 left-3 top-1/2 md:text-base" />
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="e.g., Mumbai, Delhi, Bangalore"
                    className="w-full py-2.5 md:py-3 pl-9 md:pl-10 pr-4 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm md:text-base"
                    id="city"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                  />
                </div>
              </div>

              {/* Landmark */}
              <div className="md:col-span-2">
                <label className="block mb-1.5 md:mb-2 text-xs md:text-sm font-semibold text-gray-700">
                  Landmark *
                </label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute text-sm text-gray-400 transform -translate-y-1/2 left-3 top-1/2 md:text-base" />
                  <input
                    type="text"
                    name="landMark"
                    required
                    placeholder="Near Metro Station, Main Market etc."
                    className="w-full py-2.5 md:py-3 pl-9 md:pl-10 pr-4 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm md:text-base"
                    id="landMark"
                    onChange={(e) => setLandMark(e.target.value)}
                    value={landMark}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div className="mb-6 md:mb-10">
            <h2 className="flex items-center gap-3 mb-4 text-xl font-bold text-gray-800 md:mb-6 md:text-2xl">
              <FaImage className="text-lg text-purple-600 md:text-2xl" />
              Property Images
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
              {/* Image 1 - Main Image */}
              <div>
                <label className="block mb-1.5 md:mb-2 text-xs md:text-sm font-semibold text-gray-700">
                  Main Image *
                </label>
                <div className="relative">
                  {!frontendimage1 ? (
                    <label className="flex flex-col items-center justify-center w-full h-40 transition-all duration-300 border-2 border-gray-300 border-dashed cursor-pointer sm:h-48 rounded-xl hover:border-blue-500 bg-gray-50 hover:bg-blue-50">
                      <div className="flex flex-col items-center justify-center pt-4 pb-5 sm:pt-5 sm:pb-6">
                        <MdUpload className="w-8 h-8 mb-2 text-gray-400 sm:w-10 sm:h-10" />
                        <p className="px-2 text-xs text-center text-gray-500 sm:text-sm">Click to upload</p>
                        <p className="text-[10px] sm:text-xs text-gray-400">JPG, PNG, WEBP</p>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              setfrontendImage1(reader.result);
                              setbackendImage1(file);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </label>
                  ) : (
                    <div className="relative">
                      <img
                        src={frontendimage1}
                        alt="Preview"
                        className="object-cover w-full h-40 sm:h-48 rounded-xl"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setfrontendImage1(null);
                          setbackendImage1(null);
                        }}
                        className="absolute p-1.5 sm:p-2 text-white transition-all duration-300 bg-red-500 rounded-full top-2 right-2 hover:bg-red-600 hover:scale-110"
                      >
                        <FaTrash className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Image 2 */}
              <div>
                <label className="block mb-1.5 md:mb-2 text-xs md:text-sm font-semibold text-gray-700">
                  Image 2
                </label>
                <div className="relative">
                  {!frontendimage2 ? (
                    <label className="flex flex-col items-center justify-center w-full h-40 transition-all duration-300 border-2 border-gray-300 border-dashed cursor-pointer sm:h-48 rounded-xl hover:border-blue-500 bg-gray-50 hover:bg-blue-50">
                      <div className="flex flex-col items-center justify-center pt-4 pb-5 sm:pt-5 sm:pb-6">
                        <MdUpload className="w-8 h-8 mb-2 text-gray-400 sm:w-10 sm:h-10" />
                        <p className="px-2 text-xs text-center text-gray-500 sm:text-sm">Click to upload</p>
                        <p className="text-[10px] sm:text-xs text-gray-400">Optional</p>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              setfrontendImage2(reader.result);
                              setbackendImage2(file);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </label>
                  ) : (
                    <div className="relative">
                      <img
                        src={frontendimage2}
                        alt="Preview"
                        className="object-cover w-full h-40 sm:h-48 rounded-xl"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setfrontendImage2(null);
                          setbackendImage2(null);
                        }}
                        className="absolute p-1.5 sm:p-2 text-white transition-all duration-300 bg-red-500 rounded-full top-2 right-2 hover:bg-red-600 hover:scale-110"
                      >
                        <FaTrash className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Image 3 */}
              <div>
                <label className="block mb-1.5 md:mb-2 text-xs md:text-sm font-semibold text-gray-700">
                  Image 3
                </label>
                <div className="relative">
                  {!frontendimage3 ? (
                    <label className="flex flex-col items-center justify-center w-full h-40 transition-all duration-300 border-2 border-gray-300 border-dashed cursor-pointer sm:h-48 rounded-xl hover:border-blue-500 bg-gray-50 hover:bg-blue-50">
                      <div className="flex flex-col items-center justify-center pt-4 pb-5 sm:pt-5 sm:pb-6">
                        <MdUpload className="w-8 h-8 mb-2 text-gray-400 sm:w-10 sm:h-10" />
                        <p className="px-2 text-xs text-center text-gray-500 sm:text-sm">Click to upload</p>
                        <p className="text-[10px] sm:text-xs text-gray-400">Optional</p>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              setfrontendImage3(reader.result);
                              setbackendImage3(file);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </label>
                  ) : (
                    <div className="relative">
                      <img
                        src={frontendimage3}
                        alt="Preview"
                        className="object-cover w-full h-40 sm:h-48 rounded-xl"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setfrontendImage3(null);
                          setbackendImage3(null);
                        }}
                        className="absolute p-1.5 sm:p-2 text-white transition-all duration-300 bg-red-500 rounded-full top-2 right-2 hover:bg-red-600 hover:scale-110"
                      >
                        <FaTrash className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <p className="mt-3 text-[10px] sm:text-xs text-center text-gray-500">
              * Main image is required. Upload high-quality images to attract more guests
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <button
              type="submit"
              className="flex-1 py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <FaCheckCircle className="text-xs sm:text-sm" />
              {adding ? "Publishing..." : "Update Listing"}
            </button>

            <button
              type="button"
              onClick={() => setUpdatePop(false)}
              className="px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 bg-gray-200 sm:px-8 sm:py-4 rounded-xl hover:bg-gray-300 sm:text-base"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}
      </div>
    </>
  );
}
