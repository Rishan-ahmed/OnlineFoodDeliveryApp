import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider, Button, FormControl, IconButton, FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material';

function MenuCard({menu}) {
  return (
    <div> 
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <div className='flex'>
        <div className='py-5 px-5'> 
            <img className='size-[8rem]' src="https://img.freepik.com/premium-photo/beef-cheese-berger-with-background_1278980-27.jpg?w=826" alt="" />
        </div>
        <div className='flex flex-col py-5'>
           <p className='font-semibold py-2'>Name</p>
           <p className='py-2'>Price</p>
           <p>description Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, cumque.</p>
            
        </div>
      </div>
    </AccordionSummary>
    <AccordionDetails>
      <div className='flex justify-between px-5'>
          {menu.map((itmes, index)=>(
            <FormControl >
            <FormLabel key={index} id="demo-radio-buttons-group-label">{itmes.title}</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              className='py-5'
            >
             {
              itmes.options.map((items, index)=>(
                <FormControlLabel key={index} value= {items} control={<Radio />} label={items} />
              ))
              
              }
                
            </RadioGroup>
          </FormControl>
          ))}
        </div>
    </AccordionDetails>
    <AccordionActions>
          <Button >Add To Cart</Button>
        </AccordionActions>
    </Accordion></div>
  )
}

export default MenuCard