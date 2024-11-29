const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const appName = process.env.APP_NAME
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML file on the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  console.log(`Request served by ${appName}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`${appName} is listening on port ${PORT}`);
});
