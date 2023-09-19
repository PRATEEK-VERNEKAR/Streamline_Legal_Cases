"use client";

import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import {signIn} from "next-auth/react";
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [user,setUser]=useState({email:"",password:""});
  const [statusField,setStatusField]=useState({color:"",msg:""});

  const router=useRouter();

  useEffect(()=>{
    if(statusField.msg){
      const timeoutID=setTimeout(()=>{
        setStatusField({color:"",msg:""});
        setUser({email:"",password:""});
      },3000);

      return ()=>{clearTimeout(timeoutID)};
    }
  },[statusField.msg]);

  const handleSubmit=async (e:any)=>{
    e.preventDefault();

    try{
      const email=user.email;
      const password=user.password;
      const res=await signIn('credentials',{
        email,
        password,
        redirect:false,
      });

      if(res?.error){
        setStatusField({color:"bg-red-500",msg:"Invalid Credentials"})
        return;
      }
      else{
        setStatusField({color:'bg-green-500',msg:'Login Successful'});
        setTimeout(()=>{
          router.push('/')
        },3000)
      }
    }
    catch(error){
      console.log(error);
    }
  }
  const dynamicErrorField=`absolute right-10 border-2 text-[20px] font-light ${statusField.color} rounded-xl py-1 px-3 `

  return (
    <div className='flex flex-col justify-center items-center w-full h-[90%] relative'>
      <form onSubmit={handleSubmit} className='px-5 sm:w-full md:w-1/3 rounded-xl border-4 border-yellow-800 flex flex-col gap-y-5 justify-center items-center'>
      <div className='text-2xl mt-3 w-full text-left font-semibold'>
        <span className='shadow-lg px-3 py-1 shadow-zinc-950'>Login</span>
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
        <label className='flex justify-center items-center' htmlFor='name'>Email: </label>
        <input onChange={(e)=>setUser({...user,email:e.target.value})}
              value={user.email}
              className="col-span-3" 
              type='text' 
              name='email' 
              id='email' 
              placeholder='abc@gmail.com' >
        </input>
      </div>
        <div className='grid grid-cols-4 h-[50px] m-4 px-4 border-2 border-slate-700 w-full shadow-lg shadow-zinc-950'>
          <label className='flex justify-center items-center' htmlFor='password'>Password: </label>
          <input onChange={(e)=>setUser({...user,password:e.target.value})}
                value={user.password}
                className="col-span-3" 
                type='password' 
                name='password' 
                id='password' 
                placeholder='*******' >
            </input>        </div>
        <button className='text-2xl px-3 rounded-full bg-fuchsia-400 border-2 border-black'>Login</button>
        <div>
          <Link href='/signup' >
            Don't have an account? &nbsp;&nbsp;
            <span className='font-bold '>Signup</span>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;
