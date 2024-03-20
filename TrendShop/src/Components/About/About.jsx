import React from 'react'
import about from '../../assets/about1.jpg'
import ask from '../../assets/ask-us.jpg'

const About = () => {
  return (
    <div>
        <div className="relative">
          <img
            src={about}
            alt=""
            className="w-full object-cover object-center h-[50vh] mt-16"
          />

          <div className="w-full h-[50vh] bg-black opacity-65 absolute top-0 left-0"></div>
          <h2 className="absolute top-[40%] left-[10%] text-yellow-500 font-bold text-5xl md:text-7xl">
            About Us
          </h2>
        </div>
        <section className="text-gray-600 body-font">
  <div className="w-[80%] flex px-5 py-20 md:flex-row flex-col items-center  mx-auto">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src={ask}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 uppercase">TrendShop Group
        <br className="hidden lg:inline-block"/>
      </h1>
      <p className="mb-8 leading-relaxed">The TrendShop Group is one of India’s leading digital commerce entities and includes group companies Flipkart, Myntra, Flipkart Wholesale, Flipkart Health+, and Cleartrip.

Started in 2007, Flipkart has enabled millions of sellers, merchants, and small businesses to participate in India's digital commerce revolution. With a registered customer base of more than 500 million, Flipkart's marketplace offers over 150 million products across 80+ categories. Today, there are over 14 lakh sellers on the platform, including Shopsy sellers. With a focus on empowering and delighting every Indian by delivering value through technology and innovation.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Explore now</button>
        
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="w-[80%] mx-auto flex px-5 py-20 md:flex-row flex-col-reverse items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 uppercase">Technology at TrendShop
        <br className="hidden lg:inline-block "/>   Innovation   
      </h1>
      <p className="mb-8 leading-relaxed">TrendShop technology drives path-breaking, customer-focused innovation that makes high quality products accessible to Indian shoppers, besides making the online shopping experience convenient, intuitive and seamless. Discover the trailblazing technology that is shaping e-commerce in India with insights from Flipkart’s sharpest tech minds</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Read more</button>
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 lg:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://corporate.flipkart.net/assets/images/technology-image.png"/>
    </div>
  </div>
</section>

        
    </div>
  )
}

export default About