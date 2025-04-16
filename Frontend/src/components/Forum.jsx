import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../config';
import axios from 'axios';

function Forum() {
  const [title,setTitle] = useState("");
  const [description, setDescription] = useState("");
    const navigate = useNavigate();

  return (
    
       <div className=' flex flex-col items-center mx-20  w-full'>
      <div className='w-full'>
        <div className='pl-2 text-xl font-bold'>Title</div>
      
        <input className='pl-2 outline-1 rounded-sm mt-2 w-full py-1.5 ' placeholder='Excerise at 2 pm' onChange={(e)=>{setTitle(e.target.value)}}></input>
      </div>
      <div className='w-full'>
        <div className='pl-2 text-xl font-bold mt-2 '>Description</div>
        <textarea className='pl-2 outline-1 rounded-sm mt-2 w-full py-1.5 pb-28' placeholder='dgdddvddv' onChange={(e)=>{setDescription(e.target.value)}}></textarea>
      </div>
        <button className='w-full bg-orange-800 rounded-sm mt-5 p-1 text-white text-xl'
        onClick={async ()=>{
                  const response = await axios.post(`${BACKEND_URL}/api/v1/post` , {
                    title,
                    description
                  }, {
                    headers: {
                      authorization: localStorage.getItem("token")
                    }
                  });
                  navigate("/home");}}
        >Add</button>
    </div>
    
  )
}

export default Forum
