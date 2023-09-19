"use client";

import React from 'react'
import {useSession} from 'next-auth/react';


const Profile = () => {
  const {data:session}=useSession();

  return (
    <div className='flex flex-col justify-center items-center w-full h-[90%]'>
      <div className='px-5 sm:w-full md:w-1/3 rounded-xl border-4 border-yellow-800 flex flex-col gap-y-5 justify-center items-center'>
        <p>Name : <span>{session?.user?.name}</span></p>
        <p>Email : <span>{session?.user?.email}</span></p>
      </div>
    </div>
  )
}

export default Profile;
