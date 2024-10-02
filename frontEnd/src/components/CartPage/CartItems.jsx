
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Typography } from '@mui/material';
import { useState } from 'react';

function CartItems({cartItmes}) {
    const [ItemsAmount, setItemAmaount] = useState(0);
    const style = {
        py: 0,
        width: '100%',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
      };
      function IncAmaount(){
        setItemAmaount(ItemsAmount+1);
      }
      function DecAmaount(){
        if(ItemsAmount>0)
        setItemAmaount(ItemsAmount-1);
      }
        
      
  return (

            <div>
            <List sx={style}>
      <ListItem className='flex flex-col'>
        {cartItmes.map((items)=>(
             <div className='flex   w-full'>
             <div className="w-[10rem]">
                 <img src="https://img.freepik.com/premium-photo/beef-cheese-berger-with-background_1278980-27.jpg?w=826" alt="" />
             </div>
             <div className='pt-5 pl-5 pr-16'>
                 <div className='' >Biriany</div>
                 <div className='py-10'>
                     <span className='pr-2'><button onClick={IncAmaount}><AddCircleOutlineIcon/></button></span>
                     <span>
                         {ItemsAmount}
                     </span>
                     <span className='pl-2'><button onClick={DecAmaount}><RemoveCircleOutlineIcon/></button></span>
                  </div>
             </div>
             <div className='pt-5'>
             ৳1000
             </div>
             
         </div>
        ))}
       
      </ListItem>
      <Divider component="li" />
     
    </List>
            </div>
       
  )
}


export default CartItems