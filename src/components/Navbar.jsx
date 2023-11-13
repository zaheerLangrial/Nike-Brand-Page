import React from 'react'
import NikeBrandLogo from '../assets/brand_logo.jpg'

function Navbar() {
  return (
    <div className='flex justify-between items-center md:px-16 px-3 py-3'> 
        <div className=''>
            <img src={NikeBrandLogo} alt='Nike Brand Logo'/>
        </div>
        <div className=' hidden md:flex space-x-5 text-[16px] text-[#2E2E2E] text-poppins leading-[24px]'> 
            <button className=' hover:text-black'>MENU</button>
            <button className=' hover:text-black'>LOCATION</button>
            <button className=' hover:text-black'>ABOUT</button>
            <button className=' hover:text-black'>CONTACT</button>
        </div>
        <div >
        <button className='text-[16px] text-white text-poppins bg-red-500 px-3 py-1 hover:bg-red-700'>Login</button>
        </div>
    </div>
  )
}

export default Navbar