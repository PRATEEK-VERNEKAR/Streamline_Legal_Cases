"use client";

import React,{useState,useEffect} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const ScheduleCaseComponent = ({params}:any) => {
  const [date,setDate]=useState(new Date());
  const [calender,setCalender]=useState(false);
  const [goBack,setGoBack]=useState(false);
  const [dateSec,setDateSec]=useState(true);
  const router=useRouter();
  const [judges,setJudges]=useState([{name:"",post:"",email:""}]);
  const [assistants,setAssistants]=useState([{name:"",email:""}]);
  const [lawyer,setLawyers]=useState([{name:"",client:"",email:""}]);
  const [location,setLocation]=useState("");
  const [tempJudge,setTempJudge]=useState({name:"",post:"",email:""})
  const [tempAssistants,setTempAssistants]=useState({name:"",email:""})
  const [tempLawyers,setTempLawyers]=useState({name:"",client:"",email:""})


  const handleJudgeChange=(e:any)=>{
    e.preventDefault();
    const name=e.target.name;
    const value=e.target.value;
    setTempJudge({...tempJudge,[name]:value});
  }

  const handleAssistantChange=(e:any)=>{
    e.preventDefault();
    const name=e.target.name;
    const value=e.target.value;
    setTempAssistants({...tempAssistants,[name]:value});
  }

  const handleLawyersChange=(e:any)=>{
    e.preventDefault();
    const name=e.target.name;
    const value=e.target.value;
    setTempLawyers({...tempLawyers,[name]:value});
  }

  const handleLocationChange=(e:any)=>{
    e.preventDefault();
    const name=e.target.name;
    const value=e.target.value;
    setLocation(value);
  }

  useEffect(()=>{
    if(goBack){
      setDateSec(true);
      router.push('/judiciary/schedule-case/');
      return;
    }
  },[goBack])

  const onChange=(newdate:any)=>{
    setDate(newdate)
    console.log(date);
  }

  const toggleCalender=()=>{
    setCalender(!calender);
  }
  return (
    <>
    {
      dateSec?( 
        <div className='flex justify-center items-center h-[90%] w-full'>
        <div className='min-h-[70%] flex flex-col justify-around sm:w-[90%] lg:w-[70%] xl:w-[50%] border-2 border-black py-3'>
          <p className='text-2xl text-center m-3'>Set Date : {date.toDateString()}</p>
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
            <button onClick={()=>{setGoBack(true)}} className="mx-4 bg-indigo-600 hover:bg-indigo-700 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md">Prev</button>
            <button onClick={()=>{setDateSec(false)}} className="mx-4 bg-indigo-600 hover:bg-indigo-700 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md">Next</button>
          </div>
          </div>
        </div>
        </div>
        ):
        (
        <div className='flex flex-col justify-center items-center h-[90%] w-full'>
          <div className='min-h-[70%] grid grid-cols-2 w-[90%] border-2 border-black py-3'>
            <div className='bg-blue-300'>
              <p className='text-center'>Judges</p>
              <div className='flex flex-col gap-y-1 border-2 border-black m-2'>
                <input name='name' onChange={handleJudgeChange}  value={tempJudge.name} placeholder='Add name'></input>
                <input name='email'  onChange={handleJudgeChange} value={tempJudge.email} placeholder='Add email'></input>
                <input name='post' onChange={handleJudgeChange}  value={tempJudge.post} placeholder='Any special post'></input>
                <div>
                  <button className='border-2 border-black' onClick={()=>{setJudges([...judges,tempJudge])}}>Assign</button>
                  <button className='border-2 border-black'>Cancel</button>
                </div>
              </div>
            </div>

            <div className='bg-green-300'>
              <p className='text-center'>Assitants</p>
              <div className='flex flex-col gap-y-1 border-2 border-black m-2'>
                <input name='name'  onChange={handleAssistantChange} value={tempAssistants.name}  placeholder='Add name'></input>
                <input name='email'  onChange={handleAssistantChange} value={tempAssistants.email}  placeholder='Add email'></input>
                <div>
                  <button className='border-2 border-black' onClick={()=>{setAssistants([...assistants,tempAssistants])}}>Assign</button>
                  <button className='border-2 border-black'>Cancel</button>
                </div>
              </div>
            </div>

            <div className='bg-orange-300'>
              <p className='text-center'>Location</p>
              <div className='flex flex-col gap-y-1 border-2 border-black m-2'>
                <input name='location' onChange={handleLocationChange} value={location}  placeholder='Add Location'></input>
              </div>
            </div>

            <div className='bg-red-300'>
              <p className='text-center'>Lawyers</p>
              <div className='flex flex-col gap-y-1 border-2 border-black m-2'>
                <input name='name' onChange={handleLawyersChange} value={tempLawyers.name}  placeholder='Add name'></input>
                <input name='email' onChange={handleLawyersChange} value={tempLawyers.email} placeholder='Add email'></input>
                <input name='client' onChange={handleLawyersChange} value={tempLawyers.client}  placeholder='Client'></input>
                <div>
                  <button className='border-2 border-black' onClick={()=>{setLawyers([...lawyer,tempLawyers])}}>Assign</button>
                  <button className='border-2 border-black'>Cancel</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button onClick={()=>{setDateSec(true)}} className="mx-4 bg-indigo-600 hover:bg-indigo-700 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md">Prev</button>
            {/* <button onClick={()=>{setDateSec(false)}} className="mx-4 bg-indigo-600 hover:bg-indigo-700 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md">Next</button> */}
          </div>
          </div>
        )
      }
    </>

  )
}

export default ScheduleCaseComponent;
