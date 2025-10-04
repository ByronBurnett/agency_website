import React from 'react'

const Podcast = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-gray-200">
        <div className="max-w-[1240px] mx-auto">
   <h1 className=" mb-10 font-bold tracking-tight text-black sm:text-4xl">
              Subscribe to our Podcast.
            </h1>
    <iframe className='mx-auto' id="player_iframe" src="https://www.buzzsprout.com/2535541?client_source=large_player&iframe=true&referrer=https%3A%2F%2Fwww.buzzsprout.com%2Fadmin%2F2535541%2Fpodcast%2Fembed" loading="lazy" width="1240px" height="375" frameborder="0" scrolling="no" title="Hoopnomics"></iframe>
     </div>
    </div>
  )
}

export default Podcast