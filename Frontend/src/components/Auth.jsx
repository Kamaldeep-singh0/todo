import React, { useState } from 'react'
import { BACKEND_URL } from '../config'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Auth() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
    const navigate = useNavigate();
  return (
    <div className=' flex flex-col items-center mx-20  w-full'>
      <div className='w-full'>
        <div className='pl-2 text-xl font-bold'>Email</div>
        <input className='pl-2 outline-1 rounded-sm mt-2 w-full py-1.5 ' onChange={(e)=>{setEmail(e.target.value)}} placeholder='test@gmail.com'/> 
      </div>
      <div className='w-full'>
        <div className='pl-2 text-xl font-bold '>Password</div>
        <input className='pl-2 outline-1 rounded-sm mt-2 w-full py-1.5' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Secret'/>
      </div>
        <button className='w-full bg-orange-800 rounded-sm mt-5 p-1 text-white text-xl' onClick={async ()=>{
          const response = await axios.post(`${BACKEND_URL}/api/v1/signup` , {email,password})
          console.log("hiii")
          const jwt = response.data.token;
          localStorage.setItem("token", jwt);
          navigate("/");
        }}>Login</button>
    </div>
  )
}

export default Auth
