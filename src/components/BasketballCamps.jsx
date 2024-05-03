import React from 'react'
import camps from '../assets/basketball_camp.jpg'


const BasketballCamps = () => {
  return (
    <div className="py-16 px-4 bg-white">
    <div className="max-w-[1240px] grid md:grid-cols-2">
      <img src={camps} alt="founder" className="w-[500px] mx-auto px-4" />
      <div className="flex flex-col justify-center bg-white px-4">
        <p className="text-[#07579f] font-bold text-4xl pb-8">Basketball Camps</p>
        <p> Summer camps are essential for youth development in basketball. Hoopnomics seeks to establish summer camps for youth from the ages of 7-12 years old and 13-18 years old between the months of June-July.  </p> <br/>
        <p>We provide skills training for campers that teach the fundamentals of footwork, streching, basketball movements, and the building blocks that help youth players be better teammates in an competetive sports environment.  </p> <br/>
        <p className="text-6xl font-bold">More information coming soon!</p>
      </div>
    </div>
  </div>
     )
}

export default BasketballCamps 