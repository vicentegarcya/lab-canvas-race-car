class Car {
    constructor(ctx, x) {
        this.ctx = ctx;
        this.x = 225;
        this.y = 550;

        this.width = 52;
        this.height = 104;

        this.img = new Image();
        this.img.src = 'images/car.png';

        this.speed = 5;

        this.vx = 0;

        this.movements = {
            left: false,
            right: false
        }
    }

    draw() {
        this.ctx.save();

        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
        )

        this.ctx.restore();
    }

    setupListeners(event) {
        const status = event.type === 'keydown';

        if(event.keyCode === 37) {
            this.movements.left = status;
        }

        if(event.keyCode === 39) {
            this.movements.right = status;
        }
      }

    move() {
        if (!this.movements.right && !this.movements.left) {
            this.vx = 0;
        }

        if (this.movements.right) {
            this.vx = this.speed;
          }

        if (this.movements.left) {
          this.vx = -this.speed;
        }

        this.x += this.vx;

        if (this.x <= 70) {
            this.x = 70;
        }

        if(this.x >= 380) {
            this.x = 380;
        }
    }

    collidesWith(obstacle){
        if (
            this.x < obstacle.x + obstacle.width &&
            this.x + this.width > obstacle.x &&
            this.y < obstacle.y + obstacle.height &&
            this.y + this.height > obstacle.y
        ){
            return true;
        }

        return false;
    }
}