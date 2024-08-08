import React from 'react'
import {Tab, Tabs } from './Tabs'
import test from '../assets/example.jpg'
import data from '../data/players.json'
import ImageSlider from './ImageSlider'
import { useParams} from 'react-router-dom/cjs/react-router-dom.min';
import pic1 from '../assets/players_images/pic1.jpg'
import pic2 from '../assets/players_images/pic2.jpg'
import pic3 from '../assets/players_images/pic3.jpg'
import pic4 from '../assets/players_images/pic4.jpg'
import pic5 from '../assets/players_images/pic5.jpg'

const IMAGES = [pic1, pic2, pic3, pic4, pic5]

const PlayerProfile = () => {
  
  const { player_id } = useParams();
  console.log(player_id)
  console.log(data)

  
  
  return (
    <div>
    
    {data.filter((player) => player.player_id === player_id)
       .map((player, index) => (
    
    <Tabs>
    <Tab  label="Profile">
      
        
          <div key={index} className="py-4 bg-[#f7f7f7] h-auto ">
            <h2 className="text-2xl font-medium text-center mb-2">Player Profile</h2>
            <div className="w-[300px] h-auto mx-auto mt-8 shadow-xl bg-white border-2 border-purple-500 p-4 ">
             <img src={test} alt="example" 
             className="mx-auto rounded-full border-2 border-purple-500 object-cover object-center h-44 w-44 m-2 bg-zinc-100"
             
             />
               <div className="text-center"> 
              <p>{player.firstName} {player.lastName}</p>
              <p>Height: {player.height}</p>
              <p>Weight: {player.weight}</p>
              <p>School: {player.college}</p>

              
              
              </div> 
            </div>
            <div className="px-4 py-16">
                <h2 className="text-2xl font-bold">Player Bio</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores minus odit aspernatur beatae natus maxime. Quo excepturi possimus cumque quod libero soluta voluptates saepe itaque cum sapiente molestias reiciendis laborum similique minima aut neque, accusamus quos fugit, unde nihil! Repudiandae, quod distinctio! Explicabo nihil expedita ipsam, ratione quis nostrum aut, recusandae, nam dicta facere consequatur? Totam quam error minus dolores omnis obcaecati maiores pariatur fugiat delectus? Nisi repellat placeat, inventore porro numquam id consectetur voluptate qui nesciunt laboriosam omnis architecto debitis corrupti! Esse vitae illum voluptatum, velit quasi ab harum sint dolor, voluptatibus fugiat minima aliquid error quam deserunt perspiciatis.</p><br />
                <h2 className="text-2xl font-bold">Scouting Report</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quae debitis beatae cum, sunt tempora sit repudiandae. Sequi, harum? Temporibus doloribus eveniet quidem atque dicta doloremque quis debitis earum dolorem, soluta non magni quam sapiente odio, dolores in. Architecto illum maxime nesciunt! Quasi ipsam tenetur nobis soluta beatae placeat a adipisci? Numquam ex ipsam fugiat cupiditate iure culpa, aliquam, expedita, distinctio iste iusto architecto provident illo laudantium tenetur ducimus eaque unde quisquam minus. Cumque reprehenderit ullam expedita. Amet facere nisi, quam totam distinctio voluptate fugiat nesciunt soluta necessitatibus non dolorem neque, laborum ut ratione ipsam ex voluptatem, illum ducimus laudantium!</p>
              </div>
          </div>
        </Tab>
        
      
<Tab label="Stats">

  
         <div className=" lg:w-full bg-white py-16 px-4 h-screen overflow-x-auto "> 
         <img src={test} alt="example" className="mx-auto rounded-full border-2 border-purple-500 object-cover object-center h-44 w-44 m-2 bg-zinc-100"
             />
         <h1 className="text-2xl font-medium text-center text-black mb-2">{player.playerName} | {player.height} {player.weight}</h1>
         <h2 className="text-2xl font-medium text-center text-black mb-2">{player.position}</h2>
         <h2 className="text-2xl font-medium text-center text-black mb-2">Season Stats</h2>
       <table className="overflow-hidden lg:w-[960px] md:w-auto  border-collapse border border-slate-400 mx-auto rounded-t-lg shadow-lg">
   <thead>
     <tr >
     <th className="border border-slate-300 bg-black text-white">Season</th>
     <th className="border border-slate-300 bg-black text-white">Team</th>
     <th className="border border-slate-300 bg-black text-white">GP</th>
       <th className="border border-slate-300 bg-black text-white">MIN</th>
       <th className="border border-slate-300 bg-black text-white">FG</th>
       <th className="hidden sm:table-cell border border-slate-300 bg-black text-white">FG%</th>
       <th className="border border-slate-300 bg-black text-white">3PT</th>
       <th className="border border-slate-300 bg-black text-white">3P%</th>
       <th className="border border-slate-300 bg-black text-white">FT</th>
       <th className="border border-slate-300 bg-black text-white">FT%</th>
       <th className="border border-slate-300 bg-black text-white">OR</th>
       <th className="border border-slate-300 bg-black text-white">DR</th>
       <th className="border border-slate-300 bg-black text-white">REB</th>
       <th className="border border-slate-300 bg-black text-white">AST</th>
       <th className="hidden sm:table-cell border border-slate-300 bg-black text-white">BLK</th>
       <th className="hidden sm:table-cell border border-slate-300 bg-black text-white">STL</th>
       <th className="hidden sm:table-cell border border-slate-300 bg-black text-white">PF</th>
       <th className="hidden sm:table-cell border border-slate-300 bg-black text-white">TO</th>
       <th className="hidden sm:table-cell border border-slate-300 bg-black text-white">PTS</th>
     </tr>
   </thead>
   <tbody>
   {player.stats && player.stats.map(data => (
    
  
    <tr key={index}>
      <td className="text-center border border-slate-300">{data.season}</td>
      <td className="text-center border border-slate-300">{data.team}</td>
      <td className="text-center border border-slate-300">{data.games_played}</td>
       <td className="text-center border border-slate-300">{data.min}</td>
       <td className="text-center border border-slate-300">{data.fgm}-{data.fga}</td>
       <td className="hidden sm:table-cell text-center border border-slate-300">{data.fg_pct}</td>
       <td className="text-center border border-slate-300 ">{data.fg3_pct}</td>
       <td className="text-center border border-slate-300">{data.fg3a}-{data.fg3m}</td>
       <td className="text-center border border-slate-300">{data.fta}-{data.ftm}</td>
       <td className="text-center border border-slate-300">{data.ft_pct}</td>
       <td className="text-center border border-slate-300">{data.oreb}</td>
       <td className="text-center border border-slate-300">{data.dreb}</td>
       <td className="text-center border border-slate-300">{data.reb}</td>
       <td className="text-center border border-slate-300">{data.ast}</td>
       <td className="hidden sm:table-cell text-center border border-slate-300">{data.blk}</td>
       <td className="hidden sm:table-cell text-center border border-slate-300">{data.stl}</td>
       <td className="text-center border border-slate-300">{data.pf}</td>
       <td className="text-center border border-slate-300">{data.turnover}</td>
       <td className="text-center border border-slate-300">{data.pts}</td>
     </tr>
     ))}
   </tbody>
  
 </table>

 <div>
 <h2 className="text-2xl font-medium text-center text-black mt-10">Advanced Stats</h2>
       <table className="overflow-hidden lg:w-[960px] md:w-auto  border-collapse border border-slate-400 mx-auto rounded-t-lg shadow-lg">
   <thead>
     <tr >
     <th className="border border-slate-300 bg-black text-white">Season</th>
     <th className="border border-slate-300 bg-black text-white">Team</th>
     <th className="border border-slate-300 bg-black text-white">GP</th>
       <th className="border border-slate-300 bg-black text-white">MIN</th>
       <th className="border border-slate-300 bg-black text-white">FG</th>
       <th className="hidden sm:table-cell border border-slate-300 bg-black text-white">FG%</th>
       <th className="border border-slate-300 bg-black text-white">3PT</th>
       <th className="border border-slate-300 bg-black text-white">3P%</th>
       <th className="border border-slate-300 bg-black text-white">FT</th>
       <th className="border border-slate-300 bg-black text-white">FT%</th>
       <th className="border border-slate-300 bg-black text-white">OR</th>
       <th className="border border-slate-300 bg-black text-white">DR</th>
       <th className="border border-slate-300 bg-black text-white">REB</th>
       <th className="border border-slate-300 bg-black text-white">AST</th>
       <th className="hidden sm:table-cell border border-slate-300 bg-black text-white">BLK</th>
       <th className="hidden sm:table-cell border border-slate-300 bg-black text-white">STL</th>
       <th className="hidden sm:table-cell border border-slate-300 bg-black text-white">PF</th>
       <th className="hidden sm:table-cell border border-slate-300 bg-black text-white">TO</th>
       <th className="hidden sm:table-cell border border-slate-300 bg-black text-white">PTS</th>
     </tr>
   </thead>
   <tbody>
   {player.stats && player.stats.map(data => (
    
  
    <tr key={index}>
      <td className="text-center border border-slate-300">{data.season}</td>
      <td className="text-center border border-slate-300">{data.team}</td>
      <td className="text-center border border-slate-300">{data.games_played}</td>
       <td className="text-center border border-slate-300">{data.min}</td>
       <td className="text-center border border-slate-300">{data.fgm}-{data.fga}</td>
       <td className="hidden sm:table-cell text-center border border-slate-300">{data.fg_pct}</td>
       <td className="text-center border border-slate-300 ">{data.fg3_pct}</td>
       <td className="text-center border border-slate-300">{data.fg3a}-{data.fg3m}</td>
       <td className="text-center border border-slate-300">{data.fta}-{data.ftm}</td>
       <td className="text-center border border-slate-300">{data.ft_pct}</td>
       <td className="text-center border border-slate-300">{data.oreb}</td>
       <td className="text-center border border-slate-300">{data.dreb}</td>
       <td className="text-center border border-slate-300">{data.reb}</td>
       <td className="text-center border border-slate-300">{data.ast}</td>
       <td className="hidden sm:table-cell text-center border border-slate-300">{data.blk}</td>
       <td className="hidden sm:table-cell text-center border border-slate-300">{data.stl}</td>
       <td className="text-center border border-slate-300">{data.pf}</td>
       <td className="text-center border border-slate-300">{data.turnover}</td>
       <td className="text-center border border-slate-300">{data.pts}</td>
     </tr>
     ))}
   </tbody>
  
 </table>
 
 </div>

 <div classname="max-w-[1240px] w-full h-[500px]">
  <ImageSlider imageUrls={IMAGES} />
 </div>

 </div>
    

    </Tab>



        
     <Tab label="Highlights">
     <h2 className="text-2xl font-bold text-white text-center">Highlights & Game Film</h2> 
          <div className="lg:ml-80 md:ml-40 h-screen mt-20">
          
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dCgSPdXeeq8?si=1ym6X3xzf_evfHVE" title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen></iframe>
          </div>
  
        
          </Tab>



          </Tabs>

       



       ))}
       
    
  </div>
);
};



export default PlayerProfile