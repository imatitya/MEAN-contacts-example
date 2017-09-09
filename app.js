// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set server port
const port = 3000
app.set('port', port);

// Create http server
const server = http.createServer(app);

// Start listening to requests
server.listen(port, () => console.log(`Listening on http://localhost:${port}`));