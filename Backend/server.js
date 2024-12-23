const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT;


app.use(cors());
app.use(express.json());


const MongoDB = process.env.MongoUrl;

let dbClient;


MongoClient.connect(MongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    dbClient = client;
    console.log('MongoDB Connected');
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
  });


app.get('/api/jobs', async (req, res) => {
  try {
    const { location, page = 1, limit = 10 } = req.query;

    
    const db = dbClient.db('Mployee_Json');  
    const jobsCollection = db.collection('Json_data'); 

   
    let query = {};
    if (location) {
      query.location = { $regex: location, $options: 'i' };
    }


    const totalJobs = await jobsCollection.countDocuments(query);


    const jobs = await jobsCollection
      .find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .toArray();


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


app.listen(port, () => {
  console.log(`Backend server running at ${port}`);
});
