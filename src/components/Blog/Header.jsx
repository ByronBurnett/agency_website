import React from 'react'
import {useState, useEffect} from 'react'
import { graphcms, QUERY_SLUG_CATEGORIES } from '../../Graphql/Queries'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const Header = () => {
    
const {pathname} = useLocation()
    console.log(pathname)
  const [categories, setCategories] = useState([])
     


    useEffect(() => {
        
    graphcms.request(QUERY_SLUG_CATEGORIES)
    .then(res => setCategories(res.categories))

    },  [])
  
    return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-white py-8">
        <div className="md:float-left block">
          <Link to={`${pathname === '/'}` ? 'active' : ''}>
            <span className="cursor-pointer font-bold text-white">Blog Section</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} to={`/posts/${category.slug}`}><span className=' md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>{category.name}</span></Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header