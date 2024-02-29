import React from 'react'
import suit from '../assets/suit.jpg';

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-[1240px] grid md:grid-cols-2">
       <img src={suit} alt="founder" className="w-[500px] mx-auto px-4" />
       <div className="flex flex-col justify-center p-4">
        <p className="text-[#07579f] font-bold text-4xl">Founder & CEO</p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-medium py-2" >Byron Burnett</h1>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2" >Certified FIBA Agent |License #202302530</h1>
        <p className="">Hoopnomics was created through passion and determination that lends over 25 years of experience with the game of basketball. A former pro himself who had an extensive 14 year career as a professional, Byron played in 12 countries on 5 continents and intends to impart that knowledge and experience with the next crop of talented players in the game of basketball. <br/><br/> Mr. Burnett graduated from Florida International University with a bachelors in Liberal Arts in 2009 and later recieved a second degree in International Business from Metropolia University of Applied Sciences in Helsinki, Finland in 2023. Byron has gave back to the game as a writer, player, coach and referee throughout his illustrious career.</p>
        <p></p>
       </div>
      </div>
  </div>
  )
}

export default About