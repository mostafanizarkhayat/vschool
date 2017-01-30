var readlineSync = require('readline-sync');
var userNeed = readlineSync.question('what do you want?');

var userChoose=require('./game');
userChoose.playersWinners(userNeed);