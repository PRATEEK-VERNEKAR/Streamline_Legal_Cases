"use client";

import Link from 'next/link'
import React,{useState} from 'react'

const Login = () => {
  const [user,setUser]=useState({name:"",email:"",password:""});

  let name,value;
  const handleInputs=(e:any)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});
  }

  
  return (
    <div className='flex flex-col justify-center items-center w-full h-[90%]'>
      <div className='px-5 sm:w-full md:w-1/3 rounded-xl border-4 border-yellow-800 flex flex-col gap-y-5 justify-center items-center'>
      <div className='text-2xl mt-3 w-full text-left font-semibold'><span className='shadow-lg px-3 shadow-zinc-950'>Signup</span></div>
      <div className='grid grid-cols-4 h-[50px] m-4 px-4 border-2 border-slate-700 w-full shadow-lg  shadow-zinc-950'>
          <label className='flex justify-center items-center' htmlFor='name'>Name: </label>
          <input onChange={handleInputs} 
                value={user.name}
                className="col-span-3" 
                type='text' 
                name='name' 
                id='name' 
                placeholder='Prateek' >
          </input>
        </div>
        <div className='grid grid-cols-4 h-[50px] m-4 px-4 border-2 border-slate-700 w-full shadow-lg  shadow-zinc-950'>
          <label className='flex justify-center items-center'htmlFor='name'>Email: </label>
          <input onChange={handleInputs}
                value={user.email}
                className="col-span-3" 
                type='text' 
                name='email' 
                id='email' 
                placeholder='abc@gmail.com' >
          </input>
        </div>
        <div className='grid grid-cols-4 h-[50px] m-4 px-4 border-2 border-slate-700 w-full shadow-lg  shadow-zinc-950'>
          <label className='flex justify-center items-center' htmlFor='password'>Password: </label>
          <input onChange={handleInputs}
                value={user.password}
                className="col-span-3" 
                type='password' 
                name='password' 
                id='password' 
                placeholder='*******' >
            </input>
        </div>
        <button className='text-2xl px-3 rounded-full bg-fuchsia-400 border-2 border-black'>Signup</button>
        <div>
          <Link href='/login' >
            Already have an account? &nbsp;&nbsp;
            <span className='font-bold '>Login</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
