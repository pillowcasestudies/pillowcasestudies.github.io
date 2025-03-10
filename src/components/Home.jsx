import React, {useState} from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'
import ProfilePicture from '../assets/profilepicture.jpg'
import {Link} from 'react-scroll'
import GradientButton from './GradientButton';


const Home = () => {
    const [nav, setNav] = useState(false) 
    const handleClick = () => setNav(!nav)
    
  return (
 <div name='home' className='bg-[#0a192f] pb-[350px]'>


    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center '>


        <div className="circular-frame mt-[150px]">
        <img  src={ProfilePicture} alt="Barry Profile Image" />
        </div>

        <h1 className='text-3xl text-red-600'> Hi! 👋  my name is</h1>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Barry Weinstein</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]' >I'm a Full Stack Developer.</h2>
        <p className='text-[#8892b0] sm:text-3xl  py-4 max-w-[700px]'>I have 8 years of experience coding in multiple frameworks in different industries! I've worked for large companies and started my own businesses. <span className="text-white">I'd love to learn more about your project and see if we can team up!</span></p>
        <div >

        </div>
   
    </div>

    <GradientButton />

 </div>
  )
}

export default Home