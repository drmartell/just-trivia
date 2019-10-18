import loadProfile from '../common/load-profile.js';
import findById from '../common/find-by-id.js';
import quests from '../data/quest-data.js';

loadProfile();

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = findById(quests, questId);