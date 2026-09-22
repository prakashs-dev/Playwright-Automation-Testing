import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/";

const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("MongoDB connected successfully");

    return client.db("trainingDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
}

async function closeDB() {
  try {
    await client.close();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Error closing MongoDB:", error);
  }
}

module.exports = {
  connectDB,
  closeDB,
};
