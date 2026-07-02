import React, { useContext, useEffect, useState } from "react";

import { RxCross1 } from "react-icons/rx";
import { FaCheckCircle, FaStar } from "react-icons/fa";


import { ListingDataContext } from "../context/ListingContext";
import { bookingDataContext } from "../context/Bookingcontext";

export default function Booking({ bookingPopup, setBookingPopup }) {
  let [miniDate, setMiniDate] = useState("");

  let {
     checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    total,
    setTotal,
    night,
    setNight,
  } = useContext(bookingDataContext)
  const { cardDetails } = useContext(ListingDataContext);

useEffect(() => {
  if (checkIn && checkOut) {
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);

    const n = (outDate - inDate) / (24 * 60 * 60 * 1000);

    setNight(n);

const stayAmount = cardDetails.rent * n;

const serviceCharge = stayAmount * 0.07;

const tax = stayAmount * 0.07;


    if (n > 0) {
setTotal(stayAmount + serviceCharge + tax);    } else {
      setNight(0);
      setTotal(0);
    }
  }
}, [checkIn, checkOut, cardDetails.rent,total]);

  useEffect(() => {
    let today = new Date().toISOString().split("T")[0];
    setMiniDate(today);
  }, []);

  return (
    <div>
      {bookingPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-[100] p-4 overflow-y-auto">
          {/* Main Modal Container */}
          <div className="relative flex flex-col w-full max-w-4xl mx-auto my-8 overflow-hidden duration-200 bg-white shadow-2xl rounded-2xl md:flex-row animate-in fade-in zoom-in-95">
            
            {/* Close Button */}
            <button
              className="absolute z-50 flex items-center justify-center w-10 h-10 transition-all duration-300 shadow-lg cursor-pointer top-3 right-3 bg-gradient-to-r from-red-500 to-red-600 rounded-xl hover:shadow-2xl hover:scale-110 group"
              onClick={() => setBookingPopup(false)}
              aria-label="Close booking form"
            >
              <RxCross1 className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-90" />
            </button>

            {/* LEFT COLUMN: Booking Form */}
            <form className="flex flex-col justify-center w-full p-6 border-b border-gray-100 md:w-1/2 md:p-8 md:border-b-0 md:border-r">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
                  Confirm & Book
                </h1>
                <p className="mt-1 text-sm text-gray-500">Enter your dates to lock in your stay.</p>
              </div>

              <div className="space-y-5">
                {/* Check In */}
                <div>
                  <label
                    htmlFor="checkIn"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    Check In *
                  </label>
                  <input
                    type="date"
                    min={miniDate}
                    id="checkIn"
                    required
                    onChange={(e)=>
                      setCheckIn(e.target.value)
                    } 
                    value={checkIn}
                    name="checkIn"
                    className="w-full h-12 px-4 text-gray-700 transition-all duration-300 border-2 border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"

                  />
                </div>

                {/* Check Out */}
                <div>
                  <label
                    htmlFor="checkOut"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    Check Out *
                  </label>
                  <input
                    type="date"
                    min={checkIn || miniDate}
                    id="checkOut"
                    name="checkOut"
                     required
                    onChange={(e)=>
                      setCheckOut(e.target.value)
                    } 
                    value={checkOut}
                    className="w-full h-12 px-4 text-gray-700 transition-all duration-300 border-2 border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                {/* Book Now Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 mt-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] transform transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <FaCheckCircle className="text-sm" />
                  Book Now
                </button>
              </div>
            </form>

            {/* RIGHT COLUMN: Listing Summary Details Card */}
            <div className="flex flex-col justify-between w-full gap-6 p-6 md:w-1/2 bg-gray-50 md:p-8">
              <div className="space-y-4">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                  Reservation Summary
                </span>
                
                {/* Image Wrapper */}
                <div className="relative w-full h-48 overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl">
                  <img 
                    src={cardDetails?.image1} 
                    alt={cardDetails?.title} 
                    className="object-cover w-full h-full"
                  />
                  {/* Floating Rating Badge */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm border border-gray-100">
                    <FaStar className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold text-gray-800">{cardDetails?.ratings}</span>
                  </div>
                </div>

                {/* Text Metadata */}
                <div className="pt-2 space-y-2">
                  <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase truncate">
                    {`IN ${cardDetails?.landMark?.toUpperCase()}, ${cardDetails?.city?.toUpperCase()}`}
                  </p>
                  <h2 className="text-xl font-bold leading-tight text-gray-800 line-clamp-2">
                    {cardDetails?.title?.toUpperCase()}
                  </h2>
                  <p className="text-sm font-medium tracking-wider uppercase text-blue-600/90">
                    {cardDetails?.category?.toUpperCase()}
                  </p>
                </div>
              </div>

              {/* Dynamic Information Box (Placeholder matching your bottom empty div) */}
              <div className="flex flex-col w-full gap-3 p-4 text-xs text-gray-500 bg-white border border-gray-200 rounded-xl">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span>Booking Price</span>
                </div>
                <p className="italic">
                  <span className="font-semibold">
                    {`₹${cardDetails.rent} X ${night} nights`}
                  </span>
                  <br />
                  <span className="">
                    {cardDetails.rent*night}
                  </span>
                </p>
              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}