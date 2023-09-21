"use client";

import React,{useEffect,useState} from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';

import { Document, Types } from 'mongoose';

interface Item extends Document {
  _id: Types.ObjectId;
  CaseType: number;
  Description: string;
  PeopleAffected: number; // Use the Mongoose-Long type here
  TimePeriod: number;
  Compensation: number;
  Death: number;
  PriorityScore: number;
}

const JuryDashboard = () => {
  const router=useRouter();
  const [criminalCases,setCriminalCases]=useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [openWindowHook,setOpenWindowHook]=useState(false);
  const [newCase,setNewCase]=useState({PeopleAffected:"",Compensation:"",TimePeriod:"",Death:"",CaseType:"",Description:""})
  const [statusField,setStatusField]=useState({color:"",msg:""});

  const handleScheduleCase = (_id:any) => {
    const dynamicRoute=`/judiciary/schedule-case/${_id}`
    router.push(dynamicRoute);
  };

  useEffect(()=>{
    async function fetchCases() {
      try{
        const response=await axios.get('http://localhost:3000/api/getcases/criminalcases');

        setCriminalCases(response.data.criminalCases);
        setLoading(false);

        console.log(response.data.criminalCases)
      }
      catch (error) {
        // Handle any errors here
        console.error('Error:', error);
        setLoading(false);
      }
    }
    fetchCases();
  },[])


  const openWindow=()=>{
    setOpenWindowHook(true);
  }

  const addCases=async(e:any)=>{
    e.preventDefault();

    if(!newCase.PeopleAffected || !newCase.Compensation || !newCase.Death || !newCase.Description || !newCase.CaseType || !newCase.TimePeriod){
      return setStatusField({color:"bg-red-500",msg:"All Fields Necessary"});
    }

    try{
      const mlres=await axios.post('/http://localhost:5000/predictdata',newCase);

      const res=await axios.post('/api/addCases/ciminal',{...newCase,PriorityScore:mlres});
      console.log(res);

      if(res.status!=200){
        setStatusField({msg:res.data.message,color:'bg-red-500'})
        setOpenWindowHook(false);
        return;
      }
      else{
        setStatusField({msg:res.data.message,color:'bg-green-500'})
        setTimeout(()=>{
          setOpenWindowHook(false);
        },3000)
      }
    }
    catch(error:any){
      setStatusField({msg:error.response.data.error,color:"bg-red-500"})

      console.log(error)
    }
  }

  const handleNewCaseChange=(e:any)=>{
    e.preventDefault();
    const name=e.target.name;
    const value=e.target.value;
    setNewCase({...newCase,[name]:value})
  }

  return (
    <div className="min-h-[30%] bg-slate-400 m-4 border-double border-black border-4 rounded-2xl">
    {
      openWindowHook?(
        <div className='w-[90%] flex'>
          <div className='w-full flex flex-col gap-y-2'>
            <input onChange={handleNewCaseChange} value={newCase.PeopleAffected} name="PeopleAffected" className='w-[80%]' placeholder='Number of People Affected'></input>
            <input onChange={handleNewCaseChange} value={newCase.Compensation} name="Compensation" className='w-[80%]' placeholder='Compensation Involved'></input>
            <input onChange={handleNewCaseChange} value={newCase.TimePeriod} name="TimePeriod" className='w-[80%]' placeholder='Days from which the case is pending'></input>
            <input onChange={handleNewCaseChange} value={newCase.Death} name="Death" className='w-[80%]' placeholder='Deaths involved'></input>
            <input onChange={handleNewCaseChange} value={newCase.CaseType} name="CaseType" className='w-[80%]' placeholder='Case Type'></input>
            <input onChange={handleNewCaseChange} value={newCase.Description} name="Description" className='w-[80%]' placeholder='Description(20 words)'></input>
          </div>
          <div className='flex justify-center items-center'>
            <button onClick={addCases} className='bg-green-400 rounded-full border-r-4 border-blue-900 py-2'>Add Case</button>
          </div>
        </div>
      ):(
        <>
          <div className='flex justify-around'>
            <p className='p-3 text-center font-extrabold text-4xl'>Pending Cases({criminalCases.length})</p>
            <div className='flex flex-col justify-center items-center'>
              <button onClick={openWindow} className=' border-2 border-black px-2 py-1 rounded-xl bg-green-400'>Insert New Case</button>
            </div>
          </div>
          <div>
            {
                criminalCases.map((data,index)=>{
                    return(
                        <div className='bg-blue-100 mb-2 text-[15px] border-4 border-double border-red-900 m-3 rounded-lg md:mx-10 shadow-md shadow-emerald-400'>
                            <div className='flex justify-between'>
                              <p className='px-2 flex justify-between items-center '>Order = {index+1}</p>
                              <div>
                                <button onClick={()=>{handleScheduleCase(data._id)}} className='border-x-2 border-black p-2 mx-2'>Schedule Case</button>
                                <button className='border-x-2 border-black p-2 mx-2'>Remove Case</button>
                                <button className='border-x-2 border-black p-2 mx-2'>View More</button>
                              </div>
                            </div>
                            <div className='border-y-2 border-black bg-yellow-300'>
                                <p className='px-2'><span className='text-2xl font-medium'>Description </span>= {data.Description}</p>
                                <p className='px-2'><span className='text-2xl font-medium'>Case</span> = {data?.CaseType}</p>
                            </div>
                            <div className='grid grid-cols-3 gap-x-9 '>
                                <span className='px-2 font-bold bg-fuchsia-400'>People Affected = {data?.['PeopleAffected']?.toString()}</span>
                                <span className='px-2 font-bold bg-fuchsia-400 text-center'>Time Period = {data?.['TimePeriod']?.toString()}</span>
                                <span className='px-2 font-bold bg-fuchsia-400 text-right'>Compensation = {data?.Compensation?.toString()}</span>
                            </div>
                        </div>
                    )
                })
            }
          </div>
        </>

      )
    }
    </div>
  
  )
}

export default JuryDashboard;
