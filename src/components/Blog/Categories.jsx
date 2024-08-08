import React from 'react'
import {useState, useEffect} from 'react'
import { graphcms, QUERY_SLUG_CATEGORIES } from '../../Graphql/Queries'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Categories = () => {
  
    const [categories, setCategories] = useState([])
     


    useEffect(() => {
        
    graphcms.request(QUERY_SLUG_CATEGORIES)
    .then(res => setCategories(res.categories))

    },  [])

  
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
        {categories.map((category, index) => (
          <Link key={index} to={`/posts/${category.slug}`}>
            <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.name}</span>
          </Link>
        ))}
      </div>
  )
}

export default Categories