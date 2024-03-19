import React from "react";
import g1 from '../../assets/prod7.jpg'
import g2 from '../../assets/prod2.jpg'
import g3 from '../../assets/prod3.jpg'
import g4 from '../../assets/prod4.jpg'
import g8 from '../../assets/prod9.jpg'
import g9 from '../../assets/prod10.jpg'

const Gallery = () => {
  return (
    <>
    <div className=" text-center">
        <h2 className="lg:text-7xl md:text-5xl text-3xl font-semibold text-yellow-600 underline ">Gallery </h2>
      </div>
      <section className="text-gray-600 body-font cursor-pointer">
        <div className="w-[90%] px-5 py-24 mx-auto flex flex-wrap">
          
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:scale-75 hover:translate-x-4 hover:skew-y-3 transition duration-700 "
                  src={g2}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:scale-75 hover:translate-x-4 hover:skew-y-3 transition duration-700"
                  src={g3}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block hover:scale-75 hover:translate-x-4 hover:skew-y-3 transition duration-700"
                  src={g4}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block hover:scale-75 hover:translate-x-4 hover:skew-y-3 transition duration-700"
                  src={g1}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:scale-75 hover:translate-x-4 hover:skew-y-3 transition duration-700"
                  src={g8}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:scale-75 hover:translate-x-4 hover:skew-y-3 transition duration-700"
                  src={g9}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
