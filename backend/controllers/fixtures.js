// Import the Axios library for making HTTP requests
import axios from 'axios';

// API URL and headers for the RapidAPI service
const URL = 'https://soccerway-feed.p.rapidapi.com/v1/matches/list';
const headers = {
  'X-RapidAPI-Key': '34f853044bmsh87dfaf90f974567p1c1371jsn5d126ef19a7d',
  'X-RapidAPI-Host': 'soccerway-feed.p.rapidapi.com'
};

// Controller function to get fixtures for a specific date
export const getFixtures = (req, res) => {
  // Request options for the Axios GET request
  const options = {
    method: 'GET',
    url: URL,
    params: {
      date: req.query.date, // Date obtained from the request query string
      add_live: 'false' // Additional parameter for getting non-live matches only
    },
    headers
  };

  // Send the Axios request to fetch fixtures data from the RapidAPI service
  axios.request(options)
    .then((response) => {
      // Send the fixtures data in the response
      res.send(response.data.data);
    })
    .catch((error) => {
      // Log the error in case the request fails
      console.log(error);
    });
};

// Controller function to get fixtures for a specific team by team name
export const getByName = (req, res) => {
  // Request options for the Axios GET request
  const options = {
    method: 'GET',
    url: URL,
    params: {
      date: req.query.date, // Date obtained from the request query string
      add_live: 'false' // Additional parameter for getting non-live matches only
    },
    headers
  };

  // Send the Axios request to fetch fixtures data from the RapidAPI service
  axios.request(options)
    .then((response) => {
      let matchInfo; // Variable to hold the match info for the specified team

      // Iterate through the fixtures data to find the match for the specified team
      response.data.data.forEach((competition) => {
        competition.competitions.forEach((match) => {
          match.matches.forEach((matches) => {
            if (matches.team_A.name === req.params.teamName || matches.team_B.name === req.params.teamName) {
              matchInfo = matches;
            }
          });
        });
      });

      // Send the match info for the specified team in the response
      res.send(matchInfo);
    })
    .catch((error) => {
      // Log the error in case the request fails
      console.log(error);
    });
};
