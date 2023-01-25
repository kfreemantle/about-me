'use strict';

let userName = prompt('What\'s your name, please?');
console.log(userName);

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





/// scrap code from the lab1 project, included for reference of progress.

// //initial user question workflow, intended to generate FOUR question prompts and store four responses in different variables using the prompt function.
// let herodotusAge = 54;
// let userName = prompt("What's your name, junior historian?", "~name~");
// console.log(userName);
// let userAge = prompt("And how old are you, " + userName + "?");
// console.log(userAge);
// let ageDifferential = herodotusAge - userAge
// let userHistoricalEvent = prompt("Good, then you've got some time left. What's the earliest historical event you can name?");
// console.log(userHistoricalEvent);
// let userBook = prompt("Finally, what was the last GOOD book you read?");
// console.log(userBook);
// let userInitResponse = alert("Thanks, " + userName + ". You're " + userAge + " years old, " + (herodotusAge - userAge) + " years younger than Herodotus when he wrote Histories.  How would he have written about " + userHistoricalEvent + "?  Would it have been a better read than " + userBook + "?");
// console.log(userInitResponse);

// ////  comment out scripting for ease of testing
