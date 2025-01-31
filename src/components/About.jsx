import React from 'react'
import { FaGraduationCap, FaBriefcase, FaGlobeAmericas, FaMapMarkedAlt } from 'react-icons/fa';
import Wallsttotech from '../assets/wall_st_to_tech.webp'
import Usasvg from '../assets/us.svg'


const styles = {
    container: {

      padding: '20px',

      gap: '20px',
    },
    card: {
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '20px',
      marginBottom: '16px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      width: '100%',
      backgroundColor: '#fff',
    },
    icon: {
      marginBottom: '10px',
    },
    title: {
      fontSize: '1.3rem',
      margin: '10px 0',
      fontWeight: 'bold',
      color: '#555',
    },
    description: {
      fontSize: '1.2rem',
      color: '#555',
    },
    

};

const cards = [
    {
      id: 1,
      icon: <div>  <div className="mit-logo text-6xl font-bold text-red-600">
      MIT
      <FaGraduationCap size={40} style={{ color: 'navy' }} />
    </div></div>,
      title: 'Education',
      description: 'Professional certification in MERN stack development from MIT  and self-taught in various technologies.',
    },
    {
      id: 2,
      icon:(   <div>
        {/* Adding an image at the top */}
        <div style={{ backgroundImage: `url(${Wallsttotech})`, height: '500px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {/* Background image container */}
        </div>
        <FaBriefcase size={40} style={{ color: 'navy' }} />
      </div>),
      title: 'Work Experience',
      description: 'Full-stack developer with a background in financial technology, entrepreneurial ventures, and coaching.',
    },
    {
      id: 3,
      icon:   <div>       <div style={{ backgroundImage: `url(${Usasvg})`, height: '500px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Background image container */}
    </div><FaGlobeAmericas size={40} style={{ color: 'navy' }} /></div>,
      title: 'Nationality',
      description: 'Proud to bring diverse perspectives to my work as a U.S. citizen with global aspirations.',
    },
    
  ];


  

const About = () => {
    
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4 mt-[800px] '>
                    <p className='text-4xl font-bold  inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>
        
                </div>
                </div>
                <div className='max-w-[1000px] w-full px-4 '>
 <div style={styles.container} className="w-50px;">



      {cards.map((card) => (
        <div
          key={card.id}
          style={styles.card}
          className="group hover:bg-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 md:mb-8"
        >
          <div style={styles.icon} className="text-teal-400 group-hover:text-teal-200">
            {card.icon} 
          </div>
          <h3 style={styles.title} className="group-hover:text-navy">
            {card.title}
          </h3>
          <p style={styles.description}>{card.description}</p>
          
        </div>
    
      ))}




    </div> 

                </div>

            </div>













        </div>

  )
}

export default About