import React from 'react'
import business from '../assets/businessman.jpg'
const Consultancy = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-[1240px] grid md:grid-cols-2">
        <img src={business} alt="founder" className="w-[500px] mx-auto px-4" />
        <div className="flex flex-col justify-center bg-white px-4">
          <p className="text-[#07579f] font-bold text-4xl pb-8">Basketball Consultancy</p>
          <p>Pursuing a career in athletics is a major commitment and time investment reality. Whether it's training, traveling, studying film or practicing with your club, the process of becoming a good athlete takes time and effort. Becoming a high-level or elite basketball player requires certain steps and goals and the right connections to be successful. Our organization has experience with success, on the collegiate and professional level we give you the framework and the blueprint to succeed as a player in a  highly competitve landscape. </p> <br/>
          <p>We offer an honest assesment of your talent and level using a traditional and analytical approach to evaluated your skill level. A statisitcal anaysis of your numbers can provide insight and a realistic outlook of where you are in your basketball development. Contact us by email with questions and we will assist in finding soultions that meets your needs. </p> <br/>
          
        </div>
      </div>
    </div>
   
  )
}

export default Consultancy