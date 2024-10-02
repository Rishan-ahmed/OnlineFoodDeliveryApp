import { Card, Chip } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function FRCard({name, desc}) {
  return (
    <Card className=' w-[15rem] relative'>
      <div className={true?"cursor-pointer": 'cursor-not-allowed'}>
        <img className='h-[15rem] w-full rounded-t-md object-cover' src="https://plus.unsplash.com/premium_photo-1723491285855-f1035c4c703c?q=80&w=2070&auto=format&fit=crop
                 &ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="" />
        <Chip 
        className='absolute top-2 left-2'
        size='small'
        color={true?"success":"error"}
        label={true?"open":"closed"}
        />
        </div>

       <div className='textPart flex justify-between px-3 py-3'>
        <div className='flex flex-col flex-wrap'>
          <p className='text-xl text-bold'>{name}</p>
          <p className='text-gray-400'> {desc} </p>
         </div>
         <div>
          {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
          
         </div>
        

       </div>

    </Card>
  )
}

export default FRCard