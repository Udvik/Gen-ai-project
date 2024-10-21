const express = require('express');
const cors = require('cors');
require('dotenv').config();

const chatRoutes = require('./routes/chatRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// Use the chat routes
app.use('/api/chat', chatRoutes);

// Default route for root (/)
app.get('/', (req, res) => {
  res.send('Welcome to Multibot Insights API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
