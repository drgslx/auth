// Require the necessary modules
const bodyParser = require('body-parser'); // Parses incoming request bodies in a middleware before your handlers, available under the req.body property.
const express = require('express'); // Fast, unopinionated, minimalist web framework for Node.js

const eventRoutes = require('./routes/events'); // Import the routes for handling events
const authRoutes = require('./routes/auth'); // Import the routes for handling authentication

const app = express(); // Create an instance of the Express application

// Configure the application to parse incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(bodyParser.json());

// Configure the application to allow cross-origin requests by setting the appropriate headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});

// Use the routes for handling authentication
app.use(authRoutes);

// Use the routes for handling events
app.use('/events', eventRoutes);

// Handle any errors that occur during the request processing
app.use((error, req, res, next) => {
  const status = error.status || 500; // Get the status code from the error or use 500 as default
  const message = error.message || 'Something went wrong.'; // Get the error message from the error or use a default message
  res.status(status).json({ message: message }); // Send the appropriate response with the status code and error message
});

// Start the server and listen on port 8080
app.listen(8080);

