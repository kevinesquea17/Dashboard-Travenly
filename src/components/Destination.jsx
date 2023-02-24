import React from 'react'
import Place04 from '../assets/place-04.jpg'
import Avatar from '../assets/avatar.webp'
import Person01 from '../assets/person-01.avif'
import Person02 from '../assets/person-02.jpg'
import Person03 from '../assets/person-03.jpg'


const Destination = () => {
  return (
    <div className='flex items-center space-x-4 bg-white rounded p-2 w-full mb-4'>
        <img src={Place04} alt="" className='w-[4.5rem] h-[4.5rem] rounded object-cover'/>
        <div className='flex items-center justify-between'>
            <div className='flex flex-col'>
                <h4 className='font-bold text-base'>Mt. Gambuta</h4>
                <p className='text-gray-500 font-light text-xs mb-1'>14 Agosto 2023</p>
                <div className='flex items-center'>
                    <img src={Avatar} alt="" className='w-4 h-4 object-cover rounded-full' />
                    <img src={Person01} alt="" className='w-4 h-4 object-cover rounded-full -ml-1' />
                    <img src={Person02} alt="" className='w-4 h-4 object-cover rounded-full -ml-1' />
                    <img src={Person03} alt="" className='w-4 h-4 object-cover rounded-full -ml-1' />
                    <p className='bg-gray-200 p-2 text-xs text-primary w-5 h-5 rounded-full flex justify-center items-center ml-2 font-bold'>+2</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Destination