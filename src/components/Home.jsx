import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import ProfilePicture from '../assets/profilepicture.jpg'

const Home = () => {
  return (
 <div name='home' className='bg-[#0a192f] w-full h-screen'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        
        <div className="circular-frame">
        <img  src={ProfilePicture} alt="Barry Profile Image" />
        </div>

        <h1 className='text-3xl text-pink-600'> Hi! 👋  my name is</h1>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Barry Weinstein</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]' >I'm a Full Stack Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full-stack developer with 8 years of experience coding marketplaces, profile pages, financial applications, marketing applications, and more. I'm laser focused on designing a good user experience</p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
                <span className=' group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
                </span> 
            </button>
        </div>
    </div>
 </div>
  )
}

export default Home