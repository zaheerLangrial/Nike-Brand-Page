import React from 'react'
import shoesImg from '../assets/shoe_image.jpg'
import flipkartLogo from '../assets/flipkart.jpg'
import amazonLogo from '../assets/amazon.jpg'

function HeroSection() {
  return (
    <div className=' md:max-w-6xl mx-auto mt-5 md:flex justify-center items-center space-x-5'>
        <div className=' md:w-1/2'>
            <div>
                <h2 className='md:text-[108px] text-5xl text-[#2E2E2E] md:leading-[102px] text-poppins'>
                YOUR FEET <br/>
                DESERVE <br/>
                THE BEST <br/>
                </h2>
                <p className='md:text-[16px] text-[#5A5959] text-poppins py-5'>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className='pb-5 flex space-x-5'>
                    <button className=' bg-red-500 px-4 py-0.5 text-[24px] text-white font-medium hover:bg-red-700 hover:text-white'>
                    Shop Now
                    </button>
                    <button className=' bg-transparent px-4 py-0.5 text-[24px] text-[#5A5959] border hover:bg-red-700 hover:text-white duration-500 font-medium'>
                    Category
                    </button>
                </div>
                <p className='md:text-[16px] text-[#5A5959] md:leading-[19.36px] pb-5'>
                Also Available On
                </p>
                <div className='flex space-x-3'>
                    <img src={flipkartLogo} />
                    <img src={amazonLogo} />
                </div>
            </div>
        </div>
        <div className=' md:w-1/2'>
            <img src={shoesImg} alt='The Shoes Pic.' />
        </div>
    </div>
  )
}

export default HeroSection