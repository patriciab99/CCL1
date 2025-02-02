import global from "./global.js";
import Player from "./player.js";
import { handleKeyDown, handleKeyUp, handleMouseMove } from "./input.js";
import spawnObjects from "./objectSpawner.js";

const player = new Player();

const floor = {
  x: 0,
  y: global.canvas.height - 25,
  width: global.canvas.width,
  height: 25,
  color: "#391E1B",
};

// Clear canvas each frame
function clearCanvas() {
  global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height);
}

function drawFloor() {
  global.ctx.fillStyle = floor.color;
  global.ctx.fillRect(floor.x, floor.y, floor.width, floor.height);
}

function drawScore() {
  global.ctx.fillStyle = 'rgba(52, 29, 26, 0.5)';
  global.ctx.fillRect(0, 0, 1080, 55);
  global.ctx.fillStyle = "white";
  global.ctx.font = "30px Arial";
  global.ctx.fillText(`Score: ${global.score}`, 20, 40);
}

function drawHealth() {
  global.ctx.fillStyle = "#E1B07E";
  global.ctx.font = "30px Arial";
  global.ctx.fillText(`Health: ${global.health}`, 940, 40);
}

function checkCollisions() {
  global.foodItems = global.foodItems.filter((food) => {
    if (player.collidesWith(food)) {
      global.score += 10;
      return false; // Remove from array
    }
    return true; // Keep in array
  });
  
  global.trashItems = global.trashItems.filter((trash) => {
    if (player.collidesWith(trash)) {
      global.health -= 1;
      return false;
    }
    return true;
  });
}

// Update the game loop
function update() {
  if (!global.gameRunning || global.gameOver) return;
  
  clearCanvas();
  
  player.move();
  player.draw();
  
  global.foodItems.forEach((food) => {
    food.move();
    food.draw();
  });
  
  
  global.trashItems.forEach((trash) => {
    trash.move();
    trash.draw();
  });
  
  drawFloor();
  checkCollisions();
  drawScore();
  drawHealth();
  checkGameStatus();
  requestAnimationFrame(update);
}

// Start the game
function startGame() {
  global.resetGameState();
  global.startScreen.style.display = "none";
  global.canvas.style.display = "block";
  global.endScreen.style.display = "none";
  
  spawnObjects();
  update();
}
// Check if one of the ending conditions is met
function checkGameStatus() {
  if (global.health <= 0) {
    gameOverScreen();
  } else if (global.score >= global.pointsToWin) {
    winScreen();
  }
}

// Game Over  & Win Screen
function gameOverScreen() {
  global.gameOver = true;
  global.endMessage.textContent = "You're trash, game over!";
  global.endScreen.style.display = "block";
  global.canvas.style.display = "none";
}

function winScreen() {
  global.gameRunning = false;
  global.gameOver = true;
  global.winMessage.textContent = "✨Yay✨ You collected enough food!";
  global.winScreen.style.display = "block";
}

// Event Listeners
document.addEventListener("keydown", (e) => handleKeyDown(e, player));
document.addEventListener("keyup", (e) => handleKeyUp(e, player));
global.canvas.addEventListener("mousemove", (e) => handleMouseMove(e, player));
global.startButton.addEventListener("click", startGame);
global.reloadButton.addEventListener("click", () => window.location.reload());
global.backButton.addEventListener("click", () => window.location.reload());

export { startGame, gameOverScreen };
