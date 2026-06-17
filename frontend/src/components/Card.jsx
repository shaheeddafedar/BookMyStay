import React from 'react'

export default function Card({title,landMark,image1,image2,image3,rent,city,id}) {
  return (
    <div className='w-[330px] max-w-[85%] h-[450px] flex items-start justify-start flex-col  rounded-lg cursor-pointer '>
    <div className="w-[100%] h-[67%] bg-gray-700 rounded-lg overflow-auto flex">
  <img
    src={image1}
    alt={title}
    className="w-[100%] flex-shrink-0"
  />
  <img
    src={image3}
    alt={title}
    className="w-[100%] flex-shrink-0"
  />
  <img
    src={image3}
    alt={title}
    className="w-[100%] flex-shrink-0"
  />
</div>
     <div className='w-[100%] h-[33%] py-[20px] flex flex-col gap-[3px]'>
<span>In {landMark?.toUpperCase()}</span>
      <span></span>
      <span></span>
     </div>
    </div>
  )
}
