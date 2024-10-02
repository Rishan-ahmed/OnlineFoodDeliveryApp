import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import PlaceIcon from '@mui/icons-material/Place';
import { Divider, FormControl, IconButton, FormControlLabel, FormLabel, RadioGroup, Radio, MenuItem } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuCard from './MenuCard';

function Restaurent() {
    
    const FoodType = [ "All", "Vegiterian Only", "Non Vegritrian", "Sessional"]
    const FoodCategory = ["All","Pizza", "Biriyani", "Berger", "Chicken"]
    const Menu = [
      {
        title:"Nuts & Seeds",
        options: ["Cashews"]
      
      },
      {
        title:"Protin",
        options: ["Ground beef", "Bacon stifs"]
      
      },
      {
        title:"Bread",
        options: ["Hemberger Buns"]
      
      },
      {
        title:"Vegitable",
        options: ["Lattuce", "Tomento Slice", "Picles", "Onion Slice"]
      
      },
      {
        title:"Condiment",
        options: ["KatchUp"]
      
      },
      
    ]
    const MenuItems = [1,1,1,1,1,1,1,1]
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
          backgroundColor: '#1A2027',
        }),
      }));
      
  return (
    <>
    <div className='py-10 px-10'>
        <h1 className='text-gray-400 py-5'>Home/Restaurent/Restaurent</h1>
        <div>
            <Grid container spacing={2}>
            
                <Grid size={{ xs: 12}}>
          <Item>
            <img className='object-cover h-[40vh] w-full'  src="https://images.unsplash.com/photo-1671975412006-f0c68d9c7006?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></Item>
        </Grid>
        <Grid size={{ xs: 6}}>
          <Item>
            <img className='object-cover h-[40vh] w-full'  src="https://images.unsplash.com/photo-1698215129975-9bed92c1f23b?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></Item>
        </Grid>
        <Grid size={{ xs: 6}}>
          <Item>
            <img className='object-cover h-[40vh] w-full'  src="https://images.unsplash.com/photo-1609167372684-319283ffe5b3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></Item>
        </Grid>
            </Grid>
        </div>
        <div className='py-5'>
            <h1 className='font-bold text-4xl'>Bangladeshi Food</h1>
            <p className='text-gray-400 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quidem enim illo labore natus suscipit odit tempora asperiores similique quo.</p>
            <div className='flex items-center text-gray-400 py-2'>
               
                <PlaceIcon/>
            
                <p className='px-2'>Mohhammadpur, Dhaka</p>
            </div>
            <div className='flex items-center text-gray-400 py-2'>
               
               <CalendarMonthIcon/>
           
               <p className='px-2 text-orange-300'> this date - that date</p>
           </div>
        </div>
        <Divider/>
        <section>
            <div className='flex py-5'>
                <div className='w-[20%]'>
                  <div>
                <FormControl >
                <FormLabel  id="demo-radio-buttons-group-label">Food Type</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  className='py-5'
                >
                  {FoodType.map((types, index)=>(
                    <FormControlLabel key={index} value={types} control={<Radio />} label={types} />
                  ))}
                </RadioGroup>
              </FormControl>
              </div>
              <Divider/>
              <div>
                <FormControl >
                <FormLabel  id="demo-radio-buttons-group-label">Food Type</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  className='py-5'
                >
                  {FoodCategory.map((types, index)=>(
                    <FormControlLabel key={index} value={types} control={<Radio />} label={types} />
                  ))}
                </RadioGroup>
              </FormControl>
              </div>
                </div>
                <div className='w-[80%] '>
                 
                    
                  {MenuItems.map((items)=>(
                    <div className='mb-5'> 
                    <MenuCard menu={Menu} />
                   
                   </div>
                     
                     
                  ))}
                  
               
                   </div>
            </div>
        </section>
        </div>

        
        </>

    
  )
}

export default Restaurent