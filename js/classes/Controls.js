class Controls {
    constructor() {
        this.keyMap = {};

        this.init();
    }

    init() {
        window.addEventListener('keydown', this.keydown.bind(this));
        window.addEventListener('keyup', this.keyup.bind(this));
    }

    keydown(e) {
        this.keyMap[e.key] = true;
    }

    keyup(e) {
        this.keyMap[e.key] = false;
    }
}

export default Controls;
