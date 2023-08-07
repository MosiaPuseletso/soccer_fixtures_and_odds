// Module Imports
import express from 'express'; // Import the Express framework
import bodyParser from 'body-parser'; // Middleware for parsing incoming request bodies
import cors from 'cors'; // Middleware for enabling Cross-Origin Resource Sharing

import fixtureRoutes from './routes/fixtures.js'; // Import routes for fixtures
import oddsRoutes from './routes/odds.js'; // Import routes for odds

const PORT = process.env.PORT || 5000; // Define the port on which the server will run (default: 5000)
const app = express(); // Create an instance of the Express application

app.use(bodyParser.json({ limit: '30mb', extended: true })); // Use JSON body parser with size limit and extended options
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true })); // Use URL-encoded body parser with size limit and extended options
app.use(cors()); // Enable Cross-Origin Resource Sharing for all routes

app.use('/fixtures', fixtureRoutes); // Use the fixture routes when the path starts with '/fixtures'
app.use('/odds', oddsRoutes); // Use the odds routes when the path starts with '/odds'

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)); // Start the server and listen on the specified port
