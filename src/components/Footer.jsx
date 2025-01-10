import React from "react";
import logo from "../assets/White logo - no background.png";

import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  
  
} from "react-icons/fa";



import { Link } from "react-router-dom";

const Footer = ({prop, contact, about}) => {
  return (
    
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full">
          <img
            src={logo}
            alt="brand.logo"
            height={300}
            width={300}
            className="mt-2"
          />
        </h1>
        <p className="py-4">
          Premier basketball marketing agency. 
        </p>

        <div className="flex justify-between md:w-[75%] my-6">
        <a href="https://www.instagram.com/hoopnomics/"> <FaInstagramSquare  size={30} color='#07579f' /> </a>
        <a href="https://twitter.com/hoopnomics"> <FaTwitterSquare size={30} color='#07579f' /> </a>
        <a href="https://www.youtube.com/@hoopnomics"> <FaYoutubeSquare size={30} color='#07579f' /> </a>
    
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div> 
        <h6 className="font-medium text-gray-400">Offerings</h6>
        <ul>
          <Link to="/advancedstats"><li onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="py-2 text-sm">Analytics & Advanced Statistics</li></Link> 
           <Link to="/scouting"><li onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="py-2 text-sm">Scouting Services</li></Link> 
           <Link to="/playerdevelopment"><li onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="py-2 text-sm">Player Development</li></Link>
            <Link to="/consultancy"><li onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="py-2 text-sm">Consultancy</li></Link>
            <Link to="/camps"><li onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="py-2 text-sm">Basketball Camps</li></Link>
        </ul>
        </div>
        
        <div> 
        <h6 className="font-medium text-gray-400">Hoopnomics Content</h6>
        <ul>
    
            <Link to ="/blog"><li onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="py-2 text-sm">Blog</li></Link>
            <Link to="/videocast"><li onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="py-2 text-sm">Videocast</li></Link>
            
        </ul>
        </div>
        <div> 
        <h6 className="font-medium text-gray-400">Services</h6>
        <ul>
         
          
            <li
             onClick={() => contact.current.scrollIntoView({behavior:"smooth"})} 
             className="py-2 text-sm cursor-pointer"
            >Contact</li>
        </ul>
       
    
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
