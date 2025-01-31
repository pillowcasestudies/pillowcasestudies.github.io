import React from 'react'

const Resume = () => {
  return (
    <div name='resume' className='w-full h-full bg-[#ffffff] text-gray-300'>


<div className="bg-gradient-to-br from-[#0a192f] to-indigo-600 min-h-screen text-white">


	<div className="max-w-4xl mx-auto my-10 p-8 bg-white bg-opacity-10 rounded-xl shadow-md backdrop-blur-lg">


		<div className="text-center">
			<h1 className="text-5xl font-bold mb-3 text-gray-100">John Doe</h1>
			<p className="text-xl font-light text-gray-200">Full Stack Developer | UI/UX Enthusiast</p>
			<p className="mt-3 text-sm text-gray-300">john.doe@example.com | (123) 456-7890 | linkedin.com/in/johndoe</p>
		</div>


		<section className="my-10">
			<h2 className="text-3xl font-semibold text-white">About Me</h2>
			<p className="mt-3 text-gray-200 leading-relaxed">
				I am a highly skilled full-stack developer with 5+ years of experience in web and mobile app development. Passionate about building user-friendly, responsive, and accessible applications, I bring strong expertise in both front-end and back-end technologies.
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
						<li>Docker, Kubernetes</li>
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
					<h3 className="text-xl font-bold text-gray-100">Senior Full Stack Developer</h3>
					<p className="text-sm font-light text-gray-300">XYZ Tech Company - Jan 2020 - Present</p>
					<ul className="list-disc list-inside mt-2 text-gray-300">
						<li>Led the development of a responsive e-commerce platform.</li>
						<li>Built RESTful APIs for mobile applications and third-party integrations.</li>
						<li>Improved application performance by 30% through code optimization and database indexing.</li>
					</ul>
				</div>
				<div className="mb-6">
					<h3 className="text-xl font-bold text-gray-100">Frontend Developer</h3>
					<p className="text-sm font-light text-gray-300">ABC Web Solutions - Jun 2017 - Dec 2019</p>
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
				<h3 className="text-xl font-bold text-gray-100">Bachelor of Science in Computer Science</h3>
				<p className="text-sm font-light text-gray-300">University of Technology - Graduated in 2017</p>
			</div>
		</section>


		<footer className="text-center mt-10">
			<p className="text-sm font-light text-gray-300">&copy; 2024 John Doe | All Rights Reserved.</p>
		</footer>
	</div>

        </div>
    </div>

  )
}

export default Resume