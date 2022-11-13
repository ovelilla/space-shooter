class Explosions {
    constructor() {
        this.explosions = [];
    }

    add(explosion) {
        this.explosions = [...this.explosions, explosion];
    }

    delete(i) {
        this.explosions = this.explosions.filter((explosion, index) => index !== i);
    }

    clear() {
        this.explosions = [];
    }

    update(secondsPassed) {
        this.explosions.forEach((explosion, index) => {
            if (explosion.finish) {
                this.delete(index);
                return;
            }

            explosion.update(secondsPassed);
        });
    }
}

export default Explosions;
