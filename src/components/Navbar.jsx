import React, { useState } from "react";
import logo from "../assets/White logo - no background.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";



const Navbar = ({ prop, contact, about, blog, podcast }) => {
  
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
 
  };

  return (
    <div className="flex justify-between  items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <Link to="/">
        <h1 className="w-full text-3xl font-bold">
          <img
            src={logo}
            alt="brand.logo"
            height={300}
            width={275}
            className="mt-2"
          />
        </h1>
      </Link>
      
      <ul className="hidden md:flex">
        <Link to="/">
          <li className="p-4">Home</li>
        </Link>

        <li className="p-4"
          
        >
          Player Development
        </li>

        <li className="p-4"
          
        >
          Basketball Camps
        </li>


        <li
          onClick={() => blog.current?.scrollIntoView({ behavior: "smooth" })}
          className="p-4 cursor-pointer"
        >
          Blog
        </li>


        

        <li
          onClick={() =>
            contact.current?.scrollIntoView({ behavior: "smooth" })
          }
          className="p-4 cursor-pointer"
        >
          Contact
        </li>
       
      </ul>
      
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[85%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4">
          <img src={logo} alt="brand.logo" height={300} width={275} />
        </h1>

        <ul className="p-4">
          <Link to="/">
            <li className="p-4 border-b border-b-gray-600">Home</li>
          </Link>
          <Link to="/about">
            <li className="p-4 border-b border-b-gray-600">About</li>
          </Link>
          <Link to="/contact">
            <li className="p-4">Contact</li>
          </Link>
          
        </ul>
       
      </div>
    </div>
  );
};

export default Navbar;
