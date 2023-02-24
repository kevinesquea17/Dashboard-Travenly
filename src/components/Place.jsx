import React from 'react'
import Place02 from '../assets/place-02.jpg'
import {AiFillHeart} from 'react-icons/ai'

const Place = () => {
  return (
    <div className='h-[21rem] bg-primary rounded-lg overflow-hidden relative'>
        <img src={Place02} alt="" className='w-full h-full object-cover rounded-lg relative' />
        <div className='w-[90%] px-3 py-2 bg-white absolute bottom-5 rounded left-[5%] flex justify-between items-center'>
            <div className='flex flex-col'>
                <h3 className='text-lg font-bold text-gray-900'>Mt. Merbabu</h3>
                <p className='text-gray-500 font-light'>Papus, Indonesia</p>
                <h4 className='text-primary font-semibold text-lg'>$450 <span className='text-base font-light text-gray-500'>/day</span></h4>
            </div>
            <div className='w-8 h-8 rounded-full bg-primary flex justify-center items-center'>
                <AiFillHeart className='text-white text-lg'/>
            </div>
        </div>
    </div>
  )
}

export default Place
