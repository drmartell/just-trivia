import { savePlayer } from '../data/api.js';
import { bossesDict } from '../data/boss-data.js';
import { makeUser, resetPlayer } from '../common/utils.js';

export const USER_KEY = 'user';
export const OPPONENT_KEY = 'opponent';
export let bossId;

if (document.title === 'Bootcamp-inator') {
    //resetUser(); // Cannot access 'resetUser' before initialization
    resetPlayer(USER_KEY);
    resetPlayer(OPPONENT_KEY);

    const userSignUp = document.getElementById('user-sign-up');
    console.log(userSignUp);
    console.log(!!document.querySelector('input[name="opponent"]:checked'));
    // export let thisRadioButtonGroup; // = document.querySelector('input[name="opponent"]:checked') ? document.querySelector('input[name="opponent"]:checked').value : null; //document.getElementsByName('opponent')[0];
    // console.log(thisRadioButtonGroup);

    const boss1 = document.getElementById('boss1-img');
    const boss2 = document.getElementById('boss2-img');
    const boss3 = document.getElementById('boss3-img');

    // const bossEvent = () => {
    //     const audioElement = document.createElement('audio');
    //     audioElement.setAttribute('src', '../assets/sounds/Freesound_ding.wav_by tim.kahn.mp3)');
    //     audioElement.play();
    // };

    // boss1.addEventListener('click', bossEvent);
    // boss2.addEventListener('click', bossEvent);
    // boss3.addEventListener('click', bossEvent);

    if (userSignUp) {
        userSignUp.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(userSignUp);
            const user = makeUser(formData);
            savePlayer(USER_KEY, user);

            bossId = formData.get('opponent');
            console.log('bossId: ' + bossId);
            savePlayer(OPPONENT_KEY, bossesDict[bossId]);
            //thisRadioButtonGroup = document.querySelector('input[name="opponent"]:checked') ? document.querySelector('input[name="opponent"]:checked').value : null;
            window.location = 'quiz/?boss=' + bossId;
        });
    }
}
