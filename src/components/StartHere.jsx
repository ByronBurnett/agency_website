import React from 'react'
import ReactPlayer from 'react-player'; 
import Start from '../assets/sample.mp4'

const StartHere = () => {
  return (
    <div>
 <ReactPlayer
            className='react-player fixed-bottom ml-96'
            url={Start}
            width='700px'
            height='700px'
            controls = {true}
            playing={true}
            muted={true}
            type='video/mp4'
            playsinline={true}
  />



    </div>
  )
}

export default StartHere 