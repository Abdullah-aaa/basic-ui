import React from 'react'

export const Offers = () => {
  return (
    <div className='grid grid-cols-3 mb-4 bg-red-50 rounded-md p-4 shadow-lg'>
        <a href='#' className=' shadow-xl mx-5 basis-1/4 bg-white rounded-md pl-2 hover:bg-blue-500 hover:text-white hover:scale-110 hover:duration-200'>
            <h1 className=' font-black '>Standard</h1>
            <h3 className=' -text-3 text-xs'>monthly</h3>
            <h1 className=' font-black pt-2 text-2xl'>$25</h1>
        </a>
        <a href='#' className= ' shadow-xl mx-5 basis-1/4 bg-red-600 text-red-50 rounded-md pl-2 hover:bg-blue-500 hover:scale-110 hover:text-white hover:duration-200 '>
        <h1 className=' font-black '>Poplar</h1>
            <h3 className=' -text-3 text-xs'>monthly</h3>
            <h1 className=' font-black pt-2 text-2xl'>$50</h1>
        </a>
        <a href='#' className=' shadow-xl mx-5 basis-1/4 bg-white rounded-md pl-2 hover:bg-blue-500  hover:text-white hover:scale-110 hover:duration-200'>
        <h1 className=' font-black '>premium</h1>
            <h3 className=' -text-3 text-xs'>monthly</h3>
            <h1 className=' font-black pt-2 text-2xl'>$75</h1>
        </a>
    </div>
  )
}
