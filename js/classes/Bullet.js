import { sprites, canvas } from '../app.js';

class Bullet {
    constructor(x, y) {
        this.width = 10;
        this.height = 20;

        this.x = x - this.width / 2;
        this.y = y - this.height;

        this.speed = 800;

        this.visible = true;

        this.sprite = null;

        this.init();
    }

    init() {
        this.sprite = sprites.bullet;
    }

    update(secondsPassed) {
        if (this.y + this.height < 0) {
            this.visible = false;
            return;
        }

        this.y -= this.speed * secondsPassed;

        this.draw()
    }

    draw() {
        canvas.drawImage(this);
    }
}

export default Bullet;