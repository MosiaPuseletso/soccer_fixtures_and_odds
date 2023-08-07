# Soccer Fixtures and Odds

Soccer Fixtures and Odds is a web application that provides users with up-to-date information on the fixtures and odds of soccer matches happening today. The application focuses on displaying soccer sports events taking place on the current day, along with the corresponding odds provided by bookmakers.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

Before you begin, make sure you have the following installed:

- [ReactJS]
- [Node.js](https://nodejs.org) - version 18.7.0
- [npm](https://www.npmjs.com/) - version 8.15.0
- [postman](https://www.postman.com/downloads/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/MosiaPuseletso/soccer_fixtures_and_odds.git
```

2. Change directory:

Front end directory
```bash
cd soccer_fixtures_and_odds/frontend
```
Backend directory
```bash
cd soccer_fixtures_and_odds/backend
```

3. Install dependencies:

Run the following command in both directories
```bash
npm install
```

## Usage

Run the following command to start the frontend and backend of the application.

```bash
npm start
```

## API DOCUMENTATION
To access the postman collection for following project run the below command
```bash
cd postman
```

The API endpoints exist as follows:

- `GET http://localhost:5000/api/fixtures?date=2023-08-07`: Retrieve for 2023-08-07 match fixtures.
- `GET http://localhost:5000/api/odds`: Retrieve odds for a upcoming matches.
- `GET http://localhost:5000/api/fixtures/Liverpool?date=2023-08-07`: Retrieve for 2023-08-07 Liverpool's match fixture.
- `GET http://localhost:5000/api/odds/Liverpool`: Retrieve odds for Liverpool's upcoming match.

Now, let's create a Postman collection with documentation for testing the API:

## Postman Collection Documentation: Soccer Fixtures and Odds API

### Base URL

```
http://localhost:5000
```
### Endpoints

#### 1. Retrieve Today's Match Fixtures

- Endpoint: `/fixtures?date=2023-08-07`
- Method: `GET`
- Description: Retrieves fixtures for a specified date.

##### Response

- Status: 200 OK
- Content-Type: application/json

```json
[
  {
    "id": 1,
    "uuid": "7yasa43laq1nb2e6f8bfuvxed",
    "name": "World",
    "competitions": [
        {
            "id": 368,
            "uuid": "8x62utr2uti3i7kk14isbnip6",
            "name": "FIFA Women's World Cup",
            "format": "International cup",
            "displayByDefault": true,
            "matches": [
                {
                    "id": 3705274,
                    "uuid": "14a4359ma04rt4oen34z4nndg",
                    "rb_id": 1834633,
                    "round": {
                        "id": 55085,
                        "name": "Round of 16"
                    },
                    "date_time_utc": "2023-08-06 02:00:00",
                    "match_time": "02:00",
                    "status": "Played",
                    "fts_A": 2,
                    "fts_B": 0,
                    "hts_A": 1,
                    "hts_B": 0,
                    "team_A": {
                        "id": 4119,
                        "uuid": "9x7z0xiidyp39vy69huxf6kim",
                        "name": "Netherlands",
                        "tla_name": "NED",
                        "display_name": "Netherlands"
                    },
                    "team_B": {
                        "id": 7654,
                        "uuid": "eqvumupp4dh7tcsv7jxrzm2ra",
                        "name": "South Africa",
                        "tla_name": "RSA",
                        "display_name": "South Africa"
                    }
                },
                    // More matches .....
            ],
            "displayRound": true
        }
    ]
}
  // More fixtures...
]
```

#### 2. Retrieve Odds for Upcoming Matches

- Endpoint: `/api/odds`
- Method: `GET`
- Description: Retrieves odds for upcoming matches.

##### Response

- Status: 200 OK
- Content-Type: application/json

```json
{
        "mid": "1008195662195542",
        "home": "CSD Independiente del Valle",
        "away": "CS Deportivo Pereira",
        "country_leagues": "South America - Copa Libertadores",
        "leagues": "Copa Libertadores",
        "country": "South America",
        "score": "0-0",
        "home_score": 0,
        "away_score": 0,
        "periodID": "",
        "periodTXT": "",
        "periodTime": 1691416756,
        "startTime": 1691625600,
        "lastUpdateTime": 1691416633,
        "minutes": 0,
        "status": "1",
        "importancy": 156,
        "odds": {
            "1st-1": "1.85",
            "1st-0": "2.35",
            "1st-2": "6.50",
            "home": "1.37",
            "draw": "4.75",
            "away": "7.75",
            "double-chance-1-0": "1.08",
            "double-chance-0-2": "2.66",
            "double-chance-1-2": "1.18",
            "draw-refund-1": "1.11",
            "draw-refund-2": "6.00",
            "total-goal-0": "9.90",
            "total-goal-1": "4.28",
            "total-goal-2": "3.33",
            "total-goal-3": "3.51",
            "total-goal-4": "4.73",
            "total-goal-5": "7.65",
            "home-total-goal-0": "5.63",
            "home-total-goal-1": "3.06",
            "home-total-goal-2": "2.93",
            "home-total-goal-3+": "2.30",
            "away-total-goal-0": "1.64",
            "away-total-goal-1": "2.34",
            "away-total-goal-2": "6.08",
            "1st-total-goal-0": "2.66",
            "1st-total-goal-1": "2.25",
            "1st-total-goal-2": "3.51",
            "1st-total-goal-3+": "5.85",
            "home-1st-total-goal-0": "2.03",
            "home-1st-total-goal-1": "2.21",
            "home-1st-total-goal-2": "4.50",
            "home-1st-total-goal-3+": "9.90",
            "away-1st-total-goal-0": "1.28",
            "away-1st-total-goal-1": "3.42",
            "both-team-score-yes": "2.00",
            "both-team-score-no": "1.63",
            "1st-both-team-score-yes": "4.99",
            "1st-both-team-score-no": "1.13",
            "total-goal-0-1": "3.24",
            "total-goal-2-3": "1.80",
            "total-goal-4+": "2.61",
            "total-goal-0-2": "1.74",
            "total-goal-3-4": "2.16",
            "total-goal-5+": "4.73",
            "total-goal-0-3": "1.36",
            "total-goal-4-5": "3.24",
            "total-goal-6+": "9.45",
            "2nd-1": "1.65",
            "2nd-0": "2.80",
            "2nd-2": "6.50",
            "over-2-5": "1.75",
            "under-2-5": "1.93",
            "over-3-5": "2.90",
            "under-3-5": "1.36",
            "over-1-5": "1.25",
            "under-1-5": "3.60",
            "over-4-5": "5.25",
            "under-4-5": "1.13",
            "over-0-5": "1.04",
            "under-0-5": "11.00",
            "over-5-5": "10.50",
            "under-5-5": "1.04",
            "under-6-5": "1.00",
            "1st-over-1-5": "2.60",
            "1st-under-1-5": "1.43",
            "1st-over-0-5": "1.35",
            "1st-under-0-5": "2.95",
            "1st-over-2-5": "6.50",
            "1st-under-2-5": "1.09",
            "1st-under-3-5": "1.01",
            "2nd-over-1-5": "1.95",
            "2nd-under-1-5": "1.73",
            "2nd-over-0-5": "1.20",
            "2nd-under-0-5": "4.10",
            "2nd-over-2-5": "4.00",
            "2nd-under-2-5": "1.21",
            "home-over-1-5": "1.52",
            "home-under-1-5": "2.35",
            "home-over-2-5": "2.55",
            "home-under-2-5": "1.44",
            "home-over-0-5": "1.10",
            "home-under-0-5": "6.25",
            "home-over-3-5": "5.00",
            "home-under-3-5": "1.14",
            "away-over-0-5": "1.87",
            "away-under-0-5": "1.82",
            "away-over-1-5": "5.50",
            "away-under-1-5": "1.13",
            "away-under-2-5": "1.01",
            "1-hcap-1--1": "1.85",
            "1-hcap-0--1": "3.06",
            "1-hcap-2-+1": "2.66",
            "1-hcap-1--2": "3.24",
            "1-hcap-0--2": "3.60",
            "1-hcap-2-+2": "1.68",
            "1-hcap-1--3": "6.53",
            "1-hcap-0--3": "5.40",
            "1-hcap-2-+3": "1.25",
            "home-1st-over-0-5": "1.57",
            "home-1st-under-0-5": "2.25",
            "home-1st-over-1-5": "3.70",
            "home-1st-under-1-5": "1.24",
            "home-1st-over-2-5": "11.00",
            "home-1st-under-2-5": "1.04",
            "away-1st-over-0-5": "3.40",
            "away-1st-under-0-5": "1.28",
            "away-1st-under-1-5": "1.01"
        }
    }
    // More odds....
```

#### 3. Retrieve Today's Match Fixtures

- Endpoint: `/fixtures/Liverpool?date=2023-08-07`
- Method: `GET`
- Description: Retrieves Liverpool's fixture for a specified date.

##### Response

- Status: 200 OK
- Content-Type: application/json

```json
[
  {
    "id": 1,
    "uuid": "7yasa43laq1nb2e6f8bfuvxed",
    "name": "World",
    "competitions": [
        {
            "id": 368,
            "uuid": "8x62utr2uti3i7kk14isbnip6",
            "name": "FIFA Women's World Cup",
            "format": "International cup",
            "displayByDefault": true,
            "matches": [
                {
                    "id": 3705274,
                    "uuid": "14a4359ma04rt4oen34z4nndg",
                    "rb_id": 1834633,
                    "round": {
                        "id": 55085,
                        "name": "Round of 16"
                    },
                    "date_time_utc": "2023-08-06 02:00:00",
                    "match_time": "02:00",
                    "status": "Played",
                    "fts_A": 2,
                    "fts_B": 0,
                    "hts_A": 1,
                    "hts_B": 0,
                    "team_A": {
                        "id": 4119,
                        "uuid": "9x7z0xiidyp39vy69huxf6kim",
                        "name": "Liverpool",
                        "tla_name": "NED",
                        "display_name": "Netherlands"
                    },
                    "team_B": {
                        "id": 7654,
                        "uuid": "eqvumupp4dh7tcsv7jxrzm2ra",
                        "name": "South Africa",
                        "tla_name": "RSA",
                        "display_name": "South Africa"
                    }
                },
                    // More matches .....
            ],
            "displayRound": true
        }
    ]
}
]
```

#### 4. Retrieve Odds for Upcoming Matches

- Endpoint: `/api/odds/Liverpool`
- Method: `GET`
- Description: Retrieves odds for Liverpool's upcoming match.

##### Response

- Status: 200 OK
- Content-Type: application/json

```json
{
        "mid": "1008195662195542",
        "home": "Liverpool",
        "away": "CS Deportivo Pereira",
        "country_leagues": "South America - Copa Libertadores",
        "leagues": "Copa Libertadores",
        "country": "South America",
        "score": "0-0",
        "home_score": 0,
        "away_score": 0,
        "periodID": "",
        "periodTXT": "",
        "periodTime": 1691416756,
        "startTime": 1691625600,
        "lastUpdateTime": 1691416633,
        "minutes": 0,
        "status": "1",
        "importancy": 156,
        "odds": {
            "1st-1": "1.85",
            "1st-0": "2.35",
            "1st-2": "6.50",
            "home": "1.37",
            "draw": "4.75",
            "away": "7.75",
            "double-chance-1-0": "1.08",
            "double-chance-0-2": "2.66",
            "double-chance-1-2": "1.18",
            "draw-refund-1": "1.11",
            "draw-refund-2": "6.00",
            "total-goal-0": "9.90",
            "total-goal-1": "4.28",
            "total-goal-2": "3.33",
            "total-goal-3": "3.51",
            "total-goal-4": "4.73",
            "total-goal-5": "7.65",
            "home-total-goal-0": "5.63",
            "home-total-goal-1": "3.06",
            "home-total-goal-2": "2.93",
            "home-total-goal-3+": "2.30",
            "away-total-goal-0": "1.64",
            "away-total-goal-1": "2.34",
            "away-total-goal-2": "6.08",
            "1st-total-goal-0": "2.66",
            "1st-total-goal-1": "2.25",
            "1st-total-goal-2": "3.51",
            "1st-total-goal-3+": "5.85",
            "home-1st-total-goal-0": "2.03",
            "home-1st-total-goal-1": "2.21",
            "home-1st-total-goal-2": "4.50",
            "home-1st-total-goal-3+": "9.90",
            "away-1st-total-goal-0": "1.28",
            "away-1st-total-goal-1": "3.42",
            "both-team-score-yes": "2.00",
            "both-team-score-no": "1.63",
            "1st-both-team-score-yes": "4.99",
            "1st-both-team-score-no": "1.13",
            "total-goal-0-1": "3.24",
            "total-goal-2-3": "1.80",
            "total-goal-4+": "2.61",
            "total-goal-0-2": "1.74",
            "total-goal-3-4": "2.16",
            "total-goal-5+": "4.73",
            "total-goal-0-3": "1.36",
            "total-goal-4-5": "3.24",
            "total-goal-6+": "9.45",
            "2nd-1": "1.65",
            "2nd-0": "2.80",
            "2nd-2": "6.50",
            "over-2-5": "1.75",
            "under-2-5": "1.93",
            "over-3-5": "2.90",
            "under-3-5": "1.36",
            "over-1-5": "1.25",
            "under-1-5": "3.60",
            "over-4-5": "5.25",
            "under-4-5": "1.13",
            "over-0-5": "1.04",
            "under-0-5": "11.00",
            "over-5-5": "10.50",
            "under-5-5": "1.04",
            "under-6-5": "1.00",
            "1st-over-1-5": "2.60",
            "1st-under-1-5": "1.43",
            "1st-over-0-5": "1.35",
            "1st-under-0-5": "2.95",
            "1st-over-2-5": "6.50",
            "1st-under-2-5": "1.09",
            "1st-under-3-5": "1.01",
            "2nd-over-1-5": "1.95",
            "2nd-under-1-5": "1.73",
            "2nd-over-0-5": "1.20",
            "2nd-under-0-5": "4.10",
            "2nd-over-2-5": "4.00",
            "2nd-under-2-5": "1.21",
            "home-over-1-5": "1.52",
            "home-under-1-5": "2.35",
            "home-over-2-5": "2.55",
            "home-under-2-5": "1.44",
            "home-over-0-5": "1.10",
            "home-under-0-5": "6.25",
            "home-over-3-5": "5.00",
            "home-under-3-5": "1.14",
            "away-over-0-5": "1.87",
            "away-under-0-5": "1.82",
            "away-over-1-5": "5.50",
            "away-under-1-5": "1.13",
            "away-under-2-5": "1.01",
            "1-hcap-1--1": "1.85",
            "1-hcap-0--1": "3.06",
            "1-hcap-2-+1": "2.66",
            "1-hcap-1--2": "3.24",
            "1-hcap-0--2": "3.60",
            "1-hcap-2-+2": "1.68",
            "1-hcap-1--3": "6.53",
            "1-hcap-0--3": "5.40",
            "1-hcap-2-+3": "1.25",
            "home-1st-over-0-5": "1.57",
            "home-1st-under-0-5": "2.25",
            "home-1st-over-1-5": "3.70",
            "home-1st-under-1-5": "1.24",
            "home-1st-over-2-5": "11.00",
            "home-1st-under-2-5": "1.04",
            "away-1st-over-0-5": "3.40",
            "away-1st-under-0-5": "1.28",
            "away-1st-under-1-5": "1.01"
        }
    }
    // More odds....
```

### Errors

- Status: 404 Not Found
- Status: 500 Internal Server Error


## Built With

- [Node.js](https://nodejs.org) - Runtime environment
- [React.js](https://reactjs.org/) - Frontend library
- [Express.js](https://expressjs.com/) - Backend framework

## Contributing

Contributions are welcome! If you find any issues or want to enhance the project, please follow these steps:

1. Fork the repository.
2. Create a new branch with a descriptive name (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -m "Add some feature"`).
4. Push the changes to your branch (`git push origin feature/your-feature-name`).
5. Create a pull request.

## Contact

- Puseletso Mosia - [mosiapuseletso@gmail.com]