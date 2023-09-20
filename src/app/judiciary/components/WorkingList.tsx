import React from 'react'

const WorkingList = () => {
  return (
    <div className='h-[50%] mx-5  mt-3 '>
        <div className='grid  grid-cols-5 grid-rows-6 h-full gap-x-3'>
            <div className='col-start-1 col-end-5 row-span-6 bg-yellow-100 border-t-4 border-green-900 rounded-2xl border-b-4 p-3 overflow-y-auto'>
                {/* <ul> */}
                    <li>Watch the list of all the pending cases and their possible predicted sessions(dates and timings)</li>
                    <li>The predicative hearing of cases are arranged in the order of urgency, risks, national security, and peace </li>
                    <li>The authorised members of the respective court have to schedule the hearing of the cases</li>
                    <li>Once the court session is set by the court official it will be removed from the pending list</li>
                    <li>The hearing of one case can alter the hearing of all other pending cases</li>
                    <li>If any new cases arises then it has to be added to the software and it will predict the possible dates for the case to be presented in court so as to avoid any possible loss to the people and resources involved</li>
                    <li>Once a particular cases is adjourned then that cases will have to be removed by the list by the court officials only</li>
                    <li>The list of pending cases can be studied again by clicking on them and the complete information about the list will be available</li>
                {/* </ul> */}
            </div>
            <div className='col-start-5 col-end-6 row-start-2 row-end-6 bg-red-100 border-r-4 border-green-900 rounded-2xl border-l-4 flex justify-center items-center'>
                <button className='bg-blue-300 py-2 px-3 rounded-xl'>Read Aloud</button>
            </div>
        </div>
    </div>
  )
}

export default WorkingList
