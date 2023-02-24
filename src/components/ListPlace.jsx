import React from 'react'
import Place from './Place'

const ListPlace = () => {
  return (
    <div className='grid grid-cols-3 gap-4 mb-8'>
        <Place />
        <Place />
        <Place />
    </div>
  )
}

export default ListPlace
