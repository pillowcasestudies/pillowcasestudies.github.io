import React from 'react'
import VolunteerWork from '../assets/volunteer.jpg'
import Nyrr from '../assets/NYRoadRunners.svg.png'
import GodsLoveWeDeliver from '../assets/glwd-logo.jpg'
import NycBallet from '../assets/New_York_City_Ballet_Logo.png'
import FootCamp from '../assets/Footcamplogo.png'

const Volunteerwork = () => {
    const ngos = [
        { name: "New York Road Runners", logo: Nyrr, description: "Assistant to the Head of the Volunteer's Office. Worked from 2013-2017 working the New York City Marathon as well as dozens of other races in the NYC Area throughout the year." },
        { name: "God's Love We Deliver", logo: GodsLoveWeDeliver, description: "I love marshalling events and helping organize! It's not easy getting to Central Park at 4:45 AM on a freezing November morning every year. But be grateful for your health because you never know if you'll need this!" },
        { name: "New York City Ballet", logo: NycBallet, description: "I managed the intake and processing of matching gifts offers from private and public institutions." },
        { name: "FootCamp New York", logo: FootCamp, description: "FootCamp is a fitness studio focused on improving public orthopedic health through barefoot walking. FootCamp is rated 5 stars on ClassPass and is a 'Top Fitness Studio in Manhattan' from ClassPass." },
    ];

    return (
        <div name='volunteerwork' className='w-full bg-[#1d1f18] text-black-300'>
            <section className="p-6 bg-gray-100 rounded-2xl shadow-lg text-center">
                <h2 className="text-3xl font-bold mb-4">Volunteer Work</h2>
                <h5 className="text-xl font-bold mb-4">Giving back to my community is at the core of what I do! Here are some non-profits that I've volunteered for.</h5>
                <div className="flex justify-center mb-6">
                    <img
                        src={VolunteerWork}
                        alt="Volunteer Work"
                        className="rounded-xl shadow-md w-[300px] max-w-3xl"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ngos.map((ngo, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center 
                                       transition-all transform hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <img src={ngo.logo} alt={ngo.name} className="w-20 h-20 mb-3 rounded-full shadow-sm" />
                            <h3 className="text-xl font-semibold">{ngo.name}</h3>
                            <p className="text-gray-600 text-sm text-center mt-2">{ngo.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Volunteerwork;
