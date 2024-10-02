import React from 'react'

function Carousel({image, title}) {
  return (
    
        <div className='flex flex-col items-center'>
            <img className='rounded-full object-cover object-center w-[14rem] h-[14rem]' src={image} alt="" />
            <span className='py-5 font-semibold text-gray-400'>{title}</span>
        </div>
    
  )
}

export default Carousel