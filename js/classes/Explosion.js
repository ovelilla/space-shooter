import { sprites, canvas } from '../app.js';

class Explosion {
    constructor(target) {
        this.target = target;

        this.srcX = 0;
        this.srcY = 0;

        this.srcWidth = 0;
        this.srcHeight = 0;

        this.destX = 0;
        this.destY = 0;

        this.destWidth = 0;
        this.destHeight = 0;

        this.spriteCols = 8;
        this.spriteRows = 6;

        this.currentCol = 0;
        this.currentRow = 0;

        this.currentFrame = 0;
        this.totalFrames = 0;
        
        this.finish = false;

        this.sprite = null;

        this.init();
    }

    init() {
        this.sprite = sprites.explosion;

        this.srcWidth = this.sprite.width / this.spriteCols;
        this.srcHeight = this.sprite.height / this.spriteRows;

        this.destX = this.target.x - this.target.width / 2;
        this.destY = this.target.y - this.target.height / 2;

        this.destWidth = this.target.width * 2;
        this.destHeight = this.target.height * 2;

        this.totalFrames = this.spriteCols * this.spriteRows;
    }

    update() {
        this.currentCol = this.currentCol % this.spriteCols;
        this.currentRow = this.currentRow % this.spriteRows;

        this.srcX = this.currentCol * this.srcWidth;
        this.srcY = this.currentRow * this.srcHeight;

        this.draw();

        this.currentCol++;
        this.currentCol % this.spriteCols === 0 && this.currentRow++;

        this.finish = this.currentFrame++ === this.totalFrames;
    }

    draw() {
        canvas.drawAnimation(this);
    }
}

export default Explosion;