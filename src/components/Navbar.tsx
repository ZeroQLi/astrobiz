import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
 return (
 <nav className=" bg-red-100 shadow-lg">
  <div className="container mx-auto py-3">
  <div className="flex items-center justify-between ">
  <div className="flex items-center ">
  
  <a className="m-0" href="/">
    <img className=' h-10 ' src='/logo.png'></img>
  </a>
  </div>
  <div className="flex items-center">
  <a href="/" className=" text-slate-800 hover:text-gray-900 p-2 mx-3 cursor-pointer">Home</a>
           <a href="/about_us" className="text-slate-800 hover:text-gray-900 p-2 mx-3 cursor-pointer">About us</a>
           <a href="/products" className="text-slate-800 rounded hover:text-gray-900 p-2 mx-3 cursor-pointer">Products</a>
  <button
    type="button"
    className="inline-block rounded mx-3 bg-yellow-400 px-6 pb-2 pt-2.5 text-s font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
    <a href="#contact">Contact us</a>
  </button>
  </div>
  </div>
  </div>
 </nav>
 );
};

export default Navbar;