import React from 'react'
import Link from 'next/link';

import Layer1form from './(components)/Layer1form';

const Judiaciary = () => {
  return (
    <div className='h-full'>
      <div className='text-center mt-6 text-4xl '>Our Law Portal</div>
      <div className="grid h-1/2 grid-cols-2 justify-items-center gap-10 m-6">
        <Link className="dash-options" href='/dashboard/crimes-num'>Count of Cases</Link>
        <Link className="dash-options" href='/dashboard'>Column 2</Link>
        <Link className="dash-options" href='/dashboard'>Column 3</Link>
        <Link className="dash-options" href='/dashboard'>Column 4</Link>
      </div>
    </div>
  )
}

export default Judiaciary;
