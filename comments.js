// Create web server and listen on port 8000
// 1) Import express module
// 2) Create an express application
// 3) Create a route for GET /comments
// 4) Send a response with the comments array
// 5) Listen on port 8000

const express = require('express');
const app = express();

const comments = [
  { username: 'ali', comment: 'first comment' },
  { username: 'veli', comment: 'second comment' },
  { username: 'deli', comment: 'third comment' }
];

app.get('/comments', function(req, res) {
  res.send(comments);
});

app.listen(8000);
console.log('Server is running on http://localhost:8000');
