
import React from 'react'
import Contact from "./Contact"
import Byron from "../assets/byron_burnett.png"



const About = () => {
  

  
  
  
  
  return (
   <> 
   <div className="py-16 px-4 bg-white">
    <div className="max-w-[1240px] grid md:grid-cols-2">
      <img src={Byron} alt="founder" className="mx-auto rounded-full border-2 border-black object-cover object-center h-80 w-80 m-2 bg-zinc-100" />
      <div className="flex flex-col justify-center bg-white px-4">
        <h2 className="text-blue-600 font-bold text-4xl ">Founder & CEO</h2> 
        <h3 className="text-black font-bold text-3xl pb-8">Byron Burnett</h3>  
        <p className="text-base">Byron is an Certified FIBA Agent and a former professional basketball player who played in several premier leagues globally including: France Pro B, Mexico LNBP and Venezuela's LNB. Byron has a Liberal Arts degree from Florida International University where he attended from 2003-2005 and a International Business degree from Metropolia University of Applied Sciences in Helsinki, Finland.</p> <br/>
        <p className='text-base'>With great passion for basketball, Byron has trained players, coached youth level basketball, worked as a basketball referee in Europe and written extensively about the game. With over two decades of experience, Byron has valuable insight and knowledge about what is required to be a sucessful player on and off the court as an aspiring and professional athlete. </p> <br/>
        
        
      </div>
    </div> 
    <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700"></hr>
    
  
  

    
    <Contact /> 
  </div>
  </>
  )
}

export default About