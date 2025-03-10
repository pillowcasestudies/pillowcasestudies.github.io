import React from 'react';

const FootCampStoreReadMe = () => {

  return (
    <div className="text-black">
      <h2 className="text-2xl font-bold mb-4">FootCamp Store</h2>
      

      {/* Embedded Video */}
      <div className="relative w-full aspect-video mb-4">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/P1R4p4ILGMQ?si=JGAGVRsGlBJi4-3I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      {/* ReadMe Content */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Project Overview</h3>
        <p className="mt-2">
         The FootCamp Store provides the branded merchandise for FootCamp classes. From shoes, to socks, to toe spacers, and other accessories for foot strengthening are made available at the FootCamp Store. 
          <br>
          </br>
          <br>
          </br>
           The FootCamp Store has thousands of dollars in sales and continues to grow! 
        </p>

        <h3 className="text-xl font-semibold mt-4">Features</h3>
        <ul className="list-disc pl-5 mt-2">
          <li>FootCamp Web Storefront </li>
          <li>Buy and sell FootCamp Merchandise with the FootCamp Storefront. </li>
          <li>Minimalist design optimized for single item purchases.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Tech Stack</h3>
        <p className="mt-2">Bootstrap, Ruby on Rails, PayPal integration</p>
      </div>
    </div>
  )
}

export default FootCampStoreReadMe