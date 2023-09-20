import React from 'react'
import CivilDataset from '@/app/judiciary/components/CivilDataset.json';

const JuryDashboard = () => {
  return (
    <div className='min-h-[90%] bg-slate-400 m-4 border-double border-black border-4 rounded-2xl'>
      <p className='p-3 text-center font-extrabold text-4xl'>Pending Cases({CivilDataset.length})</p>
      <div>
        {
            CivilDataset.map((data)=>{
                return(
                    <div className='bg-blue-100 mb-2 text-[15px] border-4 border-double border-red-900 m-3 rounded-lg md:mx-10 shadow-md shadow-emerald-400'>
                        <div className='flex justify-between'>
                          <p className='px-2 '>Id = {data?.['S.No']}</p>
                          <div>
                            <button className='border-x-2 border-black p-2 mx-2'>Schedule Case</button>
                            <button className='border-x-2 border-black p-2 mx-2'>Remove Case</button>
                            <button className='border-x-2 border-black p-2 mx-2'>View More</button>
                          </div>
                        </div>
                        <div className='border-y-2 border-black bg-yellow-300'>
                            <p className='px-2'><span className='text-2xl font-medium'>Description </span>= {data.Description}</p>
                            <p className='px-2'><span className='text-2xl font-medium'>Case</span> = {data?.Case}</p>
                        </div>
                        <div className='grid grid-cols-3 gap-x-9 '>
                            <span className='px-2 font-bold bg-fuchsia-400'>People Affected = {data?.['People Affected']}</span>
                            <span className='px-2 font-bold bg-fuchsia-400 text-center'>Time Period = {data?.['Time Period']}</span>
                            <span className='px-2 font-bold bg-fuchsia-400 text-right'>Compensation = {data?.Compensation}</span>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default JuryDashboard
