class Sprites {
    async init() {
        this.spaceship = await this.load('/img/spaceship.png');
        this.bullet = await this.load('/img/bullet.png');
        this.enemy = await this.load('/img/enemy.png');
        this.explosion = await this.load('/img/explosion.png');
    }

    load(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = reject;
        });
    }
}

export default Sprites;