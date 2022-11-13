import { sprites, canvas } from '../app.js';

class Enemy {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;

        this.x = x ;
        this.y = y;

        this.speed = 50;

        this.sprite = null;

        this.init();
    }

    init() {
        this.sprite = sprites.enemy;
    }

    update(secondsPassed) { 
        this.y += this.speed * secondsPassed;

        this.draw();
    }

    draw() {
        canvas.drawImage(this);
    }
}

export default Enemy;