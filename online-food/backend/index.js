const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const cors = require('cors');

app.use(cors());

// Endpoint to retrieve data
app.get('/api/data', (req, res) => {
  // Connection URL
  const url = "mongodb+srv://harsch19:J97jaLlHZwwYwsD0@cluster0.hegrt5u.mongodb.net/?retryWrites=true&w=majority";

  // Connect to the MongoDB Atlas cluster
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
      const db = client.db('db1');
      const collection = db.collection('starters');

      // Query the collection and retrieve the data
      collection.find({}).toArray()
        .then(data => {
          res.json(data); // Send the data as the API response
        })
        .catch(error => {
          console.error('Error retrieving data from the database', error);
          res.status(500).json({ error: 'Failed to retrieve data from the database' });
        })
        .finally(() => {
          // Close the MongoDB Atlas connection
          client.close();
        });
    })
    .catch(error => {
      console.error('Error connecting to the database', error);
      res.status(500).json({ error: 'Failed to connect to the database' });
    });
});

// Start the server
const port = 3001; // Port number for the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
