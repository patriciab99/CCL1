import global from "./global.js";

function handleKeyDown(e, player) {
  if (e.key === "ArrowLeft" || e.key === "a") player.dx = -player.speed;
  if (e.key === "ArrowRight" || e.key === "d") player.dx = player.speed;
}

function handleKeyUp(e, player) {
  if (e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "a" || e.key === "d") player.dx = 0;
}

function handleMouseMove(e, player) {
  const rect = global.canvas.getBoundingClientRect();
  player.x = e.clientX - rect.left - player.width / 2;
}

export { handleKeyDown, handleKeyUp, handleMouseMove };
