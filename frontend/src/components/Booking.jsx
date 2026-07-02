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
        bookingData,setBookingData,
    handleBooking,
  } = useContext(bookingDataContext);
  const { cardDetails } = useContext(ListingDataContext);


  useEffect(() => {
    if (checkIn && checkOut) {
      const inDate = new Date(checkIn);
      const outDate = new Date(checkOut);
      const nights = (outDate - inDate) / (24 * 60 * 60 * 1000);
      setNight(nights);

      const stayAmount = cardDetails.rent * nights;
      const serviceCharge = stayAmount * 0.07;
      const tax = stayAmount * 0.07;

      if (nights > 0) {
        setTotal(stayAmount + serviceCharge + tax);
      } else {
        setNight(0);
        setTotal(0);
      }
    }
  }, [checkIn, checkOut, cardDetails.rent, total]);

  useEffect(() => {
    let today = new Date().toISOString().split("T")[0];
    setMiniDate(today);
  }, []);

  useEffect(() => {
  if (!bookingPopup) {
    setCheckIn("");
    setCheckOut("");
    setNight(0);
    setTotal(0);
  }
}, [bookingPopup]);

  return (
    <div>
      {bookingPopup && (
        <div className="fixed inset-0 flex items-start justify-center bg-black/60 backdrop-blur-sm z-[100] p-3 sm:p-4 overflow-y-auto">
          {/* Main Modal Container */}
          <div className="relative flex flex-col w-full max-w-4xl mx-auto my-4 overflow-hidden duration-200 bg-white shadow-2xl sm:my-8 rounded-2xl md:flex-row animate-in fade-in zoom-in-95">
            
            {/* Close Button */}
            <button
              className="absolute z-50 flex items-center justify-center w-8 h-8 transition-all duration-300 shadow-lg cursor-pointer sm:w-10 sm:h-10 top-2 right-2 sm:top-3 sm:right-3 bg-gradient-to-r from-red-500 to-red-600 rounded-xl hover:shadow-2xl hover:scale-110 group"
              onClick={() => setBookingPopup(false)}
              aria-label="Close booking form"
            >
              <RxCross1 className="w-4 h-4 text-white transition-transform duration-300 sm:w-5 sm:h-5 group-hover:rotate-90" />
            </button>

            {/* LEFT COLUMN: Booking Form */}
            <form className="flex flex-col justify-center w-full p-4 border-b border-gray-100 sm:p-6 md:w-1/2 md:p-8 md:border-b-0 md:border-r" onSubmit={(e)=>e.preventDefault}>
              <div className="mb-4 sm:mb-6">
                <h1 className="text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl">
                  Confirm & Book
                </h1>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">Enter your dates to lock in your stay.</p>
              </div>

              <div className="space-y-4 sm:space-y-5">
                {/* Check In */}
                <div>
                  <label
                    htmlFor="checkIn"
                    className="block text-xs font-semibold text-gray-700 sm:text-sm mb-1.5"
                  >
                    Check In *
                  </label>
                  <input
                    type="date"
                    min={miniDate}
                    id="checkIn"
                    required
                    onChange={(e) => setCheckIn(e.target.value)}
                    value={checkIn}
                    name="checkIn"
                    className="w-full h-10 px-3 text-sm text-gray-700 transition-all duration-300 border-2 border-gray-200 rounded-xl sm:h-12 sm:px-4 sm:text-base bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                {/* Check Out */}
                <div>
                  <label
                    htmlFor="checkOut"
                    className="block text-xs font-semibold text-gray-700 sm:text-sm mb-1.5"
                  >
                    Check Out *
                  </label>
                  <input
                    type="date"
                    min={checkIn || miniDate}
                    id="checkOut"
                    name="checkOut"
                    required
                    onChange={(e) => setCheckOut(e.target.value)}
                    value={checkOut}
                    className="w-full h-10 px-3 text-sm text-gray-700 transition-all duration-300 border-2 border-gray-200 rounded-xl sm:h-12 sm:px-4 sm:text-base bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                {/* Book Now Button */}
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 mt-1 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] transform transition-all duration-300 flex items-center justify-center gap-2 sm:py-3.5 sm:px-6 sm:mt-2 sm:text-base"
                  onClick={()=>handleBooking(cardDetails._id)}
                >
                  <FaCheckCircle className="text-xs sm:text-sm" />
                  Book Now
                </button>
              </div>
            </form>

            {/* RIGHT COLUMN: Listing Summary Details Card */}
            <div className="flex flex-col justify-between w-full gap-3 p-4 sm:p-6 md:w-1/2 bg-gray-50 md:p-8">
              <div className="space-y-3 sm:space-y-4">
                <span className="inline-block px-2.5 py-0.5 text-[10px] sm:text-xs font-bold tracking-wider text-blue-600 uppercase rounded-full bg-blue-50 sm:px-3 sm:py-1">
                  Reservation Summary
                </span>
                
                {/* Image Wrapper */}
                <div className="relative w-full h-32 overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl sm:h-40 md:h-48">
                  <img 
                    src={cardDetails?.image1} 
                    alt={cardDetails?.title} 
                    className="object-cover w-full h-full"
                  />
                  {/* Floating Rating Badge */}
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm border border-gray-100 sm:px-2.5 sm:py-1 sm:bottom-3 sm:right-3">
                    <FaStar className="w-3 h-3 text-yellow-500 fill-yellow-500 sm:w-3.5 sm:h-3.5" />
                    <span className="text-[10px] font-bold text-gray-800 sm:text-xs">{cardDetails?.ratings || "4.8"}</span>
                  </div>
                </div>

                {/* Text Metadata */}
                <div className="pt-1 space-y-1 sm:pt-2 sm:space-y-1.5">
                  <p className="text-[10px] font-semibold tracking-wide text-gray-500 uppercase truncate sm:text-xs">
                    {cardDetails?.landMark && cardDetails?.city
                      ? `IN ${cardDetails.landMark.toUpperCase()}, ${cardDetails.city.toUpperCase()}`
                      : "Location not provided"}
                  </p>
                  <h2 className="text-base font-bold leading-tight text-gray-800 line-clamp-2 sm:text-lg md:text-xl">
                    {cardDetails?.title?.toUpperCase() || "PROPERTY"}
                  </h2>
                  <p className="text-[11px] font-medium tracking-wider uppercase text-blue-600/90 sm:text-sm">
                    {cardDetails?.category?.toUpperCase() || "CATEGORY"}
                  </p>
                </div>
              </div>

              {/* Dynamic Information Box */}
              <div className="flex flex-col w-full gap-2 p-3 bg-white border border-gray-200 rounded-xl sm:p-4 sm:gap-3">
                <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                  <span className="text-xs font-semibold text-gray-700 sm:text-sm">Booking Details</span>
                  <span className="text-[10px] font-medium text-blue-600 sm:text-xs">{night || 0} night(s)</span>
                </div>
                
                <div className="space-y-1.5 text-xs sm:text-sm sm:space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rent per night</span>
                    <span className="font-medium text-gray-800">₹{cardDetails?.rent || 0}</span>
                  </div>
                  
                  {night > 0 && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal ({night} nights)</span>
                        <span className="font-medium text-gray-800">₹{Math.round(cardDetails.rent * night).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service Charge (7%)</span>
                        <span className="font-medium text-gray-800">₹{Math.round((cardDetails.rent * night * 7) / 100).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax (7%)</span>
                        <span className="font-medium text-gray-800">₹{Math.round((cardDetails.rent * night * 7) / 100).toLocaleString()}</span>
                      </div>
                    </>
                  )}
                </div>

                {night > 0 && (
                  <div className="flex items-center justify-between pt-1.5 mt-1.5 border-t-2 border-gray-200 sm:pt-2 sm:mt-2">
                    <span className="text-sm font-bold text-gray-800 sm:text-base">Total</span>
                    <span className="text-base font-bold text-blue-600 sm:text-lg md:text-xl">₹{Math.round(total).toLocaleString()}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}