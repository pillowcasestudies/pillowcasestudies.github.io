import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { MongoClient, ServerApiVersion } from "mongodb";
import cors from 'cors';

const uri = "mongodb+srv://pillowcasestudies:q8uehHZTltPIicYm@samplecluster.jb8w0.mongodb.net/?retryWrites=true&w=majority&appName=samplecluster";

const app = express();
app.use(cors());
app.use(express.json());  // Middleware for parsing JSON request bodies
app.use(cors());
const port = process.env.PORT || 5000; 

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all routes by serving the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// MongoDB client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Define the /contact POST route
app.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  try {
    // Connect to MongoDB
    await client.connect();
    const db = client.db("samplecluster"); // Your database name
    const collection = db.collection('theaters'); // Your collection name

    // Create a new message object to insert
    const newMessage = { name, email, message, date: new Date() };

 

    // Insert the new message into the MongoDB collection
    await collection.insertOne(newMessage);

    res.status(200).json({ message: 'Message received and saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving message to database' });
  } finally {
    await client.close(); // Close the MongoDB connection
  }
});

// Ensure the client connects to MongoDB when the server starts
async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB connection failed", error);
  }
}

run().catch(console.dir);


console.log("PORT:", 5000); 
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});