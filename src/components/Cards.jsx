import React from 'react'
import player from '../assets/players.jpg'
import Coaches from '../assets/coach.png.jpg'
import team1  from '../assets/team1.jpg'
import { Link } from 'react-router-dom/';

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white ">
     <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
     <Link to="/players"><div className="w-full border flex flex-col p-4 my-4 rounded-lg shadow-xl hover:scale-105 duration-300">
       <img src={player} alt="player" />
       <h2 className="text-2xl font-bold text-center py-8">Players</h2>
       <p className="text-center font-medium">Check out our clients.</p>
       <button className="bg-[#07579f] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Click Here</button>
      </div>
     </Link>

    
      <div className="w-full border flex flex-col p-4 my-4 rounded-lg shadow-xl hover:scale-105 duration-300">
       <img src={Coaches} alt="coach" />
       <h2 className="text-2xl font-bold text-center py-8">Coaches</h2>
       <p className="text-center font-medium">Check out our clients.</p>
       <button className="bg-[#07579f] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Click Here</button>
      </div>
     


     
      <div className="w-full border flex flex-col p-4 my-4 rounded-lg shadow-xl hover:scale-105 duration-300">
       <img src={team1} alt="player" />
       <h2 className="text-2xl font-bold text-center py-8">Teams</h2>
       <p className="text-center font-medium">Services for teams.</p>
       <button className="bg-[#07579f] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Click Here</button>
      </div>
   
      </div>
    </div>
  )
}

export default Cards