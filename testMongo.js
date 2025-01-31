import { MongoClient } from "mongodb";

const uri = "mongodb+srv://pillowcasestudies:q8uehHZTltPIicYm@samplecluster.jb8w0.mongodb.net/?retryWrites=true&w=majority&appName=samplecluster/";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB Atlas");
  } finally {
    await client.close();
  }
}

run().catch(console.error);