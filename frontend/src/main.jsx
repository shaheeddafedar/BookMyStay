//external import
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//internal import
import "./index.css";
import App from "./App.jsx";
import Authcontext from "./context/Authcontext.jsx";
import UserContext from "./context/UserContext.jsx";
import ListingDataContex from "./context/ListingContext.jsx";
import Bookingcontext from "./context/Bookingcontext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Authcontext>
     <ListingDataContex>
      <UserContext>
        <Bookingcontext>
        <App></App>
        </Bookingcontext>
      </UserContext>
      </ListingDataContex>
    </Authcontext>
  </BrowserRouter>,
);
