import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // State variables to hold fixtures and odds data
  const [fixtures, setFixtures] = useState([]);
  const [odds, setOdds] = useState([]);

  useEffect(() => {
    // Fetch fixtures for today's date from the backend API
    let todayDate = new Date();
    axios.get('http://localhost:5000/fixtures?date=' + todayDate.toISOString().split('T')[0])
      .then((response) => {
        // Update the fixtures state with the fetched data
        setFixtures(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    // Fetch odds for all matches from the backend API
    axios.get('http://localhost:5000/odds')
      .then((response) => {
        // Update the odds state with the fetched data
        setOdds(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []); // The useEffect hook will run only once on component mount

  return (
    <div className="container">
      {/* Loop through each fixture, competition, and match to render the content */}
      {fixtures.map(fixture => {
        return (
          fixture.competitions.map((competition) => {
            return (
              competition.matches.map((match) => {
                // Find the match odds based on team names (home and away)
                let matchOdds = odds.find(x => x.home === match.team_A.name || x.away === match.team_B.name);
                return (
                  <div key={match.id} className="match">
                    <div className="match-header">
                      <div className="match-status">{match.status}</div>
                      <div className="match-tournament">{competition.name}</div>
                      <div className="match-actions">
                        <button className="btn-icon"><i className="material-icons-outlined">{match.round.name}</i></button>
                      </div>
                    </div>
                    <div className="match-content">
                      <div className="column">
                        <div className="team team--home">
                          <h2 className="team-name">{match.team_A.name}</h2>
                        </div>
                      </div>
                      <div className="column">
                        <div className="match-details">
                          <div className="match-date">
                            {match.date_time_utc}
                          </div>
                          <div className="match-bet-options">
                            <button className="match-bet-option">{matchOdds && matchOdds.odds.home || 'N/A'}</button>
                            <button className="match-bet-option">{matchOdds && matchOdds.odds.draw || 'N/A'}</button>
                            <button className="match-bet-option">{matchOdds && matchOdds.odds.away || 'N/A'}</button>
                          </div>
                        </div>
                      </div>

                      <div className="column">
                        <div className="team team--away">
                          <h2 className="team-name">{match.team_B.name}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            )
          })
        )
      })}
    </div>
  );
}

export default App;
