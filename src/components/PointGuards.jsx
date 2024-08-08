import React from 'react';
import data from '../../src/data/players.json'
import test from '../assets/example.jpg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



const PointGuards = () => {
  return (
   
    <div className="w-full py-[10rem] px-4 bg-white mx-auto grid md:grid-cols-3 gap-8 ">

     {data.filter((player) => player.position === 'PG')
     .map(( player, index)  => (
              
      <Link
      style={{ color: "black" }}
      to={{ pathname: "/player/" + player.player_id,
        state: {
          player_id: player.player_id,
          firstName: player.firstName,
          lastName: player.lastName,
        },
      }}
    >

<div key={index} className="w-full border flex flex-col  p-4 my-4 rounded-lg shadow-xl border-purple-500 hover:scale-105 duration-300">
                <img src={test} alt="example" 
                className="mx-auto rounded-full border-2 border-purple-500 object-cover object-center h-44 w-44 m-2 bg-zinc-100"
               />
               <div className="text-center"> 
                <p>Name: {player.playerName}</p>
                <p>Position: {player.position}</p>
                <p>University: {player.college}</p>
                <p>Height: {player.height}</p>
                <p>Weight: {player.weight}</p>
                </div>
               </div>
               </Link>
           
             
     ))}
      </div>
      
  )
}

export default PointGuards