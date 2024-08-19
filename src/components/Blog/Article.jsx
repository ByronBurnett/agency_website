import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { graphcms, QUERY_ONE_POST } from '../../Graphql/Queries'

import Post from './Post'
import Author from './Author'
import RelatedPosts from './RelatedPosts'
import Categories from './Categories'

import Comments from './Comments'
import CommentForm from './CommentForm'


const Article = () => {
  
    const slug = useParams()
    
    const [posts, setPosts] = useState([])

   useEffect(() => {
       
   graphcms.request(QUERY_ONE_POST, slug)
   .then(res => setPosts(res.posts))
    
   },  [slug])


    return (
        <>
        {posts?.map(post => (
          <div className="container mx-auto px-10 mt-10 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-1 lg:col-span-8">
              <Post post={post} />
              <Author author={post.author} />
              <CommentForm />
              <Comments comment={post?.comment} />
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="relative lg:sticky top-8">
               <RelatedPosts slug={post.slug} categories={post.category?.map((category) => category.slug)} /> 
               <Categories />
              </div>
            </div>
          </div>
        </div>
        ))}
        
      </>
  )
}

export default Article