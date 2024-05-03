import React from 'react'
import video from '../assets/videocast.jpg'

const VideoCast = () => {
  return (
    <div className="py-16 px-4 bg-white">
    <div className="max-w-[1240px] grid md:grid-cols-2">
      <img src={video} alt="founder" className="w-[500px] mx-auto px-4" />
      <div className="flex flex-col justify-center bg-white px-4">
        <p className="text-[#07579f] font-bold text-4xl pb-8">Videocast</p>
        <p className="text-6xl font-bold">Coming Soon!</p> <br/>
        
      </div>
    </div>
  </div>
  )
}

export default VideoCast