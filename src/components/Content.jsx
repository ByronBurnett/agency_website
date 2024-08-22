import React from 'react'
import { Link } from "react-router-dom";

import blog from '../assets/blog.jpg'
import youtube from '../assets/youtube.jpg'
import podcast from '../assets/podcast.jpg'

const Content = () => {
  
  
    return (
        <div className="w-full py-[10rem] px-4 border-b-2 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        
          <div className="w-full border flex flex-col p-4 my-4 rounded-lg shadow-xl hover:scale-105 duration-300 bg-white">
          <img src={blog} alt="player" />
          <h2 className="text-2xl font-bold text-center py-8">Blog</h2>
         
         <div className="text-center">
         <Link to ="/blog"><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}  className="bg-[#07579f] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Click Here</button></Link> 
         </div>
         </div>
        
   
       
         <div className="w-full border flex flex-col p-4 my-4 rounded-lg shadow-xl hover:scale-105 duration-300 bg-white">
          <img src={youtube} alt="coach" />
          <h2 className="text-2xl font-bold text-center py-8">Youtube Streams</h2>
         
          <button className="bg-[#07579f] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Click Here</button>
         </div>
        
   
   
        
         <div className="w-full border flex flex-col p-4 my-4 rounded-lg shadow-xl hover:scale-105 duration-300 bg-white">
          <img src={podcast} alt="player" />
          <h2 className="text-2xl font-bold text-center py-8">Podcast</h2>
          
          <button className="bg-[#07579f] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Click Here</button>
         </div>
      
         </div>
       </div>
  )
}

export default Content