import React from 'react'

import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_854rt9h', 'template_p5sxq3t', form.current, {
        publicKey: 'UDDwXOqeq60d8Gfam',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log('message sent');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };





  
  
  return (
    <div>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-white text-2xl">
              Please connect with us, send a short message and we will reach out!
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form ref={form}onSubmit={sendEmail} className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label  className="leading-7 text-sm text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full text-center">
                <button className="bg-[#07579f] text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">
                  
                  <input type="submit" value="Send" />
                </button>
              </div>
  
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact