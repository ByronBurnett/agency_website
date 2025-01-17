import React from 'react'
import { Link } from 'react-router-dom/';
import Moment from 'react-moment';

const Posts = ({posts}) => {
  
  console.log(posts)
  
    return (
    <div>
    {posts?.map(post => (
    
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
    <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
      <img
        unoptimized
       
        alt={post.title}
        className="shadow-lg rounded-t-lg lg:rounded-lg"
        layout="fill"
        src={post.coverPhoto.url}
      />

    <h1 className="transition duration-700 text-center mb-8 mt-2 cursor-pointer hover:text-blue-600 text-3xl font-semibold">
      <Link to={`/post/${post.slug}`}>{post.title}</Link>
    </h1>
    <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
      <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 ">
        <img
          unoptimized
          
          alt={post.author.name}
          height="30px"
          width="30px"
          className="align-middle rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
      </div>
      {post.category?.map(category => (
        <Link to={`posts/${category.slug}`} key={category.id}>
        <p className="inline align-middle text-gray-700 ml-2 mr-8 font-medium text-lg">{category.name}</p>
        </Link>
      ))}
      <div className="font-medium text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="align-middle">{<Moment format='MMM DD, YYYY'>{post.createdAt}</Moment>}</span>
      </div>
    </div>
    <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
      {post.excerpt}
    </p>
    <div className="text-center">
      <Link to={`/article/${post.slug}`}>
        <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-blue-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
      </Link>
    </div>
  </div>
 </div>

    ))}
    </div>
  )
}

export default Posts