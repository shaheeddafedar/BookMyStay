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
        <div
          className="absolute top-[10%] left-[30px] w-[50px] h-[50px] bg-blue-600 cursor-pointer rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg"
          onClick={() => navigate("/")}
        >
          <FaArrowLeftLong className="w-[25px] h-[25px] text-white" />
        </div>
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
  <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-[100] p-4 overflow-y-auto">
    <div className="relative w-full max-w-4xl my-8">
      {/* Close Button */}
      <button
        className="absolute z-50 flex items-center justify-center w-12 h-12 transition-all duration-300 shadow-lg cursor-pointer -top-4 -right-4 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl hover:shadow-2xl hover:scale-110 group"
        onClick={() => setUpdatePop(false)}
      >
        <RxCross1 className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-90" />
      </button>

      <div className="overflow-hidden border shadow-2xl bg-white/95 backdrop-blur-sm rounded-3xl border-white/50">
        <div className="h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

        <form className="p-6 md:p-10" onSubmit={handleaddListing}>
          {/* Basic Information Section */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 shadow-lg bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl">
                <GiHouse className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
                Basic Information
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Title */}
              <div className="md:col-span-2">
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Property Title <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <FaHome className="absolute text-gray-400 transition-colors duration-300 -translate-y-1/2 left-4 top-1/2 group-focus-within:text-blue-500" />
                  <input
                    type="text"
                    name="title"
                    required
                    placeholder="e.g., Luxury Villa with Pool, Cozy Apartment in City Center"
                    className="w-full py-3.5 pl-12 pr-4 transition-all duration-300 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 group-hover:border-gray-300 placeholder:text-gray-400"
                    id="title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Description <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <MdDescription className="absolute text-gray-400 transition-colors duration-300 left-4 top-5 group-focus-within:text-blue-500" />
                  <textarea
                    name="description"
                    required
                    rows="4"
                    placeholder="Describe your property - amenities, nearby attractions, unique features..."
                    className="w-full py-3.5 pl-12 pr-4 transition-all duration-300 border-2 border-gray-200 resize-none rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 group-hover:border-gray-300 placeholder:text-gray-400"
                    id="description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  ></textarea>
                </div>
              </div>

              {/* Rent */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Rent per Month (₹) <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <FaRupeeSign className="absolute text-gray-400 transition-colors duration-300 -translate-y-1/2 left-4 top-1/2 group-focus-within:text-blue-500" />
                  <input
                    type="number"
                    name="rent"
                    required
                    placeholder="e.g., 25000"
                    className="w-full py-3.5 pl-12 pr-4 transition-all duration-300 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 group-hover:border-gray-300 placeholder:text-gray-400"
                    min={0}
                    id="rent"
                    onChange={(e) => setRent(e.target.value)}
                    value={rent}
                  />
                </div>
              </div>

              {/* City */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  City <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <FaCity className="absolute text-gray-400 transition-colors duration-300 -translate-y-1/2 left-4 top-1/2 group-focus-within:text-blue-500" />
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="e.g., Mumbai, Delhi, Bangalore"
                    className="w-full py-3.5 pl-12 pr-4 transition-all duration-300 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 group-hover:border-gray-300 placeholder:text-gray-400"
                    id="city"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                  />
                </div>
              </div>

              {/* Landmark */}
              <div className="md:col-span-2">
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Landmark <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <FaMapMarkerAlt className="absolute text-gray-400 transition-colors duration-300 -translate-y-1/2 left-4 top-1/2 group-focus-within:text-blue-500" />
                  <input
                    type="text"
                    name="landMark"
                    required
                    placeholder="Near Metro Station, Main Market etc."
                    className="w-full py-3.5 pl-12 pr-4 transition-all duration-300 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 group-hover:border-gray-300 placeholder:text-gray-400"
                    id="landMark"
                    onChange={(e) => setLandMark(e.target.value)}
                    value={landMark}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 shadow-lg bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl">
                <FaImage className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
                Property Images
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-purple-200 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Image 1 - Main Image */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Main Image <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  {!frontendimage1 ? (
                    <label className="flex flex-col items-center justify-center w-full h-48 transition-all duration-300 border-2 border-gray-300 border-dashed cursor-pointer rounded-2xl hover:border-blue-500 bg-gray-50 hover:bg-blue-50/50 group">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <MdUpload className="w-12 h-12 mb-2 text-gray-400 transition-colors duration-300 group-hover:text-blue-500" />
                        <p className="text-sm font-medium text-gray-500 transition-colors duration-300 group-hover:text-blue-600">
                          Click to upload
                        </p>
                        <p className="text-xs text-gray-400">
                          JPG, PNG, WEBP
                        </p>
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
                    <div className="relative group">
                      <img
                        src={frontendimage1}
                        alt="Preview"
                        className="object-cover w-full h-48 shadow-lg rounded-2xl"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setfrontendImage1(null);
                          setbackendImage1(null);
                        }}
                        className="absolute p-2.5 text-white bg-gradient-to-r from-red-500 to-red-600 rounded-xl top-2 right-2 hover:shadow-xl hover:scale-110 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
                      >
                        <FaTrash className="w-4 h-4" />
                      </button>
                      <div className="absolute px-3 py-1 rounded-lg bottom-2 left-2 bg-black/60 backdrop-blur-sm">
                        <span className="text-xs font-medium text-white">Main Image</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Image 2 */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Image 2
                </label>
                <div className="relative">
                  {!frontendimage2 ? (
                    <label className="flex flex-col items-center justify-center w-full h-48 transition-all duration-300 border-2 border-gray-300 border-dashed cursor-pointer rounded-2xl hover:border-blue-500 bg-gray-50 hover:bg-blue-50/50 group">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <MdUpload className="w-12 h-12 mb-2 text-gray-400 transition-colors duration-300 group-hover:text-blue-500" />
                        <p className="text-sm font-medium text-gray-500 transition-colors duration-300 group-hover:text-blue-600">
                          Click to upload
                        </p>
                        <p className="text-xs text-gray-400">
                          Optional
                        </p>
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
                    <div className="relative group">
                      <img
                        src={frontendimage2}
                        alt="Preview"
                        className="object-cover w-full h-48 shadow-lg rounded-2xl"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setfrontendImage2(null);
                          setbackendImage2(null);
                        }}
                        className="absolute p-2.5 text-white bg-gradient-to-r from-red-500 to-red-600 rounded-xl top-2 right-2 hover:shadow-xl hover:scale-110 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
                      >
                        <FaTrash className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Image 3 */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Image 3
                </label>
                <div className="relative">
                  {!frontendimage3 ? (
                    <label className="flex flex-col items-center justify-center w-full h-48 transition-all duration-300 border-2 border-gray-300 border-dashed cursor-pointer rounded-2xl hover:border-blue-500 bg-gray-50 hover:bg-blue-50/50 group">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <MdUpload className="w-12 h-12 mb-2 text-gray-400 transition-colors duration-300 group-hover:text-blue-500" />
                        <p className="text-sm font-medium text-gray-500 transition-colors duration-300 group-hover:text-blue-600">
                          Click to upload
                        </p>
                        <p className="text-xs text-gray-400">
                          Optional
                        </p>
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
                    <div className="relative group">
                      <img
                        src={frontendimage3}
                        alt="Preview"
                        className="object-cover w-full h-48 shadow-lg rounded-2xl"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setfrontendImage3(null);
                          setbackendImage3(null);
                        }}
                        className="absolute p-2.5 text-white bg-gradient-to-r from-red-500 to-red-600 rounded-xl top-2 right-2 hover:shadow-xl hover:scale-110 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
                      >
                        <FaTrash className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs text-center text-gray-500">
              <span className="text-red-500">*</span> Main image is required. Upload high-quality images to attract more guests
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col gap-4 pt-4 border-t-2 border-gray-100 sm:flex-row">
            <button
              type="submit"
              className="flex-1 py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <FaCheckCircle className="transition-transform duration-300 group-hover:scale-110" />
              {adding ? "Publishing..." : "Update Listing"}
            </button>

            <button
              type="button"
              onClick={() => setUpdatePop(false)}
              className="px-8 py-4 font-semibold text-gray-700 transition-all duration-300 bg-gray-200 rounded-2xl hover:bg-gray-300 hover:scale-[1.02] hover:shadow-lg"
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
