import Enemy from './Enemy.js';

import { canvas } from '../app.js';

class Enemies {
    constructor(rows) {
        this.cols = 0;
        this.rows = rows;

        this.width = 80;
        this.height = 80;

        this.x = 0;
        this.y = 0;

        this.minGapX = 40;
        this.minGapY = 40;

        this.initX = 100;
        this.initY = - (this.height + this.minGapY) * rows;

        this.enemies = [];

        this.init();
    }

    init() {
        this.space = canvas.canvas.width - this.initX * 2;
        this.cols = Math.floor(this.space / (this.width + this.minGapX));
        this.gapX = (this.space - this.cols * this.width) / (this.cols - 1);
        this.total = this.cols * this.rows;

        this.x = this.initX;
        this.y = this.initY;

        for (let i = 1; i <= this.total; i++) {
            const enemy = new Enemy(this.width, this.height, this.x, this.y);
            this.add(enemy);

            if (i % this.cols === 0) {
                this.x = this.initX;
                this.y += this.height + this.minGapY;
                continue;
            }

            this.x += this.width + this.gapX;
        }
    }

    add(enemy) {
        this.enemies = [...this.enemies, enemy];
    }

    delete(i) {
        this.enemies = this.enemies.filter((enemy, index) => index !== i);
    }

    clear() {
        this.enemies = [];
    }

    update(secondsPassed) {
        this.enemies.forEach(enemy => enemy.update(secondsPassed));
    }
}

export default Enemies;
