import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PaymentIcon from '@mui/icons-material/Payment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LogOut } from '../state/authentication/Action';


export default function ProfileNav() {

  const menuItems = [
    { text: 'Order', icon: <ShoppingBagIcon /> },
    { text: 'Favorite', icon: <FavoriteIcon /> },
    { text: 'Address', icon: <LocationOnIcon /> },
    { text: 'Payment', icon: <PaymentIcon /> },
    { text: 'Notification', icon: <NotificationsActiveIcon /> },
    { text: 'Events', icon: <EventIcon /> },
    { text: 'Logout', icon: <LogoutIcon /> },
  ];

  const Navigation = useNavigate();
  const hendleNavigation=(item)=>{
    if(item.text === "Logout"){
      dispatch(LogOut())
      Navigation("/")
    }
    else{
      Navigation(`/myProfile/${item.text.toLowerCase()}`)
    }
    
  }

  const dispatch = useDispatch()
  const logout = ()=>{
   
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: 380 }}>
      <CssBaseline />
      {/* <Drawer variant="permanent"> */}
       
        <List>
          {menuItems.map((item) => (
            <>
            <ListItem key={item.text}  disablePadding sx={{ display: 'block' } }>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: 'initial',
                  px: 2.5,
                  py: 5,
                  fontSize: "bold",
                
                }}
                onClick={()=>hendleNavigation(item)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 3,
                    justifyContent: 'center',
                    
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text}  primaryTypographyProps={{ fontSize: '1.5rem' }} />
              </ListItemButton>
            </ListItem>
            <Divider/>
            </>
          ))}
        </List>
      {/* </Drawer> */}

    </Box>
  );
}
