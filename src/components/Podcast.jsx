import { useRef, useState, useEffect } from "react";
import React from 'react'

const Podcast = () => {

     const ref = useRef();
  const [height, setHeight] = useState('250px');

  const onLoad = () => {
    setHeight(ref.current.scrollHeight + 'px');
  };
  useEffect(() => {
    onLoad();
  }, []);

  return (
     <section className=" bg-gray-200 isolate overflow-hidden">
      <div className="px-6 mx-auto lg:px-8 max-w-7xl">
    
        
          
            <h1 className="text-3xl mt-10 font-bold tracking-tight text-black sm:text-4xl mb-10">
              Subscribe to our Podcast.
            </h1>
            
        <iframe ref={ref}
      onLoad={onLoad} height={height}  width="660px" title="Media player" src="https://embed.podcasts.apple.com/us/podcast/hoopnomics-re-launch/id1838797509?i=1000725776881&amp;itscg=30200&amp;itsct=podcast_box_player&amp;ls=1&amp;mttnsubad=1000725776881&amp;theme=auto" id="iframe" className border='0'borderRadius='12px' max-width='860px' sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *; clipboard-write"></iframe>
        </div>
    
    </section>
  );
};


export default Podcast