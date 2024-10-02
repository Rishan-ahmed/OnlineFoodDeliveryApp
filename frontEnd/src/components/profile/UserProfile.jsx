import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import {Avatar, IconButton} from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { LogOut } from '../state/authentication/Action';
import { useNavigate } from 'react-router-dom';
function UserProfile() {
  const navigate = useNavigate() 
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user);
  const logout = ()=>{
    dispatch(LogOut())
    navigate("/")
  }
  return (
    <div className='w-full h-[80%] justify-center flex items-center flex-col'>
      <div>
      <IconButton ><Avatar  sx={{fontSize:"5rem",width:"10rem", height:"10rem", bgcolor:"white", color:"#e91e63"}}> {user?.username[0].toUpperCase()}</Avatar></IconButton>
      </div>
      <div >
        <h1 className='font-bold text-4xl text-center' >{user.username}</h1>
        <p className='text-center text-2xl'> Email: {user.email}</p>
      </div>
      <div className='py-5'>
        <Button variant='contained' onClick={logout}> Logout</Button>
      </div>
    </div>
  )
}

export default UserProfile