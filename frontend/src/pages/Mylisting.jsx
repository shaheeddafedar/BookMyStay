import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Mylisting() {
    let navigate = useNavigate()
  return (
    <div className='w-[100vw] min-h-[100vh] flex items-center justify-center flex-col gap-[10px] relative'>
      <div className='w-[50px] h- [50px] bg-[blue] cursor-pointer
absolute top-[10%] left-[30px] rounded-[50%] flex
items-center justify-center' onClick={()=>navigate("/")}
><FaArrowLeftLong  className='w-[55px] h-[50px] text-[white]'/>
</div>
    </div>
  )
}
