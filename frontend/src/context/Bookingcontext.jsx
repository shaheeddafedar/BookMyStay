import axios from "axios";
import React, { createContext, useContext, useState } from "react";import { userDataContext } from "./UserContext";
import { authDataContext } from "./Authcontext";
import { ListingDataContext } from "./ListingContext";
export const bookingDataContext = createContext();

export default function Bookingcontext({ children }) {
  let [checkIn, setCheckIn] = useState("");
  let [checkOut, setCheckOut] = useState("");
  let [total, setTotal] = useState(0);
  let [night, setNight] = useState(0);
  let[bookingData,setBookingData] = useState([])

let {serverUrl} = useContext(authDataContext)
let {getCurrentUser} =useContext(userDataContext)
let {getListing} = useContext(ListingDataContext)


    const handleBooking = async (id) => {
      try {
      let result = await axios.post(serverUrl+`/api/booking/create/${id}`,{
        checkIn,checkOut,totalRent:total
      },{withCredentials:true})

      await getCurrentUser()
      await getListing()
      setBookingData(result.data)
      console.log(result.data);
      
      } catch (error) {
        console.log(error);
        setBookingData(null)
      }
    }

  let value = {
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
  };
  return (
      <bookingDataContext.Provider value={value}>
        {children}
      </bookingDataContext.Provider>
  );
}
