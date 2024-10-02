import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CartItems from './CartItems';
import LocationCart from './LocationCart';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';



export const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function CartPage() {
   const cartItems = [1,1,1]
   const style = {
    py: 0,
    width: '100%',
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
  };


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
   <>
       <div className='flex'> 
          <div className='w-[22%] h-screen'>
            <div>
            <CartItems cartItmes={cartItems}/>
            </div>
            <div className='pt-5'>

          <List sx={style}>
              <ListItem className=''>
                <div className='flex flex-col w-full '>
                    <h1 className='py-5 font-semibold'>Bill Details</h1>
                <div className='flex justify-between w-full py-5'>
               <div> 
                <p>Item Total</p>
                <p>Delivery Fee</p>
                <p>Plateform Fee</p>
                <p>Gst & Restaurent Charges</p>
                
               </div>
               <div>
                 <p>৳4444</p>
                 <p>৳24</p>
                 <p>৳14</p>
                 <p>৳0</p>
                 </div>
               </div>
               <Divider/>
               <div className='flex justify-between py-2'>
                <p>Total Pay</p>
                <p>৳4482</p>
               </div>
               </div>
               <Divider/>
               
              </ListItem>
              <Divider component="li" />
          </List>
            </div>
            
          </div>
        
          <div className='w-[78%]'>
            <div className='py-20 px-20 flex flex-wrap '>
              {
                [1,1,1,1,1].map((items)=>(
                  <div className='pl-5 pb-5'>
                    <LocationCart/>
                  </div>
                  
                ))
              }
              <div className='pl-5 pb-5'>
              <Card sx={{ width: "20rem" }}>
      <CardContent>
     
        <Typography variant="h6" component="div">
        <AddLocationAltIcon />
          <span className='px-4 pb-5'>Add Location</span>
        </Typography>
      </CardContent>

      <CardActions sx={{paddingLeft: "3rem"}} >
        <Button variant="contained"onClick={handleOpen} sx={{width: "90%"}}>Add</Button>
      </CardActions>


    </Card>
    </div>
            </div>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
          </div>
      </div></>
  )
}

export default CartPage