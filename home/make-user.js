export const makeUser = (formData) => {
    return {
        name: formData.get('name'),
        opponent: formData.get('opponent'),
        score: 0,
        completed: {},
    };
};

// export const newMakeUser = (formData) => ({
//     name: formData.get('name'),
//     race: formData.get('race'),
//     hp: 35,
//     gold: 0,
//     completed: {}
// });