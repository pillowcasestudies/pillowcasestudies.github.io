import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';

const GradientButton = ({ handleClick }) => {
  const [gradient, setGradient] = useState(generateRandomGradient());

  useEffect(() => {
    const interval = setInterval(() => {
      setGradient(generateRandomGradient());
    }, 2000); // Change the gradient every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  function generateRandomGradient() {
    const randomColor1 = `rgb(${randomInt(0, 150)}, ${randomInt(0, 150)}, ${randomInt(0, 150)})`;
    const randomColor2 = `rgb(${randomInt(0, 150)}, ${randomInt(0, 150)}, ${randomInt(0, 150)})`;

    return {
      backgroundImage: `linear-gradient(to right, ${randomColor1}, ${randomColor2})`,
      transition: 'background-image 2s ease-in-out', // Smooth transition for background-image
    };
  }

  // Helper function to generate random numbers between a min and max value
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="w-full flex justify-center items-center transform z-10">
      <Link onClick={handleClick} to="work" smooth={true} duration={500}>
        <button
          style={gradient} // Apply the gradient as an inline style
          className="group flex items-center justify-center border-2 border-1px text-white px-8 py-4 my-2 rounded-lg transition-all duration-300 ease-in-out shadow-xl hover:scale-105 hover:shadow-2xl"
        >
          <span className="text-xl font-bold mr-4">View Work</span>
          <div className="transform group-hover:rotate-90 transition-all duration-300 ease-in-out text-3xl">
            <HiArrowNarrowRight />
          </div>
        </button>
      </Link>
    </div>
  );
};

export default GradientButton;
