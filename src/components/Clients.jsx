import React from 'react'
import HTML from '../assets/html.png'
import MoneyCorp from '../assets/moneycorp.svg'
import Nomura from '../assets/Nomura.svg'
import StateStreet from '../assets/Statestreet.svg'

const Clients = () => {

    const clientslist = [
        {
          name: "State Street",
          logo: StateStreet,
          description: "Designed, implemented, and deployed an application for forex derivatives trading."
        },
        {
          name: "Nomura",
          logo: Nomura,
          description: "Implemented a smart trading tips system for their FX Options desk which led to a multi-million dollar FX deal ."
        },
        {
          name: "MoneyCorp",
          logo: MoneyCorp,
          description: "Designed and built a custom risk management system in Ruby on Rails for MoneyCorp Client Presentations."
        }
      ];

  return (
    <div name='clients'  className='h-auto w-full mt-{150} bg-[#0a192f] text-black-300'>

        <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Notable Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientslist.map((client, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-2xl flex flex-col items-center">
              <img
                src={client.logo}
                alt={client.name}
                className="h-20 mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">{client.name}</h3>
              <p className="text-gray-600 text-center">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    </div>

  )
}

export default Clients