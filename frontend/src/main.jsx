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

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Authcontext>
     <ListingDataContex>
      <UserContext>
        <App></App>
      </UserContext>
      </ListingDataContex>
    </Authcontext>
  </BrowserRouter>,
);
