import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { userDataContext } from '../context/UserContext';
import { ListingDataContext } from "../context/ListingContext";


import { FaHeart, FaRegHeart, FaStar, FaMapMarkerAlt, 
  FaRupeeSign, FaBed, FaBath } from 'react-icons/fa';
  import { GiConfirmed } from "react-icons/gi";




export default function Card({ title, landMark, image1, image2, image3, rent, city, id,ratings,like,isBooked,host }) {
let navigate = useNavigate()
 
let {UserData} = useContext(userDataContext)
let {handleViewCard} = useContext(ListingDataContext)

const handleClick = () =>{
  if (UserData) {
    handleViewCard(id)
  } else {
      navigate("/login")
  }
}

  const [isLiked, setIsLiked] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [image1, image2, image3].filter(img => img);


  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
<div className='group w-full max-w-[350px] h-[420px] bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:scale-[1.02]' onClick={handleClick}>    
      {/* Image Container */}
      <div className='relative w-full h-[65%] bg-gray-200 overflow-hidden'>
          {isBooked && <div className='text-[green] bg-white rounded-lg absolute flex items-center justify-center right-12 top-1 gap-[5px] p-[5px]'> <GiConfirmed /> Booked</div>}

        <img
          src={images[currentImage] || "https://via.placeholder.com/400x300?text=No+Image"}
          alt={title}
          className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-110'
        />
        
        {/* Image Counter Badge */}
        {images.length > 1 && (
          <div className='absolute px-3 py-1 text-xs text-white transform -translate-x-1/2 rounded-full bottom-3 left-1/2 bg-black/60'>
            {currentImage + 1} / {images.length}
          </div>
        )}
        
        {/* Navigation Arrows */}
        {images.length > 1 && ( 
          <>
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className='absolute p-1 transition-opacity duration-300 -translate-y-1/2 rounded-full opacity-0 left-2 top-1/2 bg-white/80 hover:bg-white group-hover:opacity-100'
            >
              ◀
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className='absolute p-1 transition-opacity duration-300 -translate-y-1/2 rounded-full opacity-0 right-2 top-1/2 bg-white/80 hover:bg-white group-hover:opacity-100'
            >
              ▶
            </button>
          </>
        )}
        
        {/* Like Button */}
        <button
          onClick={(e) => { e.stopPropagation(); setIsLiked((prev) => !prev); }}
          className='absolute p-2 transition-transform duration-200 bg-white rounded-full shadow-md top-3 right-3 hover:scale-110'
        >
          {isLiked ? (
            <FaHeart className='w-4 h-4 text-red-500' />
          ) : (
            <FaRegHeart className='w-4 h-4 text-gray-600' />
          )}
        </button>
      </div>
      
      {/* Content Container */}
      <div className='w-full h-[35%] px-4 py-3 flex flex-col justify-between'>
        {/* Top Section */}
        <div>
          {/* Location */}
          <div className='flex items-center gap-1 text-xs text-gray-500'>
            <FaMapMarkerAlt className='w-3 h-3 text-red-400' />
            <span>{landMark?.toUpperCase() || 'Unknown'}, {city?.toUpperCase() || 'Unknown'}</span>
          </div>
          
          {/* Title */}
         <h3 className='mt-1 text-sm font-semibold text-gray-800 line-clamp-2'>
            {title || 'Untitled Property'}
          </h3>
        </div>
        
        {/* Bottom Section */}
        <div className='flex items-center justify-between mt-1'>
          {/* Price */}
          <div className='flex items-baseline gap-1'>
            <FaRupeeSign className='w-3 h-3 text-gray-600' />
            <span className='text-lg font-bold text-gray-800'>
              {rent|| '0'}
            </span>
            <span className='text-xs text-gray-500'>/month</span>
          </div>
          
          {/* Rating (Placeholder) */}
          <div className='flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded-full'>
            <FaStar className='w-3 h-3 text-yellow-500 fill-yellow-500' />
            <span className='text-xs font-semibold text-green-700'>{ratings}</span>
          </div>
        </div>
      </div>
    </div>
  );
}