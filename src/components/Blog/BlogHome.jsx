import React from 'react'
import {useState, useEffect}  from 'react'
import {graphcms, QUERY_POSTS} from '../../Graphql/Queries'
import Posts from './Posts'
import {forwardRef} from 'react'

import RelatedPosts from './RelatedPosts'
import Header from './Header';
import Categories from './Categories';
const BlogHome = forwardRef((props, ref) => {
  
   const [posts, setPosts] = useState([])

   useEffect(() => {
     
    graphcms.request(QUERY_POSTS)
    .then(res => setPosts(res.posts))
   
  
  }, [])
  
   return (
    <>
      <div ref={ref} className="container mx-auto px-10 mt-8 mb-8">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <Posts posts={posts} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
            <RelatedPosts />
            <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default BlogHome 