class Player {
    constructor(players, persona) {
        this.hp = 20;
        this.bags = [];
        this.persona = persona;
        for (let i = 0; i < players; i ++) this.bags.push(i);
        this.skills = [];
    }
}

// persona : ♠ ♥ ♣ J Q K
// eg. ♠J : Ja; ♥Q: Qb; ♣K: Kc; Joker: Jo;

class ForestBattle {
    constructor(players) {
        const persona = ['Ja', 'Jb', 'Jc', 'Qa', 'Qb', 'Qc', 'Ka', 'Kb', 'Kc'];
        while (persona.length < players) persona.push('Jo');
        persona.sort((a, b) => (Math.random() - 0.5));
        this.round = 0;
        this.players = [];
        for (let i = 0; i < players; i ++) {
            this.players.push(new Player(players, persona[i]));
        }
    }
}

module.exports = ForestBattle;
