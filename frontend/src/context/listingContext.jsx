import React from 'react'
import { useState } from 'react'
import { Children } from 'react'
import { createContext } from 'react'

export const listingDataContext = createContext()


export default function listingContext({Children}) {
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

  let value={

  }

  return (
    <div>
      <listingDataContext value={value}>
        {Children}
      </listingDataContext>
    </div>
  )
}
