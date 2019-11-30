class Player {
  constructor(game) {
    this.game = game;
    this.width = 40;
    this.height = 40;
    this.x = canvas.width / 2;
    this.y = canvas.height - this.height - 3;
    this.color = 'blue';
    this.vx = 0;
    this.vy = 0;
    this.controller = {
      left: false,
      right: false,
    };
    // this.mouse = { x: canvas.width / 2, y: canvas.height - this.height - 3 };
  }

  keyEvent() {
    document.addEventListener('keydown', event => {
      //   console.log(event.keyCode);

      let keyState = event.type === 'keydown' ? true : false;
      //   console.log('Output for: Player -> keyEvent -> keyState', keyState);
      switch (event.keyCode) {
        case 37:
          this.controller.left = keyState;
          break;
        case 39:
          this.controller.right = keyState;
          break;
      }
    });
    document.addEventListener('keyup', event => {
      let keyState = event.type === 'keyup' ? false : true;
      //   console.log('Output for: Player -> keyEvent -> keyState', keyState);
      switch (event.keyCode) {
        case 37:
          this.controller.left = keyState;
          break;
        case 39:
          this.controller.right = keyState;
          break;
      }
    });
  }

  draw() {
    if (this.controller.left) {
      this.vx -= 2;
    }
    if (this.controller.right) {
      this.vx += 2;
    }

    this.x += this.vx;
    this.vx *= 0.9;

    if (this.x < -this.width) {
      this.x = this.game.canvas.width;
    } else if (this.x > this.game.canvas.width) {
      this.x = -this.width;
    }

    this.game.ctx.fillStyle = this.color;
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.game.ctx.fill();
    this.game.ctx.strokeStyle = this.color;
    this.game.ctx.lineWidth = 10;
    this.game.ctx.beginPath();
    this.game.ctx.moveTo(this.x + 12, this.y);
    this.game.ctx.lineTo(this.x + 12, this.y - 15);
    this.game.ctx.stroke();
    this.game.ctx.beginPath();
    this.game.ctx.moveTo(this.x + 27, this.y);
    this.game.ctx.lineTo(this.x + 27, this.y - 15);
    this.game.ctx.stroke();
  }
  //   moveWithMouse() {
  //     this.x = this.mouse.x;
  //     this.y = this.mouse.y;
  //   }

  //   getMouse() {
  //     document.addEventListener('mousemove', event => {
  //       this.mouse.x = event.clientX;
  //       //   this.mouse.y = event.clientY;
  //       if (this.x + this.width < 0) {
  //         this.mouse.x = 0;
  //       }
  //       if (this.x + this.width > this.game.canvas.width) {
  //         this.mouse.x = this.game.canvas.width - this.width - 5;
  //       }
  //     });
  //   }
}
