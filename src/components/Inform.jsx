import React from 'react'
import contact from '../assets/contact.jpg'

const Inform = () => {
  return (
    <div className="py-16 px-4 bg-white">
        <div className="max-w-[1240px] grid md:grid-cols-2">
        <img src={contact} alt="founder" className="w-[500px] mx-auto px-4" />
       <div className="flex flex-col justify-center bg-white">
        <p className="text-[#07579f] font-bold text-4xl">Contact</p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2" >Hoopnomics</h1>
        <span className="text-3xl">Byron Burnett</span>
        <span>Email: info@hoopnomics.com</span>
        <span>Phone: 444-444-4444</span>
       </div>
        </div>
    </div>
  )
}

export default Inform