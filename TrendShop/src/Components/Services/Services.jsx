import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { MdProductionQuantityLimits } from "react-icons/md";

const Services = () => {
  return (
    <>
      <div className="container mx-auto px-5 flex pt-20 gap-14 items-center justify-center flex-wrap cursor-pointer ">
        <div className="bg-yellow-500 py-8 px-7 rounded text-white flex gap-2 flex-col items-center w-[290px] hover:scale-[1.2] transition duration-700 shadow-lg ">
          <FaShippingFast className="text-white" size={40} />
          <p className="uppercase text-lg font-semibold">free shipping </p>
        </div>
        <div className="bg-yellow-500 py-8 px-7 rounded text-white flex gap-2 flex-col items-center w-[290px] hover:scale-[1.2] transition duration-700 shadow-lg">
          <MdProductionQuantityLimits className="text-white" size={40} />
          <p className="uppercase text-lg font-semibold">Authentic products</p>
        </div>

        <div className="bg-yellow-500 py-8 px-7 rounded text-white flex gap-2 flex-col items-center w-[290px] hover:scale-[1.2] transition duration-700 shadow-lg">
          <TbTruckReturn className="text-white" size={40} />
          <p className="uppercase text-lg font-semibold">easy returns </p>
        </div>
        <div className="bg-yellow-500 py-8 px-7 rounded text-white flex gap-2 flex-col items-center w-[290px] hover:scale-[1.2] transition duration-700 shadow-lg">
          <MdOutlinePayment className="text-white" size={40} />
          <p className="uppercase text-lg font-semibold">secure payment </p>
        </div>
      </div>
    </>
  );
};

export default Services;
