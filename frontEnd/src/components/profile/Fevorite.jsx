import { Restaurant } from '@mui/icons-material'
import React from 'react'
import FRCard from '../HomePage/favoriteRestaurnets/FRCard'

function Fevorite() {
  return (
    <div className='flex items-center w-full flex-col' >
      <div
      className='py-5 font-bold text-2xl'> 
        <h1>My Favorites</h1></div>
      <div className='flex flex-wrap'>
        {
          
            [1,1,1,1].map((items)=>(
              <div className='pl-5'>
              <FRCard/>
              </div>
          
          ))
}
        
      
      </div>
      
    </div>
  )
}

export default Fevorite