import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Login_user } from '../state/authentication/Action';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Login_user({
      userData: {
        email: formData.email,
        password: formData.password
      },
      navigate
    }))};
  return (
    <div>
    <div className='text-center text-2xl font-bold py-5'>Login</div>
    <form className="max-w-sm mx-auto">
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input onChange={handleInputChange} value={formData.email} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input onChange={handleInputChange} value={formData.password}  type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <button onClick={handleSubmit} type="submit" className= " w-full text-white bg-[#e91e63] hover:bg-[#de1b5c] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[lue-600#e91e63] dark:hover:bg-[#e91e63] dark:focus:ring-blue-800">Login</button>
 <a onClick={()=>navigate("/account/register")} className="text-[#e91e63]  hover:underline dark:text-[#e91e63]">Register</a>
</form>
</div>
  )
}

export default Login