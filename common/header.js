import { getPlayer } from '../data/api.js';
import { USER_KEY, OPPONENT_KEY } from '../home/home.js';

const thisUser = getPlayer(USER_KEY);
const thisBoss = getPlayer(OPPONENT_KEY);
const headerDiv = document.createElement('div');
headerDiv.id = 'header-div';
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

headerElement.appendChild(headerDiv);

export function updateHeader() {
    const theHeader = document.getElementById('header-div');

    if (thisUser && thisBoss) {
        console.log('updating');
        theHeader.innerHTML = '' + 
    `<h1>Bootcamper-inator</h1>
    <img src="../assets/images/Heinz_Doofenshmirtz.png" alt="Heinz Doofenshmirtz">
    <h2>A computer trivia game for those whose ego's can withstand it!</h2><div>Your score: ` + thisUser.score + `<p>`
    + thisBoss.name + `'s score: ` + thisBoss.score + `</p></div>`;
    } else {
        theHeader.innerHTML = '' + 
    `<h1>Bootcamper-inator</h1>
    <img src="../assets/images/Heinz_Doofenshmirtz.png" alt="Heinz Doofenshmirtz">
    <h2>A computer trivia game for those whose ego's can withstand it!</h2>`;
    }

}