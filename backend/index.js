const express = require('express');
const config = require('config');
const cors = require('cors'); // Import the cors middleware

const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware for parsing JSON request bodies
app.use(express.json());

// Initialize routers
require('./startup/initRouters')(app);

const server_port = config.get('server_port');
app.listen(server_port, () => console.log(`Server is running on port ${server_port}`));
module.exports = app;