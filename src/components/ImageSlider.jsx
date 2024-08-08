import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import React from 'react'
import { useState } from 'react'

const ImageSlider = ({imageUrls}) => {
  
  const [imageIndex, setImageIndex] = useState(0);

   const showPrevImage = () => {
      setImageIndex(index => {
        if (index === 0) return imageUrls.length -1
        return index -1 

        
      })
   }

   const showNextImage = () => {
    setImageIndex(index => {
        if (index === imageUrls.length - 1) return 0
        return index + 1
    })
   }
  
    return (
    <div className=" relative w-full h-full mt-20 ">
      <img src={imageUrls[imageIndex]} alt='player-photos'
      className="block w-[500px] h-[500px] mx-auto object-cover"
      />
      <button onClick={showPrevImage} className="block absolute top-0 bottom-0 left-0 p-4 cursor-pointer stroke-white fill-black">
        <ArrowBigLeft size={40} />
      </button>
      <button onClick={showNextImage} className="block absolute top-0 bottom-0 p-4 right-0 cursor-pointer stroke-white fill-black 
      ">
        <ArrowBigRight size={40}/>
      </button>
    </div>
  )
}

export default ImageSlider