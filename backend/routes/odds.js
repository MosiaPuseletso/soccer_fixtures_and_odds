// Import the Express framework
import express from 'express';

// Import the controller functions for odds
import { getOdds, getByName } from '../controllers/odds.js';

// Create an instance of the Express Router
const router = express.Router();

// Route: GET /odds
// Description: Fetches all odds for matches
// Controller Function: getOdds
router.get('/', getOdds);

// Route: GET /odds/:teamName
// Description: Fetches odds for a specific team match
// Controller Function: getByName
router.get('/:teamName', getByName);

// Export the router to be used in the main app
export default router;
