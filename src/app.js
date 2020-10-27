// //Progression 1 - create a Manager array and return it
// let managerName = "Alex Ferguson";
// let managerAge = 78;
// let currentTeam = "Manchester FC";
// let trophiesWon = 27;

// function createManager(managerName, managerAge, currentTeam, trophiesWon) {
//   var manager = [];
//   manager = [managerName, managerAge, currentTeam, trophiesWon];
//   return manager;
// }

// //Write your function here

// // Don't edit the following code
// try {
//   var manager = createManager(
//     managerName,
//     managerAge,
//     currentTeam,
//     trophiesWon
//   );

// } catch (e) {
//   // do nothing - expected error
// }

// //Progression 2 - create a formation object and return it
// var formation = [4, 4, 3];

// //write your function here
// function createFormation([defender, midfield, forward]) {
//   const form = {
//     "defender": defender,
//     "midfield": midfield,
//     "forward": forward
//   };
//   return form;
// }
// // Dont edit the following code

// try {
//   var formationObject = createFormation(formation);
// } catch (e) {
//   //do nothing
// }

// //Progression 3 - Filter players that debuted in ___ year
// function filterByDebut(year) {
//   const player = [{
//     name: name,
//     age: age,
//     debut: debut,
//     team: team,
//     position: position,
//     country: country,
//     awards: [{
//       name: name,
//       year: year
//     }]
//   }]
//   if (player.debut == 2005) {
//     return player;
//   }

// }

// //Progression 4 - Filter players that play at the position _______

// //Progression 5 - Filter players that have won ______ award

// //Progression 6 - Filter players that won ______ award ____ times

// //Progression 7 - Filter players that won ______ award and belong to ______ country

// //Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

// //Progression 9 - Sort players in descending order of their age

// //Progression 10 - Sort players beloging to _____ team in descending order of awards won

// //Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

// //Challenge 2 - Sort players that are older than _____ years in alphabetical order
// //Sort the awards won by them in reverse chronological order

//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  var manager = [managerName, managerAge, currentTeam, trophiesWon];
  return manager;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

// write your function here

function createFormation(formation) {
  var arr = [];
  if (formation.length == 0) return null;
  else if (formation.length !== 3) return undefined;
  else {
    arr = [
      { defender: formation[0] },
      { midfield: formation[1] },
      { forward: formation[2] },
    ];
  }
  return arr;
}

// function createFormation(formation) {
//   var arr = [];
//   for (let i = 0; i < players.length; i++) {
//     for (let j = 0; j < formation.length; j++) {
//       if (players[i].position == formation[j]) {
//         arr.push(players[i]);
//       }
//     }
//   }
//   return arr;
// }

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  var arr = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].debut == year) {
      arr.push(players[i]);
    }
  }
  return arr;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  var arr = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].position == position) {
      arr.push(players[i]);
    }
  }
  return arr;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  var arr = [];
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName) {
        arr.push(players[i]);
      }
    }
  }
  return arr;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  var arr = [];
  for (let i = 0; i < players.length; i++) {
    var count = 0;
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName) {
        count++;
      }
    }
    if (count == noOfTimes) {
      arr.push(players[i]);
    }
  }
  return arr;
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  var arr = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].country == country) {
      for (let j = 0; j < players[i].awards.length; j++) {
        if (players[i].awards[j].name == awardName) {
          arr.push(players[i]);
        }
      }
    }
  }
  return arr;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var arr = [];
  for (let i = 0; i < players.length; i++) {
    var count = 0;
    if (players[i].team == team && players[i].age == age) {
      for (let j = 0; j < players[i].awards.length; j++) {
        count++;
      }
    }
    if (count >= noOfAwards) {
      arr.push(players[i]);
    }
  }
  return arr;
}
//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
