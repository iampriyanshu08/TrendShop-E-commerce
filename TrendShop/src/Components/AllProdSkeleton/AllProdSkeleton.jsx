import React from "react";


const AllProdSkeleton = () => {
    const array = new Array (30).fill("")
    
  return (
    <>
      <div>
        <section className=" body-font  text-center">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap gap-10 justify-center">
              {array.map((el,i)=>(
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-2 rounded" key={i}>
               <div className="w-full h-[190px] bg-[#ccc] rounded"></div>

                <div className="mt-4">
                  <h3 className="text-gray-500 bg-[#ccc] h-[20px] w-[150px] text-sm tracking-widest title-font mb-1 font-semibold text-left">
                    
                  </h3>
                  <h2 className="text-gray-500 bg-[#ccc] h-[20px] w-[130px] title-font text-sm font-medium  text-left ">
                   
                    <span className=" text-green-600 inline-flex pl-1 absolute">
                     
                    </span>
                  </h2>
                  <div className="flex justify-between flex-col sm:flex-row ">
                  <p className="mt-2 mb-2 text-gray-500 bg-[#ccc] h-[30px] w-[150px] text-left font-bold text-xl ">
                    
                  </p>
                  <button className="px-2 py-2 bg-[#ccc]  h-[40px] w-[90px] text-white text-sm rounded font-medium   ">
                   
                  </button>
                  </div>
                </div>
              </div>
              ))}
              
              
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AllProdSkeleton;
