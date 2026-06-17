import React, { useContext } from 'react'

import Navbar  from '../components/Navbar'
import Card from '../components/Card'
import { ListingDataContext } from '../context/ListingContext'

function Home() {
  let {listingdata,setlistingdata} = useContext(ListingDataContext)

  return (
    <div>
      <Navbar></Navbar>
      <div className='w-[100vw] h-[77vh] flex items-center justify-center gap-[25px] flex-wrap mt-[250px] md:mt-[180px] bg-red-400'>
        {listingdata.map((list)=>(
          <Card title={list.title} landMark={list.landMark} city={list.city} image1={list.image1} image2={list.image2} image3={list.image3} rent={list.rent} id={list.id} key={list._id} />
        ))}
      </div>
      homepage
    </div>
  )
}

export default Home
