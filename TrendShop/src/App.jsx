import React, { useEffect, useState } from "react";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import "../src/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProducts from "./Components/AllProducts/AllProducts";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/SignUp/Signup";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./FirebaseAuth/FirebaseAuth";
import SingleProd from "./Pages/SingleProd/SingleProd";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";


const App = () => {
  const [cart, setcart] = useState([]);
  const [couponcode, setcouponcode] = useState("");
  const [discount, setdiscount] = useState(0);
  const [error, seterror] = useState();
  const [userName, setuserName] = useState("");

  // add to cart
  const addToCart = (prods) => {
    // console.log(prods)
    const isProdAvailable = cart.find((findItem) => findItem.id === prods.id);
    if (isProdAvailable) {
      const updateCart = cart.map((item) =>
        item.id === prods.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setcart(updateCart);
      
    } else {
      setcart([...cart, { ...prods, quantity: 1 }]);
      toast.success("added to cart")
    }

    console.log(cart);
  };

  // dec quantity
  const handleMinus = (id) => {
    const decQuantity = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setcart(decQuantity);
  };

  // inc quantity
  const handlePlus = (id) => {
    const incQuantity = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setcart(incQuantity);
  };

  //remove item

  const handleRemove = (id) => {
    const removedItems = cart.filter((elem) => elem.id !== id);
    setcart(removedItems);
  };

  //calculate total amount in cart

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((total, currentItem) => {
      return total + currentItem.price * currentItem.quantity;
    }, 0);
    return totalPrice - discount;
  };

  //shipping charge function
  const shipCharge = () => {
    return getTotalPrice() + 10;
  };

  //coupon code function

  const ApplyCoupon = () => {
    if (couponcode === "ONLINE10") {
      setdiscount(getTotalPrice() * 0.1);
      setcouponcode("");
    } else {
      seterror("Invalid Coupon code");
    }
  };

  //username display

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setuserName(user.displayName);
      } else {
        setuserName("");
      }
    });
  }, []);

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar cart={cart} userName={userName} />
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />

            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  handlePlus={handlePlus}
                  handleMinus={handleMinus}
                  handleRemove={handleRemove}
                  getTotalPrice={getTotalPrice}
                  shipCharge={shipCharge}
                  ApplyCoupon={ApplyCoupon}
                  couponcode={couponcode}
                  setcouponcode={setcouponcode}
                  error={error}
                />
              }
            />
            <Route
              path="/allproducts"
              element={<AllProducts addToCart={addToCart} />}
            />
            <Route
              path="/about"
              element={<About/>}
            />
            <Route
              path="/contact"
              element={<Contact/>}
            />
            <Route path="/singleprod/:prodId" element={<SingleProd  addToCart={addToCart}/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Toaster />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
