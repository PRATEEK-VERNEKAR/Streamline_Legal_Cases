import React from 'react'

const Layer1form = () => {
  return (
    <>
      <form>
        <div className='flex justify-between'>
          
          <div className='flex flex-col w-1/2 justify-center items-center border-6 border-red-500'>
            <label htmlFor="state">Choose a State</label>
            <select name="state" id="state">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <div className='flex flex-col w-1/2 justify-center items-center border-6 border-red-500'>
            <label htmlFor="year">Choose a Year</label>
            <select name="year" id="year">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
      </form>   
     </>
  )
}

export default Layer1form;
