import React from 'react'

function Auth() {
  return (
    <div className=' flex flex-col items-center mx-20  w-full'>
      <div className='w-full'>
        <div className='pl-2 text-xl font-bold'>Email</div>
        <input className='pl-2 outline-1 rounded-sm mt-2 w-full py-1.5 ' placeholder='test@gmail.com'></input>
      </div>
      <div className='w-full'>
        <div className='pl-2 text-xl font-bold mt-2 '>Password</div>
        <input className='pl-2 outline-1 rounded-sm mt-2 w-full py-1.5' placeholder='Secret'></input>
      </div>
        <button className='w-full bg-orange-800 rounded-sm mt-5 p-1 text-white text-xl'>Login</button>
    </div>
  )
}

export default Auth
