const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const libraryRoutes = require('./Routes/libraryRoutes');
const cors = require('cors');



dotenv.config();

// Initialize app
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

app.use(cors())



// Routes
app.use('/api/library', libraryRoutes);

// Start server
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


