import React from 'react'
import {forwardRef} from 'react'
import player from '../assets/players.jpg'
import Coaches from '../assets/coach.png.jpg'
import Team from '../assets/team.jpg'

import { Link } from 'react-router-dom/';

const Cards = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-full py-[10rem] px-4 bg-white ">
     <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-4">
     
      <div className="max-w-sm bg-white border border-gray-400 rounded-lg shadow-lg hover:scale-105 duration-300">
    
        <img src={player} className="rounded-t-lg"  alt="player_pic" />
    
    <div class="p-5">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Players</h5>
        
        <p class="mb-3 font-normal text-black">Enter to see Hoopnomics players list, reach out if you are interested in signing any of our clients.</p>
        <Link to="/"> 
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
        </Link>
    </div>
</div>

<div className="max-w-sm bg-white border border-gray-400 rounded-lg shadow-lg hover:scale-105 duration-300">
    
        <img src={Coaches} className="rounded-t-lg"  alt="coach_pic" />
    
    <div class="p-5">
       
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Coaches</h5>
       
        <p className="mb-3 font-normal text-black">Enter to see Hoopnomics coaches list, reach out if you are interested in signing any of our clients.</p>
        <Link to="/"> 
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
        </Link>
    </div>
</div>



<div className="max-w-sm bg-white border border-gray-400 rounded-lg shadow-lg hover:scale-105 duration-300">
    
        <img src={Team} className="rounded-t-lg"  alt="team_pic" />
    
    <div class="p-5">
       
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Teams</h5>
       
        <p className="mb-3 font-normal text-black">Enter to see Hoopnomics coaches list, reach out if you are interested in signing any of our clients.</p>
        <Link to="/teams"> 
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
        </Link>
    </div>
</div>




     
    
   
      </div>
    </div>
  )
});

export default Cards