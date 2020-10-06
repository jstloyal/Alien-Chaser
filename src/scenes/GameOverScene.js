import Phaser from "phaser";
import logoBg from "../../assets/images/my-soldier.png";
import enemyImg2 from "../../assets/images/my-soldier.png";

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({key: "GameOverScene"});
  }

  preload() {
    this.load.image("logoBg", logoBg);
    this.load.image("enemyImg2", enemyImg2);
  }

  create() {
    this.input.keyboard.enabled = false;
    this.input.keyboard.preventDefault = false;

    const height = this.scale.height * 0.5;
    const width = this.scale.width * 0.5;
    this.logo = this.add
      .sprite(width * 1.7, height, "logoBg")
      .setScale(0.7, 0.7);
  }
}
