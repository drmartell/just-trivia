export const savePlayer = (playerKey, player) => {
    const json = JSON.stringify(player);
    localStorage.setItem(playerKey, json);
};

export const getPlayer = (player) => {
    const json = localStorage.getItem(player);
    if (!json) return null;
    const thisPlayer = JSON.parse(json);
    return thisPlayer;
};

export const getQuestions = () => {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open('GET', `https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`, false);
    Httpreq.send(null);        
    const questionsObj = JSON.parse(Httpreq.responseText);
    return questionsObj.results;
};