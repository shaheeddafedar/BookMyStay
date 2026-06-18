import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { ListingDataContext } from '../context/ListingContext'

function Home() {
  let { listingdata, setlistingdata } = useContext(ListingDataContext)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navbar />
      
      <div className="w-full px-4 py-8 md:px-6 sm:py-10">
        <div className="mx-auto max-w-7xl">
          
          {/* Optional: Add header */}
          <div className="mb-6 text-center sm:text-left">
            <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
              Available Properties
            </h2>
            <p className="text-sm text-gray-500">
              {listingdata?.length || 0} properties found
            </p>
          </div>

          {/* Cards Grid with proper top spacing */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center mt-[280px] md:mt-[190px]">
              {listingdata && listingdata.length > 0 ? (
              listingdata.map((list) => (
                <Card
                  key={list._id}
                  title={list.title}
                  landMark={list.landMark}
                  city={list.city}
                  image1={list.image1}
                  image2={list.image2}
                  image3={list.image3}
                  rent={list.rent}
                  id={list._id}
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-20 col-span-full">
                <div className="flex items-center justify-center w-20 h-20 mb-4 bg-gray-200 rounded-full">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700">No properties found</h3>
                <p className="text-sm text-gray-500">Check back later for new listings</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home