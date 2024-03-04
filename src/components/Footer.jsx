import React from "react";
import logo from "../assets/White logo - no background.png";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
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
          Hoopnomics is full service international basketball marketing agency. Headquatered in Helsinki, Finland we seek to help players, 
          teams and coaches find the solution that 
          meets their desires and needs.
        </p>

        <div className="flex justify-between md:w-[75%] my-6">
          <FaLinkedin  size={30} />
          <FaInstagramSquare  size={30}/>
          <FaTwitterSquare size={30} />
          <FaFacebookSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div> 
        <h6 className="font-medium text-gray-400">Offerings</h6>
        <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Statisitcs</li>
            <li className="py-2 text-sm">Basketball Development</li>
            <li className="py-2 text-sm">Consultancy</li>
        </ul>
        </div>
        <div> 
        <h6 className="font-medium text-gray-400">Content</h6>
        <ul>
            <Link to="/podcast"><li className="py-2 text-sm">Podcast</li></Link>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">VideoCast</li>
            <li className="py-2 text-sm">Events</li>
        </ul>
        </div>
        <div> 
        <h6 className="font-medium text-gray-400">Services</h6>
        <ul>
            <li className="py-2 text-sm">Players</li>
            <li className="py-2 text-sm">Coaches</li>
            <li className="py-2 text-sm">Teams</li>
            <li className="py-2 text-sm">Contact</li>
        </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
