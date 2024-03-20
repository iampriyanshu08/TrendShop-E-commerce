import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdStarRate } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import cartbg from "../../assets/cartbg.jpg";

const Cart = ({
  cart,
  handlePlus,
  handleMinus,
  handleRemove,
  getTotalPrice,
  shipCharge,
  ApplyCoupon,
  couponcode,
  setcouponcode,
  error,
}) => {

  const navigate = useNavigate()
  return (
    <>
      <div className="relative">
        <img
          src={cartbg}
          alt=""
          className="w-full object-cover object-top md:h-[50vh] h-[20vh] mt-16"
        />

        <div className="w-full md:h-[50vh] h-[20vh] bg-black opacity-60 absolute top-0 left-0"></div>
        <h2 className="absolute top-[40%] left-[10%] text-yellow-500 font-bold text-5xl md:text-7xl">
          Cart
        </h2>
      </div>

      <div className="w-[90%] mx-auto mt-16 ">
        <div className="container mx-auto mt-10">
          <div className="flex flex-col lg:flex-row shadow-md my-10 gap-3">
            <div className=" w-full lg:w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl uppercase">
                  {cart.length} Items
                </h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                  Quantity
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                  Price
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                  Total
                </h3>
              </div>

              {/* { cart section } */}

              {cart.map((cartItem) => (
                <div
                  className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                  key={cartItem.id}
                >
                  <div className="flex w-2/5">
                    <div className="w-20">
                      <img
                        className="h-24 object-cover object-center"
                        src={cartItem.thumbnail}
                        alt=""
                      />
                    </div>

                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">
                        {cartItem.title}
                      </span>
                      <span className="text-black text-sm inline-flex items-center gap-1">
                        {cartItem.rating}{" "}
                        <span className=" items-center text-green-600">
                          <MdStarRate size={20} />
                        </span>
                      </span>
                      <a
                        href="#"
                        className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                        onClick={() => handleRemove(cartItem.id)}
                      >
                        Remove{" "}
                        <span className="inline-flex items-center justify-center hover:text-red-700">
                          <RiDeleteBin5Line size={15} />
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <button
                      className="border py-1 px-2"
                      onClick={() => handleMinus(cartItem.id)}
                    >
                      -
                    </button>

                    <button className="px-2">{cartItem.quantity}</button>

                    <button
                      className="border py-1 px-2"
                      onClick={() => handlePlus(cartItem.id)}
                    >
                      +
                    </button>
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    {cartItem.price} Rs.
                  </span>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    {cartItem.price * cartItem.quantity} Rs.
                  </span>
                </div>
              ))}

              {/* { cart section } */}

              {/* <Link to="/allproducts"> */}
                <p className="flex font-semibold text-yellow-500 text-sm mt-10 cursor-pointer" onClick={()=>navigate('/allproducts')}>
                  <svg
                    className="fill-current mr-2 text-yellow-500 w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  Continue Shopping
                </p>
              {/* </Link> */}
            </div>

            <div id="summary" className=" w-full lg:w-1/4 px-8 py-10 bg-white">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {cart.length}
                </span>
                <span className="font-semibold text-sm">
                  {getTotalPrice()} Rs.
                </span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard shipping - 10.00 Rs.</option>
                </select>
              </div>
              <div className="py-10">
                <label
                  htmlFor="promo"
                  className="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Promo Code
                </label>

                <input
                  onChange={(e) =>
                    setcouponcode(e.target.value, console.log(couponcode))
                  }
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full"
                  value={couponcode}
                />
                <p className="text-red-500 text-xs font-semibold flex items-center">
                  {couponcode && couponcode !== "ONLINE10" ? (
                    error
                  ) : ""}
                  {couponcode === "ONLINE10" && (
                    <span className="text-green-600">
                      {"Applied Successfully"}
                    </span>
                  )}
                </p>
              </div>
              <button
                className="bg-red-400 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
                onClick={ApplyCoupon}
              >
                Apply
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>{cart.length >= 1 ? shipCharge() : 0} Rs.</span>
                </div>
                <button className="bg-yellow-500 font-semibold hover:bg-yellow-600 py-3 text-sm text-white uppercase w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
