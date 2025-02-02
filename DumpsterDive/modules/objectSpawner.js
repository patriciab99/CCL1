import global from "./global.js";
import GameObject from "./objects.js";

const foodImages = ["./images/strawberry3.png", "./images/frog2.png", "./images/toast4.png", "./images/apfel3.png", "./images/salat.png", "./images/pizza2.png"];
const trashImages = ["./images/onion.png", "./images/banane3.png", "./images/chocolate2.png"];

function spawnObjects() {
  setInterval(() => {
    if (global.gameOver || !global.gameRunning) return;

    const isFood = Math.random() > 0.4;
    const x = Math.random() * (global.canvas.width - 50);
    const y = -50;

    if (isFood) {
      const food = new GameObject(x, y, 50, 50, foodImages[Math.floor(Math.random() * foodImages.length)], "food");
      global.foodItems.push(food);
    } else {
      const trash = new GameObject(x, y, 50, 50, trashImages[Math.floor(Math.random() * trashImages.length)], "trash");
      global.trashItems.push(trash);
    }
  }, global.spawnRate);
}

export default spawnObjects;
