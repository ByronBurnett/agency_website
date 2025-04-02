import React from "react";
import logo from "../assets/White logo - no background.png";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutubeSquare,
  
  } from "react-icons/fa";

import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";


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
          Premier basketball agency and brand.
        </p>

        <div className="flex justify-between md:w-[75%] my-6">
        <a href="https://www.instagram.com/hoopnomics/"> <FaInstagramSquare  size={30} color='#1E88E5' /> </a>
        <a href="https://twitter.com/hoopnomics"> <FaTwitterSquare size={30} color='1E88E5' /> </a>
        <a href="https://www.youtube.com/@hoopnomics"> <FaYoutubeSquare size={30} color='1E88E5' /> </a>
        <a href="https://www.linkedin.com/in/byron-burnett-815825356/"> <FaLinkedin size={30} color='1E88E5' /> </a>
    
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div> 
        <h6 className="font-medium text-gray-400">Offerings</h6>
        <ul>
        
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
            
        </ul>
        </div>
        <div> 
        <h6 className="font-medium text-gray-400">Services</h6>
        <ul>
         
          <Link to="/about"> 
            <li onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
             className="py-2 text-sm cursor-pointer"
            >About Us</li>
            </Link>
        </ul>
        
       
    
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
