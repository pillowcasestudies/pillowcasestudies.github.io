import React from 'react';

const VolatilityFXReadMe = () => {
  return (
    <div className="text-black p-4  overflow-y-scroll">
      <h2 className="text-2xl font-bold mb-4">VolatilityFX</h2>

      {/* Embedded Video */}
      <div className="relative w-full aspect-video mb-4">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/zW6RZQtVvSA?si=itBndGwWhqXnbXWH"
          title="VolatilityFX Demo"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* ReadMe Content */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Project Overview</h3>
        <p className="mt-2">
          VolatilityFX provides trade ideas and Risk Management analytics for Forex traders, brokers, and market participants. 
          It has been fully implemented at major money center banks and brokerages.
        </p>

        <h3 className="text-xl font-semibold mt-4">Features</h3>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Trade Idea Generation</li>
          <li>Robust financial mathematics & options (stochastic) calculus library</li>
          <li>Multiple user interfaces with data visualizations and 3D modeling</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Tech Stack</h3>
        <p className="mt-2">Ruby on Rails, Bootstrap, CSS, Ruby, PostgreSQL, SQLite, MySQL, BackgroundJob, and ActionMailer</p>
      </div>

    </div>
  );
};

export default VolatilityFXReadMe;
