import { saveUser } from '../data/api.js';
import { makeUser, resetUser } from '../common/utils.js';

resetUser();

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

userSignUp.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(userSignUp);
    const user = makeUser(formData);
    saveUser(user);

    const bossId = formData.get('opponent');
    console.log('bossId: ' + bossId);
    window.location = 'quiz/?boss=' + bossId;
});