const forestbattle = require('./game/forestbattle');
const { nameMap } = require('./checkGame');

const gameMap = {
    forestbattle,
}

class Game {
    constructor(gamename, players) {
        this.gamename = gamename;
        this.cnname = nameMap[gamename];
        this.players = players;
        const cgame = gameMap[gamename];
        this.field = new cgame(players);
    }
}

module.exports = Game;