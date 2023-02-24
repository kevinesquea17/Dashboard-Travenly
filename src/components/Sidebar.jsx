import React, { useState } from 'react'
import {RxDashboard} from 'react-icons/rx'
import {FaTicketAlt} from 'react-icons/fa'
import {BiBookmarkHeart} from 'react-icons/bi'
import {MdOutlineEmail} from 'react-icons/md'
import {CiWallet} from 'react-icons/ci'
import {FiSettings} from 'react-icons/fi'
import {SiYourtraveldottv} from 'react-icons/si'
import {BsArrowRight} from 'react-icons/bs'

const menu = [
    {id: 0, name: 'Dashboard', icon: <RxDashboard className='text-xl'/>},
    {id: 1, name: 'My Tickets', icon: <FaTicketAlt className='text-xl' />},
    {id: 2, name: 'Favorites', icon: <BiBookmarkHeart className='text-xl' />},
    {id: 3, name: 'Messages', icon: <MdOutlineEmail className='text-xl' />},
    {id: 4, name: 'Transaction', icon: <CiWallet className='text-xl' />},
    {id: 5, name: 'Settings', icon: <FiSettings className='text-xl' />}
]

const Sidebar = () => {

    const [activeMenu, setActiveMenu] = useState(0);

    return (
        <div className='w-[18%] bg-white py-4 px-4 flex flex-col font-Oswald fixed top-0 left-0 h-screen'>
            <div className='flex items-center space-x-2 text-2xl font-bold mb-6 justify-center'>
                <SiYourtraveldottv className='text-primary'/>
                <h1>Travenly</h1>
            </div>
            <nav className='mb-4'>
                {menu.map(item => (
                    <div key={item.id} onClick={() => setActiveMenu(item.id)} className={`${activeMenu === item.id ? 'bg-primary text-white shadow-sm shadow-primary' : 'bg-transparent text-gray-800'} flex space-x-2 py-2 px-4 rounded items-center mb-4 hover:bg-primary hover:text-white transition duration-300 ease-out relative`}>
                        {item.icon}
                        <p>{item.name}</p>
                        {item.name === 'Messages' && <p className='w-6 h-6 flex justify-center items-center bg-secondary rounded-full shadow-md shadow-secondary text-white absolute right-5 text-sm'>2</p>}
                    </div>
                ))}
            </nav>
            <div className='w-full h-40 bg-[url("./assets/background-paisaje.jpg")] bg-cover rounded p-4 flex flex-col'>
                <h4 className='text-3xl text-secondary mb-2 font-bold'>50% <span className='text-gray-900 font-normal'>Discount!</span></h4>
                <p className='mb-3 font-light text-gray-900'>Get a discount on certain days and dont miss it.</p>
                <div className='flex justify-center items-center'>
                    <div className='w-8 h-8 rounded-full flex justify-center items-center bg-primary shadow-md shadow-primary'>
                        <BsArrowRight className='text-white'/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar