import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { MongoClient, ServerApiVersion } from "mongodb";
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'dist')));

// MongoDB Connection Setup
const uri = "mongodb+srv://pillowcasestudies:q8uehHZTltPIicYm@samplecluster.jb8w0.mongodb.net/?retryWrites=true&w=majority&appName=samplecluster";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let collection;

async function connectDB() {
  try {
    await client.connect();
    const db = client.db('samplecluster'); // Replace with your DB name
    collection = db.collection('theaters'); // Replace with your collection name
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

connectDB();

// GET route to fetch messages
app.get('/api/messages', async (req, res) => {
  try {
    if (!collection) return res.status(500).json({ message: "Database not connected" });

    const messages = await collection.find({}).toArray();
    console.log('Sending messages:', messages);
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ message: 'Error fetching messages' });
  }
});

// POST route to save messages
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  try {
    if (!collection) return res.status(500).json({ message: "Database not connected" });

    const newMessage = { name, email, message, date: new Date() };
    await collection.insertOne(newMessage);

    res.status(200).json({ message: 'Message received and saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving message to database' });
  }
});

// Graceful shutdown
process.on('SIGINT', async () => {
  await client.close();
  console.log("MongoDB connection closed");
  process.exit(0);
});

// Serve React frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
