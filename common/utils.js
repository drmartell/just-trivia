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
