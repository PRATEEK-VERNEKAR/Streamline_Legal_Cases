'use client';

import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/navigation';


const ScheduleCase = () => {
  const router=useRouter();
  const [navigate,setNavigate]=useState(0);

  useEffect(()=>{
    if(navigate==1){
      router.push('/judiciary');
    }
    else if(navigate==2){
      router.push('/judiciary/schedule-case/set-date');
    }
  },[navigate])

  return (
    <div className='w-full h-[90%]  flex flex-col items-center justify-center'>
      <div className='min-h-[60%] bg-red-400 flex flex-col items-center justify-between mt-4 sm:w-[90%] lg:w-[70%] xl:w-[50%] border-2 border-black py-3'>
        <ul className='list-disc text-xl'>
          <li>Confirm the date</li>
          <li>Send Mail to All the involded persons</li>
          <li>Publically annouce the hearing of the case</li>
        </ul>
        <div>
          <button onClick={()=>{setNavigate(1)}} className="mx-4 bg-indigo-600 hover:bg-indigo-700 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md">Prev</button>
          <button onClick={()=>{setNavigate(2)}} className="mx-4 bg-indigo-600 hover:bg-indigo-700 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md">Next</button>
        </div>
      </div>
      
    </div>
  )
}

export default ScheduleCase;
