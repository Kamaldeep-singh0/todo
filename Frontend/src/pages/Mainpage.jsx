import React from 'react'
import Auth from '../components/Auth'

function Mainpage() {
  return (
     <div className="grid grid-cols-3 h-screen">
    <div className="flex items-center justify-center h-full bg-blue-50">
      <Auth />
    </div>

    <div className="bg-blue-100 h-full w-full col-span-2 flex items-center justify-center">
      f
    </div>
  </div>
  )
}

export default Mainpage
