import Phaser from 'phaser';
import logo from '../../assets/images/my-soldier.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.spritesheet('logo', logo, {
      frameWidth: 145,
      frameHeight: 190,
      margin: 8,
      spacing: 15,
    });
  }

  create() {
    this.scene.start('Preloader');
  }
}
