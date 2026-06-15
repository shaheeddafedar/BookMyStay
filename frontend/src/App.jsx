//external import
import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

//local import
import Home from "./pages/Home";
import Singup from "./pages/Signup";
import Login from "./pages/Login";
import Listingpage1 from "./pages/listingpage1";
import Listingpage2 from "./pages/Listingpage2";
import Listingpage3 from "./pages/Listingpage3";
import { userDateContext } from "./context/UserContext";
// import './App.css'
function App() {
  let { UserData } = useContext(userDateContext);
  console.log("UserData =", UserData);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signup" element={<Singup></Singup>}></Route>
        <Route
          path="/login"
          element={!UserData ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/listingpage1"
          element={UserData ? <Listingpage1 /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/listingpage2"
          element={UserData ? <Listingpage2 /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/listingpage3"
          element={UserData ? <Listingpage3 /> : <Navigate to="/login" />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
