import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { graphcms, CREATE_COMMENT } from '../../Graphql/Mutation';

const CommentForm = () => {

    const {slug} = useParams();

   async function handleComment(e){
        e.preventDefault()
        const obj = {name, email, comment, slug}

        if(save){
            localStorage.setItem('name', name)
            localStorage.setItem('email', email)

        }else{
            localStorage.removeItem('name', name)
            localStorage.removeItem('email', email)

        }
        setLoading(true)
        const res = await graphcms.request(CREATE_COMMENT, obj)

        console.log(res)
        setLoading(false)
        setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);

          setName("");
          setEmail("");
          setComment("");
          
    }
  
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const [save, setSave] = useState(true)
    const [loading, setLoading] = useState(false)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">Leave a Reply</h3>
        <form onSubmit={handleComment} >
        <div className="grid grid-cols-1 gap-4 mb-4">
        
          <textarea value={comment} onChange={e => setComment(e.target.value)}  className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" name="comment" placeholder="Comment" autoComplete='off'  />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
           
          <input type="text" value={name} onChange={e => setName(e.target.value)} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Name" name="name" autoComplete='off'/>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}  className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Email" name="email" autoComplete='off' />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <input  type="checkbox" id="chk" onChange={e => setSave(e.target.checked)} checked={save} />
            <label className="text-gray-500 cursor-pointer"  htmlFor="chk"> Save my name, email in this browser for the next time I comment.</label>
          </div>
        </div>
        <p className="text-xs text-red-500">All fields are mandatory</p>
        <div className="mt-8">
          <button disabled={loading} type="submit"  className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-blue-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">{loading ? 'Loading..' : 'Post Comment'}</button>
          {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>}
        </div>
        </form>
        </div>
    );
  };



export default CommentForm