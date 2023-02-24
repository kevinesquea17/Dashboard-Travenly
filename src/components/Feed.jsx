import React, { useState } from 'react'
import {BsBell, BsArrowRight} from 'react-icons/bs'
import HeaderFeed from './HeaderFeed'
import ListPlace from './ListPlace'
import ListEvent from './ListEvent'

const options = [
    {id: 0, name: 'Popular Places'},
    {id: 1, name: 'Recommended'},
    {id: 2, name: 'Near Me'}
]

const dates = [
    {id: 0, dayName: 'Lun', dayNumber: 5},
    {id: 1, dayName: 'Mar', dayNumber: 6},
    {id: 2, dayName: 'Mie', dayNumber: 7},
    {id: 3, dayName: 'Jue', dayNumber: 8},
    {id: 4, dayName: 'Vie', dayNumber: 9},
    {id: 5, dayName: 'Sab', dayNumber: 10},
    {id: 6, dayName: 'Dom', dayNumber: 11},
    {id: 7, dayName: 'Lun', dayNumber: 12},
    {id: 8, dayName: 'Mar', dayNumber: 13},
    {id: 9, dayName: 'Mie', dayNumber: 14},
]

const Feed = () => {

    const [activeOption, setActiveOption] = useState(0)
    const [activeDate, setActiveDate] = useState(4)

    return (
        <div className='w-[60%] relative top-0 left-[18%] py-4 px-8 flex flex-col font-Oswald'>
            <div className='flex justify-between items-center mb-4'>
                <div className='flex flex-col'>
                    <h2 className='text-gray-900 text-2xl font-bold mb-1'>Hello, Raffialdo!🤙</h2>
                    <p className='text-gray-400'>Welcome back and explore the world.</p>
                </div>
                <div className='w-12 h-12 bg-white shadow-md shadow-gray-300 rounded-full relative flex justify-center items-center'>
                    <BsBell className='text-gray-900 text-lg'/>
                    <div className='absolute bg-secondary w-3 h-3 rounded-full shadow-md shadow-secondary top-0 right-0'></div>
                </div>
            </div>
            <HeaderFeed />
            <div className='flex flex-col'>
                <h2 className='text-gray-900 text-2xl font-bold mb-2'>Discover World!🌈</h2>
                <div className='flex justify-between items-center mb-6'>
                    <div className='flex items-center space-x-6'>
                        {options.map(option => (
                            <p key={option.id} onClick={() => setActiveOption(option.id)} className={`${activeOption === option.id ? 'text-primary font-bold': 'text-gray-400 font-light'}`}>{option.name}</p>
                        ))}
                    </div>
                    <div className='flex items-center space-x-3 text-primary font-light'>
                        <p>View All</p>
                        <BsArrowRight />
                    </div>
                </div>
                <ListPlace />          
            </div>
            <div className="flex flex-col">
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-gray-900 text-2xl font-bold mb-2'>Event Dates!🚀</h2>
                    <div className='flex items-center space-x-3 text-primary font-light'>
                        <p>View All</p>
                        <BsArrowRight />
                    </div>
                </div>
                <div className='flex justify-between items-center mb-6'>
                    {dates.map(date => (
                        <div key={date.id} onClick={() => setActiveDate(date.id)} className={`${activeDate === date.id ? 'bg-primary text-white' : 'bg-white'} h-20 w-12 rounded-full p-2 flex flex-col justify-between items-center shadow-sm`}>
                            <h6 className={`${activeDate === date.id ? 'text-white' : 'text-gray-400'} font-light`}>{date.dayName}</h6>
                            <p className={`${activeDate === date.id ? 'text-white' : 'text-gray-900'} font-bold text-lg`}>{date.dayNumber}</p>
                        </div>
                    ))}
                </div>
                <ListEvent />           
            </div>
        </div>
    )
}

export default Feed
