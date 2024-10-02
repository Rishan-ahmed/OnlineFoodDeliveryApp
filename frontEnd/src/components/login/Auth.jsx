import { Modal , Box, Typography} from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { style2 } from '../CartPage/CartPage';
import Register from './Register';
import Login from './Login';
function Auth() {
    const location = useLocation();
    const navigate = useNavigate()
    const handleClose = ()=>{
      navigate("/")
    }
  return (
    <div>
                   <Modal
        open={
            location.pathname==="/account/register" || location.pathname==="/account/login"
        }
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          {
            location.pathname==="/account/register"? <Register/>:<Login/>
          }

        </Box>
      </Modal>
    </div>
  )
}

export default Auth