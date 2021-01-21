function calculateScore(games) {
  let abScore = 0;
  let benScore = 0;
  for (let i = 0; i < games.length; i++) {
    for (let j = 0; j < games[i].length; j++) {
      if (games[i][0] === "R" && games[i][1] === "S")
        if (games[i][0] === "P" && games[i][1] === "R")
          if (games[i][0] === "S" && games[i][1] === "P") {
            abScore++;
          }
      if (games[i][0] === "R" && games[i][1] === "P")
        if (games[i][0] === "P" && games[i][1] === "S")
          if (games[i][0] === "S" && games[i][1] === "R") {
            benScore++;
          }
      if (games[i][0] === "R" && games[i][1] === "R")
        if (games[i][0] === "P" && games[i][1] === "P")
          if (games[i][0] === "S" && games[i][1] === "S") {
            abScore++;
            benScore++;
          }
    }
  }
  if (abScore > benScore) {
    return "Abigail";
  }
  if (benScore > abScore) {
    return "Benson";
  }
  if (abScore === benScore) {
    return "Tie";
  }
}
/* input : an array of arrays containing strings  output : string (return result)
	for loop to acces first array, second for loop to access each array inside
	containers for abigails and bensons scores; compare their results (index 0 and 1)
	update the value of their score depending on who wins, if strings are equal, increment both
  after looping through each array and updating scores, compare the score variables and 
  return the name of the winner
	R > S; R < P; S > P */
