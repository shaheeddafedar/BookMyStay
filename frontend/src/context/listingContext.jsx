import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Children } from 'react'
import { createContext } from 'react'
import axios from "axios";
import { authDataContext } from './Authcontext'

export const listingDataContext = createContext()


export default function ListingContext({children }) {
let {serverUrl} = useContext(authDataContext)


let [title, setTitle] = useState("");
let [description, setDescription] = useState("");
let [rent, setRent] = useState("");
let [city, setCity] = useState("");
let [landMark, setLandMark] = useState("");
let [category, setCategory] = useState("");

let [frontendimage1, frontendsetImage1] = useState(null);
let [frontendimage2, frontendsetImage2] = useState(null);
let [frontendimage3, frontendsetImage3] = useState(null);

let [backendimage1, backendsetImage1] = useState(null);
let [backendimage2, backendsetImage2] = useState(null);
let [backendimage3, backendsetImage3] = useState(null);



const handleaddListing = async()=>{
    try{
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
    
    const result = await axios.post(serverUrl+"/api/listing/add",formData,{withCredentials:true})
     console.log(result);
    } catch(error){
     console.log(error);
     
    }
}

let value = {
  title,setTitle,

  description,setDescription,

  rent,setRent,

  city,setCity,

  landMark,setLandMark,

  category,setCategory,

 frontendimage1, frontendsetImage1,
frontendimage2, frontendsetImage2,
frontendimage3, frontendsetImage3,

backendimage1, backendsetImage1,
backendimage2, backendsetImage2,
backendimage3, backendsetImage3

};

  return (
    <div>
      <listingDataContext.Provider value={value}>
        {children}
      </listingDataContext.Provider>
    </div>
  )
}
