import React from 'react'
import WorkImg from '../assets/WorkImg.png'
import Volailityfx from '../assets/VolatilityFX_full_screen.png'
import FootCamp from '../assets/Footcamp.png'
import Pretzelandcliffordstore from '../assets/Pretzelandcliffordstore.png'
import Footcampstore from '../assets/Footcampstore.png'


const Work = () => {
  return (
    <div name='work' className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p> 
        <p className='py-6'>// Check out some of my recent work</p>   
        </div>    


        <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
{/* Container */}
            <div style={{backgroundImage: `url(${Volailityfx})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Project Item */}
                
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    VolatilityFX
                    </span>
                    <div className='pt-8 text-center'>
                            <a href="https://www.volatilityfx.com">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-whtie text-white font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-whtie text-white font-bold text-lg'>Tour</button>
                            </a>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${FootCamp})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Project Item */}
                
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    FootCamp
                    </span>
                    <div className='pt-8 text-center'>
                            <a href="www.footcamp.net">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-whtie text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-whtie text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                    </div>
                </div>
            </div>




            <div style={{backgroundImage: `url(${Pretzelandcliffordstore})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Project Item */}
                
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    The Pretzel and Clifford Store
                    </span>
                    <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-whtie text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-whtie text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                    </div>
                </div>
            </div>




            <div style={{backgroundImage: `url(${Footcampstore})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Project Item */}
                
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    FootCamp Store
                    </span>
                    <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-whtie text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-whtie text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                    </div>
                </div>
            </div>



            <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Project Item */}
                
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    Macaroons Direct NYC
                    </span>
                    <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-whtie text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-whtie text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Project Item */}
                
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    React JS Application
                    </span>
                    <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-whtie text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-whtie text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                    </div>
                </div>
            </div>

      
        </div>
</div>
    
    
    
    </div>
  )
}

export default Work