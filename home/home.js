import { saveUser } from '../data/api.js';
import { makeUser } from './make-user.js';

const userSignUp = document.getElementById('user-sign-up');
// const radioButtonGroup = document.getElementsByName('radioList');
const boss1 = document.getElementById('boss1');
const boss2 = document.getElementById('boss2');
const boss3 = document.getElementById('boss3');

const bossEvent = () => {
    // do something like play a sound to indicate that the selection was made or that
    // the level is not unlocked yet
};

boss1.addEventListener('click', bossEvent);
boss2.addEventListener('click', bossEvent);
boss3.addEventListener('click', bossEvent);

userSignUp.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(userSignUp);
    const user = makeUser(formData);
    saveUser(user);
    // window.location = 'map';
    window.location = 'quiz';
});