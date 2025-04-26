import React, { useState } from 'react'

function Todo({id,title,description,completed}) {
    const [done,setDone] = useState(completed);
  return (
    <div className='m-2  bg-amber-100 p-2 px-2 grid grid-cols-2 '>
        <div>
        <div className='font-bold text-xl'>Title -</div>
      <div className='font-medium text-lg' >{title}</div>
      <div className='font-bold text-xl' >Description</div>
      <div>{description}</div>
        </div>
        <div className='flex justify-center items-center'>
        { done ? <button className=' p-5 text-xl font-bold text-white rounded-2xl px-10 bg-amber-900' onClick={()=>{setDone(false)}}>kamal</button>     :   <button className=' p-5 text-xl font-bold text-white rounded-2xl px-10 bg-pink-400' onClick={()=>{setDone(true)}} >jashan</button> }

        </div>
     
    </div>
  )
}

export default Todo
