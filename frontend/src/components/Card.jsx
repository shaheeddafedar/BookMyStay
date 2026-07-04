import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { userDataContext } from '../context/UserContext';
import { ListingDataContext } from "../context/ListingContext";

import { FaHeart, FaRegHeart, FaStar, FaMapMarkerAlt, 
  FaRupeeSign, FaBed, FaBath, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GiConfirmed } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

export default function Card({ title, landMark, image1, image2, image3, rent, city, id, ratings, like, isBooked, host }) {
  let navigate = useNavigate()
  let { UserData } = useContext(userDataContext)
  let { handleViewCard } = useContext(ListingDataContext)

  const handleClick = () => {
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
    <div 
      className='group w-full max-w-[350px] h-[420px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:scale-[1.02] hover:shadow-blue-200/50 relative' 
      onClick={handleClick}
    >    
      <div className='relative w-full h-[65%] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden'>
        <div className="absolute z-10 flex flex-col gap-2 top-3 left-3">
          {isBooked && (
            <div className='flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full shadow-lg sm:text-xs backdrop-blur-sm border border-white/20'>
              <GiConfirmed className='w-3 h-3 text-white sm:w-3.5 sm:h-3.5' />
              <span>Booked</span>
            </div>
          )}
          
          {isBooked &&  host === UserData?._id &&(
            <div className='flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-semibold text-emerald-700 bg-emerald-50/95 rounded-full shadow-lg sm:text-xs backdrop-blur-sm border border-emerald-200'>
              <GiConfirmed className='w-3 h-3 text-emerald-500 sm:w-3.5 sm:h-3.5' />
              <span>Cancel Booking</span>
            </div>
          )}
        </div>

        {/* Image */}
        <img
          src={images[currentImage] || "https://via.placeholder.com/400x300?text=No+Image"}    
          alt={title}
          className='object-cover w-full h-full transition-transform duration-700 group-hover:scale-110'
        />
        
        {/* Gradient Overlay for better text visibility */}
        <div className='absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:opacity-100'></div>
        
        {/* Image Counter Badge */}
        {images.length > 1 && (
          <div className='absolute px-3 py-1 text-xs font-medium text-white transform -translate-x-1/2 border rounded-full bottom-3 left-1/2 bg-black/70 backdrop-blur-sm border-white/10'>
            {currentImage + 1} / {images.length}
          </div>
        )}
        
        {/* Navigation Arrows - Modern Style */}
        {images.length > 1 && ( 
          <>
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className='absolute p-1.5 transition-all duration-300 -translate-y-1/2 rounded-full opacity-0 left-2 top-1/2 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl hover:scale-110 group-hover:opacity-100 backdrop-blur-sm'
            >
              <FaChevronLeft className='w-3 h-3 text-gray-700' />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className='absolute p-1.5 transition-all duration-300 -translate-y-1/2 rounded-full opacity-0 right-2 top-1/2 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl hover:scale-110 group-hover:opacity-100 backdrop-blur-sm'
            >
              <FaChevronRight className='w-3 h-3 text-gray-700' />
            </button>
          </>
        )}
        
        {/* Like Button - Improved */}
        <button
          onClick={(e) => { e.stopPropagation(); setIsLiked((prev) => !prev); }}
          className='absolute p-2.5 transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-full shadow-lg top-3 right-3 hover:scale-110 hover:shadow-xl'
        >
          {isLiked ? (
            <FaHeart className='w-4 h-4 text-red-500 animate-pulse' />
          ) : (
            <FaRegHeart className='w-4 h-4 text-gray-700 transition-colors hover:text-red-500' />
          )}
        </button>
      </div>
      
      {/* Content Container */}
      <div className='w-full h-[35%] px-4 py-3 flex flex-col justify-between bg-white'>
        {/* Top Section */}
        <div>
          {/* Location */}
          <div className='flex items-center gap-1.5 text-xs text-gray-500'>
            <FaMapMarkerAlt className='flex-shrink-0 w-3 h-3 text-red-400' />
            <span className='font-medium truncate'>
              {landMark?.toUpperCase() || 'Unknown'}, {city?.toUpperCase() || 'Unknown'}
            </span>
          </div>
          
          {/* Title */}
          <h3 className='mt-1 text-sm font-semibold leading-tight text-gray-800 line-clamp-2'>
            {title || 'Untitled Property'}
          </h3>
        </div>
        
        {/* Bottom Section */}
        <div className='flex items-center justify-between pt-2 mt-2 border-t border-gray-100'>
          {/* Price */}
          <div className='flex items-baseline gap-1'>
            <FaRupeeSign className='w-3.5 h-3.5 text-gray-600' />
            <span className='text-lg font-bold text-gray-800'>
              {rent || '0'}
            </span>
            <span className='text-xs font-medium text-gray-500'>/month</span>
          </div>
          
          {/* Rating */}
          <div className='flex items-center gap-1.5 bg-gradient-to-r from-amber-50 to-yellow-50 px-2.5 py-1 rounded-full border border-yellow-200/50'>
            <FaStar className='w-3 h-3 text-yellow-500 fill-yellow-500' />
            <span className='text-xs font-bold text-gray-700'>{ratings || '4.5'}</span>
            <span className='text-[10px] text-gray-400'>({Math.floor(Math.random() * 50) + 10})</span>
          </div>
        </div>
      </div>
    </div>
  )
}