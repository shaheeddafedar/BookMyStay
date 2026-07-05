


import React, { useContext } from "react";
import { GiConfirmed } from "react-icons/gi";
import { bookingDataContext } from "../context/Bookingcontext";

export default function Booked() {
    let { bookingData } = useContext(bookingDataContext)

    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        return new Date(dateString).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    return (
        <div className="w-full max-w-2xl p-4 mx-auto">
            <div className="overflow-hidden bg-white shadow-lg rounded-2xl">
                {/* Header */}
                <div className="px-6 py-8 text-center">
                    <GiConfirmed className="w-20 h-20 mx-auto text-green-500" />
                    <h2 className="mt-3 text-2xl font-bold text-gray-800">Booking Confirmed!</h2>
                    <p className="text-sm text-gray-500">Your reservation is confirmed</p>
                </div>

                {/* Details */}
                <div className="px-6 pb-6 space-y-3">
                    {/* Booking ID */}
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-sm font-medium text-gray-600">Booking ID</span>
                        <span className="text-sm font-semibold text-gray-800">{bookingData?._id || "N/A"}</span>
                    </div>

                    {/* Owner */}
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-sm font-medium text-gray-600">Owner</span>
                        <span className="text-sm text-gray-800">{bookingData?.host?.email || "N/A"}</span>
                    </div>

                    {/* Check In */}
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-sm font-medium text-gray-600">Check In</span>
                        <span className="text-sm text-gray-800">{formatDate(bookingData?.checkIn)}</span>
                    </div>

                    {/* Check Out */}
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-sm font-medium text-gray-600">Check Out</span>
                        <span className="text-sm text-gray-800">{formatDate(bookingData?.checkOut)}</span>
                    </div>

                    {/* Total Rent */}
                    <div className="flex items-center justify-between px-4 py-3 bg-green-50 rounded-xl">
                        <span className="text-sm font-semibold text-gray-700">Total Rent</span>
                        <span className="text-lg font-bold text-green-600">₹{bookingData?.totalRent || "0"}</span>
                    </div>

                    {/* Duration */}
                    {bookingData?.checkIn && bookingData?.checkOut && (
                        <div className="pt-2 text-sm text-center text-gray-500">
                            📅 {Math.ceil(
                                (new Date(bookingData.checkOut) - new Date(bookingData.checkIn)) / 
                                (1000 * 60 * 60 * 24)
                            )} days stay
                        </div>
                    )}

                    {/* Home Button */}
                    <button 
                        onClick={() => window.location.href = "/"}
                        className="w-full py-3 mt-4 font-semibold text-white transition-colors bg-blue-600 rounded-xl hover:bg-blue-700"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
}
