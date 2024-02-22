import React from 'react';
import test from '../assets/sample.jpg'
import test2 from '../assets/sample_2.jpg';

const Players = () => {
  return (
    <div className="w-full py-[5rem] px-4 bg-white">
        <div className="max-w-[1240px]  mx-auto grid md:grid-cols-3 gap-8">
        <div class="max-w-sm rounded overflow-hidden shadow-xl hover:scale-105 duration-300">
  <img className="w-full" src={test2} alt="player_1" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Clients Name</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Profile</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Stats</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Video</span>
  </div>
</div>
        </div>
    </div>
  )
}

export default Players