// Import the Axios library for making HTTP requests
import axios from 'axios';

// API URL and headers for the RapidAPI service
const URL = 'https://football-betting-odds1.p.rapidapi.com/provider1/live/upcoming';
const headers = {
  'X-RapidAPI-Key': '34f853044bmsh87dfaf90f974567p1c1371jsn5d126ef19a7d',
  'X-RapidAPI-Host': 'football-betting-odds1.p.rapidapi.com'
};

// Controller function to get all odds for live and upcoming matches
export const getOdds = (req, res) => {
  // Request options for the Axios GET request
  const options = {
    method: 'GET',
    url: URL,
    headers
  };

  // Send the Axios request to fetch odds data from the RapidAPI service
  axios.request(options)
    .then((response) => {
      // Extract and send the odds data in the response as an array of objects
      let result = Object.keys(response.data).map((key) => response.data[key]);
      res.send(result);
    })
    .catch((error) => {
      // Log the error in case the request fails
      console.log(error);
    });
};

// Controller function to get odds for a specific team by team name
export const getByName = (req, res) => {
  // Request options for the Axios GET request
  const options = {
    method: 'GET',
    url: URL,
    headers
  };

  // Send the Axios request to fetch odds data from the RapidAPI service
  axios.request(options)
    .then((response) => {
      // Extract the odds data from the response
      let result = Object.keys(response.data).map((key) => response.data[key]);
      let odds;

      // Iterate through the odds data to find the odds for the specified team
      result.forEach((odd) => {
        if (odd.home === req.params.teamName || odd.away === req.params.teamName) {
          odds = odd;
        }
      });

      // Send the odds data for the specified team in the response
      res.send(odds);
    })
    .catch((error) => {
      // Log the error in case the request fails
      console.log(error);
    });
};
