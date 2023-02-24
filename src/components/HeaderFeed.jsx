import React from 'react'
import {GoSettings} from 'react-icons/go'
import {AiOutlineSearch} from 'react-icons/ai'

const HeaderFeed = () => {
  return (
    <div className='flex items-center space-x-4 mb-8'>
        <div className='flex-1 bg-white p-4 rounded flex items-center space-x-4'>
            <AiOutlineSearch  className='text-gray-400 text-xl'/>
            <input type="text" placeholder='Search destinations...' className='flex-1' />
        </div>
        <div className='px-4 py-4 rounded bg-primary flex justify-center items-center'>
            <GoSettings className='text-white text-lg'/>
        </div>
        <button className='py-3 px-6 bg-primary text-white rounded'>Search</button>
    </div>
  )
}

export default HeaderFeed
