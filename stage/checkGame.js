const gameCond = {
    forestbattle: (players) => {
        return (9 <= players) && (players <= 11);
    }
}

const checkGame = (gamename, players) => {
    if (!(gamename in gameCond)) return false;
    return gameCond[gamename](players);
}

const nameMap = {
    forestbattle: '森林之战',
}

module.exports = {
    checkGame,
    nameMap,
}
