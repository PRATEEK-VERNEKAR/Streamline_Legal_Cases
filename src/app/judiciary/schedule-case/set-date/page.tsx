"use client";

import React,{useState,useEffect} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useRouter } from 'next/navigation';


const ScheduleCaseComponent = () => {
  const [date,setDate]=useState(new Date());
  const [calender,setCalender]=useState(false);
  const [navigate,setNavigate]=useState(0);
  const router=useRouter();


  useEffect(()=>{
    if(navigate==1){
      router.push('/judiciary/schedule-case/');
    }
    else if(navigate==2){
      router.push('/judiciary/schedule-case/send-email');
    }
  },[navigate])

  const onChange=(newdate:any)=>{
    setDate(newdate)
    console.log(date);
  }

  const toggleCalender=()=>{
    setCalender(!calender);
  }
  return (
    <div className='flex justify-center items-center h-[90%] w-full'>
      <div className='min-h-[70%] flex flex-col justify-around sm:w-[90%] lg:w-[70%] xl:w-[50%] border-2 border-black py-3'>
        <p className='text-2xl text-center m-3'>Predicted Date : </p>
        <div className='flex flex-col items-center gap-y-3'>
          <button onClick={toggleCalender} className="bg-indigo-600 hover:bg-indigo-700 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md">
            {
              calender?(
                <>
                  Go back
                </>
              ):
              (
                <>
                  Modify Dates
                </>
              )
            }
          </button>
          {
            calender?(
              <>
                <Calendar  onChange={onChange} value={date} minDate={new Date()} />
                <button 
                onClick={toggleCalender}
                className="bg-indigo-600 hover:bg-indigo-700 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md">
                  Finalise
                </button>
              </>
            ):(
              <>
                
              </>
            )
          }
        <div>
          <button onClick={()=>{setNavigate(1)}} className="mx-4 bg-indigo-600 hover:bg-indigo-700 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md">Prev</button>
          <button onClick={()=>{setNavigate(2)}} className="mx-4 bg-indigo-600 hover:bg-indigo-700 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md">Next</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ScheduleCaseComponent;
