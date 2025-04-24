import React from 'react'
import gymwork from '../assets/training.jpg'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';


const PlayerDevelopment = () => {
  
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
    <> 
    <div className="py-16 px-4 bg-white">
    <div className="max-w-[1240px] grid md:grid-cols-2">
      <img src={gymwork} alt="founder" className="w-[500px] mx-auto px-4" />
      <div className="flex flex-col justify-center bg-white px-4">
        <p className="text-black font-bold text-4xl pb-8">Player Development</p>
        <p>Player Development is key for young and aspiring athlete, the development of skills on the court such as leadership, accountibilty, working with others and overcoming obstacles to your individual goals as a basketball player are important in the life cycle of a career.</p> <br/>
        <p>As players get older and enter new level of competetion, development becomes more significant. We like to tailor workouts and reigments that fits the player's needs at any given time. With over 20 years of experience in basketball at the collegiate and professional ranks we can help you reach new heights.</p>
       
      </div>
    </div>
    <hr class="w-48 h-1 mx-auto my-4 bg-black border-0 rounded-sm md:my-10 dark:bg-gray-700"></hr>
    </div>
     

    <div className="bg-white">
      <section id="contact" className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-black text-2xl">
              Please send us a message about player development inquiries.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form ref={form} onSubmit={sendEmail} className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-black">
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
                  <label  className="leading-7 text-sm text-black">
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
                    className="leading-7 text-sm text-black"
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
                <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">
                  
                  <input type="submit" value="Send" />
                </button>
              </div>
  
            </form>
          </div>
        </div>
      </section>
    </div>



  </>
  )
}

export default PlayerDevelopment