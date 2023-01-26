'use strict';

// The first question is a prompt for the user's name, stored in a userName variable.

let userName = prompt('What\'s your name, please?');
console.log(userName);

// Question 2-6 are functionally identical, prompting the user with a yes/no question, converting it to lower case, storing the response in a userBackgroundX variable, 
let userBackgroundTech = prompt('Let\'s get to know each other better.  Do you have a background in tech?', 'Yes/No').toLowerCase();
console.log(userBackgroundTech);
if (userBackgroundTech === 'yes') {
  alert('Excellent! Me too, at least adjacently. I came from healthcare IT.');
} else  alert('That\'s OK, we can learn together.');

let userBackgroundMilitary = prompt('Have you served in the military?', 'Yes/No').toLowerCase();
console.log(userBackgroundMilitary);
if (userBackgroundMilitary === 'yes') {
  alert('Very cool! I was in the Marine Corps before I was in IT.');
} else alert('Love it. I got lost on the way to college and wound up in the Marines.');

let userCollege = prompt('And did you go to college or a trade school?', 'Yes/No').toLowerCase();
console.log(userCollege);
if (userCollege === 'yes') {
  alert('I hope it was valuable for you! I studied finance and economics at Western Washington University.');
} else alert('I did, but barely. I often struggled in college.');

let userLiveSeattle = prompt('Do you currently live in Seattle?', 'Yes/No').toLowerCase();
console.log(userLiveSeattle);
if (userLiveSeattle === 'yes') {
  alert('I hope it agrees with you!  I grew up in Washington and moved to Seattle after I finished college.');
} else alert('Then you\'re probably saving some money!.');

let userWorkSeattle = prompt('If you worked in tech, would you like to work in the Seattle area?', 'Yes/No').toLowerCase();
console.log(userWorkSeattle);
if (userWorkSeattle === 'yes') {
  alert(`It can be a fun place to work, ${userName}! I've worked downtown for several years.`);
} else alert(`Truthfully ${userName}, I would like to try living somewhere else myself.`);


// Age Guessing Game logic
const kyleAge = 38;
const maxGuessesAge = 6;       // Using constant variables to set conditions that won't change.  My age is 38, the maximum guesses we have are 6.

let attemptedGuessesAge = 0;
let guessMessageAge = 'Guess my age in six tries or less!';     // The number of tries the user has made, initially set to zero, and a variable to store the message.

while(attemptedGuessesAge < maxGuessesAge){
  const userGuessAge = parseInt(prompt(guessMessageAge));
  attemptedGuessesAge++;       // The while loop runs as long as the attempted guesses are fewer than the maximum guesses. It prompts the user to guess my age, stores the result in a variable, and then increments the attempted guesses up by one.

  if (userGuessAge < kyleAge){
    guessMessageAge = `That's too low! Guess again.`;
    console.log(userGuessAge);
  } else if (userGuessAge > kyleAge){
    guessMessageAge = 'Too High! Guess Again';
    console.log(userGuessAge);
  } else if (userGuessAge === kyleAge) {
    alert(`Correct! You guessed my age in ${attemptedGuessesAge} attempt(s)`);
    console.log(attemptedGuessesAge)
    break;

  }  // These if..else statements check the users's guess against the constant of my age. Too low, message says so, move to next condition. If guess is too high, message says so, moves to next condition. If the user guess strictly equals my age, we return an alert that the user got it right and we stop the code with a break.
}


// Array Guessing game logic.
// Set a constant for the max guesses, and variables for our initial counters for correct guesses and attempted guesses.

const maxGuessesGames = 6;

let correctCount = 0;
let attemptedGuessesGames = 0;  

// Here I'm declaring a constant for my games list, which is unchanging as far as the user is concerned.
const kyleGames = [
  `Dungeon's & Dragons`,
  `Fallout: New Vegas`,
  `Fallout 2`,
  `Deus Ex`,
  `Morrowind`,
  `S.T.A.L.K.E.R. - Shadows of Chernobyl`,
  `Nethack`,
  `Azul`,
  `Thornwatch`,
  `Clank! Legacy`
];   


// this is a function declared to process the gameName to lower case. Because I may need more validation later so we're parking that processing in this function to make it easier later on.
function processGameName(gameName){
  return gameName.toLowerCase()
  ;
};   

while (attemptedGuessesGames < maxGuessesGames){
  const userGuessGame = prompt("Can you guess of my favorite games?");
  console.log(userGuessGame);
  attemptedGuessesGames++;   // the while loop runs as long as our attempted guesses is less than our max guesses.  It prompts the user for a guess, and stores the result under a userGuessGame variable, and increments the attempted guesses up by one.

  if (typeof userGuessGame === 'string'){
    const lowerGuess = processGameName(userGuessGame);
    let match = false;
    // this if statement starts by checking to see if the data type is a string, like all the elements in the array are. If it is, the user guess is stored as a function lowerGuess, to show it's been processed.  The match variable is estableshed and set to false for now. We're using it as a flag that the code is going to check against later.

    // This for functinon checks to see if the guess is in the array. index starts at zero, the condition runs as long as long as the current i is less than the total length of the array, and each iteration increments up by one.  If the processed guess in the lowerGuess function is strictly equal to the currentGame - which is any entry in the array - we set the match variable to true and then break.
    for (let i = 0; i < kyleGames.length; i++){
      let currentGame = processGameName(kyleGames[i]);  // the processGameName() function is run with the argument of kyleGames[i], which the function for every index iteration of the array.  Effectively, currentGame is the container that the processGameName function uses to inspect each element of the kyleGames array.

      if(lowerGuess === currentGame){  // This is the if statement that ultimately checks the processed guess against the 
        match = true;
        break;
      }
    }

    // if the match variable is set to true, the correct count iterates up by one. We go back to the top of the while loop, which will run again until the max guesses is reached.
    if (match){
      correctCount++;
    }
  }
}

alert(`You guessed ${correctCount} guesses correct. Nicely done!`);// finally, we return a message with a report of the correctCount variable.
console.log(correctCount);

