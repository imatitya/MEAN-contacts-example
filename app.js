// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

// Create DB connection
var db = require('./server/db-connect');
db.connect('mongodb://localhost:27017/');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set server port
const port = 3000
app.set('port', port);

// Get our API routes
const api = require('./server/api');

// Set our api routes
app.use('/api', api);

// Create http server
const server = http.createServer(app);

// Start listening to requests
server.listen(port, () => console.log(`Listening on http://localhost:${port}`));