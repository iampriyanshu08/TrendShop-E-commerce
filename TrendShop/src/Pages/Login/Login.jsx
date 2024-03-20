import React, { useState } from "react";

import img from "../../assets/login3.jpg";
import img2 from "../../assets/login.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseAuth/FirebaseAuth";

const Login = () => {
  const navigateToHome = useNavigate();

  const [usersignup, setusersignup] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setusersignup({ ...usersignup, [e.target.name]: e.target.value });
    // console.log(usersignup)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usersignup.email || !usersignup.password) {
      return toast.error("please fill all the required fields");
    } else {
      signInWithEmailAndPassword(auth, usersignup.email, usersignup.password)
        .then((res) => {
          navigateToHome("/");
        })
        .catch((err) => toast.error(err.message));
    }
  };

  return (
    <>
      <div>
        <div className="relative">
          <img
            src={img2}
            alt=""
            className="w-full object-cover object-center md:h-[50vh] h-[20vh] mt-16"
          />

          <div className="w-full md:h-[50vh] h-[20vh] bg-black opacity-65 absolute top-0 left-0"></div>
          <h2 className="absolute top-[40%] left-[10%] text-yellow-500 font-bold text-5xl md:text-7xl">
            Login Form
          </h2>
        </div>

        {/* Login Form  */}
        <form>
          <div className="flex justify-center  ">
            <div className="flex flex-col justify-center items-center md:flex-row bg-yellow-50  rounded-xl max-w-7xl w-[90%]  m-2">
              <div className=" w-full md:w-3/4">
                <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 py-4">
                  <h1 className="font-semibold text-xl md:text-5xl  m-2">
                    Login to your account
                  </h1>
                  <h1 className="text-sm font-medium  m-2">
                    Login using Social accounts
                  </h1>
                  <div className="text-lg flex lg:text-xl text-center space-x-5 m-2">
                    <p>
                      {" "}
                      <FaFacebook size={30} className="text-blue-800" />
                    </p>
                    <p>
                      {" "}
                      <FaTwitter size={30} className="text-blue-400" />
                    </p>
                    <p>
                      {" "}
                      <FcGoogle size={30} className="text-red-700" />
                    </p>
                  </div>
                  <h1 className="text-sm font-medium  m-2">OR</h1>
                </div>
                <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
                  <div className="border-2 rounded-lg">
                    <input
                      value={usersignup.email}
                      onChange={handleChange}
                      name="email"
                      type="email"
                      autoComplete="off"
                      placeholder="Email"
                      className=" bg-gray-100 rounded-lg px-5 py-2 focus:border-2 border-yellow-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                    />
                  </div>
                  <div className="border-2 rounded-lg">
                    <input
                      value={usersignup.password}
                      onChange={handleChange}
                      name="password"
                      type="password"
                      autoComplete="off"
                      placeholder="Password"
                      className=" bg-gray-100 rounded-lg px-5 py-2 focus:border-2 border-yellow-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                    />
                  </div>

                  <div className="flex space-x-2 -ml-28 md:-ml-40 lg:-ml-52">
                    {" "}
                    <input
                      className="accent-yellow-500"
                      type="checkbox"
                      id="checkbox"
                      name="checkbox"
                    />{" "}
                    <h3 className="text-sm font-semibold text-gray-400 -mt-1 cursor-pointer">
                      Remember Me
                    </h3>{" "}
                  </div>
                </div>

                <div className="text-center mt-7">
                  <button
                    onClick={handleSubmit}
                    className=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md bg-yellow-500 text-white font-medium m-2 mb-6 "
                  >
                    Login
                  </button>
                </div>
                <div className="text-center text-sm text-gray-600 my-6 flex flex-col  cursor-pointer">
                  {" "}
                  <p className="hover:text-yellow-500">
                    Forgot Password ?{" "}
                  </p>{" "}
                  <p className="hover:text-yellow-500">
                    {" "}
                    Don't have an Account?
                  </p>
                  <Link to="/signup">
                    {" "}
                    <p className="hover:text-yellow-500 ">Sign Up</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
