const global = {};

global.canvas = document.getElementById("gameCanvas");
global.ctx = global.canvas.getContext("2d");

global.startScreen = document.getElementById("start-screen");
global.endScreen = document.getElementById("end-screen");
global.winScreen = document.getElementById("win-screen");

global.startButton = document.getElementById("start-button");
global.reloadButton = document.getElementById("reload-button");
global.backButton = document.getElementById("back-button");

global.endMessage = document.getElementById("end-message");
global.winMessage = document.getElementById("win-message");

global.score = 0;
global.health = 3;
global.gameRunning = false;
global.gameOver = false;
global.level = 1;
global.pointsToWin = 100;
global.foodItems = [];
global.trashItems = [];
global.spawnRate = 800;

global.resetGameState = function () {
  global.score = 0;
  global.health = 3;
  global.level = 1;
  global.gameRunning = true;
  global.gameOver = false;
  global.foodItems = [];
  global.trashItems = [];
};

export default global;
