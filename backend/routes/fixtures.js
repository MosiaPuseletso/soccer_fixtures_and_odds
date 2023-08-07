// Import the Express framework
import express from 'express';

// Import the controller functions for fixtures
import { getFixtures, getByName } from '../controllers/fixtures.js';

// Create an instance of the Express Router
const router = express.Router();

// Route: GET /fixtures
// Description: Fetches all fixtures
// Controller Function: getFixtures
router.get('/', getFixtures);

// Route: GET /fixtures/:teamName
// Description: Fetches fixtures for a specific team
// Controller Function: getByName
router.get('/:teamName', getByName);

// Export the router to be used in the main app
export default router;
