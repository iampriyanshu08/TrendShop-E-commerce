import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = () => {
  const images = [
    {
      url: "https://img.freepik.com/free-photo/online-fashion-shopping-with-computer_23-2150400628.jpg?t=st=1709902340~exp=1709905940~hmac=c783fa36236da2de69a227351f331e1bee0c595391f5ced0c0233db8e38cd794&w=1060",
    },
    {
      url: "https://img.freepik.com/free-photo/online-fashion-shopping-with-laptop_23-2150400630.jpg?t=st=1709902358~exp=1709905958~hmac=06a10b73d242df83536cf0e7c395d01963f0d3301c877251b79772d4e4b51dab&w=1060",
    },
    {
      url: "https://img.freepik.com/free-photo/african-american-man-looks-clothes-online-touch-screen-monitor-fashion-boutique-mall-self-service-board-male-customer-looking-trendy-clothes-items-retail-kiosk-display_482257-63314.jpg?t=st=1709902407~exp=1709906007~hmac=5f13da51adf8fe81f2b3a333ef8830e63c845da89a650ac69f539b3d8f03d58e&w=1060",
    },
    {
      url: "https://img.freepik.com/premium-photo/online-fashion-shopping-with-tablet_23-2150400638.jpg?w=1060",
    },
    {
      url: "https://img.freepik.com/free-photo/happy-smiling-woman-pink-shirt-sofa-home-colorful-shopping-bags-holding-credit-card-paying-online-laptop_285396-9242.jpg?t=st=1709902482~exp=1709906082~hmac=d0a7ecd02a776b68f868075f08a0fc706c10c5eb990dfd461216ca7cef2d1ce3&w=1060",
    },
    {
      url: "https://img.freepik.com/free-photo/young-beautiful-blonde-woman-jacket-blue-wall-with-mobile-phone-doing-online-shopping_496169-1447.jpg?t=st=1709900929~exp=1709904529~hmac=0de2a48f62b1b2effdaf816aec8b20d9a13c035d024eee6d22f0975e5666ae0e&w=1060",
    },
    {
      url: "https://img.freepik.com/free-photo/startup-small-business-entrepreneur-sme-portrait-freelance-asian-woman-vlog-influrencer-home-studio-office-online-sell-marketing-delivery-concept_74952-3401.jpg?t=st=1709902537~exp=1709906137~hmac=1677dcd7591a1b84e17f2040d6470c0c0a3a560aa5fca263795785846e54e33a&w=1060",
    },
    {
      url: "https://img.freepik.com/free-photo/this-is-same-shoes_329181-1769.jpg?t=st=1709902574~exp=1709906174~hmac=90b6a81d38460fa28d5b25f87c0bd7a8d963273a711859de37e6e92dd0c2c7b7&w=1060",
    },

    {
      url: "https://img.freepik.com/free-photo/stylish-woman-with-shopping-bags_23-2148733329.jpg?t=st=1709902705~exp=1709906305~hmac=b4a98b8e53509f8fa10f34f1c3a0d41407a76230db7120ce74fb9fab2f35186a&w=1060",
    },
    {
      url: "https://img.freepik.com/free-photo/beautiful-smiling-young-blonde-woman-pointing-sunglasses-holding-shopping-bags-credit-card-pink-wall_496169-1506.jpg?w=1060",
    },
  ];
  const [slider, setSlider] = useState(0);
  const handlePlus = () => {
    setSlider(slider === images.length - 1 ? 0 : slider + 1);
  };
  const handleMinus = () => {
    setSlider(slider === 0 ? images.length - 1 : slider - 1);
  };
  useEffect(() => {
    const sliderClear = setInterval(() => {
      handlePlus();
    }, 3000);
    return () => clearInterval(sliderClear);
  }, [slider]);

  return (
    <div>
      <div className="w-full mx-auto md:h-[92vh] relative mt-16">
        {images.map((item, i) => (
          <div key={i} className={`${slider === i ? "block" : "hidden"}`}>
            <img
              src={item.url}
              alt=""
              className="w-full object-cover md:h-[92vh] object-top"
            />
          </div>
        ))}
        <div className="w-full mx-auto h-full md:h-[92vh]  bg-black opacity-65 absolute top-0 left-0"></div>
        <div className="w-full absolute text-white top-[35%] flex-col  text-center lg:text-8xl  md:text-6xl text-2xl font-semibold flex items-center justify-center">
          <h1 className="md:w-full w-[60%] text-yellow-500 px-3 tracking-tighter leading-snug animate-bounce">
            Discover Your Next Adventure!
          </h1>
          <p className="md:text-3xl w-[60%] text-sm py-5 tracking-tight animate-pulse">
            Shop Our Latest Arrival & Unleash Your Style
          </p>
        </div>

        <div className="flex w-full justify-between px-5 absolute top-[45%] text-white">
          <FaChevronLeft
            size={40}
            className="cursor-pointer"
            onClick={handleMinus}
          />
          <FaChevronRight
            size={40}
            className="cursor-pointer"
            onClick={handlePlus}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
