import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";


import {
  FaMapMarkerAlt,
  FaHome,
  FaRupeeSign,
  FaPencilAlt,
  FaImage,
  FaBed,
  FaCity,
  FaTag,
  FaCheckCircle,
  FaTrash,
} from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { GiHouse } from "react-icons/gi";
import { MdDescription, MdUpload } from "react-icons/md";



import { ListingDataContext } from "../context/ListingContext";
import { authDataContext } from "../context/Authcontext";



export default function EditingCard({updatePopup, setUpdatePop}) {
      let { serverUrl } = useContext(authDataContext);

  const {
    cardDetails,
    setCardDetails,
    updating,
    setUpdating,
  } = useContext(ListingDataContext);



  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [rent, setRent] = useState("");
  let [city, setCity] = useState("");
  let [landMark, setLandMark] = useState("");

  useEffect(() => {
    if (cardDetails && updatePopup) {
      setTitle(cardDetails.title);
      setDescription(cardDetails.description);
      setRent(cardDetails.rent);
      setCity(cardDetails.city);
      setLandMark(cardDetails.landMark);
    }
  }, [cardDetails, updatePopup]);

  let [frontendimage1, setfrontendImage1] = useState(null);
  let [frontendimage2, setfrontendImage2] = useState(null);
  let [frontendimage3, setfrontendImage3] = useState(null);

  let [backendimage1, setbackendImage1] = useState(null);
  let [backendimage2, setbackendImage2] = useState(null);
  let [backendimage3, setbackendImage3] = useState(null);


  const handleUpdateListing = async (e) => {
    e.preventDefault();
    setUpdating(true);
    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("rent", rent);
      formData.append("city", city);
      formData.append("landMark", landMark);

      if (backendimage1) formData.append("image1", backendimage1);

      if (backendimage2) formData.append("image2", backendimage2);

      if (backendimage3) formData.append("image3", backendimage3);

      const result = await axios.post(
        serverUrl + `/api/listing/update/${cardDetails._id}`,
        formData,
        { withCredentials: true },
      );
      setCardDetails(result.data);
      setUpdating(false);
      toast.success("Listing updated successfully");

      setUpdatePop(false);
      setTitle("");
      setDescription("");
      setRent("");
      setCity("");
      setLandMark("");

      setfrontendImage1(null);
      setfrontendImage2(null);
      setfrontendImage3(null);

      setbackendImage1(null);
      setbackendImage2(null);
      setbackendImage3(null);
    } catch (error) {
      setUpdating(false);
      console.log(error);
    }
  };

  const handleImageUpload = (e, setFrontend, setBackend) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      toast.error("Please upload JPG, PNG, or WEBP image");
      e.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be less than 5MB");
      e.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setFrontend(event.target.result);
      setBackend(file);
    };
    reader.onerror = () => {
      toast.error("Failed to read image file");
    };
    reader.readAsDataURL(file);

    e.target.value = "";
  };


  return (
    <div>
      <>
      
              {updatePopup && (
                <div className="fixed inset-0 flex items-start justify-center bg-black/60 backdrop-blur-sm z-[100] p-4 overflow-y-auto">
                  <div className="relative w-full max-w-4xl my-4 md:my-8">
                    {/* Close Button */}
                    <button
                      className="absolute z-50 flex items-center justify-center w-10 h-10 transition-all duration-300 shadow-lg cursor-pointer md:w-12 md:h-12 -top-3 -right-3 md:-top-4 md:-right-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl hover:shadow-2xl hover:scale-110 group"
                      onClick={() => setUpdatePop(false)}
                    >
                      <RxCross1 className="w-5 h-5 text-white transition-transform duration-300 md:w-6 md:h-6 group-hover:rotate-90" />
                    </button>
      
                    {/* Main Form Card */}
                    <div className="overflow-hidden bg-white shadow-2xl rounded-2xl md:rounded-3xl">
                      <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
      
                      <form
                        className="p-4 sm:p-6 md:p-8 lg:p-10"
                        onSubmit={handleUpdateListing}
                      >
                        {/* Basic Information Section */}
                        <div className="mb-6 md:mb-10">
                          <h2 className="flex items-center gap-3 mb-4 text-xl font-bold text-gray-800 md:mb-6 md:text-2xl">
                            <GiHouse className="text-lg text-blue-600 md:text-2xl" />
                            Basic Information
                          </h2>
      
                          <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 md:grid-cols-2">
                            {/* Title */}
                            <div className="md:col-span-2">
                              <label className="block mb-1.5 md:mb-2 text-xs md:text-sm font-semibold text-gray-700">
                                Property Title *
                              </label>
                              <div className="relative">
                                <FaHome className="absolute text-sm text-gray-400 transform -translate-y-1/2 left-3 top-1/2 md:text-base" />
                                <input
                                  type="text"
                                  name="title"
                                  required
                                  placeholder="e.g., Luxury Villa with Pool, Cozy Apartment in City Center"
                                  className="w-full py-2.5 md:py-3 pl-9 md:pl-10 pr-4 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm md:text-base"
                                  id="title"
                                  onChange={(e) => setTitle(e.target.value)}
                                  value={title}
                                />
                              </div>
                            </div>
      
                            {/* Description */}
                            <div className="md:col-span-2">
                              <label className="block mb-1.5 md:mb-2 text-xs md:text-sm font-semibold text-gray-700">
                                Description *
                              </label>
                              <div className="relative">
                                <MdDescription className="absolute text-sm text-gray-400 transform -translate-y-1/2 left-3 top-5 md:text-base" />
                                <textarea
                                  name="description"
                                  required
                                  rows="4"
                                  placeholder="Describe your property - amenities, nearby attractions, unique features..."
                                  className="w-full py-2.5 md:py-3 pl-9 md:pl-10 pr-4 transition-all duration-300 border-2 border-gray-200 resize-none rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm md:text-base"
                                  id="description"
                                  onChange={(e) => setDescription(e.target.value)}
                                  value={description}
                                ></textarea>
                              </div>
                            </div>
      
                            {/* Rent */}
                            <div>
                              <label className="block mb-1.5 md:mb-2 text-xs md:text-sm font-semibold text-gray-700">
                                Rent per Month (₹) *
                              </label>
                              <div className="relative">
                                <FaRupeeSign className="absolute text-sm text-gray-400 transform -translate-y-1/2 left-3 top-1/2 md:text-base" />
                                <input
                                  type="number"
                                  name="rent"
                                  required
                                  placeholder="e.g., 25000"
                                  className="w-full py-2.5 md:py-3 pl-9 md:pl-10 pr-4 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm md:text-base"
                                  min={0}
                                  id="rent"
                                  onChange={(e) => setRent(e.target.value)}
                                  value={rent}
                                />
                              </div>
                            </div>
      
                            {/* City */}
                            <div>
                              <label className="block mb-1.5 md:mb-2 text-xs md:text-sm font-semibold text-gray-700">
                                City *
                              </label>
                              <div className="relative">
                                <FaCity className="absolute text-sm text-gray-400 transform -translate-y-1/2 left-3 top-1/2 md:text-base" />
                                <input
                                  type="text"
                                  name="city"
                                  required
                                  placeholder="e.g., Mumbai, Delhi, Bangalore"
                                  className="w-full py-2.5 md:py-3 pl-9 md:pl-10 pr-4 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm md:text-base"
                                  id="city"
                                  onChange={(e) => setCity(e.target.value)}
                                  value={city}
                                />
                              </div>
                            </div>
      
                            {/* Landmark */}
                            <div className="md:col-span-2">
                              <label className="block mb-1.5 md:mb-2 text-xs md:text-sm font-semibold text-gray-700">
                                Landmark *
                              </label>
                              <div className="relative">
                                <FaMapMarkerAlt className="absolute text-sm text-gray-400 transform -translate-y-1/2 left-3 top-1/2 md:text-base" />
                                <input
                                  type="text"
                                  name="landMark"
                                  required
                                  placeholder="Near Metro Station, Main Market etc."
                                  className="w-full py-2.5 md:py-3 pl-9 md:pl-10 pr-4 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm md:text-base"
                                  id="landMark"
                                  onChange={(e) => setLandMark(e.target.value)}
                                  value={landMark}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Images Section */}
                        <div className="mb-6 md:mb-10">
                          <h2 className="flex items-center gap-3 mb-4 text-xl font-bold text-gray-800 md:mb-6 md:text-2xl">
                            <FaImage className="text-lg text-purple-600 md:text-2xl" />
                            Property Images
                          </h2>
      
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
                            {/* Image 1 - Main Image */}
                            <div>
                              <label className="block mb-1.5 md:mb-2 text-xs md:text-sm font-semibold text-gray-700">
                                Main Image *
                              </label>
                              <div className="relative">
                                {!(frontendimage1 || cardDetails?.image1) ? (
                                  <label className="flex flex-col items-center justify-center w-full h-40 transition-all duration-300 border-2 border-gray-300 border-dashed cursor-pointer sm:h-48 rounded-xl hover:border-blue-500 bg-gray-50 hover:bg-blue-50">
                                    <div className="flex flex-col items-center justify-center pt-4 pb-5 sm:pt-5 sm:pb-6">
                                      <MdUpload className="w-8 h-8 mb-2 text-gray-400 sm:w-10 sm:h-10" />
                                      <p className="px-2 text-xs text-center text-gray-500 sm:text-sm">
                                        Click to upload
                                      </p>
                                      <p className="text-[10px] sm:text-xs text-gray-400">
                                        JPG, PNG, WEBP (Max 5MB)
                                      </p>
                                    </div>
                                    <input
                                      type="file"
                                      accept="image/jpeg,image/png,image/webp"
                                      className="hidden"
                                      onChange={(e) =>
                                        handleImageUpload(
                                          e,
                                          setfrontendImage1,
                                          setbackendImage1,
                                        )
                                      }
                                    />
                                  </label>
                                ) : (
                                  <div className="relative">
                                    <img
                                      src={frontendimage1 || cardDetails?.image1}
                                      alt="Main property preview"
                                      className="object-cover w-full h-40 sm:h-48 rounded-xl"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => {
                                        // Clear the image from state
                                        setfrontendImage1(null);
                                        setbackendImage1(null);
                                        // Also clear the image URL from cardDetails to remove it completely
                                        if (cardDetails?.image1) {
                                          setCardDetails({
                                            ...cardDetails,
                                            image1: null,
                                          });
                                        }
                                      }}
                                      className="absolute p-1.5 sm:p-2 text-white transition-all duration-300 bg-red-500 rounded-full top-2 right-2 hover:bg-red-600 hover:scale-110"
                                      aria-label="Remove main image"
                                    >
                                      <FaTrash className="w-3 h-3 sm:w-4 sm:h-4" />
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
      
                            {/* Image 2 */}
                            <div>
                              <label className="block mb-1.5 md:mb-2 text-xs md:text-sm font-semibold text-gray-700">
                                Image 2
                              </label>
                              <div className="relative">
                                {!(frontendimage2 || cardDetails?.image2) ? (
                                  <label className="flex flex-col items-center justify-center w-full h-40 transition-all duration-300 border-2 border-gray-300 border-dashed cursor-pointer sm:h-48 rounded-xl hover:border-blue-500 bg-gray-50 hover:bg-blue-50">
                                    <div className="flex flex-col items-center justify-center pt-4 pb-5 sm:pt-5 sm:pb-6">
                                      <MdUpload className="w-8 h-8 mb-2 text-gray-400 sm:w-10 sm:h-10" />
                                      <p className="px-2 text-xs text-center text-gray-500 sm:text-sm">
                                        Click to upload
                                      </p>
                                      <p className="text-[10px] sm:text-xs text-gray-400">
                                        Optional (Max 5MB)
                                      </p>
                                    </div>
                                    <input
                                      type="file"
                                      accept="image/jpeg,image/png,image/webp"
                                      className="hidden"
                                      onChange={(e) =>
                                        handleImageUpload(
                                          e,
                                          setfrontendImage2,
                                          setbackendImage2,
                                        )
                                      }
                                    />
                                  </label>
                                ) : (
                                  <div className="relative">
                                    <img
                                      src={frontendimage2 || cardDetails?.image2}
                                      alt="Property image 2 preview"
                                      className="object-cover w-full h-40 sm:h-48 rounded-xl"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setfrontendImage2(null);
                                        setbackendImage2(null);
                                        if (cardDetails?.image2) {
                                          setCardDetails({
                                            ...cardDetails,
                                            image2: null,
                                          });
                                        }
                                      }}
                                      className="absolute p-1.5 sm:p-2 text-white transition-all duration-300 bg-red-500 rounded-full top-2 right-2 hover:bg-red-600 hover:scale-110"
                                      aria-label="Remove image 2"
                                    >
                                      <FaTrash className="w-3 h-3 sm:w-4 sm:h-4" />
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
      
                            {/* Image 3 */}
                            <div>
                              <label className="block mb-1.5 md:mb-2 text-xs md:text-sm font-semibold text-gray-700">
                                Image 3
                              </label>
                              <div className="relative">
                                {!(frontendimage3 || cardDetails?.image3) ? (
                                  <label className="flex flex-col items-center justify-center w-full h-40 transition-all duration-300 border-2 border-gray-300 border-dashed cursor-pointer sm:h-48 rounded-xl hover:border-blue-500 bg-gray-50 hover:bg-blue-50">
                                    <div className="flex flex-col items-center justify-center pt-4 pb-5 sm:pt-5 sm:pb-6">
                                      <MdUpload className="w-8 h-8 mb-2 text-gray-400 sm:w-10 sm:h-10" />
                                      <p className="px-2 text-xs text-center text-gray-500 sm:text-sm">
                                        Click to upload
                                      </p>
                                      <p className="text-[10px] sm:text-xs text-gray-400">
                                        Optional (Max 5MB)
                                      </p>
                                    </div>
                                    <input
                                      type="file"
                                      accept="image/jpeg,image/png,image/webp"
                                      className="hidden"
                                      onChange={(e) =>
                                        handleImageUpload(
                                          e,
                                          setfrontendImage3,
                                          setbackendImage3,
                                        )
                                      }
                                    />
                                  </label>
                                ) : (
                                  <div className="relative">
                                    <img
                                      src={frontendimage3 || cardDetails?.image3}
                                      alt="Property image 3 preview"
                                      className="object-cover w-full h-40 sm:h-48 rounded-xl"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setfrontendImage3(null);
                                        setbackendImage3(null);
                                        if (cardDetails?.image3) {
                                          setCardDetails({
                                            ...cardDetails,
                                            image3: null,
                                          });
                                        }
                                      }}
                                      className="absolute p-1.5 sm:p-2 text-white transition-all duration-300 bg-red-500 rounded-full top-2 right-2 hover:bg-red-600 hover:scale-110"
                                      aria-label="Remove image 3"
                                    >
                                      <FaTrash className="w-3 h-3 sm:w-4 sm:h-4" />
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <p className="mt-3 text-[10px] sm:text-xs text-center text-gray-500">
                            * Main image is required. Upload high-quality images to
                            attract more guests
                          </p>
                        </div>
      
                        {/* Navigation Buttons */}
                        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                          <button
                            type="submit"
                            disabled={updating}
                            className="flex-1 py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                          >
                            <FaCheckCircle className="text-xs sm:text-sm" />
                            {updating ? "Updating..." : "Update Listing"}
                          </button>
      
                          <button
                            type="button"
                            onClick={() => setUpdatePop(false)}
                            className="px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 bg-gray-200 sm:px-8 sm:py-4 rounded-xl hover:bg-gray-300 sm:text-base"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                
              )}
      </>
    </div>
  )
}
