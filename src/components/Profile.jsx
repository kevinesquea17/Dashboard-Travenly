import React from 'react'
import Avatar from '../assets/avatar.webp'
import ListDestination from './ListDestination'

const Profile = () => {
  return (
    <div className='w-[22%] bg-[url("./assets/place-03.jpg")] bg-cover bg-center fixed top-0 right-0 h-screen flex flex-col py-4 px-8 font-Oswald'>
      <div className='h-[96%] w-[94%] absolute top-[2%] left-[3%] bg-black bg-opacity-50 rounded'></div>
      <h2 className='text-white text-2xl font-bold mb-10 relative'>My Profile!🧔</h2>
      <div className='relative flex flex-col items-center'>
          <div className='h-40 w-40 rounded-full border-2 border-dashed border-white flex justify-center items-center mb-6'>
            <img src={Avatar} alt="" className='w-36 h-36 rounded-full object-cover'/>
          </div>
          <h2 className='text-white text-3xl font-semibold mb-1'>Raffialdo Bayu</h2>
          <p className='text-white font-light text-lg mb-4'>Traveller Love</p>
          <h2 className='text-white text-xl font-semibold mb-4 self-start'>Destinations Trip!😍</h2>
          <ListDestination />
      </div>
    </div>
  )
}

export default Profile
