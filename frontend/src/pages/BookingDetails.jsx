import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { GiConfirmed } from "react-icons/gi";
import { FaCalendarCheck, FaUser, FaEnvelope, FaRupeeSign, FaCalendarAlt } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";

import { authDataContext } from "../context/Authcontext";


export default function BookingDetails() {
    let { serverUrl } = useContext(authDataContext);
    const { id } = useParams();
    const [booking, setBooking] = useState(null);
const [loading, setLoading] = useState(true);

const getBooking = async () => {
  try {
    console.log("Booking ID:", id);
    const result = await axios.get(`${serverUrl}/api/booking/listing/${id}`, {
  withCredentials: true,
  
});

    console.log(result.data);

    setBooking(result.data);

    setLoading(false);

  } catch (error) {
    console.log(error);

    setLoading(false);
  }
};

    console.log(booking);
    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        return new Date(dateString).toLocaleDateString('en-IN', {
            
            day: 'numeric',
            month: 'short',
            year: 'numeric'
            
        });
    };


useEffect(() => {
  getBooking();
}, []);
    return (
        <div className="w-full max-w-3xl p-4 mx-auto sm:p-6 md:p-8">
            <div className="overflow-hidden bg-white border border-gray-100 shadow-2xl rounded-3xl">
                <div className="h-2 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500"></div>
                <div className="px-6 py-8 text-center sm:px-8 sm:py-10 md:px-10 md:py-12 bg-gradient-to-b from-emerald-50/50 to-white">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-2xl animate-pulse"></div>
                        <GiConfirmed className="relative w-20 h-20 mx-auto sm:w-24 sm:h-24 md:w-28 md:h-28 text-emerald-500 drop-shadow-lg" />
                    </div>
                    <h2 className="mt-4 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
                        🎉 Booking Confirmed!
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 sm:text-base">
                        Your reservation has been successfully confirmed
                    </p>
                    <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 bg-emerald-100 rounded-full">
                        <MdOutlineVerified className="w-4 h-4 text-emerald-600" />
                        <span className="text-xs font-medium text-emerald-700">Confirmed</span>
                    </div>
                </div>

                <div className="px-6 pb-6 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
                    <div className="p-4 mb-6 border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
                        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
                            <div className="flex items-center gap-2">
                                <FaCalendarCheck className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-semibold text-gray-600">Booking ID</span>
                            </div>
                            <span className="text-sm font-mono font-bold text-blue-700 bg-white px-4 py-1.5 rounded-lg shadow-sm border border-blue-100">
                             {booking?._id || "N/A"}
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="p-4 transition-shadow duration-300 border border-purple-100 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-md">
                            <div className="flex items-center gap-2 mb-2">
                                <FaUser className="w-4 h-4 text-purple-600" />
                                <span className="text-xs font-semibold tracking-wider text-purple-700 uppercase">Owner</span>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                                <FaEnvelope className="w-3.5 h-3.5 text-gray-400" />
                                <span className="text-sm font-medium text-gray-700 truncate">
                                    {booking?.host?.email || "N/A"}
                                </span>
                            </div>
                        </div>

                        <div className="p-4 transition-shadow duration-300 border bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl border-amber-100 hover:shadow-md">
                            <div className="flex items-center gap-2 mb-2">
                                <FaRupeeSign className="w-4 h-4 text-amber-600" />
                                <span className="text-xs font-semibold tracking-wider uppercase text-amber-700">Total Rent</span>
                            </div>
                            <div className="flex items-baseline gap-1 mt-1">
                                <span className="text-2xl font-bold text-gray-800">₹</span>
                                <span className="text-2xl font-bold text-gray-800">
                                    {booking?.totalRent || "0"}
                                </span>
                            </div>
                        </div>

                        <div className="p-4 transition-shadow duration-300 border bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border-emerald-100 hover:shadow-md">
                            <div className="flex items-center gap-2 mb-2">
                                <FaCalendarAlt className="w-4 h-4 text-emerald-600" />
                                <span className="text-xs font-semibold tracking-wider uppercase text-emerald-700">Check In</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-700">
                                {formatDate(booking?.checkIn)}
                            </span>
                        </div>

                        <div className="p-4 transition-shadow duration-300 border bg-gradient-to-br from-rose-50 to-red-50 rounded-2xl border-rose-100 hover:shadow-md">
                            <div className="flex items-center gap-2 mb-2">
                                <FaCalendarAlt className="w-4 h-4 text-rose-600" />
                                <span className="text-xs font-semibold tracking-wider uppercase text-rose-700">Check Out</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-700">
                                {formatDate(booking?.checkOut)}
                            </span>
                        </div>
                    </div>

                    {booking?.checkIn && booking?.checkOut && (
                        <div className="p-4 mt-6 border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
                            <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
                                <span className="text-sm font-medium text-gray-600">
                                    📅 Booking Duration
                                </span>
                                <span className="text-sm font-bold text-blue-700">
                                    {Math.ceil(
                                        (new Date(booking.checkOut) - new Date(booking.checkIn)) / 
                                        (1000 * 60 * 60 * 24)
                                    )} days
                                </span>
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col gap-3 mt-6 sm:flex-row">
                        <button 
                            onClick={() => window.print()}
                            className="flex-1 px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 bg-gray-100 rounded-xl hover:bg-gray-200 hover:shadow-md"
                        >
                            🖨️ Print Details
                        </button>
                        <button 
                            onClick={() => window.location.href = "/"}
                            className="flex-1 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-[1.02]"
                        >
                            🏠 Back to Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}