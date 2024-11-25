const express = require('express');
const app = express();
const port = 3001;
// Serve static files the 'public' directory
app.use(express.static('public'));
app.listen(port, () => {
  console.log('Server is running at http://localhost:$(port)');
});
