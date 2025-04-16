import React from 'react'

function Forum() {
  return (
    
       <div className=' flex flex-col items-center mx-20  w-full'>
      <div className='w-full'>
        <div className='pl-2 text-xl font-bold'>Title</div>
        <input className='pl-2 outline-1 rounded-sm mt-2 w-full py-1.5 ' placeholder='Excerise at 2 pm'></input>
      </div>
      <div className='w-full'>
        <div className='pl-2 text-xl font-bold mt-2 '>Description</div>
        <textarea className='pl-2 outline-1 rounded-sm mt-2 w-full py-1.5 pb-28' placeholder='dgdddvddv'></textarea>
      </div>
        <button className='w-full bg-orange-800 rounded-sm mt-5 p-1 text-white text-xl'>Add</button>
    </div>
    
  )
}

export default Forum
