import React from 'react'
import Event from './Event'

const ListEvent = () => {
  return (
    <div className='grid grid-cols-2 gap-4 pb-10'>
        <Event />
        <Event />
        <Event />
        <Event />
    </div>
  )
}

export default ListEvent