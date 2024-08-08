import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { graphcms, QUERY_BY_CATEGORY, QUERY_SLUG_CATEGORIES } from '../../Graphql/Queries'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Posts from './Posts'

const PostByCategory = () => {
  
     const slug = useParams()
    
     const [posts, setPosts] = useState([])

    useEffect(() => {
        
    graphcms.request(QUERY_BY_CATEGORY, slug)
    .then(res => setPosts(res.posts))
     
    },  [slug])

    

    return (
     <>
     <div className="container mx-auto px-10 mt-8 mb-8">
       
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
         <div className="col-span-1 lg:col-span-8">
           <Posts posts={posts} />
         </div>
         <div className="col-span-1 lg:col-span-4">
           <div className="relative lg:sticky top-8">
        
           </div>
         </div>
       </div>
     </div>
   </>
  )
}

export default PostByCategory