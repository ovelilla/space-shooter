import Sprites from './classes/Sprites.js';

import Canvas from './classes/Canvas.js';
import Controls from './classes/Controls.js';

import Spaceship from './classes/Spaceship.js';
import Bullets from './classes/Bullets.js';
import Enemies from './classes/Enemies.js';
import Explosions from './classes/Explosions.js';

import Game from './classes/Game.js';


export const sprites = new Sprites();
await sprites.init();

export const canvas = new Canvas();
export const controls = new Controls();

export const spaceship = new Spaceship();
export const bullets = new Bullets();
export const enemies = new Enemies(4);
export const explosions = new Explosions();

export const game = new Game();
