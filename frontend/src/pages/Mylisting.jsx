import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useContext } from "react";
import { userDataContext } from "../context/UserContext";
import Card from "../components/Card";

export default function Mylisting() {
  let navigate = useNavigate();
  let {UserData} = useContext(userDataContext)
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
                    {UserData.listing && UserData.listing.length > 0 ? (
                      UserData.listing.map((list) => (
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
                          <svg
                            className="w-10 h-10 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-700">
                          No Listing found
                        </h3>
                        <p className="text-sm text-gray-500">
                          Do Listing Your House First
                        </p>
                      </div>
                    )}
        I{" "}
      </div>
    </div>
  );
}
