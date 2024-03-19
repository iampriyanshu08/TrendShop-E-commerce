import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const PopularProducts = ({addToCart}) => {
    const [popularprod, setpopularprod] = useState([])
  useEffect(() => {
    const popularProdData = async () => {
      try {
        const res = await axios("https://dummyjson.com/carts/1");

        console.log(res.data.products);
        setpopularprod(res.data.products)
      } catch (err) {
        toast.error(err);
      }
    };
    popularProdData();
  }, []);

  
  return (
    <div>
      <div className="mt-16 text-center">
        <h2 className="lg:text-7xl md:text-5xl text-3xl font-semibold text-yellow-600 underline">Popular Products</h2>
      </div>
      <section className="text-gray-600 body-font">
        <div className="w-[90%] px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {popularprod.filter((popItem,index)=>index !==1)
            .map((item,id)=>(
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={item.id}>
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={item.thumbnail}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                   Discount: {item.discountPercentage}%
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {item.title}
                  </h2>
                  <p className="mt-1 font-semibold">{item.price} Rs.</p>
                </div>
                <button onClick={()=>addToCart(item)} className="py-1 px-2 bg-yellow-500 text-white text-sm hover:bg-yellow-600 mt-5">Add to cart</button>
              </div>
            ))}
            
            
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularProducts;
