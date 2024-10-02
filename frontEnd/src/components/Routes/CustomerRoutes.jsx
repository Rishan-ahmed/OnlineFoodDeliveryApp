
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../HomePage/home/Home'
import Restaurent from '../Restaurent/Restaurent'
import CartPage from '../CartPage/CartPage'
import Profile from '../profile/Profile'
import Navbar from '../HomePage/navbar/Navbar'
import Auth from '../login/Auth'

function CustomerRoutes() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/account/:register" element={<Home/>}/>
            <Route path="/restaurent/:city/:title/:id" element={<Restaurent/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/myProfile/*" element={<Profile/>}/>
            
        </Routes>
        <Auth/>
    </div>
    
  )
}

export default CustomerRoutes