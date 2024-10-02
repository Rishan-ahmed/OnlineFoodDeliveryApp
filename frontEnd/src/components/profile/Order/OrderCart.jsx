import React from 'react'
import {Card, Button} from "@mui/material"
function OrderCart() {
  return (
    <div className='w-full flex justify-center'>
        <Card className='flex justify-between items-center h-36 px-5 w-[50%]'>
            <div className='flex'>
                <div className='w-[5rem]'>
                <img src="https://images.unsplash.com/photo-1560611588-163f295eb145?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='px-2'>
                    <p className='font-semibold'>Biriyani</p>
                    <p>450 taka</p>
                </div>
                </div>
            <div>
                <Button variant='contained'> Deliverd</Button>
            </div>
        </Card>
    </div>
  )
}

export default OrderCart