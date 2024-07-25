const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables from .env file
const cors = require("cors");
const app = express();

const routes = require("./routes/todo.route"); // Import routes
const PORT = process.env.PORT || 4004; // Set the port from environment variable or default to 4004

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Parse incoming JSON requests

// Database connection
mongoose
  .connect(process.env.MONGO_URL, {}) // Connect to MongoDB using the URL from environment variables
  .then(() => {
    console.log("database connected"); // Log success message if connected
  })
  .catch((error) => {
    console.error("database is not connected", error); // Log error message if connection fails
  });

// Routes
app.use("/api", routes); // Use the routes defined in todo.route.js for /api endpoint

// Listen on the specified port
app.listen(PORT, () => console.log(`server is running on port: ${PORT}`)); // Start the server and listen on the specified port
