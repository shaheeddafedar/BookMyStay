import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Mylisting() {
  let navigate = useNavigate();
  return (
    <div className="w-[100vw] min-h-[100vh] flex items-center justify-start flex-col gap-[50px] relative">
   <div
  className="absolute top-[10%] left-[30px] w-[50px] h-[50px] bg-blue-600 cursor-pointer rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg"
  onClick={() => navigate("/")}
>
  <FaArrowLeftLong className="w-[25px] h-[25px] text-white" />
</div>

      <div className="w-[50%] h-[10%] border-[2px] border-[#908c8c] p-[15px] flex items-center justify-center text-[30px] rounded-md md:w-[600px] text-[#613b3b]  font-semibold mt-[20px]">
        My Listing
      </div>
      <div
        className="w-[100%] h-[90%] flex items-center
justify-center gap-[25px] flex-wrap mt-[30px]"
      >
        I{" "}
      </div>
    </div>
  );
}
