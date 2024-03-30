import React from 'react'
import {Tab, Tabs } from './Tabs'
import test from '../assets/example.jpg'

const PlayerProfile = () => {
  return (
    <div>
    <Tabs>
       
      <Tab label="Profile">
        <div className="py-4 bg-[#f7f7f7] h-full ">
          <h2 className="text-lg font-medium text-center mb-2">Player Profile</h2>
          <div className="w-[300px] h-auto mx-auto mt-8 shadow-xl bg-white border-2 border-purple-500 p-4 ">
           <img src={test} alt="example" 
           className="mx-auto rounded-full border-2 border-purple-500 object-cover object-center h-44 w-44 m-2 bg-zinc-100"
           
           />
             <div className="text-center"> 
            <p>Marcus Patterson</p>
            <p>Height: 6'4</p>
            <p>Weight: 215lbs</p>
            <p>School: MSU</p>
            <p>Team: BC Northsham</p>
            
            </div> 
          </div>
          <div className="px-4 py-16">
              <h2 className="text-2xl font-bold">Player Bio</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores minus odit aspernatur beatae natus maxime. Quo excepturi possimus cumque quod libero soluta voluptates saepe itaque cum sapiente molestias reiciendis laborum similique minima aut neque, accusamus quos fugit, unde nihil! Repudiandae, quod distinctio! Explicabo nihil expedita ipsam, ratione quis nostrum aut, recusandae, nam dicta facere consequatur? Totam quam error minus dolores omnis obcaecati maiores pariatur fugiat delectus? Nisi repellat placeat, inventore porro numquam id consectetur voluptate qui nesciunt laboriosam omnis architecto debitis corrupti! Esse vitae illum voluptatum, velit quasi ab harum sint dolor, voluptatibus fugiat minima aliquid error quam deserunt perspiciatis.</p><br />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quae debitis beatae cum, sunt tempora sit repudiandae. Sequi, harum? Temporibus doloribus eveniet quidem atque dicta doloremque quis debitis earum dolorem, soluta non magni quam sapiente odio, dolores in. Architecto illum maxime nesciunt! Quasi ipsam tenetur nobis soluta beatae placeat a adipisci? Numquam ex ipsam fugiat cupiditate iure culpa, aliquam, expedita, distinctio iste iusto architecto provident illo laudantium tenetur ducimus eaque unde quisquam minus. Cumque reprehenderit ullam expedita. Amet facere nisi, quam totam distinctio voluptate fugiat nesciunt soluta necessitatibus non dolorem neque, laborum ut ratione ipsam ex voluptatem, illum ducimus laudantium!</p>
            </div>
        </div>
      </Tab>
      <Tab label="Stats">
     
        <div className=" lg:w-full bg-white py-16 px-4 h-screen overflow-x-auto "> 
        <h2 className="text-lg font-medium text-center text-black mb-2">Season Stats</h2>
      <table class="overflow-hidden lg:w-[960px] md:w-auto  border-collapse border border-slate-400 mx-auto rounded-t-lg shadow-lg">
  <thead>
    <tr>
      <th className="border border-slate-300 bg-black text-white">MIN</th>
      <th className="border border-slate-300 bg-black text-white">PTS</th>
      <th className="hidden sm:table-cell border border-slate-300 bg-black text-white">FG</th>
      <th className="border border-slate-300 bg-black text-white">3PT</th>
      <th className="border border-slate-300 bg-black text-white">FT</th>
      <th className="border border-slate-300 bg-black text-white">OREB</th>
      <th className="border border-slate-300 bg-black text-white">DREB</th>
      <th className="border border-slate-300 bg-black text-white">AST</th>
      <th className="border border-slate-300 bg-black text-white">STL</th>
      <th className="border border-slate-300 bg-black text-white">BLK</th>
      <th className="border border-slate-300 bg-black text-white">TO</th>
      <th className="hidden sm:table-cell border border-slate-300 bg-black text-white">eFG%</th>
      <th className="hidden sm:table-cell border border-slate-300 bg-black text-white">TS%</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="text-center border border-slate-300">24</td>
      <td className="text-center border border-slate-300">12</td>
      <td className="hidden sm:table-cell text-center border border-slate-300">13-24</td>
      <td className="text-center border border-slate-300">6-7</td>
      <td className="text-center border border-slate-300">3</td>
      <td className="text-center border border-slate-300">4</td>
      <td className="text-center border border-slate-300">24</td>
      <td className="text-center border border-slate-300">12</td>
      <td className="text-center border border-slate-300">7</td>
      <td className="text-center border border-slate-300">3</td>
      <td className="text-center border border-slate-300">3</td>
      <td className="hidden sm:table-cell text-center border border-slate-300">56%</td>
      <td className="hidden sm:table-cell text-center border border-slate-300">65%</td>
    </tr>
    
  </tbody>
</table>
</div>
      </Tab>
      <Tab label="Highlights">
    
        <div className="lg:ml-80 md:ml-40 h-screen mt-20">
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