import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Home = () => {
   const navigate = useNavigate();
  return (
    <div className='min-h-screen flex flex-col items-center justify-end bg-gray-200'>
      <div className='w-[280px] bg-gray-200 flex flex-col items-center justify-end h-[720px] p-6 border border-gray-400 shadow-md'>
      <div className='font-bold text-xl'>
        Welcome to props
      </div>
      
      <div className='text-gray-500'>
        Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit. 
      </div>
      <br/>
      <div className='flex flex-col'>
        <button onClick={()=>navigate('/createaccount')} className='bg-purple-600 h-[40px] w-[240px] py-2 px-4 rounded mb-3'>Create Account</button></div>
        <div>
        <button onClick={()=>navigate('/login')} className='bg-purple-100 h-[40px] w-[240px] py-2 px-4 rounded mb-3'>Already register link login</button>
        </div>

      </div>
     
       
      
    </div>
  )
}

export default Home
