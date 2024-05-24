// import { status } from '../misc/misc';
const status = require('../misc/misc').status;
const Game = require('./game');

module.exports = {
  stageInfo: {
    status: status.PENDING,
    gameInfo: {},
  },

  getStatus: function() {
    return this.stageInfo.status;
  },

  startGame: function(gamename, players) {
    this.stageInfo.status = status.RUNNING;
    this.stageInfo.gameInfo = new Game(gamename, players);
  },

  closeGame: function() {
    this.stageInfo.status = status.PENDING;
  },

}

