import React from "react";
import logo from "../assets/White logo - no background.png";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = ({prop, contact, about}) => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          <img
            src={logo}
            alt="brand.logo"
            height={300}
            width={300}
            className="mt-2"
          />
        </h1>
        <p className="py-4">
          Hoopnomics is full service international basketball marketing agency. We seek to help players, 
          teams and coaches find the solution that 
          meets their desires and needs.
        </p>

        <div className="flex justify-between md:w-[75%] my-6">
        <a href="https://www.linkedin.com/in/byron-burnett-44b412275/"> <FaLinkedin  size={30} color='#07579f' hoverColor="#00df9a" /> </a>
        <a href="https://www.instagram.com/hoopnomics/"> <FaInstagramSquare  size={30} color='#07579f' /> </a>
        <a href="https://twitter.com/hoopnomics"> <FaTwitterSquare size={30} color='#07579f' /> </a>
          
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div> 
        <h6 className="font-medium text-gray-400">Offerings</h6>
        <ul>
          <Link to="/advancedstats"><li className="py-2 text-sm">Analytics & Advanced Statistics</li></Link> 
           <Link to="/scouting"><li className="py-2 text-sm">Scouting Services</li></Link> 
           <Link to="/playerdevelopment"><li className="py-2 text-sm">Player Development</li></Link>
            <Link to="/consultancy"><li className="py-2 text-sm">Consultancy</li></Link>
        </ul>
        </div>
        <div> 
        <h6 className="font-medium text-gray-400">Content</h6>
        <ul>
            <Link to="/podcast"><li className="py-2 text-sm">Podcast</li></Link>
            <a href="https://blog.hoopnomics.com/"><li className="py-2 text-sm">Blog</li></a>
            <li className="py-2 text-sm">VideoCast</li>
            <li className="py-2 text-sm">Basketball Camps</li>
        </ul>
        </div>
        <div> 
        <h6 className="font-medium text-gray-400">Services</h6>
        <ul>
          <li 
          onClick={() => about.current.scrollIntoView({behavior:"smooth"})} 
          className="py-2 text-sm cursor-pointer"
          >About</li>
          <li onClick={() => prop.current.scrollIntoView({behavior:"smooth"})} 
          className="py-2 text-sm cursor-pointer"> Players
           </li>
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
