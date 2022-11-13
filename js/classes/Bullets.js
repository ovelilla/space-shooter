class Bullets {
    constructor() {
        this.bullets = [];
    }

    add(bullet) {
        this.bullets = [...this.bullets, bullet];
    }

    delete(i) {
        this.bullets = this.bullets.filter((bullet, index) => index !== i);
    }

    clear() {
        this.bullets = [];
    }

    update(secondsPassed) {
        this.bullets.forEach((bullet, index) => {
            if (!bullet.visible) {
                this.delete(index);
                return;
            }

            bullet.update(secondsPassed);
        });
    }
}

export default Bullets;
