import React, { useContext } from "react";
import { GiConfirmed } from "react-icons/gi";
import { bookingDataContext } from "../context/Bookingcontext";

export default function Booked() {
    let {bookingData} = useContext(bookingDataContext)
  return (
    <div className="border border-black flex flex-col gap-[20px] p-[20px] md:w-[80%] rounded-lg shadow-lg">

      <div className="w-full flex items-center justify-center flex-col gap-[20px] font-semibold text-[20px]">
        <GiConfirmed className="w-[100px] h-[100px] text-green-600" />
        <h2>Booking Confirmed</h2>
      </div>

      <div className="w-full flex items-center justify-between text-[16px] md:text-[18px]">
        <span>Booking ID:</span>
        <span>{bookingData?._id}</span>
      </div>

      <div className="w-full flex items-center justify-between text-[16px] md:text-[18px]">
        <span>Owner Details:</span>
        <span>{bookingData?.host?.email}</span>
      </div>

      <div className="w-full flex items-center justify-between text-[16px] md:text-[18px]">
        <span>Check In:</span>
        <span>{bookingData?.checkIn && 
             new Date(bookingData.checkIn).toLocaleDateString()
            }</span>
      </div>

      <div className="w-full flex items-center justify-between text-[16px] md:text-[18px]">
        <span>Check Out:</span>
        <span>{bookingData?.checkOut &&
         new Date(bookingData.checkOut).toLocaleDateString()
            }</span>
      </div>

      <div className="w-full flex items-center justify-between text-[16px] md:text-[18px]">
        <span>Total Rent:</span>
        <span>₹{bookingData?.totalRent}</span>
      </div>

    </div>
  );
}