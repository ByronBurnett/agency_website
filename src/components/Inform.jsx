import React from "react";
import connect from "../assets/connect.jpg";
import {   IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";


const Inform = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-[1240px] grid md:grid-cols-2">
        <img src={connect} alt="founder" className="w-[500px] mx-auto px-4" />
        <div className="flex flex-col justify-center bg-white">
          <p className="text-[#07579f] font-bold text-4xl">Contact</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Hoopnomics
          </h1>

          <p className="text-2xl flex">
            Email: <AiOutlineMail size={30} className="ml-1 mr-1" />  info@hoopnomics.com
          </p>
          <p className="text-2xl flex">
            USA (Skype): <IoIosPhonePortrait size={30} /> +1 305 831 4962
          </p>
          <p className="text-2xl flex">
            Finland (WhatsApp): <IoIosPhonePortrait size={30} /> +358 44 236 8119
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inform;
