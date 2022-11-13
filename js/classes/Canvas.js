class Canvas {
    constructor() {
        this.canvas = null;
        this.context = null;
        
        this.init();
    }

    init() {
        this.canvas = document.getElementById('game');
        this.context = this.canvas.getContext('2d');

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    drawImage({ sprite, x, y, width, height }) {
        this.context.drawImage(sprite, x, y, width, height);
    }

    drawAnimation({ sprite, srcX, srcY, srcWidth, srcHeight, destX, destY, destWidth, destHeight }) {
        this.context.drawImage(sprite, srcX, srcY, srcWidth, srcHeight, destX, destY, destWidth, destHeight);
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

export default Canvas;
