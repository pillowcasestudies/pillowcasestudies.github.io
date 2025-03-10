import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import AWS from '../assets/aws.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Node from '../assets/node.png'
import Mongo from '../assets/mongo.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full pt-40 bg-[#72883c] text-gray-300 py-12'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
        <div className="text-left bg-black  py-8 px-6 rounded-xl ">
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className="mt-2 text-lg">// These are the techniques I work with</p>
        </div>

        {/* Skills Grid */}
        <div className='w-full bg-[#abada2] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center py-8 px-6 rounded-xl shadow-xl mt-6'>
          {[ 
            { name: "HTML", icon: HTML }, 
            { name: "CSS", icon: CSS }, 
            { name: "JavaScript", icon: JavaScript }, 
            { name: "React", icon: ReactImg }, 
            { name: "GitHub", icon: GitHub }, 
            { name: "Node.js", icon: Node }, 
            { name: "MongoDB", icon: Mongo }, 
            { name: "AWS", icon: AWS }
          ].map((skill, index) => (
            <div 
              key={index} 
              className='bg-[#1d1f18] p-6 rounded-xl shadow-lg transition-all 
                         hover:shadow-2xl hover:-translate-y-2 hover:bg-[#252921]'>
              <img className='w-20 mx-auto' src={skill.icon} alt={`${skill.name} icon`} />
              <p className='mt-4 font-semibold text-lg'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
