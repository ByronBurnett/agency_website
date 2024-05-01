import React from 'react'
import gymwork from '../assets/training.jpg'

const PlayerDevelopment = () => {
  return (
    <div className="py-16 px-4 bg-white">
    <div className="max-w-[1240px] grid md:grid-cols-2">
      <img src={gymwork} alt="founder" className="w-[500px] mx-auto px-4" />
      <div className="flex flex-col justify-center bg-white px-4">
        <p className="text-[#07579f] font-bold text-4xl pb-8">Player Development</p>
        <p>Player Development is key for young and aspiring athlete, the development of skills on the court such as leadership, accountibilty, working with others and overcoming obstacles to your individual goals as a basketball player are important in the life cycle of a career.</p> <br/>
        <p>As players get older and enter new level of competetion, development becomes more significant. We like to tailor workouts and reigments that fits the player's needs at any given time. With over 20 years of experience in basketball at the collegiate and professional ranks we can help you reach new heights.</p>
       
      </div>
    </div>
  </div>
  )
}

export default PlayerDevelopment