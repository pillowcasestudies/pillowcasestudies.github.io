import React from 'react';

const FootCampReadMe = () => {
  return (
    <div className="text-black">
      <h2 className="text-2xl font-bold mb-4">FootCamp</h2>
      

      {/* Embedded Video */}
      <div className="relative w-full aspect-video mb-4">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/P1R4p4ILGMQ?si=JGAGVRsGlBJi4-3I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      {/* ReadMe Content */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Project Overview</h3>
        <p className="mt-2">
          FootCamp is New York's premier barefoot walking studio. FootCamp provides movement coaching for people recovering from orthopedic injury and falls. FootCamp is open to all ages and abilities although we are particularly welcoming of seniors and their families looking to regain stability and prevent stability related accidents.
          <br>
          </br>
          <br>
          </br>
           FootCamp is run on a Volunteer basis and is rated 5 stars on ClassPass. ClassPass lists FootCamp as a "Best Outdoor Studio" in Manhattan.
        </p>

        <h3 className="text-xl font-semibold mt-4">Features</h3>
        <ul className="list-disc pl-5 mt-2">
          <li>FootCamp Web Site </li>
          <li>Class Sign Up, Reminder, Scheduling, Class CRUD infrastructure (DEPRECATED NOW HANDLED ON CLASSPASS)</li>
          <li>FootCamp Blog</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Tech Stack</h3>
        <p className="mt-2">Bootstrap, Ruby on Rails </p>
      </div>
    </div>
  );
};

export default FootCampReadMe;
