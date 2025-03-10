import React, { useState } from 'react';
import MoneyCorp from '../assets/gideon testimonial.jpg'
import CredutSuisse from '../assets/Creditsuisselogo.png'
import VolatilityMarkets from '../assets/volatilitymarketslogo.png'
import BlueCrestCapital from '../assets/Bluecrestcapitallogo.png'
import MIT from '../assets/Mitlogo.svg.png'
import LSE from '../assets/lselogo.png'


const Resume = () => {
  const [showAlert, setShowAlert] = useState(true); 

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const experienceData = [
    {
      title: "Software Engineer and Consultant",
      company: "VolatilityMarkets",
      duration: "Jun 2015 - Dec 2024",
      logo: VolatilityMarkets, 
      responsibilities: [
        "Led the design, planning, and execution of software builds on behalf of institutional clients.",
        "Built bespoke financial tools for foreign exchange market professionals including State Street, MoneyCorp, Nomura, and others.",
        "Released tools in the Ruby on Rails framework modeling and forecasting financial risks and trade ideas in the FX markets.",
        "Learn more about VolatilityMarkets with the Independent Research Forum."
      ]
    },
    {
      title: "FX Derivatives Market Maker",
      company: "Credit Suisse",
      duration: "Jun 2014 - Aug 2015",
      logo: CredutSuisse,
      responsibilities: [
        "Ran the USDCAD, AUDUSD, NZDUSD, EURUSD, GBPUSD books with a team.",
        "Made prices for FX Options products for clients up to $15 Billion options notional.",
        "+$2.5 MM Annual P/L associated with the USDCAD portfolio",
        "Introduce automation to the FX Options desk after releasing an auto-trader."
      ]
    },
    {
      title: "FX Options Trader",
      company: "BlueCrest Capital",
      duration: "Jun 2012 - Aug 2014",
      logo: BlueCrestCapital,
      responsibilities: [
        "Worked with a team to oversee the management of a large FX Options portfolio",
        "Worked on parameterization and optimization of a machine learning trading algorithm.",
        "+$17MM P/L associated with the project"
      ]
    }
  ];

  return (
    <div name='resume' className='w-full h-full bg-[#ffffff] text-gray-300 '>
      <div className="bg-gradient-to-br from-[#0a192f] to-indigo-600 min-h-screen text-white ">
        <div className="max-w-4xl mx-auto  p-8 bg-white bg-opacity-10 rounded-xl shadow-md backdrop-blur-lg ">
          <div className="p-4">
            {showAlert && (
              <div className="mt-4 p-4 bg-green-500 rounded shadow-lg text-white text-bold text-2xl text-center relative ">
                <strong>Fun Fact!</strong> Barry has been promoted at every job he's worked.
                <button
                  onClick={handleCloseAlert}
                  className="absolute top-2 right-2 text-red-500 text-4xl font-bold"
                >
                  &times;
                </button>
              </div>
            )}
          </div>

          <div className="text-center">
            <h1 className="text-5xl font-bold mb-3 text-gray-100">Barry Weinstein</h1>
            <p className="text-xl font-light text-gray-200">Full Stack Developer | Application Architect</p>
            <p className="mt-3 text-sm text-gray-300">
              barryaweinstein@gmail.com | 917-913-3117 | 
              <a href="https://www.linkedin.com/in/barry-weinstein-b671471b/" className="text-indigo-300 underline"> LinkedIn</a>
            </p>
          </div>

		  <section className="my-10">
  <h2 className="text-3xl font-semibold text-white">Experience</h2>
  <div className="mt-5 space-y-6">
    {experienceData.map((job, index) => (
      <div key={index} className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <div className="flex items-center space-x-6">
          {/* Updated Image with border, padding, and shadow */}
          <img 
            src={job.logo} 
            alt={`${job.company} logo`} 
            className="bg-white max-w-[150px] object-contain p-3 border-4 border-indigo-500 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" 
          />

          <div>
            <h3 className="text-xl font-bold text-gray-100">{job.title}</h3>
            <p className="text-sm font-light text-gray-300">{job.company} - {job.duration}</p>
          </div>

        </div>
        <ul className="list-disc list-inside mt-3 text-gray-300">
          {job.responsibilities.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>
          <section className="my-10">
            <h2 className="text-2xl font-semibold text-white">Higher Education</h2>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center space-x-6">
                <img src={MIT} alt={`MIT logo`} className="bg-white max-w-[150px] object-contain p-3 border-4 border-indigo-500 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"  />
                <div>
                  <h3 className="text-xl font-bold text-gray-100">Professional Certificate in Coding (MERN STACK)</h3>
                  <p className="text-sm font-light text-gray-300">MIT - Graduating in 2025</p>
                </div>
              </div>
            </div>
          </section>
          <section className="my-10">
            <h2 className="text-2xl font-semibold text-white">Undergraduate Education</h2>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center space-x-6">
                <img src={LSE} alt={`LSE logo`}             className="bg-white max-w-[150px] object-contain p-3 border-4 border-indigo-500 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"  />
                <div>
				<h3 className="text-xl font-bold text-gray-100">Upper Second Class Honors BSC.</h3>
                  <p className="text-sm font-light text-gray-300">LSE - London School of Economics</p>
                </div>
              </div>
            </div>
          </section>
          <footer className="text-center mt-10">
            <p className="text-sm font-light text-gray-300">&copy; 2025 Barry Weinstein | All Rights Reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Resume;
