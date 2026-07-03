import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
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
  FaTrash,
  FaStar,
} from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { GiHouse } from "react-icons/gi";
import { MdDescription, MdUpload } from "react-icons/md";

import { ListingDataContext } from "../context/ListingContext";
import { userDataContext } from "../context/UserContext";
import { authDataContext } from "../context/Authcontext";

import Booking from "../components/Booking";
import EditingCard from "../components/EditingCard";

export default function ViewCard() {
  let { serverUrl } = useContext(authDataContext);
  
  const navigate = useNavigate();

  const {
    cardDetails,
    setCardDetails,
    updating,
    setUpdating,
    deleting,
    setDeleting,
  } = useContext(ListingDataContext);

  let { UserData } = useContext(userDataContext);

  let [updatePopup, setUpdatePop] = useState(false);
  let [bookingPopup, setBookingPopup] = useState(false);

  const handleDeleteListing = async () => {
    setDeleting(true);
    try {
      const result = await axios.delete(
        serverUrl + `/api/listing/delete/${cardDetails._id}`,
        { withCredentials: true },
      );
      console.log(result.data);
      setDeleting(false);
      navigate("/");
      toast.success("Listing Deleted successfully");
    } catch (error) {
      console.log(error);
      setDeleting(false);
    }
  };

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
          {cardDetails?.host === UserData?._id && (
            <div className="mb-8 text-center">
              <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
                Review Your Listing
              </h1>
              <p className="text-lg text-gray-600">
                ✨ Please review your property details before listing
              </p>
            </div>
          )}

          {cardDetails?.host !== UserData._id && (
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
              <div className="flex flex-wrap items-center justify-between mb-6">
                <div className="flex items-center gap-2 px-4 py-2 mx-auto border border-blue-200 rounded-full bg-blue-50 md:mx-0">
                  <FaMapMarkerAlt className="text-blue-600" />
                  <span className="font-semibold text-gray-700">
                    {cardDetails?.landMark && cardDetails.city
                      ? `${cardDetails?.landMark}, ${cardDetails.city}`
                      : "Location not provided"}
                  </span>
                </div>
                <div className="flex items-center gap-1 px-3 py-1.5 bg-green-50 rounded-full border border-green-200 mx-auto md:mx-0">
                  <FaStar className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-semibold text-green-700">
                    4.8
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-[10px] md:grid-cols-3">
                {/* Main Image */}
                <div className="md:col-span-2">
                  <div className="overflow-hidden shadow-lg rounded-2xl">
                    <img
                      src={cardDetails?.image1}
                      alt="Main Property"
                      className="object-cover w-full h-[400px] transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Side Images */}
                <div className="flex flex-col gap-4">
                  {cardDetails?.image2 && (
                    <div className="overflow-hidden shadow-lg rounded-2xl">
                      <img
                        src={cardDetails?.image2}
                        alt="Property Image 2"
                        className="object-cover w-full h-[192px] transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  )}

                  {cardDetails?.image3 && (
                    <div className="overflow-hidden shadow-lg rounded-2xl">
                      <img
                        src={
                          cardDetails?.image3 ||
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
                    {cardDetails?.category
                      ? cardDetails?.category.charAt(0).toUpperCase() +
                        cardDetails?.category.slice(1)
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
                {cardDetails?.host === UserData._id && (
                  <>
                    <button
                      className="flex-1 sm:flex-none px-8 py-3.5 text-white font-semibold rounded-xl bg-green-600 hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                      onClick={() => setUpdatePop((prev) => !prev)}
                    >
                      <FaPencilAlt className="text-sm" />
                      Edit
                    </button>

                    <button
                      className="flex-1 sm:flex-none px-8 py-3.5 text-white font-semibold rounded-xl bg-red-600 hover:bg-red-700 hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                      onClick={handleDeleteListing}
                      disabled={deleting}
                    >
                      <FaTrash className="text-sm" />
                      {deleting ? "Delete..." : "Delete"}
                    </button>
                  </>
                )}
{cardDetails?.host !== UserData?._id && (
  cardDetails?.isBooked ? (
    <button
      disabled
      className="flex-1 sm:flex-none px-8 py-3.5 bg-gray-400 text-white font-semibold rounded-xl cursor-not-allowed"
    >
      Already Booked
    </button>
  ) : (
    <button
      className="flex-1 sm:flex-none px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-[10px]"
      onClick={() => setBookingPopup((prev) => !prev)}
    >
      Reserve
    </button>
  )
)}          </div>
            </div>
          </div>
        </div>

        {/* update listing page    */}
        <EditingCard
          updatePopup={updatePopup}
          setUpdatePop={setUpdatePop}
        ></EditingCard>

        {/* Booking page */}
        <Booking
          bookingPopup={bookingPopup}
          setBookingPopup={setBookingPopup}
        ></Booking>
      </div>
    </>
  );
}
