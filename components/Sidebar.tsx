import React from 'react'
import Reviews from './Reviews'
import { Offers } from './Offers'
import Bloggrids from './Bloggrids'

 function sidebar() {
  return (
    <div className=' w-auto min-h-screen grid grid-cols-[13%,70%]'>
        <div className=' bg-slate-800 text-white p-10'>
            <h1 className=' font-extrabold text-4xl`'>Sidebar</h1>
            <br />
            <br />
            <ul>
              <li><a href="#" className='hover:font-bold'>home</a></li>
            <br />
              <li><a href="#" className='hover:font-bold'>products</a></li>
              <br />
              <li><a href="#" className='hover:font-bold'>login</a></li>
              <br />
              <li><a href="#" className='hover:font-bold'>sign up</a></li>
              

            </ul>
        </div>
        <div className='p-10 '>
          <Offers/>
          <br />
          <Bloggrids/>
          
          <br />
          <Reviews/>
        </div>



    </div>
  )
}
export default sidebar