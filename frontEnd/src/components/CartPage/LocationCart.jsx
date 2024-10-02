import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function LocationCart() {
  return (

         
        <Card sx={{ width: "20rem" }}>
      <CardContent>
     
        <Typography variant="h6" component="div">
        <LocationOnIcon />
          <span className='px-4 pb-5'>HOME</span>
        </Typography>
        <Typography variant="body2" className='px-10 pt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime commodi labore neque! Illum laborum ad, minus ut quaerat asperiores!
        </Typography>
      </CardContent>

      <CardActions sx={{paddingLeft: "3rem"}} >
        <Button variant="outlined" sx={{width: "90%"}}>Select</Button>
      </CardActions>


    </Card>
    
  );
}
