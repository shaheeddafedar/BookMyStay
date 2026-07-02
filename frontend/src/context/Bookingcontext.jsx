import React, { createContext, useState } from "react";export const bookingDataContext = createContext();

export default function Bookingcontext({ children }) {
  let [checkIn, setCheckIn] = useState("");
  let [checkOut, setCheckOut] = useState("");
  let [total, setTotal] = useState(0);
  let [night, setNight] = useState(0);

  let value = {
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    total,
    setTotal,
    night,
    setNight,
  };
  return (
      <bookingDataContext.Provider value={value}>
        {children}
      </bookingDataContext.Provider>
  );
}
