import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import axios from "axios";
import img2 from "../../assets/banner2.jpg";
import { MdStarRate } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import AllProdSkeleton from "../AllProdSkeleton/AllProdSkeleton";

const AllProducts = ({ addToCart }) => {
  const [allprods, setallprods] = useState([]);
  const [originalprod, setoriginalprod] = useState([]);
  const [category, setcategory] = useState([]);
  const [selectprod, setselectprod] = useState("");
  const [searchItem, setsearchItem] = useState("");
  const [minprice, setMinprice] = useState("");
  const [maxprice, setMaxprice] = useState("");

  //product categories

  useEffect(() => {
    const getProdcategory = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/categories");
        // console.log(res.data);
        setcategory(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProdcategory();
  }, []);

  // all products

  useEffect(() => {
    const AllProds = async () => {
      try {
        const res = await axios("https://dummyjson.com/products");

        setallprods(res.data.products);
        setoriginalprod(res.data.products);
        // console.log(res.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    AllProds();
  }, []);

  const filterProds = (selectCategory) => {
    // console.log(selectCategory);
    setselectprod(selectCategory);

    const data = selectCategory
      ? originalprod.filter(
          (filterItems) => filterItems.category === selectCategory
        )
      : originalprod;
    setallprods(data);
    console.log(allprods);
  };

  // search function for products
  // const handleSearch = (e) => {
  //   const searchQuerry = e.target.value;

  //   setsearchItem(searchQuerry)
  // }

  

  // search btn function

  const handleSearchBtn = () => {
    const searchProd = originalprod.filter((searchFilterProd) =>
      searchFilterProd.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setallprods(searchProd);
    setsearchItem("");
  };

  //price by filter function

  const handlePrice = () => {
    let min = parseInt(minprice);
    let max = parseInt(maxprice);
    const filterPrice = originalprod.filter(
      (priceFilter) =>
        (!min || priceFilter.price >= min) && (!max || priceFilter.price <= max)
    );
    setallprods(filterPrice);
    setMinprice("");
    setMaxprice("");
  };

  return (
    <>
      <div className="relative">
        <img
          src={img2}
          alt=""
          className="w-full object-cover object-bottom md:h-[50vh] h-[20vh] mt-16"
        />

        <div className="w-full md:h-[50vh] h-[20vh] bg-black opacity-65 absolute top-0 left-0"></div>
        <h2 className="absolute top-[40%] left-[10%] text-yellow-500 font-bold text-5xl md:text-7xl">
          All Products
        </h2>
      </div>

      {/* prods category  */}

      <div className="bg-yellow-50 rounded-md mt-16 py-3 mx-auto w-[85%]">
        <div className="flex flex-wrap gap-5 items-center justify-center my-5 ">
          <select
            className="p-2 focus:border-none"
            onChange={(e) => filterProds(e.target.value)}
          >
            <option className="bg-yellow-500">Filter by Category</option>
            {category.slice(0, 6).map((item, i) => (
              <option
                key={i}
                value={item}
                className="py-2 px-4 bg-yellow-500 text-white"
              >
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* product search  */}

        <div className="flex items-center justify-center mb-8 ">
          <div className="flex border rounded-full">
            <span className="">
              
            </span>
            <input
              type="search"
              onChange={(e) => setsearchItem(e.target.value)}
              value={searchItem}
              name="q"
              className="py-2 text-sm md:w-[300px] w-[150px] text-center focus:border-none focus:bg-white focus:text-gray-900 pr-5 rounded-l-full"
              placeholder="Search item..."
              autoComplete="off"
            />
            <div>
            <button
                onClick={handleSearchBtn}
                type="submit"
                className="p-2 focus:border-none  bg-yellow-500 hover:bg-yellow-600 rounded-r-full items-center justify-center inline-block "
              >
                <IoMdSearch size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* filter by price  */}

        <div className="text-center flex items-center justify-center gap-5 mb-6 md:flex-row flex-col">
          <input
            type="number"
            value={minprice}
            placeholder=" Enter Min Price"
            onChange={(e) => setMinprice(e.target.value)}
            className=" px-2 py-2 text-center focus:border-none"
          />
          <input
            type="number"
            value={maxprice}
            placeholder=" Enter Max Price"
            onChange={(e) => setMaxprice(e.target.value)}
            className=" px-2 py-2 text-center focus:border-none"
          />
          <button
            onClick={handlePrice}
            className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2   rounded  border-black font-semibold"
          >
            Filter by Price
          </button>
        </div>
      </div>

      {!allprods.length ? (<AllProdSkeleton/>) : (<section className=" body-font  text-center">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap gap-10 justify-center">
            {allprods.map((prod) => (
              <div
                key={prod.id}
                className="lg:w-1/4 md:w-1/2 p-4 w-full border-2 rounded"
              >
                <Link to={`/singleprod/${prod.id}`}  className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={prod.thumbnail}
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1 font-semibold text-left">
                    Title : {prod.title}
                  </h3>
                  <h2 className="text-gray-500 title-font text-sm font-medium  text-left ">
                    Rating : {prod.rating}
                    <span className=" text-green-600 inline-flex pl-1 absolute">
                      
                      <MdStarRate size={20} />
                    </span>
                  </h2>
                  <div className="flex justify-between sm:flex-row flex-col">

                  <p className="mt-1 mb-2 text-gray-500 text-left font-bold text-xl ">Price : {prod.price} Rs.</p>
                  <button
                    className="px-2 py-2 bg-yellow-500 text-white text-sm rounded  font-medium hover:bg-yellow-600  "
                    onClick={() => addToCart(prod)}
                    >
                    Add to cart
                  </button>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>)}
      

      {/* all products  */}

      
    </>
  );
};

export default AllProducts;
