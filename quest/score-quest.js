function scoreQuest(choice, questId, user) {
    // add hp to user according to the choice's consequences
    user.hp += choice.hp;
    // add gold to the user according to the choices consqencuewbnf
    user.gold += choice.gold;
    // set this quest id to completed in the user
    user.completed[questId] = true;
}

export default scoreQuest;