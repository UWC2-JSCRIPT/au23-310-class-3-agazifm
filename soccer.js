(function(){ //IIFE
  const RESULT_VALUES = {
    w: 3,
    d: 1,
    l: 0
  };

/**
 * Takes a single result string and (one of 'w', 'l', or 'd') 
 * and returns the point value
 * 
 * @param {string} result 
 * @returns {number} point value
 */

  const getPointsFromResult = function getPointsFromResult(result) {
    return RESULT_VALUES[result];
  }

// Create getTotalPoints function which accepts a string of results
// including wins, draws, and losses i.e. 'wwdlw'
// Returns total number of points won

 //Calculate total points from a results string

 function getTotalPoints (results){
  const resultArray = results.split('');//sp;its the string
  let totalPoints = 0;//initialize totalPoints

  //calculates points for each result and adds to total points
  resultArray.forEach(result => {
    totalPoints += getPointsFromResult(result);

  });

  return totalPoints;
}

// Check getTotalPoints
console.log(getTotalPoints('wwdl')); // should equal 7

// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"

function orderTeams(...teams){
  teams.forEach(team =>{
    const points = getTotalPoints(team.results); //calculates team points
    console.log( `${team.name}: ${points}`);//logs team name and totalPoints
  })
}

// Check orderTeams
orderTeams(
  { name: 'Sounders', results: 'wwdl' },
  { name: 'Galaxy', results: 'wlld' }
);

})(); //to close IIFE
// should log the following to the console:
// Sounders: 7
// Galaxy: 4