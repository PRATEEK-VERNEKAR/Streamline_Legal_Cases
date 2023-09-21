"use client";

import React,{useEffect,useState} from 'react'
import CivilDataset from '@/app/judiciary/components/CivilDataset.json';
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


  const handleScheduleCase = () => {
    router.push('/judiciary/schedule-case');
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

  return (
    <div className='min-h-[90%] bg-slate-400 m-4 border-double border-black border-4 rounded-2xl'>
      <p className='p-3 text-center font-extrabold text-4xl'>Pending Cases({CivilDataset.length})</p>
      <div>
        {
            criminalCases.map((data,index)=>{
                return(
                    <div className='bg-blue-100 mb-2 text-[15px] border-4 border-double border-red-900 m-3 rounded-lg md:mx-10 shadow-md shadow-emerald-400'>
                        <div className='flex justify-between'>
                          <p className='px-2 flex justify-between items-center '>Order = {index+1}</p>
                          <div>
                            <button onClick={handleScheduleCase} className='border-x-2 border-black p-2 mx-2'>Schedule Case</button>
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
    </div>
  )
}

export default JuryDashboard;
