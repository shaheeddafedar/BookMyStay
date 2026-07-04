import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

import { userDataContext } from "./UserContext";
import { authDataContext } from "./Authcontext";
import { ListingDataContext } from "./ListingContext";
import { useNavigate } from "react-router-dom";

export const bookingDataContext = createContext();

export default function Bookingcontext({ children }) {
  let navigate = useNavigate();

  let [checkIn, setCheckIn] = useState("");
  let [checkOut, setCheckOut] = useState("");
  let [total, setTotal] = useState(0);
  let [night, setNight] = useState(0);
  let [bookingData, setBookingData] = useState([]);
  let[booking,setBooking] = useState(false)

  let { serverUrl } = useContext(authDataContext);
  let { getCurrentUser } = useContext(userDataContext);
  let { getListing, cardDetails } = useContext(ListingDataContext);

  const handleBooking = async (id) => {
    if (cardDetails?.isBooked) {
      toast.error("This property is already booked");
      navigate("/");
      return;
    }
    try {
      let result = await axios.post(
        serverUrl + `/api/booking/create/${id}`,
        {
          checkIn,
          checkOut,
          totalRent: total,
        },
        { withCredentials: true },
      );

      await getCurrentUser();
      await getListing();
      setBookingData(result.data);
      toast.success("Booking Added successfully");
      navigate("/MyBooking");
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      setBookingData(null);
    }
  };

  const cancelBookings = async (id) => {
    try {
      let result = await axios.delete(serverUrl + `/api/booking/cancel/${id}`, {
        withCredentials: true,
      });
      await getCurrentUser();
      await getListing();
      console.log(result.data);
      toast.success("Booking Canceled successfully");
      navigate("/");
    } catch (error) {
      console.log(`Cancel Booking ${error}`);
    }
  };

  let value = {
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    total,
    setTotal,
    night,
    setNight,
    bookingData,
    setBookingData,
    handleBooking,
    cancelBookings,
  };
  return (
    <bookingDataContext.Provider value={value}>
      {children}
    </bookingDataContext.Provider>
  );
}
