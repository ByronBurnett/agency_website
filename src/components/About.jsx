import React from 'react'
import {forwardRef} from 'react'
import suit from '../assets/suit.jpg'



const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-white py-16 px-4">
     <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
     <img src={suit} alt="founder" className="h-96 w-96 mx-auto rounded-full object-cover object-center px-4" />
       <div className="flex flex-col justify-center p-4">
        <p className="text-[#07579f] font-bold text-4xl">Byron Burnett</p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-medium py-2" >Founder</h1>
        <h1 className="md:text-3xl sm:text-2xl text-xl font-bold py-2" >FIBA Agent | Talent Scout</h1>
        <p className="">Hoopnomics was created through passion and determination from over 25 years of experience with the game of basketball. A former pro himself who had an extensive 14 year career as a professional, Byron played in 12 countries on 5 continents: South America, North America, Europe, Asia, and Africa. <br/><br/> Mr. Burnett graduated from Florida International University with a bachelors in Liberal Arts in 2009 and later recieved a second degree in International Business from Metropolia University of Applied Sciences in Finland. Byron has worked around the game of basketball as a writer, player, coach, referee, and podcaster throughout his illustrious career.
        <br/><br/>
        What can you expect from me as an your Agent?<br/><br/>
       <li>Stellar contract negotiation.</li>
       <li>To market your talent and value as a player for desired results</li>
       <li>To find the best fit for your talents</li>
       <li>Knowledge of global basketball markets</li>
       <br></br>
       <p>
        <a href="https://basketball.eurobasket.com/player/Byron-Burnett/32024" className="underline text-blue-600 
                   hover:text-teal-400 
                   visited:text-[#07579f]">Link to my old Eurobasket Resume</a>
       </p>
       <p>
        <a href="https://www.theseus.fi/handle/10024/809004" alt="Thesis"className="underline text-blue-600 
                   hover:text-teal-400 
                   visited:text-[#07579f]">Thesis: The Impact of Data Analytics in Basketball.</a>
       </p>
       
        </p>
        
       </div>
       
     </div>
    </div>
  )
});

export default About;