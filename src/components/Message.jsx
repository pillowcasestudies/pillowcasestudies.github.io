import React, { useState, useEffect  } from 'react';
import axios from 'axios';

const Message = () => {
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



  return (
    <div name='message' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
   

      {loading && <p>Loading messages...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading && !error && messages.length === 0 && <p>No messages found.</p>}

      <ul>
        {messages.map((message) => (
          <li className="text-white" key={message._id}>
            <strong>{message.name}</strong> ({message.email}): {message.message}
          </li>
        ))}
      </ul>
    </div>
  );

}

export default Message;