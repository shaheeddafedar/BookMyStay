import React, { useContext, useEffect, useState } from "react";

import { RxCross1 } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";
import { ListingDataContext } from "../context/ListingContext";

export default function Booking({ bookingPopup, setBookingPopup }) {
  let [miniDate, setMiniDate] = useState("");

    const {
      cardDetails,
      setCardDetails,
    } = useContext(ListingDataContext);

  useEffect(() => {
    let today = new Date().toISOString().split("T")[0];
    setMiniDate(today);
  }, []);

  return (
    <div>
      {bookingPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-[100] p-4">
          <div className="relative w-full max-w-md mx-auto">
            {/* Close Button */}
            <button
              className="absolute z-50 flex items-center justify-center w-10 h-10 transition-all duration-300 shadow-lg cursor-pointer md:w-12 md:h-12 -top-3 -right-3 md:-top-4 md:-right-4 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl hover:shadow-2xl hover:scale-110 group"
              onClick={() => setBookingPopup(false)}
              aria-label="Close booking form"
            >
              <RxCross1 className="w-5 h-5 text-white transition-transform duration-300 md:w-6 md:h-6 group-hover:rotate-90" />
            </button>

            {/* Booking Form */}
            <form className="w-full overflow-hidden bg-white shadow-2xl rounded-2xl">
              {/* Header */}
              <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700">
                <h1 className="text-2xl font-bold text-center text-white md:text-3xl">
                  Confirm & Book
                </h1>
              </div>

              <div className="p-6 space-y-5">
                <div className="space-y-4">
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
                      name="checkIn"
                      className="w-full h-12 px-4 text-gray-700 transition-all duration-300 border-2 border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      required
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
                      min={miniDate}
                      id="checkOut"
                      name="checkOut"
                      className="w-full h-12 px-4 text-gray-700 transition-all duration-300 border-2 border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      required
                    />
                  </div>
                </div>

                {/* Book Now Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base  'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]"
                >
                  <FaCheckCircle className="text-sm" />
                  Book Now
                </button>
              </div>
            </form>
          </div>
                <div
        className="max-w-[450px] w-[90%] h-[450px]
bg-
[#f7fbfcfe] p-[20px] rounded-lg flex items-center justify-center flex-col gap-[10px]
border-[1px]
border
[#e2e1e1]"
      >
      <div className='w-[95%] h-[30%] border-[1px] border-[#dedddd] rounded-1g flex justify-center items-center gap-[8px] p-[20px] overflow-hidden'></div>
     <div><img src={cardDetails.image1} alt="" srcset="" /></div>
<div className='w-[80%] h-[100px] gap-[5px]'>
<h1 className='w-[90%] truncate'>{`IN $
{ cardDetails.landMark.toUpperCase()}, ${cardDetails.
city.toUpperCase()} `}</h1>
<h1>{cardDetails.title.toUpperCase()}</h1>
<h1>{cardDetails.category.toUpperCase()}</h1>
</div>             
      </div>
        </div>
        
      )}
    </div>
  );
}
