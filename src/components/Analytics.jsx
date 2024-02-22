import React from 'react'
import Arena from '../assets/sports arena.jpg'
const Analytics = () => {
  return (
    <div className="bg-white py-16 px-4">
     <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
       <img src={Arena} alt="sports-arena" className="w-[500px] mx-auto my-4" />
       <div className="flex flex-col justify-center">
        <p className="text-[#07579f] font-bold" >GET INSIGHT WITH DATA ANALYTICS</p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Learn more about data analytics with Hoopnomics</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, harum placeat! Tempore facilis maiores veritatis saepe, quos ut omnis consectetur ex, dicta exercitationem at sequi excepturi distinctio, sed alias! Expedita!</p>
        <button className="bg-black text-[#07579f] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">Get Started</button>
       </div>
       
     </div>
    </div>
  )
}

export default Analytics