import React from 'react'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Profile from './components/Profile'

const App = () => {
  return (
    <div className='flex bg-background'>
      <Sidebar />
      <Feed />
      <Profile />
    </div>
  )
}

export default App