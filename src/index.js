import Phaser from 'phaser';
import './styles/style.css';
import config from './config/config';
import GameScene from './scenes/GameScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add("Game", GameScene);
  }
}

window.game = new Game();
