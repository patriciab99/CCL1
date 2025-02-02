import global from "./global.js";

class Player {
  constructor() {
    this.x = global.canvas.width / 2 - 40;
    this.y = global.canvas.height - 220;
    this.width = 200;
    this.height = 200;
    this.speed = 7;
    this.dx = 0;

    this.image = new Image();
    this.image.src = "./images/possum4.png";
    this.image.onload = () => console.log("Player image loaded");
  }

  move() {
    this.x += this.dx;
    if (this.x < 0) this.x = 0;
    if (this.x + this.width > global.canvas.width) this.x = global.canvas.width - this.width;
  }

  draw() {
    global.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  setImage(src) {
    this.image.src = src;
  }

  collidesWith(object) {
    return (
      this.x < object.x + object.width &&
      this.x + this.width > object.x &&
      this.y < object.y + object.height &&
      this.y + this.height > object.y
    );
  }
}

export default Player;
