import global from "./global.js";

class GameObject {
  constructor(x, y, width, height, imageSrc, type) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
    this.image = new Image();
    this.image.src = imageSrc;
    this.dy = Math.random() * 3 + 1;
  }

  move() {
    this.y += this.dy;
  }

  draw() {
    global.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

export default GameObject;
