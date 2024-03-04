import React from 'react'

const Podcast = () => {
  return (
    <div className="w-full mx-auto">
        
        <iframe src="https://embed.podcasts.apple.com/us/podcast/hoopnomics/id1676086508?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=dark" 
        height="450px" 
        title="hoopnomics-podcast"
        frameborder="0" 
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" 
        allow="autoplay *; encrypted-media *; clipboard-write" 
        style={{width: '100%', 
        maxWidth: '1240px', 
        overflow: 'hidden',
        margin: '80px auto',
        borderRadius: '10px', 
        transform: 'translateZ(0px)',
        animation: '2s ease 0s 6 normal none running loading-indicator',
        backgroundColor: 'black',
      }}>
       </iframe>

       
    </div>
  )
}

export default Podcast