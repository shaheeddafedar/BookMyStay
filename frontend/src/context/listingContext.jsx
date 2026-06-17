import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Children } from "react";
import { createContext } from "react";
import axios from "axios";
import { authDataContext } from "./Authcontext";
import { useNavigate } from "react-router-dom";

export const ListingDataContext = createContext();

export default function ListingContext({ children }) {
      let navigate = useNavigate();

  let { serverUrl } = useContext(authDataContext);

  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [rent, setRent] = useState("");
  let [city, setCity] = useState("");
  let [landMark, setLandMark] = useState("");
  let [category, setCategory] = useState("");

  let [frontendimage1, setfrontendImage1] = useState(null);
  let [frontendimage2, setfrontendImage2] = useState(null);
  let [frontendimage3, setfrontendImage3] = useState(null);

  let [backendimage1, setbackendImage1] = useState(null);
  let [backendimage2, setbackendImage2] = useState(null);
  let [backendimage3, setbackendImage3] = useState(null);

  let [adding, setadding] = useState(false);
  let [listingdata, setlistingdata] = useState([]);

  const handleaddListing = async () => {
    try {
      setadding(true)
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("rent", rent);
      formData.append("city", city);
      formData.append("landMark", landMark);
      formData.append("category", category);

      formData.append("image1", backendimage1);
      formData.append("image2", backendimage2);
      formData.append("image3", backendimage3);

      const result = await axios.post(
        serverUrl + "/api/listing/add",
        formData,
        { withCredentials: true },
      );
      setadding(false)
      console.log(result);
      
      navigate("/");
      setTitle("");
      setDescription("");
      setRent("");
      setCity("");
      setCategory("");
      setLandMark("");
      setCategory("");

      setfrontendImage1(null);
      setfrontendImage2(null);
      setfrontendImage3(null);

      setbackendImage1(null);
      setbackendImage2(null);
      setbackendImage3(null);
    } catch (error) {
     setadding(false)
      console.log(error);
    }
  };


const getListing = async () => {
  try {
    let result = await axios.get(serverUrl+"/api/listing/get",{withCredentials:true})
    setlistingdata(result.data)
  } catch (error) {
    console.log(error)
  }
}


  let value = {
    title,
    setTitle,

    description,
    setDescription,

    rent,
    setRent,

    city,
    setCity,

    landMark,
    setLandMark,

    category,
    setCategory,
    frontendimage1,
    setfrontendImage1,
    frontendimage2,
    setfrontendImage2,
    frontendimage3,
    setfrontendImage3,

    backendimage1,
    setbackendImage1,
    backendimage2,
    setbackendImage2,
    backendimage3,
    setbackendImage3,

    handleaddListing,

    adding,setadding,

    listingdata,setlistingdata
  };

  return (
    <div>
      <ListingDataContext.Provider value={value}>
        {children}
      </ListingDataContext.Provider>
    </div>
  );
}
