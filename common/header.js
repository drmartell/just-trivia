import { getPlayer } from '../data/api.js';
import { USER_KEY, OPPONENT_KEY } from '../home/home.js';

console.log('in header.js');
// I want this file to build a common header
// (common for both the index page and the quiz page)
// that will render DOM elements, and show scores if a
// game is in progress

// WOULD THERE BE SOME WAY TO MAKE THE FUNCTIONS I'M IMPORTING
// INTO IIFY'S SO THAT I COULD DIRECTLY IMPORT 'THISUSER' AND THE
// FUNCTION WOULD INVOKE AT THAT TIME?
// NOT SURE HOW TO DO IIFE'S WITH ARROW NOTATION?
const thisUser = getPlayer(USER_KEY);
const thisBoss = getPlayer(OPPONENT_KEY);

//const headerTag = document.getElementsByTagName('header')[0];
const pageBody = document.querySelector('body');
//const headerElement = document.createElement('header');
const headerDiv = document.createElement('div');
headerDiv.id = 'header-div';
//const mainElement = document.getElementsByName('main')[0];
const headerElement = document.getElementsByTagName('header')[0];

if (thisUser && thisBoss) {
    headerDiv.innerHTML = '' + 
`<h1>Bootcamper-inator</h1>
<img src="../assets/images/Heinz_Doofenshmirtz.png" alt="Heinz Doofenshmirtz">
<h2>A computer trivia game for those whose ego's can withstand it!</h2><div>Your score: ` + thisUser.score + `<p>`
+ thisBoss.name + `'s score: ` + thisBoss.score + `</p></div>`;
} else {
    headerDiv.innerHTML = '' + 
`<h1>Bootcamper-inator</h1>
<img src="../assets/images/Heinz_Doofenshmirtz.png" alt="Heinz Doofenshmirtz">
<h2>A computer trivia game for those whose ego's can withstand it!</h2>`;
}

console.log(pageBody);
console.log(headerElement);
//pageBody.appendChild(headerElement);
//pageBody.insertBefore(headerElement, mainElement);
headerElement.appendChild(headerDiv);


// headerTag.innerHTML = '' + 
// `<header>
// <h1>Bootcamper-inator</h1>
// <img src="../assets/images/Heinz_Doofenshmirtz.png" alt="Heinz Doofenshmirtz">
// <h2>A computer trivia game for those whose ego's can withstand it!</h2>`
// + (thisUser && thisBoss) ? (`<div>Your score: ` + thisUser.score + `<br>`
// + thisBoss.name + `'s score: </div>`) : '' + `</header>`;
