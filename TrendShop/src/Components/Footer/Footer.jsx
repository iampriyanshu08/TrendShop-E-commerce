import React from "react";
import { FaFacebook,FaXTwitter,FaInstagram } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()
  return (
    <>
      <footer className="bg-zinc-900 text-white cursor-pointer">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 md:mx-0 mx-auto text-center md:text-left">
            <h3 onClick={()=>navigate('/')} className="font-bold text-2xl">
              Trend<span className="text-yellow-500">Shop</span>
            </h3>
          </div>

          <div className="flex-grow flex flex-wrap md:pl-20 mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-lg mb-3 text-yellow-500">
                MENU
              </h2>
              <ul className="list-none mb-10">
                <li>Features</li>
                <li className="mt-1">Info-Center</li>
                <li className="mt-1">News-Blog</li>
                <li className="mt-1">Login</li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-lg mb-3 text-yellow-500">
               COMPANY
              </h2>
              <ul className="list-none mb-10">
                <li>About Us</li>
                <li className="mt-1">Privacy Policy</li>
                <li className="mt-1">Terms and Conditions</li>
                <li className="mt-1">Login</li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-lg mb-3 text-yellow-500">
                CONTACT
              </h2>
              <ul className="list-none mb-10">
                <li>Contact Sales</li>
                <li className="mt-1">+1234567890</li>
                <li className="mt-1">News-Blog</li>
                <li className="mt-1">+0987654321</li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-lg mb-3 text-yellow-500">
              TECH SUPPORT
              </h2>
              <ul className="list-none mb-10">
                <li>Features</li>
                <li className="mt-1">Contact Support</li>
                <li className="mt-1">Info Center</li>
                <li className="mt-1">Activate</li>
              </ul>
            </div>

          </div>
        </div>
        <div className="bg-zinc-700 text-white">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-sm text-center sm:text-left">© 2024 Trend<span className="text-yellow-500">Shop</span> -<span>@copyright</span></p>
            <p className="inline-flex mt-2 sm:ml-auto sm:mt-0 justify-center gap-4 items-center cursor-pointer sm:justify-start">
          <span>  <FaFacebook className="hover:text-blue-800" size={16} /></span> <span><FaInstagram className="hover:text-pink-500" size={16} /></span> <span> <FaXTwitter className="hover:text-black" size={16} /></span>
            </p>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
