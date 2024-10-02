import React from 'react'
import { Avatar, Badge, Button, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Person } from '@mui/icons-material';
function Navbar() {
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate()
  const authHendler = ()=>{
    if(user?.role === "ROLE_CUSTOMER"){
      navigate("/myProfile")
    }
    else{
      navigate("/admin/restaurent")
    }
  }
  return (
   <div className='flex justify-between bg-[#e91e63] px-5 py-[.8rem] lg:px-20 z-40 relative items-center'>
    <div className=' flex justify-center items-center '>
      <button ><li className='text-3xl list-none' onClick={()=>navigate("/")}> SnapBite</li></button>
    </div>
    <div className='flex space-x-4 items-center cursor-pointer' > 
      <div>
       
      <SearchIcon sx={{fontSize:"2rem"}}></SearchIcon>
      
      </div>
      <div> 
      
        {user?
        (<IconButton onClick={authHendler}><Avatar  sx={{fontSize:"2rem", bgcolor:"white", color:"#e91e63"}}> {user?.username[0].toUpperCase()}</Avatar></IconButton>
        ):
        (<IconButton onClick={()=>navigate("/account/login")}><Avatar onClick={()=>navigate("/account/login")} sx={{fontSize:"2rem", bgcolor:"white", color:"#e91e63"}}> <Person/></Avatar></IconButton>)
        }
        
      
      </div>
      <div>
        <Badge badgeContent="3">
        <ShoppingCartIcon  sx={{fontSize:"2rem"}} ></ShoppingCartIcon>
        </Badge>
      </div>
    </div>
   </div>
  )
}

export default Navbar