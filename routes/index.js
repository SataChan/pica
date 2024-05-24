var express = require('express');
var fs = require('fs');
var router = express.Router();

// import { status } from '../misc/misc';
const status = require('../misc/misc').status;
// import stage from '../stage';
const stage = require('../stage');
const { checkGame } = require('../stage/checkGame');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });

});

router.get('/currentInfo', function(req, res, next) {
  res.send({ success: true, info: stage.stageInfo });
})

router.post('/startGame', function(req, res, next) {
  if (stage.getStatus() == status.RUNNING) {
    res.send({ success: false, info: {}, message: '有正在进行中的游戏，请先结束游戏' });
  }
  if (stage.getStatus() == status.PENDING) {
    console.log(req.body)
    const { gamename, players } = req.body;
    if (checkGame(gamename, players)) {
      stage.startGame(gamename, players);
      res.send({ success: true, info: {}, message: '游戏已开始' });
    } else {
      res.send({ success: false, info: {}, message: '不支持此游戏' })
    }
  }
})

router.get('/closeGame', function(req, res, next) {
  if (stage.getStatus() == status.RUNNING) {
    // fs.writeFileSync('./lastGame.json', JSON.stringify(currentInfo));
    stage.closeGame();
    res.send({ success: true, info: {}, message: '当前游戏已结束'});
  }
})

module.exports = router;
