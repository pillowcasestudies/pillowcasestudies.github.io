import React, { useState } from 'react';

const Resume = () => {
	const [showAlert, setShowAlert] = useState(true);  // State to control alert visibility

	// Function to close the alert
	const handleCloseAlert = () => {
	  setShowAlert(false);
	};
  return (
    <div name='resume' className='w-full h-full bg-[#ffffff] text-gray-300'>


<div className="bg-gradient-to-br from-[#0a192f] to-indigo-600 min-h-screen text-white">


	<div className="max-w-4xl mx-auto my-10 p-8 bg-white bg-opacity-10 rounded-xl shadow-md backdrop-blur-lg">
    <div className="p-4">
      {/* Conditional rendering of the alert box */}
      {showAlert && (
        <div className="mt-4 p-4 bg-green-500 rounded shadow-lg text-white text-bold text-2xl text-center relative">
          <strong>Fun Fact!</strong> Barry has been promoted every job he's worked.
          
          {/* Close button */}
          <button
            onClick={handleCloseAlert}
            className="absolute top-2 right-2 text-red-500 text-4xl font-bold  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);"
          >
            &times;
          </button>
        </div>
      )}
    </div>
		<div className="text-center">
			<h1 className="text-5xl font-bold mb-3 text-gray-100">Barry Weinstein</h1>
			<p className="text-xl font-light text-gray-200">Full Stack Developer | Application Architect</p>
			<p className="mt-3 text-sm text-gray-300">barryaweinstein@gmail.com.com | 9179133117 | https://www.linkedin.com/in/barry-weinstein-b671471b/</p>
		</div>


		<section className="my-10">
			<h2 className="text-3xl font-semibold text-white">About Me</h2>
			<p className="mt-3 text-gray-200 leading-relaxed">
				I am a skilled full-stack developer with 8+ years of experience in app development. Passionate about building user-friendly, responsive, and accessible applications, I bring knowledge of both front-end and back-end technologies.
			</p>
		</section>


		<section className="my-10">
			<h2 className="text-3xl font-semibold text-white">Skills</h2>
			<div className="grid grid-cols-2 gap-6 mt-5">
				<div>
					<h3 className="text-xl font-medium text-gray-100">Frontend</h3>
					<ul className="list-disc list-inside mt-2 text-gray-300">
						<li>HTML5, CSS3, TailwindCSS, JavaScript</li>
						<li>React, Vue.js</li>
						<li>Responsive Web Design</li>
					</ul>
				</div>
				<div>
					<h3 className="text-xl font-medium text-gray-100">Backend</h3>
					<ul className="list-disc list-inside mt-2 text-gray-300">
						<li>Node.js, Express.js</li>
						<li>Python, Django</li>
						<li>RESTful APIs, GraphQL</li>
					</ul>
				</div>
				<div>
					<h3 className="text-xl font-medium text-gray-100">Tools</h3>
					<ul className="list-disc list-inside mt-2 text-gray-300">
						<li>Git & GitHub</li>
						<li>Heroku, Kubernetes</li>
						<li>CI/CD, Jenkins</li>
					</ul>
				</div>
				<div>
					<h3 className="text-xl font-medium text-gray-100">Databases</h3>
					<ul className="list-disc list-inside mt-2 text-gray-300">
						<li>MySQL, PostgreSQL</li>
						<li>MongoDB</li>
						<li>Firebase</li>
					</ul>
				</div>
			</div>
		</section>


		<section className="my-10">
			<h2 className="text-3xl font-semibold text-white">Experience</h2>
			<div className="mt-5">
				<div className="mb-6">
					<h3 className="text-xl font-bold text-gray-100">Software Engineer and Consultant</h3>
					<p className="text-sm font-light text-gray-300">VolatilityMarkets - Jun 2015 - Dec 2024</p>
					<ul className="list-disc list-inside mt-2 text-gray-300">
						<li>Led the design, planning, and execution of software builds on behalf of institutional clients.</li>
						<li>Built bespoke financial tools for foreign exchange market professionals icluding State Street, MoneyCorp, Nomura, and others</li>
						<li>Released tools in the Ruby on Rails framework modelling and forecasting financial risks in the FX markets.</li>
						<li>Learn more about VolatilityMarkets with the Independent Research Forum</li>

					</ul>
				</div>
				<div className="mb-6">
					<h3 className="text-xl font-bold text-gray-100">FX Options Trader</h3>
					<p className="text-sm font-light text-gray-300">Credit Suisse - Jun 2014 - August 2015</p>
					<ul className="list-disc list-inside mt-2 text-gray-300">
						<li>Designed and implemented UI components for a variety of client websites.</li>
						<li>Worked closely with UX designers to improve website accessibility.</li>
						<li>Developed mobile-friendly layouts for optimal user experience.</li>
					</ul>
				</div>
				<div className="mb-6">
					<h3 className="text-xl font-bold text-gray-100">FX Options Trader</h3>
					<p className="text-sm font-light text-gray-300">BlueCrest Capital - Jun 2012 - August 2014</p>
					<ul className="list-disc list-inside mt-2 text-gray-300">
						<li>Designed and implemented UI components for a variety of client websites.</li>
						<li>Worked closely with UX designers to improve website accessibility.</li>
						<li>Developed mobile-friendly layouts for optimal user experience.</li>
					</ul>
				</div>
			</div>
		</section>

	
		<section className="my-10">
			<h2 className="text-3xl font-semibold text-white">Education</h2>
			<div className="mt-5">
				<h3 className="text-xl font-bold text-gray-100"> Professional Certificate in Coding (MERN STACK)</h3>
				<p className="text-sm font-light text-gray-300">MIT - Graduating in 2025</p>
			</div>
		</section>


		<footer className="text-center mt-10">
			<p className="text-sm font-light text-gray-300">&copy; 2025 Barry Weinstein | All Rights Reserved.</p>
		</footer>
	</div>

        </div>
    </div>

  )
}

export default Resume