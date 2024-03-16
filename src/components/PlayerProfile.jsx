import React from 'react'
import {Tab, Tabs } from './Tabs'

const PlayerProfile = () => {
  return (
    <div>
    <Tabs>
       
      <Tab label="Profile">
        <div className="py-4 bg-white h-screen ">
          <h2 className="text-lg font-medium mb-2">Player Profile</h2>
          <p className="text-gray-700">
            Content 1
          </p>
        </div>
      </Tab>
      <Tab label="Stats">
        <div className="bg-white py-16 px-4 h-screen"> 
     
      <table class=" overflow-hidden w-[960px] border-collapse border border-slate-400 mx-auto rounded-t-lg shadow-lg ">
  <thead>
    <tr>
      <th className="border border-slate-300 bg-black text-white">MIN</th>
      <th className="border border-slate-300 bg-black text-white">REB</th>
      <th className="border border-slate-300 bg-black text-white">FG</th>
      <th className="border border-slate-300 bg-black text-white">3PT</th>
      <th className="border border-slate-300 bg-black text-white">FT</th>
      <th className="border border-slate-300 bg-black text-white">OREB</th>
      <th className="border border-slate-300 bg-black text-white">REB</th>
      <th className="border border-slate-300 bg-black text-white">AST</th>
      <th className="border border-slate-300 bg-black text-white">STL</th>
      <th className="border border-slate-300 bg-black text-white">BLK</th>
      <th className="border border-slate-300 bg-black text-white">TO</th>
      <th className="border border-slate-300 bg-black text-white">PTS</th>
      <th className="border border-slate-300 bg-black text-white">eFG%</th>
      <th className="border border-slate-300 bg-black text-white">TS%</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="text-center border border-slate-300">24</td>
      <td className="text-center border border-slate-300">12</td>
      <td className="text-center border border-slate-300">13-24</td>
      <td className="text-center border border-slate-300">6-7</td>
      <td className="text-center border border-slate-300">3</td>
      <td className="text-center border border-slate-300">4</td>
      <td className="text-center border border-slate-300">24</td>
      <td className="text-center border border-slate-300">12</td>
      <td className="text-center border border-slate-300">7</td>
      <td className="text-center border border-slate-300">3</td>
      <td className="text-center border border-slate-300">3</td>
      <td className="text-center border border-slate-300">4</td>
      <td className="text-center border border-slate-300">3</td>
      <td className="text-center border border-slate-300">4</td>
    </tr>
    
  </tbody>
</table>
</div>
      </Tab>
      <Tab label="Highlights">
    
        <div className="w-[1240px] grid grid-cols-1 ml-80 h-screen mt-20">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dCgSPdXeeq8?si=1ym6X3xzf_evfHVE" title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
        </div>
      </Tab>
    </Tabs>
  </div>
);
};



export default PlayerProfile