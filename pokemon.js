class Pokemon {
  constructor(props) {
    this.name = props.name;
    this.image = props.image;
    this.posX = props.posX;
    this.posY = props.posY;
    this.size = 100;
  }
  draw() {
    image(this.img, this.posX, this.posY, this.size, this.size);
  }

  clickOver() {
    if (
      mouseX > this.posX &&
      mouseX < this.size + this.posX &&
      mouseY > this.posY &&
      mouseY < this.size + this.posY
    ) {
      console.log(this.name);
    }
  }

  set setPosX(newPos) {
    this.posX = newPos;
  }

  set setPosY(newPos) {
    this.posY = newPos;
  }

  get getPosX() {
    return this.posX;
  }

  get getPosY() {
    return this.posY;
  }
}
