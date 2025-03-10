import React, { Component, useState } from 'react';
import WorkImg from '../assets/WorkImg.png';
import Volailityfx from '../assets/VolatilityFX_full_screen.png';
import FootCamp from '../assets/Footcamp.png';
import Pretzelandcliffordstore from '../assets/Pretzelandcliffordstore.png';
import Footcampstore from '../assets/Footcampstore.png';
import PillowSpamDirect from '../assets/pillowspamdirect.webp';
import VolatilityFXReadMe from './ReadMe/VolatilityFXReadMe';
import FootCampReadMe from './ReadMe/FootCampReadMe';
import PretzelAndCliffordReadMe from './ReadMe/PretzelAndCliffordReadme';
import FootCampStoreReadMe from './ReadMe/FootCampStoreReadMe';
import NewsRoomDirectReadMe from './ReadMe/NewsRoomDirectReadMe';
import ReactJSAppReadMe from './ReadMe/ReactJSAppReadMe';

const Work = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const projects = [
    { img: Volailityfx, title: 'VolatilityFX', component: <VolatilityFXReadMe /> },
    { img: FootCamp, title: 'FootCamp', component: <FootCampReadMe /> },
    { img: Pretzelandcliffordstore, title: 'The Pretzel and Clifford Store', component: <PretzelAndCliffordReadMe /> },
    { img: Footcampstore, title: 'FootCamp Store', component: <FootCampStoreReadMe /> },
    { img: PillowSpamDirect, title: 'News Room Direct', component: <NewsRoomDirectReadMe /> },
    { img: WorkImg, title: 'React JS Application', component: <ReactJSAppReadMe /> },
  ];

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {projects.map((project, index) => (
            <div key={index} style={{ backgroundImage: `url(${project.img})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div transition-transform transform hover:scale-105'>
              <div className='opacity-0 group-hover:opacity-100 text-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>{project.title}</span>
                <div className='pt-8'>
                  <button onClick={() => toggleDropdown(index)} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>More Info</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {activeDropdown !== null && (
          <div className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center h-full overflow-y-scroll '>
            <div className='bg-white text-black p-8 rounded-lg w-3/4 max-w-2xl   mt-[250px]'>
              {projects[activeDropdown].component}
              <button onClick={() => setActiveDropdown(null)} className='mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg'>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
