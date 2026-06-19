import { React, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import { authDataContext } from "../context/Authcontext";

//react icons
import { FaUser } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { userDataContext } from "../context/UserContext";

function Login() {
  const { serverUrl, loading, setloading } = useContext(authDataContext);

  const { UserData, setUserData } = useContext(userDataContext);
  const navigate = useNavigate();

  //react hook
  let [show, setshow] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    setloading(true);
    try {
      e.preventDefault();
      let result = await axios.post(
        serverUrl + "/api/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true },
      );
      setloading(false);
      setUserData(result.data);
      navigate("/");
      console.log(result.data);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-50 to-indigo-100 pt-[330px] sm:pt-[230px] md:pt-[190px] lg:pt-[180px]">
        <div className="flex w-full overflow-hidden bg-white shadow-2xl max-w-7xl rounded-2xl">
          
          {/* Image Section - Hidden on mobile */}
          <div className="relative hidden md:block md:w-1/2">
            <div className="absolute inset-0 bg-[url('/bg1.jpg')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30">
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <h1 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                  Welcome Back to BookMyStay
                </h1>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2">
            <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-800"></div>

            <div className="p-5 sm:p-8 md:p-10">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                  Login to Your Account
                </h2>
              </div>

              <form className="space-y-5" onSubmit={handleLogin}>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <MdOutlineAlternateEmail className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full py-3 pl-10 pr-4 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                    <input
                      type={show ? "text" : "password"}
                      placeholder="Enter your password"
                      minLength={6}
                      className="w-full py-3 pl-10 pr-12 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                    {!show && (
                      <IoMdEyeOff
                        className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 cursor-pointer right-3 top-1/2 hover:text-gray-600"
                        onClick={() => setshow((prev) => !prev)}
                      />
                    )}
                    {show && (
                      <IoMdEye
                        className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 cursor-pointer right-3 top-1/2 hover:text-gray-600"
                        onClick={() => setshow((prev) => !prev)}
                      />
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 font-bold text-white transition-all duration-300 transform rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:scale-[1.02] hover:shadow-lg"
                >
                  {loading ? "Loading..." : "Login"}
                </button>

                <div className="pt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-700"
                    >
                      Create Account
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;