import React from 'react'
import { useNavigate } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Register_user } from '../state/authentication/Action';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [role, setRole] = useState('');

    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    });
    const handleChange = (e) => {
      setRole(e.target.value);
    };

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (formData.password !== formData.repeatPassword) {
        alert('Passwords do not match!');
        return;
      }
  

      dispatch(Register_user({
        formData:{
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role
      }, navigate
      }))
    console.log(formData)
    };
  return (
    <div>
        <div>
    <div className='text-center text-2xl font-bold py-5'>Register</div>
    <form className="max-w-sm mx-auto">
    <div className="mb-5">
    <label htmlFor= "username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
    <input onChange={handleInputChange} value={formData.username}type="text" id="username" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
  </div>
  <div className="mb-5">
    <label htmlFor= "email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input onChange={handleInputChange} value={formData.email} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
  </div>
  <div className="mb-5">
    <label htmlFor= "password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input onChange={handleInputChange} value={formData.password} type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div className="mb-5">
    <label htmlFor= "repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
    <input onChange={handleInputChange} value={formData.repeatPassword} type="password" id="repeatPassword" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="role"
          value={role}
          label="Age"
          onChange={handleChange}
          sx={{width: "100%"}}
        >
          <MenuItem value="ROLE_CUSTOMER">Customer</MenuItem>
          <MenuItem value="ROLE_RESTURENT_OWNER">Owner</MenuItem>
          <MenuItem value="ROLE_ADMIN">Admin</MenuItem>
        </Select>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
    <input 
  id="terms" 
  type="checkbox" 
  value="" 
  className="
    w-4 h-4 
    border border-gray-300 rounded 
    bg-gray-50 
    checked:bg-[#e91e63] checked:border-[#e91e63] 
    focus:ring-3 focus:ring-[#e91e63] 
    dark:bg-gray-700 dark:border-gray-600 
    dark:focus:ring-[#e91e63] dark:ring-offset-gray-800 
    dark:checked:bg-[#e91e63] dark:checked:border-[#e91e63]" 
  required 
/>

    </div>
    <label htmlFor= "terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-[#e91e63] hover:underline dark:text-[#e91e63]">terms and conditions</a></label>
  </div>
  <button onClick={handleSubmit} type="submit" className= " w-full text-white bg-[#e91e63] hover:bg-[#de1b5c] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[lue-600#e91e63] dark:hover:bg-[#e91e63] dark:focus:ring-blue-800">Register new account</button>
   <div><a onClick={()=>navigate("/account/login")} className="text-[#e91e63] hover:underline dark:text-[#e91e63]">Already have a account?</a></div>   
</form>
</div>
    </div>
  )
}

export default Register