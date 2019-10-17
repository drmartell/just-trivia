function findById(array, id) {
    return array.find(item => item.id === id) || null;
    //return foundItem ? foundItem : null;
}

// function findById(array, id) {
//     for (let index = 0; index < array.length; index++) {
//         const item = array[index];
//         if (item.id === id) {
//             return item;
//         }
//     }

//     return null;
// }

export default findById;
