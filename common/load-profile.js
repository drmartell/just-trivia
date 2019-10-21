import { getPlayer } from '../data/api.js';
import isDead from './is-dead.js';
import { USER_KEY } from '../home/home.js';

function loadProfile() {
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const hp = document.getElementById('hp');
    const gold = document.getElementById('gold');

    const user = getPlayer(USER_KEY);

    if (!user) window.location = './';

    name.textContent = user.name;
    avatar.src = '../assets/avatars/' + user.race + '.png';
    gold.textContent = user.gold;

    if (isDead(user)) hp.textContent = 'DOA';
    else hp.textContent = user.hp;
}

export default loadProfile;
