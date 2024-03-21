import React from 'react'

import img from '../../assets/img2.jpg'
import { useNavigate } from 'react-router-dom'
// import img1 from '../../assets/empty.jpg'

const EmptyCart = () => {
    const navigateToLogin = useNavigate()
  return (
    <div>

        {/* <div className='border w-[80%] mx-auto h-[80vh] bg-yellow-100 mt-28 mb-10'>

        </div> */}


<section class="text-gray-600 body-font bg-[#ccc] h-screen flex items-center justify-center w-[70%] mx-auto">
  <div class="container mx-auto flex px-5 py-20 items-center justify-center flex-col ">
    <img class="lg:w-1/6 md:w-3/6 w-5/6  object-cover object-center rounded" alt="hero" src={img}/>
    <div class="text-center lg:w-2/3 w-full ">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 mt-5 font-medium text-gray-900">Your cart is Empty !</h1>
      <p class="mb-8 leading-relaxed">Add to see the items in the Cart.</p>
      <div class="flex justify-center">
        <button onClick={()=>navigateToLogin('/allproducts')} class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Add Product</button>
       
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default EmptyCart