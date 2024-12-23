const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const MongoDB = process.env.MongoUrl;

let dbClient;

// Connect to MongoDB
MongoClient.connect(MongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    dbClient = client;
    console.log('MongoDB Connected');
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
  });

// Routes
app.get('/api/jobs', async (req, res) => {
  try {
    const { location, page = 1, limit = 12 } = req.query;

    // Fetch jobs from MongoDB collection
    const db = dbClient.db('Mployee_Json');  // Replace with your database name
    const jobsCollection = db.collection('Json_data');  // Replace with your collection name

    // Prepare query for filtering jobs by location if provided
    let query = {};
    if (location) {
      query.location = { $regex: location, $options: 'i' }; // Case-insensitive regex search
    }

    // Fetch total count of filtered jobs
    const totalJobs = await jobsCollection.countDocuments(query);

    // Fetch jobs for the current page with limit
    const jobs = await jobsCollection
      .find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .toArray();

    // Return paginated jobs
    res.json({
      total: totalJobs,
      page: parseInt(page),
      limit: parseInt(limit),
      jobs: jobs,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Backend server running at ${port}`);
});
