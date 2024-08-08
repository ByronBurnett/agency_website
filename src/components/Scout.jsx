import React from 'react'
import skill from '../assets/scout.jpg'


const Scout = () => {
  return (
    <div className="py-16 px-4 bg-white">
    <div className="max-w-[1240px] grid md:grid-cols-2">
      <img src={skill} alt="founder" className="w-[500px] mx-auto px-4" />
      <div className="flex flex-col justify-center bg-white px-4">
        <p className="text-[#07579f] font-bold text-4xl pb-8">Scouting Services</p>
        <p>Scouting is essential to any program or team's success in sports. Finding the right talent can be a challange in today's market where a global presence in basketball has taken shape.</p> <br/>
        <p>Whether amateur or professional talent identification will play a pivitol role in buidling a winning team. Without the correct personnel your strategy or system may not perform up to it's full potential.</p> <br/>
        <p>Hoopnomics offers scouting in basketball for the professional and amateur levels. We have an extensive network in Europe and the United States.</p>
      </div>
    </div>
  </div>
  )
}

export default Scout