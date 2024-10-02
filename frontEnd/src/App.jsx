import { useState } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import Navbar from './components/HomePage/navbar/Navbar'
import {Darkmode} from './components/darkMode/Darkmode'
import Home from './components/HomePage/home/Home'
import "./App.css"
import CustomerRoutes from './components/Routes/CustomerRoutes'
import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { Get_user } from './components/state/authentication/Action.jsx'

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt")
  const {auth} = useSelector((store)=>store)
  useEffect(()=>{
    dispatch(Get_user(auth.jwt || jwt))
  },[auth.jwt])
  return (
   <>
   <ThemeProvider theme={Darkmode}>
    <CssBaseline>
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <Restaurent/> */}
      {/* <CartPage/> */}
      {/* <Profile/> */}
      <CustomerRoutes/>
    </CssBaseline>
   </ThemeProvider>

   </>
  )
}

export default App
