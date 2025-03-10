import React, { useState, useEffect  } from 'react';
import axios from 'axios';

const Contact = () => {
  // Step 1: Set up state to hold the form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // To display status messages (success/error)

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/messages');
        console.log("Fetched Messages:", response); // Log full response
  
        // Check if data is valid JSON before setting state
        if (response && response.data && Array.isArray(response.data)) {
          setMessages(response.data);
        } else {
          console.error("Invalid JSON response:", response);
          setMessages([]);
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
  
    fetchMessages();
  }, []);

  // Step 2: Handle form input changes
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  // Step 3: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!name || !email || !message) {
      setStatus('All fields are required!');
      return;
    }

    try {
      // Send form data to the backend using axios
      const response = await axios.post('http://localhost:5000/api/contact', {
        name,
        email,
        message,
      });

      // If successful, reset the form and show success message
      setName('');
      setEmail('');
      setMessage('');
      setStatus('Message sent successfully!');

    } catch (error) {
      setStatus('Error sending message. Please try again later.');
      console.error(error);
    }
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - myemail@gmail.com</p>
        </div>
        
        {/* Name Input */}
        <input
          className='bg-[#ccd6f6]'
          type="text"
          placeholder='Name'
          value={name}
          onChange={handleNameChange}
          name='name'
        />
        
        {/* Email Input */}
        <input
          className='my-4 p-2 bg-[#ccd6f6]'
          type="email"
          placeholder='Email'
          value={email}
          onChange={handleEmailChange}
          name='email'
        />
        
        {/* Message Textarea */}
        <textarea
          className='bg-[#ccd6f6] p-2'
          name="message"
          rows="10"
          placeholder='Message'
          value={message}
          onChange={handleMessageChange}
        />
        
        {/* Status Message */}
        {status && <p className='text-white text-center'>{status}</p>}
        
        {/* Submit Button */}
        <button
          type="submit"
          className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'
        >
          Let's Collaborate
        </button>
      </form>


      

    </div>
  );
}

export default Contact;