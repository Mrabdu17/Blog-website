const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes'); // Import the post routes

dotenv.config();
connectDB();

const app = express();

// CORS configuration (if needed)
const corsOptions = {
  origin: 'http://localhost:3000', // Allow only frontend to access the backend
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
};

// Middleware
app.use(cors(corsOptions)); // Correct placement
app.use(bodyParser.json());

// Routes
app.use('/api/posts', postRoutes); // Ensure this is correctly set

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
