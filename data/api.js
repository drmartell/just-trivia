// I GENERALIZED THESE SO THAT THEY CAN BE USED TO SAVE THE
// HUMAN PLAYER OR THE COMPUTER
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