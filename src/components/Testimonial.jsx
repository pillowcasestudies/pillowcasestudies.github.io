import React from 'react'
import MoneyCorp from '../assets/gideon testimonial.jpg'
import Nomura from '../assets/jens_testimonial.jpg'
import JohnTaylor from '../assets/johntaylor_testimonial.png'
import { motion } from 'framer-motion';

const Testimonial = () => {

    const testimoniallist = [
        {
          name: "John Taylor",
          logo: JohnTaylor,
          description: "'If you have the brains, this gives you live eyes and ears. Worth at least a 2X on performance.'",
          testimonyholderdescription: "John was the Founder of 14 Billion AUM Hedge Fund: FX Concepts."
        },
        {
          name: "Lars Theussen",
          logo: Nomura,
          description: "'Barry developed a great decision support tool for both buyside and sell side traders. Recommend taking a look.'",
          testimonyholderdescription: "Former Chief Dealer FX for both Nordea and Danske Bank."

        },
        {
          name: "Gideon Hyams",
          logo: MoneyCorp,
          description: "'Barry created an outstanding tool which is extraordinarily useful for trading FX Options.'",
           testimonyholderdescription: "In a stellar career at UBS he was the youngest banker to be appointed Director in FX Derivatives."

        }
      ];

  return (
    <div name='testimonial' className='w-full h-auto bg-[#ffffff] text-black-300'>


<section className="py-12 bg-gray-50">
<div className="container mx-auto px-6">
<h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {testimoniallist.map((client, index) => (
        <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              whileHover={{ scale: 1.1 }}
              className="p-8 bg-white shadow-xl rounded-2xl flex flex-col items-center transition duration-300 hover:shadow-2xl"
            >
      <img
        src={client.logo}
        alt={client.name}
        className="h-20 mb-4 object-contain"
      />
      <h3 className="text-xl font-semibold mb-2">{client.name}</h3>
      <ul>
      <li className="text-black-600 text-2xl text-center">{client.description}</li>
      <li><br></br></li>
      <li className="text-gray-600 text-center">{client.testimonyholderdescription}</li>
      </ul>
      </motion.div>
    
  ))}
</div>
</div>
</section>

</div>
  

  )
}

export default Testimonial