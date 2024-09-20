const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// Serve static files (your HTML, CSS, and JS)
app.use(express.static(path.join(__dirname, 'public')));

// Enable CORS for the API calls to work
app.use(cors());

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
