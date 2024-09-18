import React from 'react'
import {forwardRef} from 'react'
import player from '../assets/players.jpg'
import Coaches from '../assets/coach.png.jpg'
import team1  from '../assets/team1.jpg'
import { Link } from 'react-router-dom/';

const Cards = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-full py-[10rem] px-4 bg-white ">
     <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
     
       <div className="w-full border flex flex-col p-4 my-4 rounded-lg shadow-xl hover:scale-105 duration-300">
       <img src={player} alt="player" />
       <h2 className="text-2xl font-bold text-center py-8">Players</h2>
       <p className="text-center font-medium">Coming Soon!</p>
      <div className="text-center">
      <Link to=""> <button  className="bg-[#07579f] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Click Here</button></Link> 
      </div>
      </div>
     

    
      <div className="w-full border flex flex-col p-4 my-4 rounded-lg shadow-xl hover:scale-105 duration-300">
       <img src={Coaches} alt="coach" />
       <h2 className="text-2xl font-bold text-center py-8">Coaches</h2>
       <p className="text-center font-medium">Coming Soon!</p>
       <button className="bg-[#07579f] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Click Here</button>
      </div>
     


     
      <div className="w-full border flex flex-col p-4 my-4 rounded-lg shadow-xl hover:scale-105 duration-300">
       <img src={team1} alt="player" />
       <h2 className="text-2xl font-bold text-center py-8">Teams</h2>
       <p className="text-center font-medium">Coming Soon!</p>
       <button className="bg-[#07579f] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Click Here</button>
      </div>
   
      </div>
    </div>
  )
});

export default Cards