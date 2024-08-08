import React from 'react'

const Author = ({author}) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-white">
    <div className="absolute left-0 right-0 -top-14">
      <img
        unoptimized
        alt={author.name}
        height="100"
        width="100"
        className="mx-auto rounded-full"
        src={author.photo.url}
      />
    </div>
    <h3 className="text-black mt-4 mb-4 text-xl font-bold">{author.name}</h3>
    <p className="text-black text-ls">{author.bio}</p>
  </div>
  )
}

export default Author