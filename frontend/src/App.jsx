//external import
import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";


//local import
import Home from "./pages/Home";
import Singup from "./pages/Signup";
import Login from "./pages/Login";
import Listingpage1 from "./pages/listingpage1";
import Listingpage2 from "./pages/Listingpage2";
import Listingpage3 from "./pages/Listingpage3";
import Mylisting from "./pages/Mylisting";
import ViewCard from "./pages/ViewCard";
import MyBooking from "./pages/MyBooking";



import { userDataContext } from "./context/UserContext";
import Booked from "./pages/Booked";
import BookingDetails from "./pages/BookingDetails";
// import './App.css'
function App() {
  let { UserData } = useContext(userDataContext);
  console.log("UserData =", UserData);
  return (
    <>
          <Toaster position="top-right" />

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signup" element={<Singup></Singup>}></Route>
        <Route
          path="/login"
          element={!UserData ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/listingpage1"
          element={UserData ? <Listingpage1 /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/listingpage2"
          element={UserData ? <Listingpage2 /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/listingpage3"
          element={UserData ? <Listingpage3 /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/Mylisting"
          element={UserData ? <Mylisting /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/ViewCard"
          element={UserData ? <ViewCard /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/MyBooking"
          element={UserData ? <MyBooking/> : <Navigate to="/" />}
        ></Route>
           <Route
          path="/Booked"
          element={UserData ? <Booked/> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/BookingDetails/:id"
          element={UserData ? <BookingDetails/> : <Navigate to="/" />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
