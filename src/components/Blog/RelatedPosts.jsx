import React from 'react'
import {useState, useEffect} from 'react'
import { graphcms, QUERY_SIMILAR_POSTS, QUERY_RECENT_POST } from '../../Graphql/Queries'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Moment from 'react-moment';

const RelatedPosts = ({slug, categories}) => {
  
   const [relatedPosts, setRelatedPosts] = useState([])
  

   useEffect(()  => {

    if(slug){
        graphcms.request(QUERY_SIMILAR_POSTS, {categories, slug})
        .then((result) => setRelatedPosts(result))
      } else {
        graphcms.request(QUERY_RECENT_POST)
        .then((result) => setRelatedPosts(result))
      }

   }, [slug])
    
   console.log(slug)
    console.log(categories)
  
    console.log(relatedPosts)

   
    return (
    
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
    <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
    {relatedPosts?.posts?.map((post, index) => (
      <div key={index} className="flex items-center w-full mb-4">
        <div className="w-16 flex-none">
          <img
           
            alt={post.title}
            height="60px"
            width="60px"
            unoptimized
            className="align-middle rounded-full"
            src={post.coverPhoto.url}
          />
        </div>
        <div className="flex-grow ml-4">
          <p className="text-gray-500 font-xs">{<Moment format='MMM DD, YYYY'>{post.createdAt}</Moment>}</p>
          <Link to={`/article/${post.slug}`} className="text-md" key={index}>{post.title}</Link>
        </div>
      </div>
    ))}
  </div>
  )
}

export default RelatedPosts