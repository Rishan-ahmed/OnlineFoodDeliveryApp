import React from 'react'
import ProfileNav from './ProfileNav'
import {Routes, Route} from 'react-router-dom'
import UserProfile from './UserProfile'
import Order from './Order/Order'
import Fevorite from './Fevorite'
import Address from './Address'
import Payment from './Payment'
import Notification from './Notification'
import Logout from './Logout'
function Profile() {

  return (
    <div className='flex'>
       <ProfileNav/>
       <div className='py-10 px-10  w-full'>
        <Routes>
        <Route path="/" element={<UserProfile/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/favorite" element={<Fevorite/>}/>
        <Route path="/address" element={<Address/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/notification" element={<Notification/>}/>
        <Route path="/logout" element={<Logout/>}/>
        
        </Routes>
       </div>
    </div>
  )
}

export default Profile