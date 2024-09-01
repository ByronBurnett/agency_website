import React from 'react'

const PodcastFrontPage = () => {
  return (
    
   <div className="py-16 px-4 bg-white">
    <div className="text-2xl p-2 text-center mb-10"><h2>Podcast Episodes</h2></div>
    <div className="max-w-[960px] mx-auto"> 
    <iframe id="player_iframe" src="https://www.buzzsprout.com/2035355?client_source=large_player&iframe=true&referrer=https%3A%2F%2Fwww.buzzsprout.com%2F2035355%2Fpodcast%2Fembed" loading="lazy" width="100%" height="375" frameborder="0" scrolling="no" title="Hoopnomics "></iframe>
    </div>
   </div>
  )
}

export default PodcastFrontPage