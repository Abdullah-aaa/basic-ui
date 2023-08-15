import React from 'react'
import Image from 'next/image'

export default function Reviews() {
  return (
    <div className='flex hover:scale-110 duration-300'>
        <div className='flex bg-gray-100 py-12 pr-10 ml-2 '>
               <img src="me.jpg" alt="me" className=' h-24 w-24 rounded-full ml-9' />
               <div className='flex-col'>
                <strong className=' ml-8 mt-3 mr-16'>Abdullah Ashraf <span className='ml-3 font-light'> @abdullah.com  &middot;  Aug 08</span></strong>

                <div className='pl-8 flex-col items-end pt-2'>
                     You can select a whole tag in VS Code by using the balance <br />
                    inward and balance outward Emmet commands. It's helpful to bind <br />
                     these commands to keyboard shortcuts
                </div>
                </div>

        </div>
    </div>
  )
}
