import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="m-w-[800px] mt-[-96px]w-full h-screen mx-auto text-center flex flex-col justify-center">
       <p className="text-blue-600 text-4xl font-bold p-2">INSIDE THE NUMBERS</p>
       <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Hoopnomics.</h1>
       <div className="flex justify-center items-center">
        <p className="md:text-5xl sm:text-4xl font-bold py-4">We represent</p>
       <ReactTyped className="md:text-5xl sm:text-4xl font-bold md:pl-4 pl-2" strings={['players', 'coaches',]} typeSpeed={120} backSpeed={140} loop />
       </div>
       <p className="md:text-2xl text-xl font-bold text-gray-500">Contributing value to the global basketball market.</p>
       <Link to=""> 
      <button className="bg-blue-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">Get Started</button>
      </Link>
      </div>
    </div>
  )
}

export default Hero