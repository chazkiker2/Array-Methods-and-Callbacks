// import { fifaData } from './fifa';
const fifaObject = require('./fifa');
const fifaData = fifaObject.fifaData;
// console.log(fifaData);
// console.log('its working');



// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const wcFinal2014 = fifaData.filter( x => {
  if (x["Stage"] === "Final" && x["Year"] === 2014) {
    return x["Home Team Name"];
  }
});

/* 1A */
const homeTeamName = wcFinal2014[0]["Home Team Name"];
// console.log(homeTeamName);

const awayTeamName = wcFinal2014[0]["Away Team Name"];
// console.log(awayTeamName);

/* 1C */ 
const homeTeamGoals = wcFinal2014[0]["Home Team Goals"];
// console.log(homeTeamGoals);

/* 1D */
const awayTeamGoals = wcFinal2014[0]["Away Team Goals"];
// console.log(awayTeamGoals);

/* 1E */
// console.log(homeTeamName);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
  return data.filter(x => x["Stage"] === "Final");
}

// const getFinalsTest = getFinals(fifaData);
// console.log(getFinalsTest);
// const getFinalsTestLength = getFinalsTest.length;
// console.log(getFinalsTest);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals) {
  return getFinals(fifaData).map( x => {
    return x.Year;
  })
}
// const getYearsTest = getYears(getFinals);
// console.log(getYearsTest);

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinals) {
  const finals = getFinals(fifaData);
  const winnersObj = finals.map( final => {
    if (final["Home Team Goals"] > final["Away Team Goals"]) {
      return final["Home Team Name"];
    } else {
      return final["Away Team Name"];
    }
  });
  return winnersObj;
}

// const getWinnersTest = getWinners(getFinals);
// console.log(getWinnersTest);

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears) {
  const winners = getWinners(getFinals, fifaData);
  const years = getYears(getFinals, fifaData);
  const winByYear = [];
  years.forEach( (year, index) => {
    winByYear.push(`In ${year}, ${winners[index]} won the world cup!`);
  });
  return winByYear;
};

// console.log(getWinnersByYear(getWinners, getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
  // const reducer = (accumulator, currentValue, string) => accumulator + currentValue[`${string}`];
  const avgHomeGoals = (data.reduce( (accumulator, currentValue) => accumulator + currentValue["Home Team Goals"], 0))/data.length;
  // const avgHomeGoals = sumHomeGoals / data.length;
  const avgAwayGoals = (data.reduce( (accumulator, currentValue) => accumulator + currentValue["Away Team Goals"], 0))/data.length;
  return `Avg Home Team Goals per match: ${avgHomeGoals} — Avg Away Team Goals per Match: ${avgAwayGoals}`;

};

// console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
  const teamStats = data.filter(match => match["Home Team Initials"] === teamInitials || match["Away Team Initials"] === teamInitials);
  const teamWins = teamStats.filter(x => {
    let home;
    if (x["Home Team Initials"] === teamInitials) {
      home = true;
    } else {
      home = false;
    }
    if (home && x["Home Team Goals"] > x["Away Team Goals"]) {
      return true;
    } else if (!home && x["Away Team Goals"] > x["Home Team Goals"]) {
      return true;
    } else {
      return false;
    }
  });
  return teamWins.length;
};
// console.log(getCountryWins(fifaData, "FRA"));

// getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
