import React from 'react'
import Place02 from '../assets/place-02.jpg'

const Event = () => {
  return (
    <div className='bg-white rounded shadow-md shadow-gray-400 p-2 flex items-center space-x-4'>
        <img src={Place02} alt="" className='h-20 w-20 rounded object-cover' />
        <div className='flex-1 flex items-center justify-between'>
            <div className='flex flex-col'>
                <h2 className='font-bold text-xl'>Mt. Kerinci</h2>
                <p className='text-gray-400 font-light'>Jambi, Indonesia.</p>
                <p className='text-lg text-primary font-bold'>$45<span className='text-gray-400 text-sm font-normal'>/day</span></p>
            </div>
        </div>
    </div>
  )
}

export default Event