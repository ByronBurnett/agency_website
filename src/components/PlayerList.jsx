import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const PlayerList = () => {
  return (
    <div className="bg-white h-screen">
        <div className="text-center">
        <h2 className="text-3xl mt-10">Players</h2>
        </div>
        <div className="py-16 px-4 text-center mt-20">
            <Link to="/pointguards"><button className="transition ease-in-out delay-150 bg-teal-700 hover:-translate-y-1 hover:scale-110 hover:bg-teal-900 duration-300 rounded-lg text-white p-2 font-semibold m-2">Floor General/PG</button></Link>
            <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 rounded-lg text-white p-2 font-semibold m-2">Combo High Usage/SG</button>
            <button className="transition ease-in-out delay-150 bg-stone-800 hover:-translate-y-1 hover:scale-110 hover:bg-stone-950 duration-300 rounded-lg text-white p-2 font-semibold m-2">Dynamic Forward/SF</button>
            <button className="transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 duration-300 rounded-lg text-white p-2 font-semibold m-2">Strech Foward/PF</button>
            <button className="transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300 rounded-lg text-white p-2 font-semibold m-2">Rim Runner/Centers</button>
        </div>
    </div>
  )
}

export default PlayerList