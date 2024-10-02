import React from 'react'
import OrderCart from './OrderCart'

function Order() {
  return (
    <div>
      <div className='flex justify-center items-center py-5 font-bold text-2xl'>
        <h1>My Orders</h1>
      </div>
      <div>
      {
       
          [1,1,1].map((items) =>(
        <div className='mb-5'>
        <OrderCart/>
        </div>
      ))
        
      
    }
      </div>
      
    </div>

  )
}

export default Order