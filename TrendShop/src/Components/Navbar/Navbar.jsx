import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { auth } from "../../FirebaseAuth/FirebaseAuth";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({ cart, userName }) => {
  const [isopen, setisopen] = useState(false);

  const toggleBar = () => {
    isopen === false ? setisopen(true) : setisopen(false);
  };

  const handleLogout = () => {
    
 auth.signOut(auth).then(() => {
  toast.success('Logout was successful')
}).catch((error) => {
  toast.error(error)
});
  }

  return (
    <>
      <div className="relative">
        <header className="bg-zinc-900 border-gray-200 text-white fixed top-0 left-0  z-40 w-full">
          <div className="w-[90%] mx-auto flex justify-between p-5 items-center ">
            <div>
              <Link to="/">
                <h3 className="font-bold text-2xl cursor-pointer">
                  Trend<span className="text-yellow-500">Shop</span>
                </h3>
              </Link>
            </div>
            <div className="hidden md:block ">
              <ul className="flex  items-center text-lg justify-center font-semibold">
                <Link to="/">
                  <li className="mr-5 hover:text-yellow-500 cursor-pointer">
                    Home
                  </li>
                </Link>

                <Link to="/allproducts">
                  <li className="mr-5 hover:text-yellow-500 cursor-pointer">
                    All Products
                  </li>
                </Link>
                <Link to='/about'><li className="mr-5 hover:text-yellow-500 cursor-pointer">
                 About
                </li></Link>
                <Link to='/contact'><li className="mr-5 hover:text-yellow-500 cursor-pointer">
                  Contact
                </li></Link>
              </ul>
            </div>

            {isopen ? (
              <div className="">
                <ul className="flex flex-col text-2xl gap-10 absolute top-[73px] text-black h-screen w-full left-0 z-10 bg-yellow-600 items-center justify-center font-semibold">
                  <Link to="/">
                    <li className="mt-5 text-white cursor-pointer" onClick={()=>setisopen(!isopen)}>
                      Home
                    </li>
                  </Link>

                  <Link to="/allproducts">
                    <li className="mt-5 text-white cursor-pointer" onClick={()=>setisopen(!isopen)}>
                      All Products
                    </li>
                  </Link>
                  <Link to="/about"><li className="mt-5 text-white cursor-pointer" onClick={()=>setisopen(!isopen)}>
                   About
                  </li>
                  </Link>
                  <Link to="/contact">
                  <li className="mt-5 text-white cursor-pointer" onClick={()=>setisopen(!isopen)}>
                    Contact
                  </li></Link>
                </ul>
              </div>
            ) : (
              ""
            )}

            <div className="flex justify-center md:gap-2 gap-1  items-center mx-2 ">
              {userName?(
                <>
                <Link to="/login">
                <button className=" border-0 py-1  hover:text-yellow-500 rounded text-lg  font-semibold" onClick={handleLogout}>
                  Logout
                </button>
              </Link>
              <span>{userName}</span>
                </>
              ):(
                <>
                <span className="flex items-center justify-center text-yellow-500"><FaUserCircle size={30} /></span>
                <Link to="/login">
                <button className=" border-0 py-1  hover:text-yellow-500 rounded text-lg  font-semibold">
                  Login
                </button>
              </Link>
                </>
              )}
              
              <Link to="/cart">
                <button className="flex items-center justify-center text-lg hover:text-yellow-400 relative px-2">
                {cart.length >= 1 && (
                    <span class="absolute inline-flex  items-center justify-center w-6 h-6 text-xs  font-bold text-yellow-500 bg-black border-2 border-white rounded-full -top-3 -right-1 ">
                      {cart.length}
                     
                    </span>
                     
                  )}
                  <FaShoppingCart size={30} />
                   
                  
                 
                </button>
              </Link>

              {isopen ? (
                <button className="md:hidden pl-2" onClick={toggleBar}>
                  <RxCross2 size={30} />
                </button>
              ) : (
                <button className="md:hidden pl-3 " onClick={toggleBar}>
                  <GiHamburgerMenu size={25} />
                </button>
              )}
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
