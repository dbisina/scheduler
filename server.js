const express = require('express');
const bodyParser = require('body-parser'); // Example middleware for parsing request bodies

const app = express();
app.use(bodyParser.json()); // Parse incoming JSON data

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.post('/courses', (req, res) => {
  // Implement logic to receive and store course data from React app (e.g., using a database)
  console.log('Received course data:', req.body);
  res.send('Course added successfully!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
