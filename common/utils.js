import { bossesDict } from '../data/boss-data.js';
// import { thisRadioButtonGroup } from '../home/home.js';

export const clearAllRadios = (thisRadioButtonGroup) =>
    thisRadioButtonGroup.forEach(radioButton => radioButton.checked = false);
    // for (var i = 0; i < radList.length; i++) {
    //     if (radioButtonGroup[i].checked) document.getElementById(radioButtonGroup[i].id).checked = false;
    // }

// export const thisBoss = (function(thisRadioButtonGroup) {
//     bossesDict[thisRadioButtonGroup.value] || null;
// }());

export const makeUser = (formData) => {
    return {
        name: formData.get('name'),
        score: 0,
        completed: {},
    };
};

export function resetPlayer(player) {
    localStorage.removeItem(player);
}

export const getRandomIntInRange = (minInt, maxInt) => Math.floor(Math.random() * maxInt) + minInt;

export const resetGame = () => {

};

export const findById = (array, id) => array.find(item => item.id === id) || null;
    //return foundItem ? foundItem : null;

// function findById(array, id) {
//     for (let index = 0; index < array.length; index++) {
//         const item = array[index];
//         if (item.id === id) {
//             return item;
//         }
//     }

//     return null;
// }

export const shuffle = (array) => { //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
  
      // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
  
    return array;
};