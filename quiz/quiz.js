import loadProfile from '../common/load-profile.js';
import { findById } from '../common/utils.js';
import { bossesDict } from '../data/boss-data.js';

//loadProfile();

const searchParams = new URLSearchParams(window.location.search);
const bossId = searchParams.get('boss');
//const bossBehavior = findById(bosses, bossId);

if (!bossId) window.location = '../'; //if not boss for some reason, return to homepage (like navigation was done directly)

const bossCorrectPct = bossesDict[bossId].correctPct;

const quizHeaderH2 = document.getElementById('quiz-header-h2');
console.log(quizHeaderH2);
quizHeaderH2.textContent = bossId;
