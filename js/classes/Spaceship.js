import Bullet from './Bullet.js';

import { sprites, canvas, controls, bullets } from '../app.js';

class Spaceship {
    constructor() {
        this.width = 100;
        this.height = 100;

        this.x = 0;
        this.y = 0;

        this.moveSpeed =  600;
        this.shootDelay = 100;

        this.sprite = null;

        this.timeout = null;

        this.init();
    }

    init() {
        this.sprite = sprites.spaceship;

        this.x = canvas.canvas.width / 2 - this.width / 2;
        this.y = canvas.canvas.height - canvas.canvas.height * 20 / 100;
    }

    update(secondsPassed) {
        if (controls.keyMap['ArrowUp'] && this.y > 0) {
            this.y -= this.moveSpeed * secondsPassed;
        }

        if (controls.keyMap['ArrowRight'] && this.x - this.width / 2 < canvas.canvas.width - this.width) {
            this.x += this.moveSpeed * secondsPassed;
        }

        if (controls.keyMap['ArrowDown'] && this.y < canvas.canvas.height - this.height) {
            this.y += this.moveSpeed * secondsPassed;
        }

        if (controls.keyMap['ArrowLeft'] && this.x + this.width / 2 > 0) {
            this.x -= this.moveSpeed * secondsPassed;
        }

        if (controls.keyMap[' '] && !this.timeout) {
            this.shoot();

            this.timeout = setTimeout(() => this.timeout = null, this.shootDelay);
        }

        this.draw();
    }

    shoot() {
        const bullet = new Bullet(this.x + this.width / 2, this.y);

        bullets.add(bullet);
    }

    draw() {
        canvas.drawImage(this);
    }
}

export default Spaceship;
