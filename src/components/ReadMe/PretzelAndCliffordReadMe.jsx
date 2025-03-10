import React from 'react';

const PretzelAndCliffordReadMe = () => {

  return (
    <div className="text-black">
      <h2 className="text-2xl font-bold mb-4">Pretzel and Clifford Store</h2>
      

      {/* Embedded Video */}
      <div className="relative w-full aspect-video mb-4">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/qd0hleh8VGo?si=l1MVGCvKyGSGR-bf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      {/* ReadMe Content */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Project Overview</h3>
        <p className="mt-2">
          Pretzel and Clifford are my two dachshunds! They are local celebrities in New York City, regularly appearing at the American Kennel Club Meet the Breeds and having been showcased on live television with PIX11 News.
          
          <br>
          </br>
          <br>
          </br>
           The Pretzel and Clifford Store is a Web Store for Pretzel and Clifford fans! Get the best merchandise for dachshund lovers at the Pretzel and Clifford store!
        </p>

        <h3 className="text-xl font-semibold mt-4">Features</h3>
        <ul className="list-disc pl-5 mt-2">
          <li>The Pretzel and Clifford Store </li>
          <li>Stripe Checkout</li>
          <li>Functioning Shopping Cart</li>
          <li className="text-red-800">NOTE: The Pretzel and Clifford Store is a SAMPLE app. It has not been launched please do NOT purchase anything! The FootCamp Web Store has been launched and is active to see a live example.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Tech Stack</h3>
        <p className="mt-2">Angular, Vite, Stripe Payments, Node </p>
      </div>
    </div>
  )
}

export default PretzelAndCliffordReadMe