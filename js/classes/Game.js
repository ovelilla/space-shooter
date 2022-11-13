import Explosion from '../classes/Explosion.js';

import { canvas, spaceship, bullets, enemies, explosions } from '../app.js';

class Game {
    constructor() {
        this.secondsPassed = 0;
        this.oldTimeStamp = 0;

        this.init();
    }

    init() {
        window.requestAnimationFrame(timeStamp => this.gameLoop(timeStamp));
    }

    gameLoop(timeStamp) {
        this.secondsPassed = (timeStamp - this.oldTimeStamp) / 1000;
        this.oldTimeStamp = timeStamp;

        canvas.clear();

        spaceship.update(this.secondsPassed);
        bullets.update(this.secondsPassed);
        enemies.update(this.secondsPassed);
        explosions.update(this.secondsPassed);

        this.checkCollision();

        window.requestAnimationFrame(timeStamp => this.gameLoop(timeStamp));
    }

    checkCollision() {
        enemies.enemies.forEach((enemy, j) => {
            bullets.bullets.forEach((bullet, i) => {
                if (this.intersect(bullet.x, bullet.y, bullet.width, bullet.height, enemy.x, enemy.y, enemy.width, enemy.height)) {
                    bullets.delete(i);
                    enemies.delete(j);
    
                    explosions.add(new Explosion(enemy));
                }
            });

            if (spaceship.prueba && this.intersect(spaceship.x, spaceship.y, spaceship.width, spaceship.height, enemy.x, enemy.y, enemy.width, enemy.height)) {
                explosions.add(new Explosion(spaceship));

                spaceship.prueba = false
            }
        });
    }

    intersect(x1, y1, w1, h1, x2, y2, w2, h2) {
        return x2 <= w1 + x1 && x1 <= w2 + x2 && y2 <= h1 + y1 && y1 <= h2 + y2;
    }
}

export default Game;
