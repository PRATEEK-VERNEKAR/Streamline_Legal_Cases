"use client";

import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import axios from "axios";
import dynamic from 'next/dynamic';
import { stat } from 'fs';

const Login = () => {
  const [user,setUser]=useState({name:"",post:"",email:"",password:""});
  const [statusField,setStatusField]=useState({color:"",msg:""});

  let name,value;
  const handleInputs=(e:any)=>{
    setStatusField({color:'bg-red-500',msg:""});
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});
  }



  useEffect(()=>{
    console.log("USEEFFECT")
    if(statusField.msg){
      const timeoutID=setTimeout(()=>{
        setStatusField({color:'',msg:""});
      },3000);
      
      return ()=>clearTimeout(timeoutID)
    }
  },[statusField.msg])

  const handleSubmit=async (e:any)=>{
    e.preventDefault();


    if(!user.name || !user.post || !user.email || !user.password){
      return setStatusField({color:"bg-red-500",msg:"All Fields Necessary"});
    }

    try{
      const res=await axios.post('/api/users/signup',user);
      console.log(res);

      if(res.status!=200){
        setStatusField({msg:res.data.message,color:'bg-red-500'})
        return;
      }
      else{
        setStatusField({msg:res.data.message,color:'bg-green-500'})
      }
    }
    catch(error:any){
      setStatusField({msg:error.response.data.error,color:"bg-red-500"})

      console.log(error)
    }
  }

  const dynamicErrorField=`absolute right-10 border-2 text-[20px] font-light ${statusField.color} rounded-xl py-1 px-3 `
  return (
    <div className='flex flex-col justify-center items-center w-full h-[90%] relative'>
      <div className='px-5 sm:w-full md:w-1/3 rounded-xl border-4 border-yellow-800 flex flex-col gap-y-5 justify-center items-center'>
      <div className='text-2xl mt-3 w-full text-left font-semibold'>
        <span className='shadow-lg px-3 py-1 shadow-zinc-950'>Signup</span>
        {statusField.msg?
          (
            <span className={dynamicErrorField}>
              {statusField.msg}
            </span>
          ):
          <span></span>
        }

      </div>
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
          <label className='flex justify-center items-center' htmlFor='post'>Post: </label>
          <input onChange={handleInputs} 
                value={user.post}
                className="col-span-3" 
                type='text' 
                name='post' 
                id='post' 
                placeholder='Advocate' >
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
        <button 
        onClick={handleSubmit}
        className='text-2xl px-3 rounded-full bg-fuchsia-400 border-2 border-black'>Signup</button>
        <div>
          <Link href='/login'>
            Already have an account? &nbsp;&nbsp;
            <span className='font-bold'>Login</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login;
