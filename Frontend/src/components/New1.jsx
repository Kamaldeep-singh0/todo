import React from 'react'
import { Link } from 'react-router-dom'

function New1() {
  return (
    <div className='flex  justify-center  h-screen items-center '>
        <div className='p-2 font-medium text-xl'>
            <div>Nothing hereeeee</div>
            <div className="flex justify-center items-center h-full my-3">
            <Link to="/write"><button className='bg-amber-900 px-3 py-3 text-xl rounded-lg font-medium text-white '>+ add todo</button></Link>
            </div>
       
        </div>
      
    </div>
  )
}

export default New1
