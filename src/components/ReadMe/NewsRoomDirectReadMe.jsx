import React from 'react';

const NewsRoomDirectReadMe = () => {

  return (
    <div className="text-black">
      <h2 className="text-2xl font-bold mb-4">News Room Direct</h2>
      

      {/* Embedded Video */}
      <div className="relative w-full aspect-video mb-4">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/EIMluUB3zS8?si=kshS7YQWaeSaE3aw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      {/* ReadMe Content */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Project Overview</h3>
        <p className="mt-2">
          Now deprecated, the News Room Direct app worked with Peter Shankman's HARO (Help a Reporter Out) to automate public relations outreach. HARO, which closed in 2024, was a large list serve of reporters who were asking for quotes from contributors for comments for their articles. News Room Direct automatically scanned these reporter's queries and sent an alert and email and suggested an AI generated response to maximize the likelihood of getting included in the article with a back link. 
          
          <br>
          </br>
          <br>
          </br>
        News Room Direct was deprecated with the closure of HARO.
        </p>

        <h3 className="text-xl font-semibold mt-4">Features</h3>
        <ul className="list-disc pl-5 mt-2">
          <li>Smart email processing, and keyword identification</li>
          <li>System and text alerts using twilio and ActionMailer</li>
          <li>Successfully got dozens of backlinks and interviews for my various businesses.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Tech Stack</h3>
        <p className="mt-2">Ruby on Rails, Postgresql, Heroku, GoDaddy </p>
      </div>
    </div>
  )
}

export default NewsRoomDirectReadMe